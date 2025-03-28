'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import Modal from "./Modal"
import CustomButton from "../forms/CustomButton"
import { ChangeEvent, useState } from "react"
import Image from 'next/image';
import Categories from "../addproperty/Categories"
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry"
import apiService from "@/app/services/apiService"
import { useRouter } from "next/navigation"

const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [errors, setErrors] = useState<string[]>([])
    const [dataCategory, setDataCategory] = useState('')
    const [dataTitle, setDataTitle] = useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [dataPrice, setDataPrice] = useState('')
    const [dataBedrooms, setDataBedrooms] = useState('')
    const [dataBathrooms, setDataBathrooms] = useState('')
    const [dataGuests, setDataGuests] = useState('')
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>()
    const [dataImage, setDataImage] = useState<File | null>(null)

    //

    const addPropertymodal = useAddPropertyModal()
    const router = useRouter()

    //

    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0]

            setDataImage(tmpImage)
        }
    }

    //

    const submitForm = async () => {
        console.log('Formulario guardado')

        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData()
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('bedrooms', dataBedrooms);
            formData.append('bathrooms', dataBathrooms);
            formData.append('guests', dataGuests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);

            const response = await apiService.post('/api/properties/create/', formData)

            if (response.success) {
                console.log('Guardado c:')

                router.push('/')

                addPropertymodal.close()
            } else {
                console.log('Error')

                const tmpErrors: string[] = Object.values(response).map((error: any) => {
                    return error
                })
                setErrors(tmpErrors)
            }

        }
    }


    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Elige la Categoría</h2>

                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton
                        label="Siguiente"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe tu alojamiento</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Titulo</label>
                            <input
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Descripcion</label>
                            <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            ></textarea>
                        </div>
                    </div>

                    <CustomButton
                        label="Anterior"
                        className="mb-2 bg-black hover:bg-gray-900"
                        onClick={() => setCurrentStep(1)}
                    />


                    <CustomButton
                        label="Siguiente"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep == 3 ? (
                <>

                    <h2 className="mb-6 text-2xl">Detalles</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Precio por noche</label>
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Cuartos</label>
                            <input
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Baños</label>
                            <input
                                type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Huespedes</label>
                            <input
                                type="number"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>

                    <CustomButton
                        label="Anterior"
                        className="mb-2 bg-black hover:bg-gray-900"
                        onClick={() => setCurrentStep(2)}
                    />


                    <CustomButton
                        label="Siguiente"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : currentStep == 4 ? (
                <>

                    <h2 className="mb-6 text-2xl">Ubicacion</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <SelectCountry
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>

                    <CustomButton
                        label="Anterior"
                        className="mb-2 bg-black hover:bg-gray-900"
                        onClick={() => setCurrentStep(3)}
                    />


                    <CustomButton
                        label="Siguiente"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ) : (
                <>

                    <h2 className="mb-6 text-2xl">Imagenes</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-700 text-white rounded-xl">
                            <input type="file" accept="image/*" onChange={setImage} />
                        </div>


                        {dataImage && (
                            <div className="w-[200px] h-[150px] relative">
                                <Image
                                    fill
                                    alt="Cargar img"
                                    src={URL.createObjectURL(dataImage)}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        )}
                    </div>

                    {errors.map((error, index) => {
                        return (
                            <div
                                key={index}
                                className='p-5 mb-4 bg-pink-700 text-white rounded-xl opacity-80'
                            >
                                {error}
                            </div>
                        )
                    })}

                    <CustomButton
                        label="Anterior"
                        className="mb-2 bg-black hover:bg-gray-900"
                        onClick={() => setCurrentStep(4)}
                    />


                    <CustomButton
                        label="Guardar"
                        onClick={submitForm}
                    />

                </>
            )}
        </>
    )


    return (
        <>
            <Modal
                isOpen={addPropertymodal.isOpen}
                close={addPropertymodal.close}
                label="Añadir propiedad"
                content={content}
            />
        </>
    )
}
export default AddPropertyModal