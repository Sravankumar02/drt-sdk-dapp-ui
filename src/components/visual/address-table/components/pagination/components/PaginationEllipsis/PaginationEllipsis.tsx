import { h } from '@stencil/core';
import { ELLIPSIS } from 'constants/htmlStrings';

// prettier-ignore
const styles = {
  paginationEllipsis: 'pagination-ellipsis drt:w-8 drt:h-8 drt:cursor-pointer drt:flex drt:items-center drt:justify-center drt:transition-all drt:duration-200 drt:rounded-full drt:ease-in-out drt:text-primary drt:hover:bg-pagination-item-hover drt:active:bg-pagination-item-hover',
  paginationEllipsisActive: 'pagination-ellipsis-active drt:active:bg-pagination-item-hover'
} satisfies Record<string, string>;

interface PaginationEllipsisPropsType {
  isActive?: boolean;
}

export function PaginationEllipsis({ isActive = false }: PaginationEllipsisPropsType) {
  return (
    <div class={{ [styles.paginationEllipsis]: true, [styles.paginationEllipsisActive]: isActive }}>{ELLIPSIS}</div>
  );
}
