import { Button, IconButton, OutlinedInput } from '@mui/material';
import { useRef } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const Step2 = ({ onChange, setData, data }) => {
  const topicRef = useRef();
  return (
    <>
      <div className="w-full">
        <h1 className="text-[28px] font-bold">Mari ceritakan tentang dirimu!</h1>
        <p className="font-normal text-[18px] mb-3 mt-8">tentang kamu</p>
        {/* form */}
        <textarea
          onChange={(e) => setData((prevState) => ({ ...prevState, about: e.target.value }))}
          placeholder="isi pertanyaan anda disini..."
          className="w-full p-3 border rounded-lg min-h-[200px]"
        />
        <p className="my-3">Contoh Topik</p>
        <div className="bg-blue-100 rounded-lg p-3 flex items-start gap-3 mb-3">
          <p ref={topicRef} className="text-[14px] text-neutral-500 font-light w-full">
            Hi pak/bu izin memperkenalkan diri saya Haris Hasan mahasiswa Sistem Informasi 2020. Sebelumnya izin untuk
            menyampaikan topik yang sekiranya bisa dibahas untuk sesi kali ini Bahas dunia Data Science dan bagaimana
            yang perlu disiapkan untuk menjad seorang Data Scientist Membahas tugas kuliah yang berkaitan dengan
            pengolahan data{' '}
          </p>
          <CopyToClipboard text={topicRef?.current?.innerText}>
            <IconButton>
              <ContentCopyOutlinedIcon fontSize="small" />
            </IconButton>
          </CopyToClipboard>
        </div>

        <Button variant="contained" color="error" className="w-full" onClick={() => onChange('next', '32')}>
          Login dengan akun SSO
        </Button>
      </div>
    </>
  );
};

export default Step2;
