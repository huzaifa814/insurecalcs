'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function RentersInsuranceCalculator() {
  const [electronics, setE] = useState(8000);
  const [furniture, setF] = useState(6000);
  const [clothing, setC] = useState(4000);
  const [jewelry, setJ] = useState(2000);
  const [other, setO] = useState(2000);
  const [liability, setL] = useState(100000);
  const total = electronics + furniture + clothing + jewelry + other;
  const annual = Math.round(total * 0.0012 + liability * 0.0008);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Electronics & Tech"><NumInput value={electronics} onChange={setE} prefix="$" /></Field>
        <Field label="Furniture"><NumInput value={furniture} onChange={setF} prefix="$" /></Field>
        <Field label="Clothing"><NumInput value={clothing} onChange={setC} prefix="$" /></Field>
        <Field label="Jewelry / Valuables"><NumInput value={jewelry} onChange={setJ} prefix="$" hint="Most policies cap jewelry at $1-2k without scheduling." /></Field>
        <Field label="Other Personal Items"><NumInput value={other} onChange={setO} prefix="$" /></Field>
        <Field label="Personal Liability Coverage"><NumInput value={liability} onChange={setL} prefix="$" /></Field>
      </Card>
      <Result label="Estimated annual renters insurance" value={fmt(annual)} sub={<>
        <div><span className="text-gray-500">Total contents value</span><strong className="block text-lg">{fmt(total)}</strong></div>
        <div><span className="text-gray-500">Liability coverage</span><strong className="block text-lg">{fmt(liability)}</strong></div>
        <div><span className="text-gray-500">Cost per month</span><strong className="block text-lg">{fmt(Math.round(annual/12))}</strong></div>
      </>} hint="Renters insurance is cheap ($150-$300/yr typical). Always replacement-cost, not actual-cash-value." />
    </div>
  );
}