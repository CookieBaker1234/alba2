import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { CardapioPage } from '../cardapio/cardapio';
import { LojasPage } from '../lojas/lojas';
import { MensagemPage } from '../mensagem/mensagem';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardapioPage;
  tab2Root = LojasPage;
  tab3Root = ContactPage;
  tab4root = MensagemPage;

  constructor() {

  }
}
