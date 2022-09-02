import { User } from '@/entities'
import { getUserByIdRequest } from '@/lib/api/requests/user'
import { useQuery } from 'react-query'

export default function useGetUserById(userId: User['id'] | undefined) {
  return useQuery(['user', userId], () => getUserByIdRequest(userId), {
    enabled: !!userId
  })
}
