import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import type { TransactionValueType } from 'components/controlled/transactions-table/transactions-table.type';

import { TransactionValue } from '../TransactionValue';

describe('TransactionValue tests', () => {
  it('renders with minimal props', async () => {
    const value: TransactionValueType = {
      rewaLabel: '',
      link: '',
      linkText: '',
      name: '',
      ticker: '',
      valueDecimal: '',
      valueInteger: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value"></div>
    `);
  });

  it('renders with badge', async () => {
    const value: TransactionValueType = {
      badge: 'NFT',
      rewaLabel: '',
      link: '',
      linkText: '',
      name: '',
      ticker: '',
      valueDecimal: '',
      valueInteger: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
        <div class="drt:align-baseline drt:bg-transparent drt:border drt:border-transaction-method drt:break-all drt:duration-200 drt:ease-in-out drt:font-bold drt:inline-block drt:leading-none drt:motion-reduce:transition-none drt:px-1.5 drt:py-1 drt:rounded-sm drt:text-xs drt:text-center drt:text-transaction-method drt:transition-colors drt:w-max drt:whitespace-pre-wrap transaction-value-badge" data-testid="transactionNftBadge">
          NFT
        </div>
      </div>
    `);
  });

  it('renders with formatted amount', async () => {
    const value: TransactionValueType = {
      showFormattedAmount: true,
      rewaLabel: 'xREWA',
      valueDecimal: '123',
      valueInteger: '123',
      link: '',
      linkText: '',
      name: '',
      ticker: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
        <div class="drt:flex drt:gap-1 drt:items-center transaction-value-amount">
          <drt-dharitri-symbol-icon class="drt:text-primary transaction-value-amount-symbol"></drt-dharitri-symbol-icon>
          <span class="format-amount drt:items-center drt:mr-1 drt:text-primary transaction-value-format-amount" data-testid="transactionActionFormattedAmount">
            <span class="int-amount drt:text-inherit" data-testid="formatAmountInt">
             123
            </span>
            <span class="decimals drt:text-inherit opacity-70" data-testid="formatAmountDecimals">
              123
            </span>
            <span class="drt:ml-1 drt:text-inherit opacity-70 symbol" data-testid="formatAmountSymbol">
                xREWA
            </span>
          </span>
        </div>
      </div>
    `);
  });

  it('renders with explorer link', async () => {
    const value: TransactionValueType = {
      rewaLabel: '',
      link: 'https://example.com',
      linkText: 'Example Link',
      name: 'Example',
      ticker: 'EX',
      valueDecimal: '',
      valueInteger: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
        <a class="explorer-link drt:decoration-0 drt:flex drt:truncate transaction-value-text-truncate" href="https://example.com" rel="noreferrer" target="_blank">
          <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
            <span>Example Link</span>
          </div>
        </a>
      </div>
    `);
  });

  it('renders with SVG icon', async () => {
    const value: TransactionValueType = {
      rewaLabel: '',
      link: 'https://example.com',
      linkText: 'Example Link',
      svgUrl: 'https://example.com/icon.svg',
      name: 'Example Icon',
      ticker: 'EX',
      valueDecimal: '',
      valueInteger: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
        <a class="explorer-link drt:decoration-0 drt:flex transaction-value-link" href="https://example.com" rel="noreferrer" target="_blank">
          <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
            <img alt="Example Icon" class="drt:border drt:border-gray-200 drt:h-6 drt:min-h-6 drt:min-w-6 drt:overflow-hidden drt:rounded-full drt:text-transparent drt:w-6 transaction-value-img" src="https://example.com/icon.svg">
            <span>Example Link</span>
          </div>
        </a>
      </div>
    `);
  });

  it('renders with truncated text', async () => {
    const value: TransactionValueType = {
      rewaLabel: '',
      link: 'https://example.com',
      linkText: 'Example Link',
      ticker: 'EXM',
      collection: 'EXM',
      name: 'Example',
      valueDecimal: '',
      valueInteger: '',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
        <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
          <a class="explorer-link drt:decoration-0 drt:flex drt:truncate transaction-value-text-truncate" href="https://example.com" rel="noreferrer" target="_blank">
            <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
              <span class="drt:truncate transaction-value-text-truncate">Example Link</span>
            </div>
          </a>
        </div>
    `);
  });

  it('renders with titleText', async () => {
    const value: TransactionValueType = {
      rewaLabel: '',
      link: 'https://example.com',
      linkText: 'Example Link',
      name: 'Example',
      ticker: 'EX',
      valueDecimal: '',
      valueInteger: '',
      titleText: 'Title Text',
    };

    const page = await newSpecPage({
      components: [],
      template: () => <TransactionValue value={value} />,
    });

    expect(page.root).toEqualHtml(`
      <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
        <a class="explorer-link drt:decoration-0 drt:flex drt:truncate transaction-value-text-truncate" href="https://example.com" rel="noreferrer" target="_blank">
          <div class="drt:flex drt:gap-1 drt:items-center transaction-value">
            <span>Example Link</span>
          </div>
        </a>
        <drt-tooltip>
          Title Text
        </drt-tooltip>
      </div>
    `);
  });
});
