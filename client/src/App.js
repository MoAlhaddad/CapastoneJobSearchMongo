import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Home from "./pages/Home";
import Jobinfo from "./pages/Jobinfo";
import { BrowserRouter, Route } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions.";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const {loader} = useSelector(state=>state.loaderReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div className="App">
     
      {loader && (<div className="sweet-loading text-center">
        <FadeLoader color={'#001529'}  />
      </div>)}

      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/appliedjobs" exact component={AppliedJobs} />
        <Route path="/postjob" exact component={PostJob} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/jobs/:id" exact component={Jobinfo} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
