export interface Toolkit {
  id: string
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: string
  category: 'anxiety' | 'overthinking' | 'sleep' | 'mindfulness'
  tags: string[]
  features: string[]
  benefits: string[]
  price: number
  currency: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  image: string
  rating: number
  reviewCount: number
}

export const toolkits: Toolkit[] = [
  {
    id: '1',
    slug: 'anxiety-toolkit',
    title: 'Anxiety Toolkit',
    subtitle: 'Find peace in the chaos',
    shortDescription: 'A comprehensive collection of techniques and exercises to help you manage and overcome anxiety.',
    fullDescription: 'The Anxiety Toolkit is your complete guide to understanding and managing anxiety. This carefully crafted collection includes breathing exercises, cognitive reframing techniques, grounding practices, and daily habits that have helped thousands find calm. Whether you experience occasional anxiety or chronic worry, this toolkit provides practical tools you can use immediately.',
    category: 'anxiety',
    tags: ['anxiety', 'breathing', 'calm', 'stress relief'],
    features: [
      '12 guided breathing exercises',
      'Daily anxiety check-in journal',
      'Cognitive reframing templates',
      'Grounding technique library',
      'Weekly wellness tracking',
      'Progress dashboard',
    ],
    benefits: [
      'Learn to recognize anxiety triggers',
      'Develop practical coping strategies',
      'Build emotional resilience',
      'Create lasting calm habits',
      'Track your progress over time',
    ],
    price: 1999,
    currency: 'INR',
    duration: '4 weeks',
    level: 'beginner',
    image: 'anxiety-toolkit',
    rating: 4.8,
    reviewCount: 127,
  },
  {
    id: '2',
    slug: 'overthinking-toolkit',
    title: 'Overthinking Toolkit',
    subtitle: 'Quiet the mental noise',
    shortDescription: 'Break the cycle of repetitive thoughts and find mental clarity with proven techniques.',
    fullDescription: 'Overthinking Toolkit is designed specifically for those who find their minds constantly racing. This program combines mindfulness practices with cognitive behavioral techniques to help you break free from thought loops. Learn to observe your thoughts without judgment, identify unproductive thinking patterns, and develop a clearer, more focused mind.',
    category: 'overthinking',
    tags: ['overthinking', 'mental clarity', 'mindfulness', 'focus'],
    features: [
      'Thought observation exercises',
      'Mindful breathing routines',
      'Decision-making frameworks',
      'Mental clutter clearing exercises',
      'Journal prompts for reflection',
      '30-day transformation plan',
    ],
    benefits: [
      'Reduce racing thoughts',
      'Make decisions with clarity',
      'Improve mental focus',
      'Create space for creativity',
      'Develop mindful awareness',
    ],
    price: 2499,
    currency: 'INR',
    duration: '30 days',
    level: 'intermediate',
    image: 'overthinking-toolkit',
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: '3',
    slug: 'sleep-wellness-toolkit',
    title: 'Sleep Wellness Toolkit',
    subtitle: 'Restore your rest',
    shortDescription: 'Improve your sleep quality with calming techniques and bedtime rituals.',
    fullDescription: 'Quality sleep is the foundation of emotional wellness. The Sleep Wellness Toolkit provides a complete system for improving your sleep hygiene and creating peaceful bedtime routines. From breathing exercises to meditation guides, this toolkit helps you transition from the busyness of day to the rest of night.',
    category: 'sleep',
    tags: ['sleep', 'rest', 'relaxation', 'nighttime'],
    features: [
      'Sleep meditation tracks',
      'Bedtime breathing sequences',
      'Sleep hygiene checklist',
      'Dream journaling templates',
      'Relaxation ritual guides',
      'Sleep quality tracker',
    ],
    benefits: [
      'Fall asleep faster',
      'Improve sleep quality',
      'Create healthy bedtime habits',
      'Reduce nighttime anxiety',
      'Wake up feeling refreshed',
    ],
    price: 1499,
    currency: 'INR',
    duration: '3 weeks',
    level: 'beginner',
    image: 'sleep-toolkit',
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: '4',
    slug: 'mindful-moments-toolkit',
    title: 'Mindful Moments Toolkit',
    subtitle: 'Presence in everyday life',
    shortDescription: 'Bring mindfulness into your daily routines with short, practical exercises.',
    fullDescription: 'Mindful Moments Toolkit is perfect for those who want to incorporate mindfulness into busy schedules. These bite-sized practices can be done anywhere—from your morning coffee to your commute. Build a foundation of present-moment awareness that transforms ordinary moments into opportunities for calm and clarity.',
    category: 'mindfulness',
    tags: ['mindfulness', 'presence', 'daily practice', 'meditation'],
    features: [
      '2-minute mindfulness exercises',
      'Daily mindfulness reminders',
      'Routine transformation guides',
      'Mindful eating practices',
      'Walking meditation tracks',
      'Mindful communication tips',
    ],
    benefits: [
      'Increase present-moment awareness',
      'Transform daily routines',
      'Reduce daily stress',
      'Improve relationships',
      'Find joy in simplicity',
    ],
    price: 999,
    currency: 'INR',
    duration: '2 weeks',
    level: 'beginner',
    image: 'mindful-toolkit',
    rating: 4.6,
    reviewCount: 156,
  },
]

export function getToolkitBySlug(slug: string): Toolkit | undefined {
  return toolkits.find((toolkit) => toolkit.slug === slug)
}

export function getToolkitsByCategory(category: string): Toolkit[] {
  return toolkits.filter((toolkit) => toolkit.category === category)
}