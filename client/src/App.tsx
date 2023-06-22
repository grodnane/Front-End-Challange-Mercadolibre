import { Suspense, lazy } from 'react'
import { Navbar } from './components/Navbar'
import Homepage from "./pages/Homepage";
import { useRoutes } from 'react-router-dom';
import Error404 from './pages/404';
const Items = lazy(() => import("./pages/Items"));
const Details = lazy(() => import("./pages/Details"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));


const routes = [
  {path:'/',element: <Homepage />},
  {path:'/items',element: <Items/>},
  {path:'/items/:id',element:<Details/>},
  {path:'*', element: <Error404/>}
  
]
function App() {

  
    const routeResult = useRoutes(routes);


    return (
    <>
      <Navbar/>
      <Suspense fallback={<Homepage />}>
        <div className="body flex flex-col  items-center h-screen w-full">
        {routeResult || <NotFoundPage />}
        </div>
      </Suspense>
      
      
    </>
  )
}

export default App
