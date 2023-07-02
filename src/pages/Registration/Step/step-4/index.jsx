import { Radio, RadioGroup } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';

const Step4 = ({ data, setData, onChange }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-left font-semibold text-[28px] mb-7">Apa goals terbesarmu setelah lulus kuliah?</h1>

        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
          <div className="border rounded-lg w-full p-3 mb-5 flex items-center justify-between">
            <p>Lanjut studi S2</p>
            <Radio value={1} />
          </div>

          <div className="border rounded-lg w-full p-3 mb-5 flex items-center justify-between">
            <p>Bekerja dan berkarir</p>
            <Radio value={2} />
          </div>

          <div className="border rounded-lg w-full p-3 mb-5 flex items-center justify-between">
            <p>Memulai dan mengembangkan bisnis</p>
            <Radio value={3} />
          </div>

          <div className="border rounded-lg w-full p-3 mb-5 flex items-center justify-between">
            <p>Saya disini akan mempelajari hal baru</p>
            <Radio value={4} />
          </div>

          <div className="border rounded-lg w-full p-3 mb-5 flex items-center justify-between">
            <p>Belum tahu</p>
            <Radio value={5} />
          </div>
        </RadioGroup>
        <div className="flex justify-between items-center">
          <button
            className="w-fit bg-white p-3 rounded-lg text-black flex items-center"
            onClick={() => onChange(null, '20')}
          >
            <ArrowBackIosNewIcon fontSize="small" className="mr-3" />
            Back
          </button>
          <Link to={'/choose-mentor'}>
            <button className="w-fit bg-red-500 p-3 rounded-lg text-white">Lanjut</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step4;
