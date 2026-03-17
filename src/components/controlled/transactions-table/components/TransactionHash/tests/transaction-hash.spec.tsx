import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { IconNamesEnum } from 'common/Icon/icon.types';

import type { TransactionAccountType, TransactionRowType } from '../../../transactions-table.type';
import { TransactionHash } from '../TransactionHash';

const account: TransactionAccountType = {
  address: 'drt...',
  name: 'test',
  description: 'test',
  isContract: false,
  isTokenLocked: false,
  link: '/test',
  showLink: false,
  shard: '0',
  shardLink: '/shard/0',
};

describe('TransactionHash tests', () => {
  it('renders with transaction data', async () => {
    const transaction: TransactionRowType = {
      age: {
        timeAgo: '1h',
        tooltip: '1 hour ago',
      },
      direction: 'in',
      iconInfo: { icon: IconNamesEnum.circleInfo, tooltip: 'Test' },
      link: 'https://example.com/tx/123',
      method: {
        name: 'Smart Contract',
        actionDescription: 'Contract call',
      },
      receiver: account,
      sender: account,
      txHash: '0x123456789abcdef',
      value: {
        rewaLabel: 'xREWA',
        valueDecimal: '0',
        valueInteger: '100',
      },
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionHash transaction={transaction} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center drt:justify-center transaction-hash">
        <svg class="drt:flex drt:items-center drt:justify-center transaction-hash-icon" height="20" viewBox="0 0 640 640" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" fill="currentColor"></path>
        </svg>
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary! transaction-hash-explorer-link" data-testid="transactionLink" href="https://example.com/tx/123" rel="noreferrer" target="_blank">
          <div class="drt:flex drt:max-w-full drt:overflow-hidden drt:relative drt:whitespace-nowrap trim" data-testid="trim">
            <div class="drt:absolute drt:leading-5 drt:text-transparent trim-full" data-testid="trimFullAddress">
              0x123456789abcdef
            </div>
            <div class="drt:hidden trim-wrapper">
              <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-left trim-left-wrapper">
                <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base trim-left" style="font-size: 1rem;">
                  0x123456
                </div>
              </div>
              <div class="drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none trim-ellipsis-wrapper">
                <div class="drt:block drt:leading-5 trim-ellipsis">
                  ...
                </div>
              </div>
              <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-right drt:whitespace-nowrap trim-right-wrapper" style="direction: rtl;">
                <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base drt:text-clip trim-right" style="font-size: 1rem;">
                  789abcdef
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `);
  });

  it('updates when transaction prop changes', async () => {
    const initialTransactionData: TransactionRowType = {
      age: {
        timeAgo: '1h',
        tooltip: '1 hour ago',
      },
      direction: 'in',
      iconInfo: { icon: IconNamesEnum.circleInfo, tooltip: 'Initial' },
      link: 'https://example.com/tx/initial',
      method: {
        name: 'Smart Contract',
        actionDescription: 'Initial call',
      },
      receiver: account,
      sender: account,
      txHash: '0xInitialHash',
      value: {
        rewaLabel: 'xREWA',
        valueDecimal: '0',
        valueInteger: '100',
      },
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionHash transaction={initialTransactionData} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center drt:justify-center transaction-hash">
      <svg class="drt:flex drt:items-center drt:justify-center transaction-hash-icon" height="20" viewBox="0 0 640 640" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" fill="currentColor"></path>
      </svg>
        <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary! transaction-hash-explorer-link" data-testid="transactionLink" href="https://example.com/tx/initial" rel="noreferrer" target="_blank">
          <div class="drt:flex drt:max-w-full drt:overflow-hidden drt:relative drt:whitespace-nowrap trim" data-testid="trim">
            <div class="drt:absolute drt:leading-5 drt:text-transparent trim-full" data-testid="trimFullAddress">
              0xInitialHash
            </div>
            <div class="drt:hidden trim-wrapper">
              <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-left trim-left-wrapper">
                <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base trim-left" style="font-size: 1rem;">
                  0xInit
                </div>
              </div>
              <div class="drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none trim-ellipsis-wrapper">
                <div class="drt:block drt:leading-5 trim-ellipsis">
                  ...
                </div>
              </div>
              <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-right drt:whitespace-nowrap trim-right-wrapper" style="direction: rtl;">
                <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base drt:text-clip trim-right" style="font-size: 1rem;">
                  ialHash
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
  `);
  });

  it('renders with updated transaction data', async () => {
    const updatedTransactionData: TransactionRowType = {
      age: {
        timeAgo: '2h',
        tooltip: '2 hours ago',
      },
      direction: 'out',
      iconInfo: { icon: IconNamesEnum.circleCheck, tooltip: 'Updated' },
      link: 'https://example.com/tx/updated',
      method: {
        name: 'Transfer',
        actionDescription: 'Token transfer',
      },
      receiver: account,
      sender: account,
      txHash: '0xUpdatedHash',
      value: {
        rewaLabel: 'xREWA',
        valueDecimal: '1',
        valueInteger: '200',
      },
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionHash transaction={updatedTransactionData} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center drt:justify-center transaction-hash">
         <svg class="drt:flex drt:items-center drt:justify-center transaction-hash-icon" height="20" viewBox="0 0 640 640" width="20" xmlns="http://www.w3.org/2000/svg">
           <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" fill="currentColor"></path>
         </svg>
         <a class="explorer-link drt:decoration-0 drt:flex drt:text-primary! transaction-hash-explorer-link" data-testid="transactionLink" href="https://example.com/tx/updated" rel="noreferrer" target="_blank">
           <div class="drt:flex drt:max-w-full drt:overflow-hidden drt:relative drt:whitespace-nowrap trim" data-testid="trim">
             <div class="drt:absolute drt:leading-5 drt:text-transparent trim-full" data-testid="trimFullAddress">
               0xUpdatedHash
             </div>
             <div class="drt:hidden trim-wrapper">
               <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-left trim-left-wrapper">
                 <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base trim-left" style="font-size: 1rem;">
                   0xUpda
                 </div>
               </div>
               <div class="drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none trim-ellipsis-wrapper">
                 <div class="drt:block drt:leading-5 trim-ellipsis">
                   ...
                 </div>
               </div>
               <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-right drt:whitespace-nowrap trim-right-wrapper" style="direction: rtl;">
                 <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base drt:text-clip trim-right" style="font-size: 1rem;">
                   tedHash
                 </div>
               </div>
             </div>
           </div>
         </a>
       </div>
   `);
  });

  it('renders null when transaction is not provided', async () => {
    const page = await newSpecPage({
      components: [TransactionHash],
      template: () => <drt-transaction-hash></drt-transaction-hash>,
    });

    expect(page.root).toEqualHtml(`
      <drt-transaction-hash>
      </drt-transaction-hash>
    `);
  });
});
