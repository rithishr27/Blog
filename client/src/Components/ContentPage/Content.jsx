import { useState } from "react";
import PostCard from "./PostCard";
import './Content.css';
import NavBar from "./NavBar";
import Menu from "./Menu";
import PostContainer from "./PostContainer";

const Content = () => {

    const [menu,setMenu] = useState(true);

    const menustate = () =>{
        setMenu(!menu);
    }

    return ( 
        <>  
            <NavBar menustate={menustate}/>
            {menu?<Menu/>:null}
            <PostContainer/>
            
        </>
    )
}

export default Content;