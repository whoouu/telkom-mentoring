import { Button, IconButton, OutlinedInput } from '@mui/material';
import AuthLayout from '../../components/Layout/AuthLayout';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <AuthLayout>
      <div className="grid md:grid-cols-2 h-[92%]">
        <div className="flex items-center px-48">
          <div className="w-full">
            <h1 className="text-[38px] font-bold">
              <span className="text-[#FF3E8F]">Selamat Datang</span> di <br />
              Telkom Mentoring!
            </h1>
            <p className="font-normal text-neutral-500 text-[18px] mb-8">login menggunakan akun sso</p>
            {/* form */}
            <form>
              <div className="flex flex-col gap-7">
                <OutlinedInput placeholder="Username" />
                <OutlinedInput
                  placeholder="Password"
                  type="password"
                  endAdornment={
                    <IconButton>
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                  }
                />
                <Link to={'/welcoming'}>
                  <button className="w-full bg-red-400 p-3 rounded-lg text-white">Login dengan akun SSO</button>
                </Link>
              </div>
            </form>
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

export default Login;
