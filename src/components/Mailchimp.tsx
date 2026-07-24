"use client";

import { newsletter } from "@/resources";
import { Badge, Button, Column, Heading, Row, Text } from "@once-ui-system/core";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  if (newsletter.display === false) return null;

  return (
    <Column
      position="relative"
      fillWidth
      marginY="32"
      background="surface"
      border="brand-alpha-medium"
      radius="xl"
      padding="32"
      gap="32"
      style={{
        boxShadow: "0 0 32px var(--brand-alpha-weak), inset 0 1px 0 var(--neutral-alpha-medium)",
        overflow: "hidden",
      }}
      s={{ style: { padding: "24px", gap: "24px" } }}
      {...flex}
    >
      <Row
        fillWidth
        vertical="center"
        gap="32"
        style={{ flexDirection: "row" }}
        s={{
          style: {
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* ── Left: tag + headline ── */}
        <Column flex={1} gap="16" s={{ style: { alignItems: "center", textAlign: "center" } }}>
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
            variant="display-strong-m"
            style={{ lineHeight: "1.1", letterSpacing: "-0.03em" }}
          >
            {newsletter.title}
          </Heading>
        </Column>

        {/* ── Right: description + CTAs ── */}
        <Column
          flex={1}
          gap="24"
          vertical="center"
          s={{ style: { alignItems: "center", textAlign: "center", width: "100%" } }}
        >
          <Text variant="body-default-l" onBackground="neutral-medium" wrap="balance">
            {newsletter.description}
          </Text>

          <Row
            gap="12"
            vertical="center"
            s={{ style: { flexDirection: "column", alignItems: "center", width: "100%" } }}
          >
            <Row fillWidth s={{ style: { width: "100%" } }}>
              <Button
                href="/contact"
                variant="primary"
                size="l"
                arrowIcon
                fillWidth
                style={{
                  boxShadow: "0 0 20px var(--brand-alpha-medium)",
                }}
              >
                Tell Me About Your Project
              </Button>
            </Row>

            <Row fillWidth s={{ style: { width: "100%" } }}>
              <Button
                variant="secondary"
                size="l"
                prefixIcon="calendar"
                fillWidth
                data-cal-namespace="30min"
                data-cal-link="sandip-samanta-m7zs9y/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule a Call
              </Button>
            </Row>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};
