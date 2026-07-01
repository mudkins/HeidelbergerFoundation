import { createFileRoute } from '@tanstack/react-router'
import { MissionPage } from '../components/FoundationLayout'

export const Route = createFileRoute('/mission')({
  component: MissionPage,
})
