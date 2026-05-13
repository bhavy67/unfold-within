import { PageContainer, Grid, Section } from '@/components/layout'
import { Card } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

const toolkits = [
  {
    id: 1,
    title: 'Breathing Exercises',
    description: 'Guided breathing techniques to calm your nervous system.',
  },
  {
    id: 2,
    title: 'Thought Journal',
    description: 'Track and reframe negative thought patterns.',
  },
  {
    id: 3,
    title: 'Mindful Moments',
    description: 'Short meditations for everyday peace.',
  },
]

export function FeaturedToolkits() {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1A1A1A] md:text-3xl">
              Featured Toolkits
            </h2>
            <p className="mt-2 text-[#4A4A4A]">Practical tools for your wellness journey</p>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <Grid cols={3}>
            {toolkits.map((toolkit) => (
              <Link key={toolkit.id} to="/toolkits" className="block">
                <Card variant="elevated" interactive className="h-full">
                  <h3 className="text-base font-semibold text-[#1A1A1A]">{toolkit.title}</h3>
                  <p className="mt-2 text-[#4A4A4A]">{toolkit.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-[#8B7355]">
                    Explore
                  </span>
                </Card>
              </Link>
            ))}
          </Grid>
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center md:mt-12">
            <Link to="/toolkits" className="text-sm font-medium text-[#1A1A1A] hover:underline">
              View all toolkits
            </Link>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}