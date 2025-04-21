import { useLocation } from 'react-router-dom';
import { brainwave } from '../../assets';
import { navigation } from '../constants';
import { useEffect } from 'react';
import Button from './Button';

const Header = () => {

  const pathname = useLocation();

  useEffect(() => console.log(pathname), [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 
    backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 
    lg:backdrop-blur-sm">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img 
                    src={brainwave} 
                    width={190} 
                    height={40} 
                    alt="Brainwave"/>
            </a>
            <nav className="hidden fixed top=[5rem] left-0 right-0 bottom-0 bg-n-8 
                            lg:static lg:flex lg:mx-auto 
                            lg:bg-transparent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {
                      navigation?.map((item, index) => (
                        <a key={item.id || index} 
                           href={item.url}
                           className={`block relative font-code lg:flex text-2xl uppercase text-n-1 
                                       transition-colors hover:text-blue-600 ${item.onlyMobile ? 'lg:hidden' : ''} 
                                       px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-bold 
                                       ${item.url === pathname.hash ? 'z-2 lg:text-indigo-800' : 'lg:text-amber-50'}`}>
                          {item.title}   
                        </a>
                      ))
                    }
                </div>
            </nav>
            <a 
              href="#signup" 
              className="button hidden mr-8 text-n-1/50 
                         transition-colors hover:text-n-1 
                         lg:block uppercase">
              New Account
            </a>
  
            <Button className="hidden lg:flex uppercase"  href="#login">
                Sign In
            </Button>
        </div>
    </div>
  )
}

export default Header