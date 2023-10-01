/* eslint-disable react/prop-types */
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

  // eslint-disable-next-line no-unused-vars
  const { _id, service_id, title, img, price, description } = service;
  return (
    <div className="card w-[97%] mt-5 bg-base-100 shadow-xl">
      <figure><img src={img} className='h-[100%]' alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className='flex  '>
          <p>price : $ {price}</p>
          <Link to={`/booking/${_id}`}>
            <button><ArrowRightIcon class="h-6 w-6 text-orange-700" /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;