import { useState } from 'react';
import Step1 from '../Step/step-1';
import Step2 from '../Step/step-2';
import PropTypes from 'prop-types';
import Step3 from '../Step/step-3';
import Step4 from '../Step/step-4';

const MultiStepRegistration = ({ data, setData }) => {
  const [step, setStep] = useState(1);

  const handleChangeForm = (type, scroll, isFinal) => {
    if (type === 'next') {
      setStep(step + 1);
      setData((prevState) => ({ ...prevState, scrollY: scroll, isFinal: isFinal, progress: prevState.progress + 25 }));
    } else {
      setStep(step - 1);
      setData((prevState) => ({ ...prevState, scrollY: scroll, isFinal: isFinal, progress: prevState.progress - 25 }));
    }
  };

  switch (step) {
    case 1:
      return <Step1 data={data} setData={setData} onChange={handleChangeForm} />;

    case 2:
      return <Step2 data={data} setData={setData} onChange={handleChangeForm} />;

    case 3:
      return <Step3 data={data} setData={setData} onChange={handleChangeForm} />;

    case 4:
      return <Step4 data={data} setData={setData} onChange={handleChangeForm} />;
    default:
      return (
        <div className="flex items-center justify-center">
          <h1 className="text-center">Page not found</h1>
        </div>
      );
  }
};

MultiStepRegistration.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.function,
};

export default MultiStepRegistration;
