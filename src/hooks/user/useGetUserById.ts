import { User } from '@/entities'
import { getUserByIdRequest } from '@/lib/api/user'
import { useQuery } from 'react-query'

export default function useGetUserById(userId: User['id']) {
  return useQuery(['user', userId], () => getUserByIdRequest(userId), {
    enabled: !!userId
  })
}
