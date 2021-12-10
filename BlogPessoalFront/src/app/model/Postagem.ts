import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public idpost: number
    public title: string
    public text: string
    public datepost: Date
    public topic: Tema
    public username: Usuario
}