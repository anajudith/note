import { User } from "../../../types/User";

export interface IAuthProvider {
  children?: JSX.Element;
}

export interface IAuthContext {
  data?: string;
  user: User | null;
  singin: (email: string, password: string) => Promise<boolean>;
  singout: () => void;
}
