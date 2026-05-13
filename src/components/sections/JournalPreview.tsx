import { PageContainer, Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

const articles = [
  {
    id: 1,
    title: 'Understanding Anxiety',
    excerpt: 'Learn what anxiety really is and how to work with it, gently.',
    category: 'Healing',
  },
  {
    id: 2,
    title: 'The Art of Letting Go',
    excerpt: 'Practical steps to release what no longer serves you.',
    category: 'Growth',
  },
  {
    id: 3,
    title: 'Building Emotional Resilience',
    excerpt: 'Strengthen your ability to navigate difficult emotions.',
    category: 'Strength',
  },
]

export function JournalPreview() {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2D2540] md:text-4xl">
              Words for your heart
            </h2>
            <p className="mt-3 text-[#5C5675] max-w-md mx-auto">
              Reflections and insights to support your emotional journey
            </p>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <Grid cols={3}>
            {articles.map((article) => (
              <Link key={article.id} to="/journal" className="block group">
                <Card variant="bordered" className="h-full flex flex-col bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F2EDF8] text-[#7D6BC0]">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#2D2540] group-hover:text-[#5C4CA8] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[#5C5675] leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#F2EDF8] flex items-center justify-between">
                    <span className="text-xs text-[#8B8399]">Read article</span>
                    <svg className="w-4 h-4 text-[#B8A9E0] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </Grid>
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/journal"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B8A9E0] text-[#7D6BC0] rounded-full font-medium hover:bg-[#B8A9E0] hover:text-white transition-all duration-300"
            >
              <span>Explore all articles</span>
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