import { Component } from '@angular/core';

import { PoToolbarAction, PoToolbarProfile, PoMenuItem } from '@po-ui/ng-components';

import { Cliente } from '../cliente.interface';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  cliente: Cliente = {
    tipo: '1'
  };

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => {}
    }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  readonly menus: Array<PoMenuItem> = [
    { label: 'Indicadores de venda', action: this.onClick.bind(this), icon: 'po-icon-chart-columns' },
    { label: 'Meus pedidos', action: this.onClick.bind(this), icon: 'po-icon-cart' },
    { label: 'Clientes', action: this.onClick.bind(this), icon: 'po-icon-users' },
    { label: 'Tabela de preços', action: this.onClick.bind(this), icon: 'po-icon-finance' }
  ];

  tipoCliente = [
    { label: 'Selecione o tipo de cliente', value: '1' }
  ];

  onClick() {
    alert('Clicked in menu item');
  }

}
