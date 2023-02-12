import { Link } from "react-router-dom"

import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const Login = () => {
    return <>
        <section className="h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
                <div className="hidden lg:grid content-center justify-items-center px-12 bg-primary-200">
                    <img src="/assets/star-wars.png" className="w-full" />
                </div>
                <div className="col-span-2 grid content-center justify-items-center w-full min-h-screen bg-white">
                    <div className="grid gap-24 border border-grey-10 border-opacity-30 rounded-lg py-9 px-16 sm:mx-auto sm:w-full sm:max-w-lg">
                        <div className="grid gap-14">
                            <div className="grid gap-2">
                                <h1 className="font-semibold text-2xl text-grey-500">Login</h1>
                                <p className="font-normal text-base text-grey-600">Kindly enter your details to log in</p>
                            </div>
                            <div className="grid gap-8">
                                <div className="grid content-start gap-6">
                                    <TextInput type="email" label="Email Address" name="email" />
                                    <TextInput type="password" label="Password" name="password" />
                                </div>
                                <div className="grid content-start justify-items-center gap-6">
                                    <Button label="Log in" onClick={() => console.log("You clicked on the pink circle!")} />
                                    <Link to={"/forgot-password"} className="text-primary-100 text-sm">Forgot your password?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 text-xs items-center justify-center">
                            <Link to={"/forgot-password"} className="text-grey-400 underline decoration-grey-400 underline-offset-2">Privacy Policy</Link>
                            <span className="text-grey-100">and</span>
                            <Link to={"/forgot-password"} className="text-grey-400 underline decoration-grey-400 underline-offset-2">Terms of services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}