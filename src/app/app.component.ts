import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Sidenav';
  public p1 ="Home"
  public p2 ="Setting"
  public p3 ="Config"
  public p4 ="Contact"
  status: boolean = false;
  
  clickEvent(){
      this.status = !this.status;
}
}