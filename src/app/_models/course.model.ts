import { Category } from "./category.model"
import { Trainer } from "./trainer.model"

export interface Course{
    id?:number,
    name?:string,
    img?:any,
    trainer_id  ?:number, 
    category_id ?: number,
    price ?:number,
    duration ?:number,
    preq?:string,
    desc ?:string,
}

