import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import * as markerjs2 from 'markerjs2';
@Component({
  selector: 'app-cutimage',
  templateUrl: './cutimage.component.html',
  styleUrls: ['./cutimage.component.scss']
})
export class CutimageComponent {
  protected router:Router
  constructor(
    protected injectorObj:Injector
  ) {
    this.router = this.injectorObj.get(Router)
  }

  ngOnInit(): void {
    const markerArea = new markerjs2.MarkerArea(document.getElementById('imgcut'));
    console.log("CutimageComponent  ngOnInit  document.getElementById('imgcut'):", document.getElementById('imgcut'),markerArea)
    markerArea.addEventListener('render', event => {
      // we are setting the markup result to replace our original image on the page
      // but you can set a different image or upload it to your server
      document.getElementById('imgcut').setAttribute('src',event.dataUrl);
    });

    markerArea.addEventListener("markerselect", (event) => {
      console.log("markerselect  markerArea.addEventListener  event:", event)
    });


    markerArea.addEventListener("markercreate", (event) => {
      event.markerArea.createNewMarker(markerjs2.FrameMarker);
    });

    markerArea.show();
  }
}
