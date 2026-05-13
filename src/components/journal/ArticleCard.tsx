import { Link } from 'react-router'
import { motion } from 'framer-motion'
import type { Article } from '@/data/articles'

interface ArticleCardProps {
  article: Article
}

const categoryColors: Record<string, string> = {
  anxiety: 'bg-accent-100 text-accent-700',
  mindfulness: 'bg-green-100 text-green-700',
  'self-care': 'bg-brand-100 text-brand-700',
  relationships: 'bg-blue-100 text-blue-700',
  growth: 'bg-purple-100 text-purple-700',
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/journal/${article.slug}`} className="group block">
      <motion.article
        className="flex flex-col p-6 rounded-3xl bg-white border border-transparent hover:border-brand-200 transition-colors duration-200"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-4">
          <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
            {article.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-200">
          {article.title}
        </h3>
        <p className="mt-1.5 text-sm text-brand-600">{article.subtitle}</p>

        <p className="mt-3 text-brand-600 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-200">
            <span className="text-xs font-medium text-brand-700">{article.author.avatar}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-brand-900">{article.author.name}</span>
            <span className="text-xs text-brand-500">{article.readTime}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}