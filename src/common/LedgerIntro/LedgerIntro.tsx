import { h } from '@stencil/core';
import classNames from 'classnames';
import { Button } from 'common/Button/Button';
import { SpinnerIcon } from 'common/Icon/components/SpinnerIcon/SpinnerIcon';
import type { IConnectScreenData } from 'components/functional/ledger-connect/ledger-connect.types';

// prettier-ignore
const styles = {
  ledgerIntro: 'ledger-intro drt:flex-1 drt:flex drt:flex-col drt:py-6 drt:overflow-auto drt:overflow-x-hidden',
  ledgerIntroWrapper: 'ledger-intro-wrapper drt:flex drt:flex-col drt:items-center drt:gap-6 drt:text-center drt:text-base drt:mb-auto',
  ledgerIntroIcon: 'ledger-intro-icon drt:mx-auto drt:self-start drt:w-auto! drt:h-auto!',
  ledgerIntroDescription: 'ledger-intro-description drt:text-base drt:leading-6',
  ledgerIntroError: 'ledger-intro-error drt:text-base drt:max-w-60 drt:mb-6 drt:leading-6',
  ledgerIntroIssues: 'ledger-intro-issues drt:text-base drt:mt-10 drt:mx-auto drt:text-center drt:relative drt:pb-1',
} satisfies Record<string, string>;

const ledgerIntroClasses: Record<string, string> = {
  icon: 'drt:w-50 drt:h-auto drt:xs:w-100 drt:xs:h-85',
  button: 'drt:w-48 drt:xs:mt-5',
};

export interface LedgerIntroPropsType {
  connectScreenData?: IConnectScreenData;
  isAwaiting?: boolean;
  onConnect?: (event: MouseEvent) => void;
}

export function LedgerIntro({ connectScreenData, isAwaiting = false, onConnect }: LedgerIntroPropsType) {
  const showError = connectScreenData && connectScreenData.error;

  const handleLedgerConnectClick = (event: MouseEvent) => {
    event.preventDefault();
    onConnect?.(event);
  };

  return (
    <div class={styles.ledgerIntro}>
      <style>
        {`
          .ledger-intro::-webkit-scrollbar {
            display: none;
          }
          .ledger-intro-issues:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 2rem;
            right: 2rem;
            height: 1px;
            transition: all 200ms ease-in-out;
            opacity: 0;
            background-color: var(--drt-text-color-secondary);
          }
          .ledger-intro-issues:hover:after {
            opacity: 0.5;
          }
        `}
      </style>
      <div class={styles.ledgerIntroWrapper}>
        <drt-ledger-icon class={classNames(styles.ledgerIntroIcon, ledgerIntroClasses.icon)} />

        <div class={styles.ledgerIntroDescription} style={{ color: 'var(--drt-text-color-secondary)' }}>
          Connect your device <br />
          and open the DharitrI App
        </div>

        <Button
          variant="secondary"
          disabled={Boolean(isAwaiting)}
          onClick={handleLedgerConnectClick}
          class={classNames('ledger-intro-button', ledgerIntroClasses.button)}
        >
          {isAwaiting ? (
            <span class="ledger-intro-button-label">Connecting...</span>
          ) : (
            <span class="ledger-intro-button-label">{showError ? 'Retry Connection' : 'Connect Ledger'}</span>
          )}

          {isAwaiting && <SpinnerIcon />}
        </Button>

        {showError && (
          <div class={styles.ledgerIntroError} style={{ color: 'var(--drt-error-color)' }}>
            {connectScreenData.error}
          </div>
        )}
      </div>

      <a
        href="https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux"
        target="_blank"
        rel="noopener noreferrer"
        class={styles.ledgerIntroIssues}
        style={{ color: 'var(--drt-text-color-secondary)' }}
      >
        Having connection issues?
      </a>
    </div>
  );
}
