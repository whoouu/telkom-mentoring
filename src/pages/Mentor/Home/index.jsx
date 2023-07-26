/* eslint-disable no-undef */
import Layout from '../../../components/Layout/Layout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, MenuItem, Modal, OutlinedInput, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { clockBook, dayBook } from '../../../constants/bookingMentor';
import { CalendarCard } from '../../Mentee/MentorProfile';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const RightSidebar = () => {
  const [active, setActive] = useState(null);
  const [activeClock, setActiveClock] = useState(null);

  return (
    <>
      {/* right side */}
      <div className="flex-2 pr-20 pl-10 pt-10">
        <div className="mb-3 border rounded-lg p-3 w-[366px]">
          <h2 className="text-[18px] font-bold">Jadwal Tersedia</h2>
          <hr className="mb-5 mt-3" />
          <div className="flex gap-5">
            {dayBook.map((data) => {
              return (
                <CalendarCard
                  {...data}
                  key={data.id}
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
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <button
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
                </button>
              );
            })}
          </div>

          <button onClick={() => setIsOpen(true)} className="p-2.5 w-full rounded-lg bg-turqouise-500 text-white mt-5">
            <AddOutlinedIcon />
            Tambah Jadwal Tersedia
          </button>
        </div>
        <div className="border rounded-lg p-5 w-[366px]">
          <h2 className="text-[20px] mb-5">Review</h2>
          <div className="flex gap-2.5 mb-5">
            <img alt="img" src="/default-person.avif" className="rounded-full w-16 h-16 object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold text-[20px]">Karyo</h3>
              <p className="text-[14px]">S1 Sistem Informasi</p>
              <p className="text-[12px]">13 Maret 2023</p>
            </div>
          </div>
          <p>
            Pernah mentoring dengan pak Faqih ngebahas apa yang perlu disiapin buat jadi data scientist, dari sesi
            mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat yang perlu disiapin selama kuliah.
          </p>
        </div>
      </div>
    </>
  );
};

const NotificationCard = ({ reschedule, isOpenModal }) => {
  const [expanded, setExpanded] = useState(false);
  if (reschedule) {
    return (
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
                <p className="inline text-[18px]">Anakin Skywalker</p>
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
    );
  }
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
  const [openModal, setOpenModal] = useState(false);

  const FinishModal = ({ setClose, setClosePrevModal }) => {
    return (
      <Box className="bg-white rounded-lg px-5 py-7 w-[594px]">
        <img className="mx-auto my-5" alt="success-icon" src="/public/success-icon.svg" />
        <h3 className="text-center font-bold text-[22px]">Berhasil Membuat Jadwal 1:1 Mentoring!</h3>
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
          <img src="../../../public/default-person.avif" alt="test" />
        </div>
        <p className="text-center my-3.5">
          Sesi Mentoring dengan <span className="text-red-500">Anakin Skywalker</span>
        </p>

        <p className="text-center text-gray-400">Jadwal Baru</p>

        <div className="flex gap-5 mx-auto mt-5 justify-between flex-wrap w-fit">
          <p className="text-[14px] flex">
            <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
            Sabtu, Mei 28
          </p>
          <p className="text-[14px] flex">
            <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30 PM
          </p>
        </div>

        <button
          onClick={() => {
            setClose(false);
            setClosePrevModal(false);
          }}
          className="bg-neutral-900 text-white w-full rounded-lg p-3 mt-5"
        >
          Kembali
        </button>
      </Box>
    );
  };
  const ConfirmBookModal = ({ setClose, setClosePrevModal }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
      <Box className="bg-white rounded-lg px-5 py-7 w-[594px]">
        {openModal && (
          <Modal
            open={openModal}
            className="flex items-center justify-center"
            onClose={() => {
              close(false);
              setOpenModal(false);
            }}
          >
            <FinishModal setClosePrevModal={setClosePrevModal} setClose={close} />
          </Modal>
        )}
        <h1 className="mb-3 font-bold text-[24px] text-center">Reschedule Jadwal Sesi 1:1 Mentoring Berhasil!</h1>
        <hr className="mb-5" />
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
          <img src="../../../public/default-person.avif" alt="test" />
        </div>
        <p className="text-center my-3.5">
          Sesi Mentoring dengan <span className="text-red-500">Anakin Skywalker</span>
        </p>
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

        <div className="my-4">
          <p className="text-gray-400">pesan</p>
          <p>Hi Name. Boleh reschedule ke jam ini nggak soalnya saya ada acara mendadak </p>
        </div>

        <div className="flex flex-col mt-5 gap-3">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="bg-neutral-900 text-white w-full rounded-lg p-3"
          >
            Reschedule
          </button>

          <button
            onClick={() => {
              setClose(false);
              setClosePrevModal(false);
            }}
            className="text-neutral-900 bg-white border border-neutral-900 w-full rounded-lg p-3"
          >
            Kirim Pesan Langsung
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
            Sesi Mentoring dengan <span className="text-red-500">Mubeth Praditya</span>
          </p>

          <div className="flex gap-10 mx-auto justify-between flex-wrap w-fit">
            <p className="text-[14px] flex">
              <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
              Sabtu, Mei 28
            </p>
            <p className="text-[14px] flex">
              <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30 PM
            </p>
          </div>

          <h3 className="my-5 text-[22px] font-bold">Buat Jadwal Baru Anda</h3>
          <div className="mb-8">
            <p className="mb-3">Pilih Tanggal Kosongmu</p>
            <DatePicker className="w-full" />
          </div>

          <div className="mb-8">
            <p className="mb-3">Pilih Waktu Kosongmu</p>
            <div className="flex gap-5 mb-5">
              <img alt="icon" src="/public/clock-icon.svg" />
              <Select label="end" className="w-32">
                <MenuItem value={'8.00'}>8.00pm</MenuItem>
                <MenuItem value={'8.10'}>8.10pm</MenuItem>
                <MenuItem value={'8.20'}>8.20pm</MenuItem>
                <MenuItem value={'9.10'}>9.10pm</MenuItem>
                <MenuItem value={'9.20'}>9.20pm</MenuItem>
              </Select>

              <Select label="start" className="w-32">
                <MenuItem value={'8.00'}>8.00pm</MenuItem>
                <MenuItem value={'8.10'}>8.10pm</MenuItem>
                <MenuItem value={'8.20'}>8.20pm</MenuItem>
                <MenuItem value={'9.10'}>9.10pm</MenuItem>
                <MenuItem value={'9.20'}>9.20pm</MenuItem>
              </Select>
            </div>

            <div>
              <p className="mb-3">Buat pesan anda</p>
              <OutlinedInput className="w-full" placeholder="tuliskan pesan anda disini..." />
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-3">
            <button onClick={() => setOpenModal(true)} className="bg-neutral-900 text-white w-full rounded-lg p-3">
              Konfirmasi
            </button>
            <button className="bg-white text-neutral-900 w-full border border-neutral-900 rounded-lg p-3">
              Kirim Pesan Langsung
            </button>
          </div>
        </Box>
      </>
    </Modal>
  );
};

const HomeMentor = () => {
  const [booking, setBooking] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (window !== null) {
      const data = window.sessionStorage.getItem('booking');
      setBooking(JSON.parse(data));
    }
  }, [window]);

  return (
    <Layout isMentor={true} rightSidebar={<RightSidebar />}>
      {/* left side */}
      <BookModal open={openModal} close={setOpenModal} />
      <div className="flex-1 overflow-auto py-8 px-14">
        <h1 className="text-[28px] font-bold mb-2">Welcome</h1>
        <p className="text-[16px] text-neutral-600 mb-5">
          Selamat datang di Telkom Mentoring! Anda dapat menambah{' '}
          <span className="text-turqouise-500">Jadwal Tersedia</span>
        </p>

        <div className="flex flex-col gap-10 mb-10">
          <NotificationCard />
          <NotificationCard reschedule={true} isOpenModal={setOpenModal} />
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
