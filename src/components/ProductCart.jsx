import PropTypes from 'prop-types'
import { formaterCurrency } from '../helpers'


export const ProductCart = ({
    code_product,
    name,
    price,
    description,
    url_image,
    section,
}) => {
    return (

        <div className="w-full bg-base-300  rounded-lg shadow ">

            <img
                className="rounded-t-lg block w-full object-fill"
                src={url_image}
                alt={`image ${name}`}
            />

            <div className="px-5 py-5 space-y-3">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>




                <button className="btn btn-primary" onClick={() => {
                    document.getElementById(`modal_${code_product}`).showModal()
                }}>Ver más ...</button>
                <dialog className="modal" data-code_product={code_product} id={`modal_${code_product}`}>
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="w-full bg-base-300  rounded-lg shadow ">

                            <img
                                className="rounded-t-lg block w-28 mx-auto object-fill"
                                src={url_image}
                                alt={`image ${name}`}
                            />

                            <div className="px-5 py-5 space-y-3">

                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                                <div className="flex items-center ">

                                    {
                                        [1, 2, 3, 4, 5].map(item => {
                                            return (
                                                <svg key={item} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>)
                                        })
                                    }


                                </div>

                                <p>
                                    <span className='font-bold text-primary'>Sección: </span><span className="bg-primary text-base-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{section}</span>
                                </p>
                                <p>
                                    <span className='font-bold text-primary'>Descripcion: </span> {description}
                                </p>

                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{formaterCurrency(price)}</p>


                                <button className="btn btn-primary">Agregar al carrito</button>

                            </div>
                        </div>
                    </div>
                </dialog>
            </div >
        </div >

    )
}

ProductCart.propTypes = {
    code_product: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    url_image: PropTypes.string,
    section: PropTypes.string
}

