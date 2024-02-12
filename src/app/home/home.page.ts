import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedEmojiId: RangeValue = 1
  emojisArray: { title: string, id: number, imgSrc: string }[] = [
    { title: 'grin', id: 1, imgSrc: '../../assets/emojis/grin.gif' },
    { title: 'Slightly-happy', id: 2, imgSrc: '../../assets/emojis/Slightly-happy.gif' },
    { title: 'Neutral', id: 3, imgSrc: '../../assets/emojis/Neutral.gif' },
    { title: 'Frown', id: 4, imgSrc: '../../assets/emojis/Frown.gif' },
    { title: 'big-frown', id: 5, imgSrc: '../../assets/emojis/big-frown.gif' }
  ]
  constructor() { }

  ionKnobMoveEnd(event: RangeCustomEvent) {
    this.selectedEmojiId = event.detail.value
  }

}
