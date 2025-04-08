
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Virtue } from '@/data/virtues';
import { Book, Star, Circle, Bookmark, Check, StarHalf, CircleArrowDown } from 'lucide-react';

interface VirtueCardProps {
  virtue: Virtue;
  isFlipped: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const VirtueCard: React.FC<VirtueCardProps> = ({ 
  virtue, 
  isFlipped, 
  isSelected, 
  onClick 
}) => {
  const iconMap = {
    "book": Book,
    "star": Star,
    "circle": Circle,
    "bookmark": Bookmark,
    "check": Check,
    "star-half": StarHalf,
    "circle-arrow-down": CircleArrowDown
  };
  
  const IconComponent = iconMap[virtue.icon as keyof typeof iconMap];

  return (
    <div 
      className={cn(
        "card-container relative w-64 h-96 mx-2 cursor-pointer",
        isSelected ? "z-10 scale-110" : "scale-100",
        isSelected ? "animate-float" : ""
      )}
      onClick={onClick}
    >
      <div className={cn("card-inner w-full h-full transition-all duration-500", 
                         isFlipped ? "flipped" : "")}>
        {/* Front of card */}
        <div className="card-front rounded-lg border border-virtue-navy/20 bg-white shadow-lg w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
          <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", virtue.color)}>
            <IconComponent className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-virtue-navy mb-1">{virtue.name}</h2>
          <div className="w-16 h-1 bg-virtue-gold mb-4"></div>
          <p className="text-center text-gray-600">{virtue.description}</p>
          <div className="mt-6 text-sm text-virtue-navy/70">
            Click to reveal actions
          </div>
        </div>
        
        {/* Back of card */}
        <div className="card-back rounded-lg border border-virtue-navy/20 bg-white shadow-lg w-full h-full flex flex-col p-6 overflow-hidden">
          <h3 className="text-xl font-bold text-virtue-navy mb-4 text-center">Today's Actions:</h3>
          <ul className="space-y-3 flex-1">
            {virtue.actions.map((action) => (
              <li key={action.id} className="flex items-start">
                <div className="min-w-5 mt-1 mr-2">
                  <div className={cn("w-3 h-3 rounded-full", virtue.color)}></div>
                </div>
                <p className="text-gray-700">{action.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-virtue-navy/70 text-center">
            Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtueCard;
