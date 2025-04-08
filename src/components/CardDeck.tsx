
import React, { useState, useEffect } from 'react';
import VirtueCard from './VirtueCard';
import { virtues, Virtue, Action } from '@/data/virtues';
import { Button } from '@/components/ui/button';
import { BookOpen, Book, Star, Circle, Bookmark, Check, StarHalf, CircleArrowDown, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

const CardDeck: React.FC = () => {
  const [deck, setDeck] = useState<Virtue[]>([...virtues]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardsHidden, setCardsHidden] = useState(true);
  const [showActionsDialog, setShowActionsDialog] = useState(false);
  const [lastUpdateDate, setLastUpdateDate] = useState<string>('');
  const [currentActionSet, setCurrentActionSet] = useState<number>(0);
  const { toast } = useToast();

  useEffect(() => {
    // Format date as YYYY-MM-DD
    const getTodayDate = () => {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    };

    const today = getTodayDate();
    const storedDate = localStorage.getItem('lastVirtueUpdateDate');
    const storedActionSet = localStorage.getItem('currentVirtueActionSet');
    
    console.log("Today's date:", today);
    console.log("Stored date:", storedDate);
    console.log("Current action set:", storedActionSet ? parseInt(storedActionSet) : 0);
    
    if (storedDate) {
      setLastUpdateDate(storedDate);
      
      // Check if the date has changed
      if (storedDate !== today) {
        console.log("New day detected! Updating action set...");
        const newActionSet = storedActionSet ? (parseInt(storedActionSet) + 1) % 7 : 1;
        setCurrentActionSet(newActionSet);
        localStorage.setItem('currentVirtueActionSet', newActionSet.toString());
        localStorage.setItem('lastVirtueUpdateDate', today);
        
        toast({
          title: "New Day, New Actions",
          description: "Your virtue actions have been refreshed for today!",
        });
      } else {
        console.log("Same day, keeping current action set");
        setCurrentActionSet(storedActionSet ? parseInt(storedActionSet) : 0);
      }
    } else {
      console.log("First visit, initializing date and action set");
      setLastUpdateDate(today);
      setCurrentActionSet(0);
      localStorage.setItem('lastVirtueUpdateDate', today);
      localStorage.setItem('currentVirtueActionSet', '0');
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

  const getCurrentActions = (virtue: Virtue): Action[] => {
    console.log(`Getting actions for set ${currentActionSet}`);
    return virtue.actions[currentActionSet] || virtue.actions[0];
  };

  const selectedVirtue = selectedCardIndex !== null ? deck[selectedCardIndex] : null;
  const currentActions = selectedVirtue ? getCurrentActions(selectedVirtue) : [];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`relative h-96 w-64 mb-8 ${cardsHidden ? 'opacity-100' : 'opacity-100 transition-opacity duration-500'}`}>
        {deck.map((virtue, index) => (
          <div
            key={virtue.id}
            className={`absolute transition-all duration-500 
                ${selectedCardIndex !== null 
                  ? (selectedCardIndex === index 
                      ? 'top-0 left-0 z-30' 
                      : `opacity-0 -z-10`) 
                  : `top-${Math.min(index * 2, 10)}px left-${Math.min(index * 2, 10)}px z-${30 - index}`}
                ${isShuffling ? 'animate-shuffle' : ''}
            `}
            style={{
              top: selectedCardIndex !== null 
                ? (selectedCardIndex === index ? 0 : 0) 
                : Math.min(index * 2, 10),
              left: selectedCardIndex !== null 
                ? (selectedCardIndex === index ? 0 : 0) 
                : Math.min(index * 2, 10),
              zIndex: selectedCardIndex !== null 
                ? (selectedCardIndex === index ? 30 : -10) 
                : 30 - index,
              transform: isShuffling ? `rotate(${Math.random() * 10 - 5}deg)` : 'none'
            }}
          >
            {cardsHidden ? (
              <div className="card-back w-64 h-96 rounded-lg border border-virtue-navy/20 bg-virtue-cream shadow-lg flex flex-col items-center justify-center">
                <div className="w-24 h-24 border-2 border-virtue-navy rounded-full flex items-center justify-center relative">
                  <div className="absolute w-1 h-12 bg-virtue-navy top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-12 h-1 bg-virtue-navy top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="mt-4 w-3/4 h-px bg-virtue-navy/30"></div>
                <div className="mt-6 text-lg font-cinzel text-virtue-navy/70 text-center">
                  Daily Virtue
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full border-[12px] border-virtue-navy/5 rounded-lg"></div>
                </div>
              </div>
            ) : (
              <VirtueCard
                virtue={virtue}
                isSelected={selectedCardIndex === index}
                onClick={() => handleCardClick(index)}
                onShowActions={handleShowActions}
              />
            )}
          </div>
        ))}
      </div>
      
      {cardsHidden ? (
        <Button 
          onClick={pickupVirtue} 
          disabled={isShuffling}
          className="bg-virtue-navy hover:bg-virtue-navy/90 text-white text-lg py-6 px-8"
        >
          <BookOpen className="mr-2 h-5 w-5" />
          Pick up a Virtue
        </Button>
      ) : (
        selectedCardIndex !== null && (
          <Button 
            onClick={() => {
              setCardsHidden(true);
              setSelectedCardIndex(null);
              setShowActionsDialog(false);
              shuffleDeck(false);
            }} 
            className="bg-virtue-gold hover:bg-virtue-gold/90 text-virtue-navy mt-4"
          >
            Pick Another Virtue
          </Button>
        )
      )}

      {selectedVirtue && (
        <Dialog open={showActionsDialog} onOpenChange={setShowActionsDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center flex flex-col items-center">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-2", selectedVirtue.color)}>
                  {(() => {
                    const IconComponent = iconMap[selectedVirtue.icon as keyof typeof iconMap];
                    return <IconComponent className="text-white" size={18} />;
                  })()}
                </div>
                <span>{selectedVirtue.name}: Today's Actions</span>
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <ul className="space-y-4">
                {currentActions.map((action) => (
                  <li key={action.id} className="flex items-start">
                    <div className="min-w-5 mt-1 mr-3">
                      <div className={cn("w-3 h-3 rounded-full", selectedVirtue.color)}></div>
                    </div>
                    <p className="text-gray-700">{action.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              Choose one or more of these actions to practice {selectedVirtue.name} today
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const iconMap = {
  "book": Book,
  "star": Star,
  "circle": Circle,
  "bookmark": Bookmark,
  "check": Check,
  "star-half": StarHalf,
  "circle-arrow-down": CircleArrowDown
};

export default CardDeck;
