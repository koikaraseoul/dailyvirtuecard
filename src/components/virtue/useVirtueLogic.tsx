
import { useState, useEffect } from 'react';
import { virtues, Virtue, Action } from '@/data/virtues';
import { useToast } from '@/hooks/use-toast';

export const useVirtueLogic = () => {
  const [deck, setDeck] = useState<Virtue[]>([...virtues]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardsHidden, setCardsHidden] = useState(true);
  const [showActionsDialog, setShowActionsDialog] = useState(false);
  const [lastUpdateDate, setLastUpdateDate] = useState<string>('');
  const [currentActionSet, setCurrentActionSet] = useState<number>(0);
  const { toast } = useToast();
  
  useEffect(() => {
    const getTodayDate = () => {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    };

    const getActionSetFromTime = () => {
      const now = new Date();
      const hourBasedSet = now.getHours() % 7;
      console.log("Hour-based action set:", hourBasedSet);
      return hourBasedSet;
    };

    const today = getTodayDate();
    const storedDate = localStorage.getItem('lastVirtueUpdateDate');
    
    console.log("Today's date:", today);
    console.log("Stored date:", storedDate);
    
    const newActionSet = getActionSetFromTime();
    setCurrentActionSet(newActionSet);
    
    localStorage.setItem('lastVirtueUpdateDate', today);
    localStorage.setItem('currentVirtueActionSet', newActionSet.toString());
    
    console.log("Using action set:", newActionSet);
    
    if (storedDate && storedDate !== today) {
      toast({
        title: "New Actions Available",
        description: "Your virtue actions have been refreshed!",
      });
    }
    
    shuffleDeck(false);
  }, []);

  const shuffleDeck = (showToast = true) => {
    if (isShuffling) return;
    
    setSelectedCardIndex(null);
    setShowActionsDialog(false);
    setIsShuffling(true);
    
    const newDeck = [...virtues];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    
    setDeck(newDeck);
    
    if (showToast) {
      toast({
        title: "Cards Shuffled",
        description: "Select a card to reveal your virtue for today",
      });
    }
    
    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (index: number) => {
    if (isShuffling) return;
    
    if (selectedCardIndex === null) {
      setSelectedCardIndex(index);
      toast({
        description: "Click 'View Actions' to see today's actions",
      });
    }
  };

  const handleShowActions = () => {
    setShowActionsDialog(true);
  };

  const pickupVirtue = () => {
    if (isShuffling) return;
    
    shuffleDeck(false);
    
    setCardsHidden(false);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * deck.length);
      setSelectedCardIndex(randomIndex);
      
      toast({
        description: "Click 'View Actions' to see today's actions",
      });
    }, 1200);
  };

  const resetCards = () => {
    setCardsHidden(true);
    setSelectedCardIndex(null);
    setShowActionsDialog(false);
    shuffleDeck(false);
  };

  const getCurrentActions = (virtue: Virtue): Action[] => {
    console.log(`Getting actions for set ${currentActionSet}`);
    return virtue.actions[currentActionSet] || virtue.actions[0];
  };

  const selectedVirtue = selectedCardIndex !== null ? deck[selectedCardIndex] : null;
  const currentActions = selectedVirtue ? getCurrentActions(selectedVirtue) : [];

  return {
    deck,
    selectedCardIndex,
    isShuffling,
    cardsHidden,
    showActionsDialog,
    setShowActionsDialog,
    selectedVirtue,
    currentActions,
    handleCardClick,
    handleShowActions,
    pickupVirtue,
    resetCards
  };
};
