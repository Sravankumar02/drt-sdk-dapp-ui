import { h } from '@stencil/core';

// prettier-ignore
const styles = {
  tooltip: 'tooltip drt:flex drt:relative',
  tooltipContentWrapper: 'tooltip-content-wrapper drt:left-1/2 drt:absolute drt:z-1 drt:transform drt:-translate-x-1/2',
  tooltipContent: 'tooltip-content drt:flex-row drt:cursor-default drt:p-2 drt:whitespace-nowrap drt:text-xs drt:rounded-xl drt:leading-none drt:!bg-surface drt:border-outline-variant drt:border drt:text-primary drt:after:left-1/2 drt:after:origin-center drt:after:w-2 drt:after:h-2 drt:after:absolute drt:after:border drt:after:border-outline-variant drt:after:!bg-surface drt:after:translate-x-[calc(50%-8px)] drt:after:-rotate-[45deg] drt:after:content-[""]',
  tooltipContentTop: 'tooltip-content-top drt:after:border-t-0 drt:after:border-r-0 drt:after:-bottom-1',
  tooltipContentBottom: 'tooltip-content-bottom drt:after:border-b-0 drt:after:border-l-0 drt:after:-top-1'
} satisfies Record<string, string>;

interface TooltipPropsType {
  position?: 'top' | 'bottom';
  triggerOnClick?: boolean;
  trigger: HTMLElement;
  class?: string;
  isTooltipVisible?: boolean;
  onVisibilityChange?: (isTooltipVisible: boolean) => void;
}

export function Tooltip(
  {
    position = 'top',
    triggerOnClick = false,
    trigger,
    class: className,
    onVisibilityChange,
    isTooltipVisible = false,
  }: TooltipPropsType,
  children?: any,
) {
  const setTooltipVisible = (isTooltipVisible: boolean) => {
    onVisibilityChange?.(isTooltipVisible);
  };

  const handleEllipsisClick = (event: MouseEvent) => {
    if (!triggerOnClick) {
      return;
    }

    event.preventDefault();
    setTooltipVisible(!isTooltipVisible);
  };

  const handleFocusOut = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as Node;
    const currentTarget = event.currentTarget as HTMLElement;

    if (!currentTarget.contains(relatedTarget)) {
      setTooltipVisible(false);
    }
  };

  const handleMouseEvent = (isTooltipVisible: boolean) => {
    if (triggerOnClick) {
      return;
    }

    return (event: MouseEvent) => {
      event.preventDefault();
      setTooltipVisible(isTooltipVisible);
    };
  };

  return (
    <div
      onClick={handleEllipsisClick}
      onMouseEnter={handleMouseEvent(true)}
      onMouseLeave={handleMouseEvent(false)}
      class={{ [styles.tooltip]: true, [className]: Boolean(className) }}
    >
      {isTooltipVisible && (
        <div
          class={styles.tooltipContentWrapper}
          style={{
            top: position === 'bottom' ? 'calc(100% + 16px)' : undefined,
            bottom: position === 'top' ? 'calc(100% + 16px)' : undefined,
          }}
        >
          <div
            class={{
              [styles.tooltipContent]: true,
              [styles.tooltipContentTop]: position === 'top',
              [styles.tooltipContentBottom]: position === 'bottom',
            }}
            style={{
              backgroundColor: 'var(--color-surface, var(--drt-bg-color-secondary, #353535))',
            }}
            tabIndex={-1}
            onFocusout={handleFocusOut}
            onClick={(event: MouseEvent) => event.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
      <span>{trigger}</span>
    </div>
  );
}
