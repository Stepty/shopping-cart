import { 
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
