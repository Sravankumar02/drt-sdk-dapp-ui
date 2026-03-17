// prettier-ignore
export default {
  ledgerConfirmHost: 'ledger-confirm-host drt:flex drt:flex-col drt:flex-1 drt:overflow-hidden',
  ledgerConfirm: 'ledger-confirm drt:flex drt:flex-col drt:flex-1 drt:gap-3 drt:overflow-auto drt:py-6 drt:text-primary drt:scrollbar-hide',
  ledgerConfirmItems: 'ledger-confirm-items drt:flex drt:flex-col drt:gap-5',
  ledgerConfirmItem: 'ledger-confirm-item drt:flex drt:flex-col drt:gap-4',
  ledgerConfirmItemLabel: 'ledger-confirm-item-label drt:text-base drt:leading-none',
  ledgerConfirmItemValue: 'ledger-confirm-item-value drt:min-h-16 drt:p-3 drt:rounded-xl drt:flex drt:gap-3 drt:items-center drt:justify-between drt:bg-secondary',
  ledgerConfirmItemValueText: 'ledger-confirm-item-value-text drt:relative drt:break-all',
  ledgerConfirmItemValueTextHighlighted: 'ledger-confirm-item-value-text-highlighted drt:text-accent',
  ledgerConfirmItemValueActions: 'ledger-confirm-item-value-actions drt:relative drt:flex drt:items-center drt:gap-3 drt:z-1 drt:flex-1 drt:justify-end',
  ledgerConfirmAction: 'ledger-confirm-action',
  ledgerConfirmActionEmphasized: 'ledger-confirm-action-emphasized drt:font-bold drt:text-accent',
  ledgerConfirmFooter: 'ledger-confirm-footer drt:mt-auto drt:p-3 drt:rounded-xl drt:flex drt:items-center drt:gap-2 drt:relative drt:xs:min-h-16 drt:before:absolute drt:before:inset-0 drt:before:-z-1 drt:before:opacity-30 drt:before:rounded-xl drt:before:bg-ledger-warning',
  ledgerConfirmFooterIcon: 'ledger-confirm-footer-icon drt:flex-1 drt:min-w-6 drt:p-0.5 drt:text-ledger-warning-message',
  ledgerConfirmFooterDescription: 'ledger-confirm-footer-description drt:text-xs drt:text-secondary-text',
  ledgerConfirmFooterDescriptionSupport: 'ledger-confirm-footer-description-support drt:underline drt:cursor-pointer drt:text-ledger-warning-message',

} satisfies Record<string, string>;
