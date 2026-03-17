// prettier-ignore
export default {
    transactionsTableContainer: 'transactions-table-container drt:w-full drt:overflow-auto drt:table-auto drt:scrollbar-horizontal',
    transactionsTableHeader: 'transactions-table-header drt:bg-secondary',
    transactionsTableHeaderCell: 'transactions-table-header-cell drt:p-4 drt:text-left drt:text-sm drt:tracking-wide drt:font-normal drt:text-secondary-text drt:leading-4 drt:w-1/6',
    transactionsTableBody: 'transactions-table-body drt:bg-surface drt:border-y drt:border-outline-variant',
    transactionsTableBodyRow: 'transactions-table-body-row drt:text-label drt:border-b drt:border-outline-variant',
    transactionsTableBodyCell: 'transactions-table-body-cell drt:p-4 drt:w-max',
    transactionsTableBodyCellChild: 'transactions-table-body-cell-child drt:flex drt:w-max'
} satisfies Record<string, string>;
