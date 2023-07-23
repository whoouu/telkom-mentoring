import IconHome from "../../public/Sidebar/icon-home.svg";
import IconMessages from "../../public/Sidebar/icon-messages.svg";
import IconNotification from "../../public/Sidebar/icon-notification.svg";
import IconBooking from "../../public/Sidebar/icon-booking.svg";
import IconCalendar from "../../public/icon-calendar.svg";


export const navigationSidebar = [
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

export const navigationSidebarMentor = [
    {
        id: 1,
        title: "Home",
        link: "/admin/home",
        icon: IconHome,
    },
    {
        id: 2,
        title: "Messages",
        link: "/admin/messages",
        icon: IconMessages,
    },
    {
        id: 3,
        title: "Bookings",
        link: "/admin/bookings",
        icon: IconBooking,
    },
    {
        id: 4,
        title: "Schedule",
        link: "/admin/schedule",
        icon: IconCalendar,
    },
]