import Image from "next/image";
import P2pContainer from "../../../public/P2P-container.jpg"

const ProxyP2P = ({ title, subTitle, firstButton, secondButton,  proxyItems}) => {
    console.log('proxyItems', proxyItems)
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mt-4">{title}</h2>
            <p className="mt-2 text-gray-700">{subTitle}</p>
            <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> {firstButton} </button> <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    {secondButton}
                </button>
            </div>
            <Image src={P2pContainer} alt="P2P-container" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {proxyItems.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.subbTitle}</p>
                    </div>))}
            </div>
        </div>);
}

export default ProxyP2P;