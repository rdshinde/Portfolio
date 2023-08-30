interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumbers: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  icon: Image;
  progress: number;
  title: string;
}

export interface Skills extends SanityBody {
  _type: "skills";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string[];
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  description: string[];
  technologies: Technology[];
}
export interface PageInfo extends SanityBody {
  name: string;
  heroImage: Image;
  heroTitle: string;
  heroTexts: string[];
  aboutImage: Image;
  aboutTitle: string;
  aboutText: string;
  phoneNumber: string;
  email: string;
  address: string;
  resume: string;
  socials: Social[];
}
export interface Social extends SanityBody {
  _type: "socials";
  title: string;
  url: string;
}
