import { createActor } from "@/backend";
import type { Inquiry } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** List all vehicles in the dealership inventory. */
export function useVehicles() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listVehicles();
    },
    enabled: !!actor && !isFetching,
  });
}

/** Fetch a single vehicle by its stock id. */
export function useVehicle(stockId: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["vehicle", stockId],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getVehicle(stockId);
    },
    enabled: !!actor && !isFetching && stockId.length > 0,
  });
}

/** Submit a customer inquiry about a vehicle. */
export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (inquiry: Omit<Inquiry, "createdAt">) => {
      if (!actor) throw new Error("Backend is not ready");
      const createdAt = BigInt(Date.now()) * 1_000_000n;
      return actor.submitInquiry({ ...inquiry, createdAt });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
