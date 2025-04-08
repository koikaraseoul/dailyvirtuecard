
import React from 'react';
import { cn } from '@/lib/utils';
import { Virtue } from '@/data/virtues';
import { Book, Star, Circle, Bookmark, Check, StarHalf, CircleArrowDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VirtueCardProps {
  virtue: Virtue;
  isSelected: boolean;
  onClick: () => void;
  onShowActions: () => void;
}

const VirtueCard: React.FC<VirtueCardProps> = ({ 
  virtue, 
  isSelected, 
  onClick,
  onShowActions
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
      <div className="card-inner w-full h-full">
        {/* Card face */}
        <div className="card-front rounded-lg border border-virtue-navy/20 bg-white shadow-lg w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
          <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", virtue.color)}>
            <IconComponent className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-virtue-navy mb-1">{virtue.name}</h2>
          <div className="w-16 h-1 bg-virtue-gold mb-4"></div>
          <p className="text-center text-gray-600 mb-2">{virtue.description}</p>
          
          {isSelected && (
            <>
              <button 
                className="mt-2 mb-2 px-4 py-2 rounded-md bg-virtue-gold text-virtue-navy font-medium hover:bg-virtue-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-virtue-gold/50"
                onClick={(e) => {
                  e.stopPropagation();
                  onShowActions();
                }}
              >
                View Actions
              </button>
              
              <div className="w-full h-px bg-gray-200 my-3"></div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-medium text-virtue-navy">Stands Against:</p>
                <h3 className="text-lg font-semibold text-red-600 mb-1">{virtue.opposingVice}</h3>
                <p className="text-xs text-center text-gray-500">{virtue.viceDescription}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtueCard;
