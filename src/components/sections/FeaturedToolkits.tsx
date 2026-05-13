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
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-900 md:text-3xl">
              Featured Toolkits
            </h2>
            <p className="mt-2.5 text-brand-600">Practical tools for your wellness journey</p>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <Grid cols={3}>
            {toolkits.map((toolkit) => (
              <Link key={toolkit.id} to="/toolkits" className="block">
                <Card
                  variant="elevated"
                  className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-brand-900">{toolkit.title}</h3>
                  <p className="mt-2.5 text-brand-600 leading-relaxed">{toolkit.description}</p>
                  <span className="mt-5 inline-block text-sm font-medium text-brand-700 group-hover:text-brand-900 transition-colors">
                    Explore
                  </span>
                </Card>
              </Link>
            ))}
          </Grid>
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center md:mt-14">
            <Link to="/toolkits" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors">
              View all toolkits
            </Link>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}