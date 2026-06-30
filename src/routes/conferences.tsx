import { createFileRoute } from '@tanstack/react-router'
import { ConferencesPage } from '../components/FoundationLayout'

export const Route = createFileRoute('/conferences')({
  component: ConferencesPage,
})
