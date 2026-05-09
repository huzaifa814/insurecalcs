'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function CobraVsMarketplace() {
  const [employerPremium, setEP] = useState(700);
  const [employerContrib, setEC] = useState(80);
  const [householdIncome, setHI] = useState(50000);
  const [familySize, setFS] = useState(2);
  const cobraMonthly = Math.round(employerPremium * (1 + 0.02));
  const fpl2026 = 15060 + (familySize - 1) * 5380;
  const incomePctFPL = (householdIncome / fpl2026) * 100;
  const benchmarkSilver = 500;
  const expectedContribPct = incomePctFPL <= 150 ? 0 : incomePctFPL <= 200 ? 0.02 : incomePctFPL <= 250 ? 0.04 : incomePctFPL <= 400 ? 0.085 : 0.085;
  const acaMonthly = Math.max(0, Math.round((householdIncome * expectedContribPct) / 12));
  const cobraAnnual = cobraMonthly * 12;
  const acaAnnual = acaMonthly * 12;
  const youSave = cobraAnnual - acaAnnual;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Employer's Total Monthly Premium"><NumInput value={employerPremium} onChange={setEP} prefix="$" hint="The full premium — what employer + you pay combined." /></Field>
        <Field label="Employer's Share % (you used to pay only the rest)"><NumInput value={employerContrib} onChange={setEC} step="1" /></Field>
        <Field label="Household Income (next 12 months)"><NumInput value={householdIncome} onChange={setHI} prefix="$" /></Field>
        <Field label="Family Size"><NumInput value={familySize} onChange={setFS} /></Field>
      </Card>
      <Result label={youSave > 0 ? `Marketplace saves you ${fmt(youSave)}/year` : `COBRA wins by ${fmt(-youSave)}/year`} value={fmt(Math.abs(youSave))} sub={<>
        <div><span className="text-gray-500">COBRA monthly</span><strong className="block text-lg">{fmt(cobraMonthly)}</strong></div>
        <div><span className="text-gray-500">ACA expected monthly</span><strong className="block text-lg">{fmt(acaMonthly)}</strong></div>
        <div><span className="text-gray-500">Income % of FPL</span><strong className="block text-lg">{incomePctFPL.toFixed(0)}%</strong></div>
      </>} hint="ACA subsidies (PTC) cap your premium at 0-8.5% of income through 2025+. COBRA is rarely cheaper unless you've already hit deductible/OOP for the year." />
    </div>
  );
}