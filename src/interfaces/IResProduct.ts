export interface IRespProduct {
    status: boolean,
    data: IProduct[] | never[]
}

export interface IProduct {
    _id: string;
    brand: string;
    category: string;
    location: number;
    flavor: string;
    size: string;
    amount: number;
}