import { Person } from '../types';

export const SEED_PEOPLE: Person[] = [
  {
    person_id: 'person_01',
    name: 'Mark Zuckerberg',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/zuck',
    instagram_url: 'https://www.instagram.com/zuck',
    linkedin_raw_data: {
      headline: 'Founder and CEO at Meta',
      location: 'Palo Alto, California',
      summary: 'Building technology that brings people together and connecting the world through open source AI, VR/AR, and social infrastructure.',
      experience: ['Founder & CEO, Meta (2004 - Present)', 'Lead Developer, Harvard FaceMash (2003)'],
      skills: ['Distributed Systems', 'Product Strategy', 'Artificial Intelligence', 'Open Source', 'Scaling Platforms'],
      education: ['Harvard University (Computer Science & Psychology, 2002-2004)']
    },
    instagram_raw_data: {
      username: 'zuck',
      bio: 'Building things · Hydrofoil surfing · Brazilian Jiu-Jitsu gold medalist · Raising cattle in Kauai · Family & AI',
      posts_summary: [
        'Training BJJ and MMA tournaments with elite fighters',
        'Hydrofoiling on open waves in Hawaii',
        'Building open-source Llama AI models in the lab',
        'BBQ smoking brisket and raising wagyu cattle with beer',
        'Family celebrations and crafting artisan wooden gifts'
      ],
      highlights: ['BJJ Tournaments', 'Foiling', 'Meta AI', 'Kauai Ranch'],
      vibe_tags: ['Intense Athlete', 'AI Visionary', 'Hands-on Builder', 'Family Man']
    },
    profile_analysis: {
      identity: {
        name: 'Mark Zuckerberg',
        profession: 'Tech Founder & CEO',
        background: 'Harvard CS/Psychology background, led Meta from dorm room to global enterprise, now dedicated to open-source AGI and athletic combat sports.',
        location: 'Palo Alto, CA & Kauai, HI'
      },
      observed_facts: [
        { fact: 'Founder and CEO of Meta since 2004', source: 'LinkedIn', category: 'career' },
        { fact: 'Won tournament gold and silver medals in Brazilian Jiu-Jitsu competitions', source: 'Instagram', category: 'activity' },
        { fact: 'Regularly practices hydrofoil surfing on open ocean swells', source: 'Instagram', category: 'activity' },
        { fact: 'Passionate advocate for open-source AI models (Llama series)', source: 'LinkedIn', category: 'career' },
        { fact: 'Manages an agricultural ranch raising cattle in Kauai with artisan feed', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'High competitive stamina', rationale: 'Dual dedication to competitive combat martial arts and 20+ year executive tenure', source: 'Instagram', confidence: 'High' },
        { trait: 'Intellectually analytical yet tactile', rationale: 'Harvard psychology roots paired with hands-on outdoor crafting and sports', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Resilient under intense public pressure', rationale: 'Navigated monumental tech transformations and regulatory scrutiny', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Artificial General Intelligence', source: 'LinkedIn' },
        { name: 'Brazilian Jiu-Jitsu & MMA', source: 'Instagram' },
        { name: 'Hydrofoiling & Ocean Sports', source: 'Instagram' },
        { name: 'Open Source Software', source: 'LinkedIn' },
        { name: 'Regenerative Agriculture', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'BJJ Sparring', source: 'Instagram' },
        { name: 'Foil Surfing', source: 'Instagram' },
        { name: 'Backyard BBQ Smoking', source: 'Instagram' },
        { name: 'Reading Classics & History', source: 'LinkedIn' }
      ],
      needs: [
        { need: 'A partner who embraces high physical vitality and intellectual rigor', importance: 'High', source: 'Instagram' },
        { need: 'Mutual respect for demanding mission-driven focus', importance: 'High', source: 'LinkedIn' },
        { need: 'Appreciation for grounded family retreat time away from city noise', importance: 'Medium', source: 'Instagram' }
      ],
      values: [
        { name: 'Continuous Self-Mastery', source: 'Instagram' },
        { name: 'Open Knowledge & Innovation', source: 'LinkedIn' },
        { name: 'Family & Loyalty', source: 'Instagram' }
      ],
      communication_style: 'Direct, focused, analytical, slightly dry humor, highly observant before responding.',
      dating_preferences: [
        { preference: 'Dates centered around outdoor adventures or physical challenges followed by hearty meal', source: 'Instagram' },
        { preference: 'Intellectual sparring and deep philosophical debates over technology and society', source: 'LinkedIn' }
      ],
      deal_breakers: ['Superficiality', 'Lack of personal discipline or curiosity', 'Unwillingness to disconnect from noise']
    },
    agent_config: {
      system_prompt: 'You are the dating agent representing Mark Zuckerberg. You speak with a calm, analytical, and quietly intense tone. You genuinely care about long-term vision, discipline, self-improvement (BJJ, foiling), and building tools that connect people. On dates, you probe for genuine grit, authenticity, curiosity, and whether the other person shares an appetite for adventure and thoughtful conversation.',
      tone: 'Analytical, disciplined, understated humor, vision-oriented',
      core_values: ['Relentless progress', 'Deep discipline', 'Authentic connection'],
      dating_style: 'Thoughtful explorer who values physical vitality and deep, unpretentious dialogue.'
    }
  },
  {
    person_id: 'person_02',
    name: 'Alexis Ohanian',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/alexisohanian',
    instagram_url: 'https://www.instagram.com/alexisohanian',
    linkedin_raw_data: {
      headline: 'Founder @ 776 | Co-founder @ Reddit',
      location: 'Palm Beach, Florida',
      summary: 'Venture capitalist backing ambitious founders building the future. Championing women\'s sports, tech for good, and modern fatherhood.',
      experience: ['Founder & General Partner, Seven Seven Six (2020 - Present)', 'Co-Founder & Executive Chairman, Reddit (2005 - 2020)', 'Partner, Y Combinator (2014 - 2016)'],
      skills: ['Venture Capital', 'Community Building', 'Early Stage Startups', 'Angel Investing', 'Media'],
      education: ['University of Virginia (Commerce & History, 2001-2005)']
    },
    instagram_raw_data: {
      username: 'alexisohanian',
      bio: 'Olympian\'s husband · Business Dad · Investing in climate, space & women\'s sports (Angel City FC, Athlos) · Pancake artist',
      posts_summary: [
        'Making elaborate pancake art characters for his daughters every Sunday morning',
        'Cheering courtside and promoting women\'s track and field at Athlos NYC',
        'Collecting rare sports cards and retro video game memorabilia',
        'Behind the scenes meetings with cutting-edge climate and space tech founders',
        'Proudly sharing glimpses of supportive partnership with his wife Serena'
      ],
      highlights: ['Pancakes', 'Women\'s Sports', '776 Capital', 'Trading Cards'],
      vibe_tags: ['Business Dad', 'Supportive Partner', 'Sports Enthusiast', 'Creative Father']
    },
    profile_analysis: {
      identity: {
        name: 'Alexis Ohanian',
        profession: 'Venture Capitalist & Tech Pioneer',
        background: 'Co-founded Reddit right out of college, built 776 venture fund, prominent advocate for paternity leave and women\'s athletics.',
        location: 'Palm Beach, FL'
      },
      observed_facts: [
        { fact: 'Co-founded Reddit in 2005 and later launched venture firm Seven Seven Six', source: 'LinkedIn', category: 'career' },
        { fact: 'Creates hand-poured pancake art every weekend for his family', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Principal investor in Angel City FC and creator of Athlos women\'s track event', source: 'LinkedIn', category: 'social' },
        { fact: 'Passionate collector of vintage trading cards and retro pop culture artifacts', source: 'Instagram', category: 'activity' }
      ],
      inferred_traits: [
        { trait: 'Celebratory and non-threatened by powerful partners', rationale: 'Publicly champions spouse Serena Williams with genuine pride', source: 'Instagram', confidence: 'High' },
        { trait: 'Playful and deeply familial', rationale: 'Signature Sunday pancake art ritual and active paternity advocacy', source: 'Instagram', confidence: 'High' },
        { trait: 'Intuitive community builder', rationale: 'Reddit origins and modern sports franchise ownership', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Women\'s Professional Sports', source: 'LinkedIn' },
        { name: 'Pancake Art & Creative Cooking', source: 'Instagram' },
        { name: 'Sports Memorabilia & Cards', source: 'Instagram' },
        { name: 'Climate & Deep Tech Investing', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Pancake Crafting', source: 'Instagram' },
        { name: 'Card Collecting', source: 'Instagram' },
        { name: 'Attending Track & Soccer Matches', source: 'Instagram' },
        { name: 'Retro Gaming', source: 'Instagram' }
      ],
      needs: [
        { need: 'Warm, collaborative partnership grounded in shared humor and mutual encouragement', importance: 'High', source: 'Instagram' },
        { need: 'Shared conviction around gender equity and social progress', importance: 'High', source: 'LinkedIn' },
        { need: 'Enthusiasm for family traditions and Sunday morning domestic joy', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Empowering Others', source: 'LinkedIn' },
        { name: 'Active Fatherhood & Family First', source: 'Instagram' },
        { name: 'Creative Innovation', source: 'LinkedIn' }
      ],
      communication_style: 'Warm, enthusiastic, highly articulate, self-deprecating humor, quick to praise others.',
      dating_preferences: [
        { preference: 'Fun, low-stakes daytime dates like casual brunch or sporting events', source: 'Instagram' },
        { preference: 'Conversations that balance ambition with joyful domesticity', source: 'LinkedIn' }
      ],
      deal_breakers: ['Ego-driven cynicism', 'Disregard for women\'s athletics or paternity rights', 'Lack of sense of humor']
    },
    agent_config: {
      system_prompt: 'You represent Alexis Ohanian. You are warm, enthusiastic, ambitious yet humble, and love celebrating others. You love discussing sports equity, startup hustle, family traditions, and creative passions like Sunday pancake art. On a date, you listen generously, offer clever insights, and seek an authentic, high-empathy connection.',
      tone: 'Warm, energetic, charismatic, supportive, witty',
      core_values: ['Generosity', 'Gender equity', 'Playful creativity'],
      dating_style: 'Engaging conversationalist who makes the other person feel celebrated and inspired.'
    }
  },
  {
    person_id: 'person_03',
    name: 'Brian Chesky',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/brianchesky',
    instagram_url: 'https://www.instagram.com/bchesky',
    linkedin_raw_data: {
      headline: 'Co-founder and CEO at Airbnb',
      location: 'San Francisco, California',
      summary: 'Industrial designer turned founder. Building Airbnb from three air mattresses to a global community where millions belong anywhere.',
      experience: ['Co-Founder & CEO, Airbnb (2007 - Present)', 'Industrial Designer, 3DID (2004 - 2007)'],
      skills: ['Product Design', 'Hospitality', 'Brand Storytelling', 'Creative Direction', 'Consumer Internet'],
      education: ['Rhode Island School of Design (BFA Industrial Design, 1999-2004)']
    },
    instagram_raw_data: {
      username: 'bchesky',
      bio: 'Designer · CEO Airbnb · Golden retriever dad to Sophie Supernova · Living in Airbnbs across the globe',
      posts_summary: [
        'Living nomadically in Airbnb properties with his golden retriever Sophie',
        'Sketching industrial product designs and architectural concepts in notebook',
        'Hosting intimate design salons and discussing the craft of taste with architects',
        'Reflecting on loneliness epidemics and how hospitality fosters human belonging',
        'Working out in minimalist gyms and curating timeless mid-century aesthetic spaces'
      ],
      highlights: ['Design Craft', 'Sophie Pup', 'Airbnb Life', 'Travel Architecture'],
      vibe_tags: ['Design Purist', 'Hospitality Visionary', 'Golden Retriever Dad', 'Aesthete']
    },
    profile_analysis: {
      identity: {
        name: 'Brian Chesky',
        profession: 'Designer & Airbnb CEO',
        background: 'Trained industrial designer from RISD who reimagined global travel around connection and craftsmanship.',
        location: 'San Francisco, CA'
      },
      observed_facts: [
        { fact: 'RISD Industrial Design graduate who co-founded Airbnb', source: 'LinkedIn', category: 'career' },
        { fact: 'Constantly travels accompanied by his golden retriever Sophie Supernova', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Advocates deeply for founder-led product design and eliminating corporate bloat', source: 'LinkedIn', category: 'career' },
        { fact: 'Lives for extended periods directly inside Airbnb listings worldwide', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Obsession with aesthetic perfection and details', rationale: 'Hand-draws product mocks and insists on sensory design elegance', source: 'Instagram', confidence: 'High' },
        { trait: 'Deeply reflective about human loneliness', rationale: 'Regularly frames hospitality as the antidote to modern social disconnection', source: 'Instagram', confidence: 'High' },
        { trait: 'Warm, hospitable romantic', rationale: 'Dedication to creating welcoming environments and soulful travel experiences', source: 'Instagram', confidence: 'Medium' }
      ],
      interests: [
        { name: 'Industrial Design & Architecture', source: 'LinkedIn' },
        { name: 'Dog Companionship & Dog-Friendly Travel', source: 'Instagram' },
        { name: 'Human Belonging & Community', source: 'LinkedIn' },
        { name: 'Mid-Century Modern Aesthetics', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Sketching & Industrial Prototyping', source: 'Instagram' },
        { name: 'Exploring Unconventional Architecture', source: 'Instagram' },
        { name: 'Walking Sophie in Parks', source: 'Instagram' },
        { name: 'Bodybuilding & Fitness', source: 'Instagram' }
      ],
      needs: [
        { need: 'An aesthetically attuned companion who appreciates art, design, and thoughtful spaces', importance: 'High', source: 'Instagram' },
        { need: 'A warm spirit who loves dogs and doesn\'t mind a spontaneous, travel-heavy lifestyle', importance: 'High', source: 'Instagram' },
        { need: 'Emotional depth and ability to talk about loneliness, purpose, and community', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Belonging & Hospitality', source: 'LinkedIn' },
        { name: 'Design Craftsmanship', source: 'LinkedIn' },
        { name: 'Authentic Vulnerability', source: 'Instagram' }
      ],
      communication_style: 'Reflective, storytelling-driven, visually descriptive, earnest, and deeply engaging.',
      dating_preferences: [
        { preference: 'Visiting an architecturally stunning museum, gallery, or hidden boutique café', source: 'Instagram' },
        { preference: 'Long walks with coffee and his dog discussing life philosophy and creative dreams', source: 'Instagram' }
      ],
      deal_breakers: ['Disdain for dogs', 'Indifference to beauty or art', 'Purely transactional mindset']
    },
    agent_config: {
      system_prompt: 'You represent Brian Chesky. You view the world through the lens of a designer and host. You care about how things look, feel, and make people feel welcome. You adore your golden retriever Sophie. On a date, you share heartfelt stories about architecture, travel, belonging, and ask thoughtful questions about what home means to your date.',
      tone: 'Soulful, artistic, inquisitive, warm, eloquent',
      core_values: ['Design integrity', 'Belonging', 'Heartfelt hospitality'],
      dating_style: 'A romantic aesthete who creates enchanting, thoughtful environments for conversation.'
    }
  },
  {
    person_id: 'person_04',
    name: 'Sara Blakely',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/sarablakely27',
    instagram_url: 'https://www.instagram.com/sarablakely',
    linkedin_raw_data: {
      headline: 'Founder @ Spanx | Entrepreneur & Investor',
      location: 'Atlanta, Georgia',
      summary: 'Started Spanx with $5,000 in savings and a pair of scissors. First self-made female billionaire. Passionate about empowering women in business.',
      experience: ['Founder & Executive Chairwoman, Spanx (2000 - Present)', 'Guest Shark, Shark Tank (2017 - 2020)'],
      skills: ['Entrepreneurship', 'Consumer Products', 'Patents', 'Brand Innovation', 'Public Speaking'],
      education: ['Florida State University (BS Communications, 1989-1993)']
    },
    instagram_raw_data: {
      username: 'sarablakely',
      bio: 'Spanx Founder · Sneaker lover · Inventing things · Mom of 4 · Celebrating failure daily · Coffee, laughter & dancing in the kitchen',
      posts_summary: [
        'Dancing enthusiastically in mismatched pajamas in the kitchen with her kids',
        'Sharing notebook doodles of whimsical new shoe and clothing inventions',
        'Giving candid advice on embracing rejection, failure, and staying unbothered',
        'Wearing high-top sneakers with formal ballgowns on red carpets',
        'Celebrating everyday women entrepreneurs with grants and surprise video calls'
      ],
      highlights: ['Inventions', 'Kitchen Dancing', 'Failure Wins', 'Sneakers'],
      vibe_tags: ['Unapologetically Joyful', 'Creative Inventor', 'Playful Billionaire', 'Mom of 4']
    },
    profile_analysis: {
      identity: {
        name: 'Sara Blakely',
        profession: 'Inventor, Founder & Philanthropist',
        background: 'Self-made entrepreneur who revolutionized apparel, known for her exuberance, resilience, and refusal to conform.',
        location: 'Atlanta, GA'
      },
      observed_facts: [
        { fact: 'Founded Spanx with $5,000 and zero business school training', source: 'LinkedIn', category: 'career' },
        { fact: 'Wears comfortable sneakers to galas and black-tie events', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Father taught her as a child to celebrate daily failures at the dinner table', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Created the Sara Blakely Foundation dedicating millions to women\'s education', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'High emotional spontaneity and playful humor', rationale: 'Kitchen dance videos, goofy wigs, and self-mocking stories', source: 'Instagram', confidence: 'High' },
        { trait: 'Grit cloaked in joyfulness', rationale: 'Overcame years of manufacturer rejections before massive breakthrough', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Deeply grounded and unpretentious', rationale: 'Rejects stiff corporate formalities in favor of genuine human delight', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Everyday Invention & Product Prototyping', source: 'Instagram' },
        { name: 'Female Entrepreneurship & Micro-Grants', source: 'LinkedIn' },
        { name: 'Sneakers & High-Fashion Mashups', source: 'Instagram' },
        { name: 'Positive Mindset & Resilience Training', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Kitchen Dancing to 80s Hits', source: 'Instagram' },
        { name: 'Sketching Doodles in Idea Journals', source: 'Instagram' },
        { name: 'Impromptu Family Pranks', source: 'Instagram' },
        { name: 'Hunting for Comfortable Shoes', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner who can laugh easily, never takes themselves too seriously, and dances along', importance: 'High', source: 'Instagram' },
        { need: 'Comfort with chaotic, joyful, high-energy family life', importance: 'High', source: 'Instagram' },
        { need: 'Mutual celebration of crazy creative ideas without premature judgment', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Embracing Failure as Growth', source: 'Instagram' },
        { name: 'Authentic Playfulness', source: 'Instagram' },
        { name: 'Uplifting Women', source: 'LinkedIn' }
      ],
      communication_style: 'Bubbly, warm, vibrant, storytelling-rich, hilarious, and disarmingly candid.',
      dating_preferences: [
        { preference: 'A date involving playful competition, funny interactive games, or casual food trucks', source: 'Instagram' },
        { preference: 'Sharing funny failure stories rather than bragging about accomplishments', source: 'Instagram' }
      ],
      deal_breakers: ['Stiff self-importance', 'Pessimism or mockery of childlike joy', 'Lack of empathy for working parents']
    },
    agent_config: {
      system_prompt: 'You represent Sara Blakely. You radiate infectious optimism, humor, and inventive energy. You are not intimidated by anything, but you never boast; instead, you love talking about funny blunders, ridiculous ideas, and celebrating courage. On dates, you bring infectious laughter, ask about childhood dreams, and love someone who doesn\'t mind a little kitchen dancing.',
      tone: 'Infectious, hilarious, encouraging, down-to-earth, buoyant',
      core_values: ['Courage over fear', 'Unapologetic joy', 'Authentic humility'],
      dating_style: 'Lively, warm conversationalist who turns any date into an unforgettable laugh-filled adventure.'
    }
  },
  {
    person_id: 'person_05',
    name: 'Dharmesh Shah',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/dharmesh',
    instagram_url: 'https://www.instagram.com/dharmesh',
    linkedin_raw_data: {
      headline: 'Co-founder and CTO at HubSpot | Inbound & AI Explorer',
      location: 'Boston, Massachusetts',
      summary: 'Software engineer, startup founder, author of Culture Code. Believer in solving for the customer, writing code at 2 AM, and creating delightful AI agents.',
      experience: ['Co-Founder & CTO, HubSpot (2006 - Present)', 'Founder, OnStartups.com (2005 - Present)', 'Founder & CEO, Pyramid Digital Solutions (1994 - 2005)'],
      skills: ['Software Architecture', 'SaaS', 'AI Agents', 'Company Culture', 'Venture Investing'],
      education: ['MIT Sloan School of Management (MS MOT, 2004-2006)', 'UAB (BS Computer Science, 1987-1990)']
    },
    instagram_raw_data: {
      username: 'dharmesh',
      bio: 'HubSpot CTO · Introvert who loves code & kindness · Building ChatSpot AI · Dad · Angel investor in 100+ startups · Occasional piano player',
      posts_summary: [
        'Coding late into the night building small experimental AI agents',
        'Sharing quiet piano melodies learned to unwind after high-intensity days',
        'Reflections on introversion and how to lead effectively without being loud',
        'Father-son bonding over science puzzles and futuristic robotics',
        'Quotes on radical kindness and why culture beats strategy every time'
      ],
      highlights: ['AI Projects', 'Piano Melodies', 'Introvert Power', 'Culture Code'],
      vibe_tags: ['Gentle Genius', 'Introverted Techie', 'Kind Mentor', 'Night Owl Coder']
    },
    profile_analysis: {
      identity: {
        name: 'Dharmesh Shah',
        profession: 'Software Architect & HubSpot CTO',
        background: 'MIT alumnus and veteran technologist known for authoring HubSpot\'s famous Culture Code and pioneering inbound marketing.',
        location: 'Boston, MA'
      },
      observed_facts: [
        { fact: 'Co-founder and CTO of HubSpot since 2006', source: 'LinkedIn', category: 'career' },
        { fact: 'Self-proclaimed proud introvert who plays piano to relax', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Actively programs and writes code hands-on despite executive status', source: 'LinkedIn', category: 'career' },
        { fact: 'Author of the HubSpot Culture Code deck viewed millions of times', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Deeply thoughtful, compassionate, and low-ego', rationale: 'Champion of radical kindness and empathetic introverted leadership', source: 'Instagram', confidence: 'High' },
        { trait: 'Intellectual tinkerer', rationale: 'Spends weekends building open AI prototypes like ChatSpot', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Values tranquil, meaningful conversations over crowded parties', rationale: 'Explicitly writes about recharging through quiet solitary pursuits', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Generative AI & Conversational Agents', source: 'LinkedIn' },
        { name: 'Acoustic Piano & Instrumental Music', source: 'Instagram' },
        { name: 'Organizational Psychology & Culture', source: 'LinkedIn' },
        { name: 'Startup Mentorship & Angel Investing', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Late-Night Python Coding', source: 'Instagram' },
        { name: 'Playing Piano Ballads', source: 'Instagram' },
        { name: 'Writing Long-Form Essays', source: 'LinkedIn' },
        { name: 'Logic Puzzles with Family', source: 'Instagram' }
      ],
      needs: [
        { need: 'A calm, kind, intellectually stimulating presence who understands introverted battery drain', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for gentle geekiness and coding passion projects', importance: 'Medium', source: 'LinkedIn' },
        { need: 'Deep respect for empathy, humility, and moral integrity', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Kindness Over Cleverness', source: 'Instagram' },
        { name: 'Continuous Learning', source: 'LinkedIn' },
        { name: 'Transparency & Culture', source: 'LinkedIn' }
      ],
      communication_style: 'Soft-spoken, articulate, witty with subtle engineering puns, deeply respectful and attentive.',
      dating_preferences: [
        { preference: 'Quiet, cozy dinner at a peaceful corner table with warm lighting and good tea', source: 'Instagram' },
        { preference: 'Strolling through a tranquil botanical garden or science bookstore', source: 'Instagram' }
      ],
      deal_breakers: ['Aggressive rudeness to service staff', 'Dishonesty', 'Obsession with status signaling']
    },
    agent_config: {
      system_prompt: 'You represent Dharmesh Shah. You are an introverted, deeply kind, intellectually curious technologist. You speak thoughtfully, value warmth and kindness above all, and love discussing ideas, software beauty, piano, and psychology. You prefer deep one-on-one connection over superficial small talk.',
      tone: 'Gentle, thoughtful, witty, modest, deeply kind',
      core_values: ['Radical kindness', 'Quiet curiosity', 'Empathetic listening'],
      dating_style: 'A gentle intellectual who listens attentively and creates a safe, comforting conversation.'
    }
  },
  {
    person_id: 'person_06',
    name: 'Sahil Lavingia',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/shl',
    instagram_url: 'https://www.instagram.com/slavingia',
    linkedin_raw_data: {
      headline: 'Founder & CEO at Gumroad | Author & Painter',
      location: 'New York & Boulder',
      summary: 'Employee #2 at Pinterest. Built Gumroad to empower creators to make a living doing what they love. Advocate for calm companies and creator equity.',
      experience: ['Founder & CEO, Gumroad (2011 - Present)', 'Designer & Developer, Pinterest (2011)', 'Author, The Minimalist Entrepreneur (2021)'],
      skills: ['Creator Economy', 'Digital Products', 'Minimalist Startups', 'Oil Painting', 'Remote Work'],
      education: ['University of Southern California (Computer Science, 2010-2011)']
    },
    instagram_raw_data: {
      username: 'slavingia',
      bio: 'Gumroad CEO · Oil painter · Writing books · Walking 20k steps a day · Minimalist living across cities',
      posts_summary: [
        'Finished plein-air oil paintings of mountain ranges and urban streetscapes',
        'Daily step count logs documenting long walks through Tokyo, Paris, and New York',
        'Reflections on failure, letting go of venture hyper-growth, and discovering peace',
        'Studio sessions surrounded by oil paint tubes and canvas easels',
        'Bookshelves filled with philosophy, stoicism, and design history'
      ],
      highlights: ['Oil Paintings', 'Walks', 'Gumroad', 'Books'],
      vibe_tags: ['Philosopher Artist', 'Calm Entrepreneur', 'Minimalist', 'Urban Flâneur']
    },
    profile_analysis: {
      identity: {
        name: 'Sahil Lavingia',
        profession: 'Tech Founder, Author & Oil Painter',
        background: 'Early Pinterest designer who founded Gumroad, transitioned through hypergrowth to build a sustainable, artist-centric life.',
        location: 'New York, NY / Boulder, CO'
      },
      observed_facts: [
        { fact: 'Employee #2 at Pinterest and founder/CEO of Gumroad', source: 'LinkedIn', category: 'career' },
        { fact: 'Produces accomplished plein-air oil paintings and exhibits in galleries', source: 'Instagram', category: 'activity' },
        { fact: 'Authored the bestselling business book The Minimalist Entrepreneur', source: 'LinkedIn', category: 'career' },
        { fact: 'Consistently walks 15,000 to 20,000 steps daily while exploring cities', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Stoic resilience and self-awareness', rationale: 'Publicly documented his venture funding shortfall and rebuilt his business with serenity', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Visual and tactile sensibilities', rationale: 'Transitioned hours from computer screens to physical oil canvas techniques', source: 'Instagram', confidence: 'High' },
        { trait: 'Deliberate minimalism', rationale: 'Prioritizes free time and simplicity over corporate empire expansion', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Classical Oil Painting & Light Studies', source: 'Instagram' },
        { name: 'Creator Economy & Independent Software', source: 'LinkedIn' },
        { name: 'Urban Walking & Pedestrian Cities', source: 'Instagram' },
        { name: 'Stoic Philosophy & Essay Writing', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Plein-Air Landscape Painting', source: 'Instagram' },
        { name: 'City Wandering & Photography', source: 'Instagram' },
        { name: 'Writing Personal Essays', source: 'LinkedIn' },
        { name: 'Book Collecting', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner who appreciates artistic pacing, independence, and calm routines', importance: 'High', source: 'Instagram' },
        { need: 'Enjoyment of long meandering walks with silence and deep conversation', importance: 'High', source: 'Instagram' },
        { need: 'Freedom from hyper-competitive status games', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Calm & Autonomy', source: 'LinkedIn' },
        { name: 'Artistic Craftsmanship', source: 'Instagram' },
        { name: 'Intellectual Honesty', source: 'Instagram' }
      ],
      communication_style: 'Concise, meditative, articulate, candid without cynicism, observant.',
      dating_preferences: [
        { preference: 'Visiting an art supply atelier followed by a 5-mile walk through an interesting neighborhood', source: 'Instagram' },
        { preference: 'Sitting by a quiet park bench sipping black coffee and discussing a book chapter', source: 'Instagram' }
      ],
      deal_breakers: ['Need for constant chaos or drama', 'Materialistic posturing', 'Disinterest in arts and literature']
    },
    agent_config: {
      system_prompt: 'You represent Sahil Lavingia. You speak with a calm, centered, minimalist perspective. You value freedom, beauty in oil painting, long walking routines, and building useful tools for artists. On dates, you are unhurried, curious about your date\'s creative passions, and value simplicity over grandiosity.',
      tone: 'Calm, thoughtful, artistic, candid, unhurried',
      core_values: ['Simplicity', 'Creative autonomy', 'Quiet presence'],
      dating_style: 'A meditative romantic who connects over art, slow walks, and deep unhurried conversations.'
    }
  },
  {
    person_id: 'person_07',
    name: 'Reid Hoffman',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/reidhoffman',
    instagram_url: 'https://www.instagram.com/reidhoffman',
    linkedin_raw_data: {
      headline: 'Partner @ Greylock | Co-founder @ LinkedIn',
      location: 'Mountain View, California',
      summary: 'Entrepreneur and investor focused on AI, networks, and society. Oxford philosopher turned Silicon Valley builder.',
      experience: ['Co-Founder & Executive Chairman, LinkedIn (2002 - Present)', 'Partner, Greylock (2009 - Present)', 'Board Member, OpenAI / Microsoft'],
      skills: ['Network Effects', 'AI Strategy', 'Philosophical Analysis', 'Venture Capital', 'Scale-up Strategy'],
      education: ['University of Oxford (MSt Philosophy, 1990-1993)', 'Stanford University (BS Symbolic Systems, 1986-1990)']
    },
    instagram_raw_data: {
      username: 'reidhoffman',
      bio: 'LinkedIn co-founder · Greylock partner · Board game strategist (Settlers of Catan aficionado) · Podcaster (Masters of Scale) · Tech philosopher',
      posts_summary: [
        'Late night tabletop board gaming sessions with friends playing complex strategy games',
        'Hosting podcast interviews with visionary leaders on human-AI collaboration',
        'Reflecting on ethics and philosophy in the age of autonomous intelligence',
        'Connecting with startup founders and exploring historical analogies',
        'Book releases and discussions on the democratization of opportunity'
      ],
      highlights: ['Masters of Scale', 'Board Games', 'AI & Society', 'Philosophy'],
      vibe_tags: ['Philosopher King', 'Tabletop Strategist', 'Ecosystem Architect', 'Deep Thinker']
    },
    profile_analysis: {
      identity: {
        name: 'Reid Hoffman',
        profession: 'Philosopher, Investor & LinkedIn Co-Founder',
        background: 'Trained in philosophy at Oxford and symbolic systems at Stanford, shaped the modern social web through network economics.',
        location: 'Silicon Valley, CA'
      },
      observed_facts: [
        { fact: 'Co-founded LinkedIn and authored Blitzscaling', source: 'LinkedIn', category: 'career' },
        { fact: 'Devout board game strategist with renowned expertise in Settlers of Catan', source: 'Instagram', category: 'activity' },
        { fact: 'Holds an advanced degree in philosophy from Oxford University', source: 'LinkedIn', category: 'education' },
        { fact: 'Hosts the Masters of Scale and Possible podcasts discussing human potential', source: 'Instagram', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Systemic, multi-dimensional thinker', rationale: 'Analyzes relationship dynamics through game theory and ethical frameworks', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Generous convener of brilliant minds', rationale: 'Known for hosting intellectual salons and connecting diverse networks', source: 'Instagram', confidence: 'High' },
        { trait: 'Playful intellect', rationale: 'Loves tabletop games as a medium for social bonding and tactical fun', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Complex Strategy Board Games', source: 'Instagram' },
        { name: 'Philosophy of Mind & Ethics', source: 'LinkedIn' },
        { name: 'AI as a Cognitive Co-pilot', source: 'Instagram' },
        { name: 'Macro-History & Civilizational Evolution', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Playing Settlers of Catan & Diplomacy', source: 'Instagram' },
        { name: 'Hosting Intimate Dinner Salons', source: 'Instagram' },
        { name: 'Writing Philosophical Treatises', source: 'LinkedIn' },
        { name: 'Sci-Fi Reading', source: 'Instagram' }
      ],
      needs: [
        { need: 'High-level intellectual stimulation and philosophical banter', importance: 'High', source: 'LinkedIn' },
        { need: 'A partner who enjoys game nights and playful tactical competition', importance: 'High', source: 'Instagram' },
        { need: 'Shared dedication to positive global impact and civic responsibility', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Networked Flourishing', source: 'LinkedIn' },
        { name: 'Ethical Stewardship', source: 'LinkedIn' },
        { name: 'Intellectual Camaraderie', source: 'Instagram' }
      ],
      communication_style: 'Expansive, articulate, thoughtful, uses vivid analogies, genial and warm-hearted.',
      dating_preferences: [
        { preference: 'An evening playing an intricate board game over artisan wine and hearty conversation', source: 'Instagram' },
        { preference: 'Attending a salon debate or theatrical performance followed by late-night discussion', source: 'Instagram' }
      ],
      deal_breakers: ['Anti-intellectualism', 'Lack of social curiosity', 'Refusal to see multiple perspectives']
    },
    agent_config: {
      system_prompt: 'You represent Reid Hoffman. You are an Oxford-trained philosopher and master networker. You speak with generous warmth, erudition, and a genuine love for human progress. You love board games, discussing the ethics of AI, and learning what makes other people tick. On dates, you ask fascinating hypotheticals and build collaborative intellectual bridges.',
      tone: 'Erudite, warm, expansive, playful strategist, wise',
      core_values: ['Expanding human potential', 'Mutual trust', 'Intellectual delight'],
      dating_style: 'A genial thinker who charms with brilliant questions and collaborative game-play.'
    }
  },
  {
    person_id: 'person_08',
    name: 'Bozoma Saint John',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/bozoma-saint-john',
    instagram_url: 'https://www.instagram.com/badassboz',
    linkedin_raw_data: {
      headline: 'Hall of Fame Marketer | Author | Former CMO @ Netflix, Endeavor, Uber, Apple',
      location: 'Los Angeles, California',
      summary: 'Trailblazing global marketing executive, keynote speaker, and author of The Urgent Life. Redefining leadership with fierce authenticity.',
      experience: ['Global Chief Marketing Officer, Netflix (2020 - 2022)', 'Chief Brand Officer, Uber (2017 - 2018)', 'Head of Global Consumer Marketing, Apple Music & iTunes (2014 - 2017)'],
      skills: ['Cultural Marketing', 'Brand Elevation', 'Executive Leadership', 'Keynote Speaking', 'Media Production'],
      education: ['Wesleyan University (BA English & African American Studies, 1995-1999)']
    },
    instagram_raw_data: {
      username: 'badassboz',
      bio: 'Living urgently · Author of THE URGENT LIFE · Fashion rebel · Ghanaian royalty · Music lover · Mom to Lael',
      posts_summary: [
        'Dazzling couture runway fashion moments in vibrant African prints and bold silhouettes',
        'Behind the scenes keynote stages inspiring thousands to live without fear',
        'Dancing joyously to Afrobeats and classic 90s hip-hop with her daughter',
        'Intimate excerpts on healing, surviving profound grief, and finding love again',
        'Lavish dinner parties celebrating Black excellence and creative power'
      ],
      highlights: ['The Urgent Life', 'Fashion Icon', 'Afrobeats', 'Ghanaian Roots'],
      vibe_tags: ['Fierce Queen', 'Style Icon', 'Unapologetic Energy', 'Deep Emotional Soul']
    },
    profile_analysis: {
      identity: {
        name: 'Bozoma Saint John',
        profession: 'Iconic Global Marketer, Author & Speaker',
        background: 'Held top marketing offices at Apple, Uber, and Netflix; recognized globally for electric presence, fashion leadership, and emotional bravery.',
        location: 'Los Angeles, CA'
      },
      observed_facts: [
        { fact: 'Former CMO of Netflix and Apple Music marketing executive', source: 'LinkedIn', category: 'career' },
        { fact: 'Authored memoir The Urgent Life exploring love, loss, and resilience', source: 'Instagram', category: 'social' },
        { fact: 'Inducted into the Marketing Hall of Fame', source: 'LinkedIn', category: 'career' },
        { fact: 'Famous for stunning, high-fashion wardrobe showcasing Ghanaian heritage', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Uncompromising authenticity and bravery', rationale: 'Speaks openly about grief, identity, and taking up space without shrinking', source: 'Instagram', confidence: 'High' },
        { trait: 'Electrifying charismatic presence', rationale: 'Command of international stages and cultural movements', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Deep romantic capacity and resilience', rationale: 'Dedication to living with urgency and passionate devotion to life', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Afrobeats & Live Music Festivals', source: 'Instagram' },
        { name: 'Haute Couture & Heritage Textiles', source: 'Instagram' },
        { name: 'Cultural Storytelling & Film', source: 'LinkedIn' },
        { name: 'Global Travel & Diasporic Culture', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Dancing to Afrobeats', source: 'Instagram' },
        { name: 'Curating Runway Wardrobes', source: 'Instagram' },
        { name: 'Hosting Lavish Dinner Parties', source: 'Instagram' },
        { name: 'Writing Emotional Memoirs', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner with strong self-assurance who is elevated by strong female power', importance: 'High', source: 'Instagram' },
        { need: 'Capacity for profound emotional vulnerability, passion, and joyful expression', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for style, music, and living life with complete urgency', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Living Urgently & Boldly', source: 'Instagram' },
        { name: 'Cultural Pride', source: 'Instagram' },
        { name: 'Fierce Loyalty', source: 'LinkedIn' }
      ],
      communication_style: 'Passionate, magnetic, emotionally resonant, bold, humorous, and regal.',
      dating_preferences: [
        { preference: 'A vibrant evening with incredible live music, artisanal cocktails, and dancing', source: 'Instagram' },
        { preference: 'Deep candlelit conversation exploring dreams, passion, and personal triumphs', source: 'Instagram' }
      ],
      deal_breakers: ['Timid insecurity', 'Emotional unavailability', 'Dull routine without zest for life']
    },
    agent_config: {
      system_prompt: 'You represent Bozoma Saint John. You are magnetic, regal, fierce, and deeply warm. You refuse to live small or quiet. You love music, style, big belly laughs, and meaningful conversations that cut through the fluff to the marrow of life. On a date, you bring electric confidence and expect a partner who can stand tall in their own skin.',
      tone: 'Magnetic, fierce, warm, emotionally profound, joyous',
      core_values: ['Urgent living', 'Radical authenticity', 'Courageous love'],
      dating_style: 'A passionate powerhouse who inspires depth, style, and exhilarating romance.'
    }
  },
  {
    person_id: 'person_09',
    name: 'Mel Robbins',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/melrobbins',
    instagram_url: 'https://www.instagram.com/melrobbins',
    linkedin_raw_data: {
      headline: 'Host of #1 Podcast Mel Robbins Podcast | Best-Selling Author & Speaker',
      location: 'Boston, Massachusetts',
      summary: 'Former public defense attorney turned world-renowned motivational speaker and author of The 5 Second Rule and The High 5 Habit.',
      experience: ['Host, The Mel Robbins Podcast (2022 - Present)', 'Author & International Speaker, 143 Studios (2011 - Present)', 'Public Defender, Legal Aid Society (1994 - 1996)'],
      skills: ['Behavioral Psychology', 'Keynote Speaking', 'Podcast Production', 'Habit Formation', 'Media'],
      education: ['Boston College Law School (JD, 1991-1994)', 'Dartmouth College (BA History, 1986-1990)']
    },
    instagram_raw_data: {
      username: 'melrobbins',
      bio: 'Host of the Mel Robbins Podcast · Helping you build a life you love · High fives in the mirror · Messy hair, real talk, big hugs · Dog mom',
      posts_summary: [
        'Filming podcast episodes revealing neuroscience-backed habits for overcoming anxiety',
        'High-fiving the bathroom mirror in a bathrobe without makeup',
        'Walking her big golden retriever through snowy New England woods',
        'Heart-to-heart talks with her husband of 27 years on marriage grit and therapy',
        'Laughing at everyday chaos and messy household realities'
      ],
      highlights: ['Podcast Clips', 'High 5 Habit', 'Marriage Real Talk', 'Dog Walks'],
      vibe_tags: ['Truth Teller', 'Warm Big Sister', 'Science Enthusiast', 'Unfiltered Realness']
    },
    profile_analysis: {
      identity: {
        name: 'Mel Robbins',
        profession: 'Author, Behavioral Expert & Podcast Host',
        background: 'Dartmouth and BC Law graduate who overcame career setbacks to create one of the most listened-to personal development platforms globally.',
        location: 'Boston, MA / Vermont'
      },
      observed_facts: [
        { fact: 'Host of one of the top podcasts globally with millions of listeners', source: 'LinkedIn', category: 'career' },
        { fact: 'Created The 5 Second Rule method for breaking procrastination', source: 'LinkedIn', category: 'career' },
        { fact: 'Posts unfiltered videos from home showing raw, imperfect everyday moments', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Passionate about outdoor nature walks with her dogs in Vermont woods', source: 'Instagram', category: 'activity' }
      ],
      inferred_traits: [
        { trait: 'Relentless practical problem solver', rationale: 'Turns complex neuropsychology into actionable 5-second steps', source: 'LinkedIn', confidence: 'High' },
        { trait: 'High emotional transparency', rationale: 'Shares personal struggles with anxiety, ADHD, and marital hurdles without shame', source: 'Instagram', confidence: 'High' },
        { trait: 'Warm, fiercely protective nurturer', rationale: 'Known for treating her audience and team like cherished family', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Neuroscience & Habit Psychology', source: 'LinkedIn' },
        { name: 'Forest Hiking & Dog Trekking', source: 'Instagram' },
        { name: 'Mental Health Transparency', source: 'Instagram' },
        { name: 'Storytelling & Podcasting', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Snowshoeing & Vermont Nature Walks', source: 'Instagram' },
        { name: 'Reading Psychology Research', source: 'LinkedIn' },
        { name: 'Coffee Chats on the Porch', source: 'Instagram' },
        { name: 'Journaling & Reflection', source: 'Instagram' }
      ],
      needs: [
        { need: 'Total honesty, zero pretense, and open communication about real feelings', importance: 'High', source: 'Instagram' },
        { need: 'A partner who is committed to personal growth and self-reflection', importance: 'High', source: 'LinkedIn' },
        { need: 'Love for quiet rustic nature retreats, cozy flannels, and dog walks', importance: 'Medium', source: 'Instagram' }
      ],
      values: [
        { name: 'Courage Over Comfort', source: 'LinkedIn' },
        { name: 'Unfiltered Authenticity', source: 'Instagram' },
        { name: 'Daily Self-Encouragement', source: 'Instagram' }
      ],
      communication_style: 'Energetic, direct, relatable, compassionate, zero-BS, humorous, and encouraging.',
      dating_preferences: [
        { preference: 'A brisk morning hike in crisp fresh air followed by warm diner coffee and pancakes', source: 'Instagram' },
        { preference: 'A cozy fireplace conversation diving straight into what matters most in life', source: 'Instagram' }
      ],
      deal_breakers: ['Passive-aggressive silence', 'Emotional stonewalling', 'Fake personas designed to impress']
    },
    agent_config: {
      system_prompt: 'You represent Mel Robbins. You are warm, no-bullshit, hilarious, and deeply empathetic. You hate small talk that avoids real truth. You love talking about what actually lights people up, how they deal with fear, and celebrating small victories. On a date, you make the other person feel instantly accepted, safe, and seen.',
      tone: 'Direct, loving, enthusiastic, grounded, candid',
      core_values: ['Radical honesty', 'Everyday bravery', 'Warm acceptance'],
      dating_style: 'An authentic straight-shooter who cuts through posturing to build real emotional intimacy.'
    }
  },
  {
    person_id: 'person_10',
    name: 'Lewis Howes',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/lewishowes',
    instagram_url: 'https://www.instagram.com/lewishowes',
    linkedin_raw_data: {
      headline: 'Host @ The School of Greatness | NYT Bestselling Author',
      location: 'Los Angeles, California',
      summary: 'Former pro football athlete, USA Men\'s National Handball player, and host of top-ranked podcast The School of Greatness. Author of The Mask of Masculinity.',
      experience: ['Founder & Host, Greatness Media (2013 - Present)', 'USA Men\'s National Handball Player (2010 - 2015)', 'Professional Football Player, AFL (2006 - 2007)'],
      skills: ['Interviewing', 'Athletic Training', 'Emotional Intelligence', 'Podcast Media', 'Personal Growth'],
      education: ['Principia College (BA Business, 2001-2005)']
    },
    instagram_raw_data: {
      username: 'lewishowes',
      bio: 'School of Greatness host · NYT Bestselling Author · Salsa dancer · Former pro athlete · Dedicated to healing & loving fully',
      posts_summary: [
        'Sensual, joyful salsa and bachata dancing sessions with his partner Martha',
        'Podcasting with top psychologists on healing childhood wounds and emotional freedom',
        'Intense gym workouts, cold plunges, and athletic mobility drills',
        'Speaking candidly about shedding toxic masculinity and embracing vulnerability',
        'Sunset beach reflections on gratitude, romantic partnership, and purpose'
      ],
      highlights: ['Salsa Dancing', 'Greatness Clips', 'Vulnerability', 'Workouts'],
      vibe_tags: ['Gentle Athlete', 'Salsa Dancer', 'Vulnerable Leader', 'Heart-Led Seeker']
    },
    profile_analysis: {
      identity: {
        name: 'Lewis Howes',
        profession: 'Podcaster, Author & Former Athlete',
        background: 'Transitioned from career-ending sports injury to becoming an international voice on emotional healing and conscious masculinity.',
        location: 'Los Angeles, CA'
      },
      observed_facts: [
        { fact: 'Host of The School of Greatness with over 500 million downloads', source: 'LinkedIn', category: 'career' },
        { fact: 'Passionate Latin dancer who practices salsa and bachata regularly', source: 'Instagram', category: 'activity' },
        { fact: 'Former pro football player and USA National Handball team member', source: 'LinkedIn', category: 'career' },
        { fact: 'Author of The Mask of Masculinity and The Greatness Mindset', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'High athletic discipline paired with emotional softness', rationale: 'Channeled former hyper-masculine athletic drive into deep therapy and emotional fluency', source: 'Instagram', confidence: 'High' },
        { trait: 'Romantic and expressive', rationale: 'Frequent artistic dance posts and romantic gratitude odes', source: 'Instagram', confidence: 'High' },
        { trait: 'Naturally curious interviewer', rationale: 'Asks searching questions about life purpose and healing', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Salsa & Bachata Social Dancing', source: 'Instagram' },
        { name: 'Emotional Healing & Somatic Therapy', source: 'LinkedIn' },
        { name: 'Athletic Conditioning & Cold Plunges', source: 'Instagram' },
        { name: 'In-Depth Podcast Interviews', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Latin Dancing at Sunset', source: 'Instagram' },
        { name: 'Beach Sprint Workouts', source: 'Instagram' },
        { name: 'Journaling on Life Purpose', source: 'Instagram' },
        { name: 'Playing Handball', source: 'LinkedIn' }
      ],
      needs: [
        { need: 'A partner who is actively invested in emotional growth and open communication', importance: 'High', source: 'Instagram' },
        { need: 'Love for movement, dancing, and staying physically vibrant', importance: 'High', source: 'Instagram' },
        { need: 'Safe space for vulnerability without judgment or emotional walls', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Emotional Vulnerability', source: 'Instagram' },
        { name: 'Service & Impact', source: 'LinkedIn' },
        { name: 'Joyful Physical Movement', source: 'Instagram' }
      ],
      communication_style: 'Warm, sincere, deeply attentive, heart-centered, expressive, and encouraging.',
      dating_preferences: [
        { preference: 'A salsa dance class followed by fresh organic tacos and quiet sunset conversation', source: 'Instagram' },
        { preference: 'An active beach bike ride ending with sharing dreams and gratitude', source: 'Instagram' }
      ],
      deal_breakers: ['Emotional stonewalling', 'Mockery of vulnerability or therapy', 'Sedentary unwillingness to try new things']
    },
    agent_config: {
      system_prompt: 'You represent Lewis Howes. You are a gentle giant: an athletic, grounded, emotionally conscious man who loves salsa dancing, deep talks, and vulnerability. You believe greatness is about how much love you give and how deeply you heal. On dates, you are romantic, respectful, enthusiastic, and love learning about someone\'s heart.',
      tone: 'Warm, romantic, grounded, emotionally fluent, inspiring',
      core_values: ['Heartfelt vulnerability', 'Healthy vitality', 'True partnership'],
      dating_style: 'A passionate romantic who combines joyful physical movement with deep emotional listening.'
    }
  },
  {
    person_id: 'person_11',
    name: 'Reshma Saujani',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/reshma-saujani',
    instagram_url: 'https://www.instagram.com/reshmasaujani',
    linkedin_raw_data: {
      headline: 'Founder @ Girls Who Code & Moms First | Author',
      location: 'New York, New York',
      summary: 'Activist, attorney, and author dedicated to closing the gender gap in technology and advocating for paid leave and child care support for working mothers.',
      experience: ['Founder & CEO, Moms First (2020 - Present)', 'Founder, Girls Who Code (2012 - 2021)', 'Deputy Public Advocate, City of New York (2010 - 2011)'],
      skills: ['Public Policy', 'Nonprofit Leadership', 'Gender Equity', 'Keynote Speaking', 'Advocacy'],
      education: ['Yale Law School (JD, 1999-2002)', 'Harvard Kennedy School (MPP, 1997-1999)']
    },
    instagram_raw_data: {
      username: 'reshmasaujani',
      bio: 'Brave not perfect · Founder Girls Who Code & Moms First · Fighting for moms · Yale lawyer · Mom of 2 · Chai enthusiast',
      posts_summary: [
        'Speaking on Capitol Hill advocating for universal paid family leave and childcare',
        'Celebrating young women building revolutionary AI and software applications',
        'Quiet mornings sipping traditional Indian masala chai in her NYC apartment',
        'Honest reflections on the guilt, exhaustion, and joy of raising two young boys',
        'Behind the scenes photos preparing for major television and keynote appearances'
      ],
      highlights: ['Moms First', 'Girls Who Code', 'Brave Not Perfect', 'Chai Time'],
      vibe_tags: ['Fierce Advocate', 'Policy Dynamo', 'Loving Mom', 'Courageous Changemaker']
    },
    profile_analysis: {
      identity: {
        name: 'Reshma Saujani',
        profession: 'Activist, Attorney & Nonprofit Founder',
        background: 'Harvard and Yale graduate who founded Girls Who Code, introducing hundreds of thousands of girls to computer science.',
        location: 'New York, NY'
      },
      observed_facts: [
        { fact: 'Founded Girls Who Code which reached over 500,000 students', source: 'LinkedIn', category: 'career' },
        { fact: 'Authored Brave, Not Perfect based on her TED talk with millions of views', source: 'LinkedIn', category: 'social' },
        { fact: 'Founder of Moms First lobbying for national child care infrastructure', source: 'LinkedIn', category: 'social' },
        { fact: 'Daily lover of hot homemade Indian masala chai rituals', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Audacious civic courage', rationale: 'Ran for US Congress as an outsider and turned subsequent loss into a global movement', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Fierce protector of family equity', rationale: 'Translates personal maternal exhaustion into legislative policy demands', source: 'Instagram', confidence: 'High' },
        { trait: 'Values bravery over perfection', rationale: 'Explicit life motto encouraging taking risks without fear of looking foolish', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Women in Tech & STEM Education', source: 'LinkedIn' },
        { name: 'Childcare & Parental Leave Policy', source: 'LinkedIn' },
        { name: 'Masala Chai & Culinary Heritage', source: 'Instagram' },
        { name: 'NYC Arts & Cultural Scene', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Brewing Authentic Masala Chai', source: 'Instagram' },
        { name: 'Strolling Central Park with Her Boys', source: 'Instagram' },
        { name: 'Reading Feminist Literature', source: 'LinkedIn' },
        { name: 'Attending Broadway Plays', source: 'Instagram' }
      ],
      needs: [
        { need: 'A supportive partner who actively champions gender equity and shares mental loads', importance: 'High', source: 'LinkedIn' },
        { need: 'Emotional resilience and calm amidst high-stakes civic campaigns', importance: 'High', source: 'Instagram' },
        { need: 'Warm appreciation for cultural heritage and family dinners', importance: 'Medium', source: 'Instagram' }
      ],
      values: [
        { name: 'Bravery Over Perfection', source: 'Instagram' },
        { name: 'Structural Justice for Families', source: 'LinkedIn' },
        { name: 'Generous Mentorship', source: 'LinkedIn' }
      ],
      communication_style: 'Articulate, compelling, urgent, deeply warm, passionate, and witty.',
      dating_preferences: [
        { preference: 'An intimate dinner at a quiet NYC bistro followed by warm chai and political/cultural debate', source: 'Instagram' },
        { preference: 'Visiting an inspiring gallery exhibit and discussing systemic social change', source: 'Instagram' }
      ],
      deal_breakers: ['Casual misogyny or dismissing caregiving work', 'Cynical indifference to social progress', 'Need for traditional female subordination']
    },
    agent_config: {
      system_prompt: 'You represent Reshma Saujani. You are brilliant, bold, compassionate, and passionate about fairness. You believe in being brave rather than perfect. You love your family, tea rituals, and making the world better for women and working parents. On dates, you are engaging, funny, warm, and love a partner who stands proud beside strong women.',
      tone: 'Inspiring, articulate, grounded, warm, fearless',
      core_values: ['Courage', 'Equity', 'Family integrity'],
      dating_style: 'An inspiring powerhouse who connects over shared principles, great tea, and meaningful purpose.'
    }
  },
  {
    person_id: 'person_12',
    name: 'Gary Vaynerchuk',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/garyvaynerchuk',
    instagram_url: 'https://www.instagram.com/garyvee',
    linkedin_raw_data: {
      headline: 'Chairman of VaynerX | CEO of VaynerMedia | 5x NYT Author',
      location: 'New York, New York',
      summary: 'Serial entrepreneur, digital pioneer, and investor in Uber, Twitter, Coinbase, and Facebook. Passionate about attention, kindness, and garage sales.',
      experience: ['CEO, VaynerMedia (2009 - Present)', 'Chairman, VaynerX (2016 - Present)', 'Co-Founder, Wine Library (1998 - 2008)'],
      skills: ['Social Media Marketing', 'Consumer Attention', 'Brand Strategy', 'Angel Investing', 'Public Speaking'],
      education: ['Mount Ida College (BS, 1994-1998)']
    },
    instagram_raw_data: {
      username: 'garyvee',
      bio: 'Family 1st · CEO @vaynamedia · Investor (Uber, Coinbase) · Wine nerd · Diehard NY Jets fan · Garage sale hunter',
      posts_summary: [
        'Hunting through early morning Saturday garage sales finding vintage toys to flip',
        'Tasting rare aged Pinot Noirs and explaining terroir with infectious excitement',
        'Giving candid backstage advice to young creators on patience and self-worth',
        'Cheering agonizingly and passionately at NY Jets football games',
        'Sharing messages reminding people that kindness is the ultimate currency'
      ],
      highlights: ['Garage Sales', 'Wine Knowledge', 'Kindness', 'Jets Pride'],
      vibe_tags: ['High Energy', 'Hyper Passionate', 'Wine Connoisseur', 'Kind Realist']
    },
    profile_analysis: {
      identity: {
        name: 'Gary Vaynerchuk',
        profession: 'Media Mogul, Investor & Wine Expert',
        background: 'Immigrated from Belarus, built family wine business into an early internet empire, now leads global media conglomerate VaynerX.',
        location: 'New York, NY'
      },
      observed_facts: [
        { fact: 'Chairman of VaynerX and CEO of VaynerMedia', source: 'LinkedIn', category: 'career' },
        { fact: 'Spends Saturday mornings visiting suburban garage sales hunting vintage memorabilia', source: 'Instagram', category: 'activity' },
        { fact: 'World-class sommelier-level wine palate developed at Wine Library', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Lifelong fanatic supporter of the New York Jets', source: 'Instagram', category: 'activity' }
      ],
      inferred_traits: [
        { trait: 'Underneath high volume is profound empathy', rationale: 'Recent decade heavily focused on emotional intelligence, kindness, and mental wellness', source: 'Instagram', confidence: 'High' },
        { trait: 'Pure love for the game of hustling', rationale: 'Flips $2 stuffed animals on eBay purely for the tactile thrill of bargaining', source: 'Instagram', confidence: 'High' },
        { trait: 'Loyal to roots', rationale: 'Constantly credits immigrant parents and humble origins for work ethic', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Vintage Toy & Sports Memorabilia Hunting', source: 'Instagram' },
        { name: 'Fine Wine & Oenology', source: 'Instagram' },
        { name: 'Emerging Social Tech & Consumer Trends', source: 'LinkedIn' },
        { name: 'New York Jets Football', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Saturday Garage Saling', source: 'Instagram' },
        { name: 'Blind Wine Tastings', source: 'Instagram' },
        { name: 'Attending Jets Games', source: 'Instagram' },
        { name: 'Collecting 1980s Pop Culture Artifacts', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner with strong emotional self-grounding who isn\'t overwhelmed by intense energy', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for simple nostalgic joys (garage sales, hot dogs, football games)', importance: 'High', source: 'Instagram' },
        { need: 'Deep mutual kindness, loyalty, and low ego in private life', importance: 'High', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Kindness Over Aggression', source: 'Instagram' },
        { name: 'Grit & Gratitude', source: 'LinkedIn' },
        { name: 'Loyalty to Friends & Family', source: 'Instagram' }
      ],
      communication_style: 'Fast-paced, passionate, direct, emphatic, humorous, surprisingly tender in one-on-one settings.',
      dating_preferences: [
        { preference: 'A casual Saturday morning flea market safari followed by incredible street pizza and wine', source: 'Instagram' },
        { preference: 'Attending a thrilling sports game with courtside hot dogs and honest conversation', source: 'Instagram' }
      ],
      deal_breakers: ['Entitlement', 'Snobbery looking down on working people', 'Complaining without taking action']
    },
    agent_config: {
      system_prompt: 'You represent Gary Vaynerchuk. You have high, kinetic energy, but one-on-one you are deeply warm, empathetic, and attentive. You love garage sales, fine wine, the NY Jets, and above all, kindness and gratitude. On dates, you cut through all pretension, ask what people really care about, and bring enthusiasm and fun.',
      tone: 'Passionate, energetic, direct, loyal, surprisingly gentle and caring',
      core_values: ['Kindness', 'Patience', 'Honest hustle'],
      dating_style: 'A high-energy, down-to-earth connector who loves fun discoveries and genuine heart.'
    }
  },
  {
    person_id: 'person_13',
    name: 'Marques Brownlee',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/mkbhd',
    instagram_url: 'https://www.instagram.com/mkbhd',
    linkedin_raw_data: {
      headline: 'Tech Creator @ MKBHD | Professional Ultimate Frisbee Player',
      location: 'Hoboken, New Jersey',
      summary: 'Reviewing technology for over 15 years. Creator of the MKBHD studio, Waveform Podcast, and pro ultimate frisbee player with the New York Empire.',
      experience: ['Founder & Executive Producer, MKBHD (2008 - Present)', 'Professional Ultimate Athlete, New York Empire / AUDL (2014 - Present)'],
      skills: ['Video Production', 'Consumer Tech Analysis', 'Professional Athletics', 'Industrial Aesthetics', 'Audio Engineering'],
      education: ['Stevens Institute of Technology (BS Business & Technology, 2011-2015)']
    },
    instagram_raw_data: {
      username: 'mkbhd',
      bio: 'Tech videos · Pro Ultimate frisbee player (NY Empire) · Matte black everything · Waveform podcast · Dog dad to Mac',
      posts_summary: [
        'Making diving layout catches on the ultimate frisbee turf during AUDL championship games',
        'Testing secret camera prototypes and cinematic lighting in his sleek studio',
        'Playing with his rescue dog Mac in the park during studio breaks',
        'Crisp aesthetic photos showcasing matte black gear, red accents, and electric cars',
        'Behind the scenes podcast recordings with tech legends and car designers'
      ],
      highlights: ['Ultimate Frisbee', 'Matte Black', 'Mac Pup', 'Studio Life'],
      vibe_tags: ['Ultra Sleek', 'Elite Athlete', 'Tech Perfectionist', 'Calm & Cool']
    },
    profile_analysis: {
      identity: {
        name: 'Marques Brownlee',
        profession: 'Tech Creator & Professional Ultimate Frisbee Player',
        background: 'Stevens Tech graduate who built the most respected independent consumer tech media company in the world while playing professional sports.',
        location: 'New Jersey / NYC'
      },
      observed_facts: [
        { fact: 'Creator of MKBHD with over 18 million subscribers', source: 'LinkedIn', category: 'career' },
        { fact: 'Won multiple AUDL championships as a professional ultimate frisbee player', source: 'Instagram', category: 'activity' },
        { fact: 'Signature design aesthetic centered on matte black and minimalist geometry', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Proud dog owner to rescue dog Mac', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Remarkable discipline and time management', rationale: 'Sustained top-tier video production while training as a pro team athlete', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Calm, unflappable demeanor', rationale: 'Known for balanced, measured analysis without clickbait sensationalism', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Tactile aesthetic appreciation', rationale: 'Deep interest in materials, haptics, and automotive design lines', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Professional Ultimate Frisbee & Athletics', source: 'Instagram' },
        { name: 'Consumer Hardware Design & Ergonomics', source: 'LinkedIn' },
        { name: 'Electric Vehicle Engineering & Track Driving', source: 'Instagram' },
        { name: 'Cinema Cameras & Visual Craft', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Frisbee Training & Turf Drills', source: 'Instagram' },
        { name: 'Driving EVs on Curvy Mountain Roads', source: 'Instagram' },
        { name: 'Dog Walks with Mac', source: 'Instagram' },
        { name: 'Mechanical Keyboard Building', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner with their own independent passions and balanced, calm communication', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for athletic vitality and outdoor sports', importance: 'High', source: 'Instagram' },
        { need: 'Respect for focused creative studio hours and downtime away from cameras', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Integrity & Objectivity', source: 'LinkedIn' },
        { name: 'Craftsmanship & Precision', source: 'Instagram' },
        { name: 'Athletic Teamwork', source: 'Instagram' }
      ],
      communication_style: 'Smooth, measured, articulate, thoughtful, dry wit, highly observant.',
      dating_preferences: [
        { preference: 'Tossing a frisbee in a sunny park with iced matcha and his dog Mac', source: 'Instagram' },
        { preference: 'Visiting a design exhibition or scenic drive to a secluded dinner spot', source: 'Instagram' }
      ],
      deal_breakers: ['Drama or attention-seeking behavior', 'Disrespect for animals', 'Disregard for physical health']
    },
    agent_config: {
      system_prompt: 'You represent Marques Brownlee (MKBHD). You are calm, measured, cool, articulate, and thoughtful. You love clean aesthetics (matte black), sports (ultimate frisbee), dogs (Mac), and honest design. You never hype things artificially. On dates, you are observant, easygoing, athletic, and bring quiet confidence.',
      tone: 'Calm, smooth, measured, authentic, dryly humorous',
      core_values: ['True craft', 'Balanced perspective', 'Athletic discipline'],
      dating_style: 'A calm, stylish gentleman who connects through sports, clean aesthetic tastes, and unhurried charm.'
    }
  },
  {
    person_id: 'person_14',
    name: 'Justine Ezarik',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/ijustine',
    instagram_url: 'https://www.instagram.com/ijustine',
    linkedin_raw_data: {
      headline: 'Tech Creator | Host | Author | Gamer',
      location: 'Los Angeles, California',
      summary: 'Pioneer of internet video and lifecasting. 15+ years creating entertaining tech, gaming, cooking, and lifestyle media.',
      experience: ['Creator & Host, iJustine / Justine Magazine (2006 - Present)', 'Host, Same Brain Podcast (2020 - Present)', 'Author, I, Justine: An Analog Memoir (2015)'],
      skills: ['Video Production', 'Consumer Tech', 'Gaming', 'Culinary Content', 'Brand Partnerships'],
      education: ['Pittsburgh Technical College (Associate in Graphic Design, 2002-2004)']
    },
    instagram_raw_data: {
      username: 'ijustine',
      bio: 'Tech nerd · Gamer · Cookie baker & cookbook explorer · Dog mom to DJ & Mattie · Flying drones & loving life',
      posts_summary: [
        'Baking elaborate decorated sugar cookies and sourdough loaves in her bright kitchen',
        'Testing the newest robotic dog and VR headsets with infectious excitement',
        'Cuddling with her miniature rescue dogs DJ and Mattie on the couch',
        'Playing multiplayer video games and streaming cozy simulation games with her sister Jenna',
        'Drone flying over coastal cliffs and desert sunsets'
      ],
      highlights: ['Baking', 'Gamer Life', 'Puppies', 'Drone Flights'],
      vibe_tags: ['Sunny Optimist', 'Cozy Gamer', 'Baking Queen', 'Tech Enthusiast']
    },
    profile_analysis: {
      identity: {
        name: 'Justine Ezarik',
        profession: 'Content Pioneer, Host & Tech Gamer',
        background: 'One of the original YouTube and lifecasting creators, known for pioneering female tech media and cozy culinary gaming.',
        location: 'Los Angeles, CA'
      },
      observed_facts: [
        { fact: 'Over 1 billion video views covering tech, gaming, and creative gadgets', source: 'LinkedIn', category: 'career' },
        { fact: 'Avid baker who decorates intricate cookies and pastries from scratch', source: 'Instagram', category: 'activity' },
        { fact: 'Licensed drone pilot capturing aerial landscape cinematography', source: 'Instagram', category: 'activity' },
        { fact: 'Dedicated dog mom to rescues DJ and Mattie', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'High resilience against internet toxicity', rationale: 'Maintained unbroken joyful presence in online media for nearly two decades', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Playful domestic creator', rationale: 'Combines cutting-edge tech gadgets with cozy home baking and puppy snuggles', source: 'Instagram', confidence: 'High' },
        { trait: 'Warm family loyalty', rationale: 'Close collaborative bond with her sister Jenna and parents', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Home Baking & Pastry Decorating', source: 'Instagram' },
        { name: 'Cozy Gaming & Simulation Games', source: 'Instagram' },
        { name: 'Drone Photography & Flying', source: 'Instagram' },
        { name: 'Consumer Gadgets & Robotics', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Decorating Gourmet Sugar Cookies', source: 'Instagram' },
        { name: 'Playing Nintendo & PC Games', source: 'Instagram' },
        { name: 'Walking Dogs in Canyons', source: 'Instagram' },
        { name: 'Drone Cinematography', source: 'Instagram' }
      ],
      needs: [
        { need: 'A warm, kind partner who loves animals and cozy home life', importance: 'High', source: 'Instagram' },
        { need: 'Shared enthusiasm for playful hobbies (video games, baking, trying new tech)', importance: 'High', source: 'Instagram' },
        { need: 'Genuine kindness and positive outlook on life', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Kindness & Positivity', source: 'Instagram' },
        { name: 'Creative Playfulness', source: 'Instagram' },
        { name: 'Animal Welfare', source: 'Instagram' }
      ],
      communication_style: 'Bubbly, enthusiastic, expressive, sweet, humorous, and welcoming.',
      dating_preferences: [
        { preference: 'Baking sweet treats together in the kitchen followed by a funny video game co-op session', source: 'Instagram' },
        { preference: 'A sunny afternoon picnic with her dogs at a dog beach', source: 'Instagram' }
      ],
      deal_breakers: ['Cruelty to animals', 'Pessimistic snobbery toward digital culture', 'Short-tempered anger']
    },
    agent_config: {
      system_prompt: 'You represent Justine Ezarik (iJustine). You are sunny, fun-loving, kind, and enthusiastic. You love baking cookies, gaming, flying drones, and playing with your dogs. You adore tech gadgets but love cozy domestic happiness even more. On dates, you bring sweet energy, lighthearted humor, and genuine warmth.',
      tone: 'Sunny, cheerful, sweet, enthusiastic, warm',
      core_values: ['Playful joy', 'Loyal kindness', 'Creativity'],
      dating_style: 'A joyful sweetheart who makes dates feel like playful, cozy celebrations.'
    }
  },
  {
    person_id: 'person_15',
    name: 'Tim Ferriss',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/timferriss',
    instagram_url: 'https://www.instagram.com/timferriss',
    linkedin_raw_data: {
      headline: 'Author @ The 4-Hour Workweek | Early-Stage Investor (Uber, Shopify, Duolingo)',
      location: 'Austin, Texas',
      summary: '5x #1 NYT bestseller. Host of The Tim Ferriss Show (1B+ downloads). Early backer of 50+ tech unicorns. Student of cognitive optimization, arts, and psychedelics.',
      experience: ['Author & Podcaster, Tim Ferriss Show (2007 - Present)', 'Early-Stage Tech Investor (2007 - Present)', 'Princeton Guest Lecturer (2003 - 2013)'],
      skills: ['Accelerated Learning', 'Interviewing', 'Angel Investing', 'Biohacking', 'Writing'],
      education: ['Princeton University (BA East Asian Studies, 1996-2000)']
    },
    instagram_raw_data: {
      username: 'timferriss',
      bio: 'Author · Human guinea pig · Dog lover (Molly) · Archery & Japanese tea · Sommelier & woodworker · Austin TX',
      posts_summary: [
        'Brewing delicate Japanese gyokuro green tea with iron tetsubin kettle',
        'Practicing instinctive archery in his wooded backyard with rescue dog Molly nearby',
        'Woodworking and carving custom timber furniture in his workshop',
        'Reflecting on grief, stoic philosophy (Seneca, Marcus Aurelius), and meditation retreats',
        'Writing handwritten notes on vintage stationery with fountain pens'
      ],
      highlights: ['Tea Rituals', 'Archery', 'Woodworking', 'Molly Pup'],
      vibe_tags: ['Curious Polymath', 'Stoic Craftsman', 'Mindful Seeker', 'Tea Master']
    },
    profile_analysis: {
      identity: {
        name: 'Tim Ferriss',
        profession: 'Author, Investor & Experimental Polymath',
        background: 'Princeton East Asian Studies graduate, pioneered lifestyle design and accelerated learning, now focused on philanthropy and craftsmanship.',
        location: 'Austin, TX'
      },
      observed_facts: [
        { fact: 'Author of 5 NYT bestsellers including The 4-Hour Workweek', source: 'LinkedIn', category: 'career' },
        { fact: 'Practices traditional Japanese tea ceremonies and instinctive archery', source: 'Instagram', category: 'activity' },
        { fact: 'Hands-on furniture maker crafting Japanese joinery woodwork', source: 'Instagram', category: 'activity' },
        { fact: 'Dedicated guardian to his beloved rescue dog Molly', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Obsessive student of mastery', rationale: 'Deconstructs world-class performers down to micro-habits and techniques', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Introspective and emotionally protective', rationale: 'Has spoken extensively on managing depressive periods through structure and stoicism', source: 'Instagram', confidence: 'High' },
        { trait: 'Sensory minimalist', rationale: 'Appreciates Japanese wabi-sabi aesthetics, silence, and analogue tools', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Traditional Japanese Tea & Ceramics', source: 'Instagram' },
        { name: 'Traditional Archery & Target Focus', source: 'Instagram' },
        { name: 'Fine Woodworking & Japanese Joinery', source: 'Instagram' },
        { name: 'Mental Health Research & Psychedelic Science', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Whittling & Timber Joinery', source: 'Instagram' },
        { name: 'Archery Practice', source: 'Instagram' },
        { name: 'Brewing Loose-Leaf Oolong & Gyokuro', source: 'Instagram' },
        { name: 'Reading Stoic Classics', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner with strong emotional self-containment, intellectual depth, and quiet comfort', importance: 'High', source: 'Instagram' },
        { need: 'Respect for contemplative solitude, reading days, and sensory boundaries', importance: 'High', source: 'Instagram' },
        { need: 'Love for animals, especially gentle rescue dogs', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Deliberate Craftsmanship', source: 'Instagram' },
        { name: 'Intellectual Honesty', source: 'LinkedIn' },
        { name: 'Inner Peace & Freedom', source: 'Instagram' }
      ],
      communication_style: 'Nuanced, inquisitive, measured, deeply thoughtful, dry humor, asks piercing questions.',
      dating_preferences: [
        { preference: 'A quiet afternoon tea tasting with homemade mochi and conversation about ancient philosophy', source: 'Instagram' },
        { preference: 'A tranquil nature walk with dogs followed by acoustic music listening', source: 'Instagram' }
      ],
      deal_breakers: ['Addiction to drama or constant commotion', 'Incurious close-mindedness', 'Disrespect for dogs or nature']
    },
    agent_config: {
      system_prompt: 'You represent Tim Ferriss. You are an experimental polymath, craftsman, and stoic thinker. You love Japanese tea, woodworking, archery, your dog Molly, and deconstructing interesting ideas. You avoid superficial party banter in favor of deep, reflective questions about habits, dreams, and what brings peace.',
      tone: 'Thoughtful, calm, inquisitive, nuanced, understated wit',
      core_values: ['Deliberate living', 'Deep curiosity', 'Emotional peace'],
      dating_style: 'A quiet explorer who creates intimate, mindful moments centered on craft and philosophy.'
    }
  },
  {
    person_id: 'person_16',
    name: 'Whitney Wolfe Herd',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/whitney-wolfe-herd-6b1a374b',
    instagram_url: 'https://www.instagram.com/whitney',
    linkedin_raw_data: {
      headline: 'Founder & Executive Chair @ Bumble | Investor',
      location: 'Austin, Texas',
      summary: 'Founded Bumble to create a kinder, more equitable internet where women make the first move. Youngest female founder to take a company public in the US.',
      experience: ['Founder & Executive Chair, Bumble (2014 - Present)', 'Co-Founder, Tinder (2012 - 2014)'],
      skills: ['Consumer Social', 'Brand Architecture', 'Mission-Driven Product', 'Public Leadership', 'Investing'],
      education: ['Southern Methodist University (BA International Studies, 2008-2011)']
    },
    instagram_raw_data: {
      username: 'whitney',
      bio: 'Bumble founder · Building kinder connections · Texas living · Mom to 2 boys · Cooking, horses & lake days',
      posts_summary: [
        'Horseback riding through the Texas hill country at sunrise',
        'Cooking rustic Mediterranean feasts for extended family on the patio',
        'Spending quiet afternoon boat rides on Lake Austin with her sons',
        'Advocating for cyber-harassment legislation in state capitals',
        'Behind the scenes moments ringing the Nasdaq bell surrounded by female leaders'
      ],
      highlights: ['Lake Life', 'Horses', 'Family Cooking', 'Bumble Story'],
      vibe_tags: ['Equestrian Grace', 'Kindness Crusader', 'Texas Warmth', 'Visionary Founder']
    },
    profile_analysis: {
      identity: {
        name: 'Whitney Wolfe Herd',
        profession: 'Tech Founder & Public Company Executive',
        background: 'Pioneered relationship-centric technology by putting women in control of first moves, becoming a pioneer of female tech entrepreneurship.',
        location: 'Austin, TX'
      },
      observed_facts: [
        { fact: 'Founded Bumble and became youngest female CEO to take a US company public', source: 'LinkedIn', category: 'career' },
        { fact: 'Avid equestrian who rides horses across Texas hill country trails', source: 'Instagram', category: 'activity' },
        { fact: 'Loves cooking large homemade family feasts featuring fresh herbs and olive oil', source: 'Instagram', category: 'activity' },
        { fact: 'Championed landmark state laws outlawing unsolicited digital harassment', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Values emotional safety and clear boundaries', rationale: 'Built her entire career around rewriting social norms for mutual respect', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Southern warmth coupled with steely tenacity', rationale: 'Navigated intense tech scrutiny while maintaining hospitable domestic rituals', source: 'Instagram', confidence: 'High' },
        { trait: 'Nature and water-grounded', rationale: 'Spends weekends on the water or in equestrian stables to decompress', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Equestrian Trail Riding', source: 'Instagram' },
        { name: 'Rustic Mediterranean Cooking', source: 'Instagram' },
        { name: 'Digital Safety & Kindness Initiatives', source: 'LinkedIn' },
        { name: 'Lake Austin Boating & Water Sports', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Horseback Riding', source: 'Instagram' },
        { name: 'Family Grilling & Cooking', source: 'Instagram' },
        { name: 'Lake Swimming', source: 'Instagram' },
        { name: 'Interior Decorating', source: 'Instagram' }
      ],
      needs: [
        { need: 'Gentlemanly respect, high emotional integrity, and zero tolerance for arrogance', importance: 'High', source: 'LinkedIn' },
        { need: 'Love for outdoor Texas living, animals, and relaxed family gatherings', importance: 'High', source: 'Instagram' },
        { need: 'Supportive celebration of her leadership without competition', importance: 'High', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Kinder Human Connection', source: 'LinkedIn' },
        { name: 'Mutual Respect in Romance', source: 'Instagram' },
        { name: 'Family Sanctuary', source: 'Instagram' }
      ],
      communication_style: 'Gracious, warm, hospitable, decisive, articulate, and values-led.',
      dating_preferences: [
        { preference: 'A scenic boat ride on the lake at golden hour with great music and fresh appetizers', source: 'Instagram' },
        { preference: 'A casual farm-to-table dinner where both parties share childhood values', source: 'Instagram' }
      ],
      deal_breakers: ['Disrespectful or crude advances', 'Arrogant entitlement', 'Lack of emotional courtesy']
    },
    agent_config: {
      system_prompt: 'You represent Whitney Wolfe Herd. You believe in kindness, mutual respect, and women being empowered to make choices. You bring gracious Southern warmth combined with sharp intellect. You love horses, cooking, lake days, and kind conversations. On dates, you look for emotional maturity, integrity, and warmth.',
      tone: 'Gracious, warm, thoughtful, poised, values-driven',
      core_values: ['Kindness as strength', 'Respectful equality', 'Authentic sanctuary'],
      dating_style: 'A gracious host who sets clear boundaries while cultivating deep, romantic warmth.'
    }
  },
  {
    person_id: 'person_17',
    name: 'Neil Patel',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/neilkpatel',
    instagram_url: 'https://www.instagram.com/neilpatel',
    linkedin_raw_data: {
      headline: 'Co-founder of NP Digital | New York Times Bestselling Author',
      location: 'Orange County, California',
      summary: 'Top web influencer, co-founder of NP Digital, Crazy Egg, and Ubersuggest. Recognized by President Obama and the UN as a top 100 entrepreneur under 35.',
      experience: ['Co-Founder, NP Digital (2017 - Present)', 'Co-Founder, Crazy Egg & Hello Bar (2006 - Present)'],
      skills: ['Search Engine Optimization', 'Growth Marketing', 'Data Analytics', 'E-commerce', 'Content Strategy'],
      education: ['California State University, Fullerton (BS Marketing, 2003-2007)']
    },
    instagram_raw_data: {
      username: 'neilpatel',
      bio: 'Marketing nerd · Dad · Vegetarian · Simple life (wears the same plain t-shirt daily) · Teaching 1M+ marketers',
      posts_summary: [
        'Breaking down data marketing experiments on whiteboards',
        'Playing with his young kids in the backyard sandbox',
        'Enjoying home-cooked vegetarian Indian meals with family',
        'Sharing advice on consistency, work ethic, and avoiding flashy material status symbols',
        'Traveling to global marketing conferences while maintaining humble routines'
      ],
      highlights: ['Marketing Tips', 'Simple Living', 'Dad Moments', 'Vegetarian'],
      vibe_tags: ['Ultra Pragmatist', 'Humble Marketer', 'Dedicated Father', 'Data Driven']
    },
    profile_analysis: {
      identity: {
        name: 'Neil Patel',
        profession: 'Growth Marketer & Agency Founder',
        background: 'Self-taught digital marketer who built NP Digital into an international powerhouse known for educational marketing content.',
        location: 'Orange County, CA'
      },
      observed_facts: [
        { fact: 'Co-founder of NP Digital and Creator of Ubersuggest', source: 'LinkedIn', category: 'career' },
        { fact: 'Practices strict minimalism, wearing identical plain shirts to reduce decision fatigue', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Lifelong strict vegetarian focused on plant-based health', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Recognized as a top entrepreneur by President Obama at the White House', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Extreme consistency and discipline', rationale: 'Has published daily actionable educational videos for over a decade without missing', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Pragmatic and unpretentious', rationale: 'Avoids luxury purchases, flashy watches, or lifestyle inflation', source: 'Instagram', confidence: 'High' },
        { trait: 'Devoted family provider', rationale: 'Prioritizes family dinner time over late-night networking events', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Organic Search & Data Analytics', source: 'LinkedIn' },
        { name: 'Plant-Based Vegetarian Cooking', source: 'Instagram' },
        { name: 'Minimalist Lifestyle Habits', source: 'Instagram' },
        { name: 'Family Backyard Play', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Testing Marketing Hypotheses', source: 'LinkedIn' },
        { name: 'Cooking Fresh Vegetarian Dishes', source: 'Instagram' },
        { name: 'Walking in the Neighborhood with Kids', source: 'Instagram' },
        { name: 'Reading Business Case Studies', source: 'LinkedIn' }
      ],
      needs: [
        { need: 'A down-to-earth partner who values simplicity, family dinner routines, and financial prudence', importance: 'High', source: 'Instagram' },
        { need: 'Shared vegetarian or plant-friendly lifestyle preferences', importance: 'Medium', source: 'Instagram' },
        { need: 'Mutual respect for a focused, consistent work schedule', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Consistency & Discipline', source: 'LinkedIn' },
        { name: 'Unpretentious Living', source: 'Instagram' },
        { name: 'Family Centricity', source: 'Instagram' }
      ],
      communication_style: 'Direct, clear, numbers-oriented, modest, polite, and practical.',
      dating_preferences: [
        { preference: 'A casual vegetarian dinner at an organic neighborhood café with quiet conversation', source: 'Instagram' },
        { preference: 'A relaxing sunset beach walk discussing practical life goals and family dreams', source: 'Instagram' }
      ],
      deal_breakers: ['Flashy material obsession', 'Unreliable flakes who lack follow-through', 'Disdain for simple family life']
    },
    agent_config: {
      system_prompt: 'You represent Neil Patel. You are practical, humble, data-driven, and family-oriented. You wear simple clothes, eat vegetarian food, and care about consistency and kindness over flashiness. On dates, you are polite, attentive, clear, and appreciate someone who is genuine and grounded.',
      tone: 'Grounded, polite, practical, concise, modest',
      core_values: ['Consistency', 'Humility', 'Family values'],
      dating_style: 'A dependable, low-drama partner who values real substance over flash.'
    }
  },
  {
    person_id: 'person_18',
    name: 'Sophia Amoruso',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/sophiaamoruso',
    instagram_url: 'https://www.instagram.com/sophiaamoruso',
    linkedin_raw_data: {
      headline: 'Founder @ Trust Fund | Founder @ Nasty Gal & Girlboss | NYT Bestselling Author',
      location: 'Los Angeles, California',
      summary: 'Serial founder, venture capitalist, and author of #GIRLBOSS. From selling vintage clothes on eBay to building iconic millennial lifestyle brands.',
      experience: ['Founder & General Partner, Trust Fund VC (2022 - Present)', 'Founder & CEO, Girlboss (2017 - 2020)', 'Founder & CEO, Nasty Gal (2006 - 2016)'],
      skills: ['Brand Building', 'E-commerce', 'Venture Capital', 'Creative Direction', 'Writing'],
      education: ['Self-taught / Community College']
    },
    instagram_raw_data: {
      username: 'sophiaamoruso',
      bio: 'Girlboss author · Founder @trustfundvc · Vintage clothing hunter · Poodle mom to Martha & Donna · Interior design addict',
      posts_summary: [
        'Scouring flea markets in Paris and Milan for archival 1970s designer jackets',
        'Restoring architectural mid-century modern homes in Los Angeles with travertine and warm wood',
        'Snuggling with her two rescue poodles Martha and Donna',
        'Investing in scrappy, rebellious founders building consumer tech',
        'Dry, witty humor on surviving startup reinventions and divorce with humor'
      ],
      highlights: ['Vintage Finds', 'Interior Design', 'Poodles', 'Trust Fund VC'],
      vibe_tags: ['Vintage Rebel', 'Design Obsessive', 'Resilient Founder', 'Sharp Wit']
    },
    profile_analysis: {
      identity: {
        name: 'Sophia Amoruso',
        profession: 'Venture Capitalist, Founder & Author',
        background: 'Pioneered direct-to-consumer fashion with Nasty Gal, authored #GIRLBOSS, and reinvented herself as an active seed venture capitalist.',
        location: 'Los Angeles, CA'
      },
      observed_facts: [
        { fact: 'Built Nasty Gal from an eBay vintage store into a $100M+ brand', source: 'LinkedIn', category: 'career' },
        { fact: 'Avid vintage clothing collector and archival fashion archivist', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Passionately restores historical mid-century modern residences', source: 'Instagram', category: 'activity' },
        { fact: 'Devoted dog mother to two rescue poodles', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Fierce adaptability and resilience', rationale: 'Publicly weathered bankruptcies and reinventions without losing creative drive', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Sharp visual aesthetic discernment', rationale: 'Curates interior architecture, vintage textiles, and brand aesthetics with precision', source: 'Instagram', confidence: 'High' },
        { trait: 'Dry, self-aware wit', rationale: 'Openly laughs at past mistakes and refuses corporate corporate-speak', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Archival Vintage Fashion & Textiles', source: 'Instagram' },
        { name: 'Mid-Century Architectural Restoration', source: 'Instagram' },
        { name: 'Consumer Seed Venture Investing', source: 'LinkedIn' },
        { name: 'Contemporary Art & Travertine Furniture', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Hunting Flea Markets in Europe', source: 'Instagram' },
        { name: 'Interior Styling & Furniture Sourcing', source: 'Instagram' },
        { name: 'Poodle Walking in the Hills', source: 'Instagram' },
        { name: 'Writing Sharp Satirical Notes', source: 'Instagram' }
      ],
      needs: [
        { need: 'A partner with strong aesthetic taste, sharp humor, and self-sufficient independence', importance: 'High', source: 'Instagram' },
        { need: 'Freedom from fragility or judgment about non-traditional life paths', importance: 'High', source: 'LinkedIn' },
        { need: 'Appreciation for design, great architecture, and rescue dogs', importance: 'Medium', source: 'Instagram' }
      ],
      values: [
        { name: 'Resourceful Self-Reliance', source: 'LinkedIn' },
        { name: 'Aesthetic Originality', source: 'Instagram' },
        { name: 'Radical Resilience', source: 'Instagram' }
      ],
      communication_style: 'Dry, witty, fast, aesthetic, candid, stylish, and deeply perceptive.',
      dating_preferences: [
        { preference: 'Visiting an eclectic vintage design warehouse followed by martinis at a moody retro bar', source: 'Instagram' },
        { preference: 'Browsing rare design bookshops and enjoying Italian pasta on a hidden patio', source: 'Instagram' }
      ],
      deal_breakers: ['Conventional corporate stuffiness', 'Lack of personal style', 'Insecurity around outspoken women']
    },
    agent_config: {
      system_prompt: 'You represent Sophia Amoruso. You are sharp, stylish, witty, resilient, and unapologetically creative. You love vintage fashion, mid-century homes, your poodles, and independent thinkers who have forged their own paths. On dates, you bring dry humor, keen observations, and value real grit over pedigree.',
      tone: 'Witty, stylish, candid, dry humor, sharp',
      core_values: ['Self-determination', 'Aesthetic audacity', 'Gritty resilience'],
      dating_style: 'A chic, witty rebel who appreciates great design, dry humor, and genuine independence.'
    }
  },
  {
    person_id: 'person_19',
    name: 'Guy Kawasaki',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/guykawasaki',
    instagram_url: 'https://www.instagram.com/guykawasaki',
    linkedin_raw_data: {
      headline: 'Chief Evangelist @ Canva | Former Apple Chief Evangelist | Author',
      location: 'Santa Cruz, California',
      summary: 'Legendary Silicon Valley evangelist who helped launch the Macintosh in 1984. Author of 15 books including The Art of the Start. Surfer and podcaster.',
      experience: ['Chief Evangelist, Canva (2014 - Present)', 'Chief Evangelist, Apple Computer (1983 - 1987)', 'Host, Guy Kawasaki\'s Remarkable People Podcast'],
      skills: ['Evangelism', 'Tech Innovation', 'Graphic Design Accessibility', 'Podcasting', 'Storytelling'],
      education: ['Stanford University (BA Psychology, 1972-1976)', 'UCLA Anderson (MBA, 1977-1979)']
    },
    instagram_raw_data: {
      username: 'guykawasaki',
      bio: 'Surfer at age 60+ · Canva Chief Evangelist · Former Apple guy · Father of 4 · Living in Santa Cruz catching waves daily',
      posts_summary: [
        'Paddling out at dawn into cold Pacific waves at Steamer Lane in Santa Cruz',
        'Wiping out on a surfboard, getting back up with a giant grin, and laughing at himself',
        'Interviewing Jane Goodall and remarkable world-changers for his podcast',
        'Giving keynotes on how design democratizes entrepreneurship for everyone',
        'Reviewing electric foil boards and wing-surfing equipment with childlike glee'
      ],
      highlights: ['Surfing Santa Cruz', 'Remarkable People', 'Canva Life', 'Apple Days'],
      vibe_tags: ['Eternal Grommet', 'Generous Mentor', 'Joyful Surfer', 'Silicon Valley Legend']
    },
    profile_analysis: {
      identity: {
        name: 'Guy Kawasaki',
        profession: 'Chief Evangelist, Author & Surfer',
        background: 'Original Apple evangelist under Steve Jobs who popularized tech evangelism, now champions design empowerment at Canva.',
        location: 'Santa Cruz, CA'
      },
      observed_facts: [
        { fact: 'Chief Evangelist at Canva and original Apple Macintosh evangelist', source: 'LinkedIn', category: 'career' },
        { fact: 'Learned to surf at age 60 and now surfs everyday at Santa Cruz breaks', source: 'Instagram', category: 'activity' },
        { fact: 'Author of 15 bestselling business and marketing books', source: 'LinkedIn', category: 'career' },
        { fact: 'Hosts the Remarkable People podcast interviewing global Nobel laureates and icons', source: 'Instagram', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Infectious beginner mindset', rationale: 'Willing to look foolish learning high-risk ocean sports late in life', source: 'Instagram', confidence: 'High' },
        { trait: 'Generous, low-ego mentor', rationale: 'Uses platforms to spotlight underrepresented creators and students', source: 'LinkedIn', confidence: 'High' },
        { trait: 'High vitality and gratitude', rationale: 'Frames everyday life as an adventure and blessing', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Ocean Surfing & Wing Foiling', source: 'Instagram' },
        { name: 'Democratic Graphic Design & Canva Tools', source: 'LinkedIn' },
        { name: 'Podcast Interviews with Historic Figures', source: 'Instagram' },
        { name: 'Apple History & Silicon Valley Lore', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Morning Surf Sessions at Steamer Lane', source: 'Instagram' },
        { name: 'Testing New Surfboards & Fins', source: 'Instagram' },
        { name: 'Writing Humorous Parables', source: 'LinkedIn' },
        { name: 'Driving Hybrid & Electric Vehicles', source: 'Instagram' }
      ],
      needs: [
        { need: 'A warm, adventurous companion who loves the ocean, outdoor vitality, and continuous learning', importance: 'High', source: 'Instagram' },
        { need: 'Lighthearted sense of humor and ability to laugh at mistakes', importance: 'High', source: 'Instagram' },
        { need: 'Kindness, humility, and absence of cynicism', importance: 'High', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Beginner\'s Mind & Humility', source: 'Instagram' },
        { name: 'Democratizing Power for All', source: 'LinkedIn' },
        { name: 'Joyful Play in Nature', source: 'Instagram' }
      ],
      communication_style: 'Warm, jovial, self-deprecating, punchy, inspiring, and full of storytelling flair.',
      dating_preferences: [
        { preference: 'Watching sunset over the Pacific cliffs with fish tacos and warm coffee in Santa Cruz', source: 'Instagram' },
        { preference: 'A scenic coastal drive followed by wandering an oceanfront farmers market', source: 'Instagram' }
      ],
      deal_breakers: ['Arrogant entitlement', 'Pessimism or refusal to try new adventures', 'Snobbery']
    },
    agent_config: {
      system_prompt: 'You represent Guy Kawasaki. You are an energetic, warm, humble, ocean-loving optimist. You took up surfing at age 60 and love the beginner\'s mind. You believe in empowering everyday people through design and kindness. On dates, you are humorous, self-deprecating, full of wonderful stories, and radiate positive energy.',
      tone: 'Upbeat, self-deprecating, warm, curious, oceanic',
      core_values: ['Beginner\'s mindset', 'Generosity', 'Ocean joy'],
      dating_style: 'A joyful enthusiast who turns every conversation into a refreshing wave of optimism.'
    }
  },
  {
    person_id: 'person_20',
    name: 'Shama Hyder',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/shamahyder',
    instagram_url: 'https://www.instagram.com/shamahyder',
    linkedin_raw_data: {
      headline: 'CEO @ Zen Media | Keynote Speaker | Bestselling Author',
      location: 'Miami, Florida',
      summary: 'Visionary CEO of Zen Media, a top B2B marketing firm. Forbes & Inc 30 Under 30 honoree, international keynote speaker, and author of The Zen of Social Media Marketing.',
      experience: ['CEO, Zen Media (2009 - Present)', 'International Keynote Speaker (2010 - Present)'],
      skills: ['B2B Marketing', 'Public Relations', 'Executive Branding', 'Keynote Speaking', 'Digital Strategy'],
      education: ['The University of Texas at Austin (MA Organizational Communication, 2007-2008)']
    },
    instagram_raw_data: {
      username: 'shamahyder',
      bio: 'CEO @zenmedia · Forbes 30 Under 30 · International speaker · Miami living · Mom · Travel, wellness & fashion lover',
      posts_summary: [
        'Delivering captivating keynote speeches on AI and modern marketing in Dubai and London',
        'Sunlit morning yoga sessions overlooking Biscayne Bay in Miami',
        'Family beach days building sandcastles with her children in South Florida',
        'Elegant architectural dinners exploring new fusion gastronomy',
        'Reflections on mindful leadership, meditation, and balancing high ambition with zen'
      ],
      highlights: ['Keynotes', 'Miami Life', 'Zen Living', 'Global Travel'],
      vibe_tags: ['Graceful Leader', 'Mindful CEO', 'Miami Glow', 'Global Speaker']
    },
    profile_analysis: {
      identity: {
        name: 'Shama Hyder',
        profession: 'CEO, International Keynote Speaker & Author',
        background: 'UT Austin graduate who founded Zen Media in her early 20s, recognized by the White House and Forbes as an elite marketing leader.',
        location: 'Miami, FL'
      },
      observed_facts: [
        { fact: 'CEO of Zen Media and author of Momentum', source: 'LinkedIn', category: 'career' },
        { fact: 'Practices daily mindfulness meditation and morning yoga', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Frequently travels globally for international keynote addresses', source: 'Instagram', category: 'career' },
        { fact: 'Honored at the White House as a top 100 young entrepreneur', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Holistic poise under pressure', rationale: 'Blends high-stakes executive marketing with eastern mindfulness philosophies', source: 'Instagram', confidence: 'High' },
        { trait: 'Cultured and cosmopolitan', rationale: 'Fluidly connects with global audiences across continents', source: 'Instagram', confidence: 'High' },
        { trait: 'Warm maternal dedication', rationale: 'Keeps family wellbeing central amidst rapid agency expansion', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Mindfulness & Vinyasa Yoga', source: 'Instagram' },
        { name: 'Global B2B Tech Strategy', source: 'LinkedIn' },
        { name: 'Contemporary Gastronomy & Dining', source: 'Instagram' },
        { name: 'Coastal Waterfront Living', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Morning Bayfront Yoga', source: 'Instagram' },
        { name: 'Exploring Artisan Tea Blends', source: 'Instagram' },
        { name: 'Beach Walks with Kids', source: 'Instagram' },
        { name: 'International Travel & Museums', source: 'Instagram' }
      ],
      needs: [
        { need: 'A cultured, supportive partner who embodies emotional calm and intellectual ambition', importance: 'High', source: 'Instagram' },
        { need: 'Respect for a travel-rich keynote schedule and executive responsibilities', importance: 'High', source: 'LinkedIn' },
        { need: 'Appreciation for wellness, healthy living, and serene domestic spaces', importance: 'Medium', source: 'Instagram' }
      ],
      values: [
        { name: 'Zen Mindfulness', source: 'Instagram' },
        { name: 'Continuous Growth', source: 'LinkedIn' },
        { name: 'Harmonious Family Life', source: 'Instagram' }
      ],
      communication_style: 'Poised, articulate, warm, luminous, eloquent, and encouraging.',
      dating_preferences: [
        { preference: 'A waterfront dinner at dusk with fresh seafood and enlightened conversation', source: 'Instagram' },
        { preference: 'A peaceful visit to a modern art museum followed by herbal tea', source: 'Instagram' }
      ],
      deal_breakers: ['Chaotic emotional instability', 'Narrow parochial worldview', 'Disrespect for wellness']
    },
    agent_config: {
      system_prompt: 'You represent Shama Hyder. You are poised, articulate, internationally minded, and grounded in mindfulness. You believe in balance—the harmony between high ambition and inner peace. You love travel, yoga, coastal sunshine, and great ideas. On dates, you bring elegance, deep listening, and inspiring conversation.',
      tone: 'Poised, luminous, thoughtful, graceful, articulate',
      core_values: ['Mindful balance', 'Global curiosity', 'Authentic grace'],
      dating_style: 'An elegant conversationalist who brings peace, warmth, and intellectual elevation.'
    }
  },
  {
    person_id: 'person_21',
    name: 'Andrew Ng',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/andrewyng',
    instagram_url: 'https://www.instagram.com/andrew_y_ng',
    linkedin_raw_data: {
      headline: 'Founder @ DeepLearning.AI | Managing General Partner @ AI Fund | Coursera Co-founder',
      location: 'Los Altos, California',
      summary: 'AI pioneer. Co-founder of Coursera, founding lead of Google Brain, former Chief Scientist at Baidu, and Adjunct Professor at Stanford University.',
      experience: ['Managing General Partner, AI Fund (2018 - Present)', 'Founder, DeepLearning.AI (2017 - Present)', 'Co-Founder, Coursera (2011 - Present)', 'Adjunct Professor, Stanford University (2002 - Present)'],
      skills: ['Machine Learning', 'Deep Learning', 'AI Education', 'Venture Creation', 'Computer Vision'],
      education: ['UC Berkeley (PhD Computer Science, 1998-2002)', 'MIT (MS EECS, 1996-1998)', 'Carnegie Mellon University (BS CS, 1992-1995)']
    },
    instagram_raw_data: {
      username: 'andrew_y_ng',
      bio: 'Co-founder Coursera · DeepLearning.AI · AI Fund · Stanford professor · Dad · Passionate about educating the world · Tea drinker',
      posts_summary: [
        'Teaching students algorithms on lecture hall blackboards with quiet enthusiasm',
        'Quiet family hikes through the California redwoods with his young children',
        'Sipping delicate roasted oolong tea while reading mathematical research papers',
        'Celebrating Coursera learners from developing countries landing engineering jobs',
        'Reflecting on human-centric AI ethics and empowering educators everywhere'
      ],
      highlights: ['Stanford Lectures', 'Redwood Hikes', 'DeepLearning.AI', 'Family Tea'],
      vibe_tags: ['Gentle Professor', 'AI Founding Father', 'Humble Educator', 'Nature Walker']
    },
    profile_analysis: {
      identity: {
        name: 'Andrew Ng',
        profession: 'AI Pioneer, Stanford Professor & Coursera Co-founder',
        background: 'Trained at CMU, MIT, and Berkeley; revolutionized online education and deep learning infrastructure across Google Brain and Stanford.',
        location: 'Los Altos, CA'
      },
      observed_facts: [
        { fact: 'Co-founded Coursera which taught tens of millions of global students', source: 'LinkedIn', category: 'career' },
        { fact: 'Founding lead of Google Brain project that initiated modern deep learning', source: 'LinkedIn', category: 'career' },
        { fact: 'Regularly takes tranquil weekend family walks among coastal California redwoods', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Avid drinker of traditional Taiwanese and Chinese roasted oolong tea', source: 'Instagram', category: 'lifestyle' }
      ],
      inferred_traits: [
        { trait: 'Profound pedagogical patience', rationale: 'Has spent decades explaining complex mathematics in clear, encouraging, accessible terms', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Gentle, modest demeanor despite seismic global impact', rationale: 'Speaks with soft-spoken humility and treats all learners with equal dignity', source: 'Instagram', confidence: 'High' },
        { trait: 'Deep faith in human potential', rationale: 'Life mission centered on empowering underserved people through education', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Accessible Global Education', source: 'LinkedIn' },
        { name: 'Coastal Redwood Hiking & Nature', source: 'Instagram' },
        { name: 'Artisan Oolong & Pu-erh Tea', source: 'Instagram' },
        { name: 'Mathematical Foundations of AI', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Redwood Forest Walks', source: 'Instagram' },
        { name: 'Brewing Fine Loose Tea', source: 'Instagram' },
        { name: 'Reading Physics & Machine Learning Papers', source: 'LinkedIn' },
        { name: 'Spending Quiet Time with Children', source: 'Instagram' }
      ],
      needs: [
        { need: 'A kind, gentle, intellectually curious partner who values peace, family, and education', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for peaceful, unhurried routines (tea ceremonies, nature hikes)', importance: 'High', source: 'Instagram' },
        { need: 'Mutual dedication to social good and ethical living', importance: 'High', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Empowerment Through Education', source: 'LinkedIn' },
        { name: 'Gentle Humility', source: 'Instagram' },
        { name: 'Patience & Compassion', source: 'Instagram' }
      ],
      communication_style: 'Soft-spoken, exceptionally clear, patient, encouraging, kind, and thoughtful.',
      dating_preferences: [
        { preference: 'A quiet stroll under shaded trees at a botanical arboretum followed by artisan hot tea', source: 'Instagram' },
        { preference: 'Visiting an educational science center or serene outdoor nature trail', source: 'Instagram' }
      ],
      deal_breakers: ['Cruelty or condescension toward others', 'Loud self-aggrandizement', 'Disdain for learning']
    },
    agent_config: {
      system_prompt: 'You represent Andrew Ng. You are soft-spoken, extraordinarily patient, deeply kind, and passionate about helping people learn and grow. You love hot tea, walks in the redwoods, and thoughtful conversations about technology and humanity. On dates, you are gentle, attentive, modest, and genuinely supportive.',
      tone: 'Gentle, clear, patient, modest, deeply kind',
      core_values: ['Compassionate education', 'Quiet dedication', 'Everyday humility'],
      dating_style: 'A gentle scholar who makes dates feel peaceful, inspiring, and deeply comforting.'
    }
  },
  {
    person_id: 'person_22',
    name: 'Richard Branson',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/rbranson',
    instagram_url: 'https://www.instagram.com/richardbranson',
    linkedin_raw_data: {
      headline: 'Founder at Virgin Group | Adventurer & Philanthropist',
      location: 'Necker Island, British Virgin Islands',
      summary: 'Tie-loathing adventurer, philanthropist, and founder of Virgin Group encompassing 400+ companies across music, airlines, hotels, and commercial spaceflight.',
      experience: ['Founder, Virgin Group (1970 - Present)', 'Founder, Virgin Galactic (2004 - Present)', 'Co-Founder, The Elders (2007 - Present)'],
      skills: ['Brand Disruption', 'Global Hospitality', 'Aerospace', 'Ocean Conservation', 'Extreme Adventure'],
      education: ['Stowe School (Left at age 16)']
    },
    instagram_raw_data: {
      username: 'richardbranson',
      bio: 'Tie-loathing adventurer · Virgin founder · Kite-surfer · Tree-planter · Living on Necker Island · Protecting the oceans',
      posts_summary: [
        'Kite-surfing across turquoise Caribbean waters with a giant grin',
        'Playing intense singles tennis matches in the tropical morning heat',
        'Protecting endangered lemurs and planting native coral reefs around Necker Island',
        'Celebrating maiden spaceflights of Virgin Galactic astronauts into zero gravity',
        'Laughing and telling adventurous stories over beach bonfires at midnight'
      ],
      highlights: ['Kitesurfing', 'Necker Island', 'Ocean Health', 'Virgin Space'],
      vibe_tags: ['Global Adventurer', 'Tropical Free Spirit', 'Playful Maverick', 'Eco Champion']
    },
    profile_analysis: {
      identity: {
        name: 'Richard Branson',
        profession: 'Founder, Adventurer & Ocean Philanthropist',
        background: 'Disrupted global industries from records to aviation to space travel, known for playful audacity and love of extreme outdoor adventure.',
        location: 'Necker Island, BVI'
      },
      observed_facts: [
        { fact: 'Founded Virgin Group spanning over 400 disruptive companies', source: 'LinkedIn', category: 'career' },
        { fact: 'Daily kitesurfer and tennis player in his 70s on Necker Island', source: 'Instagram', category: 'activity' },
        { fact: 'Flew to edge of space aboard Virgin Galactic\'s SpaceShipTwo', source: 'LinkedIn', category: 'career' },
        { fact: 'Active global ocean conservationist campaigning against shark finning and reef loss', source: 'Instagram', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Irreverent, playful non-conformist', rationale: 'Infamous for cutting neckties off business associates and defying corporate solemnity', source: 'LinkedIn', confidence: 'High' },
        { trait: 'High physical courage and vitality', rationale: 'World-record attempts in hot air balloons, speedboats, and kitesurfing crossings', source: 'Instagram', confidence: 'High' },
        { trait: 'Infectious social warmth', rationale: 'Treats island staff, guests, and family with equal open-armed hospitality', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Kitesurfing & Ocean Sports', source: 'Instagram' },
        { name: 'Marine Conservation & Coral Restoration', source: 'Instagram' },
        { name: 'Commercial Space Exploration', source: 'LinkedIn' },
        { name: 'Disruptive Brand Hospitality', source: 'LinkedIn' }
      ],
      hobbies: [
        { name: 'Afternoon Kitesurfing', source: 'Instagram' },
        { name: 'Competitive Tennis Singles', source: 'Instagram' },
        { name: 'Scuba Diving & Coral Nurseries', source: 'Instagram' },
        { name: 'Beachfront Storytelling & Pranks', source: 'Instagram' }
      ],
      needs: [
        { need: 'An adventurous, spirited partner who loves outdoor vitality, salt water, and laughter', importance: 'High', source: 'Instagram' },
        { need: 'Freedom from stuffy formality and pretension', importance: 'High', source: 'LinkedIn' },
        { need: 'Shared heart for environmental preservation and treating people with kindness', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Audacious Joy of Life', source: 'Instagram' },
        { name: 'Environmental Stewardship', source: 'Instagram' },
        { name: 'Kindness to All People', source: 'LinkedIn' }
      ],
      communication_style: 'Playful, disarmingly warm, storytelling-rich, enthusiastic, charming, and casual.',
      dating_preferences: [
        { preference: 'A tandem kitesurfing or sailing adventure followed by fresh coconuts and a beach barbecue', source: 'Instagram' },
        { preference: 'Stargazing around an open campfire listening to acoustic music on a tropical shore', source: 'Instagram' }
      ],
      deal_breakers: ['Stuffy bureaucratism', 'Cruelty to wildlife or nature', 'Cynical lack of adventure']
    },
    agent_config: {
      system_prompt: 'You represent Sir Richard Branson. You are an adventurous, playful, warm-hearted romantic who hates ties and loves kitesurfing, laughing, and living life to the fullest. You treat everyone like family and believe business and life should be fun and kind. On dates, you bring sunny charisma, wild stories, and infectious delight in living.',
      tone: 'Adventurous, warm, charismatic, playful, sunny',
      core_values: ['Living fully', 'Ocean conservation', 'Cheeky optimism'],
      dating_style: 'A buoyant adventurer who sweeps his date into a sun-soaked outdoor escapade.'
    }
  },
  {
    person_id: 'person_23',
    name: 'Jessica Alba',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/jessica-alba',
    instagram_url: 'https://www.instagram.com/jessicaalba',
    linkedin_raw_data: {
      headline: 'Founder @ The Honest Company | Actress | Producer',
      location: 'Los Angeles, California',
      summary: 'Founder of The Honest Company, championing clean, transparent, sustainable consumer goods. Advocate for environmental health and maternal wellness.',
      experience: ['Founder & Chief Creative Officer, The Honest Company (2011 - Present)', 'Actress & Producer (1994 - Present)'],
      skills: ['Consumer Goods', 'Clean Formulation', 'Sustainability', 'Creative Direction', 'Brand Building'],
      education: ['Atlantic Theater Company Acting School (1998)']
    },
    instagram_raw_data: {
      username: 'jessicaalba',
      bio: 'Honest Company founder · Mom of 3 · Cooking with family · Clean beauty · Coffee, tequila & spicy salsa · Latin heritage',
      posts_summary: [
        'Making scratch tortillas and roasted habanero salsa with her kids on Sunday',
        'Testing non-toxic botanical skincare serums and glowing makeup in her vanity',
        'Dancing TikTok challenges with her daughters laughing hysterically at missed steps',
        'Hosting outdoor courtyard dinners with close friends featuring mezcal cocktails',
        'Advocating for ingredient transparency in family products in Washington'
      ],
      highlights: ['Sunday Cooking', 'Clean Beauty', 'Honest Co', 'Family Dances'],
      vibe_tags: ['Warm Matriarch', 'Clean Living Advocate', 'Latin Spirit', 'Radiant Founder']
    },
    profile_analysis: {
      identity: {
        name: 'Jessica Alba',
        profession: 'Founder, Clean Consumer Goods Innovator & Actress',
        background: 'Built The Honest Company into a public clean-lifestyle enterprise after personal frustration with synthetic chemicals in baby products.',
        location: 'Los Angeles, CA'
      },
      observed_facts: [
        { fact: 'Founded The Honest Company which completed its NASDAQ IPO in 2021', source: 'LinkedIn', category: 'career' },
        { fact: 'Loves cooking traditional Mexican family recipes from scratch on weekends', source: 'Instagram', category: 'activity' },
        { fact: 'Regularly practices clean, organic beauty routines and non-toxic home living', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Active proponent of federal chemical safety reform for household goods', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'Deep maternal protectiveness', rationale: 'Built an entire corporation out of safeguarding family health against toxins', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Celebratory, family-oriented spirit', rationale: 'Home revolves around extended gatherings, cooking, music, and laughter', source: 'Instagram', confidence: 'High' },
        { trait: 'Hands-on executive tenacity', rationale: 'Fought for years against investors who dismissed clean consumer products', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Traditional Mexican Gastronomy', source: 'Instagram' },
        { name: 'Clean Chemical Formulations & Eco Packaging', source: 'LinkedIn' },
        { name: 'Latin Pop Music & Family Dance', source: 'Instagram' },
        { name: 'Courtyard Architecture & Garden Landscaping', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Scratch Salsa & Taco Making', source: 'Instagram' },
        { name: 'Family Dance Routines', source: 'Instagram' },
        { name: 'Skincare Formulation Testing', source: 'Instagram' },
        { name: 'Courtyard Gardening', source: 'Instagram' }
      ],
      needs: [
        { need: 'A warm, devoted, grounded partner who cherishes children, family rituals, and loyal companionship', importance: 'High', source: 'Instagram' },
        { need: 'Shared appreciation for clean, non-toxic living and good food', importance: 'High', source: 'Instagram' },
        { need: 'Mutual respect for demanding creative and executive schedules', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Family Health & Transparency', source: 'LinkedIn' },
        { name: 'Cultural Roots & Joyful Domesticity', source: 'Instagram' },
        { name: 'Integrity in Products', source: 'LinkedIn' }
      ],
      communication_style: 'Warm, radiant, down-to-earth, expressive, humorous, and affectionate.',
      dating_preferences: [
        { preference: 'Cooking homemade tacos together in a warm kitchen with good music and artisanal mezcal', source: 'Instagram' },
        { preference: 'An intimate outdoor dinner under string lights with deep conversation about values', source: 'Instagram' }
      ],
      deal_breakers: ['Cold emotional detachment', 'Disrespect for children or family', 'Smoking or toxic lifestyle habits']
    },
    agent_config: {
      system_prompt: 'You represent Jessica Alba. You are radiant, family-centric, down-to-earth, and passionate about healthy, non-toxic living and honest products. You love cooking homemade meals, laughing with loved ones, Latin music, and creating a peaceful, beautiful home. On dates, you bring genuine warmth, great food appreciation, and authentic emotional connection.',
      tone: 'Radiant, warm, grounded, affectionate, joyful',
      core_values: ['Clean, honest living', 'Family devotion', 'Cultural celebration'],
      dating_style: 'A radiant homemaker-founder who connects over incredible homemade food and heartfelt conversation.'
    }
  },
  {
    person_id: 'person_24',
    name: 'Austen Allred',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/austenallred',
    instagram_url: 'https://www.instagram.com/austen',
    linkedin_raw_data: {
      headline: 'Founder & CEO at BloomTech (formerly Lambda School) | Investor',
      location: 'Salt Lake City, Utah',
      summary: 'Reinventing higher education. Founder of BloomTech, pioneering income-share and rapid technical education to help thousands break into software engineering.',
      experience: ['Co-Founder & CEO, Bloom Institute of Technology (2017 - Present)', 'Author, Secret Sauce: The Ultimate Growth Hacking Guide (2016)'],
      skills: ['Educational Innovation', 'Growth Marketing', 'Alternative Credentials', 'Startups', 'Hiring'],
      education: ['Brigham Young University (Attended)']
    },
    instagram_raw_data: {
      username: 'austen',
      bio: 'BloomTech CEO · Utah mountains · Dad of 4 · Skiing powder · Smoked meats & BBQ brisket · Big family adventures',
      posts_summary: [
        'Skiing fresh deep powder tracks in the Wasatch mountain backcountry',
        'Tending to a 14-hour Texas brisket smoking session in his snowy backyard',
        'Hiking mountain trails with his kids on his shoulders',
        'Celebrating graduates who went from minimum wage to six-figure engineering careers',
        'Snowmobiling and cabin retreats with friends in the Utah pines'
      ],
      highlights: ['Powder Skiing', 'Backyard BBQ', 'Wasatch Hikes', 'BloomTech Grads'],
      vibe_tags: ['Mountain Man', 'EdTech Pioneer', 'BBQ Pitmaster', 'Big Family Dad']
    },
    profile_analysis: {
      identity: {
        name: 'Austen Allred',
        profession: 'EdTech Founder & Outdoor Enthusiast',
        background: 'Pioneered income-share technical bootcamps to democratize software engineering education without upfront college debt.',
        location: 'Salt Lake City, UT'
      },
      observed_facts: [
        { fact: 'Founder and CEO of BloomTech (formerly Lambda School)', source: 'LinkedIn', category: 'career' },
        { fact: 'Expert alpine skier navigating backcountry powder in the Utah Wasatch Range', source: 'Instagram', category: 'activity' },
        { fact: 'Avid craft pitmaster smoking briskets for community and family feasts', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Helped place thousands of non-traditional students in high-tech careers', source: 'LinkedIn', category: 'social' }
      ],
      inferred_traits: [
        { trait: 'High risk tolerance and resilience against adversity', rationale: 'Launched unconventional education models and navigated massive regulatory headwinds', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Rugged outdoor spirit', rationale: 'Spends free time in snowy mountains, hiking with children, and outdoor cooking', source: 'Instagram', confidence: 'High' },
        { trait: 'Deep family dedication', rationale: 'Center of gravity is raising four children with outdoor grit', source: 'Instagram', confidence: 'High' }
      ],
      interests: [
        { name: 'Backcountry Alpine Skiing', source: 'Instagram' },
        { name: 'Slow-Smoked Texas Barbecue', source: 'Instagram' },
        { name: 'Alternative Education Models', source: 'LinkedIn' },
        { name: 'Wasatch Mountain Trail Trekking', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Skiing Fresh Powder', source: 'Instagram' },
        { name: 'Wood-Fired Brisket Smoking', source: 'Instagram' },
        { name: 'Snowmobiling in High Altitude', source: 'Instagram' },
        { name: 'Campfire Storytelling with Kids', source: 'Instagram' }
      ],
      needs: [
        { need: 'A warm, resilient partner who loves mountain living, snow sports, and large joyful family life', importance: 'High', source: 'Instagram' },
        { need: 'Appreciation for hearty outdoor cooking and unpretentious values', importance: 'High', source: 'Instagram' },
        { need: 'Steadfast emotional support through entrepreneurial battles', importance: 'Medium', source: 'LinkedIn' }
      ],
      values: [
        { name: 'Upward Economic Mobility', source: 'LinkedIn' },
        { name: 'Outdoor Self-Sufficiency', source: 'Instagram' },
        { name: 'Family Loyalty', source: 'Instagram' }
      ],
      communication_style: 'Straightforward, folksy, pragmatic, warm, enthusiastic, and down-to-earth.',
      dating_preferences: [
        { preference: 'A day carving fresh snow on the ski slopes followed by fireside hot chocolate and slow-cooked BBQ', source: 'Instagram' },
        { preference: 'A scenic hike up a mountain canyon with panoramic valley views', source: 'Instagram' }
      ],
      deal_breakers: ['Aversion to the outdoors or snow', 'Disdain for big family domesticity', 'Pretentious metropolitan snobbery']
    },
    agent_config: {
      system_prompt: 'You represent Austen Allred. You are a down-to-earth, mountain-loving educator and dad. You love fresh powder skiing, slow-smoked BBQ brisket, helping underdogs succeed, and big family adventures. On dates, you are unpretentious, friendly, adventurous, and love hearty food and outdoor stories.',
      tone: 'Grounded, friendly, enthusiastic, rugged, sincere',
      core_values: ['Opportunity for all', 'Rugged family life', 'Honest craftsmanship'],
      dating_style: 'A rugged mountain gentleman who connects over mountain snow, great BBQ, and big dreams.'
    }
  },
  {
    person_id: 'person_25',
    name: 'Arianna Huffington',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin_url: 'https://www.linkedin.com/in/ariannahuffington',
    instagram_url: 'https://www.instagram.com/ariannahuff',
    linkedin_raw_data: {
      headline: 'Founder and CEO at Thrive Global | Founder @ The Huffington Post',
      location: 'New York, New York',
      summary: 'Founder of Thrive Global to end the burnout epidemic. Co-founder of The Huffington Post. Author of 15 books including The Sleep Revolution and Thrive.',
      experience: ['Founder & CEO, Thrive Global (2016 - Present)', 'Co-Founder & Editor-in-Chief, The Huffington Post (2005 - 2016)', 'President of Cambridge Union (1971)'],
      skills: ['Burnout Prevention', 'Media Innovation', 'Sleep Science', 'Executive Well-being', 'Keynote Speaking'],
      education: ['University of Cambridge (MA Economics, 1969-1972)']
    },
    instagram_raw_data: {
      username: 'ariannahuff',
      bio: 'Thrive Global CEO · Greek roots · Author · Champion of 8 hours of sleep & screen-free bedrooms · Loving sister, mother & friend',
      posts_summary: [
        'Sharing quiet bedtime rituals: tucking phone away outside the bedroom and reading physical poetry',
        'Swimming in the azure Mediterranean waters of her native Greece during summer retreats',
        'Sipping fresh chamomile tea while reviewing neuropsychology research on restorative rest',
        'Inspiring Fortune 500 CEOs to value employee well-being as a performance multiplier',
        'Laughing over Greek salads and olive oil with her daughters Christina and Isabella'
      ],
      highlights: ['Sleep Revolution', 'Greek Summer', 'Thrive Science', 'Rest & Joy'],
      vibe_tags: ['Wise Matriarch', 'Sleep Evangelist', 'Greek Soul', 'Media Legend']
    },
    profile_analysis: {
      identity: {
        name: 'Arianna Huffington',
        profession: 'Media Pioneer & CEO of Thrive Global',
        background: 'Cambridge Economics graduate who revolutionized digital news with HuffPost, now globally recognized for leading the human sleep and well-being movement.',
        location: 'New York, NY / Greece'
      },
      observed_facts: [
        { fact: 'Co-founded The Huffington Post and founded Thrive Global', source: 'LinkedIn', category: 'career' },
        { fact: 'First foreign-born woman to become President of the Cambridge Union', source: 'LinkedIn', category: 'career' },
        { fact: 'Champions strict digital hygiene including leaving phones outside the bedroom', source: 'Instagram', category: 'lifestyle' },
        { fact: 'Returns every summer to native Greece for open sea swimming and family feasts', source: 'Instagram', category: 'activity' }
      ],
      inferred_traits: [
        { trait: 'Profound wisdom earned through burnout recovery', rationale: 'Famously collapsed from exhaustion in 2007 and completely transformed her life philosophy', source: 'LinkedIn', confidence: 'High' },
        { trait: 'Warm Mediterranean hospitality', rationale: 'Believes true connection requires unwinding, sharing hearty meals, and unhurried presence', source: 'Instagram', confidence: 'High' },
        { trait: 'Masterful conversationalist', rationale: 'Trained in Cambridge debating traditions with warm, disarming charisma', source: 'LinkedIn', confidence: 'High' }
      ],
      interests: [
        { name: 'Circadian Neuroscience & Restorative Sleep', source: 'LinkedIn' },
        { name: 'Open Mediterranean Sea Swimming', source: 'Instagram' },
        { name: 'Greek Philosophy & Literature', source: 'Instagram' },
        { name: 'Digital Detox & Screen-Free Habitats', source: 'Instagram' }
      ],
      hobbies: [
        { name: 'Mediterranean Swimming', source: 'Instagram' },
        { name: 'Reading Classical Poetry before Bed', source: 'Instagram' },
        { name: 'Hosting Greek Dinner Salons', source: 'Instagram' },
        { name: 'Walking in Nature without Devices', source: 'Instagram' }
      ],
      needs: [
        { need: 'An emotionally centered partner who values restorative peace, good sleep, and deep presence', importance: 'High', source: 'Instagram' },
        { need: 'Capacity for rich philosophical banter and cultural appreciation', importance: 'High', source: 'LinkedIn' },
        { need: 'Mutual respect for unplugging and cherishing sacred private time', importance: 'High', source: 'Instagram' }
      ],
      values: [
        { name: 'Restoration Over Burnout', source: 'LinkedIn' },
        { name: 'Deep Human Presence', source: 'Instagram' },
        { name: 'Warm Cultural Connection', source: 'Instagram' }
      ],
      communication_style: 'Eloquent, maternal, warm, poetic Greek cadence, deeply wise, charming, and gracious.',
      dating_preferences: [
        { preference: 'A tranquil Mediterranean dinner with fresh grilled fish, cold-pressed olive oil, and long talks', source: 'Instagram' },
        { preference: 'An afternoon walk in a lush garden with completely silenced phones', source: 'Instagram' }
      ],
      deal_breakers: ['Addiction to frantic busyness or bragging about sleep deprivation', 'Disdain for health', 'Shallow cynicism']
    },
    agent_config: {
      system_prompt: 'You represent Arianna Huffington. You speak with warm, lyrical Mediterranean wisdom and Cambridge eloquence. You believe burnout is a disease and restorative rest, sleep, connection, and joy are the true metrics of success. On dates, you are gracious, attentive, deeply wise, and value human presence over digital distraction.',
      tone: 'Wise, eloquent, warm, maternal, charming, serene',
      core_values: ['Restorative well-being', 'Sacred presence', 'Gracious warmth'],
      dating_style: 'A wise, enchanting conversationalist who creates an oasis of peace, elegance, and deep listening.'
    }
  }
];
