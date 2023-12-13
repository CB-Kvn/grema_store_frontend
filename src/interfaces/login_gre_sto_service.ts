export interface LoginService {
    email : string,
    password: string
}

export interface LoginServiceSlice {
    success?: string | undefined;
    status?: number;
    msg?: string;
    data?: object | undefined;
    info?: string | undefined;
    error?: string | undefined;
    validate?: boolean | undefined;
  }