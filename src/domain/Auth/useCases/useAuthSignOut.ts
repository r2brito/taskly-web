import { useAuthCredentials } from "../../../services";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../authService";

export function useAuthSignOut() {
  const { removeCredentials } = useAuthCredentials();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials();
    }
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate()
  };
}
