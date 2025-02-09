import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './vues/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import RecetteDuJour from './vues/RecetteDuJour'

const Layout = () => {
  console.log('  /\\_/\\  (\n ( ^.^ ) _)I ❤️ CATS\n   \\"/  ( \n ( | | )\n(__d b__)')
  return (
    <>
      <header>
       <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
          <Layout />
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/markdown',
        element: <>Markdown</>,
      },
      {
        path: '/recette',
        element: <RecetteDuJour/>,
      },
      {
        path: "/mocktail",
        element: <>Mocktail</>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
