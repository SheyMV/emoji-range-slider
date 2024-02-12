import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmojiRangePageRoutingModule } from './emoji-range-routing.module';

import { EmojiRangePage } from './emoji-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmojiRangePageRoutingModule
  ],
  declarations: [EmojiRangePage]
})
export class EmojiRangePageModule {}
