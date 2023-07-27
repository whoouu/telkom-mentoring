/* eslint-disable react/prop-types */
import { OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import useMentoringStore from '../../stateManagement/store';
import { useState } from 'react';

const Header = ({ data }) => {
  const [isHide, setIsHide] = useState(false);
  const notificationCount = useMentoringStore((state) => state.notifCount);
  if (data) {
    return (
      <div className="bg-white border-b border-neutral-300 w-full py-5 px-20 flex items-center justify-between sticky top-0 z-10">
        <img alt="test" src="/Navbar/Frame 2472.svg" />
        <div className="p-3 flex gap-10 items-center w-1/2 justify-between">
          <div className="flex gap-10 flex-1">
            {data.map((navigation) => {
              return (
                <Link key={navigation.id} to={navigation.link}>
                  {navigation.title}
                </Link>
              );
            })}
          </div>
          <OutlinedInput type="text" endAdornment={<SearchIcon />} />
        </div>
        <div className="relative">
          <p className="text-white bg-red-400 rounded-full w-5 h-5 text-center text-[12px] absolute left-3 bottom-3">
            {notificationCount}
          </p>
          <button onClick={() => setIsHide(!isHide)}>
            <NotificationsNoneOutlinedIcon />
          </button>

          {isHide && (
            <div className="bg-white border p-3 rounded-lg absolute top-10 right-0 w-[440px]">
              <h1 className="font-semiold text-[24px]">Notifications</h1>
              <div className="flex gap-4">
                <img className="rounded-full object-cover w-12 h-12" alt="foto" src="/default-person.avif" />
                <div className="flex-1">
                  <p className="mb-3">
                    <span className="text-turqouise-600">Faqih Hammami</span> request untuk reschedule
                  </p>
                  <button className="border rounded-lg p-3 border-neutral-500 text-neutral-500">Lihat Jadwal</button>
                </div>
                <p>30 menit lalu</p>
              </div>

              {/* without button */}
              <div className="flex gap-4 mb-3">
                <img className="rounded-full object-cover w-12 h-12" alt="foto" src="/default-person.avif" />
                <div className="flex-1">
                  <p className="mb-3">
                    <span className="text-turqouise-600">Faqih Hammami</span> request untuk reschedule
                  </p>
                </div>
                <p>30 menit lalu</p>
              </div>
              <div className="flex gap-4 mb-3">
                <img className="rounded-full object-cover w-12 h-12" alt="foto" src="/default-person.avif" />
                <div className="flex-1">
                  <p className="mb-3">
                    <span className="text-turqouise-600">Faqih Hammami</span> request untuk reschedule
                  </p>
                </div>
                <p>30 menit lalu</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white border-b border-neutral-300 w-full py-5 px-20 flex items-center justify-start">
      <img alt="test" src="/Navbar/Frame 2472.svg" />
    </div>
  );
};

export default Header;
