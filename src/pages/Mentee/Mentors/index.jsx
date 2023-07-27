import { FormControl, FormHelperText, MenuItem, OutlinedInput, Select } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import ImageCard from '../../../components/Card/ImageCard';
import { MentorsList } from '../../../constants/mentorList';
import { useState } from 'react';

const Mentors = () => {
  const [fac, setFac] = useState('none');
  const [foc, setFoc] = useState('none');
  const [expretise, setExpertise] = useState('none');

  return (
    <Layout>
      <div className="px-10 py-8 overflow-auto flex-1">
        <h1 className="text-[26px] font-bold mb-3">Mentors</h1>
        {/* filter input */}
        <div className="flex gap-3 items-center">
          <FormControl sx={{ m: 1, minWidth: 420 }}>
            <Select
              value={fac}
              onChange={(e) => setFac(e.target.value)}
              placeholder="Fakultas"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="none">
                <em>Fakultas</em>
              </MenuItem>
              <MenuItem value={'fri'}>Rekayasa Industri</MenuItem>
              <MenuItem value={'fif'}>Informatika</MenuItem>
              <MenuItem value={'fit'}>Ilmu Terapan</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 420 }}>
            <Select
              value={foc}
              onChange={(e) => setFoc(e.target.value)}
              placeholder="Fakultas"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="none">
                <em>Jurusan</em>
              </MenuItem>
              <MenuItem value={'fri'}>Sistem Informasi</MenuItem>
              <MenuItem value={'fif'}>Informatika</MenuItem>
              <MenuItem value={'fit'}>Telekomunikasi</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 420 }}>
            <Select
              value={expretise}
              onChange={(e) => setExpertise(e.target.value)}
              placeholder="Fakultas"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="none">
                <em>Expertise</em>
              </MenuItem>
              <MenuItem value={'fri'}>Programming</MenuItem>
              <MenuItem value={'fif'}>Data Scientist</MenuItem>
              <MenuItem value={'fit'}>Machine Learning</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* container card */}
        <div className="w-full grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
          {MentorsList.map((data, index) => {
            return <ImageCard key={index} {...data} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Mentors;
