import * as FontAwesome from 'react-icons/fa'

export type Category = {
  id: number
  slug: string
  name: string
  iconName: keyof typeof FontAwesome
  to: string
}
