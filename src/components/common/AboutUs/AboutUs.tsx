import aboutUsImage from '@images/aboutUsImage.png';
import mobileAboutImage from '@images/mobileAboutImage.png';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Link } from 'react-router-dom';

interface AboutUsProps {
  showButton?: boolean,
  showExtraText?: boolean
}

const AboutUs = ({showButton = true, showExtraText = false} : AboutUsProps) => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 gap-8 mx-8 mt-5 mb-8 md:grid-cols-2 md:gap-14 xl:gap-24 sm:mx-0">
        <div>
          <img src={aboutUsImage} alt="aboutUsImage" className="hidden md:block" />
          <img
            src={mobileAboutImage}
            alt="mobiAboutImage"
            className="block object-cover w-full md:hidden max-h-96"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[30px] xl:text-[48px] font-semibold mb-3 ">About Us</h1>
          <div className="text-sm md:text-sm xl:text-base">
            <p className="mb-3 md:mb-3 lg:mb-5">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {
              showExtraText? <div>
                <p className="my-3 md:mb-3 lg:my-5">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div> : <></>
            }
          </div>
          {
            showButton? <div className="mt-8 lg:mt-10">
            <Link to="/about-us" className="px-10 py-2 btn-primary md:py-3 md:px-12">
              Explore
            </Link>
          </div> : <></>
          }
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
