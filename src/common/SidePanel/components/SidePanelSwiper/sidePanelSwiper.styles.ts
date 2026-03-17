// prettier-ignore
export default {
    sidePanelSwiperContainer: 'side-panel-swiper-container drt:flex drt:xs:flex-col drt:xs:h-full',
    sidePanelSwiperWrapper: 'side-panel-swiper-wrapper drt:fixed drt:left-0 drt:top-0 drt:bottom-0 drt:right-0 drt:z-50 drt:xs:static drt:xs:h-full drt:before:opacity-90 drt:before:left-0 drt:before:top-0 drt:before:right-0 drt:before:bottom-0 drt:before:transition-all drt:before:duration-200 drt:before:pointer-events-none drt:before:absolute drt:before:ease-in-out drt:before:bg-neutral-900 drt:before:content-[""] drt:before:supports-[backdrop-filter]:opacity-50 drt:before:supports-[backdrop-filter]:backdrop-blur-sm drt:before:supports-[backdrop-filter]:bg-neutral-900 drt:xs:before:content-none',
    sidePanelSwiperWrapperVisible: 'side-panel-swiper-visible drt:!flex',
    sidePanelSwiperWrapperHidden: 'side-panel-swiper-wrapper-hidden drt:hidden drt:xs:block',
    sidePanelSwiperHidden: 'side-panel-swiper-hidden drt:translate-y-full',
    sidePanelSwiper: 'side-panel-swiper drt:bottom-0 drt:absolute drt:left-0 drt:right-0 drt:flex drt:flex-col drt:justify-end drt:touch-pan-y drt:h-auto drt:min-h-dvh drt:rounded-t-3xl drt:transition-none drt:backface-hidden drt:will-change-transform drt:xs:h-full drt:xs:static drt:xs:rounded-none drt:xs:transform-none drt:xs:[justify-content:unset] drt:xs:min-h-auto',
    sidePanelSwiperHandleWrapper: 'side-panel-swiper-handle-wrapper drt:top-8 drt:relative drt:h-8 drt:w-full drt:z-12 drt:xs:hidden',
    sidePanelSwiperHandleContainer: 'side-panel-swiper-handle-container drt:flex drt:top-0 drt:bottom-0 drt:absolute drt:right-0 drt:left-0 drt:justify-center drt:touch-none drt:select-none drt:cursor-grab drt:active:cursor-grabbing',
    sidePanelSwiperHandle: 'side-panel-swiper-handle drt:w-32 drt:mt-3 drt:h-1 drt:rounded drt:bg-primary',
    sidePanelSwiperContent: 'side-panel-swiper-content drt:overflow-y-auto drt:max-h-[calc(100dvh-4rem)] drt:xs:max-h-none drt:xs:h-full'
} satisfies Record<string, string>;
