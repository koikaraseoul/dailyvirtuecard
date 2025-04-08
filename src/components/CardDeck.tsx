
import React, { useState, useEffect } from 'react';
import VirtueCard from './VirtueCard';
import { virtues, Virtue } from '@/data/virtues';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CardDeck: React.FC = () => {
  const [deck, setDeck] = useState<Virtue[]>([...virtues]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardsHidden, setCardsHidden] = useState(true);
  const { toast } = useToast();

  // Initialize with shuffled deck
  useEffect(() => {
    shuffleDeck(false);
  }, []);

  const shuffleDeck = (showToast = true) => {
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
        description: "Click the card to reveal your actions for today",
      });
    } else if (selectedCardIndex === index) {
      // Flip the selected card
      setFlippedCardIndex(flippedCardIndex === index ? null : index);
    }
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
        description: "Click the card to reveal your actions for today",
      });
    }, 1200);
  };

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
              isFlipped={flippedCardIndex === index}
              isSelected={selectedCardIndex === index}
              onClick={() => handleCardClick(index)}
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
              setFlippedCardIndex(null);
              shuffleDeck(false);
            }} 
            className="bg-virtue-gold hover:bg-virtue-gold/90 text-virtue-navy mt-4"
          >
            Pick Another Virtue
          </Button>
        )
      )}
    </div>
  );
};

export default CardDeck;
