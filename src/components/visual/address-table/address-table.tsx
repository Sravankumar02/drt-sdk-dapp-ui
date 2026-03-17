import type { EventEmitter } from '@stencil/core';
import { Component, Event, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import type { IAddressTableData, IndexedAccountType } from 'types/address-table.types';

import { Pagination } from './components/pagination/Pagination';

const TOTAL_ADDRESSES_COUNT = 5000;
const addressTableClasses: Record<string, string> = {
  button: 'drt:w-full',
};

@Component({
  tag: 'drt-address-table',
  styleUrl: 'address-table.scss',
  shadow: true,
})
export class AddressTable {
  @Prop() accountScreenData: IAddressTableData;
  @Prop() selectedIndex: number;

  @Event() accessWallet: EventEmitter;
  @Event({ bubbles: false, composed: false }) selectAccount: EventEmitter;
  @Event() pageChange: EventEmitter<number>;

  @State() activeTooltipIndex: number | null = null;
  @State() isTooltipOpen: boolean = false;
  @State() pageValue: string = '';

  handleAccessWallet(event: MouseEvent) {
    event.preventDefault();
    this.accessWallet.emit();
  }

  handleSelectAccount(accountDerivationIndex: number) {
    return (event: MouseEvent) => {
      event.preventDefault();
      this.selectAccount.emit(accountDerivationIndex);
    };
  }

  private processLedgerAddressIndex(accountDerivation: IndexedAccountType) {
    return Number(accountDerivation.index + 1).toLocaleString();
  }

  private handlePaginationTooltipStatusChange = (index: number | null, isOpen: boolean) => {
    this.activeTooltipIndex = index;
    this.isTooltipOpen = isOpen;
    if (!isOpen) {
      this.pageValue = '';
    }
  };

  private handlePageValueChange = (value: string) => {
    this.pageValue = value;
  };

  render() {
    const isPageChanging = this.accountScreenData.isLoading;
    const isAddressesLoadingInitially = this.accountScreenData.accounts.length === 0;
    const totalPages = Math.ceil(TOTAL_ADDRESSES_COUNT / this.accountScreenData.addressesPerPage);
    const isSelectedWalletOnPage = this.accountScreenData.accounts.some(
      accountDerivation => accountDerivation.index === this.selectedIndex,
    );
    const isAccessWalletDisabled = !isSelectedWalletOnPage && !isPageChanging;
    const lastIndexOfPage = this.accountScreenData.startIndex + this.accountScreenData.addressesPerPage;
    const isSingleDigitIndex = lastIndexOfPage <= 10;
    const isIndexBelowOneHundred = !isSingleDigitIndex && lastIndexOfPage < 100;
    const isIndexInTheHundreds = !isIndexBelowOneHundred && !isSingleDigitIndex && lastIndexOfPage < 1000;
    const isIndexInTheThousands = lastIndexOfPage >= 1000;

    const addressClasses: Record<string, string> = {
      pagination: 'drt:relative drt:z-1',
      buttonTooltip: 'drt:absolute drt:top-0 drt:h-12 drt:left-0 drt:right-0',
      preloaderItem:
        'drt:h-16! drt:border drt:border-solid drt:border-transparent drt:rounded-lg! drt:flex drt:items-center drt:w-full! drt:p-4',
      preloaderItemCheckbox: 'drt:h-4! drt:mr-2 drt:min-w-4! drt:w-4! drt:rounded-full! drt:bg-preloader!',
      preloaderItemShard:
        'address-table-preloader-item-shard drt:h-4! drt:mr-2 drt:min-w-4! drt:w-4! drt:rounded-full! drt:bg-preloader!',
      preloaderItemAddress: 'drt:w-40! drt:h-4! drt:bg-preloader! drt:rounded-lg! drt:mr-auto',
      preloaderItemBalance: 'drt:w-24! drt:h-4! drt:bg-preloader! drt:rounded-lg! drt:ml-2',
      preloaderItemIndex: classNames('drt:mr-2 drt:h-4! drt:bg-preloader! drt:rounded-lg!', {
        'drt:min-w-9!': isSingleDigitIndex,
        'drt:min-w-10!': isIndexBelowOneHundred,
        'drt:min-w-13!': isIndexInTheHundreds,
        'drt:min-w-17!': isIndexInTheThousands,
      }),
    };

    if (isAddressesLoadingInitially) {
      return <drt-ledger-intro isAwaiting={true} />;
    }

    return (
      <div class="address-table">
        <div class="address-table-label-wrapper" part="label-wrapper">
          <div class="address-table-label">Choose the wallet you want to access</div>
        </div>

        <div class="address-table-wrapper">
          <div class={{ 'address-table-preloader': true, 'visible': isPageChanging }}>
            {Array.from({ length: this.accountScreenData.addressesPerPage }, () => (
              <drt-preloader class={classNames('address-table-preloader-item', addressClasses.preloaderItem)}>
                <drt-preloader
                  class={classNames('address-table-preloader-item-checkbox', addressClasses.preloaderItemCheckbox)}
                />

                <drt-preloader class={classNames(addressClasses.preloaderItemShard)} />

                <drt-preloader
                  class={classNames('address-table-preloader-item-index', addressClasses.preloaderItemIndex)}
                />

                <drt-preloader
                  class={classNames('address-table-preloader-item-address', addressClasses.preloaderItemAddress)}
                />

                <drt-preloader
                  class={classNames('address-table-preloader-item-balance', addressClasses.preloaderItemBalance)}
                />
              </drt-preloader>
            ))}
          </div>

          <div class={{ 'address-table-list': true, 'visible': !isPageChanging }}>
            {this.accountScreenData.accounts.map(accountDerivation => {
              const isChecked = accountDerivation.index === this.selectedIndex;
              return (
                <div
                  data-testid={`${DataTestIdsEnum.check}_${accountDerivation.address}`}
                  onClick={this.handleSelectAccount(accountDerivation.index)}
                  class={{
                    'address-table-list-item': true,
                    'checked': isChecked,
                  }}
                >
                  <input
                    type="radio"
                    name="address-table-selection"
                    checked={isChecked}
                    class={{
                      'address-table-list-item-checkbox': true,
                      'checked': isChecked,
                    }}
                  />

                  <div
                    class={{
                      'address-table-list-item-index': true,
                      'checked': isChecked,
                      'narrow': isSingleDigitIndex,
                      'middle': isIndexBelowOneHundred,
                      'larger': isIndexInTheHundreds,
                      'largest': isIndexInTheThousands,
                    }}
                  >
                    #{this.processLedgerAddressIndex(accountDerivation)}
                    {accountDerivation.shard != null && (
                      <drt-tooltip
                        position={accountDerivation.index === this.accountScreenData.startIndex ? 'bottom' : 'top'}
                        trigger={
                          <drt-shard-icon shard={accountDerivation.shard} class="address-table-list-item-shard-icon" />
                        }
                      >
                        <div class="address-table-list-item-shard-tooltip">Shard {accountDerivation.shard}</div>
                      </drt-tooltip>
                    )}
                  </div>

                  <drt-trim text={accountDerivation.address} class="address-table-list-item-address" part="address" />
                  <div class="address-table-list-item-balance">{accountDerivation.usdValue}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div class="address-table-pagination" part="pagination-wrapper">
          <Pagination
            totalPages={totalPages}
            isDisabled={isPageChanging}
            class={addressClasses.pagination}
            onPageChange={(page: number) => this.pageChange.emit(page)}
            currentPage={Math.floor(this.accountScreenData.startIndex / this.accountScreenData.addressesPerPage) + 1}
            activeTooltipIndex={this.activeTooltipIndex}
            isTooltipOpen={this.isTooltipOpen}
            onTooltipStatusChange={this.handlePaginationTooltipStatusChange}
            pageValue={this.pageValue}
            onPageValueChange={this.handlePageValueChange}
          />
        </div>

        <div class="address-table-button-wrapper">
          {isAccessWalletDisabled && (
            <div class="address-table-button-tooltip-wrapper">
              <drt-tooltip
                trigger={<div class={{ 'address-table-button-tooltip': true, [addressClasses.buttonTooltip]: true }} />}
              >
                You have to select a wallet from the list that you want to access.
              </drt-tooltip>
            </div>
          )}

          <drt-button
            data-testid={DataTestIdsEnum.confirmBtn}
            onButtonClick={this.handleAccessWallet.bind(this)}
            disabled={isPageChanging || isAccessWalletDisabled}
            class={classNames('address-table-button', addressTableClasses.button)}
            exportparts="button: access-button"
          >
            <span class="address-table-button-label">{isPageChanging ? 'Loading Wallets...' : 'Access Wallet'}</span>
            {isPageChanging && <drt-spinner-icon />}
          </drt-button>
        </div>
      </div>
    );
  }
}
