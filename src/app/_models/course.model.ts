import { Category } from "./category.model"
import { Trainer } from "./trainer.model"

export interface Course{
    id:number,
    name ?:string,
    img?:string,
    trainer?:Trainer, 
    category?: Category,
    price ?:number,
    duration ?:number,
    preq?:string,
    desc ?:string
}

