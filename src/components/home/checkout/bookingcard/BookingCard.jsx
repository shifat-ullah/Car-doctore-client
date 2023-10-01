import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../../providers/Authproviders";
import Showbookingdata from "./Showbookingdata";

const BookingCard = () => {

    const { user } = useContext(Authcontext);


    const [bookingcard, setBookingCard] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookingCard(data)
            })
    }, [url])

    // Delet start
    const hendleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                        const remaining = bookingcard.filter(booking => booking._id !== _id);
                        setBookingCard(remaining)
                    })
            }
        })
    }
    // Delete End

    // COmfirm start

    const hendleconfirm = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookingcard.filter(booking => booking._id !== _id);
                    const updateconfirm = bookingcard.find(booking => booking._id === _id);
                    updateconfirm.status='Confirm'
                    const newbooking = [updateconfirm, ...remaining];
                    setBookingCard(newbooking)
            }
            })
    }

    // Confirm End
    return (
        <div>
            <h2 className="text-2xl">my booking : {bookingcard.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>

                            <th>Name</th>
                            <th>Email & Phone Number</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>


                </table>
            </div>

            {
                bookingcard.map(booking => <Showbookingdata
                    key={booking._id}
                    booking={booking}
                    hendleDelete={hendleDelete}
                    hendleconfirm={hendleconfirm}
                ></Showbookingdata>)
            }

        </div>
    );
};

export default BookingCard;