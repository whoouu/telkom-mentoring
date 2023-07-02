import IconHome from "../../public/Sidebar/icon-home.svg";
import IconMessages from "../../public/Sidebar/icon-messages.svg";
import IconNotification from "../../public/Sidebar/icon-notification.svg";
import IconBooking from "../../public/Sidebar/icon-booking.svg";


const navigationSidebar = [
    {
        id: 1,
        title: "Home",
        link: "/home",
        icon: IconHome,
    },
    {
        id: 2,
        title: "Messages",
        link: "/messages",
        icon: IconMessages,
    },
    {
        id: 3,
        title: "Notification",
        link: "/notification",
        icon: IconNotification,
    },
    {
        id: 4,
        title: "Bookings",
        link: "/bookings",
        icon: IconBooking,
    },
]

export default navigationSidebar;