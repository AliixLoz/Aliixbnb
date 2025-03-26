'use client';
import CustomButton from "../forms/CustomButton"

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-400">
                    <p className="font-mono text-black">Jen</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cupiditate obcaecati nam architecto in quibusdam suscipit officia alias,
                        labore aliquid ex repudiandae atque maiores magni illum exercitationem ducimus dolorem aut? Ut?</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-gray-400">
                    <p className="font-mono text-black">Yop</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cupiditate obcaecati nam architecto in quibusdam suscipit officia alias,
                        labore aliquid ex repudiandae atque maiores magni illum exercitationem ducimus dolorem aut? Ut?</p>
                </div>
            </div>
            <div className="mt-4 py-4 px-6 flex border border-gray-400 space-x-4 rounded-xl decoration">
                <input type="text" placeholder="Escribe tu mensaje..." className="w-full p-2 -bg-gray-300 rounded-xl" />
                <CustomButton label='Send' onClick={() => console.log('Clicked')} className="w-[100px]" />
                
            </div>

        </>
    )
}
export default ConversationDetail