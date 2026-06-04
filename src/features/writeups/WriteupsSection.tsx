import { Section, SectionHeading } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { writeups } from "./writeups.content";
import type { Writeup } from "./writeups.types";

export function WriteupsSection() {
  return (
    <Section id="writeups" label="Technical Writeups">
      <SectionHeading
        title="Technical Writeups"
        subtitle="Architecture notes, engineering decisions, and lessons learned."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {writeups.map((writeup) => (
          <WriteupCard key={writeup.id} writeup={writeup} />
        ))}
      </div>
    </Section>
  );
}

function WriteupCard({ writeup }: { writeup: Writeup }) {
  const date = new Date(writeup.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <article>
        <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
          <time dateTime={writeup.publishedAt}>{date}</time>
          <span>{writeup.readTime}</span>
        </div>
        <h3 className="text-base font-semibold leading-snug text-white">
          <a
            href={writeup.href}
            className="hover:text-indigo-400 focus:outline-none focus-visible:text-indigo-400"
          >
            {writeup.title}
          </a>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{writeup.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {writeup.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Card>
  );
}
