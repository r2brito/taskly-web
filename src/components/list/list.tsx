import React from "react";
import { usePaginatedList } from "../../infra";
import { EmptyList, EmptyListProps } from "./components/EmptyList";

import { Wrapper, LoadingMessage, List, ListItem } from "./styles";

type ItemTConstraints = { id: number | string };

type Props<ItemT extends ItemTConstraints> = {
  queryKey: Parameters<typeof usePaginatedList<ItemT>>[0];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: (item: ItemT) => React.ReactNode;
  emptyListProps?: Pick<EmptyListProps, "emptyMessage" | "errorMessage">;
};

export function StaticList<ItemT extends ItemTConstraints>({
  emptyListProps,
  queryKey,
  getList,
  renderItem
}: Props<ItemT>) {
  const { list, isError, isLoading, refresh } = usePaginatedList(
    queryKey,
    getList
  );

  const isEmpty = list.length === 0;

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingMessage>Carregando...</LoadingMessage>
      ) : isEmpty ? (
        <EmptyList
          refetch={refresh}
          error={isError}
          loading={isLoading}
          {...emptyListProps}
        />
      ) : (
        <List>
          {list.map((item) => (
            <ListItem key={item.id}>{renderItem(item)}</ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
}
