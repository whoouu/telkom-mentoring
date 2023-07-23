import { useState } from 'react';
import MultiStepRegistration from './MultiStepRegistration';
import AuthLayout from '../../../components/Layout/AuthLayout';
import TemplateProfile from '../../../components/TemplateProfile';

function RegistrationMentor() {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    faculty: '',
    bachelor: '',
    images: '',
    scolarUrl: '',
    linkedinUrl: '',
    about: '',
    studyHistory: '',
    workHistory: '',
    isFinal: false,
    progress: 0,
  });

  return (
    <AuthLayout>
      <div
        className={`p-1.5 rounded-full bg-green-300 transition-all`}
        style={{ width: `${registerForm.progress}%`, maxWidth: '100%' }}
      ></div>
      <div className="grid md:grid-cols-2 h-[92%]">
        <div className="flex items-center px-48">
          <MultiStepRegistration data={registerForm} setData={setRegisterForm} />
        </div>
        <div className="flex items-center relative px-20 bg-gradient-to-b from-[#FF3E8F] to-[#FFBA8F]">
          {/* slider */}
          {!registerForm.isFinal ? (
            <div className="overflow-hidden absolute w-full h-[650px] bottom-0 rounded-lg">
              <TemplateProfile dataMentor={registerForm} isMentor={true} />
            </div>
          ) : (
            <img alt="test" src="/final-regis.png" className="absolute right-0" />
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

export default RegistrationMentor;
