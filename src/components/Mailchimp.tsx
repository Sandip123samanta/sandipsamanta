"use client";

import { newsletter } from "@/resources";
import { Button, Column, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  if (newsletter.display === false) return null;

  return (
    <Column
      position="relative"
      fillWidth
      paddingTop="64"
      paddingBottom="80"
      gap="64"
      s={{ style: { paddingTop: "40px", paddingBottom: "40px", gap: "32px" } }}
      {...flex}
    >
      {/* Top separator */}
      <Line />

      <Row
        fillWidth
        vertical="start"
        gap="0"
        style={{ flexDirection: "row" }}
        s={{ style: { flexDirection: "column", gap: "32px", alignItems: "center" } }}
      >
        {/* ── Left: tag + headline ── */}
        <Column
          flex={1}
          gap="20"
          paddingRight="xl"
          s={{ style: { paddingRight: "0", alignItems: "center", textAlign: "center" } }}
        >
          <Tag label="Available for new projects" variant="success" size="m" />
          <Heading
            variant="display-strong-l"
            style={{ lineHeight: "1.05", letterSpacing: "-0.04em" }}
          >
            {newsletter.title}
          </Heading>
        </Column>

        {/* ── Vertical divider — desktop only ── */}
        <Column
          width="1"
          background="neutral-alpha-weak"
          style={{ alignSelf: "stretch", minHeight: "120px" }}
          s={{ hide: true }}
        />

        {/* ── Right: description + CTAs ── */}
        <Column
          flex={1}
          gap="32"
          vertical="end"
          paddingLeft="xl"
          s={{ style: { paddingLeft: "0", alignItems: "center", textAlign: "center" } }}
        >
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {newsletter.description}
          </Text>
          <Row
            gap="12"
            s={{ style: { flexDirection: "column", alignItems: "center", width: "100%" } }}
          >
            <Button href="/contact" variant="primary" size="m" arrowIcon>
              Tell Me About Your Project
            </Button>
            <Button
              variant="secondary"
              size="m"
              data-cal-namespace="30min"
              data-cal-link="sandip-samanta-m7zs9y/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a Call
            </Button>
          </Row>
        </Column>
      </Row>

      {/* Bottom separator */}
      <Line />
    </Column>
  );
};
