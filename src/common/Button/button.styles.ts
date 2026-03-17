// prettier-ignore
export default {
    button: 'button drt:flex drt:items-center drt:justify-center drt:font-bold drt:leading-none drt:px-4 drt:max-h-full drt:rounded-xl drt:cursor-pointer drt:transition-all drt:duration-200 drt:ease-in-out drt:gap-2',
    buttonLarge: 'button-large drt:h-12 drt:text-base drt:px-6',
    buttonSmall: 'button-small drt:h-10 drt:text-xs drt:rounded-xl',
    buttonPrimary: 'button-primary drt:text-button-primary drt:bg-button-bg-primary drt:border drt:border-button-bg-primary drt:hover:opacity-75 drt:hover:border-opacity-75',
    buttonSecondary: 'button-secondary drt:relative drt:text-button-secondary drt:border drt:border-transparent drt:after:absolute drt:after:inset-0 drt:after:rounded-lg drt:after:opacity-40 drt:after:transition-all drt:after:duration-200 drt:after:ease-in-out drt:after:bg-button-bg-secondary drt:after:content-[""] drt:after:-z-1 drt:hover:opacity-100 drt:hover:text-button-primary drt:hover:after:opacity-100 drt:hover:after:bg-button-bg-primary',
    buttonSecondarySmall: 'button-secondary-small drt:after:rounded-xl',
    buttonNeutral: 'button-neutral drt:text-neutral-925 drt:bg-white drt:hover:opacity-75',
    buttonDisabled: 'button-disabled drt:pointer-events-none drt:!bg-transparent drt:cursor-default drt:border drt:border-secondary-text drt:!text-secondary-text drt:hover:opacity-100'
} satisfies Record<string, string>;
