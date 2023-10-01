import preson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10 ">
            <div className="hero-content grid md:grid-cols-2 space-x-10 relative">
                <div>
                    <img src={preson} className=" rounded-lg shadow-2xl" />
                    <img src={parts} className="w-[30%] right-96 h-[50%]  top-48 rounded-lg  border-8 shadow-xl border-inherit	 absolute " />
                </div>
                <div className=' space-y-2'>
                    <h1 className="text-4xl text-orange-400 font-bold">About Us!</h1>
                    <h2 className="text-3xl ">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;



{/* <div className="hero min-h-screen bg-base-200 w-full mb-20 mt-20 flex">
<div className='hero-content flex-col lg:flex-row'>
<div className=' relative '>
 <figure> 
      <img src={preson} className='w-3/4  mr-auto' alt="Movie"/>
  </figure>
  <figure> 
      <img src={parts} className='w-2/4 right-28 top-28 rounded-lg  border-8 shadow-xl border-inherit	 absolute' alt="Movie"/>
  </figure>
 </div>
  <div className="card-body w-full">
    <h2 className="card-title">About Us</h2>
    <h3>We are qualified & of experience in this field</h3>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
</div> */}