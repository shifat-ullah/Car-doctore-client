import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Benner = () => {
    return (
        <div className="carousel h-96 w-full mt-6">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-md " />
                
                <div className="absolute flex justify-end gap-3 nded-md transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
                </div>

                <div className="absolute  justify-end  w-80 gap-3   rounded-md top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-md" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-600">❯</a>
                </div>
                <div className="absolute  justify-end  w-80 gap-3  rounded-md  top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-md" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-600">❯</a>
                </div>
                <div className="absolute  justify-end  w-80 gap-3  rounded-md  top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-md" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-orange-600">❯</a>
                </div>
                <div className="absolute  justify-end  w-80 gap-3  rounded-md  top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full rounded-md" />
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-orange-600">❯</a>
                </div>
                <div className="absolute  justify-end  w-80 gap-3  rounded-md  top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-md" />
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
                </div>
                <div className="absolute  justify-end  w-80 gap-3  rounded-md  top-0 bg-gradient-to-r from-slate-900 h-full ">
                    <div className=' text-white space-y-6 ml-10 mt-20 '>
                        <h2 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='  gap-3 '>
                        <button className="btn  bg-orange-500  ">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benner;