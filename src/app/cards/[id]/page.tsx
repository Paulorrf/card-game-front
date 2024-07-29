"use client";

import useCard from "@/hooks/card/useCard";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import Cards from "./Cards";

export default function Page({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery(useCard(params.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Cards id={params.id} />
    </HydrationBoundary>
  );
}
