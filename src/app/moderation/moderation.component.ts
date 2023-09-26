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
    '../../assets/Bkg (1).png': 'Image 1 Description',
    '../../assets/image1.jpg': 'Image 2 Description',
    '../../assets/hm5.jfif': 'Image 3 Description'
  };

  //dropdown
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOption: string = '';
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }


}
