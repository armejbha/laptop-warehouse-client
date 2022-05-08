
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Loading from './Shared/Loading/Loading';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return (
    <div>
      {
        loading ? <div><Loading></Loading></div>
          :
          <div>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
              <Route path='/inventory/:id' element={
                <RequireAuth>
                  <ItemDetails></ItemDetails>
                </RequireAuth>
              }></Route>
              <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
              <Route path='/additem' element={<AddItem></AddItem>}></Route>
              <Route path='/myitem' element={<MyItems></MyItems>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
          </div>
      }
    </div>
  );
}

export default App;
