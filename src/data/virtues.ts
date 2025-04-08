
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
  opposingVice: string;
  viceDescription: string;
}

export const virtues: Virtue[] = [
  {
    id: 1,
    name: "Faith",
    description: "Trust in God and firm belief in religious doctrines.",
    color: "bg-blue-700",
    icon: "book",
    opposingVice: "Doubt",
    viceDescription: "Skepticism that prevents belief and trust in God's promises.",
    actions: [
      { id: 1, description: "Read a specific Bible passage and reflect on its meaning for 10 minutes" },
      { id: 2, description: "Say a short prayer of gratitude before each meal today" },
      { id: 3, description: "Call or text a friend to share how your faith helped you through a difficult time" },
      { id: 4, description: "Write three blessings from today in a gratitude journal before bed" }
    ]
  },
  {
    id: 2,
    name: "Hope",
    description: "Desire with expectation of fulfillment; trust in God's promises.",
    color: "bg-green-600",
    icon: "star",
    opposingVice: "Despair",
    viceDescription: "The complete loss of hope and surrender to hopelessness.",
    actions: [
      { id: 1, description: "Write down three specific things you're looking forward to this week" },
      { id: 2, description: "Send an encouraging text with a specific compliment to someone going through hardship" },
      { id: 3, description: "When faced with a challenge today, write down one positive potential outcome" },
      { id: 4, description: "Set a 5-minute timer and brainstorm solutions to a problem you're currently facing" }
    ]
  },
  {
    id: 3,
    name: "Charity",
    description: "Love of God and neighbor, selfless concern for the well-being of others.",
    color: "bg-red-600",
    icon: "circle",
    opposingVice: "Envy",
    viceDescription: "Resentment toward others for their qualities, possessions, or success.",
    actions: [
      { id: 1, description: "Buy coffee or lunch for a coworker or stranger and engage in conversation" },
      { id: 2, description: "Donate $10 to a specific charity that addresses a current need in your community" },
      { id: 3, description: "Offer to help an elderly neighbor with a specific task like grocery shopping or yard work" },
      { id: 4, description: "Call a family member you haven't spoken to in a while and listen actively for 15 minutes" }
    ]
  },
  {
    id: 4,
    name: "Prudence",
    description: "The ability to discern the appropriate action to take in a given situation.",
    color: "bg-purple-600",
    icon: "bookmark",
    opposingVice: "Recklessness",
    viceDescription: "Acting without proper consideration of consequences.",
    actions: [
      { id: 1, description: "Create a to-do list with your top 3 priorities before starting work today" },
      { id: 2, description: "Before making a purchase over $50, wait 24 hours and reconsider if it's necessary" },
      { id: 3, description: "Review your monthly budget and identify one specific way to reduce unnecessary spending" },
      { id: 4, description: "When in a heated conversation, take a deep breath and count to 5 before responding" }
    ]
  },
  {
    id: 5,
    name: "Justice",
    description: "The constant and permanent will to give to each what is due.",
    color: "bg-yellow-600",
    icon: "check",
    opposingVice: "Injustice",
    viceDescription: "Unfair treatment of others and disregard for their rights.",
    actions: [
      { id: 1, description: "Publicly acknowledge and give credit to someone whose work or ideas you benefited from" },
      { id: 2, description: "Calculate a 20% tip for service workers today, even if the service wasn't perfect" },
      { id: 3, description: "Speak up respectfully when you witness someone being treated unfairly or stereotyped" },
      { id: 4, description: "Research one social justice issue for 15 minutes and identify a specific action you can take" }
    ]
  },
  {
    id: 6,
    name: "Fortitude",
    description: "Courage in pain or adversity, strength of mind that enables one to endure.",
    color: "bg-orange-600",
    icon: "star-half",
    opposingVice: "Cowardice",
    viceDescription: "Excessive fear that prevents one from doing what is right or needed.",
    actions: [
      { id: 1, description: "Make that difficult phone call or have that challenging conversation you've been avoiding" },
      { id: 2, description: "Complete a physically or mentally challenging task without complaining to anyone" },
      { id: 3, description: "Politely but firmly decline a request that conflicts with your values or priorities" },
      { id: 4, description: "Send a specific message of encouragement to someone going through a difficult time" }
    ]
  },
  {
    id: 7,
    name: "Temperance",
    description: "Moderation or voluntary self-restraint, practiced self-control.",
    color: "bg-indigo-600",
    icon: "circle-arrow-down",
    opposingVice: "Excess",
    viceDescription: "Overindulgence in pleasures and lack of self-control.",
    actions: [
      { id: 1, description: "Fast from sweets or desserts today and choose fruit when craving something sweet" },
      { id: 2, description: "Set a specific 2-hour window where you put your phone in another room and do not check it" },
      { id: 3, description: "When feeling irritated, excuse yourself for a 5-minute break before responding" },
      { id: 4, description: "Drink water instead of sugary drinks today and track how many glasses you consume" }
    ]
  }
];
