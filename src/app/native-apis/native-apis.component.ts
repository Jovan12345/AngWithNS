import { Component } from '@angular/core';

import * as camera from "@nativescript/camera";
import { ImageSource, knownFolders, path } from '@nativescript/core';
import * as geolocation from "nativescript-geolocation";

@Component({
  selector: 'ns-native-apis',
  templateUrl: './native-apis.component.html',
  styleUrls: ['./native-apis.component.css']
})
export class NativeApisComponent {
  saveImage;

  latitude;
  longitude;

  takePhoto() {
    camera.requestPermissions().then(() => {
      var milliseconds = (new Date).getTime();
      camera.takePicture({ width: 300, height: 300, keepAspectRatio: true }).then(img => {
        ImageSource.fromAsset(img).then(() => {
          let folder = knownFolders.documents();
          let fullPath = path.join(folder.path, "SaveImage" + milliseconds + ".png");
          this.saveImage = fullPath;
        })
      })

    })
  }

  getLocation() {
    geolocation.enableLocationRequest(true)
      .then(() => {
        geolocation.isEnabled().then(isLocationEnabled => {
          if (!isLocationEnabled) {
            console.log('Location premissions NOT ENABLED')
          }

          geolocation.getCurrentLocation({})
            .then(res => {
              this.latitude = 'Lat ' + res.latitude;
              this.longitude = 'Long ' + res.longitude;
            }, console.log)
        })
      });
  }
}