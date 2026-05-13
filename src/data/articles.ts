export interface Article {
  id: string
  slug: string
  title: string
  subtitle: string
  excerpt: string
  content: string
  category: 'anxiety' | 'mindfulness' | 'self-care' | 'relationships' | 'growth'
  tags: string[]
  author: {
    name: string
    avatar: string
  }
  coverImage: string
  publishDate: string
  readTime: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'understanding-anxiety',
    title: 'Understanding Anxiety',
    subtitle: 'What anxiety really is and how to work with it',
    excerpt: 'Anxiety is not your enemy. It\'s a protective mechanism that\'s become overactive. Let\'s explore what anxiety really is and how we can build a healthier relationship with it.',
    content: `
# Understanding Anxiety

Anxiety is one of the most common emotional experiences, yet it remains widely misunderstood. Many of us have been taught to view anxiety as something to fight, suppress, or overcome. But what if we approached it differently?

## What Anxiety Really Is

At its core, anxiety is your brain's threat-detection system. It's designed to keep you safe by alerting you to potential dangers. The problem arises when this system becomes overly sensitive, flagging everyday situations as threats.

When you experience anxiety, your body is actually trying to protect you. The racing thoughts, racing heart, and heightened awareness are all part of an ancient survival mechanism designed to keep your ancestors alive in dangerous situations.

## Working With Anxiety

Instead of fighting anxiety, consider this approach:

1. **Acknowledge it** - Denying anxiety often makes it stronger
2. **Understand the trigger** - What is your brain trying to protect you from?
3. **Respond with compassion** - Would you judge a friend for feeling anxious?
4. **Build new pathways** - Practice new responses to anxiety triggers

## Practical Steps

The next time you feel anxious, try these steps:

- Pause and take three deep breaths
- Ask yourself: "What am I really worried about?"
- Remind yourself: "This is just my anxiety talking"
- Ground yourself using the 5-4-3-2-1 technique

Remember, anxiety is normal. It's how we respond to it that matters.
    `,
    category: 'anxiety',
    tags: ['anxiety', 'mental health', 'self-awareness'],
    author: {
      name: 'Sarah Chen',
      avatar: 'SC',
    },
    coverImage: 'anxiety',
    publishDate: '2026-05-10',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: '2',
    slug: 'art-of-letting-go',
    title: 'The Art of Letting Go',
    subtitle: 'Practical steps to release what no longer serves you',
    excerpt: 'Holding onto the past prevents us from fully experiencing the present. Learn how to gently release attachments that no longer serve your wellbeing.',
    content: `
# The Art of Letting Go

We hold onto so many things—old relationships, past mistakes, failed dreams, and hurts that happened long ago. But this holding on comes at a cost: it keeps us trapped in the past, unable to move forward.

## Why We Hold On

There's a psychological reason we struggle to let go. Our brains are wired toavers to anticipate threats, and unresolved situations feel "unfinished" to our neural systems. This creates a persistent mental loop that keeps the memory active.

Additionally, letting go can feel like betrayal—of ourselves, of others, or of the version of events we wanted to be true.

## The Practice of Release

Letting go isn't about forgetting or pretending something didn't happen. It's about changing our relationship with what happened.

### Step 1: Acknowledge

First, acknowledge what you're holding onto. Name it. Describe it. Get clear on exactly what you're refusing to release.

### Step 2: Investigate

Ask yourself: What does holding onto this give me? Often, we hold on because it feels safer than the unknown. Or we believe that holding on means we care.

### Step 3: Choose

Make a conscious choice. You can't force yourself to let go, but you can choose to let go. This choice might need to be made many times—that's normal.

### Step 4: Transform

Letting go doesn't mean the memory disappears. It means the memory no longer controls you. See if you can hold the memory lightly, as part of your story rather than as a weight you carry.

## A Daily Practice

Each day, ask yourself: What am I holding onto that I can choose to release today?
    `,
    category: 'self-care',
    tags: ['letting go', 'mindfulness', 'personal growth'],
    author: {
      name: 'Michael Torres',
      avatar: 'MT',
    },
    coverImage: 'letting-go',
    publishDate: '2026-05-08',
    readTime: '4 min read',
  },
  {
    id: '3',
    slug: 'building-emotional-resilience',
    title: 'Building Emotional Resilience',
    subtitle: 'Strengthen your ability to navigate difficult emotions',
    excerpt: 'Emotional resilience isn\'t about avoiding difficult feelings—it\'s about developing the capacity to move through them without being overwhelmed.',
    content: `
# Building Emotional Resilience

Life will inevitably bring challenges—loss, failure, disappointment, and pain. Emotional resilience isn't about avoiding these experiences; it's about developing the capacity to move through them without being destroyed by them.

## What Is Resilience?

Resilience is not invulnerability or toxic positivity. It's not "never feeling down" or "just pushing through." Rather, resilient people have developed skills that help them:

- Recover more quickly from setbacks
- Adapt to changing circumstances
- Maintain perspective during difficult times
- Bounce back from failures

## Building Blocks of Resilience

### 1. Self-Awareness

The foundation of resilience is knowing yourself. What are your triggers? What coping mechanisms have worked (or failed) in the past? How do you typically respond to stress?

### 2. Emotional Vocabulary

Being able to name what you feel—precisely—helps you process emotions rather than being overwhelmed by them. Instead of "I feel bad," try "I feel disappointed and slightly anxious."

### 3. Flexible Thinking

Resilient people can find multiple ways to interpret a situation. When one approach doesn't work, they try another.

### 4. Support Connections

You don't have to do everything alone. Resilient people have people they can turn to for support.

## Daily Practices

Building resilience is a daily practice:
- Start each day with a moment of gratitude
- Notice and name your emotions throughout the day
- Take one small step toward a goal, even when motivation is low
- End each day by acknowledging one thing you handled well
    `,
    category: 'growth',
    tags: ['resilience', 'emotional health', 'personal development'],
    author: {
      name: 'Emma Wilson',
      avatar: 'EW',
    },
    coverImage: 'resilience',
    publishDate: '2026-05-05',
    readTime: '6 min read',
  },
  {
    id: '4',
    slug: 'mindful-morning-routine',
    title: 'Creating a Mindful Morning Routine',
    subtitle: 'How you start your day sets the tone for everything',
    excerpt: 'A mindful morning isn\'t about doing more—it\'s about being more present as you begin your day. Here\'s how to create a routine that supports your wellbeing.',
    content: `
# Creating a Mindful Morning Routine

The morning sets the tone for your entire day. When we rush through our mornings on autopilot, we carry that fragmented, scattered energy into everything that follows. A mindful morning creates space for clarity, calm, and intentional living.

## Why Morning Matters

Your brain is most receptive in the hours after waking. This is when neural pathways are most flexible, making it the ideal time to establish patterns you want to maintain.

A mindful morning isn't about adding more to your routine. It's about doing fewer things, but doing them with more presence.

## Components of a Mindful Morning

### Wake Slowly

Instead of immediately reaching for your phone, take three conscious breaths before getting out of bed. Set an intention for your day.

### Move Your Body

Gentle movement—whether stretching, yoga, or a short walk—helps connect mind and body. This doesn't have to be a workout; it's about waking up your physical self with awareness.

### Eat Mindfully

Rather than scrolling while eating, try one meal each day with full attention. Notice the colors, textures, and flavors.

### Create a Pause

Before starting work or tasks, create a brief pause. This might be five minutes of silence, journaling, or simply sitting with your coffee.

## Starting Small

You don't need to transform your entire routine overnight. Start with one mindful moment each morning and build from there.
    `,
    category: 'mindfulness',
    tags: ['morning routine', 'mindfulness', 'daily practice'],
    author: {
      name: 'Sarah Chen',
      avatar: 'SC',
    },
    coverImage: 'morning',
    publishDate: '2026-05-02',
    readTime: '4 min read',
  },
  {
    id: '5',
    slug: 'healthy-boundaries',
    title: 'The Art of Healthy Boundaries',
    subtitle: 'Learning to protect your peace',
    excerpt: 'Setting boundaries isn\'t selfish—it\'s an act of self-respect. Learn how to establish and maintain boundaries that protect your emotional wellbeing.',
    content: `
# The Art of Healthy Boundaries

For many of us, the idea of setting boundaries feels uncomfortable. We worry about being seen as difficult, unkind, or selfish. But boundaries are actually an act of self-respect—and healthy relationships require them.

## What Are Boundaries?

Boundaries are the limits we set around our time, energy, emotional space, and physical environment. They define where we end and others begin.

Without clear boundaries, we can become overwhelmed, resentful, or lose ourselves in the needs of others. With boundaries, we can be fully present in relationships without sacrificing our wellbeing.

## Types of Boundaries

### Physical Boundaries
Your personal space, your home, your body.

### Time Boundaries
How you spend your time, when you're available, protecting your leisure time.

### Emotional Boundaries
Not taking on others' emotions, not responsible for others' feelings.

### Mental Boundaries
Your opinions, values, beliefs—protecting your right to think differently.

## Setting Boundaries

1. **Know your limits** - What can you give? What drains you?
2. **Communicate clearly** - Be direct but kind
3. **Stay consistent** - Boundaries that change constantly aren't really boundaries
4. **Expect discomfort** - Setting new boundaries often feels awkward at first

## Remember

Setting boundaries doesn't mean others will always respect them. But it does mean you've clearly communicated your needs. The response is up to them.
    `,
    category: 'relationships',
    tags: ['boundaries', 'self-care', 'relationships'],
    author: {
      name: 'Michael Torres',
      avatar: 'MT',
    },
    coverImage: 'boundaries',
    publishDate: '2026-04-28',
    readTime: '5 min read',
  },
  {
    id: '6',
    slug: 'dealing-with-overthinking',
    title: 'Dealing with Overthinking',
    subtitle: 'Breaking free from the thought loop',
    excerpt: 'Overthinking keeps us stuck in analysis paralysis. Here are strategies to quiet the mental noise and find clarity.',
    content: `
# Dealing with Overthinking

The mind is a powerful tool, but when it runs on overdrive, it becomes a trap. Overthinking—analyzing, re-analyzing, and looping through thoughts—keeps us stuck in a prison of our own making.

## The Overthinking Pattern

Overthinking typically follows a pattern:
1. A trigger event or thought occurs
2. We begin analyzing ("What if...?")
3. We seek more information to feel certain
4. We loop back to analyze more
5. No resolution is reached, only more questions

## Breaking the Cycle

### 1. Notice the Pattern
The first step is awareness. When you notice you're overthinking, name it. "I'm overthinking this."

### 2. Set a Time Limit
Give yourself permission to think about something for a set period—then stop.

### 3. Take Action
Often, overthinking is a way to avoid action. Make a decision, even if imperfect, and move forward.

### 4. Ground Yourself
When thoughts spiral, bring attention to your body. Notice what you can see, hear, feel.

### 5. Ask Better Questions
Instead of "What if this goes wrong?", ask "What's the worst that could happen, and could I handle it?"

## The Reality

Most of what we overthink never actually happens. The mental energy spent worrying could be directed toward something more helpful.

When you catch yourself overthinking, ask: "Will this matter in one week? One month? One year?"
    `,
    category: 'anxiety',
    tags: ['overthinking', 'mental clarity', 'anxiety'],
    author: {
      name: 'Emma Wilson',
      avatar: 'EW',
    },
    coverImage: 'overthinking',
    publishDate: '2026-04-25',
    readTime: '4 min read',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((article) => article.featured)
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const currentArticle = getArticleBySlug(slug)
  if (!currentArticle) return []

  return articles
    .filter((article) => article.slug !== slug)
    .filter(
      (article) =>
        article.category === currentArticle.category ||
        article.tags.some((tag) => currentArticle.tags.includes(tag))
    )
    .slice(0, limit)
}