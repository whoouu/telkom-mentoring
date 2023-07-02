/* eslint-disable react/prop-types */
import navigationList from '../../constants/navigation';
import Header from '../Header';

const FullLayout = ({ children }) => {
  return (
    <div className="w-full h-[87.5vh]">
      <Header data={navigationList} />
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
};

export default FullLayout;
