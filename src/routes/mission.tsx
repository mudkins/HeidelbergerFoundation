import { createFileRoute } from '@tanstack/react-router'
import { MissionPage } from '../components/FoundationLayout'

export const Route = createFileRoute('/mission')({
  meta: () => [
    { title: 'Our Mission | Heidelberger Foundation' },
    { name: 'description', content: 'Nurturing the next generation of cancer researchers and fostering innovative collaborations in the global effort against cancer.' },
  ],
  component: MissionPage,
})