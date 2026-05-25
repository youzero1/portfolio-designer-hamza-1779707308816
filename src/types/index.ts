export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
};

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};
