import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-emoji-range',
  templateUrl: './emoji-range.page.html',
  styleUrls: ['./emoji-range.page.scss'],
})
export class EmojiRangePage implements OnInit {

  selectedEmojiId: RangeValue = 1
  emojisArray: { name: string, id: number, imgSrc: string }[] = [
    { name: 'big-frown', id: 1, imgSrc: '../../assets/emojis/big-frown.gif' },
    { name: 'Frown', id: 2, imgSrc: '../../assets/emojis/Frown.gif' },
    { name: 'Neutral', id: 3, imgSrc: '../../assets/emojis/Neutral.gif' },
    { name: 'Slightly-happy', id: 4, imgSrc: '../../assets/emojis/Slightly-happy.gif' },
    { name: 'grin', id: 5, imgSrc: '../../assets/emojis/grin.gif' },
  ]
  constructor() { }

  ionKnobMoveEnd(event: RangeCustomEvent) {
    const value = +event.detail.value
    console.log(Math.round(value / 20))

    switch (Math.round(value / 20)) {
      case 1:
        this.selectedEmojiId = 1;
        break;
      case 2:
        this.selectedEmojiId = 2;
        break;
      case 3:
        this.selectedEmojiId = 3;
        break;
      case 4:
        this.selectedEmojiId = 4;
        break;
      case 5:
        this.selectedEmojiId = 5;
        break;
      default:
        this.selectedEmojiId = 1;
        break;
    }
  }
  ngOnInit(): void {

  }
}
