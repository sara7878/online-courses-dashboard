export interface Category{

    id?:number,
    name:string,
    img?:string,
    
}
export interface Categoryobj{
    data:Category[],
    status: boolean,
    error: any[]
}
