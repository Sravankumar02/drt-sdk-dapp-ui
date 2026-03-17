import { h } from '@stencil/core';
import classNames from 'classnames';
import { Icon } from 'common/Icon';
import { DecodeMethodEnum } from 'components/functional/sign-transactions-panel/sign-transactions-panel.types';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

// prettier-ignore
const styles = {
  signTransactionsAdvancedDataDecode: 'sign-transactions-advanced-data-decode drt:relative drt:flex drt:justify-center drt:items-end drt:gap-1 drt:px-3 drt:pt-4 drt:-mt-4 drt:mb-2 drt:w-22 drt:cursor-pointer drt:capitalize drt:leading-none drt:before:absolute drt:before:left-0 drt:before:right-0 drt:before:top-2.5 drt:before:h-6 drt:before:opacity-90 drt:before:rounded-3xl drt:before:bg-select drt:before:content-[""]',
  signTransactionsAdvancedDataDecodeLabel: 'sign-transactions-advanced-data-decode-label drt:relative drt:text-xs drt:capitalize drt:m-auto drt:z-1 drt:text-select-tx',
  signTransactionsAdvancedDataDecodeIcon: 'sign-transactions-advanced-data-decode-icon drt:ml-auto drt:flex drt:w-4 drt:h-2.5 drt:text-secondary-text',
  icon: 'drt:transition-all drt:duration-200 drt:ease-in-out drt:relative drt:h-3! drt:w-auto!',
  iconRotated: 'drt:rotate-90',
} satisfies Record<string, string>;

interface SignTransactionsAdvancedDataDecodePropsType {
  isToggled: boolean;
  currentDecodeMethod: DecodeMethodEnum;
}

export function SignTransactionsAdvancedDataDecode({
  isToggled = false,
  currentDecodeMethod = DecodeMethodEnum.decimal,
}: SignTransactionsAdvancedDataDecodePropsType) {
  return (
    <div
      class={styles.signTransactionsAdvancedDataDecode}
      data-testid={DataTestIdsEnum.signTransactionsAdvancedDataDecode}
    >
      <div
        class={styles.signTransactionsAdvancedDataDecodeLabel}
        data-testid={DataTestIdsEnum.signTransactionsAdvancedDataDecodeLabel}
      >
        {currentDecodeMethod}
      </div>

      <Icon
        name="angle-down"
        class={classNames(styles.signTransactionsAdvancedDataDecodeIcon, {
          [styles.icon]: true,
          [styles.iconRotated]: isToggled,
        })}
      />
    </div>
  );
}
