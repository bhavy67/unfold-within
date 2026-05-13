import { PageContainer, Grid, Section } from '@/components/layout'
import { Card } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

const toolkits = [
  {
    id: 1,
    title: 'Breathing Exercises',
    description: 'Guided breathing techniques to calm your nervous system and ground yourself in moments of overwhelm.',
    color: 'from-lavender-400 to-purple-400',
  },
  {
    id: 2,
    title: 'Thought Journal',
    description: 'Track and reframe negative thought patterns with gentle prompts designed for self-compassion.',
    color: 'from-rose-300 to-pink-400',
  },
  {
    id: 3,
    title: 'Mindful Moments',
    description: 'Short, accessible meditations that fit seamlessly into your everyday life.',
    color: 'from-periwinkle-400 to-blue-400',
  },
]

export function FeaturedToolkits() {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2D2540] md:text-4xl">
              Tools for your journey
            </h2>
            <p className="mt-3 text-[#5C5675] max-w-md mx-auto">
              Practical resources designed with care to support your emotional wellness
            </p>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <Grid cols={3}>
            {toolkits.map((toolkit) => (
              <Link key={toolkit.id} to="/toolkits" className="block group">
                <Card variant="elevated" interactive className="h-full flex flex-col">
                  {/* Decorative gradient blob */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${toolkit.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />

                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${toolkit.color} text-white opacity-80`}>
                        Tool
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#2D2540] group-hover:text-[#5C4CA8] transition-colors">
                      {toolkit.title}
                    </h3>
                    <p className="mt-2 text-[#5C5675] leading-relaxed">
                      {toolkit.description}
                    </p>

                    <div className="mt-auto pt-5 flex items-center gap-2 text-sm font-medium text-[#7D6BC0]">
                      <span>Explore</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </Grid>
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/toolkits"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#9B8AD0] to-[#B8A9E0] text-white rounded-full font-medium shadow-soft hover:shadow-glow-lavender transition-all duration-300"
            >
              <span>View all toolkits</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}