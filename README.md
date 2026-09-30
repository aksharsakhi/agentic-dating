# Agentic Dating

> **Autonomous AI dating platform where individual AI agents represent real people, date on their behalf, and evaluate multi-factor compatibility.**

![Agentic Dating Architecture](https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1200&q=80)

---

## What it does

Agentic Dating reimagines modern romance by pairing autonomous AI agents that act on behalf of real people. Each person is discovered and analyzed through exactly **two official public sources**:
1. **Public LinkedIn Profile**: Professional milestones, career trajectory, core technical & leadership skills, and formal background.
2. **Public Instagram Profile**: Hobbies, creative outlets, physical vitality, aesthetic vibe, and daily lifestyle signals.

An AI agent is synthesized with that individual's unique persona, communication cadence, core values, and dating preferences. These agents then go out on dates with one another—engaging in multi-turn conversations that cite real facts from the source profiles—before calculating a transparent, 5-factor compatibility score and generating personalized match rankings.

---

## Architecture

```
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│     Public LinkedIn Profile     │       │     Public Instagram Profile    │
└────────────────┬────────────────┘       └────────────────┬────────────────┘
                 │                                         │
                 ▼                                         ▼
         [LinkedInConnector]                       [InstagramConnector]
                 │                                         │
                 └───────────────────┬─────────────────────┘
                                     ▼
                        [ProfileResearchService]
                                     │
                 ┌───────────────────┴───────────────────┐
                 ▼                                       ▼
        [Observed Facts]                        [Inferred Traits]
     (Direct Source Badges)                  (Rationale & Confidence)
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     ▼
                           [AI Person Profile]
                                     │
                                     ▼
                            [Agent Configuration]
                 (Custom System Persona, Tone & Value Hierarchy)
                                     │
                                     ▼
                          [Dating Session Engine]
                       (Agent-to-Agent Date Chat)
                                     │
                                     ▼
                       [5-Factor Compatibility Model]
                  (Interest, Lifestyle, Values, Comm, Chem)
                                     │
                                     ▼
                       [Ranked Candidate Matches]
```

---

## Tech Stack

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Frontend**: React 19, TypeScript, Vanilla CSS + Tailwind CSS v4, Lucide Icons
- **Backend & APIs**: Next.js Serverless Route Handlers (`/api/...`)
- **Connectors**:
  - `LinkedInConnector`: Canonical URL normalization, public HTML/meta-tag extraction, and credential parsing.
  - `InstagramConnector`: Public OpenGraph tag ingestion, bio parsing, and media activity extraction without bypassing login walls or CAPTCHAs.
- **Dating Engine**: Multi-turn dialogue synthesis citing source URLs, stateful session memory, and weighted compatibility scoring.
- **Inference Runtime**: Ollama local inference (`qwen2.5` / `qwen3`) with built-in heuristic fallback and standard OpenAI/Gemini API key compatibility.
- **Deployment**: Cloudflare Edge Tunnel & Vercel deployment.

---

## Data Flow

1. **Input**: A pair of verified URLs is supplied (e.g. `https://www.linkedin.com/in/zuck` and `https://www.instagram.com/zuck`).
2. **Extraction**: `ProfileResearchService` concurrently invokes `LinkedInConnector` and `InstagramConnector`.
3. **Analysis**: Profile signals are segregated strictly into **Observed Facts** (e.g., "Won gold medals in BJJ tournaments - Source: Instagram") vs. **Inferred Traits** (e.g., "High competitive stamina - Source: Instagram").
4. **Agent Generation**: A tailored persona prompt is constructed instructing the agent to never fabricate unverified facts.
5. **Dating Simulation**: Two agents hold a conversation covering opening observations, lifestyle routines, personal values, and vulnerability.
6. **Compatibility Evaluation**: Multi-factor scoring executes across 5 defined metrics to produce an overall percentage (0–100%).
7. **Rankings**: All partner candidates are sorted descending by compatibility score.

---

## Running locally

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
# Clone the repository
git clone https://github.com/aksharsakhi/agentic-dating.git
cd agentic-dating

# Install dependencies
npm install

# Run the development server
npm run dev

# Or run the optimized production build
npm run build
npm start -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Environment Variables

Create a `.env.local` file in the root directory (optional, system has zero-config fallbacks):

```env
# Optional external LLM API keys (falls back to local inference / deterministic engine)
OPENAI_API_KEY=""
GEMINI_API_KEY=""
PORT=3000
```

---

## Demo

- **Live URL**: [https://precisely-bear-lodge-competitors.trycloudflare.com](https://precisely-bear-lodge-competitors.trycloudflare.com)
- **Precomputed 25-Person Dataset**: Instantly browse 25 real individuals with analyzed profiles, active dates, and match rankings without waiting for scraping delays.
- **Live Dating Simulator**: Select any two individuals in the **Dating Theater** to watch them date live with progressive speech bubbles.
- **Dynamic Link Ingestion**: Use the **Add Person** modal to enter any real public LinkedIn + Instagram handle.

---

## AI Agent Architecture

Each agent is defined by:
- **System Prompt**: Built directly from the person's LinkedIn headline/skills and Instagram bio/hobbies.
- **Grounding Rule**: Agents are explicitly instructed never to hallucinate facts outside the two sources.
- **Conversational Tone**: Reflects the individual's observed communication cadence (e.g., analytical and disciplined, warm and empathetic, or energetic and candid).
- **Attribution Engine**: Statements during dates cite the corresponding profile source (`Source: LinkedIn` or `Source: Instagram`).

---

## Compatibility Algorithm

Compatibility is evaluated across 5 weighted dimensions:

| Dimension | Weight | Focus Areas |
| :--- | :---: | :--- |
| **Interest Alignment** | 20% | Shared hobbies, creative endeavors, and domain passions |
| **Lifestyle Alignment** | 25% | Daily rhythms, fitness vitality, family focus, outdoor activity |
| **Values Alignment** | 25% | Core life principles, ethics, and mutual worldview |
| **Communication Fit** | 15% | Conversational style harmony (e.g. warmth, directness) |
| **Dating Chemistry** | 15% | Organic back-and-forth dialogue synergy and mutual delight |

$$\text{Overall Score} = \sum (\text{Dimension Score} \times \text{Weight})$$

---

## Data Sources

The platform strictly uses **only two public sources** per person:
1. Public LinkedIn profile (`linkedin.com/in/...`)
2. Public Instagram profile (`instagram.com/...`)

No third-party search engines, Wikipedia articles, or private databases are queried.

---

## Limitations

- **Private Accounts**: Profiles set to private on Instagram are not ingested; only public profiles can be analyzed.
- **Rate Limits & Login Walls**: In production environments where social networks display login walls, cached verified snapshots or structured public meta tags are leveraged.
- **Subjective Nature**: Compatibility scores represent an algorithmic matching heuristic rather than objective interpersonal truth.

---

## Responsible Data Use

- **Publicly Available Information Only**: Only publicly posted professional and creative content is ingested.
- **No Private Data Scraping**: No authentication bypass, CAPTCHA defeat, or credential harvesting is performed.
- **Explicit Attribution**: Every claim is tagged with its source so users can verify accuracy.
- **Human Autonomy**: AI agents date on behalf of people to provide recommendations, leaving actual human connection to real-world choice.
