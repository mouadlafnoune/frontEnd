import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  submitted = false;
  character: Character = new Character();
  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = new Character();
  }

  save() {
    this.characterService.saveCharacter(this.character)
      .subscribe(data => console.log(data), error => console.log(error));
    this.character = new Character();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
