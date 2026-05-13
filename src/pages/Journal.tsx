import { PageContainer, Section, PageHeader } from '@/components/layout'
import { ArticleCard, FeaturedArticle } from '@/components/journal'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { articles, getFeaturedArticle } from '@/data/articles'

export function Journal() {
  const featuredArticle = getFeaturedArticle()
  const regularArticles = articles.filter((a) => !a.featured)

  return (
    <PageContainer>
      {featuredArticle && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <Section>
        <FadeIn>
          <PageHeader
            title="Journal"
            subtitle="Insights and reflections on emotional wellness"
          />
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </StaggerChildren>
      </Section>
    </PageContainer>
  )
}