
import React from 'react';
import CardDeck from '@/components/CardDeck';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-white to-virtue-cream">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-virtue-navy mb-3">Daily Virtue Card</h1>
        <div className="w-24 h-1 bg-virtue-gold mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl">
          Discover your daily Christian virtue and practice its associated actions to strengthen your spiritual journey.
        </p>
      </header>
      
      <main className="flex-1 w-full max-w-7xl flex flex-col items-center justify-center">
        <CardDeck />
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Based on the seven Christian virtues: Faith, Hope, Charity, Prudence, Justice, Fortitude, and Temperance.</p>
        <p className="mt-2">Select a card each day and perform its actions to cultivate a virtuous life.</p>
      </footer>
    </div>
  );
};

export default Index;
