import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Login from "./pages/Login/Login"
// import SpinnerComponent from "./components/Spinner/index"
// import { ClientHome } from "./pages/ClientHome/ClientHome"
// import { Profile } from "./pages/Profile/Profile"
// import Error from "./pages/Error/Error"
// import Category from "./pages/Category/Category"
import Navbar from './components/Navbar/Navbar';
import AdminTemplate from './pages/Admins/AdminTemplate';
import { CategoryPage } from './pages/Admins/AdminCategory/AdminCategory';
import { ROUTES_CLIENT } from './routers/routes';
import { AdminDashboard } from './pages/Admins/AdminDashboard/AdminDashboard';
import { AdminUsersPage } from './pages/Admins/AdminUsersPage/AdminUsersPage';
import AdminChallenge from './pages/Admins/AdminChallenge/AdminChallenge';

function App() {
  // console.log(import.meta.env.VITE_ENV);
  return (
    <HashRouter>
      {/* <SpinnerComponent /> */}
      <Navbar />
      <React.Fragment>
        <Switch>
          <AdminTemplate path="/admin" Component={AdminDashboard}></AdminTemplate>
          <AdminTemplate path="/admin-challenge" Component={AdminChallenge}></AdminTemplate>
          <AdminTemplate path="/admin-category/:idType" Component={CategoryPage}></AdminTemplate>
          <AdminTemplate path="/admin-users" Component={AdminUsersPage}></AdminTemplate>
          {ROUTES_CLIENT.map((item, index) => {
            return <Route key={index} exact={item.exact} path={item.path} component={item.component} />;
          })}
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
