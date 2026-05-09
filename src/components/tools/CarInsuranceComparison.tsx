'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function CarInsuranceComparison() {
  const [a, setA] = useState({ name: 'Quote A', prem: 1400, ded: 500, liab: 100000 });
  const [b, setB] = useState({ name: 'Quote B', prem: 1100, ded: 1000, liab: 100000 });
  const [c, setC] = useState({ name: 'Quote C', prem: 1250, ded: 500, liab: 300000 });
  const upd = <K extends keyof typeof a>(set: typeof setA, key: K) => (v: number | string) => set((q) => ({ ...q, [key]: v }));
  const tco = (q: typeof a) => Math.round(q.prem + q.ded * 0.15);
  const winner = [a,b,c].reduce((w, q) => tco(q) < tco(w) ? q : w);
  return (
    <div className="space-y-6">
      {[
        { state: a, set: setA, label: 'Quote A' },
        { state: b, set: setB, label: 'Quote B' },
        { state: c, set: setC, label: 'Quote C' },
      ].map(({ state, set, label }) => (
        <Card key={label}>
          <Field label={`${label} — Annual Premium`}><NumInput value={state.prem} onChange={upd(set, 'prem') as (n:number)=>void} prefix="$" /></Field>
          <Field label={`${label} — Deductible`}><NumInput value={state.ded} onChange={upd(set, 'ded') as (n:number)=>void} prefix="$" /></Field>
          <Field label={`${label} — Liability Limit`} span><NumInput value={state.liab} onChange={upd(set, 'liab') as (n:number)=>void} prefix="$" /></Field>
        </Card>
      ))}
      <Result label={`Lowest expected total cost: ${winner.name}`} value={fmt(tco(winner))} sub={<>
        <div><span className="text-gray-500">Quote A TCO</span><strong className="block text-lg">{fmt(tco(a))}</strong></div>
        <div><span className="text-gray-500">Quote B TCO</span><strong className="block text-lg">{fmt(tco(b))}</strong></div>
        <div><span className="text-gray-500">Quote C TCO</span><strong className="block text-lg">{fmt(tco(c))}</strong></div>
      </>} hint="Total Cost of Ownership = annual premium + (deductible × 15% expected claim probability). Tweak the probability for your driving record." />
    </div>
  );
}