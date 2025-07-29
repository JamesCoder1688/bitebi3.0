import Link from 'next/link'
import { BlogPost } from '@/lib/blog-data'

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-bitcoin-orange text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}阅读</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              特色
            </span>
          </div>
          
          <Link href={`/blog/${post.id}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-bitcoin-orange transition-colors cursor-pointer">
              {post.title}
            </h3>
          </Link>
          
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-bitcoin-orange hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-gray-500 text-sm">
              <div>{post.date}</div>
              <div>作者：{post.author}</div>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="btn btn-primary hover:bg-bitcoin-dark transition-colors"
            >
              阅读全文
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-bitcoin-orange/20 to-bitcoin-light/20 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-8xl opacity-50 mb-4">📰</div>
            <div className="text-bitcoin-orange font-semibold">特色文章</div>
          </div>
        </div>
      </div>
    </div>
  )
}