import { Box, IconButton, Modal } from '@mui/material';
import FullLayout from '../../../components/Layout/FullLayout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CopyToClipboard from 'react-copy-to-clipboard';
import { clockBook, dayBook } from '../../../constants/bookingMentor';
import useMentoringStore from '../../../stateManagement/store';

const MentorProfileCard = ({ children }) => {
  return <div className="rounded-lg shadow-lg px-5 py-3.5 bg-white">{children}</div>;
};

const ListCard = ({ children }) => {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          alt="test"
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          className="w-full h-full object-cover"
        />
      </div>
      {children}
    </div>
  );
};

const CalendarCard = ({ day, date, slot, onClick, isActive }) => {
  return (
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

const BookModal = ({ open, close, booking }) => {
  const topicRef = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const [valText, setValText] = useState('');
  const [step, setStep] = useState(1);
  const notificationCount = useMentoringStore((state) => state.increaseNotif);

  const nextStep = () => {
    setStep(step + 1);
    notificationCount();
  };

  const closeModal = () => {
    close(false);
    setStep(1);
    setValText('');
  };

  useEffect(() => {
    if (step > 1) {
      window.sessionStorage.setItem('booking', JSON.stringify(booking));
    }
  }, [step]);

  switch (step) {
    case 1:
      return (
        <Modal open={open} onClose={() => close(false)} className="flex items-center justify-center">
          <Box className="px-3 py-5 bg-white rounded-lg w-[588px]">
            <h1 className="text-[24px] mb-3 font-semibold">Konfirmasi Waktu Sesi 1:1 Mentoring Kamu</h1>
            <p className="text-[16px]">
              Sesi Mentoring dengan <span className="text-turqouise-500">Faqih Hamami</span>
            </p>
            <div className="flex gap-7 mt-5 flex-wrap w-full">
              <p className="flex items-center">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                {booking.day}, {booking.date}
              </p>
              <p className="flex items-center">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />
                {booking.clock}
              </p>
            </div>
            <hr className="mt-3 mb-5" />
            <p className="mb-3">Buat pertanyaan / Topik untuk sesi mentoring ini</p>
            <textarea
              onChange={(e) => setValText(e.target.value)}
              placeholder="isi pertanyaan anda disini..."
              className="w-full p-3 border rounded-lg min-h-[200px]"
            />
            <p className="my-3">Contoh Topik</p>
            <div className="bg-blue-100 rounded-lg p-3 flex items-start gap-3">
              <p ref={topicRef} className="text-[14px] text-neutral-500 font-light w-full">
                Hi pak/bu izin memperkenalkan diri saya Haris Hasan mahasiswa Sistem Informasi 2020. Sebelumnya izin
                untuk menyampaikan topik yang sekiranya bisa dibahas untuk sesi kali ini Bahas dunia Data Science dan
                bagaimana yang perlu disiapkan untuk menjad seorang Data Scientist Membahas tugas kuliah yang berkaitan
                dengan pengolahan data{' '}
              </p>
              <CopyToClipboard text={topicRef?.current?.innerText} onCopy={() => setIsCopied(true)}>
                <IconButton>
                  <ContentCopyOutlinedIcon fontSize="small" />
                </IconButton>
              </CopyToClipboard>
            </div>

            {valText !== '' ? (
              <button onClick={nextStep} className="w-full bg-turqouise-500 text-white p-3 rounded-lg mt-10">
                Konfirmasi Jadwal Booking
              </button>
            ) : (
              <button className="w-full bg-neutral-500 text-black p-3 rounded-lg mt-10" disabled>
                Konfirmasi Jadwal Booking
              </button>
            )}
          </Box>
        </Modal>
      );
    case 2:
      return (
        <Modal open={open} onClose={closeModal} className="flex items-center justify-center">
          <Box className="px-3 py-5 bg-white rounded-lg w-[588px]">
            <img className="mx-auto mb-5" alt="test" src="../../../public/success-icon.svg" />
            <h1 className="text-[24px] mb-3 font-semibold text-center">Request Sesi Mentoring Telah Terkirim!</h1>
            <p className="text-[16px]">
              Kami telah mengirim request untuk Sesi 1:1 Mentoring. Selanjutnya kamu akan menerima notifikasi konfirmasi
              dari Mentor. Atau kamu bisa mengirim pesan untuk lebih lanjut.
            </p>
            <hr className="my-5" />
            <div className="w-20 h-20 mx-auto my-3 overflow-hidden rounded-full">
              <img alt="test" src="../../../public/default-person.avif" />
            </div>
            <p className="text-center">
              Sesi Mentoring dengan <span className="text-turqouise-500">Mubeth Praditya</span>
            </p>
            <div className="flex gap-7 mt-5 flex-wrap w-full justify-center">
              <p className="flex items-center">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                {booking.day}, {booking.date}
              </p>
              <p className="flex items-center">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />
                {booking.clock}
              </p>
            </div>
            <button className="w-full bg-turqouise-500 text-white p-3 rounded-lg mt-10">Kirim Pesan</button>
            <button
              onClick={closeModal}
              className="w-full bg-white border-2 border-turqouise-500 text-turqouise-500 p-3 rounded-lg mt-3"
            >
              Nanti saja
            </button>
          </Box>
        </Modal>
      );
  }
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [booking, setBooking] = useState({
    day: '',
    date: '',
    clock: '',
  });
  const [active, setActive] = useState(null);
  const [activeClock, setActiveClock] = useState(null);

  return (
    <FullLayout isMentor={true}>
      <BookModal open={isOpen} close={setIsOpen} booking={booking} />
      <div className="bg-yellow-200 h-72 w-full relative">
        <div className="flex justify-center">
          <div className="absolute top-48 w-[70%]">
            <div className="flex items-end gap-3 mb-10">
              <div className="rounded-full border-4 border-white h-52 w-52 bg-red-200 overflow-hidden ">
                <img
                  alt="test"
                  src="../../../public/thumbnail.avif"
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
                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
                      </div>
                    </ListCard>

                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
                      </div>
                    </ListCard>

                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
                      </div>
                    </ListCard>
                  </div>
                </MentorProfileCard>

                <MentorProfileCard>
                  <h2 className="font-semibold text-[18px] mb-3.5">Experiences</h2>
                  <div className="flex flex-col gap-5">
                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
                      </div>
                    </ListCard>

                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
                      </div>
                    </ListCard>

                    <ListCard>
                      <div className="flex-1">
                        <h2 className="text-[18px] font-semibold">Institut Teknologi Bandung</h2>
                        <p className="text-[14px]">Doctoral Programs, Computer Science</p>
                        <p className="text-[14px] font-light">2015 - 2019</p>
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
                      <p className="text-[14px] text-neutral-500">F. Hamami, IA Dahlan</p>
                      <p className="text-[14px] text-neutral-500">
                        2020 International Conference on Advancement in Data Science, E-learning, and...
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-blue-500">
                        Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                      </h3>
                      <p className="text-[14px] text-neutral-500">F. Hamami, IA Dahlan</p>
                      <p className="text-[14px] text-neutral-500">
                        2020 International Conference on Advancement in Data Science, E-learning, and...
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-blue-500">
                        Univariate time series data forecasting of air pollution using LSTM neural network{' '}
                      </h3>
                      <p className="text-[14px] text-neutral-500">F. Hamami, IA Dahlan</p>
                      <p className="text-[14px] text-neutral-500">
                        2020 International Conference on Advancement in Data Science, E-learning, and...
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
                    <h2 className="text-[18px] font-bold">Jadwal Tersedia</h2>
                    <hr className="mb-5 mt-3" />
                    <div className="flex gap-5">
                      {dayBook.map((data) => {
                        return (
                          <CalendarCard
                            {...data}
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
                      Book Jadwal 1:1 Mentoring
                    </button>

                    <button className="p-2.5 w-full rounded-lg border border-turqouise-500 text-turqouise-500 mt-5">
                      <ChatOutlinedIcon className="text-turqouise-500 mr-2" fontSize="small" />
                      Kirim Pesan
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
                              Pernah mentoring dengan pak Faqih ngebahas apa yang perlu disiapin buat jadi Data
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
                              Pernah mentoring dengan pak Faqih ngebahas apa yang perlu disiapin buat jadi Data
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

BookModal.propTypes = {
  open: PropTypes.boolean,
  close: PropTypes.func,
};

CalendarCard.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slots: PropTypes.string.isRequired,
};

export default Profile;
