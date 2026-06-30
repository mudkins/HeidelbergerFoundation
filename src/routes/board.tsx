import { BoardPage } from '../components/FoundationLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/board')({
  component: BoardPage,
})
