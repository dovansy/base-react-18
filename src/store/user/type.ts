export interface LoginModel {
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  status: string;
  userType: Role;
}

export interface FormLoginModel {
  email: string;
  password: string;
}

export interface APIErrorResponse<T = any> {
  status: number;
  data: {
    code: number;
    data: T;
    message: string;
  };
}

export interface UserDetail {
  agreeTerm: number;
  avatar: string;
  birthday: string;
  country: string;
  createdAt: string;
  email: string;
  failedAt: string;
  googleKey: string;
  id: number;
  lastLoginIP: string;
  lastLoginTime: string;
  loginCount: string;
  maxBET: number;
  maxEAT: number;
  minBET: number;
  minEAT: number;
  password: string;
  phone: string;
  receiveNoti: number;
  referenceCode: string;
  status: string;
  subscriptionEmail: string;
  teleKey: string;
  teleUsername: string;
  updatedAt: string;
  userRoles: Role[];
  username: string;
  walletAddress: string;
  otpCustomer: OtpCustomer;
  cash: number;
  promotion: number;
  balance: number;
  winningLimit: string | number;
}

export interface OtpCustomer {
  createdAt: string;
  deletedAt: null;
  id: number;
  otpSecret: string;
  updatedAt: string;
  userId: number;
}

export interface Role {
  createdAt: string;
  id: number;
  role: string;
  updatedAt: string;
  userId: number;
}

export interface ParamGetListUser {
  status?: string;
  userType?: string;
  keyword?: string;
  limit: number;
  page: number;
}

export interface GetUserData {
  data: User[];
  metadata: Metadata;
}

export interface Metadata {
  limit: number;
  page: number;
  total: number;
  totalCurrentPage: number;
}

export interface User {
  email: string;
  id: number;
  lastLoginIP: string;
  lastLoginTime: string;
  phone: string;
  status: string;
  subscriptionEmail: string;
  userRoles: RoleModel[];
  username: string;
  walletAddress: string;
}

export interface RoleModel {
  id: number;
  role: string;
}

export interface UpdateUserInfoModel {
  id: number | string;
  status: string;
  minBET: number | null;
  maxBET: number | null;
  minEAT: number | null;
  maxEAT: number | null;
  role: string[];
  winningLimit: number | null;
}

export type UserEventLogsType = 'user' | 'racing' | 'betting';

export interface ParamsEventLogs {
  limit: number;
  page: number;
  keyword?: string;
  direction?: string;
}

export interface UserLogsResponse {
  data: UserLog[];
  metadata: Metadata;
}

export interface UserLog {
  adminId: number | null;
  adminMail: string | null;
  adminName: string | null;
  createdAt: string;
  httpStatus: string;
  id: number;
  method: string;
  request: any;
  result: any;
  target: string;
  userId: number | null;
  userMail: string | null;
  userName: string | null;
}

export interface RacingLog {
  createdAt: string;
  email: string;
  httpStatus: number;
  id: number;
  method: string;
  request: any;
  result: any;
  target: string;
}

export interface BettingLogResponse {
  data: BettingLog[];
  metadata: Metadata;
}

export interface BettingLog {
  ID: number;
  adminID: number | null;
  createdAt: Date;
  initialBy: string;
  method: string;
  request: string;
  response: string;
  type: string;
  url: string;
  userID: number | null;
}

export interface ForgotPasswordParams {
  email: string;
}

export interface ResetPasswordParams {
  token: string; // token from reCaptcha
  resetPassToken: string | null; //token from gmail
  password: string;
}
