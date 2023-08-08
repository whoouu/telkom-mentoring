import { Box, Modal } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

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
const BookingMentor = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ConfirmModal = ({ open, close }) => {
    return (
      <Modal open={open} onClose={() => close(false)} className="flex items-center justify-center">
        <Box className="bg-white px-3 py-5 rounded-lg w-[640px]">
          <img alt="icon" src="/public/success-icon.svg" className="mx-auto" />
          <h1 className="text-[28px] font-semibold text-center mt-5">Berhasil Membuat Jadwal 1:1 Mentoring</h1>
          <hr className="mb-7 mt-3" />
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-5">
            <img src="../../../public/default-person.avif" alt="test" />
          </div>

          <p className="text-center">
            Sesi Mentoring dengan <span className="text-red-400">Anakin Skywalker</span>
          </p>
          <p className="text-center my-5">Jadwal baru</p>
          <div className="flex gap-5 mx-auto justify-between flex-wrap w-fit mb-6">
            <p className="text-[14px] flex">
              <img className="w-5 h-5 mr-1" alt="test" src="../../../public/icon-calendar.svg" />
              Rabu, Mei 28
            </p>
            <p className="text-[14px] flex">
              <img className="w-5 h-5 mr-1" alt="test" src="../../../public/Sidebar/icon-booking.svg" />8 PM - 8.30 PM
            </p>
          </div>

          <button
            onClick={() => close(false)}
            className="border bg-neutral-900 text-white w-full rounded-lg py-3 px-5 text-[16px]"
          >
            Kembali
          </button>
        </Box>
      </Modal>
    );
  };

  const NotificationCard = ({ confirm }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    return (
      <>
        <ConfirmModal open={openConfirm} close={setOpenConfirm} />
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
          <div className="inline-flex gap-4 mt-5">
            <button
              onClick={() => (confirm ? setOpenConfirm(true) : null)}
              className="bg-neutral-900 text-white rounded-lg py-3 px-5 text-[16px]"
            >
              {confirm ? 'Konfirmasi Jadwal' : 'Join with google meet'}
            </button>

            <button className="border border-neutral-900 bg-white rounded-lg py-3 px-5 text-[16px]">Reschedule</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout isMentor={true}>
      <div className="w-3/5 px-20 py-8">
        <h1 className="text-[26px] font-bold mb-3">Bookings</h1>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Yang Akan datang" {...a11yProps(0)} className="mr-5" />
              <Tab label="Menunggu" {...a11yProps(0)} className="mr-5" />
              <Tab label="Selesai" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="flex flex-col gap-5">
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex flex-col gap-5">
              <NotificationCard confirm={true} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex flex-col gap-5">
              <NotificationCard />
            </div>
          </TabPanel>
        </Box>
      </div>
    </Layout>
  );
};

export default BookingMentor;
