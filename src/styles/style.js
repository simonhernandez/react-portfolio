export const spacing = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    headerHeight: "h-16 sm:h-20",
}

export const typography = {
    heading1 : "font-ubuntu_mono text-dark font-bold text-4xl md:text-7xl",
    heading2 : "font-ubuntu_mono text-dark font-bold text-2xl md:text-5xl",
    heading3 : "font-ubuntu_mono text-dark font-bold text-xl md:text-4xl",
    heading4 : "font-ubuntu_mono text-dark font-bold text-xl md:text-2xl",
    paragraph: "font-ubuntu_mono text-dark font-normal text-sm md:text-base",
    text_sm  : "font-ubuntu_mono text-dark text-xs md:text-sm",
}

export const flex = {
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start"
}

export const layout = {
    section: `flex flex-col md:flex-row ${spacing.paddingX} ${spacing.paddingY}`,
    sectionReverse: `flex flex-col-reverse md:flex-row ${spacing.paddingX} ${spacing.paddingY}`,

    sectionImgReverse: `flex-1 flex ${flex.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${flex.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    wrapper: 'w-full h-[inherit] max-w-[1200px] my-0 mx-auto bg-transparent px-[2rem] sm:px-[2.4375rem] md:px-[2rem]',

    header: `${spacing.headerHeight} fixed top-0 left-0 right-0 z-50 shadow-header bg-primary_very_light w-full`,

    navbar: `flex justify-between items-center h-full`
}