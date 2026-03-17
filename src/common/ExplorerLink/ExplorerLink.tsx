import { h } from '@stencil/core';
import { Icon } from 'common/Icon';

// prettier-ignore
const styles = {
    explorerLink: 'explorer-link drt:decoration-0 drt:flex',
    explorerLinkIcon: 'explorer-link-icon drt:flex drt:justify-center drt:transition-opacity drt:duration-200 drt:ease-in-out drt:hover:opacity-80'
} satisfies Record<string, string>;

interface ExplorerLinkPropsType {
  class?: string;
  iconClass?: string;
  'data-testid'?: string;
  link: string;
  hasIcon?: boolean;
}

export function ExplorerLink(
  { 
    class: className, 
    iconClass, 
    'data-testid': dataTestId,
    link, 
    hasIcon
  }: ExplorerLinkPropsType,
  children?: JSX.Element,
) {
  if (!link) {
    return null;
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link}
      data-testid={dataTestId}
      class={{ [styles.explorerLink]: true, [className]: Boolean(className) }}
    >
      {hasIcon ? (
        <Icon
          name="arrow-up-right-from-square-icon"
          class={{ [styles.explorerLinkIcon]: true, [iconClass]: Boolean(iconClass) }}
        />
      ) : (
        children
      )}
    </a>
  );
}
