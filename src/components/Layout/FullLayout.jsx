/* eslint-disable react/prop-types */
import { navigationList, navigationListMentor } from '../../constants/navigation';
import Header from '../Header';

const FullLayout = ({ children, isMentor }) => {
  return (
    <div className="w-full h-[87.5vh]">
      <Header data={isMentor ? navigationListMentor : navigationList} />
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
};

export default FullLayout;
