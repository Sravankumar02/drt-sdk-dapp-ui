import { h } from '@stencil/core';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

// prettier-ignore
const styles = {
    transactionMethodBadge: 'transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light',
    transactionMethodBadgeEmpty: 'transaction-method-badge-empty drt:hidden',
    transactionMethodText: 'transaction-method-text drt:truncate drt:capitalize'

} satisfies Record<string, string>;

interface TransactionMethodPropsType {
  class?: string;
  actionDescription: string;
  method: string;
}

export function TransactionMethod({ method, actionDescription, class: className }: TransactionMethodPropsType) {
  return (
    <span
      class={{
        [styles.transactionMethodBadge]: true,
        [styles.transactionMethodBadgeEmpty]: method === '',
        [className]: Boolean(className),
      }}
      data-testid={DataTestIdsEnum.method}
      title={actionDescription}
    >
      <div class={styles.transactionMethodText}>{method}</div>
    </span>
  );
}
