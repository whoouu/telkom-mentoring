import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const TemplateProfile = ({ name, faculty, bachelor, scrollY, images, interest, about }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    setScroll(scrollY);
  }, [scrollY]);
  return (
    <div
      className={`${
        scroll > 0 ? 'animate-scroll-down' : 'animate-scroll-up'
      } bg-white w-full h-[1200px] absolute transition ease-in-out`}
    >
      {/* header */}
      <div className="relative">
        <div className="bg-[#E6F4F9] w-full h-44 overflow-hidden"></div>
        <div className="relative ml-20 -top-14">
          {/* profile */}
          <div className="flex gap-7 items-center">
            <div className="bg-neutral-300 rounded-full w-52 h-52 border-4 overflow-hidden border-white">
              {images && <img className="h-full object-cover" alt="test" src={URL.createObjectURL(images)} />}
            </div>
            <div>
              {name.length == 0 ? (
                <Skeleton width={150} height={40} />
              ) : (
                <h2 className="font-bold text-[28px]">{name}</h2>
              )}

              {faculty.length == 0 ? (
                <Skeleton width={250} height={30} />
              ) : (
                <p className="text-[18px] font-normal">Student at {faculty}</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md py-2.5 px-5 mt-4">
            <h1 className="font-semibold text-[18px] mb-2.5">Tentang</h1>
            {about.length == 0 ? (
              <>
                <Skeleton width={'100%'} height={30} className="mb-3" />
                <Skeleton width={'100%'} height={30} />
              </>
            ) : (
              <p className="font-normal text-[14px]">{about}</p>
            )}

            <div className="mt-3">
              {bachelor.length == 0 ? (
                <>
                  <Skeleton width={150} height={30} className="mb-3" />
                  <Skeleton width={220} height={30} />
                </>
              ) : (
                <>
                  <h1 className="font-semibold text-[14px]">Program Studi</h1>
                  <p className="font-normal text-[14px]">{bachelor}</p>
                </>
              )}
            </div>

            <div className="mt-3">
              {faculty.length == 0 ? (
                <>
                  <Skeleton width={150} height={30} className="mb-3" />
                  <Skeleton width={220} height={30} />
                </>
              ) : (
                <>
                  <h1 className="font-semibold text-[14px]">Fakultas</h1>
                  <p className="font-normal text-[14px]">{faculty}</p>
                </>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md py-5 px-5 mt-4">
            <h1 className="font-semibold text-[18px] mb-2.5">Interest</h1>
            {interest.length == 0 ? (
              <>
                <Skeleton width={220} height={30} />
              </>
            ) : (
              <>
                {interest.map((data, index) => {
                  return (
                    <p
                      style={{ backgroundColor: data.background }}
                      className={`font-normal text-[14px] w-fit inline mr-3 p-2.5 text-white rounded-lg`}
                      key={index}
                    >
                      {data.title}
                    </p>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateProfile.propTypes = {
  name: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  bachelor: PropTypes.string.isRequired,
  scrollY: PropTypes.string,
  images: PropTypes.string,
  interest: PropTypes.string,
  about: PropTypes.string,
};

export default TemplateProfile;
