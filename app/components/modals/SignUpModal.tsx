'use client';

import Modal from "./Modals";
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";

const SignUpModal = () => {
    const signupModal = useSignUpModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Direccion de correo" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input placeholder="Contraseña" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input placeholder="Repite contraseña" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <div className="p-5 bg-pink-500 text-white rounded-xl opacity-80">Mensaje de error</div>
                <CustomButton
                    label="Aceptar"
                    onClick={() => console.log('Test')} className={""} />
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