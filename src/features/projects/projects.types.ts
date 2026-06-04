export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  architecture: string;
  techStack: string[];
  keyDecisions: string[];
  links: ProjectLink[];
  highlight?: boolean;
}
