import type { Metadata } from 'next';
import CaseStudy, { type CaseStudyContent } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Daily Job Watcher | Joshua Duplaa',
  description: 'Case study: an automated job-search pipeline that checks 70 company job boards and careers sites every two hours.',
};

const content: CaseStudyContent = {
  title: 'Daily Job Watcher',
  summary:
    'An automated job-search pipeline I built for myself and run every two hours. It checks 70 company job boards ' +
    'and careers sites, scores each posting against my background, and sends new matches to my phone, my inbox ' +
    'and a Google Sheet where I track applications.',
  stack: 'Python, asyncio, httpx, GitHub Actions, Google Sheets API, pytest. The repository is private; I’m happy to walk through it.',
  problem: [
    'The companies I want to work for post jobs on their own sites, spread across a dozen different job-board systems. ' +
    'General job sites mix in senior roles and other cities, and checking each company by hand every day was slow and missed postings.',
    'I wanted every new software engineering, platform, SRE or forward deployed role in Seattle or US-remote that asks for ' +
    'three years of experience or less to reach me within hours, plus a log of what I had seen and applied to.',
  ],
  constraints: [
    'No server to run or pay for, so it had to fit in GitHub Actions’ free minutes.',
    'Use each job board’s official API where one exists. For careers sites without one, stay within the site’s robots.txt, ' +
    'identify the client honestly, and never get around rate limits or bot protection.',
    'Secrets live only in GitHub Actions secrets, never in code or commits, and job descriptions are never stored.',
    'A source that breaks must never mark its jobs as closed or flood me with alerts.',
  ],
  builtIntro:
    'A scheduled Python job on GitHub Actions. Each run fetches every source in parallel, normalizes the postings, ' +
    'filters and scores them, compares them with what it has already seen, and sends only what is new.',
  diagram: ['70 sources', 'Adapters: one per job-board system', 'Filter and score', 'Seen-jobs state', 'Push, email digest, Google Sheet'],
  built: [
    'Adapters for Greenhouse, Ashby, Lever, Workday, Workable and amazon.jobs, plus the Microsoft, Google and Apple careers sites, turn every posting into one common record.',
    'Filter rules live in YAML: excluded titles, Seattle and US-remote location rules, points for role, level, company priority and pay. Tuning needs no code changes.',
    'An experience parser reads the required years from each description and ignores “preferred” and “nice to have” sections.',
    'State is committed back to the repository after every run, so each job alerts once. A job that disappears is closed; a source that fails leaves its jobs untouched.',
    'New matches go out as a push notification and an HTML email digest and are appended to a Google Sheet. Runs with nothing new send one silent “No new jobs” push.',
    'A health alert goes out once when a source fails two runs in a row, rather than on every failed run.',
  ],
  decisions: [
    'When the first results were thin, I measured before changing anything. A dry run showed the filter was working: only 13% of the 8,743 postings had a Seattle-area location, because most of the 45 sources were AI startups hiring in San Francisco. The fix was more Seattle and remote-friendly employers, not looser rules.',
    'Google’s robots.txt disallows the page parameter on its job search, so the adapter reads only the first page of each search, sorted by date and limited to early and mid levels, so the first page holds the newest relevant postings.',
    'Meta stays out: its robots.txt says automated collection needs written permission. I use Meta’s own job alerts instead.',
    'Titles like “Software Engineer III” are excluded at most companies, but at Google that level usually asks about two years, so Google is exempt and the experience check decides.',
    'Nothing was pushed or turned on until I had reviewed a dry run of the real output.',
  ],
  results: [
    'Running every two hours since October 26, 2026. A run takes about two and a half minutes.',
    'The experience filter rejected 119 postings asking for more than three years, cutting matches from 328 to 205 so the digest stays relevant.',
    'Adding Seattle and remote-friendly employers raised current matches from 210 to 380. The first run afterwards delivered 172 new jobs to my inbox and the Sheet.',
    '294 automated tests run against recorded API responses and pages, with no live network calls.',
  ],
  next: [
    'Use the Sheet’s Applied column to see which matches I actually apply to, and tune the scores from that.',
    'Alert when scheduled runs stop: GitHub’s scheduler skipped several runs on one day, and only manual runs showed it.',
    'Add a job-search aggregator API to catch companies whose careers sites have no usable source.',
  ],
};

export default function DailyJobWatcherCaseStudy() {
  return <CaseStudy content={content} />;
}
