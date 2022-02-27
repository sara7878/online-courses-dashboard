export interface Category{

    id?:number,
    name:string,
    img?:any,

}

export interface Categoryobj{
    data:Category[],
    status: boolean,
    error: any[]
}
