'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function TravelInsuranceCalculator() {
  const [tripCost, setT] = useState(3500);
  const [age, setA] = useState(35);
  const [destination, setD] = useState('domestic');
  const [coverage, setC] = useState('medical-cancel');
  const ageF = age < 30 ? 0.85 : age < 50 ? 1 : age < 65 ? 1.5 : 2.5;
  const destF = destination === 'domestic' ? 1 : destination === 'developed' ? 1.3 : 1.8;
  const covPct = coverage === 'medical' ? 0.04 : coverage === 'medical-cancel' ? 0.07 : coverage === 'cancel-for-any' ? 0.11 : 0.045;
  const premium = Math.round(tripCost * covPct * ageF * destF);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Trip Cost (non-refundable)"><NumInput value={tripCost} onChange={setT} prefix="$" /></Field>
        <Field label="Age of Traveler"><NumInput value={age} onChange={setA} /></Field>
        <Field label="Destination Type"><Select value={destination} onChange={setD} options={[{value:'domestic',label:'Domestic (US)'},{value:'developed',label:'Developed country (Europe, Japan)'},{value:'developing',label:'Developing region (Africa, S Asia)'}]} /></Field>
        <Field label="Coverage Level"><Select value={coverage} onChange={setC} options={[{value:'medical',label:'Medical only'},{value:'medical-cancel',label:'Medical + Trip Cancellation'},{value:'baggage',label:'Comprehensive (+ baggage)'},{value:'cancel-for-any',label:'Cancel For Any Reason (CFAR)'}]} /></Field>
      </Card>
      <Result label="Estimated travel insurance" value={fmt(premium)} sub={<>
        <div><span className="text-gray-500">% of trip cost</span><strong className="block text-lg">{(covPct*ageF*destF*100).toFixed(1)}%</strong></div>
        <div><span className="text-gray-500">Trip insured</span><strong className="block text-lg">{fmt(tripCost)}</strong></div>
        <div><span className="text-gray-500">Per-day cost (7 day trip)</span><strong className="block text-lg">{fmt(Math.round(premium/7))}</strong></div>
      </>} hint="4-10% of trip cost is typical. CFAR adds ~50% but only refunds 50-75% of trip cost." />
    </div>
  );
}