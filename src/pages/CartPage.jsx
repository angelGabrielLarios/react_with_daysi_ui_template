import { Link } from "react-router-dom"


export const CartPage = () => {
    return (
        <>
            <div className="min-h-screen">
                <Link
                    to={`/`}
                    className="ml-6 mt-6 text-primary hover:text-primary-focus flex items-center gap-1"
                >
                    Regresar <svg fill="#570df8" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#570df8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
                </Link>
                <h1 className="py-10 text-center text-2xl font-bold">Carrito de compras</h1>

                <div className="mx-auto max-w-5xl justify-center px-6 lg:flex lg:space-x-6 xl:px-0">

                    <div className="rounded-lg lg:w-2/3">

                        <div className="justify-between mb-6 rounded-lg  p-4 shadow-md sm:flex sm:justify-start text-base-content">

                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40 mr-3 mb-4 lg:mb-0" />

                            <div className="flex w-full justify-between">

                                <div className=" space-y-1">
                                    <h2 className="text-lg font-bold text-white">Nike Air Max 2019</h2>

                                    <p className="text-xs ">36EU - 4US</p>

                                    <p className="text-xs">
                                        <span className='font-bold text-primary'>Sección: </span><span className="bg-primary text-base-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">Celulares</span>
                                    </p>
                                    <p className="text-xs">
                                        <span className='font-bold text-primary,'>Descripcion: </span> Lorem ipsum dolor sit...
                                    </p>

                                    <p className="text-base font-bold text-gray-900 dark:text-white">$599</p>

                                </div>

                                <div className=" space-y-4">

                                    <div className="flex items-stretchr border-gray-100">
                                        <span className="px-4 py-1 text-sm font-medium text-white bg-secondary border border-secondary rounded-l-lg hover:bg-secondary-focus focus:z-10 focus:ring-2 focus:ring-secondary-focus"> - </span>
                                        <input className="w-12  text-center bg-inherit text-xs outline-none disabled:bg-gray-400 block" type="number" value="2" min="1" />
                                        <span className="px-4 py-1 text-sm font-medium text-white bg-secondary border border-secondary rounded-r-lg hover:bg-secondary-focus focus:z-10 focus:ring-2 focus:ring-secondary-focus"> + </span>


                                    </div>


                                    <article>
                                        <h3
                                            className="text-secondary text-sm"
                                        >
                                            Precio Total por el producto
                                        </h3>
                                        <div className="flex items-center space-x-4">

                                            <p className="text-sm">259.000 ₭</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 

                    Subtotal
                     */}
                    <div className="mt-6 h-full rounded-lg  bg-base-300 text-base-content p-4 shadow-md md:mt-0 lg:w-1/3">
                        {/* <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">$129.99</p>
                        </div>
                        <div className="flex justify-between">

                        </div> */}
                        <h3
                            className="text-secondary font-bold text-xl"
                        >
                            Resumen de compra
                        </h3>
                        <hr className="my-4" />
                        <div className="flex justify-between text-white">
                            <p className="text-lg font-bold">Producto(s):</p>
                            <div className="">
                                <p className="mb-1 text-lg ">1</p>

                            </div>
                        </div>

                        <div className="flex justify-between text-white">
                            <p className="text-lg font-bold">Total:</p>
                            <div className="">
                                <p className="mb-1 text-lg ">$134.98 USD</p>

                            </div>
                        </div>
                        <button className="btn btn-secondary block w-full">comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
