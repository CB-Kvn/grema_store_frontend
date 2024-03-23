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

