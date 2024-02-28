import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-gray-200">
      {/* footer section start */}
      <div className="md:container md:mx-auto py-10">
        <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 sm:gap-10 px-5 md:grid-cols-3">
          {/* item one start */}
          <div className="text-center md:text-left py-2 md:gap-0 ">
            <h4 className="text-xl font-bold text-fuchsia-700">
              <i>Job-Hunter</i>
            </h4>
            <p className="md:text-sm text-state-300 my-2">There are many variations of passages<br />of Lorem Ipsum,some form.</p>
            <div className="flex gap-5 ml-14 md:ml-0">
            <FaFacebookSquare className="h-7 w-7 text-blue-700 hover:text-blue-300 duration-50"/>
            <FaSquareWhatsapp  className="h-7 w-7 text-green-700 hover:text-green-300 duration-50"/>
            <MdLocationPin  className="h-7 w-7 text-fuchsia-700 hover:text-fuchsia-300 duration-50"/>
            <IoLogoLinkedin  className="h-7 w-7 text-blue-700 hover:text-blue-300 duration-50"/>
            </div>
            {/* item one end */}
            {/* item two start */}
            <div className='md:ml-10 text-center md:text-left py-2 md:py-0'>
              <h4 className='text-xl font-bold text-fuchsia-700'><i>Company</i></h4>
              <p className='md:text-sm text-state-300 md:mt-2'>About Us</p>
              <p className='md:text-sm text-state-300 md:mt-2'>Work</p>
              <p className='md:text-sm text-state-300 md:mt-2'>Latest News</p>
              <p className='md:text-sm text-state-300 md:mt-2'>Careers</p>
            </div>
            

            <div className="md:ml-10 text-center md:text-left py-2 md:py-0">
              <h4 className="text-xl font-bold text-fuchsia-700"><i>Product</i></h4>
              <p className="md:text-sm text-state-300 md:mt-2">Prototype</p>
              <p className="md:text-sm text-state-300 md:mt-2">Plans & Pricing</p>
              <p className="md:text-sm text-state-300 md:mt-2">Customers</p>
              <p className="md:text-sm text-state-300 md:mt-2">Integrations</p>
            </div>
         
              <div className="md:ml-10 text-center md:text-left py-2 md:py-0">
              <h4 className="text-xl font-bold text-fuchsia-700"><i>Support</i></h4>
              <p className="md:text-sm text-state-300 md:mt-2">Help Desk</p>
              <p className="md:text-sm text-state-300 md:mt-2">Sels</p>
              <p className="md:text-sm text-state-300 md:mt-2">Become a Partner</p>
              <p className="md:text-sm text-state-300 md:mt-2">Developers</p>
            </div>
            
            <div className="md:ml-10 text-center md:text-left py-2 md:py-0">
              <h4 className="text-xl font-bold text-fuchsia-700"><i>Contact</i></h4>
              <p className="md:text-sm text-state-300 md:mt-2">C-12,Sonagang, Dhaka</p>
              <p className="md:text-sm text-state-300 md:mt-2">+88015221107013</p>
              <p className="md:text-sm text-state-300 md:mt-2">WWW.Job-Hunter.com</p>
              <p className="md:text-sm text-state-300 md:mt-2">raihanroo@gmail.com</p>
            </div>
            

          </div>
          
          <hr  className="text-state-300 md:my-8 my-4"/>

          

         <div className="md:flex md:justify-between text-center">
          <div>
            <span className=" font-semibold text-base text-state-300"><i>@2024 Job-Hunter.All Rights Reserved</i></span>
          </div>


          <div>
            <span className=" font-semibold text-base text-state-300"><i>Powe By Job-Hunter</i></span>
          </div>

          
         </div>


          
        </div>
      </div>
    </div>
  );
};

export default Footer;
