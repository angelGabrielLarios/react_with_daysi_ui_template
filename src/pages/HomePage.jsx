import { Link } from "react-router-dom"
import { ProductCart } from "../components"
import { useEffect, useState } from "react"
import { url } from "../API"
import { updateProducts } from "../store/products"
import { useDispatch, useSelector } from "react-redux"


export const HomePage = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const [seccions, setSeccions] = useState([])
    useEffect(() => {
        fetch(`${url}/seccions`)
            .then(response => response.json())
            .then(seccions => {
                setSeccions([
                    ...seccions
                ])
            })
    }, [])
    useEffect(() => {
        fetch(`${url}/products`)
            .then(response => response.json())
            .then(data => {

                dispatch(updateProducts({ update_products: data }))
            })
    }, [dispatch])

    return (
        <>
            <nav className="navbar bg-primary text-white px-6">
                <div className="navbar-start">
                    {/*  <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li>
                                <p>Secciones</p>
                                <ul className="p-2">
                                    <li><a>Computadoras</a></li>
                                    <li><a>Laptos</a></li>
                                    <li><a>Celulares</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div> */}

                    <a className="btn btn-ghost normal-case text-xl">Ecommerce</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <select className="select select-primary w-full max-w-xs">
                        <option >Secciones</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>
                </div>
                <div className="navbar-end">

                    <div className="flex gap-2 lg:gap-6 items-center">
                        <Link to={`/cart`}>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#ebecf0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">


                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ebecf0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path> </g></svg>


                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



            <div className="p-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start">
                {
                    products?.map(product => {
                        return (
                            <ProductCart
                                key={product.codigo_producto}
                                code_product={product.codigo_producto}
                                name={product.nombre}
                                url_image={product.url_image}
                                section={product.nombre_seccion}
                                description={product.descripcion}
                                price={parseFloat(product.precio)}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
