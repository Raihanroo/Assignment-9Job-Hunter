import React from 'react';
import Banner from '../Banner/Banner';
import blogimg from '../../../public/Blog.jpeg'
import Loading from '../Loading/Loading';
import { useNavigation } from 'react-router-dom';

const Blog = () => {
    const navigation = useNavigation();
    return (
        <div>
              {
                navigation.state === 'loading' ? <Loading></Loading> : ''
            }
           <Banner heading={"Blog"} subHeading={"Terems & Condition"} img={blogimg}></Banner>  
        </div>
    );
};

export default Blog;