import { Reserva } from './../modelos/reserva';
import { Injectable } from '@angular/core';
import { ClienteInterface } from '../interfaces/cliente.interface';
import { QuartoInterface } from '../interfaces/quarto.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private cliente!: ClienteInterface;
  private quarto!: QuartoInterface;
  private reservas: Reserva[] = [];

  constructor() { }

  setCliente(cliente: any) {
    this.cliente = cliente;
  }

  getCliente(): ClienteInterface {
    return this.cliente;
  }

  setQuarto(quarto: QuartoInterface) {
    this.quarto = quarto;
  }

  getQuarto(): QuartoInterface {
    return this.quarto;
  }

  addReserva(reserva: Reserva) {
    this.reservas.push(reserva);
  }

  getReservas(): Reserva[] {
    return this.reservas;
  }

}
