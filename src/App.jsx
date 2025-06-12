import { useRoutes } from 'react-router-dom';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Header from './components/Header';
import NotfoundPage from './pages/Not-Found';
import Hero from './components/hero';
import Benefit from './components/benefit';
import Colllaboration from './components/Colllaboration';

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
