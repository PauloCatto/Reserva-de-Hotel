import { QuartoInterface } from "../interfaces/quarto.interface";

export abstract class QuartoAbstract implements QuartoInterface {

  constructor(public tipo: string, public valor: number) {}

}
