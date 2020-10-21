import { Component } from '@angular/core';
import {
  PoMenuItem,
  PoDynamicFormField,
  PoToolbarProfile,
  PoToolbarAction,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente-dynamic.component.html',
})
export class CadastroClienteDynamicComponent {

  cliente = {
    cc: '123456',
    tipo: 'empty'
  };

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Indicadores de venda',
      action: this.onClick.bind(this),
      icon: 'po-icon-chart-columns',
    },
    {
      label: 'Meus pedidos',
      action: this.onClick.bind(this),
      icon: 'po-icon-cart',
    },
    {
      label: 'Clientes',
      action: this.onClick.bind(this),
      icon: 'po-icon-users',
    },
    {
      label: 'Tabela de preços',
      action: this.onClick.bind(this),
      icon: 'po-icon-finance',
    },
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: (item) => {},
    },
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO',
  };

  fields: Array<PoDynamicFormField> = [
    {
      property: 'cnpj',
      label: 'CNPJ',
      help: 'Apenas números',
      gridColumns: 4,
      mask: '99.999.999/9999-99'
    }, // não dá pra colocar placeholder
    {
      property: 'nome',
      label: 'Razão social ou nome completo',
      gridColumns: 12,
    }, // não dá pra colocar placeholder
    { property: 'nf', label: 'Nome fantasia', gridColumns: 12 },
    {
      property: 'ie',
      label: 'Inscrição estadual',
      help: 'Apenas números',
      gridColumns: 4,
      optional: true,
      mask: '99.999.9999-9'
    },
    {
      property: 'im',
      label: 'Inscrição municipal',
      help: 'Apenas números',
      gridColumns: 4,
      optional: true,
      mask: '99.999.9999-99'
    },
    {
      property: 'tipo',
      label: 'Tipo de cliente',
      gridColumns: 12,
      options: [
        { label: 'Selecione o tipo de cliente', value: 'empty' },
        { label: 'Cliente', value: 1 },
        { label: 'São Paulo', value: 2 },
        { label: 'Rio de Janeiro', value: 3 },
        { label: 'Minas Gerais', value: 4 },
      ],
    },
    {
      property: 'cc',
      label: 'Código do cliente',
      help: 'O código do cliente que foi vinculado a esse cadastro.',
      gridColumns: 6,
      type: 'number',
      disabled: true
    },
    {
      property: 'cl',
      label: 'Código da loja',
      help: 'Sugerimos um código de identificação, mas você pode alterá-lo.',
      gridColumns: 6,
      type: 'number'
    },
    {
      property: 'telefone',
      label: 'Telefone comercial',
      help: 'Apenas números',
      gridColumns: 6,
      mask: '(99) 9999-9999'
    },
  ];

  onClick() {
    alert('Clicked in menu item');
  }
}
