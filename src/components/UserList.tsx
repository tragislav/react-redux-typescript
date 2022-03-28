import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.users);
  console.log(users);
  return <div></div>;
};

export default UserList;
