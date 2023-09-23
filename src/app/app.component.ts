import { HotelService } from './servicos/hotel.service';
import { QuartoSimples } from './modelos/quartoSimples';
import { Component } from '@angular/core';
import { ClienteNormal } from './modelos/clienteNormal';
import { Reserva } from './modelos/reserva';
import { ClienteVIP } from './modelos/clienteVIP';
import { QuartoLuxo } from './modelos/quartoLuxo';
import { QuartoInterface } from './interfaces/quarto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cliente = { nome: '' };
  tipoCliente = 'normal';
  quarto!: QuartoInterface;
  tipoQuarto = '';
  quantidadedeDias!: number;

  constructor(public hotelService: HotelService) {}

  formularioValido(): boolean {
    return (
      this.cliente.nome.trim() !== '' &&
      this.tipoCliente !== '' &&
      this.quantidadedeDias !== undefined &&
      this.quantidadedeDias > 0
    );
  }

  iniciarReserva(): void {
    if (this.formularioValido()) {
      this.fazerReserva();
    }
  }

  criarCliente(): void {
    if (this.tipoCliente === 'normal') {
      this.cliente = new ClienteNormal(this.cliente.nome, 'Normal');
      this.tipoQuarto = 'simples';
    } else if (this.tipoCliente === 'vip') {
      this.cliente = new ClienteVIP(this.cliente.nome, 'VIP');
      this.tipoQuarto = 'DeLuxo';
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

  escolherQuarto(): void {
    if (this.tipoQuarto === 'simples') {
      this.quarto = new QuartoSimples();
    } else if (this.tipoQuarto === 'DeLuxo') {
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

  fazerReserva(): void {
    this.criarCliente();

    let cliente = { ...this.hotelService.getCliente() };
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadedeDias);

    this.hotelService.addReserva(reserva);

    this.hotelService.getReservas();
    this.limparCampos();
  }

  limparCampos() {
    this.cliente.nome = '';
    this.quantidadedeDias = 0;
  }
}
