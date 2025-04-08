
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

interface CardControlsProps {
  cardsHidden: boolean;
  selectedCardIndex: number | null;
  isShuffling: boolean;
  onPickupVirtue: () => void;
  onResetCards: () => void;
}

const CardControls: React.FC<CardControlsProps> = ({ 
  cardsHidden, 
  selectedCardIndex, 
  isShuffling, 
  onPickupVirtue, 
  onResetCards 
}) => {
  if (cardsHidden) {
    return (
      <Button 
        onClick={onPickupVirtue} 
        disabled={isShuffling}
        className="bg-virtue-navy hover:bg-virtue-navy/90 text-white text-lg py-6 px-8"
      >
        <BookOpen className="mr-2 h-5 w-5" />
        Pick up a Virtue
      </Button>
    );
  } else if (selectedCardIndex !== null) {
    return (
      <Button 
        onClick={onResetCards} 
        className="bg-virtue-gold hover:bg-virtue-gold/90 text-virtue-navy mt-4"
      >
        Pick Another Virtue
      </Button>
    );
  }
  
  return null;
};

export default CardControls;
