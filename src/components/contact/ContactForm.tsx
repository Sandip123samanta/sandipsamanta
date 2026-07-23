"use client";

import { Button, Column, Heading, Input, Text, Textarea } from "@once-ui-system/core";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    submit?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string; submit?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          submit:
            result.message || "Failed to send message. Please check your Web3Forms access key.",
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: "An error occurred while sending your message. Please try again later.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Column
        fillWidth
        horizontal="center"
        vertical="center"
        padding="xl"
        radius="l"
        border="neutral-alpha-weak"
        background="surface"
        style={{ backdropFilter: "blur(10px)" }}
        gap="16"
      >
        <Heading variant="display-strong-xs">Message Sent!</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: "center" }}>
          Thank you for reaching out, {formData.name}. I've received your message and will get back
          to you as soon as possible.
        </Text>
        <Button
          variant="secondary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }}
          style={{ marginTop: "1rem" }}
        >
          Send another message
        </Button>
      </Column>
    );
  }

  return (
    <Column as="form" onSubmit={handleSubmit} fillWidth gap="24">
      <Column gap="16">
        <Input
          id="name"
          name="name"
          label="Your Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          errorMessage={errors.name}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          errorMessage={errors.email}
          required
        />
        <Textarea
          id="message"
          name="message"
          label="Message"
          placeholder="Hi, I'd love to talk about..."
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          errorMessage={errors.message}
          lines={6}
          required
        />
      </Column>

      {errors.submit && (
        <Text variant="body-default-s" onBackground="danger-weak">
          {errors.submit}
        </Text>
      )}

      <Button type="submit" fillWidth size="m" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </Column>
  );
};
export default ContactForm;
