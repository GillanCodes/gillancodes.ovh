import { User } from "@this/common/class/User";

interface BaseState<T> {
  data?: T | null;
  error: object | string | null;
  loading: boolean;
}

export type UserState = BaseState<User>;
