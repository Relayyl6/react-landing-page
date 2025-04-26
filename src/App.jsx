import { useRoutes } from 'react-router-dom';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Header from './components/Header';
import NotfoundPage from './pages/Not-Found';
import Hero from './components/hero';

function App() {

  const ParentNav = () => {
    const element = useRoutes([
      {
        path : '/', element : <Header/>
      },
      {
        path : '/', element : <Hero/>
      },
      {
        path : '*', element : <NotfoundPage/>
      }
    ])
    return element
  }


  return (


    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <ParentNav/>
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App
