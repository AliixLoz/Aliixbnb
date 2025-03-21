'use client'

import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { handleLogin } from "@/app/lib/actions";

const SignUpModal = () => {
    //
    //Variables
    const router = useRouter()
    const signupModal = useSignUpModal()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    //
    //Funcionamiento de Submit
    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }
        const response = await apiService.postWhithoutToken('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)

            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })
            setErrors(tmpErrors)
        }
    }


    const content = (
        <>
            <form action={submitSignup} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Direccion de correo" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Contraseña" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repite contraseña" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-pink-500 text-white rounded-xl opacity-80">{error}</div>
                    )
                })}

                <CustomButton
                    label="Aceptar"
                    onClick={submitSignup}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Registrarse"
            content={content}
        />
    )
}
export default SignUpModal