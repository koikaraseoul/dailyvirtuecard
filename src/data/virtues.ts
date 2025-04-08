
export interface Action {
  id: number;
  description: string;
}

export interface Virtue {
  id: number;
  name: string;
  description: string;
  color: string;
  actions: Action[][];  // Now an array of action sets
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
      [
        { id: 1, description: "Read a Bible passage for 10 minutes this morning" },
        { id: 2, description: "Say a prayer before each meal today" },
        { id: 3, description: "Share one blessing from your faith with someone today" },
        { id: 4, description: "Write in a prayer journal before bed" },
      ],
      [
        { id: 1, description: "Memorize one verse that strengthens your faith today" },
        { id: 2, description: "Listen to worship music during your commute" },
        { id: 3, description: "Share your testimony with someone who needs encouragement" },
        { id: 4, description: "Pray for someone facing difficulties in their faith" },
      ],
      [
        { id: 1, description: "Attend a church service or Bible study today" },
        { id: 2, description: "Fast from one meal and use that time for prayer" },
        { id: 3, description: "Call a friend to discuss a spiritual topic" },
        { id: 4, description: "Research answers to a question that challenges your faith" },
      ]
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
      [
        { id: 1, description: "Write down three things you're hopeful for today" },
        { id: 2, description: "Send an encouraging text to someone who is struggling" },
        { id: 3, description: "Replace one negative thought with a hopeful perspective" },
        { id: 4, description: "Look for and note one unexpected blessing today" },
      ],
      [
        { id: 1, description: "Plan something you're looking forward to next week" },
        { id: 2, description: "Read a story of someone who overcame adversity" },
        { id: 3, description: "Create a vision board for a goal you're working toward" },
        { id: 4, description: "Reflect on past challenges you've overcome successfully" },
      ],
      [
        { id: 1, description: "Volunteer or help someone in need to spread hope" },
        { id: 2, description: "Write an encouraging note to your future self" },
        { id: 3, description: "Listen to uplifting music that inspires hope" },
        { id: 4, description: "Share hopeful news rather than focusing on negative headlines" },
      ]
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
      [
        { id: 1, description: "Buy coffee or a meal for a stranger today" },
        { id: 2, description: "Donate $5 or more to a charity of your choice" },
        { id: 3, description: "Spend 30 minutes helping someone with a task" },
        { id: 4, description: "Call a friend or family member just to listen to them" },
      ],
      [
        { id: 1, description: "Leave a generous tip for a service worker today" },
        { id: 2, description: "Organize a small donation drive for a local shelter" },
        { id: 3, description: "Offer to babysit for a parent who needs a break" },
        { id: 4, description: "Help an elderly neighbor with a household chore" },
      ],
      [
        { id: 1, description: "Write a thank you note to someone who serves others" },
        { id: 2, description: "Share a meal with someone who lives alone" },
        { id: 3, description: "Volunteer for one hour at a local organization" },
        { id: 4, description: "Compliment five people sincerely throughout the day" },
      ]
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
      [
        { id: 1, description: "Take 5 minutes to plan your day before starting work" },
        { id: 2, description: "Ask for advice before making an important decision today" },
        { id: 3, description: "Review your spending and identify one way to save" },
        { id: 4, description: "Pause for 10 seconds before responding to a difficult conversation" },
      ],
      [
        { id: 1, description: "Create a pros and cons list for a decision you're facing" },
        { id: 2, description: "Set a specific time limit for social media use today" },
        { id: 3, description: "Research before making a purchase over $50" },
        { id: 4, description: "Plan healthy meals for tomorrow before shopping" },
      ],
      [
        { id: 1, description: "Schedule dedicated time for your most important task today" },
        { id: 2, description: "Ask a clarifying question in a conversation before giving advice" },
        { id: 3, description: "Review your calendar and prepare for upcoming commitments" },
        { id: 4, description: "Set aside 15 minutes to reflect on lessons learned this week" },
      ]
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
      [
        { id: 1, description: "Give proper credit to a colleague or family member for their work" },
        { id: 2, description: "Tip 20% or more for service workers today" },
        { id: 3, description: "Speak up when you witness unfair treatment" },
        { id: 4, description: "Reflect for 5 minutes on a bias you may hold and how to address it" },
      ],
      [
        { id: 1, description: "Pay a fair price for goods rather than bargaining excessively" },
        { id: 2, description: "Research an organization fighting for a cause you care about" },
        { id: 3, description: "Apologize and make amends if you've treated someone unfairly" },
        { id: 4, description: "Listen carefully to someone with a different perspective" },
      ],
      [
        { id: 1, description: "Support a small local business rather than a large corporation" },
        { id: 2, description: "Read about social justice issues for 15 minutes" },
        { id: 3, description: "Ensure you distribute household tasks fairly among family" },
        { id: 4, description: "Write to a local representative about an issue of fairness" },
      ]
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
      [
        { id: 1, description: "Do one thing today that you've been avoiding out of fear" },
        { id: 2, description: "Complete a difficult task without complaining" },
        { id: 3, description: "Stand firm in your principles when pressured to compromise" },
        { id: 4, description: "Offer support to someone going through a hard time" },
      ],
      [
        { id: 1, description: "Have that difficult conversation you've been putting off" },
        { id: 2, description: "Try something new that makes you uncomfortable but will help you grow" },
        { id: 3, description: "Exercise for 20 minutes, pushing past the point of comfort" },
        { id: 4, description: "Face a fear in a small way today (heights, public speaking, etc.)" },
      ],
      [
        { id: 1, description: "Persevere through a challenging task for 30 minutes without breaks" },
        { id: 2, description: "Speak the truth kindly when it would be easier to stay silent" },
        { id: 3, description: "Set a boundary with someone who has been overstepping" },
        { id: 4, description: "Take responsibility for a mistake without making excuses" },
      ]
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
      [
        { id: 1, description: "Skip dessert or limit yourself to one sweet treat today" },
        { id: 2, description: "Take a 4-hour break from social media or screens" },
        { id: 3, description: "Count to 10 before reacting when you feel angry" },
        { id: 4, description: "Drink water instead of a sugary drink with your next meal" },
      ],
      [
        { id: 1, description: "Fast from one specific pleasure for the entire day" },
        { id: 2, description: "Set a timer for 20 minutes of focused work without distractions" },
        { id: 3, description: "Eat mindfully and slowly at one meal, savoring each bite" },
        { id: 4, description: "Stop eating when you feel 80% full rather than completely full" },
      ],
      [
        { id: 1, description: "Limit yourself to one cup of coffee or caffeinated beverage today" },
        { id: 2, description: "Practice silence for 30 minutes, speaking only when necessary" },
        { id: 3, description: "Allow yourself just 15 minutes to worry, then let go" },
        { id: 4, description: "Choose to go to bed on time rather than staying up late" },
      ]
    ]
  }
];
