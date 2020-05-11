import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  id: number;
  character: Character;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,private characterService: CharacterService) { }

  ngOnInit() {
    this.character = new Character();
    this.id = this.route.snapshot.params['id'];

    this.characterService.findCharacterById(this.id)
      .pipe()
      .subscribe(data => {
        console.log(data)
        this.character = data;
      }, error => console.log(error));
  }

  updateCharacter() {
    this.characterService.updateCharacter(this.id, this.character)
      .subscribe(data => console.log(data), error => console.log(error));
    this.character = new Character();
    this.gotoList();
  }

  onSubmit() {
    this.updateCharacter();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
