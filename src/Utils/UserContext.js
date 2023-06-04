import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "AYush",
    email: "ayush@gmail.com",
  },
});

export default UserContext;
