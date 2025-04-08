
import React from 'react';
import { useVirtueLogic } from './virtue/useVirtueLogic';
import CardDisplay from './virtue/CardDisplay';
import CardControls from './virtue/CardControls';
import VirtueActions from './virtue/VirtueActions';

const CardDeck: React.FC = () => {
  const {
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
  } = useVirtueLogic();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CardDisplay 
        deck={deck}
        selectedCardIndex={selectedCardIndex}
        isShuffling={isShuffling}
        cardsHidden={cardsHidden}
        onCardClick={handleCardClick}
        onShowActions={handleShowActions}
      />
      
      <CardControls 
        cardsHidden={cardsHidden}
        selectedCardIndex={selectedCardIndex}
        isShuffling={isShuffling}
        onPickupVirtue={pickupVirtue}
        onResetCards={resetCards}
      />

      <VirtueActions 
        isOpen={showActionsDialog} 
        onOpenChange={setShowActionsDialog}
        selectedVirtue={selectedVirtue}
        currentActions={currentActions}
      />
    </div>
  );
};

export default CardDeck;
