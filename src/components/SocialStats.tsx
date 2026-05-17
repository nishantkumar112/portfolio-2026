'use client';

import {useEffect, useState} from 'react';
import {GitBranch, Share2} from 'lucide-react';
import {siteConfig} from '@/data/site';
import FadeIn from './FadeIn';

interface GitHubProfile {
  public_repos: number;
  followers: number;
}

const linkedInHighlights = [
  {label: 'Connections', value: '500+'},
  {label: 'Open to', value: 'Work'},
];

export default function SocialStats() {
  const [github, setGithub] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setGithub({
            public_repos: data.public_repos ?? 0,
            followers: data.followers ?? 0,
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <FadeIn direction="up" delay={0.5}>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatCard
          icon={<GitBranch size={20} />}
          title="GitHub"
          href={`https://github.com/${siteConfig.githubUsername}`}
          stats={
            loading
              ? [
                  {label: 'Public repos', value: '—'},
                  {label: 'Followers', value: '—'},
                ]
              : [
                  {
                    label: 'Public repos',
                    value: github ? String(github.public_repos) : '—',
                  },
                  {
                    label: 'Followers',
                    value: github ? String(github.followers) : '—',
                  },
                ]
          }
        />
        <StatCard
          icon={<Share2 size={20} />}
          title="LinkedIn"
          href={siteConfig.linkedinUrl}
          stats={linkedInHighlights.map((s) => ({
            label: s.label,
            value: s.value,
          }))}
        />
      </div>
    </FadeIn>
  );
}

function StatCard({
  icon,
  title,
  href,
  stats,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  stats: {label: string; value: string}[];
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-transition group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur-sm hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-700"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-400">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
          {stats.map((s) => (
            <p key={s.label} className="text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {s.value}
              </span>{' '}
              {s.label}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
}
