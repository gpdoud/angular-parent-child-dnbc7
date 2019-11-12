import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // states: string[] = [ "Ohio", "Indiana", "Kentucky" ];

  schools = [
    { school: 'Unversity of Kentucky', mascot: 'Wildcats', color: 'blue' },
    { school: 'University of Louisville', mascot: 'Cardinals', color: 'red' },
    { school: 'University of Cincinnati', mascot: 'Bearcats', color: 'red' },
    { school: 'Xavier University', mascot: 'Musketeers', color: 'blue' },
    { school: 'Mami University', mascot: 'Redhawks', color: 'red' },
    { school: 'Indiana University', mascot: 'Hoosiers', color: 'red' },
    { school: 'University of Evansville', mascot: 'Aces', color: 'purple' },
    { school: 'University of Tulane', mascot: 'Wave', color: 'green' }
];

}
