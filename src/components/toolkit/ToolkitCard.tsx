import { useCallback } from 'react'
import { Link } from 'react-router'
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from '@/components/ui'
import type { Toolkit } from '@/data/toolkits'

interface ToolkitCardProps {
  toolkit: Toolkit
}

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

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden rounded-t-2xl -mx-6 -mt-6 mb-4">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-white/60 transition-all"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                emblaApi?.scrollTo(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Arrow buttons - visible on hover */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-[#2D2540] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-medium"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              scrollPrev()
            }}
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-[#2D2540] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-medium"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              scrollNext()
            }}
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export function ToolkitCard({ toolkit }: ToolkitCardProps) {
  return (
    <Link to={`/toolkits/${toolkit.slug}`} className="block group">
      <Card variant="elevated" interactive className="h-full">
        <ImageCarousel images={toolkit.images} title={toolkit.title} />

        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[toolkit.category]}`}>
            {toolkit.category}
          </span>
          <span className="text-xs text-brand-500">{levelLabels[toolkit.level]}</span>
        </div>

        <h3 className="text-lg font-semibold text-brand-900 group-hover:text-[#5C4CA8] transition-colors">
          {toolkit.title}
        </h3>
        <p className="mt-1 text-sm text-brand-600">{toolkit.subtitle}</p>
        <p className="mt-2 text-brand-600 leading-relaxed line-clamp-2 text-sm">
          {toolkit.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-brand-100">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-brand-900">{toolkit.rating}</span>
            <span className="text-sm text-brand-500">({toolkit.reviewCount})</span>
          </div>
          <span className="text-lg font-semibold text-brand-900">
            ₹{toolkit.price}
          </span>
        </div>
      </Card>
    </Link>
  )
}