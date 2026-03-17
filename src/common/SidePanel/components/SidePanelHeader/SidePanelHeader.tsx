import { h } from '@stencil/core';
import classNames from 'classnames';
import { Icon } from 'common/Icon';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

// prettier-ignore
const styles = {
  sidePanelHeading: 'side-panel-heading drt:flex drt:items-center drt:leading-none drt:gap-3 drt:z-1 drt:relative drt:px-0 drt:py-2 drt:text-2xl drt:shadow-lg drt:shadow-surface',
  sidePanelHeadingLeft: 'side-panel-heading-left drt:mr-auto drt:hidden drt:pointer-events-none drt:cursor-pointer drt:opacity-0 drt:text-secondary-text drt:xs:flex drt:hover:opacity-75',
  sidePanelHeadingRight: 'side-panel-heading-right drt:ml-auto drt:hidden drt:pointer-events-none drt:cursor-pointer drt:opacity-0 drt:text-secondary-text drt:xs:flex drt:hover:opacity-75',
  sidePanelHeadingLeftVisible: 'side-panel-heading-left-visible drt:transition-all drt:opacity-100 drt:duration-200 drt:ease-in-out drt:!pointer-events-auto drt:flex drt:hover:opacity-75',
  sidePanelHeadingRightVisible: 'side-panel-heading-right-visible drt:transition-all drt:opacity-100 drt:duration-200 drt:ease-in-out drt:!pointer-events-auto drt:!flex drt:hover:opacity-75',
  sidePanelHeadingTitle: 'side-panel-heading-title drt:font-medium drt:text-primary'
} satisfies Record<string, string>;

interface SidePanelHeaderPropsType {
  panelClassName?: string;
  panelTitle: string;
  hasLeftButton?: boolean;
  hasRightButton?: boolean;
  onRightButtonClick?: (event: MouseEvent) => void;
  onLeftButtonClick?: (event: MouseEvent) => void;
  leftIcon?: any;
  rightIcon?: any;
}

export function SidePanelHeader({
  panelClassName,
  panelTitle,
  hasLeftButton = true,
  hasRightButton = true,
  onRightButtonClick,
  onLeftButtonClick,
  leftIcon,
  rightIcon,
}: SidePanelHeaderPropsType) {
  const handleRightIconClick = (event: MouseEvent) => {
    event.preventDefault();
    onRightButtonClick?.(event);
  };

  const handleLeftIconClick = (event: MouseEvent) => {
    event.preventDefault();
    onLeftButtonClick?.(event);
  };

  return (
    <div class={classNames(styles.sidePanelHeading, panelClassName)}>
      <div
        class={{ [styles.sidePanelHeadingLeft]: true, [styles.sidePanelHeadingLeftVisible]: hasLeftButton }}
        onClick={handleLeftIconClick}
      >
        {hasLeftButton && (leftIcon || <Icon name="back-arrow" />)}
      </div>

      <div class={styles.sidePanelHeadingTitle}>{panelTitle}</div>

      <div
        class={{ [styles.sidePanelHeadingRight]: true, [styles.sidePanelHeadingRightVisible]: hasRightButton }}
        onClick={handleRightIconClick}
        data-testid={DataTestIdsEnum.sidePanelCloseButton}
      >
        {hasRightButton && (rightIcon || <Icon name="close" />)}
      </div>
    </div>
  );
}
