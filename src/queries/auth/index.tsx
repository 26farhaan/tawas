import { useQuery } from "@tanstack/react-query";

import ENDPOINTS from "@/constants/endpoints";
import apiService from "@/libs/axios";
import promiseWrapper from "@/utils/promiseWrapper";

type UserType = {
  name: string;
  full_name: string;
  avatar_url: string;
  email: string;
  picture: string;
};

// export type UserWithMetadata = User & {
//   user_metadata: UserType;
// };

type User = {
  address: string;
  birthday: string;
  email: string;
  first_name: string;
  last_name: string;
};

/**
 * ### Get Paginated Bank
 * Get paginated list Bank to be used in table
 * @returns
 */
export const useUserAuth = (options?: { enabled?: boolean }) => {
  const { enabled = true } = options ?? {};
  const endpoint = ENDPOINTS.GET_ME;

  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async ({ signal }) => {
      const [response, error] = await promiseWrapper(
        apiService.get<User>(endpoint, {
          // params: resolveQueryParams((queryParams ?? {}) as Record<string, unknown>),
          signal,
        })
      );

      if (error) throw error;
      return response?.data;
    },
    enabled,
  });

  return query;
};
