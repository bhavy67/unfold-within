import { PageContainer, Grid, Section } from '@/components/layout'
import { Card } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

const articles = [
  {
    id: 1,
    title: 'Understanding Anxiety',
    excerpt: 'Learn what anxiety really is and how to work with it.',
  },
  {
    id: 2,
    title: 'The Art of Letting Go',
    excerpt: 'Practical steps to release what no longer serves you.',
  },
  {
    id: 3,
    title: 'Building Emotional Resilience',
    excerpt: 'Strengthen your ability to navigate difficult emotions.',
  },
]

export function JournalPreview() {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-900 md:text-3xl">Journal</h2>
            <p className="mt-2.5 text-brand-600">Insights and reflections on emotional wellness</p>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <Grid cols={3}>
            {articles.map((article) => (
              <Link key={article.id} to="/journal" className="block">
                <Card
                  variant="bordered"
                  className="h-full transition-all duration-300 hover:border-brand-300 hover:shadow-soft"
                >
                  <h3 className="text-lg font-semibold text-brand-900">{article.title}</h3>
                  <p className="mt-2.5 text-brand-600 leading-relaxed">{article.excerpt}</p>
                  <span className="mt-5 inline-block text-sm font-medium text-brand-700 transition-colors">
                    Read more
                  </span>
                </Card>
              </Link>
            ))}
          </Grid>
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center md:mt-14">
            <Link to="/journal" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors">
              View all articles
            </Link>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}