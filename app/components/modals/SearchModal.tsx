'use client'

import Modal from "./Modal"
import { useState } from "react"
import { Range } from "react-date-range"
import DatePicker from "../forms/Calendar"
import CustomButton from "../forms/CustomButton"
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal"
import SelectCountry, {SelectCountryValue} from "../forms/SelectCountry"

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SearchModal = () => {
    let content = (<></>)
    const searchModal = useSearchModal()
    const [numGuests, setNumGuests] = useState<string>('1')
    const [numBedrooms, setNumBedrooms] = useState<string>('0')
    const [country, setCountry] = useState<SelectCountryValue>()
    const [numBathrooms, setNumBathrooms] = useState<string>('0')
    const [dateRange, setDateRange] = useState<Range>(initialDateRange)

    

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''
        }

        searchModal.setQuery(newSearchQuery)
        searchModal.close()
    }


    const _setDateRange = (selection: Range) => {
        if (searchModal.step === 'checkin') {
            searchModal.open('checkout');
        } else if (searchModal.step === 'checkout') {
            searchModal.open('details');
        }

        setDateRange(selection);
    }

   

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Busca tu destino</h2>

            <SelectCountry
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="Check in -->"
                    onClick={() => searchModal.open('checkin')}
                />
            </div>
        </>
    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">Día de check in?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- Destino"
                    onClick={() => searchModal.open('location')}
                />

                <CustomButton
                    label="Check out -->"
                    onClick={() => searchModal.open('checkout')}
                />
            </div>
        </>
    )

    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">Día de check out?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- Check in"
                    onClick={() => searchModal.open('checkin')}
                />

                <CustomButton
                    label="Detalles -->"
                    onClick={() => searchModal.open('details')}
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Detalles</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Huespedes:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numGuests} 
                        placeholder="Huespedes..."
                        onChange={(e) => setNumGuests(e.target.value)} 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <label>Cuartos:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBedrooms} 
                        placeholder="Cuartos..."
                        onChange={(e) => setNumBedrooms(e.target.value)} 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <label>Baños:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBathrooms} 
                        placeholder="Baños..."
                        onChange={(e) => setNumBathrooms(e.target.value)} 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<-- Check out"
                    onClick={() => searchModal.open('checkout')}
                />

                <CustomButton
                    label="Buscar"
                    onClick={closeAndSearch}
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckout;
    } else if (searchModal.step == 'details') {
        content = contentDetails;
    }

    return (
        <Modal
            label="Buscar"
            content={content}
            close={searchModal.close}
            isOpen={searchModal.isOpen}
        />
    )
}

export default SearchModal