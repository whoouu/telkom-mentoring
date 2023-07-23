import { OutlinedInput } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Step2 = ({ onChange, setData }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-[28px] font-bold mb-10">Bagikan link portofolio atau resume anda!</h1>
        {/* form */}
        <div className="w-full mb-10">
          <p className="font-bold mb-3">Google Scholar URL</p>
          <OutlinedInput
            className="w-full"
            placeholder="nama anda"
            onChange={(e) => setData((prevState) => ({ ...prevState, scolarUrl: e.target.value }))}
          />
        </div>

        <div className="w-full mb-10">
          <p className="font-bold mb-3">Linkedin Profile URL (Optional)</p>
          <OutlinedInput
            className="w-full"
            placeholder="Fakultas anda"
            onChange={(e) => setData((prevState) => ({ ...prevState, linkedinUrl: e.target.value }))}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            className="w-fit bg-white p-3 rounded-lg text-black flex items-center"
            onClick={() => onChange(null, '0')}
          >
            <ArrowBackIosNewIcon fontSize="small" className="mr-3" />
            Back
          </button>
          <button className="w-fit bg-red-500 p-3 rounded-lg text-white" onClick={() => onChange('next', 32, false)}>
            Lanjut
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
