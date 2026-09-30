import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Dating · Your AI Agent Dates on Your Behalf',
  description: 'AI agents analyze public LinkedIn and Instagram profiles, date on each person’s behalf, and compute multi-factor compatibility rankings.',
  keywords: ['AI dating', 'agentic dating', 'autonomous agents', 'compatibility matching'],
  openGraph: {
    title: 'Agentic Dating · Autonomous Agents Date for You',
    description: 'Autonomous AI dating agents analyzing verified LinkedIn and Instagram profiles with transparent multi-factor compatibility evaluation.',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090a0f] text-gray-100 antialiased selection:bg-pink-500/30 selection:text-pink-200">
        {children}
      </body>
    </html>
  );
}
