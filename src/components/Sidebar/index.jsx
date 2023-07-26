/* eslint-disable react/prop-types */
// import { Icon } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ data, name }) => {
  return (
    <div className="border pl-20 border-r h-full">
      <div className="flex flex-col gap-8 pr-10 pt-14">
        <div className="flex gap-3 items-center">
          <div className="rounded-full w-14 h-14 bg-contain overflow-hidden">
            <img alt="test" src="/default-person.avif" />
          </div>
          <div>
            <h1>{name}</h1>
            <Link to={'/profile'} className="text-neutral-400 text-sm">
              Lihat Profile
            </Link>
          </div>
        </div>
        {data.map((navigation) => {
          return (
            <Link key={navigation.id} to={navigation.link} className="flex items-center gap-3">
              <img alt="icon" src={navigation.icon} />
              {navigation.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
