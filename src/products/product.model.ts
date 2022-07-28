export type ShirtSize = 'L' | 'M' | 'S';

export type Product = {
    name: string,
    description: string,
    price: number,
    size?: ShirtSize
};