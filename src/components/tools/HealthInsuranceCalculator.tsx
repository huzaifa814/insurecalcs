'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function HealthInsuranceCalculator() {
  const [planType, setType] = useState('ppo');
  const [premMonth, setPrem] = useState(450);
  const [ded, setDed] = useState(2000);
  const [oop, setOop] = useState(7000);
  const [usage, setUsage] = useState('moderate');
  const claims = usage === 'low' ? 800 : usage === 'moderate' ? 4500 : usage === 'high' ? 12000 : 25000;
  const afterDed = Math.max(0, claims - ded);
  const coinsurance = Math.min(afterDed * 0.2, Math.max(0, oop - ded));
  const yourClaimCost = Math.min(claims, ded) + coinsurance;
  const annualPrem = premMonth * 12;
  const total = annualPrem + yourClaimCost;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Plan Type"><Select value={planType} onChange={setType} options={[{value:'hmo',label:'HMO'},{value:'ppo',label:'PPO'},{value:'hdhp',label:'HDHP / HSA-eligible'},{value:'epo',label:'EPO'}]} /></Field>
        <Field label="Monthly Premium"><NumInput value={premMonth} onChange={setPrem} prefix="$" /></Field>
        <Field label="Annual Deductible"><NumInput value={ded} onChange={setDed} prefix="$" /></Field>
        <Field label="Out-of-Pocket Max"><NumInput value={oop} onChange={setOop} prefix="$" /></Field>
        <Field label="Expected Healthcare Use" span><Select value={usage} onChange={setUsage} options={[{value:'low',label:'Low (~$800 / year — checkups only)'},{value:'moderate',label:'Moderate (~$4,500 — chronic + occasional)'},{value:'high',label:'High (~$12,000 — major procedure)'},{value:'major',label:'Major (~$25,000 — surgery / long illness)'}]} /></Field>
      </Card>
      <Result label="Estimated annual healthcare cost" value={fmt(total)} sub={<>
        <div><span className="text-gray-500">Premiums</span><strong className="block text-lg">{fmt(annualPrem)}</strong></div>
        <div><span className="text-gray-500">Your claim cost</span><strong className="block text-lg">{fmt(yourClaimCost)}</strong></div>
        <div><span className="text-gray-500">Plan covers</span><strong className="block text-lg">{fmt(Math.max(0, claims - yourClaimCost))}</strong></div>
      </>} hint="Worst-case ceiling is premium + OOP max. Your claim cost = deductible + 20% coinsurance until OOP max." />
    </div>
  );
}