import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngFor and ngIf

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

interface Comment {
  name: string;
  text: string;
  followupDate: string;
  icon: string;
  showReplySection: boolean;
  replyText: string;
  replies: Comment[];  // Replies are also of type Comment

}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',

  styleUrls: ['./comments.component.css'],  // Corrected this
  standalone: true,  // Mark this component as standalone
  imports: [CommonModule,FormsModule],

})
export class CommentsComponent {

  // Initial data for comments with the correct type
  comments: Comment[] = [
    {
      name: 'DSA CRM',
      text: 'For process 1 doc',
      followupDate: 'SUN SEP 15 2024',
      icon: 'icon.png',  // Default icon, replace if necessary
      showReplySection: false,  // Initially hide the reply section
      replyText: '',  // User input for the reply
      replies: []  // Replies array is typed as an array of Comment objects
    }
  ];

  // Store today's date in YYYY-MM-DD format
  todayDate: string;

  // Initialize text inputs for new comment
  newCommentText: string = '';  
  newFollowupDate: string = '';  

Comment: any;


  constructor() {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];  // Get date in YYYY-MM-DD format
  }

  // Post a new comment or a reply
  postNewComment(index?: number): void {
    if (index === undefined) {
      // Posting a new top-level comment
      const newComment: Comment = {
        name: 'User',  // Replace with the dynamic user's name if needed
        text: this.newCommentText,
        followupDate: this.newFollowupDate,
        icon: 'icon.png',  // Default icon, replace if necessary
        showReplySection: false,
        replyText: '',
        replies: []  // New comment has no replies initially
      };
  
      // Add the new comment to the comments array
      this.comments.push(newComment);
  
      // Clear the input fields after posting
      this.newCommentText = '';
      this.newFollowupDate = '';
    } else {
      // Posting a reply to an existing comment
      const reply: Comment = {
        name: 'User',  // Replace with the dynamic user's name if needed
        text: this.comments[index].replyText,  // Use the reply text from the input field
        followupDate: this.comments[index].followupDate,
        icon: 'icon.png',  // Default icon, replace if necessary
        showReplySection: false,  // Hide the reply section after posting
        replyText: '',  // Clear the replyText input after posting
        replies: []  // A reply doesn't have replies of its own initially
      };
  
      // Add the reply to the replies array of the specified comment
      this.comments[index].replies.push(reply);
  
      // Clear the reply text and hide the reply section after posting
      this.comments[index].replyText = '';
      this.comments[index].showReplySection = false;
    }
  }

  // Toggle the reply section visibility
  toggleReplySection(index: number): void {
    this.comments[index].showReplySection = !this.comments[index].showReplySection;
  }
}
