
import { AppSettings } from './../../settings/app.settings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  findAllCharacters() {
    return this.http.get<Character>(AppSettings.APP_URL + "/characters/");
  }

  findAllUserCharacters(idUser: number) {
    return this.http.get<Character[]>(AppSettings.APP_URL + "/characters/all/" + idUser);
  }

  findCharacterById(idCharacter: number): Observable<any> {
    return this.http.get<Character>(AppSettings.APP_URL + "/characters/" + idCharacter);
  }

  saveCharacter(character: Character) {
    return this.http.post<Character>(AppSettings.APP_URL + "/characters/", character);
  }

  sharCharacter(idCharacter: number, isShared: boolean) {
    return this.http.get<Character>(AppSettings.APP_URL + "/characters/share/" + idCharacter + "/" + isShared);
  }

  deleteCharacter(idCharacter: number): Observable<any> {
    return this.http.delete(AppSettings.APP_URL + "/characters/" + idCharacter, { responseType: 'text' });
  }

  updateCharacter(idCharacter: number, value: any): Observable<Object> {
    return this.http.put<Character>(AppSettings.APP_URL + "/characters/update" + idCharacter, value);
  }
}
