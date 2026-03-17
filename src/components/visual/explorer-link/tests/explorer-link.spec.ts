import { newSpecPage } from '@stencil/core/testing';

import { ArrowRightIcon } from '../../../../assets/icons/arrow-right-icon/arrow-right-icon';
import { ExplorerLink } from '../explorer-link';

describe('ExplorerLink', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ExplorerLink],
      html: '<drt-explorer-link link="https://example.com"></drt-explorer-link>',
    });

    expect(page.root).toEqualHtml(`
      <drt-explorer-link link="https://example.com">
        <a class="explorer-link drt:decoration-0 drt:flex" href="https://example.com" rel="noreferrer" target="_blank">
          <svg class="explorer-link-icon drt:duration-200 drt:ease-in-out drt:flex drt:hover:opacity-80 drt:justify-center drt:transition-opacity" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" fill="currentColor"></path>
          </svg>
        </a>
      </drt-explorer-link>
    `);
  });

  it('renders with custom text', async () => {
    const page = await newSpecPage({
      components: [ExplorerLink],
      html: '<drt-explorer-link link="https://example.com">View on Explorer</drt-explorer-link>',
    });

    expect(page.root).toEqualHtml(`
      <drt-explorer-link link="https://example.com">
        View on Explorer
        <a class="explorer-link drt:decoration-0 drt:flex" href="https://example.com" rel="noreferrer" target="_blank">
          <svg class="explorer-link-icon drt:duration-200 drt:ease-in-out drt:flex drt:hover:opacity-80 drt:justify-center drt:transition-opacity" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" fill="currentColor"></path>
          </svg>
        </a>
      </drt-explorer-link>
    `);
  });

  it('renders with custom class', async () => {
    const page = await newSpecPage({
      components: [ExplorerLink],
      html: '<drt-explorer-link link="https://example.com" class="custom-class"></drt-explorer-link>',
    });

    expect(page.root).toEqualHtml(`
      <drt-explorer-link link="https://example.com" class="custom-class">
        <a class="custom-class explorer-link drt:decoration-0 drt:flex" href="https://example.com" rel="noreferrer" target="_blank">
          <svg class="explorer-link-icon drt:duration-200 drt:ease-in-out drt:flex drt:hover:opacity-80 drt:justify-center drt:transition-opacity" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" fill="currentColor"></path>
          </svg>
        </a>
      </drt-explorer-link>
    `);
  });

  it('renders with custom icon', async () => {
    const page = await newSpecPage({
      components: [ExplorerLink, ArrowRightIcon],
      html: '<drt-explorer-link link="https://example.com"><drt-arrow-right-icon /></drt-explorer-link>',
    });

    expect(page.root).toEqualHtml(`
      <drt-explorer-link link="https://example.com">
        <drt-arrow-right-icon>
          <svg class="arrow-right-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="currentColor"></path>
          </svg>
        </drt-arrow-right-icon>
        <a class="explorer-link drt:decoration-0 drt:flex" href="https://example.com" rel="noreferrer" target="_blank">
          <svg class="explorer-link-icon drt:duration-200 drt:ease-in-out drt:flex drt:hover:opacity-80 drt:justify-center drt:transition-opacity" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" fill="currentColor"></path>
          </svg>
        </a>
      </drt-explorer-link>
    `);
  });
});
