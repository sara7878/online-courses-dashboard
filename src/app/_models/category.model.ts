export interface Category{
    id?:number,
    name:string,
    img?:string,
    // created_at?:any,
    // updated_at?: any,
}
export interface Categoryobj{
    data:Category[],
    status: boolean,
    error: any[]
}