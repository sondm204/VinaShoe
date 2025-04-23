import { FaFacebookMessenger } from "react-icons/fa";

const Chat = () => {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="h-16 w-16 bg-[#ff9b62] rounded-full flex justify-center items-center hover:scale-110 cursor-pointer transition duration-200 ease-in-out">
                <FaFacebookMessenger size={35} />
            </div>
        </div>
    )
}

export default Chat