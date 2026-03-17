import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import type { IAddressTableData } from 'types/address-table.types';

// prettier-ignore
const styles = {
  addressTableStoriesWrapper: 'address-table-stories-wrapper drt:flex drt:justify-center drt:items-stretch drt:h-[600px] drt:bg-neutral-900',
  addressTableStoriesContainer: 'address-table-stories-container drt:w-full drt:max-w-3xl drt:p-6',
} satisfies Record<string, string>;

const exampleAccountScreenData: IAddressTableData = {
  startIndex: 0,
  addressesPerPage: 10,
  isLoading: false,
  accounts: [
    {
      address: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
      balance: '1.2345 REWA',
      usdValue: '$250.12',
      index: 0,
      shard: 0,
    },
    {
      address: 'drt1qqqqqqqqqqqqqpgqzqvm5ywqqf524efwrhr039tjs29w0qltkklsqnrz4q',
      balance: '0.5000 REWA',
      usdValue: '$101.25',
      index: 1,
      shard: 1,
    },
    {
      address: 'drt1qj8g8j9h0x0k9p7s0q3w4e5r6t7y8u9i0o1p2a3s4d5f6g7h8j9k0l1m2n3',
      balance: '10.0000 REWA',
      usdValue: '$2,025.00',
      index: 2,
      shard: 2,
    },
    {
      address: 'drt1k9p7s0q3w4e5r6t7y8u9i0o1p2a3s4d5f6g7h8j9k0l1m2n3q4r5s6t7u8v',
      balance: '0.0100 REWA',
      usdValue: '$2.05',
      index: 3,
      shard: 0,
    },
    {
      address: 'drt1x2c3v4b5n6m7a8s9d0f1g2h3j4k5l6z7x8c9v0b1n2m3a4s5d6f7g8h9j0',
      balance: '5.6789 REWA',
      usdValue: '$1,150.45',
      index: 4,
      shard: 1,
    },
  ],
};

type AddressTableStoryArgs = {
  accountScreenData: IAddressTableData;
  selectedIndex: number;
};

const storySettings: Meta<AddressTableStoryArgs> = {
  tags: ['autodocs'],
  title: 'Components/AddressTable',
  args: {
    accountScreenData: exampleAccountScreenData,
    selectedIndex: exampleAccountScreenData.accounts[0].index,
  },
  argTypes: {
    accountScreenData: { control: 'object' },
    selectedIndex: { control: { type: 'number', min: 0 } },
  },
};

export const Default: StoryObj<AddressTableStoryArgs> = {
  render: properties => (
    <div class={styles.addressTableStoriesWrapper}>
      <div class={styles.addressTableStoriesContainer}>
        <drt-address-table
          data-account-screen-data={JSON.stringify(properties.accountScreenData ?? exampleAccountScreenData)}
          selectedIndex={properties.selectedIndex}
        />
      </div>
    </div>
  ),
};

export const PageChanging: StoryObj<AddressTableStoryArgs> = {
  render: properties => (
    <div class={styles.addressTableStoriesWrapper}>
      <div class={styles.addressTableStoriesContainer}>
        <drt-address-table
          data-account-screen-data={JSON.stringify({
            ...exampleAccountScreenData,
            isLoading: true,
          })}
          selectedIndex={properties.selectedIndex}
        />
      </div>
    </div>
  ),
};

export const InitialLoadingIntro: StoryObj<AddressTableStoryArgs> = {
  render: properties => (
    <div class={styles.addressTableStoriesWrapper}>
      <div class={styles.addressTableStoriesContainer}>
        <drt-address-table
          data-account-screen-data={JSON.stringify({
            ...exampleAccountScreenData,
            accounts: [],
            isLoading: true,
          })}
          selectedIndex={properties.selectedIndex}
        />
      </div>
    </div>
  ),
};

export default storySettings;
