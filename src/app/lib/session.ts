import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export const getSession = () => getServerSession(options);

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user;
};
