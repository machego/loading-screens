import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {                 // How to fetch?
    const getUser = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("/api/user/1")
        setUser(res.data)
      } catch (error) { }
      setIsLoading(false)
    };
    getUser();
  }, []);                         //dependency empty array


  return (
    <div className="container">
      <Sidebar isLoading={isLoading}/>
      <div className="home">
        <Topbar isLoading={isLoading} user={user} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
