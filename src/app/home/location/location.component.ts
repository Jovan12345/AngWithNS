import { Component, OnInit } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import * as geolocation from "nativescript-geolocation";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

registerElement('MapView', () => MapView);

@Component({
  selector: 'ns-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  latitude = 36.164597;
  longitude = -115.188768;

  zoom = 12;
  padding = [40, 40, 40, 40];
  mapView: MapView;
  marker = new Marker();

  onMapReady = (event) => {
    this.mapView = event.object;

    this.marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
    this.mapView.addMarker(this.marker);
  };

  ngOnInit() {
    console.log('Componenyt initiated');
    
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
              this.latitude = res.latitude;
              this.longitude = res.longitude;
            }, console.log)
        })
      });
  }

}
