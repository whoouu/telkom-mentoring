import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MentorCard = ({ name, image, faculty, count, skills, availableAt }) => {
  return (
    <div className="rounded-lg border p-3 w-full">
      <div className="overflow-hidden w-full rounded-lg">
        <img alt="test" src={image ? image : '/thumbnail.avif'} />
      </div>
      <p className="mt-3 mb-1">{name}</p>
      {/* description */}
      <div className="mb-3">
        <p>{faculty}</p>
        <p>{count}x Mentoring</p>
        <p>
          Expert in{' '}
          {skills.map((data, index) => {
            if (skills.length - 1 === index) return data;
            return data + ', ';
          })}
        </p>
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

MentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  skills: PropTypes.array,
  availableAt: PropTypes.string.isRequired,
};

export default MentorCard;
