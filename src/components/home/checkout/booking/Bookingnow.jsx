import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../../../providers/Authproviders";
import Swal from 'sweetalert2'


const Bookingnow = () => {

    const {user}=useContext(Authcontext);

    const hendlebookservice=event=>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const date =form.date.value;
        const email=form.email.value;
        const number = form.number.value;
        const order={
            customer : name,
            date,email,number,price,service:_id,Service_Name:title,img

        }
        console.log(order)

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Order confirm successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }

    const loderData = useLoaderData();
    console.log(loderData)

    const { title, _id ,img, price} = loderData;
    return (
        <form onSubmit={hendlebookservice}>
        <div className="md:w-[83%] m-auto mt-5 mb-10 space-y-4 ">
            <h1 className="text-center font-bold text-xl">Service Name : {title}</h1>
            <p className="text-center">Price : ${price}</p>
        <div className=" md:space-x-6 space-y-4">
            <input type="text" name="name" defaultValue={user?.displayname} placeholder="Enter your Name" className="input input-bordered w-full max-w-xs"  />
            <input type="date" name="date" placeholder="" className="input input-bordered w-full max-w-xs "  />
        </div>

        <div className=" md:space-x-6 sm:mt-5 space-y-4">
            <input type="email" placeholder="Enter Email" name="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs"  />
            <input type="number" name="number" placeholder="Enter Your Number" className="input input-bordered w-full max-w-xs "  />
        </div>
        <textarea placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-x6" ></textarea>

        <button className="btn bg-orange-500 hover:bg-zinc-950 text-white w-full">Order Now</button>
    </div>
    </form>
    );
};

export default Bookingnow;