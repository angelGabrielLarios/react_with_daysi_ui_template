import { useState } from "react"
import { useForm } from "react-hook-form"
import { AlertErrorForm } from "../components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../store/auth"
import { url } from "../API"




export const RegisterPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isShowPassword, setIsShowPassword] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            NIF: crypto.randomUUID().slice(1, 10),
            name: "",
            address: "",
            phone: "",
            email: "",
            password: ""
        }
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorEmailAlreadyeExists, setErrorEmailAlreadyeExists] = useState(false)
    const onSubmitForm = data => {

        setIsLoading(true)
        fetch(`${url}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nif: data.NIF,
                name: data.name,
                address: data.address,
                phone: data.phone,
                email: data.email,
                password: data.password

            })
        })
            .then(response => response.json())
            .then(user => {


                if (user?.emailAlreadyeExists) {
                    setErrorEmailAlreadyeExists(user?.emailAlreadyeExists)
                }
                else {
                    setErrorEmailAlreadyeExists("")
                    dispatch(login({
                        nif: user.NIF,
                        name: user.nombre,
                        email: user.correo
                    }))

                    navigate('/')
                }

            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }

    return (
        <main
            className="flex flex-col min-h-screen items-center justify-center"
        >
            <header
                className="text-center py-10"
            >
                <h1

                    className="text-primary font-bold text-4xl "
                >
                    Create una nueva <span className="text-secondary">cuenta</span>
                </h1>

                <h2
                    className="text-primary italic"
                >
                    Crearse Cuenta
                </h2>
            </header>

            <form
                className="w-10/12 lg:w-6/12 py-12 px-6 border border-secondary rounded-xl shadow-lg shadow-secondary space-y-6"
                onSubmit={handleSubmit(onSubmitForm)}

            >
                <section
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4"
                >
                    <div className="">
                        <article className="flex items-center gap-4">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17.6841C4 17.0485 4 16.7306 4.04798 16.4656C4.27087 15.2344 5.23442 14.2709 6.46558 14.048C6.5425 14.0341 6.6237 14.0242 6.71575 14.0172C6.94079 14 7.05331 13.9914 7.20361 14.0026C7.35983 14.0143 7.4472 14.0297 7.59797 14.0722C7.74302 14.1131 8.00429 14.2315 8.52682 14.4682C8.98953 14.6778 9.48358 14.8304 10 14.917M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


                            <input
                                id="NIF"
                                type="text"
                                {...register('NIF', {
                                    required: 'Este campo es obligatorio',
                                    minLength: {
                                        value: 9,
                                        message: 'El NIF debe contener solo 9 caracteres'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'El NIF debe contener solo 9 caracteres'
                                    }
                                })}
                                placeholder="NIF"
                                className="input input-bordered input-primary block w-full"
                                maxLength={9}
                                minLength={9}

                            />
                        </article>

                        {/* mensaje error */}
                        {
                            errors?.NIF?.type === "required"
                                ? <AlertErrorForm>
                                    {errors.NIF.message}
                                </AlertErrorForm>
                                : null

                        }
                    </div>

                    <div className="">
                        <article className="flex items-center gap-4">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path> </g></svg>


                            <input
                                id="name"
                                type="text"
                                {...register('name', {
                                    required: 'Este campo es obligatorio',
                                })}
                                placeholder="Nombre"
                                className="input input-bordered input-primary block w-full"
                                maxLength={50}
                            />
                        </article>

                        {/* mensaje error */}
                        {
                            errors?.name?.type === "required"
                                ? <AlertErrorForm>
                                    {errors.name.message}
                                </AlertErrorForm>
                                : null

                        }
                    </div>
                </section>

                <section
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4"
                >
                    <div className="">
                        <article className="flex items-center gap-4">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 9H14M18 12H14M12 15.5C11.7164 14.3589 10.481 13.5 9 13.5C7.519 13.5 6.28364 14.3589 6 15.5M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19ZM10 9.5C10 10.0523 9.55228 10.5 9 10.5C8.44772 10.5 8 10.0523 8 9.5C8 8.94772 8.44772 8.5 9 8.5C9.55228 8.5 10 8.94772 10 9.5Z" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


                            <input
                                id="address"
                                type="text"
                                {...register('address', {
                                    required: 'Este campo es obligatorio',
                                })}
                                placeholder="Dirección "
                                className="input input-bordered input-primary block w-full"
                                maxLength={200}

                            />
                        </article>

                        {/* mensaje error */}
                        {
                            errors?.address?.type === "required"
                                ? <AlertErrorForm>
                                    {errors.address.message}
                                </AlertErrorForm>
                                : null

                        }
                    </div>

                    <div className="">
                        <article className="flex items-center gap-4">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


                            <input
                                id="phone"
                                type="tel"
                                {...register('phone', {
                                    required: 'Este campo es obligatorio',
                                    minLength: {
                                        value: 10,
                                        message: 'El telefono debe contener solo 10 digitos'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'El telefono debe contener solo solo 10 digitos'
                                    }
                                })}

                                minLength={10}
                                maxLength={10}
                                placeholder="Telefono"
                                className="input input-bordered input-primary block w-full"

                            />
                        </article>

                        {/* mensaje error */}
                        {
                            errors?.phone?.type === "required"
                                ? <AlertErrorForm>
                                    {errors.phone.message}
                                </AlertErrorForm>
                                : null

                        }
                    </div>
                </section>

                <div className="">
                    <article className="flex items-center gap-4">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#570df8"></path> </g></svg>


                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Este campo es obligatorio',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Este NO es un correo electrónico válido'
                                }
                            })}
                            placeholder="Correo Electrónico"
                            className="input input-bordered input-primary block w-full"
                            maxLength={100}
                        />
                    </article>

                    {/* mensaje error */}
                    {
                        errors?.email?.type === "required"
                            ? <AlertErrorForm>
                                {errors.email.message}
                            </AlertErrorForm>
                            : null

                    }
                </div>

                <div className="">
                    <article className="flex items-center gap-4">

                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z" stroke="#4506cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="7.5" cy="17.5" r="1.5" fill="#4506cb"></circle> <circle cx="12" cy="17.5" r="1.5" fill="#4506cb"></circle> <circle cx="16.5" cy="17.5" r="1.5" fill="#4506cb"></circle> </g></svg>

                        <input
                            id="password"
                            type={isShowPassword ? `text` : `password`}
                            {...register('password', {
                                required: 'Este campo es obligatorio',
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña debe contener minimo 8 o más caracteres'
                                }
                            })}
                            placeholder="Contraseña"
                            minLength={8}
                            className="input input-bordered input-primary block w-full"
                            maxLength={200}
                        />

                    </article>

                    {
                        errors?.password?.type === "required"
                            ? <AlertErrorForm>
                                {errors.password.message}
                            </AlertErrorForm>
                            : null
                    }

                    {
                        errors?.password?.type === "minLength"
                            ? <AlertErrorForm>
                                {errors.password.message}
                            </AlertErrorForm>
                            : null
                    }
                </div>


                <label className="relative inline-flex items-center mb-4 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={event => setIsShowPassword(event.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    <span className="ml-3 text-sm font-medium ">Mostrar Contraseña</span>
                </label>



                {
                    errorEmailAlreadyeExists
                        ? <AlertErrorForm>
                            {errorEmailAlreadyeExists}
                        </AlertErrorForm>
                        : null
                }





                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-secondary flex items-center gap-3 w-full "
                >
                    Crear Cuenta
                    {
                        isLoading
                            ? <span className="loading loading-bars loading-lg"></span>
                            : null
                    }
                </button>

                <p className="text-center">¿Ya tienes una cuenta? <Link className="text-secondary font-bold" to={`/auth/login`}>Inicia Sesión</Link></p>
            </form>
        </main >
    )
}
