import { OutlinedInput } from '@mui/material';

const Step1 = ({ onChange, data, setData }) => {
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setData((prevState) => ({ ...prevState, images: e.target.files[0] }));
    }
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-[28px] font-bold">
          Halo, Haris! Silahkan cek beberapa <br />
          data kamu
        </h1>
        <p className="font-normal text-neutral-500 text-[18px] mb-8">Upload foto profile</p>
        {/* form */}
        <form>
          <div className="flex flex-col gap-7">
            <div className="w-full">
              <p className="font-bold mb-4">Upload foto profile</p>
              <div className="flex items-center gap-5">
                <div className="bg-neutral-200 rounded-full p-4 relative overflow-hidden">
                  <input
                    type="file"
                    onChange={imageChange}
                    className="h-full w-full top-0 left-0 absolute bg-red-200 opacity-0"
                  />
                  <div className="bg-neutral-500 rounded-full p-3">
                    <img alt="test" src="/upload.svg" />
                  </div>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold">Pilih file</p>
                  <p className="text-neutral-300 font-normal">Pastikan file dibawah 2mb</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="font-bold mb-3">Nama lengkapmu</p>
              <OutlinedInput
                className="w-full"
                placeholder="nama anda"
                onChange={(e) => setData((prevState) => ({ ...prevState, name: e.target.value }))}
              />
            </div>

            <div className="w-full">
              <p className="font-bold mb-3">Fakultas</p>
              <OutlinedInput
                className="w-full"
                placeholder="Fakultas anda"
                onChange={(e) => setData((prevState) => ({ ...prevState, faculty: e.target.value }))}
              />
            </div>

            <div className="w-full">
              <p className="font-bold mb-3">Jurusan</p>
              <OutlinedInput
                className="w-full"
                placeholder="jurusan anda"
                onChange={(e) => setData((prevState) => ({ ...prevState, bachelor: e.target.value }))}
              />
            </div>

            <button className="w-full bg-red-400 p-3 rounded-lg text-white" onClick={() => onChange('next')}>
              Login dengan akun SSO
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
