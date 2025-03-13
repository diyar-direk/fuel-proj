import { ReactComponent as HomeIcon } from "src/assets/icons/home.svg";

export const pageLinks = [
  {
    icon: <HomeIcon />,
    children: [
      { title: "جميع المستخدمين", path: "users", role: ["admin"] },
      { title: "اضافة مستخدم", path: "add-user", role: ["admin"] },
    ],
    title: "المستخدمين",
    role: ["admin"],
  },
];
