import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { PageContainer, Section, PageHeader } from '@/components/layout'
import { ToolkitCard, ToolkitGrid } from '@/components/toolkit'
import { SearchBar, FilterBar, EmptyState } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { toolkits } from '@/data/toolkits'

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'overthinking', label: 'Overthinking' },
  { value: 'sleep', label: 'Sleep' },
  { value: 'mindfulness', label: 'Mindfulness' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating'

export function Toolkits() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const filteredToolkits = useMemo(() => {
    let result = [...toolkits]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (toolkit) =>
          toolkit.title.toLowerCase().includes(query) ||
          toolkit.category.toLowerCase().includes(query) ||
          toolkit.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (category !== 'all') {
      result = result.filter((toolkit) => toolkit.category === category)
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
      default:
        // Keep original order
        break
    }

    return result
  }, [searchQuery, category, sortBy])

  return (
    <PageContainer>
      <Section>
        <FadeIn>
          <PageHeader
            title="Toolkits"
            subtitle="Practical tools for your wellness journey"
          />
        </FadeIn>

        {/* Search and Filters */}
        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-4">
            <SearchBar
              placeholder="Search toolkits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <FilterBar
                label="Category:"
                options={categoryOptions}
                value={category}
                onChange={setCategory}
              />

              <div className="flex items-center gap-2">
                <span className="text-sm text-brand-600">Sort by:</span>
                <div className="flex gap-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value as SortOption)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        sortBy === option.value
                          ? 'bg-brand-700 text-white'
                          : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.2}>
          <p className="mt-6 text-sm text-brand-500">
            {filteredToolkits.length} {filteredToolkits.length === 1 ? 'toolkit' : 'toolkits'} found
          </p>
        </FadeIn>

        {/* Results */}
        <FadeIn delay={0.3}>
          {filteredToolkits.length > 0 ? (
            <ToolkitGrid>
              {filteredToolkits.map((toolkit) => (
                <ToolkitCard key={toolkit.id} toolkit={toolkit} />
              ))}
            </ToolkitGrid>
          ) : (
            <EmptyState
              title="No toolkits found"
              description="Try adjusting your search or filters to find what you're looking for."
              action={
                <Link
                  to="/toolkits"
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