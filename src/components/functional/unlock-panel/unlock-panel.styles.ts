// prettier-ignore
export default {
    unlockPanelAnchor: 'unlock-panel-anchor drt:flex drt:flex-col drt:flex-1 drt:overflow-hidden',
    unlockPanel: 'unlock-panel drt:flex drt:flex-col drt:h-full drt:justify-between drt:overflow-auto drt:pb-6 drt:scrollbar-hide',
    unlockPanelGroups: 'unlock-panel-groups drt:flex drt:flex-col drt:gap-4 drt:pt-6',
    unlockButton: 'unlock-button drt:flex drt:pl-3 drt:pr-4 drt:h-15 drt:bg-secondary drt:hover:bg-hover',
    unlockButtonIcon: 'unlock-button-icon drt:-order-1 drt:h-10 drt:w-10',
    unlockButtonStatus: 'unlock-button-status drt:rounded-3xl drt:py-1 drt:px-2 drt:bg-surface',
    detectedPanelGroup: 'drt:hidden drt:sm:flex drt:sm:flex-col',
    desktopPanelGroupTitle: 'drt:hidden drt:sm:flex',
    mobilePanelGroupTitle: 'drt:sm:hidden',
} satisfies Record<string, string>;
