import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Link } from "react-router-dom"
import React, { useCallback } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const Login = () => {

    const handleOnSubmit = (values: { email: string, password: string }) => {
        alert(`Logged in as ${values.email}!`);
    };

    const formik = useFormik({
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email must be a valid email address')
                .required('Email is required'),
            password: Yup.string()
                .matches(/\d+/, "Password must have at least one number")
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required')
        }),
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit
    })

    const setInputValue = useCallback((key: any, value: HTMLInputElement) =>
        formik.setValues({
            ...formik.values,
            [key]: value.value,
        }),
        [formik]
    );
    
    return <>
        <section className="h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
                <div className="hidden lg:grid content-center justify-items-center px-12 bg-primary-200">
                    <img src="/assets/star-wars.png" className="w-full" />
                </div>
                <div className="col-span-2 grid content-center justify-items-center w-full min-h-screen bg-white">
                    <div className="grid gap-24 border border-grey-10 border-opacity-30 rounded-lg py-9 px-16 sm:mx-auto sm:w-full sm:max-w-lg">
                        <form className="grid gap-14" onSubmit={formik.handleSubmit}>
                            <div className="grid gap-2">
                                <h1 className="font-semibold text-2xl text-grey-500">Login</h1>
                                <p className="font-normal text-base text-grey-600">Kindly enter your details to log in</p>
                            </div>
                            <div className="grid gap-8">
                                <div className="grid content-start gap-6">
                                    <TextInput type="email" label="Email Address" name="email" error={formik.errors.email!} onChange={(e: Event) => setInputValue("email", e.target)} value={formik.values.email} />
                                    <TextInput type="password" label="Password" name="password" error={formik.errors.password!} onChange={(e: Event) => setInputValue("password", e.target)} value={formik.values.password} />
                                </div>
                                <div className="grid content-start justify-items-center gap-6">
                                    <Button type="submit" label="Log in" disabled={!formik.isValid} />
                                    <Link to={"/forgot-password"} className="text-primary-100 text-sm">Forgot your password?</Link>
                                </div>
                            </div>
                        </form>
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