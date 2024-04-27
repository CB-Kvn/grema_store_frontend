export interface LoginService {
    email : string,
    password: string
}

export interface UsersService {
    personal:{
      id: string;
      name: string;
      lastName: string;
      cellphone: string;
      genre: string;
    },  
    profile:{
      email: string;
      password: string;
      address: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image?: any
    },
    address:AddressInfo,
    
  }

  export interface PersonalInfo{
    id: string,
    name: string,
    lastName: string,
    cellphone: string,
    genre: string,
}

export interface ProfileInfo {
  email : string,
  password: string
}

export interface AddressInfo {
  country: string,
  state: string,
  address:string,
  code:string
}

export interface Location{
  location:string
}

export interface UserHttpService{
  id: number,
  name: string,
  lastName: string,
  cellphone: string,
  genre: string,
  profile:{
      email: string,
      password: string,
      address: string,
      image: string
  },
}

