import { Component, OnInit } from '@angular/core';
import { PlaceholderImage } from "../shared/json-placeholder/json-placeholder.model";
import { JsonPlaceholderService } from '../shared/json-placeholder/json-placeholder.service';
import * as camera from "@nativescript/camera";
import { Image } from '@nativescript/core';

@Component({
  selector: 'ns-home',
  providers: [JsonPlaceholderService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  album: PlaceholderImage;
  
  
  constructor(private placeholderImageService: JsonPlaceholderService) { }

  ngOnInit(): void {
    console.log('Component initiated');
  };

  getJsonApiList() {
    console.log('Button Pressed');
    this.placeholderImageService.get()
      .subscribe(
        (albumImages: PlaceholderImage) => {
          this.album = albumImages;
          console.log(this.album)

        },
        (exception) => alert(exception)
      )
  };

  takePhoto() {
    camera.requestPermissions().then(
      function success() {
        // permission request accepted or already granted 
        // ... call camera.takePicture here ...
        console.log('Success CAMERAAA')
        camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: true })
          .then(imageAsset => {
            console.log("Result is an image asset instance");
            var imgCamera = new Image();
            imgCamera.src = imageAsset.nativeImage;
            console.log(imgCamera)
          })
          .catch((err) => {
            console.log('Error taking photos')
            console.log(err)
          });
      },
      function failure() {
        // permission request rejected
        // ... tell the user ...
        console.log('FAILLLLLLLLL CAMERAAA')

      }
    );
  }
}
