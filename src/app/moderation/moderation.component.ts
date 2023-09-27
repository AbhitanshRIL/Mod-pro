import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})



export class ModerationComponent{

  POA:string = '../../assets/Bkg (1).png';
  POI:string= '../../assets/image1.jpg';
  Doc1:string = '../../assets/hm5.jfif';
  selectedImage =this.POA;
  imageOptions: string[] = [this.POA,this.POI,this.Doc1]; // Replace with your image URLs
  imageDetails: { [key:string]: string } = {
    [this.POA] : 'Address Proof',
    [this.POI] : 'Identity Proof',
    [this.Doc1] : 'Document'
  };

 

  ngOnInit() {
    console.log("testing by harsh");
    console.log(this.selectedImage);
  }


}
