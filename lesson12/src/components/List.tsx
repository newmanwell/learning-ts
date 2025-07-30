import type { ReactNode } from "react";

interface ListProps<Items> {
  items: Items[],
  render: (item: Items) => ReactNode
}
              // extends {} indicates this is a generic
const List = <Items extends {}>({ items, render }: ListProps<Items>) => {
  return (
    <ul>
      {
        items.map((item, idx) => (
          <li key={idx}>{render(item)}</li>
        ))
      }
    </ul>
  )
}

export default List;