import { Link } from 'react-router-dom';
import MentorCard from '../../components/Card/MentorCard';
import AuthLayout from '../../components/Layout/AuthLayout';

const ChooseMentor = () => {
  return (
    <AuthLayout>
      <div className={`p-1.5 rounded-full bg-green-300 transition-all w-full`}></div>
      <div className="w-full py-32 px-52">
        <h1 className="text-[28px] font-semibold mb-5">Berikut adalah mentor yang cocok untukmu.</h1>
        <p className="font-light">
          Berdasarkan preferensimu, berikut adalah mentor yang cocok untukmu. Kami merekomendasikan <br />{' '}
          <span className="text-blue-300">untuk mengadakan sesi dengan salah satu dari mereka</span>
        </p>

        <div className="grid md:grid-cols-4 w-full gap-7 mt-5">
          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <MentorCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
        </div>

        <Link to="/home">
          <p className="text-center mt-10 mx-auto">Lanjutkan ke halaman utama</p>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ChooseMentor;
