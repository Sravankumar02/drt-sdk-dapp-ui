import { h } from '@stencil/core';
import { ExplorerLink } from 'common/ExplorerLink/ExplorerLink';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

import type { TransactionRowType } from '../../transactions-table.type';

// prettier-ignore
const styles = {
    transactionShards: 'transaction-shards drt:items-center drt:flex drt:gap-2 drt:w-max drt:fill-label',
    transactionShardsArrowIcon: 'transaction-shards-arrow-icon drt:w-4 drt:h-4',
    explorerLink: 'explorer-link drt:text-primary!'
} satisfies Record<string, string>;

interface TransactionShardsPropsType {
  class?: string;
  transaction: TransactionRowType;
}

export function TransactionShards({ transaction, class: className }: TransactionShardsPropsType) {
  return (
    <div class={{ [className]: Boolean(className), [styles.transactionShards]: true }}>
      <ExplorerLink
        link={transaction.sender.shardLink}
        class={styles.explorerLink}
        data-testid={DataTestIdsEnum.shardFromLink}
      >
        <span data-testid={DataTestIdsEnum.senderShard}>{transaction.sender.shard}</span>
      </ExplorerLink>

      <drt-arrow-right-icon class={styles.transactionShardsArrowIcon} />

      <ExplorerLink
        link={transaction.receiver.shardLink}
        data-testid={DataTestIdsEnum.shardToLink}
        class={styles.explorerLink}
      >
        <span data-testid={DataTestIdsEnum.receiverShard}>{transaction.receiver.shard}</span>
      </ExplorerLink>
    </div>
  );
}
