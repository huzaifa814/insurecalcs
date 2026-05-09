'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function HomeInsuranceCalculator() {
  const [sqft, setSqft] = useState(2000);
  const [region, setReg] = useState('us-avg');
  const [contents, setContents] = useState('default');
  const [liability, setLiab] = useState(300000);
  const [ded, setDed] = useState(1000);
  const [hazard, setHaz] = useState('low');
  const costPerSqft = region === 'low' ? 130 : region === 'us-avg' ? 165 : region === 'mid' ? 220 : 320;
  const dwelling = sqft * costPerSqft;
  const personalProperty = contents === 'default' ? dwelling * 0.5 : contents === 'low' ? dwelling * 0.3 : dwelling * 0.7;
  const totalInsured = dwelling + personalProperty + liability;
  const hazF = hazard === 'low' ? 1 : hazard === 'med' ? 1.4 : 2.1;
  const dedF = ded >= 2500 ? 0.85 : ded >= 1000 ? 1 : 1.15;
  const annual = Math.round((dwelling * 0.0035 + liability * 0.0007) * hazF * dedF);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Home Square Footage"><NumInput value={sqft} onChange={setSqft} /></Field>
        <Field label="Region (rebuild $/sqft)"><Select value={region} onChange={setReg} options={[{value:'low',label:'Low ($130/sqft) - Midwest/South'},{value:'us-avg',label:'US Average ($165/sqft)'},{value:'mid',label:'Higher cost ($220/sqft)'},{value:'high',label:'High cost ($320/sqft) - CA/NY/HI'}]} /></Field>
        <Field label="Personal Property Coverage"><Select value={contents} onChange={setContents} options={[{value:'low',label:'Light (30% of dwelling)'},{value:'default',label:'Standard (50%)'},{value:'high',label:'Heavy contents (70%)'}]} /></Field>
        <Field label="Personal Liability"><Select value={liability} onChange={(v)=>setLiab(Number(v))} options={[{value:100000,label:'$100k'},{value:300000,label:'$300k (typical)'},{value:500000,label:'$500k'},{value:1000000,label:'$1M'}]} /></Field>
        <Field label="Deductible"><Select value={ded} onChange={(v)=>setDed(Number(v))} options={[{value:500,label:'$500'},{value:1000,label:'$1,000'},{value:2500,label:'$2,500'},{value:5000,label:'$5,000'}]} /></Field>
        <Field label="Hazard Risk"><Select value={hazard} onChange={setHaz} options={[{value:'low',label:'Low (no flood/quake/hurricane)'},{value:'med',label:'Medium (some risk)'},{value:'high',label:'High (FL/CA wildfire/coastal)'}]} /></Field>
      </Card>
      <Result label="Estimated annual home insurance" value={fmt(annual)} sub={<>
        <div><span className="text-gray-500">Dwelling coverage</span><strong className="block text-lg">{fmt(dwelling)}</strong></div>
        <div><span className="text-gray-500">Personal property</span><strong className="block text-lg">{fmt(personalProperty)}</strong></div>
        <div><span className="text-gray-500">Total insured</span><strong className="block text-lg">{fmt(totalInsured)}</strong></div>
      </>} hint="Dwelling = sqft × rebuild cost. Doesn't include flood (NFIP) or earthquake (separate policies)." />
    </div>
  );
}