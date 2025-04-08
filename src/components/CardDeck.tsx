
import React, { useState, useEffect } from 'react';
import VirtueCard from './VirtueCard';
import { virtues, Virtue } from '@/data/virtues';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CardDeck: React.FC = () => {
  const [deck, setDeck] = useState<Virtue[]>([...virtues]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const { toast } = useToast();

  // Initialize with shuffled deck
  useEffect(() => {
    shuffleDeck();
  }, []);

  const shuffleDeck = () => {
    if (isShuffling) return;
    
    // Reset states
    setSelectedCardIndex(null);
    setFlippedCardIndex(null);
    setIsShuffling(true);
    
    // Create a new shuffled deck
    const newDeck = [...virtues];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    
    setDeck(newDeck);
    
    // Show toast message
    toast({
      title: "Cards Shuffled",
      description: "Select a card to reveal your virtue for today",
    });
    
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
        description: "Click the card to reveal your actions for today",
      });
    } else if (selectedCardIndex === index) {
      // Flip the selected card
      setFlippedCardIndex(flippedCardIndex === index ? null : index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Stacked card deck */}
      <div className="relative h-96 w-64 mb-8">
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
              isFlipped={flippedCardIndex === index}
              isSelected={selectedCardIndex === index}
              onClick={() => handleCardClick(index)}
            />
          </div>
        ))}
      </div>
      
      <Button 
        onClick={shuffleDeck} 
        disabled={isShuffling}
        className="bg-virtue-navy hover:bg-virtue-navy/90 text-white"
      >
        <Shuffle className="mr-2 h-4 w-4" />
        Shuffle Virtues
      </Button>
    </div>
  );
};

export default CardDeck;
