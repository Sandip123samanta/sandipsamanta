import type {
  About,
  Blog,
  Contact,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sandip",
  lastName: "Samanta",
  name: "Sandip Samanta",
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  email: "samanthasandip565@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English"],
  locale: "en",
  phone: "+91 7557030058",
};

const newsletter: Newsletter = {
  display: true,
  title: (
    <>
      You bring the idea.
      <br />
      I’ll build the experience.
    </>
  ),
  description: (
    <>
      I design and develop responsive web applications that combine thoughtful visuals, smooth
      interactions, and reliable engineering.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sandip123samanta",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sandipsamanta2002/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/samanta_sandip_/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/og.png",
  label: "Home",
  title: `${person.name} — Full Stack Web Developer & Next.js Engineer`,
  description: `Explore the portfolio of ${person.name}, a Full Stack Web Developer & Co-Founder at Wefik. Specializing in Next.js, React, TypeScript, and high-performance web applications.`,
  headline: <>Building high-performance, modern web applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Available for Work
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I'm {person.firstName}, a{" "}
      <Text as="span" size="xl" weight="strong">
        full stack web developer
      </Text>
      , crafting fast, responsive, and SEO-optimized web applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Learn more about ${person.name}, Full Stack Web Developer and Co-Founder at Wefik based in Kolkata, India. Experienced in Next.js, React, Java, and modern web architectures.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Kolkata-based Full-Stack Web Developer and Co-Founder of Wefik, passionate about
        building fast, accessible, and high-performance web applications. I work with technologies
        such as Next.js, React and TypeScript to create responsive digital interfaces, scalable
        full-stack architectures, and modern web experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wefik",
        timeframe: "2025 - Present",
        role: "Co-Founder & Full-Stack Developer",
        achievements: [
          "Co-founded Wefik, a creative web development studio delivering distinctive and responsive digital experiences for businesses, institutions, and events.",
          "Led projects from concept to deployment, handling frontend development, performance optimization, client collaboration, and technical delivery.",
        ],
        images: [
          {
            src: "/images/projects/wefik-cinematic-hero.png",
            alt: "Wefik Cinematic Hero",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bollywood Bites",
        timeframe: "2026",
        role: "Freelance Web Developer",
        achievements: [
          "Designed and developed a premium restaurant website featuring online ordering, table reservations, catering, food-truck services, and culinary stories.",
          "Created an immersive, responsive experience inspired by Indian culture, with interactive menus, performance optimization, and a consistent visual identity.",
        ],
        images: [
          {
            src: "/images/projects/bollywoodbite.png",
            alt: "Bollywood Bites Restaurant Website",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "B.Tech in Computer Science & Engineering",
        timeframe: "2021–2025",
        description: <>Guru Nanak Institute Of Technology, Kolkata · CGPA: 9.52</>,
      },
      {
        name: "Higher Secondary — Science",
        timeframe: "2019–2021",
        description: <>Midnapore Collegiate School · WBCHSE · 88%</>,
      },
      {
        name: "Secondary Education",
        timeframe: "2019",
        description: <>Kerur High School · WBBSE · 90.85%</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack web development",
        description: (
          <>
            Building modern, high-performance web applications with structured content
            architectures.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Sanity",
            icon: "sanity",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/storyfinder.png",
            alt: "Storyfinder Project Image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/techverse-cinematic-hero.png",
            alt: "Techverse Cinematic Hero",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Languages known",
        description: (
          <>Strong foundational knowledge in software design and general programming paradigms.</>
        ),
        tags: [
          {
            name: "C",
            icon: "c",
          },
          {
            name: "JAVA",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Figma",
        description: <>Decent foundation in figma.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/figma.png",
            alt: "Figma Design Image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Tech Blog — Web Architecture, Next.js & React Insights",
  description: `Read technical articles, guides, and engineering insights written by ${person.name} on Next.js, React, JavaScript, and web architecture.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Featured Projects & Engineering Work — ${person.name}`,
  description: `Explore full-stack web applications, custom interactive websites, and digital experiences developed by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Visual Gallery — ${person.name}`,
  description: `A curated collection of visual designs, photography, and creative media by ${person.name}.`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact ${person.name} — Hire Full Stack Web Developer`,
  description: `Get in touch with ${person.name} for web development projects, technical consultation, and custom software engineering.`,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
