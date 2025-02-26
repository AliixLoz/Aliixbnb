import Image from "next/image"
const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">Mis reservaciones</h1>

            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src="/alberca_1.jpeg" className="hover:scale-110 object-cover transition h-full w-full" alt="Casa con alberca" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Nombre</h2>
                        <p className="mb-2"><strong>Check in:</strong>12/03/2025</p>
                        <p className="mb-2"><strong>Check out:</strong>15/02/2025</p>
                        <p className="mb-2"><strong>Noches:</strong>3</p>
                        <p className="mb-2"><strong>Total a pagar</strong>$3000</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-pink-600 text-white rounded-xl">Ver reservacion</div>
                    </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src="/alberca_1.jpeg" className="hover:scale-110 object-cover transition h-full w-full" alt="Casa con alberca" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Nombre</h2>
                        <p className="mb-2"><strong>Check in:</strong>12/03/2025</p>
                        <p className="mb-2"><strong>Check out:</strong>15/02/2025</p>
                        <p className="mb-2"><strong>Noches:</strong>3</p>
                        <p className="mb-2"><strong>Total a pagar</strong>$3000</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-pink-600 text-white rounded-xl">Ver reservacion</div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MyReservationsPage