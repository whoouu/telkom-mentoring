import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Step4 = ({ data, setData, onChange }) => {
  const [toggleStudy, setToggleStudy] = useState(false);
  const [toggleWork, setToggleWork] = useState(false);

  useEffect(() => {
    if (toggleStudy) {
      setData((prevState) => ({ ...prevState, studyHistory: 'ada' }));
    } else {
      setData((prevState) => ({ ...prevState, studyHistory: '' }));
    }
    if (toggleWork) {
      setData((prevState) => ({ ...prevState, workHistory: 'ada' }));
    } else {
      setData((prevState) => ({ ...prevState, workHistory: '' }));
    }
  }, [toggleStudy, toggleWork]);
  return (
    <>
      <div className="w-full">
        <h1 className="text-left font-semibold text-[28px] mb-7">
          Mari bagikan pengalaman education dan experience anda!
        </h1>

        <div className="w-full mb-5">
          <div className="w-full mb-8">
            <p className="font-bold mb-3">Jenjang Pendidikan</p>
            {toggleStudy && (
              <button className="flex justify-between gap-5 p-4 mb-4 rounded-lg border-2 shadow-lg w-full">
                Telkom University
                <div>
                  <DeleteOutlinedIcon onClick={() => setToggleStudy(false)} className="text-red-600" />
                  <ChevronRightOutlinedIcon />
                </div>
              </button>
            )}
            <button
              onClick={() => setToggleStudy(true)}
              className="flex gap-5 p-4 rounded-lg border-2 border-dashed border-blue-400 w-full text-blue-400"
            >
              <img alt="icon" src="/public/add-circle.svg" />
              Tambah Pendidikan
            </button>
          </div>

          <div className="w-full">
            <p className="font-bold mb-3">Pengalaman Bekerja</p>
            {toggleWork && (
              <button className="flex justify-between gap-5 p-4 mb-4 rounded-lg border-2 shadow-lg w-full">
                PT Telekomunikasi Indonesia Tbk
                <div>
                  <DeleteOutlinedIcon onClick={() => setToggleWork(false)} className="text-red-600" />
                  <ChevronRightOutlinedIcon />
                </div>
              </button>
            )}
            <button
              onClick={() => setToggleWork(true)}
              className="flex gap-5 p-4 rounded-lg border-2 border-dashed border-blue-400 w-full text-blue-400"
            >
              <img alt="icon" src="/public/add-circle.svg" />
              Tambah Pendidikan
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="w-fit bg-white p-3 rounded-lg text-black flex items-center"
            onClick={() => onChange(null, '32')}
          >
            <ArrowBackIosNewIcon fontSize="small" className="mr-3" />
            Back
          </button>
          <Link to={'/admin/home'}>
            <button className=" px-10 bg-red-500 p-3 rounded-lg text-white">Lanjut</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step4;
