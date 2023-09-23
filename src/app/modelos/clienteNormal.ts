import { ClienteAbstract } from "./cliente";

export class ClienteNormal extends ClienteAbstract {
  constructor(nome: string, tipo: string){
    super(nome, tipo)
  }
}
