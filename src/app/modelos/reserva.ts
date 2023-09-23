import { ReturnStatement } from "@angular/compiler";
import { ClienteAbstract } from "./cliente";
import { QuartoAbstract } from "./quarto";

export class Reserva {
  constructor( public cliente: ClienteAbstract, public quarto: QuartoAbstract, public quantidadedeDias: number) {}

  valorTotal(): number {
    return this.quarto.valor * this.quantidadedeDias;
  }

  get detalhesReserva(): string {
    return `
    Reserva feita por ${this.cliente.nome} para um quarto ${this.quarto.tipo}
    por ${this.quantidadedeDias} dias. ${this.cliente.mensagemParabens()} O valor total ficou: ${this.valorTotal()}. `
  }
}

