
export interface Action {
  id: number;
  description: string;
}

export interface Virtue {
  id: number;
  name: string;
  description: string;
  color: string;
  actions: Action[];
  icon: string;
}

export const virtues: Virtue[] = [
  {
    id: 1,
    name: "Faith",
    description: "Trust in God and firm belief in religious doctrines.",
    color: "bg-blue-700",
    icon: "book",
    actions: [
      { id: 1, description: "Read a Bible passage for 10 minutes this morning" },
      { id: 2, description: "Say a prayer before each meal today" },
      { id: 3, description: "Share one blessing from your faith with someone today" },
      { id: 4, description: "Write in a prayer journal before bed" },
    ]
  },
  {
    id: 2,
    name: "Hope",
    description: "Desire with expectation of fulfillment; trust in God's promises.",
    color: "bg-green-600",
    icon: "star",
    actions: [
      { id: 1, description: "Write down three things you're hopeful for today" },
      { id: 2, description: "Send an encouraging text to someone who is struggling" },
      { id: 3, description: "Replace one negative thought with a hopeful perspective" },
      { id: 4, description: "Look for and note one unexpected blessing today" },
    ]
  },
  {
    id: 3,
    name: "Charity",
    description: "Love of God and neighbor, selfless concern for the well-being of others.",
    color: "bg-red-600",
    icon: "circle",
    actions: [
      { id: 1, description: "Buy coffee or a meal for a stranger today" },
      { id: 2, description: "Donate $5 or more to a charity of your choice" },
      { id: 3, description: "Spend 30 minutes helping someone with a task" },
      { id: 4, description: "Call a friend or family member just to listen to them" },
    ]
  },
  {
    id: 4,
    name: "Prudence",
    description: "The ability to discern the appropriate action to take in a given situation.",
    color: "bg-purple-600",
    icon: "bookmark",
    actions: [
      { id: 1, description: "Take 5 minutes to plan your day before starting work" },
      { id: 2, description: "Ask for advice before making an important decision today" },
      { id: 3, description: "Review your spending and identify one way to save" },
      { id: 4, description: "Pause for 10 seconds before responding to a difficult conversation" },
    ]
  },
  {
    id: 5,
    name: "Justice",
    description: "The constant and permanent will to give to each what is due.",
    color: "bg-yellow-600",
    icon: "check",
    actions: [
      { id: 1, description: "Give proper credit to a colleague or family member for their work" },
      { id: 2, description: "Tip 20% or more for service workers today" },
      { id: 3, description: "Speak up when you witness unfair treatment" },
      { id: 4, description: "Reflect for 5 minutes on a bias you may hold and how to address it" },
    ]
  },
  {
    id: 6,
    name: "Fortitude",
    description: "Courage in pain or adversity, strength of mind that enables one to endure.",
    color: "bg-orange-600",
    icon: "star-half",
    actions: [
      { id: 1, description: "Do one thing today that you've been avoiding out of fear" },
      { id: 2, description: "Complete a difficult task without complaining" },
      { id: 3, description: "Stand firm in your principles when pressured to compromise" },
      { id: 4, description: "Offer support to someone going through a hard time" },
    ]
  },
  {
    id: 7,
    name: "Temperance",
    description: "Moderation or voluntary self-restraint, practiced self-control.",
    color: "bg-indigo-600",
    icon: "circle-arrow-down",
    actions: [
      { id: 1, description: "Skip dessert or limit yourself to one sweet treat today" },
      { id: 2, description: "Take a 4-hour break from social media or screens" },
      { id: 3, description: "Count to 10 before reacting when you feel angry" },
      { id: 4, description: "Drink water instead of a sugary drink with your next meal" },
    ]
  }
];
