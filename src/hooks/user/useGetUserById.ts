import { User } from '@/entities'
import { getUserByIdRequest } from '@/lib/api/requests/business/user'
import { useQuery } from '@/lib/queryClient'

export default function useGetUserById(userId: User['id'] | undefined) {
  return useQuery(['user', userId], () => getUserByIdRequest(userId), {
    enabled: !!userId
  })
}
