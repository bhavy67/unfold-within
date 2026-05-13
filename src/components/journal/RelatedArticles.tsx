import { PageContainer } from '@/components/layout'
import { ArticleCard } from './ArticleCard'
import type { Article } from '@/data/articles'

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="py-10 bg-brand-50">
      <PageContainer>
        <h2 className="text-xl font-semibold text-brand-900">Related Articles</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}