"use client";

import React from 'react';
import TaxHero from '../components/TaxHero';
import TaxServicesSection from '../components/TaxServicesSection';
import TaxClosingStatement from '../components/TaxClosingStatement';

export default function TaxPage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>

      <TaxHero />
      <TaxServicesSection />
      <TaxClosingStatement />
      </Suspense>
    </div>
  );
}
