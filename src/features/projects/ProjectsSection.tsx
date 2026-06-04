import { Section, SectionHeading } from "@/shared/ui/Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.content";

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <SectionHeading
        title="Selected Projects"
        subtitle="Production systems I've designed, built, and shipped."
      />
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
