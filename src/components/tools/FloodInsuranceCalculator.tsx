'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function FloodInsuranceCalculator() {
  const [zone, setZ] = useState('X');
  const [coverage, setC] = useState(250000);
  const [contents, setCt] = useState(100000);
  const [foundation, setF] = useState('slab');
  const zoneF = zone === 'X' ? 1 : zone === 'AE' ? 3.2 : zone === 'VE' ? 5.5 : zone === 'AO' ? 2.8 : 1;
  const foundF = foundation === 'slab' ? 1 : foundation === 'crawl' ? 1.2 : foundation === 'basement' ? 1.5 : 0.85;
  const baseRate = (coverage / 250000 * 600) + (contents / 100000 * 220);
  const annual = Math.round(baseRate * zoneF * foundF);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Flood Zone"><Select value={zone} onChange={setZ} options={[{value:'X',label:'Zone X (low/moderate risk)'},{value:'AE',label:'Zone AE (high risk - 1% annual)'},{value:'AO',label:'Zone AO (sheet flow)'},{value:'VE',label:'Zone VE (coastal high velocity)'}]} /></Field>
        <Field label="Foundation Type"><Select value={foundation} onChange={setF} options={[{value:'pier',label:'Elevated on piers'},{value:'slab',label:'Slab on grade'},{value:'crawl',label:'Crawl space'},{value:'basement',label:'Basement'}]} /></Field>
        <Field label="Building Coverage"><NumInput value={coverage} onChange={setC} prefix="$" hint="NFIP cap is $250k for residential." /></Field>
        <Field label="Contents Coverage"><NumInput value={contents} onChange={setCt} prefix="$" hint="NFIP cap is $100k for residential contents." /></Field>
      </Card>
      <Result label="Estimated annual NFIP flood premium" value={fmt(annual)} sub={<>
        <div><span className="text-gray-500">Building rate</span><strong className="block text-lg">{fmt(coverage / 250000 * 600 * zoneF * foundF)}</strong></div>
        <div><span className="text-gray-500">Contents rate</span><strong className="block text-lg">{fmt(contents / 100000 * 220 * zoneF * foundF)}</strong></div>
        <div><span className="text-gray-500">Zone</span><strong className="block text-lg">{zone}</strong></div>
      </>} hint="NFIP rates change yearly under Risk Rating 2.0. Private flood often beats NFIP — get a quote before assuming NFIP is cheapest." />
    </div>
  );
}