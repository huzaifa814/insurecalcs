'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function AutoInsuranceCalculator() {
  const [age, setAge] = useState(35);
  const [exp, setExp] = useState(15);
  const [val, setVal] = useState(25000);
  const [cov, setCov] = useState('full');
  const [ded, setDed] = useState(500);
  const [acc, setAcc] = useState(0);
  const [zone, setZone] = useState('low');
  const ageF = age < 25 ? 1.6 : age < 30 ? 1.2 : age >= 65 ? 1.15 : 1;
  const expF = exp < 3 ? 1.3 : 1;
  const valF = 1 + Math.min(val / 50000, 0.6);
  const covF = cov === 'full' ? 1 : cov === 'liability' ? 0.55 : 0.75;
  const dedF = ded >= 1000 ? 0.85 : ded >= 500 ? 1 : 1.2;
  const accF = 1 + acc * 0.25;
  const zoneF = zone === 'high' ? 1.5 : zone === 'med' ? 1.15 : 0.9;
  const annual = Math.round(800 * ageF * expF * valF * covF * dedF * accF * zoneF);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Age"><NumInput value={age} onChange={setAge} /></Field>
        <Field label="Years Licensed"><NumInput value={exp} onChange={setExp} /></Field>
        <Field label="Vehicle Value"><NumInput value={val} onChange={setVal} prefix="$" /></Field>
        <Field label="Coverage Level"><Select value={cov} onChange={setCov} options={[{value:'liability',label:'Liability only (state min)'},{value:'basic',label:'Liability + Comp'},{value:'full',label:'Full coverage'}]} /></Field>
        <Field label="Deductible"><Select value={ded} onChange={(v) => setDed(Number(v))} options={[{value:250,label:'$250'},{value:500,label:'$500'},{value:1000,label:'$1,000'},{value:2500,label:'$2,500'}]} /></Field>
        <Field label="Accidents/Tickets (3yr)"><NumInput value={acc} onChange={setAcc} /></Field>
        <Field label="Area Risk" span><Select value={zone} onChange={setZone} options={[{value:'low',label:'Low (rural / suburban)'},{value:'med',label:'Medium (small city)'},{value:'high',label:'High (major metro / NJ / FL / CA)'}]} /></Field>
      </Card>
      <Result label="Estimated annual premium" value={fmt(annual)} hint="Estimate uses national-average factors. Real quotes vary 30-50% across carriers — always compare 3+." sub={<><div><span className="text-gray-500">Monthly</span><strong className="block text-lg">{fmt(Math.round(annual/12))}</strong></div></>} />
    </div>
  );
}