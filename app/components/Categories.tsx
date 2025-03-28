'use client';

import { useState } from 'react';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';
import Image from "next/image";

const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div onClick={() => _setCategory('')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn_category_all.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Todo</span>
            </div>

            <div onClick={() => _setCategory('alberca')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'alberca' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn_category.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Alberca</span>
            </div>

            <div onClick={() => _setCategory('cabaña')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabaña' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn_category_cabin.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Cabañas</span>
            </div>
            
            <div onClick={() => _setCategory('playa')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'playa' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn_category_beach.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Playa</span>
            </div>

            <div onClick={() => _setCategory('casa_del_arbol')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn_category_arbolHome.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Casa del arbol</span>
            </div>
        </div>
    )
}

export default Categories;