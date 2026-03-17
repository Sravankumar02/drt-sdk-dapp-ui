import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { TransactionMethod } from '../TransactionMethod';

describe('TransactionMethod tests', () => {
  const createPage = async (props: { method?: string; actionDescription?: string }) => {
    const page = await newSpecPage({
      components: [],
      template: () => <TransactionMethod method={props.method} actionDescription={props.actionDescription} />,
    });

    return page;
  };

  describe('rendering', () => {
    it('renders with default props', async () => {
      const page = await newSpecPage({
        components: [],
        template: () => <TransactionMethod method="" actionDescription="" />,
      });

      expect(page.root).toBeTruthy();
    });

    it('has correct data-testid', async () => {
      const page = await newSpecPage({
        components: [],
        template: () => <TransactionMethod method="testMethod" actionDescription="Test Description" />,
      });

      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="Test Description">
          <div class="transaction-method-text drt:truncate drt:capitalize">testMethod</div>
        </span>
      `);
    });
  });

  describe('method display', () => {
    it('displays the transaction method', async () => {
      const page = await createPage({ method: 'testMethod' });
      const methodElement = page.root.querySelector('.transaction-method-text');
      expect(methodElement.textContent).toBe('testMethod');
    });

    it('handles empty method', async () => {
      const page = await createPage({ method: '' });
      const methodElement = page.root.querySelector('.transaction-method-text');
      expect(methodElement.textContent).toBe('');
    });

    it('handles undefined method', async () => {
      const page = await createPage({ method: undefined });
      const methodElement = page.root.querySelector('.transaction-method-text');
      expect(methodElement.textContent).toBe('');
    });
  });

  describe('action description', () => {
    it('sets the action description as title', async () => {
      const page = await createPage({ actionDescription: 'Test Description' });
      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="Test Description">
          <div class="transaction-method-text drt:truncate drt:capitalize"></div>
        </span>
      `);
    });

    it('handles empty action description', async () => {
      const page = await createPage({ actionDescription: '' });
      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="">
          <div class="transaction-method-text drt:truncate drt:capitalize"></div>
        </span>
      `);
    });

    it('handles undefined action description', async () => {
      const page = await createPage({ actionDescription: undefined });
      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="">
          <div class="transaction-method-text drt:truncate drt:capitalize"></div>
        </span>
      `);
    });
  });

  describe('styling', () => {
    it('applies correct CSS classes to outer span', async () => {
      const page = await newSpecPage({
        components: [],
        template: () => <TransactionMethod method="testMethod" actionDescription="" />,
      });

      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="">
          <div class="transaction-method-text drt:truncate drt:capitalize">testMethod</div>
        </span>
      `);
    });

    it('applies correct CSS classes to inner div', async () => {
      const page = await newSpecPage({
        components: [],
        template: () => <TransactionMethod method="testMethod" actionDescription="" />,
      });

      expect(page.root).toEqualHtml(`
        <span class="transaction-method-badge drt:inline-block drt:py-1 drt:px-1.5 drt:font-normal drt:text-center drt:whitespace-pre-wrap drt:text-xs drt:leading-none drt:break-all drt:align-baseline drt:rounded-sm drt:transition-colors drt:duration-200 drt:ease-in-out drt:motion-reduce:transition-none drt:text-transaction-method drt:border-1 drt:border-transaction-method drt:bg-transparent drt:font-light" data-testid="method" title="">
          <div class="transaction-method-text drt:truncate drt:capitalize">testMethod</div>
        </span>
      `);
    });
  });
});
