import About from "../about/About";
import Benner from "../benner/Benner";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
           <Benner></Benner>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;