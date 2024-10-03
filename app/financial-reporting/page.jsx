"use client";  // Ensures the component is treated as a client-side component

import React, { Suspense } from 'react';
import FinancialReportingHero from '../components/FinancialReportingHero';
import FinancialServicesSection from '../components/FinancialServicesSection';

export default function FinancialReportingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FinancialReportingHero />
      <FinancialServicesSection />
    </Suspense>
  );
}
