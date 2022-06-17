import { Category } from '../../category/types'
import { Tag } from '../../tag/types'

export type Post = {
  id: number
  slug: string
  title: string
  text: string
  imagePath: string
  category: Category
  tags: Tag[]
  publishedDate: string
}
