import React from 'react';
import LoginForm from './components/login';
import MdashBoard from "./components/manager_dashboard";
import AdashBoard from "./components/admin_dashboard";
import SdashBoard from "./components/sales_clerk_dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <LoginForm/>
    <SdashBoard/>
    </div>
  );
}

export default App;
