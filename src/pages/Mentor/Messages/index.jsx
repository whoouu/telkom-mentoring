import { IconButton, Input } from '@mui/material';
import Layout from '../../../components/Layout/Layout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';

const MessagesMentor = () => {
  const ChatCard = () => {
    return (
      <div className="w-full flex gap-3 py-5 pr-16">
        <div className="overflow-hidden rounded-full w-14 h-14">
          <img alt="test" src="/default-person.avif" />
        </div>
        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex justify-between">
            <p className="inline text-[18px]">Anakin Skywalker</p>
            <p className="inline">Today</p>
          </div>
          <p className="text-[14px] text-neutral-400">Hi, Apakah kamu bersedia untuk menjadi...</p>
        </div>
      </div>
    );
  };
  return (
    <Layout isMentor={true}>
      <div className="w-3/5 px-8">
        <div className="grid grid-cols-2 h-full">
          <div className="border-r h-full">
            <div className="flex justify-between items-center py-10">
              <h1 className="text-[28px] font-semibold">Messages</h1>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <p className="text-[14px] text-neutral-500 mb-2.5">All Chat</p>
            <div className="flex flex-col gap-2.5">
              <ChatCard />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-3 border py-8 pl-5">
              <div className="overflow-hidden rounded-full w-14 h-14">
                <img alt="test" src="/default-person.avif" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="inline text-[18px]">Anakin Skywalker</p>
                <p className="inline text-[14px] text-neutral-400">Online</p>
              </div>
            </div>
            <div className="flex-1 h-full inline-flex justify-end py-6 px-5 border">
              <div className="bg-neutral-800 p-3 rounded-lg w-1/2 h-fit">
                <p className="text-white">Hi, Apakah kamu bersedia untuk menjadi asisten dosen saya untuk sementara?</p>
              </div>
            </div>
            <div className="px-5">
              <Input className="w-full py-3 mb-4" placeholder="type something..." />
              <div className="flex justify-between">
                <div>
                  <IconButton>
                    <CropOriginalOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <LinkOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <MoodOutlinedIcon />
                  </IconButton>
                </div>
                <button className="bg-neutral-800 p-3 rounded-lg text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MessagesMentor;
