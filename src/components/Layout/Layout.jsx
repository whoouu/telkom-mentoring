/* eslint-disable react/prop-types */
import { navigationList, navigationListMentor } from '../../constants/navigation';
import { navigationSidebar, navigationSidebarMentor } from '../../constants/navigationSidebars';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children, rightSidebar, isMentor }) => {
  return (
    <div className="w-full h-[87.5vh]">
      <Header data={isMentor ? navigationListMentor : navigationList} />
      <div className="flex h-full">
        <Sidebar
          name={isMentor ? 'Mubeth Praditya' : 'Muhammad Harris Hassan'}
          data={isMentor ? navigationSidebarMentor : navigationSidebar}
        />
        {children}
        {rightSidebar}
      </div>
    </div>
  );
};

export default Layout;
