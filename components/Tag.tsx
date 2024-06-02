import Link from 'next/link'
import { slug } from 'github-slugger'
import { Badge } from '@/components/shadcn/ui/badge'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 py-2 text-sm font-medium uppercase text-gray-800"
    >
      <Badge className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400">
        {text.split(' ').join('-')}
      </Badge>
    </Link>
  )
}

export default Tag
