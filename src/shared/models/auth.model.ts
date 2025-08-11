export interface AuthData {
  token: string;
  userInfo: { _id: string; username: string; email: string; roles: string[] };
  message?: string;
}
