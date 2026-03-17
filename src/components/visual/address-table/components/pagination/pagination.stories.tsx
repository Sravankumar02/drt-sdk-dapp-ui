import './pagination.scss';

import { h } from '@stencil/core';
import type { StoryObj } from '@stencil/storybook-plugin';

// prettier-ignore
const styles = {
  paginationStoriesWrapper: 'pagination-stories-wrapper drt:justify-center drt:flex drt:gap-4 drt:pt-24',
} satisfies Record<string, string>;

const storySettings = {
  tags: ['autodocs'],
  title: 'Components/Pagination',
  parameters: {
    docs: {
      description: {
        component:
          'Pagination is not exported as a webcomponent. Make sure to exclude the component from the tsconfig.json file.',
      },
    },
  },
  args: {
    'current-page': 1,
    'total-pages': 10,
    'is-disabled': false,
    'class': '',
  },
  argTypes: {
    'current-page': { control: { type: 'number', min: 1, max: 10 } },
    'total-pages': { control: { type: 'number', min: 1 } },
    'is-disabled': { control: 'boolean' },
    'class': { control: 'text' },
  },
  decorators: [
    Story => (
      <div class={styles.paginationStoriesWrapper}>
        <Story />
      </div>
    ),
  ],
};

type PaginationPropsType = typeof storySettings.args;

export const Default: StoryObj<PaginationPropsType> = {
  render: props => {
    return <drt-pagination {...props} />;
  },
};

export const Disabled: StoryObj<PaginationPropsType> = {
  render: () => <drt-pagination current-page={5} total-pages={20} is-disabled={true} class="custom-pagination" />,
};

export const FirstPage: StoryObj<PaginationPropsType> = {
  render: () => <drt-pagination current-page={1} total-pages={10} />,
};

export const LastPage: StoryObj<PaginationPropsType> = {
  render: () => <drt-pagination current-page={10} total-pages={10} />,
};

export const SinglePage: StoryObj<PaginationPropsType> = {
  render: () => <drt-pagination current-page={1} total-pages={1} />,
};

export const ManyPages: StoryObj<PaginationPropsType> = {
  render: () => <drt-pagination current-page={520} total-pages={1000} />,
};

export default storySettings;
