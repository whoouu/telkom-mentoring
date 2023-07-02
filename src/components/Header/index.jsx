/* eslint-disable react/prop-types */
import { OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import useMentoringStore from '../../stateManagement/store';

const Header = ({ data }) => {
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
          <NotificationsNoneOutlinedIcon />
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
