import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { PageContainer, Section, PageHeader } from '@/components/layout'
import { ToolkitCard, ToolkitGrid } from '@/components/toolkit'
import { SearchBar, EmptyState } from '@/components/ui'
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
          <div className="mt-6 sm:mt-8 space-y-4">
            <SearchBar
              placeholder="Search toolkits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Category Filters */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Category</span>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCategory(option.value)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      category === option.value
                        ? 'bg-gradient-to-r from-[#9B8AD0] to-[#B8A9E0] text-white shadow-soft'
                        : 'bg-[#F2EDF8] text-[#5C5675] hover:bg-[#E8DFF5] hover:text-[#2D2540]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Sort by</span>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as SortOption)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      sortBy === option.value
                        ? 'bg-gradient-to-r from-[#9B8AD0] to-[#B8A9E0] text-white shadow-soft'
                        : 'bg-[#F2EDF8] text-[#5C5675] hover:bg-[#E8DFF5] hover:text-[#2D2540]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.2}>
          <p className="mt-4 sm:mt-6 text-sm text-brand-500">
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