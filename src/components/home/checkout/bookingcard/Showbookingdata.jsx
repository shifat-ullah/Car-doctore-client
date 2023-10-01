/* eslint-disable react/prop-types */
const Showbookingdata = ({ booking , hendleDelete , hendleconfirm}) => {

    const {_id, customer, date, email, number, price, Service_Name, img, status } = booking;

    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <button className="btn btn-xs mt-8 btn-circle" onClick={()=>hendleDelete(_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className=" rounded-xl w-12 h-12">
                                            <img src={img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Service Name : {Service_Name}</div>
                                        <td>Customer Name : {customer}</td>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                {email}
                                <br />

                                {number}

                            </td>
                            <td>{date}</td>
                            <td>${price}</td>
                            <th>
                               { status === 'Confirm'? <span className="text-bold text-primary">Confirm</span> : 
                                <button onClick={()=>hendleconfirm(_id)} className="btn btn-primary btn-xs"> Please Confirm</button>}
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Showbookingdata;