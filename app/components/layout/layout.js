import Footer from "./footer";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar/>
            <Navbar2/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;