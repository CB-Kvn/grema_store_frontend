export interface User{
    personal: {
        id: string;
        name: string;
        lastName: string;
        cellphone: string;
        genre: string;
    };
    profile: {
        email: string;
        password: string;
        address: string;
        image: string;
    };
    address: {
        country: string;
        state: string;
        address: string;
        code: string;
    };
    page: number;
}