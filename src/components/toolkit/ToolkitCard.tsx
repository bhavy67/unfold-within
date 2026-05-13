import { Link } from 'react-router'
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

export function ToolkitCard({ toolkit }: ToolkitCardProps) {
  return (
    <Link to={`/toolkits/${toolkit.slug}`} className="block">
      <Card variant="elevated" interactive className="h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[toolkit.category]}`}>
            {toolkit.category}
          </span>
          <span className="text-xs text-brand-500">{levelLabels[toolkit.level]}</span>
        </div>

        <h3 className="text-lg font-semibold text-brand-900">{toolkit.title}</h3>
        <p className="mt-1.5 text-sm text-brand-600">{toolkit.subtitle}</p>
        <p className="mt-3 text-brand-600 leading-relaxed line-clamp-2">
          {toolkit.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between">
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