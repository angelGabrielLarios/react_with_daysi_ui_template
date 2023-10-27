import { useState } from "react"
import { useForm } from "react-hook-form"
import { AlertErrorForm } from "../components"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../store/auth"
import { url } from "../API"

export const LoginPage = () => {

    const dispatch = useDispatch()


    const navigate = useNavigate()

    const [errorLogin, setErrorLogin] = useState()

    const [isLoading, setIsLoading] = useState(false)


    const [isShowPassword, setIsShowPassword] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmitForm = data => {
        setIsLoading(true)
        fetch(`${url}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: data.email,
                password: data.password

            })
        })
            .then(response => response.json())
            .then(user => {
                if (user?.message) {
                    setErrorLogin(user.message)
                }
                else {
                    dispatch(login({
                        nif: user.NIF,
                        name: user.nombre,
                        email: user.correo
                    }))
                    setErrorLogin("")
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
                className="text-center pb-6"
            >
                <h1

                    className="text-primary font-bold text-4xl mb-4"
                >
                    Hola <span className="text-secondary">¡Bienvenido!</span>
                </h1>

                <h2
                    className="text-primary italic"
                >
                    Inicia Sesión
                </h2>
            </header>

            <form
                className="w-10/12 lg:w-6/12 py-12 px-6 border border-secondary rounded-xl shadow-lg shadow-secondary space-y-6"
                onSubmit={handleSubmit(onSubmitForm)}

            >

                <div className="">
                    <article className="flex items-center gap-4">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#570df8"></path> </g></svg>


                        <input
                            id="emal"
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
                        />
                    </article>

                    {/* mensaje error */}
                    {
                        errors?.password?.type === "required"
                            ? <AlertErrorForm>
                                {errors.password.message}
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
                            })}
                            placeholder="Contraseña"

                            className="input input-bordered input-primary block w-full"
                        />

                    </article>

                    {
                        errors?.password?.type === "required"
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
                    errorLogin
                        ? <AlertErrorForm>
                            {errorLogin}
                        </AlertErrorForm>
                        : null
                }

                <button
                    type="submit"
                    className="btn btn-secondary flex items-center gap-2 w-full">
                    Iniciar Sesión
                    {
                        isLoading
                            ? <span className="loading loading-bars loading-lg"></span>
                            : null
                    }
                </button>



                <p className="text-center">¿No tienes una cuenta? <Link className="text-secondary font-bold" to={'/auth/register'}>Create una cuenta</Link></p>
            </form>
        </main >
    )
}
