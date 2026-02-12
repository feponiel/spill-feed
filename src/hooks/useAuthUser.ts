import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface AuthUser {
  id: string
  name: string
  avatar_url: string
  banner_url: string | null
  synthesis: string | null
  created_at: Date
}

async function fetchAuthUser(): Promise<AuthUser> {
  const { data } = await api.get("/me")
  return data
}

export function useAuthUser() {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: fetchAuthUser,
    staleTime: 1000 * 60 * 5, // 5 min
    retry: false,
  })
}
