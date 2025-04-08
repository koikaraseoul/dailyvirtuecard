
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Virtue, Action } from '@/data/virtues';
import { cn } from '@/lib/utils';
import { Book, Star, Circle, Bookmark, Check, StarHalf, CircleArrowDown } from 'lucide-react';

interface VirtueActionsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedVirtue: Virtue | null;
  currentActions: Action[];
}

const iconMap = {
  "book": Book,
  "star": Star,
  "circle": Circle,
  "bookmark": Bookmark,
  "check": Check,
  "star-half": StarHalf,
  "circle-arrow-down": CircleArrowDown
};

const VirtueActions: React.FC<VirtueActionsProps> = ({ 
  isOpen, 
  onOpenChange, 
  selectedVirtue, 
  currentActions 
}) => {
  if (!selectedVirtue) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
  );
};

export default VirtueActions;
