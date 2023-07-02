import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcoming from './Welcoming';
import Registration from './Registration';
import Home from './Home';
import Bookings from './Bookings';
import Notification from './Notification';
import Mentors from './Mentors';
import MentorProfile from './MentorProfile';
import ChooseMentor from './Registration/chooseMentor';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/welcoming" element={<Welcoming />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/choose-mentor" element={<ChooseMentor />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/mentor" element={<Mentors />} />
      <Route path="/mentor-profile" element={<MentorProfile />} />
    </Routes>
  );
}

export default App;
