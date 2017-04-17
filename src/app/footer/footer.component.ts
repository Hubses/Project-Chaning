import { Component, OnInit } from '@angular/core';
import { ChainingService } from "../services/chaining.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public projectName: string;
  constructor(
    private chainingService: ChainingService
  ) {
    this.projectName = this.chainingService.projectName;
    console.log(this.chainingService.projectName);
  }

  ngOnInit() {
  }

}
