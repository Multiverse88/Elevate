import { useNavigation } from '@/contexts/NavigationContext'
import { useRouter } from 'next/navigation'

export function useNavigationLoading() {
  const { startNavigation } = useNavigation()
  const router = useRouter()

  const navigateWithLoading = (href: string) => {
    startNavigation()
    router.push(href)
  }

  return {
    navigateWithLoading,
    startNavigation
  }
} 