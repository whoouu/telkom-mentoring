import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcoming from './Mentee/Welcoming';
import Registration from './Mentee/Registration';
import Home from './Mentee/Home';
import Bookings from './Mentee/Bookings';
import Notification from './Mentee/Notification';
import Mentors from './Mentee/Mentors';
import MentorProfile from './Mentee/MentorProfile';
import ChooseMentor from './Mentee/Registration/chooseMentor';
// mentor
import MentorLogin from './Login/mentor-login';
import WelcomingMentor from './Mentor/Welcoming';
import RegistrationMentor from './Mentor/Registration';
import HomeMentor from './Mentor/Home';
import BookingMentor from './Mentor/Booking';
import Schedule from './Mentor/Schedule';
import Messages from './Mentee/Messages';
import MessagesMentor from './Mentor/Messages';
import TalentMentor from './Mentor/Talent';
import Profile from './Mentor/profile';
import ProfileMentee from './Mentee/ProfileMentee';
import SearchPage from "./Mentee/Search/index.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/welcoming" element={<Welcoming />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/choose-mentor" element={<ChooseMentor />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/mentor" element={<Mentors />} />
      <Route path="/mentor-profile" element={<MentorProfile />} />
      <Route path="/profile" element={<ProfileMentee />} />
      <Route path={'/search'} element={<SearchPage />} />

      {/* mentor link */}
      <Route path="/admin" element={<MentorLogin />} />
      <Route path="/admin/welcoming-mentor" element={<WelcomingMentor />} />
      <Route path="/admin/register" element={<RegistrationMentor />} />
      <Route path="/admin/home" element={<HomeMentor />} />
      <Route path="/admin/bookings" element={<BookingMentor />} />
      <Route path="/admin/schedule" element={<Schedule />} />
      <Route path="/admin/messages" element={<MessagesMentor />} />
      <Route path="/admin/talent" element={<TalentMentor />} />
      <Route path="/admin/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
