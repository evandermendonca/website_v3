import { Metadata } from "next";

export type Site = {
  metadata: Metadata;
  contactInfo: ContactInfo;
};

export type ContactInfo = {
  email: string;
  phone: string;
  socials: {
    linkedIn: string;
    github: string;
  };
};

export const site: Site = {
  metadata: {
    title: "Evander Mendonca",
    description:
      "Engineering Manager — revenue-critical systems, reliability, execution.",
    metadataBase: new URL("https://evander.co"),
  },
  contactInfo: {
    email: "evander.m.mendonca@gmail.com",
    phone: "206-519-4190",
    socials: {
      linkedIn: "https://linkedin.com/in/evandermendonca",
      github: "https://github.com/evandermendonca",
    },
  },
};
