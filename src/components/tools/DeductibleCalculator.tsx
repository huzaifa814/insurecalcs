'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function DeductibleCalculator() {
  const [premLow, setPL] = useState(1800);
  const [premHigh, setPH] = useState(1100);
  const [dedLow, setDL] = useState(500);
  const [dedHigh, setDH] = useState(2500);
  const [years, setYears] = useState(5);
  const [claimProb, setProb] = useState(15);
  const annualSavings = premLow - premHigh;
  const totalSavings = annualSavings * years;
  const expectedClaims = (claimProb / 100) * years;
  const expectedExtraPaid = expectedClaims * (dedHigh - dedLow);
  const netSavings = totalSavings - expectedExtraPaid;
  return (
    <div className="space-y-6">
      <Card>
        <Field label={`Premium with $${dedLow} deductible (annual)`}><NumInput value={premLow} onChange={setPL} prefix="$" /></Field>
        <Field label={`Premium with $${dedHigh} deductible (annual)`}><NumInput value={premHigh} onChange={setPH} prefix="$" /></Field>
        <Field label="Low Deductible $"><NumInput value={dedLow} onChange={setDL} prefix="$" /></Field>
        <Field label="High Deductible $"><NumInput value={dedHigh} onChange={setDH} prefix="$" /></Field>
        <Field label="Years to Project"><NumInput value={years} onChange={setYears} /></Field>
        <Field label="Probability of a claim per year (%)"><NumInput value={claimProb} onChange={setProb} step="1" /></Field>
      </Card>
      <Result label={`Expected savings over ${years} years (high deductible route)`} value={fmt(netSavings)} sub={<>
        <div><span className="text-gray-500">Premium savings</span><strong className="block text-lg">{fmt(totalSavings)}</strong></div>
        <div><span className="text-gray-500">Expected extra paid in claims</span><strong className="block text-lg">{fmt(expectedExtraPaid)}</strong></div>
        <div><span className="text-gray-500">Annual premium gap</span><strong className="block text-lg">{fmt(annualSavings)}</strong></div>
      </>} hint="If probability × deductible-difference exceeds annual premium savings, the lower deductible wins. Use the worst-case scenario you can comfortably absorb." />
    </div>
  );
}