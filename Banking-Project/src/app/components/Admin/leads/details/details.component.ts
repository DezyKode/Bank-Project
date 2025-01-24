
import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  
    // Check for Web Share API support
    async checkWebShareAPI(): Promise<void> {
      if ('share' in navigator) {  // Check if navigator.share exists
        // Web Share API is supported, now share content
        await this.shareContent();
      } else {
        // Fallback if Web Share API is not supported
        alert('Web Share API is not supported in this browser.');
      }
    }
  
    // Share content using the Web Share API
    async shareContent(): Promise<void> {
      try {
        // This is the actual Web Share API call
        await navigator.share({
          title: 'Share this Content',
          text: 'Check out this awesome content!',
          url: 'https://example.com', // Replace with your URL or content
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }

}
}
