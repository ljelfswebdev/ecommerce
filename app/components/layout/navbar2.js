import Link from 'next/link'


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}



export default function Navbar2() {
        return (
            <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-10 items-center hidden md:flex">
                <div className="w-9/12 flex justify-start items-center">
    
                    <div className="hidden md:flex">
                        <NavLink to="/products">
                            PRODUCTS
                        </NavLink>
                        <NavLink to="/about">
                            ABOUT
                        </NavLink>
                        <NavLink to="/sales">
                            SALES
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }