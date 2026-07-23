import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type React from "react";
import type { ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { slugify as transliterate } from "transliteration";

import {
  Accordion,
  AccordionGroup,
  Button,
  Card,
  CodeBlock,
  Column,
  Feedback,
  Grid,
  Heading,
  HeadingLink,
  Icon,
  InlineCode,
  Line,
  List,
  ListItem,
  Media,
  type MediaProps,
  Row,
  SmartLink,
  Table,
  Text,
  type TextProps,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  const strWithAnd = str.replace(/&/g, " and "); // Replace & with 'and'
  return transliterate(strWithAnd, {
    lowercase: true,
    separator: "-", // Replace spaces with -
  }).replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({
    children,
    ...props
  }: Omit<React.ComponentProps<typeof HeadingLink>, "as" | "id">) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink marginTop="24" marginBottom="12" as={as} id={slug} {...props}>
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children?.props?.className) {
    const { className, children } = props.children.props;

    // Extract language from className (format: language-xxx)
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

function createList(as: "ul" | "ol") {
  return ({ children }: { children: ReactNode }) => <List as={as}>{children}</List>;
}

function createListItem({ children }: { children: ReactNode }) {
  return (
    <ListItem marginTop="4" marginBottom="8" style={{ lineHeight: "175%" }}>
      {children}
    </ListItem>
  );
}

function createHR() {
  return (
    <Row fillWidth horizontal="center">
      <Line maxWidth="40" />
    </Row>
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  ol: createList("ol") as any,
  ul: createList("ul") as any,
  li: createListItem as any,
  hr: createHR as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
  images?: string[];
};

export function CustomMDX({ images, ...props }: CustomMDXProps) {
  const tableComponents = {
    table: ({ children }: any) => (
      <Column fillWidth overflowX="auto" border="neutral-alpha-medium" radius="m" marginY="16">
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          {children}
        </table>
      </Column>
    ),
    thead: ({ children }: any) => (
      <thead
        style={{
          backgroundColor: "var(--neutral-alpha-weak)",
          borderBottom: "1px solid var(--neutral-alpha-medium)",
        }}
      >
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => <tbody>{children}</tbody>,
    tr: ({ children }: any) => (
      <tr style={{ borderBottom: "1px solid var(--neutral-alpha-weak)" }}>{children}</tr>
    ),
    th: ({ children }: any) => (
      <th
        style={{
          padding: "12px 16px",
          fontWeight: "600",
          fontSize: "var(--font-size-label-medium)",
          color: "var(--neutral-strong)",
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td
        style={{
          padding: "12px 16px",
          fontSize: "var(--font-size-body-medium)",
          color: "var(--neutral-medium)",
        }}
      >
        {children}
      </td>
    ),
  };

  const imageComponents = {
    img: (imgProps: any) => {
      let src = imgProps.src;
      const index = Number.parseInt(src, 10);
      if (!Number.isNaN(index) && images && images[index]) {
        src = images[index];
      }
      return createImage({ ...imgProps, src });
    },
    SanityImage: ({ index, ...sanityProps }: { index: number; [key: string]: any }) => {
      const src = images?.[index] ? images[index] : "";
      return createImage({ ...sanityProps, src });
    },
    Image: ({ index, ...imageProps }: { index: number; [key: string]: any }) => {
      const src = images?.[index] ? images[index] : "";
      return createImage({ ...imageProps, src });
    },
  };

  const mergedComponents = {
    ...components,
    ...tableComponents,
    ...imageComponents,
    ...(props.components || {}),
  };

  return (
    <MDXRemote
      {...props}
      options={{
        blockJS: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={mergedComponents}
    />
  );
}
