import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/_assets/stylesheets/style.css';
import '../src/_assets/stylesheets/bootstrap.min.css';
import '../src/_assets/stylesheets/responsive.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import SingleProduct from './components/Shop/SingleProduct';
import Dashboard from './components/Admin/Dashboard';
import AddProducts from './components/Admin/AddProducts';
import AllProducts from './components/Admin/AllProducts';
import 'font-awesome/css/font-awesome.min.css'
import AllCategory from './components/Admin/AllCategory';
import AddCategory from './components/Admin/AddCategory';
import AllTags from './components/Admin/AllTags';
import AddTags from './components/Admin/AddTags';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  // Generate Slug
  const generateSlug = (name) => {

      let datasplit = name.split(' ')

      return datasplit.join('-').toLowerCase()

  }
 
  // all Products
  const [product, setProduct] = useState([])
  const [cat, setCat] = useState([])
  const [tag, setTag] = useState([])
  
  useEffect( () => {
    axios.get(`http://localhost:5050/product`).then(res => {
      setProduct(res.data)
    })
  },[])
  useEffect( () => {
    axios.get(`http://localhost:5050/category`).then(res => {
      setCat(res.data)
    })
  },[cat])
  useEffect( () => {
    axios.get(`http://localhost:5050/tag`).then(res => {
      setTag(res.data)
    })
  }, [tag])

   // Show Categgory Name

   const catNmae = (id) => {
    let c_name = "";
    cat.map( data => {
      if( data.id == id ){
          c_name =  data.name
      }
  })     
      if( c_name == ''){
        return `Uncategorized`
      }else{
        return c_name;  
      }
}
   


  return (
    <div className="App">
      <BrowserRouter>
          <Header />
            <Routes>
              <Route exect path='/' element={<Home product={product}/>}/>
              <Route path='/shop' element={<Shop tittle={'Shop'} product={product} setProduct={setProduct}   cat={cat} tag={tag}/>}/>
              <Route path='/:name' element={<SingleProduct  catNmae={catNmae}/>}/>
              <Route path='/dash' element={<Dashboard/>}>
                  <Route path='/dash/allproduct' element={<AllProducts product={product} catNmae={catNmae}/>}/>
                  <Route path='/dash/addproduct' element={<AddProducts cat={cat} tag={tag} generateSlug={generateSlug}/>}/>
                  <Route path='/dash/allcategory' element={<AllCategory cat={cat} setCat={setCat}/>}/>
                  <Route path='/dash/addcategory' element={<AddCategory generateSlug={generateSlug}/>}/>
                  <Route path='/dash/alltag' element={<AllTags tag={tag} setTag={setTag} />}/>
                  <Route path='/dash/addtag' element={<AddTags />}/>
              </Route>
            </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
