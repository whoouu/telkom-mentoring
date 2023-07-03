import { OutlinedInput, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const skillData = ['Data Science', 'Data Analyst', 'Software Engineer'];
const toolsData = ['Figma', 'Pytorch', 'Tensorflow'];
const Step3 = ({ onChange, setData, data }) => {
  const [interest, setInterest] = useState(skillData[0]);
  const [inputValue, setInputValue] = useState('');

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-[28px] font-bold">Mari ceritakan tentang dirimu!</h1>

        <div className="mt-5">
          <div className="mb-5">
            <p>Di bidang apa kamu ingin mendapatkan mentoring?</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={skillData}
              onChange={(event, newValue) => {
                setInterest(newValue);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setData((prevState) => ({
                    ...prevState,
                    interest: [...prevState.interest, { title: interest, background: generateColor() }],
                  }));
                  e.target.value = '';
                }
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => <TextField {...params} placeholder="+deskripsi" className="w-full" />}
            />
          </div>

          <div className="mb-5">
            <p>Sebutkan spesifik tools yang ingin kamu kembangkan (Optional)</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={toolsData}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          <div className="mb-5">
            <p>Sebutkan spesifik skill yang ingin kamu kembangkan (Optional)</p>
            <OutlinedInput placeholder="+deskripsi" className="w-full" />
          </div>

          <div className="mb-5">
            <p>Linkedin profile URL (Optional)</p>
            <OutlinedInput placeholder="+deskripsi" className="w-full" />
          </div>

          <div className="mb-5">
            <p>Portofolio, Resume (Optional)</p>
            <OutlinedInput placeholder="+deskripsi" className="w-full" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="w-fit bg-white p-3 rounded-lg text-black flex items-center"
            onClick={() => onChange(null, '0')}
          >
            <ArrowBackIosNewIcon fontSize="small" className="mr-3" />
            Back
          </button>
          <button className="w-fit bg-red-500 p-3 rounded-lg text-white" onClick={() => onChange('next', 32, true)}>
            Lanjut
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;
