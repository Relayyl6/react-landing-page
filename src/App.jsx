import { useRoutes } from 'react-router-dom';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Header from './sections/Header';
import NotfoundPage from './pages/Not-Found';
import Hero from './sections/hero';
import Benefit from './sections/benefit';
import Colllaboration from './sections/Colllaboration';
import Services from './sections/Services';
import Pricing from './sections/Pricing';

function App() {

  const ParentNav = () => {
    const element = useRoutes([
      {
        path : '/',
        element : (
            <>
              <Header/>
              <Hero/>
              <Benefit/>
              <Colllaboration/>
              <Services/>
              <Pricing/>
            </>
        ),
      },
      {
        path : '*',
        element : <NotfoundPage/>
      }
    ])
    return element
  }


  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden custom-scrollbar">
        <ParentNav/>
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App
