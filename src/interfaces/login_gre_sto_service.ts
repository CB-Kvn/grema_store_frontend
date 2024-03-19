export interface LoginService {
    email : string,
    password: string
}

export interface UsersService {
    id: number;
    name: string;
    lastName: string;
    cellphone: string;
    genre: string;
    profile:{
      email: string;
      password: string;
      address: string;
      image: File
    }
    
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