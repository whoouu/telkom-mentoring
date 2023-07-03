import { Box } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Schedule = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CalendarCard = ({ index }) => {
    return <div className="p-3 bg-neutral-100 h-32 w-full text-center rounded-lg">{index}</div>;
  };

  return (
    <Layout isMentor={true}>
      <div className="w-full px-24">
        <div className="flex items-center justify-between py-16">
          <div>
            <h1 className="text-[22px] font-semibold">May 2023</h1>
            <p>Waktu booking akan mengikuti Waktu Indonesia Barat</p>
          </div>
          <button className="bg-turqouise-500 p-3 rounded-lg flex items-center gap-3 text-white">
            <img alt="test" src="/icon-calendar.svg" className="text-[14px] text-white" />
            Connected to Google Calendar
          </button>
        </div>

        <div className="grid grid-cols-7 gap-5">
          <p className="text-[18px] text-semibold text-center">SUN</p>
          <p className="text-[18px] text-semibold text-center">MON</p>
          <p className="text-[18px] text-semibold text-center">TUE</p>
          <p className="text-[18px] text-semibold text-center">WED</p>
          <p className="text-[18px] text-semibold text-center">THU</p>
          <p className="text-[18px] text-semibold text-center">FRI</p>
          <p className="text-[18px] text-semibold text-center">SAT</p>

          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31,
          ].map((data, index) => {
            return <CalendarCard index={data} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
