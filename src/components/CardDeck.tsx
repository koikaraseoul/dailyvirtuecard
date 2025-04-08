
import React, { useState, useEffect } from 'react';
import VirtueCard from './VirtueCard';
import { virtues, Virtue } from '@/data/virtues';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CardDeck: React.FC = () => {
  const [deck, setDeck] = useState<Virtue[]>([...virtues]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardsHidden, setCardsHidden] = useState(true);
  const [showActionsDialog, setShowActionsDialog] = useState(false);
  const { toast } = useToast();

  // Initialize with shuffled deck
  useEffect(() => {
    shuffleDeck(false);
  }, []);

  const shuffleDeck = (showToast = true) => {
    if (isShuffling) return;
    
    // Reset states
    setSelectedCardIndex(null);
    setShowActionsDialog(false);
    setIsShuffling(true);
    
    // Create a new shuffled deck
    const newDeck = [...virtues];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    
    setDeck(newDeck);
    
    // Show toast message if needed
    if (showToast) {
      toast({
        title: "Cards Shuffled",
        description: "Select a card to reveal your virtue for today",
      });
    }
    
    // End shuffling animation after a delay
    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (index: number) => {
    if (isShuffling) return;
    
    if (selectedCardIndex === null) {
      // Select a card if none is selected
      setSelectedCardIndex(index);
      toast({
        title: `${deck[index].name} Selected`,
        description: "Click 'View Actions' to see today's actions",
      });
    }
  };

  const handleShowActions = () => {
    setShowActionsDialog(true);
  };

  const pickupVirtue = () => {
    if (isShuffling) return;
    
    // Shuffle the deck first
    shuffleDeck(false);
    
    // Show the cards
    setCardsHidden(false);
    
    // Wait for shuffle animation to complete
    setTimeout(() => {
      // Select a random card
      const randomIndex = Math.floor(Math.random() * deck.length);
      setSelectedCardIndex(randomIndex);
      
      // Show toast message
      toast({
        title: `${deck[randomIndex].name} Selected For Today`,
        description: "Click 'View Actions' to see today's actions",
      });
    }, 1200);
  };

  const selectedVirtue = selectedCardIndex !== null ? deck[selectedCardIndex] : null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Stacked card deck */}
      <div className={`relative h-96 w-64 mb-8 ${cardsHidden ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
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
            <VirtueCard
              virtue={virtue}
              isSelected={selectedCardIndex === index}
              onClick={() => handleCardClick(index)}
              onShowActions={handleShowActions}
            />
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

      {/* Actions Dialog */}
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
                {selectedVirtue.actions.map((action) => (
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

// Define iconMap here too for the dialog
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
