"use client";

import { Button, Column, Heading, Input, Text, Textarea } from "@once-ui-system/core";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
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
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
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
    <Column
      as="form"
      onSubmit={handleSubmit}
      fillWidth
      padding="xl"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      style={{ backdropFilter: "blur(10px)" }}
      gap="24"
    >
      <Column gap="8">
        <Heading variant="display-strong-s">Let's Connect</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Have a question or want to work together? Drop me a message below.
        </Text>
      </Column>

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
          lines={5}
          required
        />
      </Column>

      <Button type="submit" fillWidth size="m" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </Column>
  );
};
export default ContactForm;
