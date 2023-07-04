/* eslint-disable react/prop-types */
import { navigationSidebar, navigationSidebarMentor } from '../../constants/naivgationSidebar';
import { navigationList, navigationListMentor } from '../../constants/navigation';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children, rightSidebar, isMentor }) => {
  return (
    <div className="w-full h-[87.5vh]">
      <Header data={isMentor ? navigationListMentor : navigationList} />
      <div className="flex h-full">
        <Sidebar data={isMentor ? navigationSidebarMentor : navigationSidebar} />
        {children}
        {rightSidebar}
      </div>
    </div>
  );
};

export default Layout;
