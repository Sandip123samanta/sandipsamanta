import { ContactForm } from "@/components";
import { baseURL, contact, person, social } from "@/resources";
import {
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function ContactPage() {
  const essentialSocials = social.filter((s) => s.essential && s.icon !== "email");

  return (
    <Column
      maxWidth="m"
      fillWidth
      paddingY="xl"
      gap="64"
      s={{
        style: {
          paddingTop: "24px",
          paddingBottom: "24px",
          gap: "32px",
          width: "100%",
          maxWidth: "100%",
        },
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Hero heading + availability badge ── */}
      <RevealFx translateY="4" fillWidth>
        <Column fillWidth gap="32" s={{ style: { gap: "20px", width: "100%" } }}>
          {/* Available for new projects Badge */}
          <Badge
            background="success-alpha-weak"
            border="success-alpha-medium"
            onBackground="success-strong"
            paddingX="12"
            paddingY="4"
            radius="full"
            fitWidth
          >
            <Row vertical="center" gap="8">
              <Row
                width="8"
                height="8"
                radius="full"
                background="success-strong"
                style={{ boxShadow: "0 0 8px var(--success-strong)" }}
              />
              <Text variant="label-default-s" onBackground="success-strong">
                Available for new projects
              </Text>
            </Row>
          </Badge>

          <Heading
            variant="display-strong-l"
            style={{ lineHeight: "1.05", letterSpacing: "-0.04em" }}
          >
            Let's build
            <br />
            something great.
          </Heading>

          <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "480px" }}>
            Have a project in mind or want to explore working together? Fill out the form and I'll
            get back to you within 24 hours.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="4" delay={0.1} fillWidth>
        <Line />
      </RevealFx>

      {/* ── Two-column body ── */}
      <RevealFx translateY="8" delay={0.15} fillWidth>
        <Row
          fillWidth
          vertical="start"
          gap="0"
          style={{ flexDirection: "row" }}
          s={{ style: { flexDirection: "column", gap: "32px", width: "100%" } }}
        >
          {/* Left: contact info + schedule call */}
          <Column
            flex={1}
            fillWidth
            gap="32"
            paddingRight="xl"
            s={{ style: { paddingRight: "0", width: "100%" } }}
          >
            {/* Schedule a call pill */}
            <Column gap="12" fillWidth>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.1em" }}
              >
                BOOK A TIME
              </Text>
              <Row
                data-cal-namespace="30min"
                data-cal-link="sandip-samanta-m7zs9y/30min"
                data-cal-config='{"layout":"month_view"}'
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                vertical="center"
                style={{ cursor: "pointer", backdropFilter: "blur(var(--static-space-1))" }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">
                  <Text variant="body-default-s" onBackground="brand-weak">
                    Schedule a call
                  </Text>
                </Row>
                <IconButton
                  data-cal-namespace="30min"
                  data-cal-link="sandip-samanta-m7zs9y/30min"
                  data-cal-config='{"layout":"month_view"}'
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            </Column>

            {/* Direct contact */}
            <Column gap="12" fillWidth>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.1em" }}
              >
                DIRECT CONTACT
              </Text>
              <Column gap="4" fillWidth>
                <Button
                  href={`mailto:${person.email}`}
                  variant="tertiary"
                  size="m"
                  prefixIcon="email"
                  fillWidth
                  style={{ justifyContent: "flex-start", paddingLeft: 0, wordBreak: "break-all" }}
                >
                  {person.email}
                </Button>
                <Button
                  href={`tel:${person.phone}`}
                  variant="tertiary"
                  size="m"
                  prefixIcon="phone"
                  fillWidth
                  style={{ justifyContent: "flex-start", paddingLeft: 0 }}
                >
                  {person.phone}
                </Button>
              </Column>
            </Column>

            {/* Social */}
            <Column gap="12" fillWidth>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                style={{ letterSpacing: "0.1em" }}
              >
                FIND ME ON
              </Text>
              <Row gap="8">
                {essentialSocials.map((s) => (
                  <IconButton
                    key={s.name}
                    href={s.link}
                    icon={s.icon}
                    variant="secondary"
                    size="m"
                    tooltip={s.name}
                    tooltipPosition="top"
                  />
                ))}
              </Row>
            </Column>
          </Column>

          {/* Vertical divider — desktop only */}
          <Column
            width="1"
            background="neutral-alpha-weak"
            style={{ alignSelf: "stretch", minHeight: "200px" }}
            s={{ hide: true }}
          />

          {/* Horizontal divider — mobile only */}
          <Line hide s={{ hide: false }} />

          {/* Right: form */}
          <Column
            flex={2}
            fillWidth
            paddingLeft="xl"
            s={{ style: { paddingLeft: "0", width: "100%" } }}
          >
            <ContactForm />
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
