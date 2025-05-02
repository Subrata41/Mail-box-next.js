export type Email = {
  id: string;
  sender: string;
  subject: string;
  snippet: string;
  body: string;
  timestamp: string;
  read: boolean;
};

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "John Doe <john@example.com>",
    subject: "Welcome to Our Service",
    snippet: "Thanks for signing up with us.",
    body: "Hi John,\n\nThanks for signing up. We're excited to have you on board!",
    timestamp: "2025-05-02T08:30:00Z",
    read: false,
  },
  {
    id: "2",
    sender: "Jane Smith <jane@example.com>",
    subject: "Meeting Reminder",
    snippet: "Don't forget about our meeting at 3 PM.",
    body: "Hi,\n\nJust a reminder that we have a meeting today at 3 PM.",
    timestamp: "2025-04-29T15:00:00Z",
    read: true,
  },
  {
    id: "3",
    sender: "GitHub <noreply@github.com>",
    subject: "New Login from Unknown Device",
    snippet: "We noticed a login from an unrecognized device.",
    body: "GitHub Alert:\n\nWe've noticed a new sign-in to your account from a device we don't recognize.",
    timestamp: "2025-04-28T22:12:00Z",
    read: false,
  },
  {
    id: "4",
    sender: "Newsletter <news@updates.com>",
    subject: "April Highlights",
    snippet: "Here’s what’s new this month...",
    body: "Hello!\n\nCheck out the top updates and trends for April.",
    timestamp: "2025-04-28T07:20:00Z",
    read: true,
  },
  {
    id: "5",
    sender: "LinkedIn <no-reply@linkedin.com>",
    subject: "5 New Jobs for You",
    snippet: "Based on your profile, we found some new opportunities.",
    body: "Hi,\n\nHere are 5 new job listings tailored for you!",
    timestamp: "2025-04-27T13:45:00Z",
    read: false,
  },
  {
    id: "6",
    sender: "Slack <slack@updates.com>",
    subject: "You were mentioned in #general",
    snippet: "You’ve been tagged in a message by Alex.",
    body: "Hey, just a heads-up that Alex mentioned you in #general.",
    timestamp: "2025-04-27T10:15:00Z",
    read: true,
  },
  {
    id: "7",
    sender: "Zoom <no-reply@zoom.us>",
    subject: "Your Meeting Recording is Ready",
    snippet: "Click to download or share the recording.",
    body: "Your Zoom meeting recording is now available. Access the recording here.",
    timestamp: "2025-04-26T16:00:00Z",
    read: false,
  },
  {
    id: "8",
    sender: "Amazon <order-update@amazon.com>",
    subject: "Your Order Has Shipped",
    snippet: "Track your shipment online.",
    body: "Your recent order has been shipped. Estimated delivery: May 2.",
    timestamp: "2025-04-25T18:45:00Z",
    read: true,
  },
  {
    id: "9",
    sender: "Twitter <noreply@twitter.com>",
    subject: "New Login to Your Account",
    snippet: "Someone logged into your account from a new device.",
    body: "We detected a login from a new device. If this was you, no action is needed.",
    timestamp: "2025-04-25T11:30:00Z",
    read: false,
  },
  {
    id: "10",
    sender: "Figma <no-reply@figma.com>",
    subject: "Design Review Comments",
    snippet: "Your teammates left comments on the latest design file.",
    body: "There are 3 new comments on your project. Please review and respond.",
    timestamp: "2025-04-24T09:50:00Z",
    read: true,
  },
  {
    id: "11",
    sender: "Subrata Roy <subrata@example.com>",
    subject: "Weekend Plan",
    snippet: "Are we still on for the weekend?",
    body: "Hey! Just checking if the weekend plan is still on.",
    timestamp: "2025-04-24T08:00:00Z",
    read: false,
  },
  {
    id: "12",
    sender: "Firebase <noreply@firebase.com>",
    subject: "Billing Summary",
    snippet: "Your invoice for this month is ready.",
    body: "Dear user,\n\nYour Firebase billing summary for April is now available.",
    timestamp: "2025-04-23T19:15:00Z",
    read: true,
  },
];
