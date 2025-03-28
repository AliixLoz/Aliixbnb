'use client'
import useSearchModal from "@/app/hooks/useSearchModal"

const SearchFilters = () => {

    const searchModal = useSearchModal()

    return (
        <div
            onClick={() => searchModal.open('location')}
            className="h-[48px] lg:h-[64] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-400">
                        <p className="text-xs font-mono">Destinos</p>
                        <p className="text-sm">Buscar lugares</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-400">
                        <p className="text-xs font-mono">Check in</p>
                        <p className="text-sm">Agregar fecha</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-400">
                        <p className="text-xs font-mono">Check out</p>
                        <p className="text-sm">Agregar fecha</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-400">
                        <p className="text-xs font-mono">Personas</p>
                        <p className="text-sm">¿Cuántas?</p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-pink-500 hover:bg-pink-800 transition rounded-full text-white">
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                        style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible' }}>
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters