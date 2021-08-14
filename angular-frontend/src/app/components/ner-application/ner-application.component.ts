import { Component, OnInit } from '@angular/core';
import { nerService } from 'src/app/common/service/ner.service';
import { nerResponse } from 'src/app/common/response/nerResponse.module';

@Component({
  selector: 'app-ner-application',
  templateUrl: './ner-application.component.html',
  styleUrls: ['./ner-application.component.css']
})
export class NerApplicationComponent implements OnInit {
  nerList : nerResponse[] = [];
  inputString : string;
  displayEmpty: boolean = false;
  person: string = "";
  gpe: string = "";
  loc: string = "";
  org: string = "";

  getNer() {
      this.nerservice.getNer(this.inputString).subscribe(nerResponse => {
      if (nerResponse.PERSON != null) {
        this.person = nerResponse.PERSON;
      }
      if (nerResponse.GPE != null) {
        this.gpe = nerResponse.GPE;
      }
      if (nerResponse.LOC != null) {
        this.loc = nerResponse.LOC;
      }
      if (nerResponse.ORG != null) {
        this.org = nerResponse.ORG;
      }
      if (this.person.length + this.gpe.length + this.loc.length + this.org.length == 0) {
        this.displayEmpty = true;
      } else {
        this.displayEmpty = false;
      }
    })
  }

  clear() {
    this.nerList = [];
    this.inputString = "";
    this.displayEmpty = false;
    this.person = "";
    this.gpe = "";
    this.loc = "";
    this.org = "";
  }

  constructor(
    private nerservice : nerService
  ) { }

  ngOnInit(): void {
  }
  
}
