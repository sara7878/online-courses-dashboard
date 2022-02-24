enum gender{
    'female','male'
}
export interface Student{
    id  ?:number,
    fname?:string,
    lname ?:string,      
    gender ?:gender,//enum
    phone ?:string,
    img  ?:string
    email  ?:string,
    pass  ?:string 

}
