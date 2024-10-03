"use client";

import React from 'react';
import S4FinanceHero from '../components/S4FinanceHero';
import S4FinanceServicesSection from '../components/S4FinanceServicesSection';
import S4FinanceClosingStatement from '../components/S4FinanceClosingStatement';

export default function S4FinancePage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
      <S4FinanceHero />
      <S4FinanceServicesSection />
      <S4FinanceClosingStatement />
      </Suspense>
    </div>
  );
}
