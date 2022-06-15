type Taxonomy = {
  slug: string
  name: string
}

export type Category = Taxonomy

export type Tag = Taxonomy

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
