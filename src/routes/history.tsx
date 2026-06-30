import { createFileRoute } from '@tanstack/react-router'
import { HistoryPage } from '../components/FoundationLayout'

export const Route = createFileRoute('/history')({
  component: HistoryPage,
})
