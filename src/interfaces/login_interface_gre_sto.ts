export interface LoginService {
  email: string,
  password: string
  passwordNew?: string
}

export interface UsersService {
  personal: {
    id: string;
    name: string;
    lastName: string;
    cellphone: string;
    genre: string;
  },
  profile: {
    email: string;
    password: string;
    address: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image?: any
  },
  address: AddressInfo,

}

export interface PersonalInfo {
  id: string,
  name: string,
  lastName: string,
  cellphone: string,
  genre: string,
}

export interface ProfileInfo {
  email: string,
  password: string
}

export interface AddressInfo {
  country: string,
  state: string,
  address: string,
  code: string
}

export interface Location {
  location: string
}

export interface UserHttpService {
  id: number,
  name: string,
  lastName: string,
  cellphone: string,
  genre: string,
  profile: {
    email: string,
    password: string,
    address: string,
    image: string
  },
}
export interface LoginSuccessful {
  payload: {
    data: {
      email: string
      userId: string
      image: string
      address: string
      phone: string
      name: string
      token: string
      type: string
      profileId: number
      success: boolean
    }
  }
}

export interface APIResponseLogin {
  success: string;
  status: number;
  msg: string;
  data: Log | UpdateResponseInfo;
}

export interface APIResponseUpdate {
  success: string;
  status: number;
  msg: string;
  data: UpdateResponseInfo;
}

export interface UpdateResponseInfo {
  user: {
    cellphone: string,
    profile: {
        address: string
    }
}
}

export interface Log {
  email: string
  userId: string
  phone: string
  name: string
  address: string
  image: string
  token: string
  type: string
  profileId: number
  success: boolean
}

export interface LoginInit {

  email: string
  token: string
  phone: string
  name: string
  address: string
  userId: string
  image: string
  type: string
  profileId: number
  success: boolean
}

export interface RefreskToken {
  payload: {
    data: {
      token: string
    }
  }
}
export interface DeleteUser {
  id: string
}

export interface UpdateUser{
    address:string,
    id:string,
    phone:string
  
}

