import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-xl font-bold text-orange-600">Service</h1>
                <h2 className="text-2xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-3 w-full gap-3">
                {
                    services.map(service => <ServiceCard key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;