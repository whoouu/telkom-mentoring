/* eslint-disable no-undef */
import Layout from '../../../components/Layout/Layout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import MentorCard from '../../../components/Card/MentorCard';
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
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border rounded-lg p-5">
      <div className="flex justify-between">
        <p>
          Sesi mentoring bareng <span className="text-red-300">Mubeth Praditya</span>
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
              <p className="inline text-[18px]">Anakin Skywalker</p>
              <p className="inline text-[14px] text-neutral-400">Online</p>
            </div>
          </div>

          <p className="text-neutral-500 text-[16px] mb-2.5">Catatan: </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed viverra ligula, et pharetra diam. Nulla
            facilisi. Mauris vitae lacus tellus. Suspendisse euismod diam vitae dapibus vulputate. Sed viverra efficitur
            purus efficitur mattis. Duis vel diam eget urna suscipit fringilla. Donec at purus molestie, bibendum elit
            id, feugiat sapien.
          </p>
          <p className="text-neutral-500 text-[16px] my-2.5">Pesan</p>
          <p>Hi Name. Boleh reschedule ke jam ini nggak soalnya saya ada acara mendadak </p>
        </div>
      )}

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
      <p className="mb-8 mt-5">Konfirmasi Jadwal Mentoring?</p>
      <div className="inline-flex gap-4">
        <button className="bg-neutral-900 text-white rounded-lg py-3 px-5 text-[16px]">Join with google meet</button>

        <button className="border border-neutral-900 bg-white rounded-lg py-3 px-5 text-[16px]">Reschedule</button>
      </div>
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

const HomeMentor = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (window !== null) {
      const data = window.sessionStorage.getItem('booking');
      setBooking(JSON.parse(data));
    }
  }, [window]);

  console.log(booking);
  return (
    <Layout isMentor={true} rightSidebar={<RightSidebar />}>
      {/* left side */}
      <div className="flex-1 overflow-auto py-8 px-14">
        <h1 className="text-[28px] font-bold mb-5">Welcome</h1>
        <p className="text-[18px] mb-3">
          Selamat datang di Telkom Mentoring! Anda dapat menambah{' '}
          <span className="text-turqouise-500">Jadwal Tersedia</span>
        </p>

        <div className="flex flex-col gap-10 mb-10">
          <NotificationCard />
          <NotificationCard />
        </div>

        <div className="relative w-full">
          <div className="absolute text-white bottom-10 left-10">
            <h1 className="text-[28px] font-semibold">Temukan talents anda sekarang!</h1>
            <p className="text-[18px] mb-5">Anda bisa mencari talents dari mahasiswa yang pernah anda mentoring!</p>
            <button className="bg-gradient-to-b from-[#FF3E8F] to-[#FFBA8F] rounded-lg p-3 text-neutral-800 flex gap-3 items-center">
              <img alt="test" src="/send.png" />
              Discover Now
            </button>
          </div>
          <img alt="test" src="/banner-home.png" className="w-full object-fit" />
        </div>
      </div>
    </Layout>
  );
};

export default HomeMentor;
