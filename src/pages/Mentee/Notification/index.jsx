import Layout from '../../../components/Layout/Layout';

const Notification = () => {
  return (
    <Layout>
      <div className="w-3/5 px-20 py-8">
        <h1 className="text-[26px] font-bold mb-3">Notifications</h1>
        {/* container card */}
        <div className="flex flex-col">
          {/* list notif card */}
          <div className="border-b flex items-center py-5 px-2">
            <div className="overflow-hidden rounded-full w-14 h-14 mr-3">
              <img alt="test" src="default-person.avif" />
            </div>
            <div className="flex-1">
              <p className="text-[14px]">
                <span className="text-turqouise-600">Mubeth Praditya</span> Request untuk reschedule
              </p>
              <p className="text-[12px]">30 min lalu</p>
            </div>
            <button className="rounded-lg border px-5 py-2">Lihat Jadwal</button>
          </div>

          <div className="border-b flex items-center py-5 px-2">
            <div className="overflow-hidden rounded-full w-14 h-14 mr-3">
              <img alt="test" src="default-person.avif" />
            </div>
            <div className="flex-1">
              <p className="text-[14px]">
                <span className="text-turqouise-600">Mubeth Praditya</span> Request untuk reschedule
              </p>
              <p className="text-[12px]">30 min lalu</p>
            </div>
            <button className="rounded-lg border px-5 py-2">Lihat Jadwal</button>
          </div>

          <div className="border-b flex items-center py-5 px-2">
            <div className="overflow-hidden rounded-full w-14 h-14 mr-3">
              <img alt="test" src="default-person.avif" />
            </div>
            <div className="flex-1">
              <p className="text-[14px]">
                <span className="text-turqouise-600">Mubeth Praditya</span> Request untuk reschedule
              </p>
              <p className="text-[12px]">30 min lalu</p>
            </div>
            <button className="rounded-lg border px-5 py-2">Lihat Jadwal</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
