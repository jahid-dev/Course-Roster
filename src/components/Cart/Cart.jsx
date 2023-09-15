
const Cart = ({ tutorialSelect, creditSum, sumPrice, creditRemaining }) => {
    return (
        <div className='bg-[#FFFFFF] p-6 lg:w-3/12 rounded-xl h-min'>
            <h3 className="text-[18px] text-[#2F80ED] font-bold border-b-2 py-2 border-[#1C1B1B33]">Credit Hour Remaining {creditRemaining} hr</h3>
            <div className="pb-6 border-b-2 border-[#1C1B1B33]">
                <h2 className="text-xl font-bold text-[#1C1B1B] mt-4 mb-5">Course Name</h2>
                <ul className="space-y-3 ml-6">
                    {tutorialSelect.map((tutorial) => (
                        <li key={tutorial.id} className="text-gray text-sm list-decimal">
                            {tutorial.title}
                        </li>
                    ))}
                </ul>
            </div>
            <h5 className="text-base font-medium border-[#1C1B1B33] border-b-2 py-4">Total Credit Hour : {creditSum}</h5>
            <h5>Total Price : {sumPrice} USD</h5>
        </div>
    );
};

export default Cart;