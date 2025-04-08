
import React from 'react';
import VirtueCard from '../VirtueCard';
import { Virtue } from '@/data/virtues';

interface CardDisplayProps {
  deck: Virtue[];
  selectedCardIndex: number | null;
  isShuffling: boolean;
  cardsHidden: boolean;
  onCardClick: (index: number) => void;
  onShowActions: () => void;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ 
  deck, 
  selectedCardIndex, 
  isShuffling, 
  cardsHidden, 
  onCardClick, 
  onShowActions 
}) => {
  return (
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
              onClick={() => onCardClick(index)}
              onShowActions={onShowActions}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
