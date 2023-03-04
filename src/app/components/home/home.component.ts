import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { PlayerDataService } from 'src/app/services/player-data/player-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  playerName = new FormControl();

  constructor(readonly playerData: PlayerDataService ) {}

  getPlayerData(): void {
    // TODO remover 
    this.playerName.setValue('Old Jão');

    this.playerData.getPlayerDataByName(this.playerName.value).subscribe();
  }

  getMasteryData(score?: boolean): void {
    this.playerData.getMasteryData('asd', score).subscribe();
  }

  getLoLStatus(): void {
    this.playerData.getLoLStatus().subscribe();
  }

}
