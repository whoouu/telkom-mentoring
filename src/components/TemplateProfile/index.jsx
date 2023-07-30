import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ImageCard from '../Card/ImageCard';

const TemplateProfile = ({ name, faculty, bachelor, scrollY, images, interest, about, dataMentor, isMentor }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    setScroll(scrollY);
  }, [scrollY]);

  if (isMentor) {
    if (dataMentor.progress == 0) {
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
                  {dataMentor.images && (
                    <img className="h-full object-cover" alt="test" src={URL.createObjectURL(dataMentor.images)} />
                  )}
                </div>
                <div>
                  {dataMentor.name.length == 0 ? (
                    <Skeleton width={150} height={40} />
                  ) : (
                    <h2 className="font-bold text-[28px]">{dataMentor.name}</h2>
                  )}

                  {dataMentor.faculty.length == 0 ? (
                    <Skeleton width={250} height={30} />
                  ) : (
                    <p className="text-[18px] font-normal">Lecturer at {dataMentor.faculty}</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md py-2.5 px-5 mt-4">
                <div className="mt-3">
                  {dataMentor.bachelor.length == 0 ? (
                    <>
                      <Skeleton width={150} height={30} className="mb-3" />
                      <Skeleton width={220} height={30} />
                    </>
                  ) : (
                    <>
                      <h1 className="font-semibold text-[14px]">Program Studi</h1>
                      <p className="font-normal text-[14px]">{dataMentor.bachelor}</p>
                    </>
                  )}
                </div>

                <div className="mt-3">
                  {dataMentor.faculty.length == 0 ? (
                    <>
                      <Skeleton width={150} height={30} className="mb-3" />
                      <Skeleton width={220} height={30} />
                    </>
                  ) : (
                    <>
                      <h1 className="font-semibold text-[14px]">Fakultas</h1>
                      <p className="font-normal text-[14px]">{dataMentor.faculty}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (dataMentor.progress == 25) {
      return (
        <div className={`w-full absolute bg-red-200 top-52`}>
          <div className="bg-white p-3 mb-5 rounded-lg flex gap-5">
            {dataMentor.scolarUrl.length == 0 ? (
              <Skeleton variant="circular" width={48} height={48} />
            ) : (
              <img className="w-12 h-12 rounded-full" alt="logo" src="/public/scholar-logo.png" />
            )}

            {dataMentor.linkedinUrl.length == 0 ? (
              <Skeleton variant="circular" width={48} height={48} />
            ) : (
              <img className="w-12 h-12 rounded-full" alt="logo" src="/public/linkedin-logo.svg" />
            )}
          </div>
          <div className="bg-white p-3 rounded-lg">
            <h2 className="font-semibold text-[20px]">Citations</h2>
            {dataMentor.scolarUrl.length == 0 ? (
              <>
                <div className="mb-3">
                  <Skeleton width={400} height={40} />
                  <Skeleton width={200} height={30} />
                  <Skeleton width={'100%'} height={30} />
                </div>

                <div className="mb-3">
                  <Skeleton width={400} height={40} />
                  <Skeleton width={200} height={30} />
                  <Skeleton width={'100%'} height={30} />
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <h3 className="text-blue-400">
                    Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                  </h3>
                  <p>F. Hamami, IA Dahlan</p>
                  <p>2020 International Conference on Advancement in Data Science, E-learning, and...</p>
                </div>

                <div className="mb-3">
                  <h3 className="text-blue-400">
                    Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                  </h3>
                  <p>F. Hamami, IA Dahlan</p>
                  <p>2020 International Conference on Advancement in Data Science, E-learning, and...</p>
                </div>

                <div className="mb-3">
                  <h3 className="text-blue-400">
                    Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                  </h3>
                  <p>F. Hamami, IA Dahlan</p>
                  <p>2020 International Conference on Advancement in Data Science, E-learning, and...</p>
                </div>
              </>
            )}
          </div>
        </div>
      );
    }

    if (dataMentor.progress == 50) {
      return (
        <div className="bg-white p-3 rounded-lg absolute top-52 w-full">
          <h1 className="font-semibold text-[18px] mb-2.5">Tentang</h1>
          {dataMentor.about.length == 0 ? (
            <>
              <Skeleton width={'100%'} height={30} className="mb-3" />
              <Skeleton width={'100%'} height={30} />
            </>
          ) : (
            <p className="font-normal text-[14px]">{dataMentor.about}</p>
          )}
        </div>
      );
    }

    if (dataMentor.progress == 75) {
      return (
        <div className={`w-full absolute top-52`}>
          <div className="bg-white p-3 mb-5 rounded-lg">
            <h2 className="text-[20px] font-bold">Educations</h2>
            {dataMentor.studyHistory.length == 0 ? (
              <>
                <Skeleton width={'100%'} height={30} className="mb-3" />
                <Skeleton width={'100%'} height={30} />
              </>
            ) : (
              <div className="flex gap-5 my-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    alt="test"
                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg px-5">
                  <div className="flex-1">
                    <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                    <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                    <p className="text-[14px] font-light">2015 - 2019</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-3 mb-5 rounded-lg">
            <h2 className="text-[20px] font-bold">Experiences</h2>
            {dataMentor.workHistory.length == 0 ? (
              <>
                <Skeleton width={'100%'} height={30} className="mb-3" />
                <Skeleton width={'100%'} height={30} />
              </>
            ) : (
              <div className="flex gap-5 my-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    alt="test"
                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg px-5">
                  <div className="flex-1">
                    <h2 className="text-[18px] font-semibold">PT. Telkom Indonesia Tbk</h2>
                    <p className="text-[14px]">Project Manager</p>
                    <p className="text-[14px] font-light">2016 - 2018</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  } else {
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
  }
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
