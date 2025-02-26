const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-400 shadow-xl">
            <h2 className="mb-5 text-2xl">$1000 la noche</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">Personas</label>
                <select className="w-full -ml-1 text-xm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-pink-400 hover:bg-pink-800 rounded-xl">Reservar</div>
            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>

                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Django fee</p>

                <p>$200</p>
            </div>
            <div className="mb-4 flex justify-between align-center font-mono">
                <p>Total</p>

                <p>$1000</p>
            </div>
        </aside>
    )
}
export default ReservationSidebar