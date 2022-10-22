import { User } from '@/entities'
import { getUserByIdRequest } from '@/lib/api/requests/business/user'
import { useQuery } from '@/lib/queryClient'
import { QueryKeys } from '@/lib/queryClient/types'

export default function useGetUserById(userId: User['id'] | undefined) {
  return useQuery([QueryKeys.Users, userId], () => getUserByIdRequest(userId), {
    enabled: !!userId
  })
}
