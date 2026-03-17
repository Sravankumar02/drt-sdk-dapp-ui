// prettier-ignore
export default {
    signTransactionContent: 'sign-transaction-content drt:flex drt:flex-col drt:items-center drt:gap-2 drt:relative drt:min-w-0 drt:self-stretch drt:flex-nowrap drt:shrink-0',
    signTransactionsTabs: 'sign-transactions-tabs drt:px-4 drt:gap-2 drt:flex drt:mr-auto',
    signTransactionsTab: 'sign-transactions-tab drt:px-4 drt:h-8 drt:flex drt:items-center drt:leading-none drt:justify-center drt:transition-all drt:duration-200 drt:ease-in-out drt:cursor-pointer drt:relative drt:rounded-3xl drt:text-secondary-text drt:hover:text-accent drt:hover:bg-secondary drt:active:text-accent drt:active:bg-secondary',
    signTransactionsTabActive: 'sign-transactions-tab-active drt:!text-accent drt:!bg-secondary',
    signTransactionsTabText: 'sign-transactions-tab-text drt:text-base drt:z-1 drt:relative drt:capitalize',
    signTransactionsPanel: 'sign-transactions-panel drt:flex drt:flex-col drt:flex-1 drt:pb-6',
    button: 'button drt:flex drt:items-center drt:justify-center drt:font-bold drt:leading-none drt:px-4 drt:max-h-full drt:rounded-xl drt:cursor-pointer drt:transition-all drt:duration-200 drt:ease-in-out drt:gap-2',
    buttonLarge: 'button-large drt:h-12 drt:text-base drt:px-6',
    buttonSmall: 'button-small drt:h-10 drt:text-xs drt:rounded-xl',
    buttonPrimary: 'button-primary drt:text-button-primary drt:bg-button-bg-primary drt:border drt:border-button-bg-primary',
    buttonSecondary: 'button-secondary drt:relative drt:text-button-secondary drt:border drt:border-transparent drt:after:absolute drt:after:inset-0 drt:after:rounded-lg drt:after:opacity-40 drt:after:transition-all drt:after:duration-200 drt:after:ease-in-out drt:after:bg-button-bg-secondary drt:after:content-[""] drt:after:-z-1 drt:hover:opacity-100 drt:hover:text-button-primary drt:hover:after:opacity-100 drt:hover:after:bg-button-bg-primary',
    buttonSecondarySmall: 'button-secondary-small drt:after:rounded-xl',
    buttonNeutral: 'button-neutral drt:text-neutral-925 drt:bg-white drt:hover:opacity-75',
    buttonDisabled: 'button-disabled drt:pointer-events-none drt:bg-transparent drt:cursor-default drt:border drt:border-secondary-text drt:!text-secondary-text drt:hover:opacity-100',
    tooltipContent: 'tooltip-content drt:flex-row drt:cursor-default drt:p-2 drt:whitespace-nowrap drt:text-xs drt:rounded-xl drt:leading-none drt:!bg-surface drt:border-outline-variant drt:border drt:text-primary drt:after:left-1/2 drt:after:origin-center drt:after:w-2 drt:after:h-2 drt:after:absolute drt:after:border drt:after:border-outline-variant drt:after:!bg-surface drt:after:translate-x-[calc(50%-8px)] drt:after:-rotate-[45deg] drt:after:content-[""]',
} satisfies Record<string, string>;
