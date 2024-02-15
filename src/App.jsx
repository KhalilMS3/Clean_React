
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import './styles/main.scss'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryIndex from './components/CategoriesIndex'

function App() {
  return (
    <>
    <Layout>
       
        <Routes> {/* Everyhting that comes under Routes are several routes */}
          <Route index element={<Home/>}/> {/* index: referes that this is a index/main page, like index.html | element: decieds which component will be renderd*/}
          <Route path="categories/*" element={<Categories />}> {/* Here we have path instead of index, cuz here we chose where the page is, also gives it a path to be redirected to when using <Link> */}
            <Route index element={<CategoryIndex/>}/>
            <Route path=':slug' element={<Category />} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
