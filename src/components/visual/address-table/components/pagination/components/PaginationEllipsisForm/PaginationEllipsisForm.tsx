import { h } from '@stencil/core';
import classNames from 'classnames';

// prettier-ignore
const styles = {
  paginationEllipsisForm: 'pagination-ellipsis-form drt:cursor-default drt:flex drt:flex-col drt:text-left',
  paginationEllipsisFormFieldLabel: 'pagination-ellipsis-form-field-label drt:cursor-pointer drt:mb-2 drt:text-xs drt:text-secondary-text',
  paginationEllipsisFormField: 'pagination-ellipsis-form-field drt:relative drt:gap-2 drt:flex',
  paginationEllipsisFormFieldInput: 'pagination-ellipsis-form-field-input drt:w-22 drt:h-11 drt:p-3 drt:text-center drt:transition-all drt:duration-200 drt:ease-in-out drt:pr-10 drt:m-0 drt:border drt:shadow-none drt:text-base drt:rounded-lg drt:border-transparent drt:appearance-none drt:outline-none drt:bg-surface drt:text-primary drt:focus:border-accent drt:no-spinner',
  paginationEllipsisFormButton: 'pagination-ellipsis-form-button drt:group drt:leading-none drt:h-8 drt:right-1 drt:absolute drt:cursor-pointer drt:flex drt:top-1/2 drt:text-xs drt:outline-none drt:border-none drt:bg-transparent drt:transform drt:-translate-y-1/2 drt:translate-x-0',
  paginationEllipsisFormButtonIconHover: 'pagination-ellipsis-form-button-icon-hover drt:group-hover:fill-accent',
  paginationEllipsisFormButtonIcon: 'pagination-ellipsis-form-button-icon drt:p-[10px] drt:hover:!fill-teal-400'
} satisfies Record<string, string>;

interface PaginationEllipsisFormPropsType {
  maxPageToSearchFor: number;
  isVisible?: boolean;
  pageValue: string;
  onSearch: (page: number) => void;
  onPageValueChange: (value: string) => void;
}

export function PaginationEllipsisForm({
  maxPageToSearchFor,
  isVisible = false,
  pageValue = '',
  onSearch,
  onPageValueChange,
}: PaginationEllipsisFormPropsType) {
  const handleInputRef = (el: HTMLInputElement | null) => {
    if (el && isVisible) {
      el.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }

    if (['Equal', 'Minus', 'Period', 'KeyE', 'Comma'].includes(event.code)) {
      event.preventDefault();
      return;
    }
  };

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const isBelowMax = parseFloat(input.value) <= maxPageToSearchFor;

    if (isBelowMax) {
      onPageValueChange(input.value);
    } else {
      input.value = pageValue;
    }
  };

  const handleSubmit = (event: Event) => {
    if (!pageValue) {
      return;
    }

    event.preventDefault();
    onSearch(parseInt(pageValue === '0' ? '1' : pageValue));
  };

  return (
    <div class={styles.paginationEllipsisForm} onClick={(event: MouseEvent) => event.stopPropagation()}>
      <label htmlFor="paginationSearch" class={styles.paginationEllipsisFormFieldLabel}>
        Page
      </label>

      <div class={styles.paginationEllipsisFormField}>
        <input
          type="number"
          autoFocus={true}
          autoComplete="off"
          id="paginationSearch"
          value={pageValue}
          name="paginationSearch"
          onInput={handleInput}
          max={maxPageToSearchFor}
          onKeyDown={handleKeyDown}
          ref={handleInputRef}
          class={styles.paginationEllipsisFormFieldInput}
        />

        <div class={styles.paginationEllipsisFormButton} onClick={handleSubmit}>
          <drt-magnifying-glass-icon
            class={classNames(styles.paginationEllipsisFormButtonIconHover, styles.paginationEllipsisFormButtonIcon)}
          />
        </div>
      </div>
    </div>
  );
}
