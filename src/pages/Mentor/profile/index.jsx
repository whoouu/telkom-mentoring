/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, IconButton, MenuItem, Modal, Select } from '@mui/material';
import FullLayout from '../../../components/Layout/FullLayout';
import { DatePicker } from '@mui/x-date-pickers';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { clockBook, dayBook } from '../../../constants/bookingMentor';

const MentorProfileCard = ({ children }) => {
  return <div className="rounded-lg shadow-lg px-5 py-3.5 bg-white">{children}</div>;
};

const ListCard = ({ children, src }) => {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img alt="test" src={src} className="w-full h-full object-cover" />
      </div>
      {children}
    </div>
  );
};

const CalendarCard = ({ day, date, slot, onClick, isActive }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      className={`border border-neutral-400 ${
        isActive ? 'bg-neutral-200' : ''
      } rounded-lg p-2.5 hover:border-black cursor-pointer transition-all flex flex-col justify-center`}
    >
      <p className="text-neutral-400 text-[14px]">{day}</p>
      <p className="font-semibold text-[18px]">{date}</p>
      <p className="text-green-400 text-[12px]">{slot}</p>
    </div>
  );
};

const CreateEditModal = ({ open, close, type }) => {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <Modal open={open} onClose={() => close(false)} className="flex items-center justify-center">
      <>
        {/* {openModal && (
          <Modal
            open={openModal}
            className="flex items-center justify-center"
            onClose={() => {
              close(false);
              setOpenModal(false);
            }}
          >
            <ConfirmBookModal setClosePrevModal={setOpenModal} setClose={close} />
          </Modal>
        )} */}
        <Box className="bg-white p-3 rounded-lg w-[640px]">
          <h3 className="my-5 text-[22px] text-center font-bold">
            {type ? 'Edit Jadwal Tersedia' : 'Buat Jadwal Tersedia'} Anda
          </h3>
          <hr className="my-3" />
          <div className="mb-8">
            <p className="mb-3">Pilih Tanggal Kosongmu</p>
            <DatePicker className="w-full" />
          </div>

          <div className="mb-8">
            <p className="mb-3">Pilih Waktu Kosongmu</p>
            <div className="flex gap-5 mb-5 items-center">
              <img alt="icon" src="/public/clock-icon.svg" />
              <Select label="end" className="w-32">
                <MenuItem value={'8.00'}>8.00pm</MenuItem>
                <MenuItem value={'8.30'}>8.30pm</MenuItem>
                <MenuItem value={'9.00'}>9.00pm</MenuItem>
                <MenuItem value={'9.30'}>9.30pm</MenuItem>
                <MenuItem value={'10.00'}>10.00pm</MenuItem>
              </Select>
              <p>-</p>
              <Select label="start" className="w-32">
                <MenuItem value={'8.00'}>8.00pm</MenuItem>
                <MenuItem value={'8.30'}>8.30pm</MenuItem>
                <MenuItem value={'9.00'}>9.00pm</MenuItem>
                <MenuItem value={'9.30'}>9.30pm</MenuItem>
                <MenuItem value={'10.00'}>10.00pm</MenuItem>
              </Select>
            </div>

            <div>
              <p className="mb-3">Referensi</p>
              <Select label="start" className="w-1/2">
                <MenuItem value={'week'}>Weekly</MenuItem>
                <MenuItem value={'month'}>Monthly</MenuItem>
              </Select>
            </div>

            <div className="inline-flex items-center mt-5 gap-4">
              <img className="w-6 h-fit" alt="test" src="/g-meet-icon.png" />
              <button className="bg-blue-400 rounded-lg p-3 text-white">Tambahkan Link Google Meet</button>
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <button onClick={() => close(false)} className="bg-turqouise-500 text-white w-full rounded-lg p-3">
              Konfirmasi
            </button>
          </div>
        </Box>
      </>
    </Modal>
  );
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [active, setActive] = useState(null);
  const [activeClock, setActiveClock] = useState(null);

  return (
    <FullLayout isMentor={true}>
      <CreateEditModal open={isOpen} close={setIsOpen} type={isEdit} />
      <div className="bg-yellow-200 h-72 w-full relative">
        <div className="flex justify-center">
          <div className="absolute top-48 w-[70%]">
            <div className="flex items-end gap-3 mb-10">
              <div className="rounded-full border-4 border-white h-52 w-52 bg-red-200 overflow-hidden ">
                <img
                  alt="test"
                  src="../../../public/default-person.avif"
                  className="object-cover bg-red-200 h-full w-full"
                />
              </div>
              <div className="mb-3 flex-1">
                <h1 className="font-bold text-[28px]">Mubeth Praditya</h1>
                <p className="font-bold text-[18px]">Lecturer at Fakultas Rekayasa Industri</p>
                <p className="text-[12px]">Talks about #datascience. #machinelearning. #artificialintelligence.</p>
              </div>
              <div className="flex gap-7">
                <IconButton>
                  <img alt="test" src="../../../public/linkedin.png" />
                </IconButton>
                <IconButton>
                  <img alt="test" src="../../../public/graduate.png" />
                </IconButton>
              </div>
            </div>
            {/* body description */}
            <div className="flex gap-5">
              {/* container left */}
              <div className="flex flex-col gap-5 flex-2">
                <MentorProfileCard>
                  <h2 className="font-semibold text-[18px] mb-3.5">Tentang</h2>
                  <p className="text-[14px] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum ante nulla, ut tristique
                    turpis pellentesque sit amet. Donec non cursus turpis. Donec vel elit enim. Etiam lobortis justo
                    eros, eu ornare enim ultrices id. Integer at vehicula eros, quis rhoncus tortor. Duis euismod mauris
                    quis lectus commodo sollicitudin. Praesent ullamcorper ullamcorper nulla, sed euismod ligula
                    sollicitudin ut.
                  </p>
                  <b className="text-[14px]">Program Studi</b>
                  <p className="text-[14px] mb-2">S1 Sistem Informasi</p>
                  {/* Fakultas */}
                  <b className="text-[14px]">Fakultas</b>
                  <p className="text-[14px]">Fakultas Rekayasa Industri</p>
                </MentorProfileCard>

                <MentorProfileCard>
                  <h2 className="font-semibold text-[18px] mb-3.5">Educations</h2>
                  <div className="flex flex-col gap-5">
                    <ListCard
                      src={
                        'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs</p>
                        <p className="text-[14px] font-light">2012 - 2015</p>
                      </div>
                    </ListCard>

                    <ListCard
                      src={
                        'https://plus.unsplash.com/premium_photo-1680157071241-034d017884ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Master Degree, Informatic</p>
                        <p className="text-[14px] font-light">2009 - 2012</p>
                      </div>
                    </ListCard>

                    <ListCard
                      src={
                        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Bachelor of Information Engineering</p>
                        <p className="text-[14px] font-light">2005 - 2009</p>
                      </div>
                    </ListCard>
                  </div>
                </MentorProfileCard>

                <MentorProfileCard>
                  <h2 className="font-semibold text-[18px] mb-3.5">Experiences</h2>
                  <div className="flex flex-col gap-5">
                    <ListCard
                      src={
                        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">PT Telekomunikasi Indonesia Tbk</h2>
                        <p className="text-[14px]">Vice President</p>
                        <p className="text-[14px] font-light">2020 - Now</p>
                      </div>
                    </ListCard>

                    <ListCard
                      src={
                        'https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Lecturer</p>
                        <p className="text-[14px] font-light">2022 - Now</p>
                      </div>
                    </ListCard>

                    <ListCard
                      src={
                        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                      }
                    >
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Telkom University</h2>
                        <p className="text-[14px]">Lecturer</p>
                        <p className="text-[14px] font-light">2019 - Now</p>
                      </div>
                    </ListCard>
                  </div>
                </MentorProfileCard>

                <MentorProfileCard>
                  <h2 className="font-semibold text-[18px] mb-3.5">Citations</h2>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-blue-500">
                        Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                      </h3>
                      <p className="text-[14px] text-neutral-500">M. Praditya, IA Dahlan</p>
                      <p className="text-[14px] text-neutral-500">
                        2020 International Conference on Advancement in Data Science, E-learning, and...
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-blue-500">
                        Implementation face recognition attendance monitoring system for lab surveillance with hash encryption{' '}
                      </h3>
                      <p className="text-[14px] text-neutral-500">M. Praditya, IA Dahlan, SW Prakosa, KF Somantri</p>
                      <p className="text-[14px] text-neutral-500">
                        Journal of Physics: Conference Series 1641 (1), 012084
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-blue-500">
                      Big data analytics for processing real-time unstructured data from cctv in traffic management{' '}
                      </h3>
                      <p className="text-[14px] text-neutral-500">M. Praditya, IA Dahlan, SW Prakosa, KF Somantri</p>
                      <p className="text-[14px] text-neutral-500">
                        2020 International Conference on Data Science and Its Applications (ICoDSA), 1-5
                      </p>
                    </div>

                    <button className="bg-neutral-800 text-white text-center p-3 rounded-lg w-fit mx-auto mt-5">
                      Lihat semua
                    </button>
                  </div>
                </MentorProfileCard>
              </div>
              {/* container right */}
              <div className="w-[100%]">
                <div className="sticky top-[9rem] z-0">
                  <div className="rounded-lg shadow-lg p-2 bg-white mb-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-[18px] font-bold">Jadwal Tersedia</h2>
                      <button
                        className="text-turqouise-600"
                        onClick={() => {
                          setIsEdit(true);
                          setIsOpen(true);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <hr className="mb-5 mt-3" />
                    <div className="flex gap-5">
                      {dayBook.map((data, index) => {
                        return (
                          <CalendarCard
                            {...data}
                            key={index}
                            isActive={active === data.id}
                            onClick={() => {
                              setBooking((prevState) => ({ ...prevState, day: data.day, date: data.date }));
                              setActive(data.id);
                            }}
                          />
                        );
                      })}
                    </div>

                    <h2 className="text-[18px] font-bold mt-5">Jam Tersedia</h2>
                    <hr className="mb-5 mt-3" />
                    <div className="flex gap-3">
                      {clockBook.map((data) => {
                        return (
                          <div
                            onClick={() => {
                              setBooking((prevState) => ({ ...prevState, clock: data.clock }));
                              setActiveClock(data.id);
                            }}
                            key={data.id}
                            className={` ${
                              activeClock === data.id ? 'bg-neutral-300' : ''
                            } cursor-pointer border border-neutral-400 rounded-lg p-3 transition-all hover:border-black`}
                          >
                            <p>{data.clock}</p>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="p-2.5 w-full rounded-lg bg-turqouise-500 text-white mt-5"
                    >
                      Tambah Jadwal Tersedia
                    </button>
                  </div>

                  <div className="rounded-lg shadow-lg p-2 bg-white">
                    <h2 className="text-[18px] font-bold mb-3.5">Review</h2>
                    <div className="w-full">
                      <Splide
                        className="w-full"
                        options={{ arrows: false, perPage: 1, pagination: false, width: '100%', height: 200 }}
                      >
                        <SplideSlide className="">
                          <div className="rounded-lg flex flex-col justify-center bg-transparent">
                            <div className="flex gap-3.5 mb-5">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                  alt="test"
                                  src="/anakin.jpg"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h2 className="font-bold text-[14px]">Anakin</h2>
                                <p className="font-light text-[12px]">Sistem Informasi 2021</p>
                                <p className="text-[12px]">15 Maret 2023</p>
                              </div>
                            </div>
                            <p className="font-normal text-[14px] text-justify">
                              Pernah mentoring dengan pak Mubeth ngebahas apa yang perlu disiapin buat jadi Data
                              Scientist, dari sesi mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat
                              yang perlu disiapin selama kuliah
                            </p>
                          </div>
                        </SplideSlide>
                        <SplideSlide>
                          <div className="rounded-lg flex flex-col justify-center bg-transparent">
                            <div className="flex gap-3.5 mb-5">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                  alt="test"
                                  src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h2 className="font-bold text-[14px]">Cipto</h2>
                                <p className="font-light text-[12px]">Sistem Informasi 2021</p>
                                <p className="text-[12px]">15 Maret 2023</p>
                              </div>
                            </div>
                            <p className="font-normal text-[14px] text-justify">
                              Pernah mentoring dengan pak Mubeth ngebahas apa yang perlu disiapin buat jadi Data
                              Scientist, dari sesi mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat
                              yang perlu disiapin selama kuliah
                            </p>
                          </div>
                        </SplideSlide>
                      </Splide>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

CalendarCard.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slots: PropTypes.string.isRequired,
};

export default Profile;
