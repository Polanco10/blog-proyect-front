export interface IUser {
    email: string,
    password: string,
}
export interface AuthResponseData {
    userId?: string;
    email?: string,
    token?: string;
    expirationDate?: string;
}