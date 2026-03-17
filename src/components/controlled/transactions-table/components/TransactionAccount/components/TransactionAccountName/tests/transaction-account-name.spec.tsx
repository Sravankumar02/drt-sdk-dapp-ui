import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

import { TransactionAccountName } from '../TransactionAccountName';

describe('TransactionAccountName tests', () => {
  it('renders name when provided', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => (
        <TransactionAccountName
          address="drt1q..."
          name="Alice"
          description="Alice's Wallet"
          data-testid="account-name"
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <div class="transaction-account-name drt:w-max drt:truncate" data-testid="account-name" title="Alice's Wallet">
        Alice
      </div>
    `);
  });

  it('uses trim component when name is missing', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TransactionAccountName address="drt1q..." description="" />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:max-w-full drt:overflow-hidden drt:relative drt:truncate drt:w-max drt:whitespace-nowrap transaction-account-name trim" data-testid="${DataTestIdsEnum.trim}">
        <div class="drt:absolute drt:leading-5 drt:text-transparent trim-full" data-testid="${DataTestIdsEnum.trimFullAddress}">
          drt1q...
        </div>
        <div class="drt:hidden trim-wrapper">
          <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-left trim-left-wrapper">
            <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base trim-left" style="font-size: 1rem;">
              drt1
            </div>
          </div>
          <div class="drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none trim-ellipsis-wrapper">
            <div class="drt:block drt:leading-5 trim-ellipsis">
              ...
            </div>
          </div>
          <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-right drt:whitespace-nowrap trim-right-wrapper" style="direction: rtl;">
            <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base drt:text-clip trim-right" style="font-size: 1rem;">
              q...
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('handles empty name string', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TransactionAccountName address="drt1q..." name="" description="" />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:max-w-full drt:overflow-hidden drt:relative drt:truncate drt:w-max drt:whitespace-nowrap transaction-account-name trim" data-testid="${DataTestIdsEnum.trim}">
        <div class="drt:absolute drt:leading-5 drt:text-transparent trim-full" data-testid="${DataTestIdsEnum.trimFullAddress}">
          drt1q...
        </div>
        <div class="drt:hidden trim-wrapper">
          <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-left trim-left-wrapper">
            <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base trim-left" style="font-size: 1rem;">
              drt1
            </div>
          </div>
          <div class="drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none trim-ellipsis-wrapper">
            <div class="drt:block drt:leading-5 trim-ellipsis">
              ...
            </div>
          </div>
          <div class="drt:flex-shrink drt:overflow-hidden drt:text-[1px] drt:text-ellipsis drt:text-right drt:whitespace-nowrap trim-right-wrapper" style="direction: rtl;">
            <div class="drt:-webkit-letter-spacing drt:inline drt:leading-5 drt:pointer-events-none drt:select-none drt:text-base drt:text-clip trim-right" style="font-size: 1rem;">
              q...
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('applies correct class names', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TransactionAccountName address="drt1q..." name="Bob" class="custom-class" description="" />,
    });

    expect(page.root).toEqualHtml(`
      <div class="custom-class transaction-account-name drt:w-max drt:truncate">
        Bob
      </div>
    `);
  });

  it('handles missing dataTestId', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TransactionAccountName address="drt1q..." name="Charlie" description="" />,
    });

    expect(page.root).toEqualHtml(`
      <div class="transaction-account-name drt:w-max drt:truncate">
        Charlie
      </div>
    `);
  });

  it('uses description as title when name exists', async () => {
    const page = await newSpecPage({
      components: [TransactionAccountName],
      template: () => <TransactionAccountName address="drt1q..." name="Dave" description="Dave's Savings" />,
    });

    expect(page.root).toEqualHtml(`
      <div class="transaction-account-name drt:w-max drt:truncate" title="Dave's Savings">
        Dave
      </div>
    `);
  });
});
