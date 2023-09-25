import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent{
  selectedImage !: string;
  imageOptions: string[] = ['../../assets/Bkg (1).png', '../../assets/image1.jpg', '../../assets/hm5.jfif']; // Replace with your image URLs
  imageDetails: { [key: string]: string } = {
    'image1.jpg': 'Image 1 Description',
    'image2.jpg': 'Image 2 Description',
    'image3.jpg': 'Image 3 Description'
  };
}
