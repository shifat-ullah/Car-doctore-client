/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    const loderData = useLoaderData();
    console.log(loderData)

    const { title, _id } = loderData;
    return (
        <form>
            <div className="md:w-[83%] m-auto mt-10 mb-10 space-y-4 ">
            <div className=" md:space-x-6 space-y-4">
                <input type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs"  />
                <input type="text" placeholder="Service Price" className="input input-bordered w-full max-w-xs "  />
            </div>

            <div className=" md:space-x-6 sm:mt-5 space-y-4">
                <input type="text" placeholder="Text here" className="input input-bordered w-full max-w-xs"  />
                <input type="text" placeholder="Service Type" className="input input-bordered w-full max-w-xs "  />
            </div>
            <textarea placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-x6" ></textarea>

            <button className="btn bg-orange-500 hover:bg-zinc-950 text-white w-full">Normal</button>
        </div>
        </form>
    );
};

export default CheckOut;