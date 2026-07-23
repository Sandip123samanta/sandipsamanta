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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
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
    link: "https://www.linkedin.com/in/sandip-samanta2002/",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
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
        {person.role.toLowerCase()}
      </Text>
      , creating fast, responsive, and user-friendly websites
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        I'm {person.location.split("/")[1]?.replace("_", " ")}-based {person.role.toLowerCase()}{" "}
        with a passion for transforming complex challenges into simple, elegant design solutions. My
        work spans digital interfaces, interactive experiences, and the convergence of design and
        technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wefik",
        timeframe: "2025 – Present",
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
