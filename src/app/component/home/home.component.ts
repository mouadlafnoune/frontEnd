import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Character } from '../../models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  animeCharacters: Character[];
  errorMessage: string;
  successMessage: string;
  characters: Observable<Character[]>;
  constructor(private characterService: CharacterService, private router: Router) {
    this.checkUser();
   }

  ngOnInit() {
    this.findAllCharacters();
  }

  findAllCharacters() {
    this.characterService.findAllUserCharacters(this.user.idUser)
      .pipe()
      .subscribe(data => {
        console.log(data);
        this.animeCharacters = data;
      }, error => {
          console.log(error);
      })
  }

  shareCharacter(idCharacter: number, shared: boolean) {
    if (idCharacter === undefined) {
      this.displayMessage("An error has occured while sharing the character", 2);
    }
    this.characterService.sharCharacter(idCharacter, shared)
      .pipe()
      .subscribe(data => {
        this.displayMessage("Character was succefully updated", 1);
        this.findAllCharacters();
    })
  }

  displayMessage(msg: string, type: number) {
    if (type === 1) {
      this.successMessage = msg;
      setTimeout(() => { this.successMessage = "" }, 5000);
    } else if (type === 2) {
      this.errorMessage = msg;
      setTimeout(() => { this.errorMessage = "" }, 5000);
    }
  }


  checkUser() {
    if (localStorage.getItem('currentUser') === undefined || localStorage.getItem('currentUser') === null) {
      console.log("user is invalid, redirection");
      this.router.navigate(['/login']);
      return;
    }
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  updateCharacter(idCharacter: number){
    this.router.navigate(['update', idCharacter]);
  }




  deleteEmployee(id: number) {
    this.characterService.deleteCharacter(id)
      .subscribe(
        data => {
          console.log(data);

        },
        error => console.log(error));
  }

}
