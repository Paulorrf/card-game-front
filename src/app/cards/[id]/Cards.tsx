"use client";

import useCard from "@/hooks/card/useCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const Cards = ({ id }: { id: number }) => {
  const { data, isLoading } = useSuspenseQuery(useCard(id));

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <div>Cards id = {id}</div>;
};

export default Cards;
