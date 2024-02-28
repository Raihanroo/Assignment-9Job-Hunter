import React from 'react';
import Banner from '../Banner/Banner';
import homeimg from '../../../public/home.gif'
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';


const Home = () => {
    const navigation = useNavigation();

    
    return (
        
        <div>

            {
                navigation.state === 'loading' ? <Loading></Loading> : ''
            }
        
         <Banner  heading={"One Step"} subHeading={"Closer To Your"} img={homeimg}></Banner> 
         
           <Category></Category>
           <Featured></Featured>
        </div>
    );
};

export default Home;