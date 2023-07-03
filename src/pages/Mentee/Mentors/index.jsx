import { OutlinedInput } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import ImageCard from '../../../components/Card/ImageCard';

const Mentors = () => {
  return (
    <Layout>
      <div className="px-10 py-8 overflow-auto flex-1">
        <h1 className="text-[26px] font-bold mb-3">Mentors</h1>
        {/* filter input */}
        <div className="flex gap-3 items-center">
          <OutlinedInput type="text" className="rounded-lg w-80" placeholder="Fakultas" />
          <OutlinedInput type="text" className="rounded-lg w-80" placeholder="Jurusan" />
          <OutlinedInput type="text" className="rounded-lg w-80" placeholder="Expertise" />
        </div>
        {/* container card */}
        <div className="w-full grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />

          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
          <ImageCard
            name={'Mubeth Praditya'}
            faculty={'Fakultas Rekayasa Industri'}
            count={7}
            skills={['Machine Learning', 'Data Science']}
            availableAt={'4 Mei 23, 8.30 PM'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Mentors;