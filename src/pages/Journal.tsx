import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { PageContainer, Section, PageHeader } from '@/components/layout'
import { ArticleCard, FeaturedArticle } from '@/components/journal'
import { SearchBar, FilterBar, EmptyState } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { articles, getFeaturedArticle, type Article } from '@/data/articles'

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'mindfulness', label: 'Mindfulness' },
  { value: 'self-care', label: 'Self-care' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'growth', label: 'Growth' },
]

export function Journal() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')

  const featuredArticle = getFeaturedArticle()
  const regularArticles = articles.filter((a) => !a.featured)

  const filteredArticles = useMemo(() => {
    let result = [...regularArticles]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (category !== 'all') {
      result = result.filter((article) => article.category === category)
    }

    return result
  }, [searchQuery, category, regularArticles])

  // Show featured only on main page when not filtered
  const showFeatured = featuredArticle && !searchQuery && category === 'all'

  return (
    <PageContainer>
      {showFeatured && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <Section>
        <FadeIn>
          <PageHeader
            title="Journal"
            subtitle="Insights and reflections on emotional wellness"
          />
        </FadeIn>

        {/* Search and Filters */}
        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-4">
            <SearchBar
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <FilterBar
              label="Category:"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
            />
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.2}>
          <p className="mt-6 text-sm text-brand-500">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
          </p>
        </FadeIn>

        {/* Results */}
        <FadeIn delay={0.3}>
          {filteredArticles.length > 0 ? (
            <StaggerChildren delay={0.1}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </StaggerChildren>
          ) : (
            <EmptyState
              title="No articles found"
              description="Try adjusting your search or filters to find what you're looking for."
              action={
                <Link
                  to="/journal"
                  onClick={() => {
                    setSearchQuery('')
                    setCategory('all')
                  }}
                  className="text-sm font-medium text-brand-700 hover:text-brand-900"
                >
                  Clear filters
                </Link>
              }
            />
          )}
        </FadeIn>
      </Section>
    </PageContainer>
  )
}