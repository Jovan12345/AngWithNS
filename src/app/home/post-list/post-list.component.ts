import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../../shared/json-placeholder/json-placeholder.service';
import { PlaceholderImage } from "../../shared/json-placeholder/json-placeholder.model";

@Component({
  selector: 'ns-post-list',
  providers: [JsonPlaceholderService],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  album: PlaceholderImage;

  constructor(private placeholderImageService: JsonPlaceholderService) { }

  getJsonApiList() {
    this.placeholderImageService.get()
      .subscribe(
        (albumImages: PlaceholderImage) => {
          this.album = albumImages;
        },
        console.log
      )
  };
}
