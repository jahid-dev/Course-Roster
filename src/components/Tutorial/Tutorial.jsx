/* eslint-disable react/prop-types */
import { BiBookOpen } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";

const Tutorial = ({tutorials}) => {
    return (
        <>
            {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-[#FFFFFF] rounded-xl p-4">
                    <img src={tutorial.img} alt="" />
                    <h2 className="text-base text-[#1C1B1B] font-semibold my-5">{tutorial.title}</h2>
                    <p className="text-[#1C1B1B99] mt-auto">{tutorial.par}</p>
                    <div className="flex justify-between mt-4 mb-6">
                        <div className="flex">
                            <FiDollarSign className="text-2xl" />
                            <span className="text-[#1C1B1B99]">Price: {tutorial.price}</span>
                        </div>
                        <div className="flex">
                            <BiBookOpen className="text-2xl" />
                            <span className="text-[#1C1B1B99]">Credit : {tutorial.credit}hr</span>
                        </div>
                    </div>
                    <button className="text-lg text-center px-5 py-3  bg-[#2F80ED] w-full hover:bg-blue-800 rounded-md mx-auto block text-[#FFFFFF] font-semibold">
                    Select
                    </button>
                </div>
            ))}
        </>
    );
};

export default Tutorial;