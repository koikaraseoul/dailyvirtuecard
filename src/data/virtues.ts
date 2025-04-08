
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
      { id: 1, description: "Read scripture daily" },
      { id: 2, description: "Pray with intention" },
      { id: 3, description: "Share your faith journey with others" },
      { id: 4, description: "Trust God in challenging situations" },
    ]
  },
  {
    id: 2,
    name: "Hope",
    description: "Desire with expectation of fulfillment; trust in God's promises.",
    color: "bg-green-600",
    icon: "star",
    actions: [
      { id: 1, description: "Begin each day with a positive outlook" },
      { id: 2, description: "Look for silver linings in difficult times" },
      { id: 3, description: "Encourage someone who's struggling" },
      { id: 4, description: "Reflect on past blessings during hardship" },
    ]
  },
  {
    id: 3,
    name: "Charity",
    description: "Love of God and neighbor, selfless concern for the well-being of others.",
    color: "bg-red-600",
    icon: "circle",
    actions: [
      { id: 1, description: "Volunteer your time to help those in need" },
      { id: 2, description: "Donate to a worthy cause" },
      { id: 3, description: "Show kindness to a stranger" },
      { id: 4, description: "Listen attentively to someone without interrupting" },
    ]
  },
  {
    id: 4,
    name: "Prudence",
    description: "The ability to discern the appropriate action to take in a given situation.",
    color: "bg-purple-600",
    icon: "bookmark",
    actions: [
      { id: 1, description: "Consider consequences before making decisions" },
      { id: 2, description: "Seek wise counsel when uncertain" },
      { id: 3, description: "Practice moderate consumption" },
      { id: 4, description: "Set healthy boundaries in relationships" },
    ]
  },
  {
    id: 5,
    name: "Justice",
    description: "The constant and permanent will to give to each what is due.",
    color: "bg-yellow-600",
    icon: "check",
    actions: [
      { id: 1, description: "Stand up for someone being treated unfairly" },
      { id: 2, description: "Give credit where it's due" },
      { id: 3, description: "Reflect on your prejudices and work to overcome them" },
      { id: 4, description: "Pay a fair wage or tip generously" },
    ]
  },
  {
    id: 6,
    name: "Fortitude",
    description: "Courage in pain or adversity, strength of mind that enables one to endure.",
    color: "bg-orange-600",
    icon: "star-half",
    actions: [
      { id: 1, description: "Face a fear or challenge directly" },
      { id: 2, description: "Persevere through a difficult task" },
      { id: 3, description: "Stand firm in your principles when tested" },
      { id: 4, description: "Comfort and strengthen others in their struggles" },
    ]
  },
  {
    id: 7,
    name: "Temperance",
    description: "Moderation or voluntary self-restraint, practiced self-control.",
    color: "bg-indigo-600",
    icon: "circle-arrow-down",
    actions: [
      { id: 1, description: "Practice fasting or abstain from a pleasure" },
      { id: 2, description: "Express emotions in a controlled manner" },
      { id: 3, description: "Take a break from social media or technology" },
      { id: 4, description: "Enjoy good things in moderation" },
    ]
  }
];
