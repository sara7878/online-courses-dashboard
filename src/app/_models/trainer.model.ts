enum gender{
    'female','male'
}
export interface Trainer{
    id  ?:number,
    fname ?:string,
    lname ?:string,       
    gender ?:gender,
    phone ?:string,
    img  ?:string,
    email ?:string,
    pass  ?:string,
    facebook  ?:string,
    twitter ?:string,
    linkedin ?:string,
}