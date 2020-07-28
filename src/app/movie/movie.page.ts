import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage {

  constructor(
    public modalController: ModalController
  ) { }

  close() {
    this.modalController.dismiss();
  }

}
