export declare type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export declare type User = {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
};
