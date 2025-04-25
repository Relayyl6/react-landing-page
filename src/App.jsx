import { useRoutes } from 'react-router-dom';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Button from './components/button';
import Header from './components/Header';
import NotfoundPage from './pages/Not-Found';

function App() {

  const ParentNav = () => {
    const element = useRoutes([
      {
        path : '/', element : <Header/>
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
