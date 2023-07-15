import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ayush",
    email: "ayush@gmail.com",
  },
});

export default UserContext;
