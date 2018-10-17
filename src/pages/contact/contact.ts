import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MensagemPage} from '../mensagem/mensagem';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  	
  }
  enviarMensagem(){
  	this.navCtrl.push(MensagemPage);
  }

}
