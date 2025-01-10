import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
interface Comment {
  followupDate: any;
  timestamp: string;
  name: string;
  text: string;
  icon: string;
  showReplySection: boolean;
  replyText: string;
  replies: Comment[];  // Replies are also of type Comment
  isEditing: boolean;  // Flag for editing comment
  isReplyDisabled: boolean;  // Flag to disable the reply button (changed to boolean)
}
 
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CommentsComponent {
  comments: Comment[] = [
    {
      name: 'DSA CRM',
      text: 'For process 1 doc',
      icon: 'icon.png',
      showReplySection: false,
      replyText: '',
      timestamp: this.getCurrentDateTime(),
      replies: [],
      followupDate: undefined,
      isEditing: false,
      isReplyDisabled: false  // Initially, the reply button is enabled
    }
  ];
 
  todayDate: string;
  newCommentText: string = '';
  isEditingNewComment: boolean = false;  // Flag for editing new comment
 
  constructor() {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];  // Get date in YYYY-MM-DD format
  }
 
  // Get the current date and time in a readable format
  getCurrentDateTime(): string {
    const now = new Date();
    const date = now.toLocaleDateString();  // Format: "MM/DD/YYYY"
    const time = now.toLocaleTimeString();  // Format: "HH:MM:SS AM/PM"
    return `${date} ${time}`;
  }
 
  // Method to post a new comment or reply (to a comment or sub-reply)
  postNewComment(index?: number, replyToIndex?: number, subReplyIndex?: number): void {
    const currentDateTime = this.getCurrentDateTime(); // Capture current date and time
    const newComment: Comment = {
      name: 'User',
      text: '',
      icon: 'icon.png',
      showReplySection: false,
      replyText: '',
      timestamp: currentDateTime,
      replies: [],
      followupDate: undefined,
      isEditing: false,
      isReplyDisabled: false,
    };

    if (index === undefined) {
      // Adding a new comment
      newComment.text = this.newCommentText;
      this.comments.push(newComment);
      this.newCommentText = ''; // Clear the new comment text
    } else {
      // Replying to an existing comment
      const parentComment = this.comments[index];

      if (subReplyIndex !== undefined && replyToIndex !== undefined) {
        // Sub-sub-reply (deep level)
        const subReply = parentComment.replies[replyToIndex].replies[subReplyIndex];
        newComment.text = subReply.replyText;
        subReply.replies.push(newComment);
      } else if (replyToIndex !== undefined) {
        // Sub-reply (second level)
        const reply = parentComment.replies[replyToIndex];
        newComment.text = reply.replyText;
        reply.replies.push(newComment);
      } else {
        // Reply to main comment (first level)
        newComment.text = parentComment.replyText;
        parentComment.replies.push(newComment);
      }
      parentComment.replyText = ''; // Clear reply text
    }
  }

  // Method to toggle the visibility of the reply section
  toggleReplySection(index: number, replyIndex?: number, subReplyIndex?: number): void {
    if (subReplyIndex !== undefined && replyIndex !== undefined) {
      // Toggle the reply section for a sub-sub-reply
      this.comments[index].replies[replyIndex].replies[subReplyIndex].showReplySection =
        !this.comments[index].replies[replyIndex].replies[subReplyIndex].showReplySection;
    } else if (replyIndex !== undefined) {
      // Toggle the reply section for a sub-reply
      this.comments[index].replies[replyIndex].showReplySection = !this.comments[index].replies[replyIndex].showReplySection;
    } else {
      // Toggle the reply section for the main comment
      this.comments[index].showReplySection = !this.comments[index].showReplySection;
    }
    this.comments[index].isReplyDisabled = true;  // Disable the "Reply" button when a reply section is visible
  }
 
  // Method to cancel a reply and hide the reply section
  cancelReply(index: number, replyIndex?: number, subReplyIndex?: number): void {
    if (subReplyIndex !== undefined && replyIndex !== undefined) {
      this.comments[index].replies[replyIndex].replies[subReplyIndex].showReplySection = false;
      this.comments[index].replies[replyIndex].replies[subReplyIndex].replyText = '';  // Clear reply text
    } else if (replyIndex !== undefined) {
      this.comments[index].replies[replyIndex].showReplySection = false;
      this.comments[index].replies[replyIndex].replyText = '';  // Clear reply text
    } else {
      this.comments[index].showReplySection = false;
      this.comments[index].replyText = '';  // Clear reply text
    }
    this.comments[index].isReplyDisabled = false;  // Re-enable the "Reply" button after canceling
  }
 
  // Method to toggle edit mode for the most recent comment
  toggleEditComment(): void {
    const lastComment = this.comments[this.comments.length - 1];
    if (lastComment && lastComment.isEditing === false) {
      lastComment.isEditing = true;
    }
  }
 
  // Method to save the edited comment
  saveEditedComment(): void {
    const lastComment = this.comments[this.comments.length - 1];
    if (lastComment && lastComment.isEditing === true) {
      lastComment.isEditing = false;  // Turn off editing mode after saving
    }
  }

}





  

}

