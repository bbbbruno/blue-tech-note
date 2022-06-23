import * as FontAwesome from 'react-icons/fa'

export type Link = {
  iconName: keyof typeof FontAwesome
  color: string
  to: string
}

export type Profile = {
  name: string
  title?: string
  description?: string
  imagePath: string
  links: Link[]
}
