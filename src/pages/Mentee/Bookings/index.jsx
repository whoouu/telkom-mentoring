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
const Bookings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className="w-3/5 px-20 py-8">
        <h1 className="text-[26px] font-bold mb-3">Bookings</h1>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Akan datang" {...a11yProps(0)} className="mr-5" />
              <Tab label="Riwayat" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="border rounded-lg p-5">
              <div className="flex justify-between">
                <p>
                  Sesi mentoring bareng <span className="text-red-300">Mubeth Praditya</span>
                </p>
                <p className="text-neutral-400 text-[16px] font-light">Details</p>
              </div>

              {/* info */}
              <div className="flex gap-10 mt-5">
                <div className="flex items-center">
                  <img alt="test" src="/icon-calendar.svg" className="mr-2" />
                  <p>Sabtu, Mei 28</p>
                </div>
                <div className="flex items-center">
                  <img alt="test" src="/Sidebar/icon-booking.svg" className="mr-2" />
                  <p>9 PM - 10 PM</p>
                </div>
              </div>

              {/* body */}
              <button className="bg-neutral-900 text-white rounded-lg py-3 px-5 mt-7 text-[16px]">
                Join with google meet
              </button>
              <p className="text-neutral-600 mt-2 text-[14px]">meet.google.com/xgr-scxs-pkg</p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </div>
    </Layout>
  );
};

export default Bookings;
