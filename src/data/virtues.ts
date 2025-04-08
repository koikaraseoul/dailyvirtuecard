
export interface Action {
  id: number;
  description: string;
}

export interface Virtue {
  id: number;
  name: string;
  description: string;
  color: string;
  actions: Action[][];  // Now an array of 7 action sets
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
      ],
      [
        { id: 1, description: "Read a devotional or biblical commentary for 15 minutes" },
        { id: 2, description: "Practice silent prayer for 10 minutes in the morning" },
        { id: 3, description: "Send an encouraging Bible verse to three friends" },
        { id: 4, description: "Journal about ways God has been faithful to you this week" },
      ],
      [
        { id: 1, description: "Listen to a faith-based podcast during exercise or commute" },
        { id: 2, description: "Look for evidence of God's work in nature today" },
        { id: 3, description: "Recite the Apostles' Creed or another statement of faith" },
        { id: 4, description: "Choose faith over fear when facing a challenge today" },
      ],
      [
        { id: 1, description: "Begin a Bible reading plan that will take you through a book" },
        { id: 2, description: "Pray specifically for someone who has hurt you" },
        { id: 3, description: "Share how your faith has helped you through a difficulty" },
        { id: 4, description: "Write down three promises from scripture you can rely on" },
      ],
      [
        { id: 1, description: "Practice 'breath prayers' throughout your day" },
        { id: 2, description: "Watch a faith-based documentary or sermon video" },
        { id: 3, description: "Create a physical reminder of your faith (artwork, symbol, etc.)" },
        { id: 4, description: "Reflect on a time God answered your prayers unexpectedly" },
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
      ],
      [
        { id: 1, description: "Set a small, achievable goal for today and accomplish it" },
        { id: 2, description: "Create a 'hope jar' and add one positive note to it" },
        { id: 3, description: "Find a quote about hope and display it somewhere visible" },
        { id: 4, description: "Take a 15-minute walk focusing on signs of renewal or growth" },
      ],
      [
        { id: 1, description: "Call someone who might be feeling lonely or isolated" },
        { id: 2, description: "Plant a seed or nurture a plant as a symbol of hope and growth" },
        { id: 3, description: "Write down a worry and reframe it with a hopeful perspective" },
        { id: 4, description: "Watch the sunrise or sunset and reflect on new beginnings" },
      ],
      [
        { id: 1, description: "Share a story of hope with a child or young person" },
        { id: 2, description: "Find three reasons to be hopeful about a difficult situation" },
        { id: 3, description: "Pray or meditate specifically about your hopes for the future" },
        { id: 4, description: "Support a cause that brings hope to marginalized communities" },
      ],
      [
        { id: 1, description: "Start a gratitude practice focusing on unexpected blessings" },
        { id: 2, description: "Choose hope in a situation where you'd normally be cynical" },
        { id: 3, description: "Make a 'hope playlist' of songs that lift your spirits" },
        { id: 4, description: "Look at old photos that remind you of good times ahead" },
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
      ],
      [
        { id: 1, description: "Pick up litter in a public space for 15 minutes" },
        { id: 2, description: "Send a care package to someone going through a hard time" },
        { id: 3, description: "Hold the door open for others throughout your day" },
        { id: 4, description: "Perform a secret act of kindness without recognition" },
      ],
      [
        { id: 1, description: "Donate gently used clothing or household items" },
        { id: 2, description: "Make double of a meal and share with someone in need" },
        { id: 3, description: "Visit a nursing home or send cards to residents" },
        { id: 4, description: "Offer your professional skills for free to someone who needs help" },
      ],
      [
        { id: 1, description: "Give up your seat on public transportation" },
        { id: 2, description: "Let someone go ahead of you in line at the store" },
        { id: 3, description: "Pay for the order of the person behind you" },
        { id: 4, description: "Respond to a social media post with genuine encouragement" },
      ],
      [
        { id: 1, description: "Create a care kit for a homeless person you pass regularly" },
        { id: 2, description: "Send a gift card to someone experiencing financial difficulty" },
        { id: 3, description: "Forgive someone who has wronged you without them asking" },
        { id: 4, description: "Advocate for someone who isn't in the room to defend themselves" },
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
      ],
      [
        { id: 1, description: "Check the weather before planning your day's activities" },
        { id: 2, description: "Double-check an important email or message before sending" },
        { id: 3, description: "Create a budget for an upcoming expense or project" },
        { id: 4, description: "Verify information before sharing news or stories with others" },
      ],
      [
        { id: 1, description: "Prioritize your to-do list by importance rather than urgency" },
        { id: 2, description: "Choose to delay a purchase for 24 hours to avoid impulse buying" },
        { id: 3, description: "Save or archive an important document you might need later" },
        { id: 4, description: "Practice mindful eating for one meal, considering nutrition" },
      ],
      [
        { id: 1, description: "Create a contingency plan for something important happening today" },
        { id: 2, description: "Set up an automatic savings transfer, even if it's small" },
        { id: 3, description: "Evaluate your schedule and eliminate one unnecessary commitment" },
        { id: 4, description: "Ask yourself 'What might I regret?' before making a choice today" },
      ],
      [
        { id: 1, description: "Anticipate a potential problem and take preventive action now" },
        { id: 2, description: "Choose a healthy option when offered a treat or indulgence" },
        { id: 3, description: "Organize one small area of your home or workspace" },
        { id: 4, description: "Set a reminder for an upcoming deadline or important event" },
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
      ],
      [
        { id: 1, description: "Purchase fair trade products when shopping today" },
        { id: 2, description: "Advocate for someone who's being overlooked or interrupted" },
        { id: 3, description: "Educate yourself on the history of a marginalized group" },
        { id: 4, description: "Resolve to pay people fairly for their time and work" },
      ],
      [
        { id: 1, description: "Hold yourself to the same standards you expect from others" },
        { id: 2, description: "Return something you've borrowed promptly and in good condition" },
        { id: 3, description: "Sign a petition for a cause promoting equality or fairness" },
        { id: 4, description: "Offer equal speaking time to all participants in a meeting" },
      ],
      [
        { id: 1, description: "Share information about resources equally with those who need it" },
        { id: 2, description: "Stand up for someone being treated unfairly in public" },
        { id: 3, description: "Learn about environmental justice issues in your community" },
        { id: 4, description: "Consider how your actions might unintentionally impact others" },
      ],
      [
        { id: 1, description: "Distribute opportunities fairly among family members or colleagues" },
        { id: 2, description: "Make a donation to a legal aid organization helping those in need" },
        { id: 3, description: "Challenge a stereotype or prejudice you notice in conversation" },
        { id: 4, description: "Ensure equal access to resources in a group setting" },
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
      ],
      [
        { id: 1, description: "Stand up for yourself when someone dismisses your ideas" },
        { id: 2, description: "Push through physical discomfort in a workout or physical task" },
        { id: 3, description: "Share a vulnerable story that might help someone else" },
        { id: 4, description: "Decline a request that would compromise your values" },
      ],
      [
        { id: 1, description: "Advocate for someone else who isn't being heard" },
        { id: 2, description: "Continue working on a project despite facing criticism" },
        { id: 3, description: "Reach out to apologize first after a disagreement" },
        { id: 4, description: "Try again at something you previously failed at" },
      ],
      [
        { id: 1, description: "Make an important phone call you've been dreading" },
        { id: 2, description: "Express an unpopular but necessary opinion in a group setting" },
        { id: 3, description: "Resist peer pressure to participate in gossip or negativity" },
        { id: 4, description: "Stay calm under pressure during a stressful situation" },
      ],
      [
        { id: 1, description: "Practice resilience by bouncing back quickly from disappointment" },
        { id: 2, description: "Defend someone being treated unfairly when others won't" },
        { id: 3, description: "Ask for help when you need it, despite wanting to appear strong" },
        { id: 4, description: "Follow through on a commitment when it would be easier to quit" },
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
      ],
      [
        { id: 1, description: "Wait 24 hours before making a non-essential purchase" },
        { id: 2, description: "Limit your portions at one meal today" },
        { id: 3, description: "Check your notifications only at specific times today" },
        { id: 4, description: "Practice taking 3 deep breaths before responding to a frustration" },
      ],
      [
        { id: 1, description: "Choose a book over TV or digital entertainment for one hour" },
        { id: 2, description: "Leave one item you want in your shopping cart for next time" },
        { id: 3, description: "Cut back on salt or sugar in one meal you prepare" },
        { id: 4, description: "Pause before having a second serving of food" },
      ],
      [
        { id: 1, description: "Moderate your voice volume in conversation today" },
        { id: 2, description: "Limit your spending to necessities only for the day" },
        { id: 3, description: "Turn off all notifications for 2 hours to focus on a task" },
        { id: 4, description: "Avoid complaining or negative talk for the entire day" },
      ],
      [
        { id: 1, description: "Fast from online shopping for 24 hours" },
        { id: 2, description: "Practice saying 'no' to one unnecessary commitment" },
        { id: 3, description: "Keep your opinions to yourself in a conversation where you'd usually dominate" },
        { id: 4, description: "End one habit for today that tends toward excess (snacking, scrolling, etc.)" },
      ]
    ]
  }
];
