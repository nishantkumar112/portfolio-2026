import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, ExternalLink, GitBranch} from 'lucide-react';
import {getProjectBySlug, projects} from '@/data/projects';
import {siteConfig} from '@/data/site';

type Props = {params: Promise<{slug: string}>};

export async function generateStaticParams() {
  return projects.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {title: 'Project not found'};

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.outcome ?? project.description,
      url: `${siteConfig.url}/projects/${slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({params}: Props) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();

  const {caseStudy} = project;

  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-24 dark:bg-gray-950">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to work
        </Link>

        <header className="mt-8">
          {project.role && (
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {project.role}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400"
              >
                <GitBranch size={18} aria-hidden />
                Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                <ExternalLink size={18} aria-hidden />
                Live demo
              </a>
            )}
          </div>
        </header>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Problem
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
              {caseStudy.problem}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Solution
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
              {caseStudy.solution}
            </p>
          </div>
          {project.highlight && (
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/50 dark:bg-blue-950/40">
              <h2 className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Technical highlight
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                {project.highlight}
              </p>
            </div>
          )}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Results
            </h2>
            <ul className="mt-3 space-y-2">
              {caseStudy.results.map((r) => (
                <li
                  key={r}
                  className="flex gap-2 text-gray-600 dark:text-gray-400"
                >
                  <span className="text-green-500" aria-hidden>
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Stack
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900/50">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Want something similar built?
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Let&apos;s discuss your product goals on a quick discovery call.
          </p>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Book a call
          </a>
        </div>
      </article>
    </main>
  );
}
