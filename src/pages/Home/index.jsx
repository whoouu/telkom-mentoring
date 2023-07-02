/* eslint-disable no-undef */
import Layout from '../../components/Layout/Layout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import MentorCard from '../../components/Card/MentorCard';
import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';

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

const NotificationCard = () => {
  return (
    <div className="border rounded-lg p-5">
      <div className="flex justify-between">
        <p>
          Sesi mentoring bareng <span className="text-red-300">Mubeth Praditya</span>
        </p>
        <p className="text-neutral-400 text-[16px] font-light">Details</p>
      </div>

      {/* info */}
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
      <button className="bg-neutral-900 text-white rounded-lg py-3 px-5 mt-7 text-[16px]">Join with google meet</button>
      <p className="text-neutral-600 mt-2 text-[14px]">meet.google.com/xgr-scxs-pkg</p>
    </div>
  );
};

const BookModal = ({ open, close }) => {
  return (
    <Modal open={open} onClose={() => close(false)} className="flex items-center justify-center">
      <Box className="bg-white rounded-lg w-fit px-5 py-7 w-[594px]">
        <h1 className="mb-3 font-bold text-[24px] text-center">Reschedule Jadwal Sesi 1:1 Mentoring</h1>
        <hr className="mb-5" />
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
          <img src="../../../public/default-person.avif" alt="test" />
        </div>
        <p className="text-center my-3.5">
          Sesi Mentoring dengan <span className="text-turqouise-500">Mubeth Praditya</span>
        </p>

        <p className="text-neutral-500 text-[14px] font-normal text-center mb-4">Jadwal Baru</p>
        <div className="flex gap-3">
          <div className="rounded-lg border border-neutral-400 p-3 w-full">
            <p className="text-red-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Lama</p>
            <div className="flex gap-2 justify-between flex-wrap w-full">
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                Minggu, Mei 28
              </p>
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />
                Senin, Mei 29
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-400 p-3 w-full">
            <p className="text-turqouise-500 font-semibold text-[14px] text-center mb-2.5">Jadwal Baru</p>
            <div className="flex gap-2 justify-between flex-wrap w-full">
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
                Minggu, Mei 28
              </p>
              <p className="text-[14px] flex">
                <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />
                Senin, Mei 29
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

const Home = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (window !== null) {
      const data = window.sessionStorage.getItem('booking');
      setBooking(JSON.parse(data));
    }
  }, [window]);

  console.log(booking);
  return (
    <Layout rightSidebar={<RightSidebar />}>
      {/* left side */}
      <div className="flex-1 overflow-auto py-8 px-14">
        <h1 className="text-[28px] font-bold mb-5">Welcome, Harris</h1>
        {booking ? (
          <NotificationCard />
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
          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
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
