import PropTypes from 'prop-types';
import IconSkill from '../../../public/icon-skill.svg';
import IconStar from '../../../public/icon-star.svg';
import IconCollege from '../../../public/icon-college.svg';
import { Link } from 'react-router-dom';

const ImageCard = ({ name, faculty, count, skills, availableAt }) => {
  return (
    <div className="rounded-lg border w-full">
      <div className="overflow-hidden w-full rounded-lg relative">
        <img alt="test" src="/thumbnail.avif" className="object-cover bg-center w-full" />
        <div className="absolute w-full h-full z-0 bg-gradient-to-b from-transparent top-0 to-[#000]"></div>
        <div className="absolute bottom-0 px-3 text-white">
          <p className="mt-3 mb-3 text-[14px]">{name}</p>
          {/* description */}
          <div className="mb-3 text-[12px] flex flex-col gap-2">
            <p className="flex gap-2">
              <img alt="test" src={IconCollege} />
              {faculty}
            </p>
            <p className="flex gap-2">
              <img alt="test" src={IconStar} />
              {count}x Mentoring
            </p>
            <p className="flex gap-2">
              <img alt="test" src={IconSkill} />
              Expert in{' '}
              {skills.map((data, index) => {
                if (skills.length - 1 === index) return data;
                return data + ', ';
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 rounded-lg p-3 flex items-center">
        <div className="flex-1">
          <p className="text-neutral-600 text-[12px]">Available on</p>
          <p className="text-[12px]">{availableAt}</p>
        </div>
        <Link className="bg-red-400 text-white p-3 rounded-lg" to="/mentor-profile">
          Book
        </Link>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  skills: PropTypes.array,
  availableAt: PropTypes.string.isRequired,
};

export default ImageCard;
