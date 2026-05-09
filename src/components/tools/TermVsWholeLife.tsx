'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function TermVsWholeLife() {
  const [age, setAge] = useState(35);
  const [face, setFace] = useState(500000);
  const [years, setYears] = useState(20);
  const [returnPct, setRet] = useState(7);
  // Rough industry monthly premiums per $500k face for healthy male
  const termRate = (age * 0.7 + 8) / 12; // monthly $/per $500k roughly
  const wholeRate = termRate * 12; // whole life is ~10-15x term
  const termAnnual = (termRate * 12) * (face / 500000);
  const wholeAnnual = (wholeRate * 12) * (face / 500000);
  const r = returnPct / 100 / 12;
  const n = years * 12;
  // Term: invest difference monthly
  const monthlyDiff = (wholeAnnual - termAnnual) / 12;
  const investedFV = monthlyDiff * ((Math.pow(1 + r, n) - 1) / r);
  // Whole life cash value: very rough — typically 60-70% of total premiums after 20 years
  const wholeCV = wholeAnnual * years * 0.6;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Current Age"><NumInput value={age} onChange={setAge} /></Field>
        <Field label="Coverage Amount"><NumInput value={face} onChange={setFace} prefix="$" /></Field>
        <Field label="Time Horizon (years)"><NumInput value={years} onChange={setYears} /></Field>
        <Field label="Investment Return % (term route)"><NumInput value={returnPct} onChange={setRet} step="0.1" /></Field>
      </Card>
      <Result label={`After ${years} years — Term + Invest the Difference wins by`} value={fmt(Math.max(0, investedFV - wholeCV))} sub={<>
        <div><span className="text-gray-500">Term annual</span><strong className="block text-lg">{fmt(termAnnual)}</strong></div>
        <div><span className="text-gray-500">Whole life annual</span><strong className="block text-lg">{fmt(wholeAnnual)}</strong></div>
        <div><span className="text-gray-500">Term-route invested FV</span><strong className="block text-lg">{fmt(investedFV)}</strong></div>
      </>} hint="Whole life cash value typically lags 'buy term + invest the difference' by 30-60% over 20 years. Numbers approximate; actual rates vary by carrier and health." />
    </div>
  );
}