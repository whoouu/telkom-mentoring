/* eslint-disable react/prop-types */
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { talents } from '../../../constants/talents';

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
        <Box sx={{ py: 3 }}>
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

const CardTalent = (props) => {
  return (
    <div className="w-full bg-white p-5 rounded-lg border border-neutral-800">
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="rounded-full w-14 h-14 overflow-hidden">
          <img alt="test" src="/default-person.avif" />
        </div>

        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold text-[24px]">{props.name}</h1>
          <p className="text-[14px]">{props.class}</p>
        </div>

        <IconButton className="w-10 h-10">
          <LinkedInIcon />
        </IconButton>
      </div>

      {/* body card */}
      <div className="flex justify-between items-center my-3">
        <div className="flex gap-3 items-center">
          <AccessTimeIcon />
          <p className="text-[14px]">Last mentoring</p>
        </div>
        <p>{props.updatedMentoring}</p>
      </div>

      <div className="flex justify-between items-center my-3">
        <div className="flex gap-3">
          <AccessTimeIcon />
          <p className="text-[14px]">Interest</p>
        </div>
        <div className="flex gap-3 text-[14px]">
          {props.interest &&
            props.interest.map((data, index) => {
              return (
                <p key={index} className="p-3 rounded-lg border border-neutral-800">
                  {data}
                </p>
              );
            })}
        </div>
      </div>

      <div className="flex justify-between items-center my-3">
        <div className="flex gap-3">
          <AccessTimeIcon />
          <p className="text-[14px]">Skill</p>
        </div>
        <div className="flex gap-3 text-[14px]">
          {props.skill &&
            props.skill.map((data, index) => {
              return (
                <p key={index} className="p-3 rounded-lg bg-red-100">
                  {data}
                </p>
              );
            })}
        </div>
      </div>

      <div className="w-full flex gap-3 mt-4">
        <button className="p-3 rounded-lg border border-neutral-800">
          <BookmarkBorderOutlinedIcon />
        </button>
        <button className="flex-1 p-3 bg-neutral-800 rounded-lg text-white">Kirim Pesan</button>
      </div>
    </div>
  );
};

const TalentMentor = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout isMentor={true}>
      <div className="w-full px-10 py-5 overflow-auto">
        <div className="relative w-full">
          <div className="absolute text-white bottom-10 left-10">
            <h1 className="text-[28px] font-semibold">Temukan talents anda sekarang!</h1>
            <p className="text-[18px] mb-5">Anda bisa mencari talents dari mahasiswa yang pernah anda mentoring!</p>
            <button className="bg-gradient-to-b from-[#FF3E8F] to-[#FFBA8F] rounded-lg p-3 text-neutral-800 flex gap-3 items-center">
              <img alt="test" src="/send.png" />
              Discover Now
            </button>
          </div>
          <img alt="test" src="/banner-home.png" className="w-full object-fit" />
        </div>

        <Box className="mt-5">
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Talents" {...a11yProps(0)} className="mr-5" />
            <Tab label="Saved" {...a11yProps(0)} className="mr-5" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-2 p-0 gap-8">
            {talents.map((data) => {
              return <CardTalent {...data} key={data.id} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex flex-col gap-5"></div>
        </TabPanel>
      </div>
    </Layout>
  );
};

export default TalentMentor;
