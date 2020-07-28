import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviePage } from '../movie/movie.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public modalController: ModalController
  ) {}

  async openMovie() {
    const modal = await this.modalController.create({
      component: MoviePage
    });
    return await modal.present();
  }

}
