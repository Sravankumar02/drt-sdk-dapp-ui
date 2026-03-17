import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

import type { TransactionRowType } from '../../../transactions-table.type';
import { TransactionShards } from '../TransactionShards';

describe('TransactionShards tests', () => {
  const createMockTransaction = (senderShard: string, receiverShard: string): TransactionRowType => ({
    age: { timeAgo: '1 min ago', tooltip: '1 minute ago' },
    method: { name: 'transfer' },
    iconInfo: { tooltip: 'Transfer' },
    link: '/tx/123',
    receiver: {
      address: 'drt1receiver...',
      description: 'Receiver',
      isContract: false,
      isTokenLocked: false,
      link: '/address/drt1receiver...',
      name: 'Receiver',
      shard: receiverShard,
      shardLink: `/blocks?shard=${receiverShard}`,
      showLink: true,
    },
    sender: {
      address: 'drt1sender...',
      description: 'Sender',
      isContract: false,
      isTokenLocked: false,
      link: '/address/drt1sender...',
      name: 'Sender',
      shard: senderShard,
      shardLink: `/blocks?shard=${senderShard}`,
      showLink: true,
    },
    txHash: 'hash123',
    value: {
      rewaLabel: 'xREWA',
      valueDecimal: '0',
      valueInteger: '100',
    },
    direction: 'in',
  });

  it('renders with default props', async () => {
    const transaction = createMockTransaction('0', '1');

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionShards transaction={transaction} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:fill-label drt:flex drt:gap-2 drt:items-center drt:w-max transaction-shards">
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary!" data-testid="${DataTestIdsEnum.shardFromLink}" href="/blocks?shard=0" rel="noreferrer" target="_blank">
          <span data-testid="${DataTestIdsEnum.senderShard}">0</span>
        </a>
        <drt-arrow-right-icon class="drt:h-4 drt:w-4 transaction-shards-arrow-icon"></drt-arrow-right-icon>
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary!" data-testid="${DataTestIdsEnum.shardToLink}" href="/blocks?shard=1" rel="noreferrer" target="_blank">
          <span data-testid="${DataTestIdsEnum.receiverShard}">1</span>
        </a>
      </div>
    `);
  });

  it('renders with custom class', async () => {
    const transaction = createMockTransaction('0', '1');

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionShards class="custom-class" transaction={transaction} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="custom-class drt:fill-label drt:flex drt:gap-2 drt:items-center drt:w-max transaction-shards">
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary!" data-testid="${DataTestIdsEnum.shardFromLink}" href="/blocks?shard=0" rel="noreferrer" target="_blank">
          <span data-testid="${DataTestIdsEnum.senderShard}">0</span>
        </a>
        <drt-arrow-right-icon class="drt:h-4 drt:w-4 transaction-shards-arrow-icon"></drt-arrow-right-icon>
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary!" data-testid="${DataTestIdsEnum.shardToLink}" href="/blocks?shard=1" rel="noreferrer" target="_blank">
          <span data-testid="${DataTestIdsEnum.receiverShard}">1</span>
        </a>
      </div>
    `);
  });

  it('renders with different shard values', async () => {
    const transaction = createMockTransaction('2', '3');

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionShards transaction={transaction} />,
    });

    const senderShard = page.root.querySelector(`[data-testid="${DataTestIdsEnum.senderShard}"]`);
    const receiverShard = page.root.querySelector(`[data-testid="${DataTestIdsEnum.receiverShard}"]`);

    expect(senderShard.textContent).toBe('2');
    expect(receiverShard.textContent).toBe('3');
  });
});
