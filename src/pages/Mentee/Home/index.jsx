/* eslint-disable no-undef */
import Layout from '../../../components/Layout/Layout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import MentorCard from '../../../components/Card/MentorCard';
import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import useMentoringStore from '../../../stateManagement/store';

const RightSidebar = () => {
  return (
    <>
      {/* right side */}
      <div className="flex-2 pr-20 pl-10 pt-10">
        <div className="border rounded-lg p-5 w-[366px]">
          <h2 className="text-[20px] mb-5">Topik lain untukmu</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p>Siapkan Internship Pertamamu</p>
              <p className="text-[12px]">10+ Mentor</p>
            </div>
            <ChevronRightIcon />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p>ChatGPT Hacks</p>
              <p className="text-[12px]">oleh Luthfi Adriansyah, Ph.D</p>
            </div>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationCard = ({ totalMentoring, isOpenModal }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="border rounded-lg p-5">
        <div className="flex justify-between">
          <p>
            Sesi mentoring bareng <span className="text-red-300">Mubeth Praditya</span>
          </p>
          <button className="text-neutral-400 text-[16px] font-light" onClick={() => setExpanded(!expanded)}>
            Details
          </button>
        </div>
        {/* <div className="flex gap-10 mt-5">
        <div className="flex items-center">
          <img alt="test" src="/icon-calendar.svg" className="mr-2" />
          <p>Sabtu, Mei 28</p>
        </div>
        <div className="flex items-center">
          <img alt="test" src="/Sidebar/icon-booking.svg" className="mr-2" />
          <p>9 PM - 10 PM</p>
        </div>
      </div> */}

        {expanded && (
          <div>
            <p className="text-neutral-500 text-[16px] my-3">Mentor</p>

            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img alt="test" src="/default-person.avif" />
              </div>
              <div className="flex flex-col justify-center w-full">
                <p className="inline text-[18px]">Mubeth Praditya</p>
                <p className="inline text-[14px] text-neutral-400">Online</p>
              </div>
            </div>

            <p className="text-neutral-500 text-[16px] mb-2.5">Catatan: </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed viverra ligula, et pharetra diam. Nulla
              facilisi. Mauris vitae lacus tellus. Suspendisse euismod diam vitae dapibus vulputate. Sed viverra
              efficitur purus efficitur mattis. Duis vel diam eget urna suscipit fringilla. Donec at purus molestie,
              bibendum elit id, feugiat sapien.
            </p>
            <p className="text-neutral-500 text-[16px] my-2.5">Pesan</p>
            <p>Hi Name. Boleh reschedule ke jam ini nggak soalnya saya ada acara mendadak </p>
          </div>
        )}

        {/* info */}
        {/* <h1 className="text-[18px] mb-3 mt-5">Request untuk Reschedule</h1>
      <p className="text-neutral-500 text-[16px]">Jadwal Baru</p> */}
        <div className="flex gap-10 mt-5">
          <div className="flex items-center">
            <img alt="test" src="/icon-calendar.svg" className="mr-2" />
            <p>Sabtu, Mei 28</p>
          </div>
          <div className="flex items-center">
            <img alt="test" src="/Sidebar/icon-booking.svg" className="mr-2" />
            <p>9 PM - 10 PM</p>
          </div>
        </div>

        {/* body */}
        <button className="bg-neutral-900 text-white rounded-lg py-3 px-5 mt-7 text-[16px]">
          Join with google meet
        </button>
        <p className="text-neutral-600 mt-2 text-[14px]">meet.google.com/xgr-scxs-pkg</p>
      </div>

      {totalMentoring > 1 && (
        <div className="border rounded-lg p-5 mt-5">
          <div className="flex justify-between">
            <p>
              Request Reschedule Sesi mentoring bareng <span className="text-red-300">Mubeth Praditya</span>
            </p>
            <button className="text-neutral-400 text-[16px] font-light" onClick={() => setExpanded(!expanded)}>
              Details
            </button>
          </div>

          {expanded && (
            <div>
              <p className="text-neutral-500 text-[16px] my-3">Mentor</p>

              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="test" src="/default-person.avif" />
                </div>
                <div className="flex flex-col justify-center w-full">
                  <p className="inline text-[18px]">Mubeth Praditya</p>
                  <p className="inline text-[14px] text-neutral-400">Online</p>
                </div>
              </div>

              <p className="text-neutral-500 text-[16px] mb-2.5">Catatan: </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed viverra ligula, et pharetra diam. Nulla
                facilisi. Mauris vitae lacus tellus. Suspendisse euismod diam vitae dapibus vulputate. Sed viverra
                efficitur purus efficitur mattis. Duis vel diam eget urna suscipit fringilla. Donec at purus molestie,
                bibendum elit id, feugiat sapien.
              </p>
              <p className="text-neutral-500 text-[16px] my-2.5">Pesan</p>
              <p>Hi Name. Boleh reschedule ke jam ini nggak soalnya saya ada acara mendadak </p>
            </div>
          )}

          {/* info */}
          <h1 className="text-[18px] mb-3 mt-5">Request untuk Reschedule</h1>
          <p className="text-neutral-500 text-[16px]">Jadwal Baru</p>
          <div className="flex gap-10 mt-5 text-turqouise-400">
            <div className="flex items-center">
              <img alt="test" src="/icon-calendar.svg" className="mr-2" />
              <p>Sabtu, Mei 28</p>
            </div>
            <div className="flex items-center">
              <img alt="test" src="/Sidebar/icon-booking.svg" className="mr-2" />
              <p>9 PM - 10 PM</p>
            </div>
          </div>

          {/* body */}
          <div className="flex gap-5">
            <button
              onClick={() => isOpenModal(true)}
              className="bg-neutral-900 text-white rounded-lg py-3 px-5 mt-7 text-[16px]"
            >
              Terima Jadwal Reschedule
            </button>
            <button className="text-neutral-900 bg-white border border-neutral-900 rounded-lg py-3 px-5 mt-7 text-[16px]">
              Kirim Pesan
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const BookModal = ({ open, close }) => {
  const [openModal, setOpenModal] = useState(false);
  const ConfirmBookModal = ({ setClose, setClosePrevModal }) => {
    return (
      <Box className="bg-white rounded-lg px-5 py-7 w-[594px]">
        <img className="mx-auto my-5" alt="success-icon" src="/public/success-icon.svg" />
        <h1 className="mb-3 font-bold text-[24px] text-center">Reschedule Jadwal Sesi 1:1 Mentoring Berhasil!</h1>
        <hr className="mb-5" />
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
          <img src="../../../public/default-person.avif" alt="test" />
        </div>
        <p className="text-center my-3.5">
          Sesi Mentoring dengan <span className="text-turqouise-500">Muhammad Harris Hassan</span>
        </p>

        <p className="text-neutral-500 text-[14px] font-normal text-center mb-4">Jadwal Baru</p>
        <div className="flex gap-3">
          <div className="rounded-lg border border-neutral-400 p-3 w-full">
            <p className="text-red-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Lama</p>
            <div className="flex gap-2 justify-between flex-wrap w-full">
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                Sabtu, Mei 28
              </p>
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30 PM
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-400 p-3 w-full">
            <p className="text-turqouise-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Baru</p>
            <div className="flex gap-2 justify-between flex-wrap w-full">
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                Rabu, Mei 28
              </p>
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-3">
          <button
            onClick={() => {
              setClose(false);
              setClosePrevModal(false);
            }}
            className="bg-neutral-900 text-white w-full rounded-lg p-3"
          >
            Kembali
          </button>
        </div>
      </Box>
    );
  };

  return (
    <Modal open={open} onClose={() => close(false)} className="flex items-center justify-center">
      <>
        {openModal && (
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
        )}
        <Box className="bg-white rounded-lg px-5 py-7 w-[594px]">
          <h1 className="mb-3 font-bold text-[24px] text-center">Reschedule Jadwal Sesi 1:1 Mentoring</h1>
          <hr className="mb-5" />
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
            <img src="../../../public/default-person.avif" alt="test" />
          </div>
          <p className="text-center my-3.5">
            Sesi Mentoring dengan <span className="text-turqouise-500">Muhammad Harris Hassan</span>
          </p>

          <p className="text-neutral-500 text-[14px] font-normal text-center mb-4">Jadwal Baru</p>
          <div className="flex gap-3">
            <div className="rounded-lg border border-neutral-400 p-3 w-full">
              <p className="text-red-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Lama</p>
              <div className="flex gap-2 justify-between flex-wrap w-full">
                <p className="text-[14px] flex">
                  <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                  Sabtu, Mei 28
                </p>
                <p className="text-[14px] flex">
                  <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30
                  PM
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-neutral-400 p-3 w-full">
              <p className="text-turqouise-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Baru</p>
              <div className="flex gap-2 justify-between flex-wrap w-full">
                <p className="text-[14px] flex">
                  <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                  Rabu, Mei 28
                </p>
                <p className="text-[14px] flex">
                  <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30
                  PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <button onClick={() => setOpenModal(true)} className="bg-neutral-900 text-white w-full rounded-lg p-3">
              Ya Konfirmasi
            </button>
            <button className="bg-white text-neutral-900 w-full border border-neutral-900 rounded-lg p-3">
              Kirim Pesan
            </button>
          </div>
        </Box>
      </>
    </Modal>
  );
};

const nameMentor = [
  {
    id: 1,
    name: 'Peter Sutton',
    image:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Felix Lane',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: 3,
    name: 'Mathew Owens',
    image:
      'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: 4,
    name: 'Harvey Day',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
];

const Home = () => {
  const [booking, setBooking] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const bookCount = useMentoringStore((state) => state.notifCount);

  useEffect(() => {
    if (window !== null) {
      const data = window.sessionStorage.getItem('booking');
      setBooking(JSON.parse(data));
    }
  }, [window]);

  return (
    <Layout rightSidebar={<RightSidebar />}>
      {/* left side */}
      <div className="flex-1 overflow-auto py-8 px-14">
        <BookModal open={openModal} close={setOpenModal} />
        <h1 className="text-[28px] font-bold mb-5">Welcome, Harris</h1>
        {booking ? (
          <NotificationCard isOpenModal={setOpenModal} totalMentoring={bookCount} />
        ) : (
          <div className="mb-3">
            <p className="mb-3">Kamu tidak memiliki jadwal yang akan datang. Mari eksplor mentor baru untukmu.</p>
            <Link to={'/mentor'}>
              <button className="rounded-lg p-3 bg-turqouise-500 text-white">Explore Sekarang</button>
            </Link>
          </div>
        )}

        {/* card container description */}
        <div className="flex justify-between mt-5 mb-3">
          <p>Mentor yang sesuai preferensimu</p>
          <Link className="flex gap-2 text-[14px] items-center text-turqouise-500">
            Lihat Semua <ChevronRightIcon />
          </Link>
        </div>

        {/* card container */}
        <div className="grid md:grid-cols-2 gap-3.5 mb-4">
          {/* card */}
          {nameMentor.map((data) => {
            return (
              <MentorCard
                key={data.id}
                name={data.name}
                image={data.image}
                faculty={'Fakultas Rekayasa Industri'}
                count={7}
                skills={['Machine Learning', 'Data Science']}
                availableAt={'4 Mei 23, 8.30 PM'}
              />
            );
          })}
        </div>

        <h2 className="text-[18px] font-semibold mb-4">Temukan mentor seru berdasarkan topik</h2>
        <div className="flex justify-between w-full gap-10">
          <div className="bg-[#FFEFC4] relative overflow-hidden rounded-lg py-5 h-[258px] flex items-center justify-center py-5 pl-2.5 pr-3.5 w-full">
            <div className="absolute -top-[28%] -right-[28%] z-30 rounded-full w-[150px] h-[150px] bg-[#FBC415]"></div>
            <div className="absolute -top-[26%] -right-[26%] z-20 rounded-full w-[150px] h-[150px] bg-[#FAE396]"></div>
            <div className="absolute -top-[23%] -right-[23%] z-10 rounded-full w-[150px] h-[150px] bg-[#F9DA72]"></div>
            <div className="z-50">
              <h3 className="text-[18px] font-semibold mb-2.5">
                Mulai
                <br /> Belajar Dengan
                <br /> UX Design
              </h3>
              <p className="text-[12px]">
                Cari tahu tentang tren UX Design bersama para mentor yang expert, dapatkan insight baru! <br />
                <span className="text-blue-400">Cari sekarang</span>
              </p>
              <p>10+ Mentor</p>
            </div>
          </div>

          <div className="bg-[#FFEFC4] relative overflow-hidden rounded-lg py-5 h-[258px] flex items-center justify-center py-5 pl-2.5 pr-3.5 w-full">
            <div className="absolute -top-[28%] -right-[28%] z-30 rounded-full w-[150px] h-[150px] bg-[#FBC415]"></div>
            <div className="absolute -top-[26%] -right-[26%] z-20 rounded-full w-[150px] h-[150px] bg-[#FAE396]"></div>
            <div className="absolute -top-[23%] -right-[23%] z-10 rounded-full w-[150px] h-[150px] bg-[#F9DA72]"></div>
            <div className="z-50">
              <h3 className="text-[18px] font-semibold mb-2.5">
                Cari tahu
                <br /> Apa itu
                <br /> Dev Ops
              </h3>
              <p>10+ Mentor</p>
            </div>
          </div>

          <div className="bg-[#FFEFC4] relative overflow-hidden rounded-lg py-5 h-[258px] flex items-center justify-center py-5 pl-2.5 pr-3.5 w-full">
            <div className="absolute -top-[28%] -right-[28%] z-30 rounded-full w-[150px] h-[150px] bg-[#FBC415]"></div>
            <div className="absolute -top-[26%] -right-[26%] z-20 rounded-full w-[150px] h-[150px] bg-[#FAE396]"></div>
            <div className="absolute -top-[23%] -right-[23%] z-10 rounded-full w-[150px] h-[150px] bg-[#F9DA72]"></div>
            <div className="z-50">
              <h3 className="text-[18px] font-semibold mb-2.5">
                Kenapa kamu
                <br /> harus belajar
                <br /> Security Engineer
              </h3>
              <p>10+ Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
