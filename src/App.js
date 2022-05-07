
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
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
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
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
