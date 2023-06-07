import Nav from "../components/nav";
import Top from "../components/top";
import Footer from "../components/footer";

import { Outlet } from "react-router-dom";


export default function Layout()
{

    return (

        <>

            <Top></Top>

            <Nav></Nav>

            <Outlet/>

            <Footer></Footer>


        </>

    )

}