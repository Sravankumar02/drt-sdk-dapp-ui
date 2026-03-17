// prettier-ignore
export default {
    trim: 'trim drt:flex drt:relative drt:max-w-full drt:overflow-hidden drt:whitespace-nowrap',
    trimFull: 'trim-full drt:text-transparent drt:absolute drt:leading-5',
    trimFullVisible: 'trim-full-visible drt:!text-inherit drt:relative drt:leading-5',
    trimWrapper: 'trim-wrapper drt:hidden',
    trimWrapperVisible: 'trim-wrapper-visible drt:overflow-hidden drt:max-w-full drt:!flex',
    trimEllipsisWrapper: 'trim-ellipsis-wrapper drt:block drt:flex-shrink-0 drt:pointer-events-none drt:select-none',
    trimEllipsis: 'trim-ellipsis drt:block drt:leading-5',
    trimLeftWrapper: 'trim-left-wrapper drt:flex-shrink drt:text-ellipsis drt:overflow-hidden drt:text-left drt:text-[1px]',
    trimLeft: 'trim-left drt:select-none drt:pointer-events-none drt:inline drt:text-base drt:leading-5 drt:-webkit-letter-spacing',
    trimRightWrapper: 'trim-right-wrapper drt:flex-shrink drt:text-ellipsis drt:overflow-hidden drt:whitespace-nowrap drt:text-right drt:text-[1px]',
    trimRight: 'trim-right drt:select-none drt:pointer-events-none drt:inline drt:text-base drt:leading-5 drt:text-clip drt:-webkit-letter-spacing',
    trimStoriesWrapper: 'trim-stories-wrapper drt:text-primary'
} satisfies Record<string, string>;
