import { Fragment, h } from '@stencil/core';
import { getProviderButtonIcon } from 'components/functional/unlock-panel/helpers';
import type { IProviderBase } from 'types/provider.types';
import { ProviderTypeEnum } from 'types/provider.types';

import { getProviderIntroText } from './helpers/getProviderIntroText';
import { SidePanelHeader } from 'common/SidePanel/components/SidePanelHeader/SidePanelHeader';

const styles = {
  container: 'drt:flex drt:flex-col drt:flex-1 drt:overflow-hidden',
  intro: 'drt:flex drt:flex-col drt:flex-1 drt:justify-center drt:items-center drt:text-center drt:p-12 drt:gap-4',
  icon: 'drt:mb-6 drt:h-37.5 drt:items-end drt:flex drt:justify-start drt:w-37.5',
  title: 'drt:text-xl drt:font-medium drt:leading-none',
  text: 'drt:text-base drt:font-medium drt:leading-5',
};

interface IProviderIdleScreenProps {
  provider: IProviderBase | null;
  introTitle?: string;
  introText?: string;
  onClose?: () => void;
  onAccess?: () => void;
  children?: any;
  isLogin?: boolean;
}

export function ProviderIdleScreen({
  provider,
  introTitle = 'Requesting Connection',
  introText = '',
  onClose,
  onAccess,
  children,
  isLogin,
}: IProviderIdleScreenProps) {
  if (!provider) {
    return null;
  }

  const providerType = provider.type;
  const isExtensionProvider = providerType === ProviderTypeEnum.extension;
  const extensionProviderIconBaseSize = 150;
  const extensionProviderIconWidth = extensionProviderIconBaseSize + (15 / 100) * extensionProviderIconBaseSize;
  const extensionProviderIconHeight = extensionProviderIconBaseSize + (10 / 100) * extensionProviderIconBaseSize;

  const providerIntroIcon = isExtensionProvider
    ? getProviderButtonIcon({ providerType, extensionProviderIconWidth, extensionProviderIconHeight })
    : getProviderButtonIcon({ providerType });
  const providerIntroText = introText || getProviderIntroText({ providerType, isLogin });

  if (provider.type === ProviderTypeEnum.ledger) {
    return (
      <Fragment>
        <SidePanelHeader hasLeftButton={false} panelTitle={provider.name} onRightButtonClick={onClose} />

        <drt-ledger-intro onConnect={onAccess} />
      </Fragment>
    );
  }

  return (
    <div class={styles.container}>
      <SidePanelHeader hasLeftButton={false} panelTitle={provider.name} onRightButtonClick={onClose} />

      <div class={styles.intro} style={{ color: 'var(--drt-text-color-primary)' }}>
        <div class={styles.icon}>{providerIntroIcon}</div>

        <div class={styles.title}>{introTitle}</div>
        {providerIntroText && (
          <div class={styles.text} style={{ color: 'var(--drt-text-color-secondary)' }}>
            {providerIntroText}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
