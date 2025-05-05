import { background } from "../../assets";

export const Rings = () => {

    return (
        <div className="absolute top-0.5 left-0.5 
                        w-[52rem] aspect-square border-n-2/10
                        rounded-full -translate-x-0.5 -translate-y-0.5
                        ">
            <div className="absolute top-0.5 left-0.5 w-[36]
                            aspect-square border border-n-2/10 
                            rounded-full -translate-x-0.5 -translate-y-0.5">
                            </div>
            <div className="absolute top-0.5 left-0.5 w-[23]
                            aspect-square border border-n-2/10 
                            rounded-full -translate-x-0.5 -translate-y-0.5"></div>

        </div>
    );
};

export const SideLines = () => {
    return (
        <>
            <div className="absolute top-0 left-5 w-0.25 
                            h-full bg-[#252134]"></div>
            <div className="absolute top-0 right-5 w-0.25 
                            h-full bg-[#252134]"></div>
        </>
    );
};

export const BackgroundCircles = () => {
    return (
        <>
        <div className="absolute top-[4.4rem] left-16 w-3 h-3 
                        bg-gradient-to-b from-[#DD734F] to-[#1A1A32]
                        rounded-full"></div>
        <div className="absolute top-[12.6rem] right-12 w-4 h-4 
                        bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]
                        rounded-full"></div>
        <div className="absolute top-[26.8rem] left-12 w-6 h-6 
                        bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]
                        rounded-full"></div>
        </>
    );
};

export const HamburgerMenu = () => {
    return (
        <div className="absolute inset-0 pointer-events-none 
                        lg:hidden">
            <div className="absolute inset-0 opacity-[0.03]">
                <img 
                    className="w-full h-full object-cover"
                    src={background}
                    width={688}
                    height={953}
                    alt="Background"
                />
            </div> 

            <Rings/>
            <SideLines/>
            <BackgroundCircles/>                  
        </div>
    )
}