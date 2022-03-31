import {useState} from 'react'
import Link from 'next/link'
import SearchBar from '../SearchBar';


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-green transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-left p-2 filter drop-shadow-md bg-green2 h-20"> {/*logo container*/}
                <Link href="/">
                <a><img src="./favicon.ico" alt="LJ"/></a>
                </Link>     
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/products" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Products
                </a>
                <a className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <a className="text-xl font-normal my-4" href="/sales" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Sales
                </a>
                <a className="text-xl font-normal my-4" href="/cart" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Cart
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
        return (
            <nav className="flex filter drop-shadow-md bg-green px-4 py-4 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-3/12 flex items-center">
                <Link href="/">
                <a><img src="./favicon.ico" alt="LJ"/></a>
                </Link> 
                </div>
                <div className="w-9/12 flex justify-end items-center">
            <SearchBar />
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex">
                    

                        {/* <NavLink to="/products">
                            PRODUCTS
                        </NavLink>
                        <NavLink to="/about">
                            ABOUT
                        </NavLink> */}
                        <NavLink to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        </NavLink>
                        {/* <NavLink to="/sales">
                            SALES
                        </NavLink> */}
                        <NavLink to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }