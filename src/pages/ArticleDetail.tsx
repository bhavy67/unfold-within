import { useParams, Link } from 'react-router'
import { PageContainer, Section, ContentWrapper } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'
import { RelatedArticles } from '@/components/journal'
import { getArticleBySlug, getRelatedArticles } from '@/data/articles'

const categoryColors: Record<string, string> = {
  anxiety: 'bg-accent-100 text-accent-700',
  mindfulness: 'bg-green-100 text-green-700',
  'self-care': 'bg-brand-100 text-brand-700',
  relationships: 'bg-blue-100 text-blue-700',
  growth: 'bg-purple-100 text-purple-700',
}

function parseContent(content: string): string {
  return content
    .split('\n')
    .map(line => {
      const trimmed = line.trim()
      if (trimmed.startsWith('## ')) {
        return `<h2 class="text-xl font-semibold text-brand-900 mt-8 mb-4">${trimmed.slice(3)}</h2>`
      }
      if (trimmed.startsWith('### ')) {
        return `<h3 class="text-lg font-semibold text-brand-900 mt-6 mb-3">${trimmed.slice(4)}</h3>`
      }
      if (trimmed.startsWith('- ')) {
        return `<li class="text-brand-700 ml-4">${trimmed.slice(2)}</li>`
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return `<li class="text-brand-700 ml-4">${trimmed.replace(/^\d+\.\s/, '')}</li>`
      }
      if (trimmed.startsWith('# ')) {
        return ''
      }
      if (trimmed === '') {
        return '<p class="my-4"></p>'
      }
      return `<p class="text-brand-700 leading-relaxed mb-4">${trimmed}</p>`
    })
    .join('')
}

export function ArticleDetail() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug || '')
  const relatedArticles = getRelatedArticles(slug || '')

  if (!article) {
    return (
      <PageContainer>
        <Section>
          <ContentWrapper>
            <div className="text-center py-20">
              <h1 className="text-2xl font-semibold text-brand-900">Article not found</h1>
              <p className="mt-2 text-brand-600">The article you're looking for doesn't exist.</p>
              <Link to="/journal" className="mt-4 inline-block text-brand-700 font-medium hover:text-brand-900">
                Back to Journal
              </Link>
            </div>
          </ContentWrapper>
        </Section>
      </PageContainer>
    )
  }

  const contentHtml = parseContent(article.content)

  return (
    <PageContainer>
      <Section>
        <FadeIn>
          <Link to="/journal" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-900 transition-colors">
            ← Back to Journal
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContentWrapper>
            {/* Article Header */}
            <header className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-xs text-brand-500">{article.readTime}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-brand-900 md:text-4xl">
                {article.title}
              </h1>
              <p className="mt-3 text-lg text-brand-600">{article.subtitle}</p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-200">
                  <span className="text-sm font-medium text-brand-700">{article.author.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-900">{article.author.name}</p>
                  <p className="text-xs text-brand-500">{article.publishDate}</p>
                </div>
              </div>
            </header>

            {/* Cover Image Placeholder */}
            <div className="mt-8 aspect-[21/9] rounded-3xl bg-brand-100 flex items-center justify-center">
              <span className="text-brand-300 text-8xl font-light">
                {article.title.charAt(0)}
              </span>
            </div>

            {/* Article Content */}
            <article
              className="mt-10 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-brand-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-brand-600 bg-brand-50 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </ContentWrapper>
        </FadeIn>
      </Section>

      <RelatedArticles articles={relatedArticles} />
    </PageContainer>
  )
}