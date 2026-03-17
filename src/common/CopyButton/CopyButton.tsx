import { h } from '@stencil/core';
import { Icon } from 'common/Icon';

// prettier-ignore
const styles = {
  copyButton: 'copy-button drt:flex',
  copyButtonIcon: 'copy-button-icon drt:flex drt:cursor-pointer drt:justify-center drt:transition-opacity drt:duration-200 drt:ease-in-out drt:hover:opacity-80',
  copyButtonIconCheck: 'copy-button-icon-check drt:hover:opacity-100! drt:cursor-default!',
} satisfies Record<string, string>;

interface CopyButtonPropsType {
  iconClass?: string;
  class?: string;
  text: string;
  isSuccessOnCopy?: boolean;
  handleCopyButtonClick?: (event: MouseEvent, text?: string) => void;
}

export function CopyButton({
  iconClass,
  class: className,
  isSuccessOnCopy,
  handleCopyButtonClick,
  text,
}: CopyButtonPropsType) {
  return (
    <div
      onClick={event => handleCopyButtonClick?.(event, text)}
      class={{
        [styles.copyButton]: true,
        [className]: Boolean(className),
      }}
    >
      <Icon
        name={isSuccessOnCopy ? 'check' : 'copy'}
        class={{
          [styles.copyButtonIcon]: true,
          [styles.copyButtonIconCheck]: isSuccessOnCopy,
          [iconClass]: Boolean(iconClass),
        }}
      />
    </div>
  );
}
