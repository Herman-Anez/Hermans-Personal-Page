import React from "react";
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import dict from "./locales/es.json";
import { RenderHTML } from "@/components/RenderHTML";

export const getContent = (dict: any, locale: string = "es") => {
  const person: Person = {
    firstName: dict.person.firstName,
    lastName: dict.person.lastName,
    name: dict.person.name,
    role: dict.person.role,
    avatar: "/images/avatar2.jpg", // TODO: Update with your real avatar
    email: dict.person.email,
    location: dict.person.location as any, // Expecting the IANA time zone identifier
    languages: dict.person.languages,
  };

  const newsletter: Newsletter = {
    display: false,
    title: <RenderHTML html={dict.ui.subscribeTitle} />,
    description: <RenderHTML html={dict.ui.subscribeDescription} />,
  };

  const social: Social = [
    // TODO: Add real links later
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/placeholder",
      essential: true,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/placeholder/",
      essential: true,
    },
    {
      name: "Email",
      icon: "email",
      link: `mailto:${person.email}`,
      essential: true,
    },
  ];

  const home: Home = {
    path: `/${locale}`,
    image: "/images/og/home.jpg",
    label: dict.home.label,
    title: dict.home.title,
    description: dict.home.description,
    headline: <RenderHTML html={dict.home.headline} />,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Featured Work</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            {dict.ui.featuredWork}
          </Text>
        </Row>
      ),
      href: `/${locale}/work/automate-design-handovers-with-a-figma-to-code-pipeline`, // TODO: Update href later when actual projects are added
    },
    subline: <RenderHTML html={dict.home.subline} />,
  };

  const about: About = {
    path: `/${locale}/about`,
    label: dict.about.label,
    title: dict.about.title,
    description: dict.about.description,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: false,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: dict.about.introTitle,
      description: <RenderHTML html={dict.about.introDescription} />,
    },
    work: {
      display: true,
      title: dict.about.workTitle,
      experiences: dict.about.workExperiences.map((exp: any) => ({
        company: exp.company,
        timeframe: exp.timeframe,
        role: exp.role,
        achievements: exp.achievements.map((ach: any) => <RenderHTML key={ach} html={ach} />),
        images: []
      }))
    },
    studies: {
      display: true,
      title: dict.about.studiesTitle,
      institutions: dict.about.studiesInstitutions.map((inst: any) => ({
        name: inst.name,
        description: <RenderHTML html={inst.description} />
      }))
    },
    technical: {
      display: true,
      title: dict.about.technicalTitle,
      skills: dict.about.technicalSkills.map((skill: any) => ({
        title: skill.title,
        description: <RenderHTML html={skill.description} />,
        tags: [],
        images: []
      }))
    },
  };

  const blog: Blog = {
    path: `/${locale}/blog`,
    label: dict.blog.label,
    title: dict.blog.title,
    description: dict.blog.description,
  };

  const work: Work = {
    path: `/${locale}/work`,
    label: dict.work.label,
    title: dict.work.title,
    description: dict.work.description,
  };

  const gallery: Gallery = {
    path: `/${locale}/gallery`,
    label: dict.gallery.label,
    title: dict.gallery.title,
    description: dict.gallery.description,
    images: [
      // TODO: Add real gallery images
    ],
  };

  return { person, social, newsletter, home, about, blog, work, gallery };
};
