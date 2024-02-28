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
        
         <Banner  heading={<p className='text-[5rem]  font-medium text-fuchsia-950'>One Step</p>} subHeading={<p className='text-[2.5rem] font-medium text-fuchsia-950'>Closer To Your</p>} img={homeimg}></Banner> 
         
           <Category></Category>
           <Featured></Featured>
        </div>
    );
};

export default Home;