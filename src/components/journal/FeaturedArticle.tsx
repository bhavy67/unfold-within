import { Link } from 'react-router'
import { PageContainer } from '@/components/layout'
import type { Article } from '@/data/articles'

interface FeaturedArticleProps {
  article: Article
}

const categoryColors: Record<string, string> = {
  anxiety: 'bg-accent-100 text-accent-700',
  mindfulness: 'bg-green-100 text-green-700',
  'self-care': 'bg-brand-100 text-brand-700',
  relationships: 'bg-blue-100 text-blue-700',
  growth: 'bg-purple-100 text-purple-700',
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section className="relative overflow-hidden bg-brand-100 py-12 md:py-16">
      <PageContainer>
        <Link to={`/journal/${article.slug}`} className="group block">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
                Featured
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-900 md:text-3xl group-hover:text-brand-700 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-lg text-brand-600">{article.subtitle}</p>

              <p className="mt-4 text-brand-600 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-200">
                  <span className="text-sm font-medium text-brand-700">{article.author.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-900">{article.author.name}</p>
                  <p className="text-xs text-brand-500">{article.readTime} · {article.publishDate}</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl bg-brand-200 flex items-center justify-center">
                <span className="text-brand-400 text-6xl font-light">
                  {article.title.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </PageContainer>
    </section>
  )
}