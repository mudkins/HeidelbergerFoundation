import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '../FoundationLayout' // or your layout file path

export const Route = createFileRoute('/')({
  meta: () => [
    { title: 'The Charles and Patricia Heidelberger Foundation for Cancer Research' },
    { name: 'description', content: 'Honoring the legacy of Dr. Charles Heidelberger by supporting cancer research fellowships, international symposia, and global scientific exchange.' },
  ],
  component: HomePage,
})