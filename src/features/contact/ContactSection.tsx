import { Section, SectionHeading } from "@/shared/ui/Section";
import { ButtonLink } from "@/shared/ui/Button";

const contactLinks = [
  {
    label: "Email",
    value: "prindle.ste@gmail.com", // TODO: replace with consts
    href: "mailto:steprindle@hotmail.com", // TODO: replace with consts
    description: "Best for individual contract or consulting requests.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/steve-prindle", // TODO: replace with consts
    href: "https://linkedin.com/in/steve-prindle-381137b5", // TODO: replace with consts
    description: "Professional history and recommendations.",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/pringles-can", // TODO: replace with consts
    href: "https://github.com/pringles-can", // TODO: replace with consts
    description: "Side projects, forgotten experiments, and my open source contributions.",
    external: true,
  },
];

export function ContactSection() {
  return (
    <Section id="contact" label="Contact">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          title="Get in Touch"
          subtitle="Open to senior engineering roles, consulting engagements, and interesting problems."
        />
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900">
          {contactLinks.map((contact) => (
            <div key={contact.label} className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {contact.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-white">{contact.value}</p>
                <p className="mt-1 text-sm text-slate-400">{contact.description}</p>
              </div>
              <ButtonLink
                href={contact.href}
                variant="ghost"
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="self-start sm:self-auto shrink-0"
              >
                {contact.label === "Email" ? "Send Email" : "Open"}
              </ButtonLink>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Typically respond within 24 hours on weekdays.
        </p>
      </div>
    </Section>
  );
}
