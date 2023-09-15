
const Cart = ({ tutorialSelect, creditSum, sumPrice, creditRemaining }) => {
    return (
        <div className='bg-[#FFFFFF] p-6 lg:w-3/12 rounded-xl h-min'>
            <h3 className="text-base text-[#2F80ED] font-bold border-b-2 border-[#1C1B1B33]">Credit Hour Remaining {creditRemaining} hr</h3>
            <div className="pb-6 border-b-2 border-[#1C1B1B33]">
                <h2 className="text-xl font-bold text-[#1C1B1B]">Course Name</h2>
                
            </div>
            <h5 className="text-base font-medium border-[1C1B1B33] border-b-2  text-[#1C1B1B99] py-4">Total Credit Hour : {creditSum}</h5>
            <h5>Total Price : {sumPrice} USD</h5>
        </div>
    );
};

export default Cart;