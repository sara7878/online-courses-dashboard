import { Category } from "./category.model"
import { Trainer } from "./trainer.model"

export interface Course{
    id:number,
    name ?:string,
    img?:string,
    trainer_id  ?:Trainer,
    category_id ?: Category,
    price ?:number,
    duration ?:number,
    preq?:string,
    desc ?:string
}

