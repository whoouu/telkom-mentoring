import AuthLayout from '../../../components/Layout/AuthLayout';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const SlideCard = () => {
  return (
    <div className="border rounded-lg border-neutral-200 p-6">
      <img src="/mentee.svg" alt="test" className="mx-auto" />
      <h2 className="text-[16px] font-semibold mt-5 mb-3 text-center">Apa itu mentee?</h2>
      <hr className="mb-3" />
      <p className="text-justify text-[12px]">
        Mentee adalah seorang mahasiswa yang sedang belajar atau dilatih. Mentee dapat menemukan mentor untuk sharing
        session seputar akademik hingga karir
      </p>
    </div>
  );
};

function WelcomingMentor() {
  return (
    <AuthLayout>
      <div className="grid md:grid-cols-2 h-[92%]">
        <div className="px-32 flex items-center justify-center">
          <div>
            <h1 className="text-[28px] mb-5 font-semibold">Halo, Beth! Selamat datang di Telkom Mentoring!</h1>
            <p className="mb-5 text-[14px]">
              Terhubung dan temukan mentor terbaik sesuai passionmu. Lebih dari 50+ mentor dari berbagai fakultas di
              Telkom University.
            </p>
            <div className="w-full gap-10 mb-8 relative w-fit h-fit">
              <div className="flex flex-col z-10 absolute bottom-16 left-10 text-white">
                <h1 className="font-semibold text-[28px]">Mentor</h1>
                <p>
                  Mentor adalah seorang dosen berbagai background dari beberapa Fakultas di Tel-U. Mentor dapat
                  memberikan topik sesuai expertisenya masing masing.
                </p>
              </div>
              <img alt="test" src="/mentor-welcoming.png" className="" />
            </div>
            <h1 className="text-[28px] font-semibold mb-3">Petunjuk Pengaturan Akun</h1>
            <p className="text-[14px] mb-8">
              Berdasarkan akun SSOmu akun kamu terdaftar sebagai Group Pengguna Mahasiswa.
            </p>
            <Link to="/admin/register">
              <button className="w-full bg-red-400 p-3 rounded-lg text-white">Lanjut Registrasi Sebagai Mentor</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center px-20 bg-gradient-to-b from-[#FF3E8F] to-[#FFBA8F]">
          {/* slider */}
          <Splide className="text-white" options={{ arrows: false }}>
            <SplideSlide className="px-8 h-[402px]">
              <div className="rounded-lg p-20 flex flex-col justify-center h-full bg-transparent">
                <h2 className="font-bold text-[28px] leading-[42px] mb-5">
                  Akselerasi kemajuan akademik dan <br />
                  rencana karirmu.
                </h2>
                <p className="font-normal text-[18px] leading-7 text-justify">
                  Bergabung sekarang dan temukan mentor terbaik sesuai passionmu. Lebih dari 50+ mentor dari berbagai
                  fakultas di Telkom University.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="px-8 h-[402px]">
              <div className="rounded-lg p-20 flex flex-col justify-center h-full bg-transparent">
                <h2 className="font-bold text-[28px] leading-[42px] mb-5">
                  Akselerasi kemajuan akademik dan <br />
                  rencana karirmu.
                </h2>
                <p className="font-normal text-[18px] leading-7 text-justify">
                  Bergabung sekarang dan temukan mentor terbaik sesuai passionmu. Lebih dari 50+ mentor dari berbagai
                  fakultas di Telkom University.
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </AuthLayout>
  );
}

export default WelcomingMentor;
