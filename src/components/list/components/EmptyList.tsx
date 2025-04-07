import React from "react";

import { MessageText, Spinner, OutlineButton, Container } from "./styles";

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}

export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = "Não há publicações no seu feed",
  errorMessage = "Não foi possível carregar o feed 😢"
}: EmptyListProps) {
  let component = <MessageText>{emptyMessage}</MessageText>;

  if (loading) {
    component = <Spinner />;
  }

  if (error) {
    component = (
      <>
        <MessageText style={{ marginBottom: "16px" }}>
          {errorMessage}
        </MessageText>
        <OutlineButton onClick={refetch}>Recarregar</OutlineButton>
      </>
    );
  }

  return <Container>{component}</Container>;
}
