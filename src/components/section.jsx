import SectionSvg from '../../assets/svg/SectionSvg'

function Section({
    className,
    id,
    crosses,
    crossesOffset,
    customPadding, 
    children
}) {
    
    return (
        <div 
            id={id}
            className={`relative 
                        ${customPadding ||
                        `py-10 lg:py-16 xl:py-20 
                        ${crosses ? "lg:py-32 xl:py-40" : ""}`} 
                        ${className || ""}`}
                >
            {children}
            <div className="hidden lg:top-22 absolute px-auto left-5 w-0.5 bg-[#26242C] 
                            pointer-events-none md:block h-full 
                            lg:left-7.5 xl:left-10" />
            <div className="hidden lg:top-22 absolute px-auto right-5 w-0.5 bg-[#26242C] 
                            pointer-events-none md:block h-full
                            lg:right-7.5 xl:right-10" />

            {
                crosses && (
                    <>
                        <div
                            className={`hidden absolute top-0 left-20 right-7.5
                                    h-0.5 bg-[#26242C] ${crossesOffset && crossesOffset}
                                    pointer-events-none lg:block xl:left-10 xl:right-10`}
                        />
                        <SectionSvg crossesOffset={crossesOffset}/>
                    </>
                )
            }
        </div>
    )
}

export default Section