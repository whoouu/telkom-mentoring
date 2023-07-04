import { IconButton, OutlinedInput } from '@mui/material';
import AuthLayout from '../../components/Layout/AuthLayout';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

function MentorLogin() {
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
                <Link to={'/admin/welcoming-mentor'}>
                  <button className="w-full bg-red-400 p-3 rounded-lg text-white">Login dengan akun SSO</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center px-20 bg-gradient-to-b from-[#FF3E8F] to-[#FFBA8F]">
          {/* slider */}
          <Splide className="text-white overflow-hidden w-full h-[55%]" options={{ arrows: false }}>
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
            <SplideSlide className="h-[402px]">
              <div className="rounded-lg p-20 flex flex-col justify-center h-full">
                <h2 className="font-bold text-[28px] leading-[42px] mb-5">
                  Bagaimana kata <br />
                  mereka?
                </h2>
                <div className="w-[800px]">
                  <Splide
                    className="text-white w-full"
                    options={{
                      arrows: false,
                      gap: 20,
                      autoplay: true,
                      loop: true,
                      rewind: true,
                      pagination: false,
                      pauseOnHover: false,
                      perPage: 1,
                      width: 500,
                    }}
                  >
                    <SplideSlide className="bg-white rounded-lg p-3">
                      <p className="text-black">
                        Kenal dosen dari Telkom Mentoring dan pernah ngebahas apa yang perlu disiapin buat jadi Data
                        Scientist, dari sesi mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat yang
                        perlu disiapin selama kuliah
                      </p>
                      <div className="text-black mt-5 flex gap-2.5 items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img alt="test" className="object-fit" src="/default-person.avif" />
                        </div>
                        <div>
                          <p className="text-[14px]">Rudi Nugraha</p>
                          <p className="text-[14px]">Sistem Informasi 2021</p>
                          <p className="text-[14px]">13 Maret 2023</p>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide className="bg-white rounded-lg p-3">
                      <p className="text-black">
                        Kenal dosen dari Telkom Mentoring dan pernah ngebahas apa yang perlu disiapin buat jadi Data
                        Scientist, dari sesi mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat yang
                        perlu disiapin selama kuliah
                      </p>
                      <div className="text-black mt-5 flex gap-2.5 items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img alt="test" className="object-fit" src="/default-person.avif" />
                        </div>
                        <div>
                          <p className="text-[14px]">Rudi Nugraha</p>
                          <p className="text-[14px]">Sistem Informasi 2021</p>
                          <p className="text-[14px]">13 Maret 2023</p>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide className="bg-white rounded-lg p-3">
                      <p className="text-black">
                        Kenal dosen dari Telkom Mentoring dan pernah ngebahas apa yang perlu disiapin buat jadi Data
                        Scientist, dari sesi mentoring ini pikiran saya terbuka dan jadi lebih well prepared buat yang
                        perlu disiapin selama kuliah
                      </p>
                      <div className="text-black mt-5 flex gap-2.5 items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img alt="test" className="object-fit" src="/default-person.avif" />
                        </div>
                        <div>
                          <p className="text-[14px]">Rudi Nugraha</p>
                          <p className="text-[14px]">Sistem Informasi 2021</p>
                          <p className="text-[14px]">13 Maret 2023</p>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>{' '}
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </AuthLayout>
  );
}

export default MentorLogin;
