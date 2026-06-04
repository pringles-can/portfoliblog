import { Section, SectionHeading } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { skillGroups } from "./skills.content";

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills">
      <SectionHeading
        title="Technical Skills"
        subtitle="Tools and technologies I use in production daily."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-slate-800 px-2.5 py-1 text-sm text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
