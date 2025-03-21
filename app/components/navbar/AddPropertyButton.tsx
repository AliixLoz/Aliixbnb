'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import useLoginModal from "@/app/hooks/useLoginModal"

interface AddPropertyButtonProps {
    userId?: string | null
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
    const loginModal = useLoginModal()
    const AddPropertyModal = useAddPropertyModal()

    const airbnbYourHome = () => {
        if (userId) {
            AddPropertyModal.open()
        } else {
            loginModal.open()
        }
    }

    return (
        <div onClick={airbnbYourHome} className="p-2 cursor-pointer text-sm font-mono rounded-full hover:bg-gray-400">
            Aliixbnb tú casa
        </div>
    )
}
export default AddPropertyButton