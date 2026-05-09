'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function UmbrellaInsuranceCalculator() {
  const [netWorth, setNW] = useState(500000);
  const [income, setInc] = useState(120000);
  const [risky, setRisky] = useState(0);
  const baseNeed = Math.max(netWorth, income * 5);
  const riskyAdd = risky * 250000;
  const need = Math.ceil((baseNeed + riskyAdd) / 1000000) * 1000000;
  const annualPremium = Math.round(need / 1000000 * 200 + (risky * 100));
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Net Worth"><NumInput value={netWorth} onChange={setNW} prefix="$" /></Field>
        <Field label="Annual Income"><NumInput value={income} onChange={setInc} prefix="$" hint="Future earnings can be targeted in lawsuits — protect them." /></Field>
        <Field label="Risk Multipliers (pool, teen driver, dog, rental property — count)" span><NumInput value={risky} onChange={setRisky} /></Field>
      </Card>
      <Result label="Recommended umbrella coverage" value={fmt(need)} sub={<>
        <div><span className="text-gray-500">Net worth basis</span><strong className="block text-lg">{fmt(netWorth)}</strong></div>
        <div><span className="text-gray-500">Income basis (5x)</span><strong className="block text-lg">{fmt(income*5)}</strong></div>
        <div><span className="text-gray-500">Est. annual premium</span><strong className="block text-lg">{fmt(annualPremium)}</strong></div>
      </>} hint="Umbrella sits on top of auto + home liability. Cheap insurance — typically $200-$400/yr per $1M of coverage." />
    </div>
  );
}