import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { brainwave } from '../../assets';
import { navigation } from '../constants';
import { useEffect } from 'react';
import Button from './Button';
import MenuSvg from '../../assets/svg/MenuSvg';
import { HamburgerMenu } from '../design/Header';

const Header = () => {

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(true)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll()
    } else {
      setOpenNavigation(true);
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll()

    setOpenNavigation(false);
  }

  useEffect(() => {
    console.log(pathname)
  } , [pathname]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50
    border-[#756d8f] lg:bg-[#0E0C15] 
    lg:backdrop-blur-sm ${openNavigation ? 'bg-[#0E0C15]' : 'bg-[#0E0C15] opacity-90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img 
                    src={brainwave} 
                    width={190} 
                    height={40} 
                    alt="Brainwave"/>
            </a>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15]                           
            lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {
                      navigation?.map((item, index) => (
                        <a key={item.id || index} 
                           href={item.url}
                           onClick={handleClick}
                           className={`block relative font-code lg:flex text-2xl uppercase text-n-1 
                                       transition-colors hover:text-blue-400 ${item.onlyMobile ? 'lg:hidden' : ''} 
                                       px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold hover:text-indigo-900 
                                       transition-all duration-300 ease-in-out hover:scale-120
                                       ${item.url === pathname.hash ? 'z-2 lg:text-indigo-600 lg:text-2xl' : 'lg:text-amber-50'} 
                                       lg:leading-5 lg:hover:text-n-[#FFFFFF]`}>
                          {item.title}   
                        </a>
                      ))
                    }
                </div>
                <HamburgerMenu/>
            </nav>
            <a 
              href="#signup" 
              className="button hidden mr-8 text-n-1/50 
                         transition-colors hover:text-n-1 
                         lg:block uppercase hover:text-blue-600">
              New Account
            </a>
            <Button className="hidden lg:flex uppercase"  href="#login">
                Sign In
            </Button>
            <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
            </Button>
        </div>
        <Outlet/>
    </div>
  )
}

export default Header