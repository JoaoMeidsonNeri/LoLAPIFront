import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, mergeMap, Observable, of, pipe } from 'rxjs';
import { PlayerInfo } from 'src/app/models/playerInfo.model';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  private apiKey = 'RGAPI-b6bfb53c-f4e2-4748-abbc-d80f602b95b0';
  private baseUrl = 'https://br1.api.riotgames.com/lol';

  constructor(private http: HttpClient, public store: StoreService) { }

  getPlayerDataByName(playerName: string): Observable<PlayerInfo> {
    const api = 'summoner/v4/summoners/by-name';
    return this.http.get<PlayerInfo>(`${this.baseUrl}/${api}/${playerName}?api_key=${this.apiKey}`);
  }

  getMasteryData(championId: string, score?: boolean): Observable<any> {
    // TODO remover
    championId = "IBAvW36MdSkk3JhIZDXw7qBnltWWKObG61lY-kVqU8Nw6g";
    let api;
    score ? api = 'champion-mastery/v4/scores/by-summoner'
          : api = 'champion-mastery/v4/champion-masteries/by-summoner';

    return this.http.get(`${this.baseUrl}/${api}/${championId}?api_key=${this.apiKey}`);
  }

  getLoLStatus(): Observable<any> {
    const api = 'status/v4/platform-data';
    return this.http.get(`${this.baseUrl}/${api}?api_key=${this.apiKey}`);
  }

  authenticate(): any {
    return this.http.get('SSO-url')
    .pipe(
      mergeMap((authResponse: any) => 
        this.http.get(`url ${authResponse}`)
        .pipe(
          concatMap((grupos: any) => {
            const userReturn = {
              grupos: grupos.body,
              id: grupos.id,
              user: grupos.user
            }
            return of(userReturn)
          })
        ))
    )
  }
}
