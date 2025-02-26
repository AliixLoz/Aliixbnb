import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Alberca</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_cabin.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Cabañas</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_beach.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Playa</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_arbolHome.jpg" alt="Category - Beach" width={20} height={20} />
                <span className="text-xs">Casa del arbol</span>
            </div>
        </div>
    )
}

export default Categories;