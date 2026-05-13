import { useParams, Link } from 'react-router'
import { PageContainer, Section, ContentWrapper } from '@/components/layout'
import { Button, Card } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { getToolkitBySlug } from '@/data/toolkits'
import { useCartStore } from '@/store/cart'

const categoryColors: Record<string, string> = {
  anxiety: 'bg-accent-100 text-accent-700',
  overthinking: 'bg-brand-200 text-brand-700',
  sleep: 'bg-blue-100 text-blue-700',
  mindfulness: 'bg-green-100 text-green-700',
}

const levelLabels: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export function ToolkitDetail() {
  const { slug } = useParams()
  const toolkit = getToolkitBySlug(slug || '')
  const addItem = useCartStore((state) => state.addItem)

  if (!toolkit) {
    return (
      <PageContainer>
        <Section>
          <ContentWrapper>
            <div className="text-center py-20">
              <h1 className="text-2xl font-semibold text-brand-900">Toolkit not found</h1>
              <p className="mt-2 text-brand-600">The toolkit you're looking for doesn't exist.</p>
              <Link to="/toolkits" className="mt-4 inline-block">
                <Button>Back to Toolkits</Button>
              </Link>
            </div>
          </ContentWrapper>
        </Section>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Section>
        <FadeIn>
          <Link to="/toolkits" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-900 transition-colors">
            ← Back to Toolkits
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left column - Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[toolkit.category]}`}>
                  {toolkit.category}
                </span>
                <span className="text-xs text-brand-500">{levelLabels[toolkit.level]}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-brand-900 md:text-4xl">
                {toolkit.title}
              </h1>
              <p className="mt-2 text-lg text-brand-600">{toolkit.subtitle}</p>

              <p className="mt-6 text-brand-600 leading-relaxed">
                {toolkit.fullDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-brand-600">{toolkit.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-brand-600">{levelLabels[toolkit.level]} level</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-brand-900">{toolkit.rating}</span>
                  <span className="text-sm text-brand-500">({toolkit.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-brand-900">What's Included</h2>
                <ul className="mt-4 space-y-3">
                  {toolkit.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-brand-900">Benefits</h2>
                <ul className="mt-4 space-y-3">
                  {toolkit.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-brand-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - CTA Card */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card variant="elevated" className="p-6">
                <div className="text-center">
                  <p className="text-sm text-brand-500">One-time purchase</p>
                  <p className="mt-2 text-4xl font-bold text-brand-900">
                    ₹{toolkit.price}
                  </p>
                  <p className="mt-1 text-sm text-brand-500">{toolkit.currency}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <Button size="lg" className="w-full justify-center" onClick={() => addItem(toolkit)}>
                    Get Started
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full justify-center">
                    Preview Content
                  </Button>
                </div>

                <p className="mt-4 text-center text-xs text-brand-500">
                  30-day money-back guarantee
                </p>

                <div className="mt-6 pt-6 border-t border-brand-200">
                  <p className="text-xs text-brand-500 text-center">
                    Tagged: {toolkit.tags.join(', ')}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageContainer>
  )
}