'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function BusinessInsuranceCalculator() {
  const [industry, setI] = useState('professional');
  const [revenue, setR] = useState(500000);
  const [employees, setE] = useState(3);
  const [property, setP] = useState(50000);
  const indF: Record<string, number> = { professional: 0.6, retail: 1.1, contractor: 2.2, food: 1.8, manufacturing: 2.5, tech: 0.7 };
  const f = indF[industry] ?? 1;
  const gl = Math.round(Math.max(500, revenue / 1000 * 4) * f);
  const wc = Math.round(employees * 1200 * f);
  const propIns = Math.round(property * 0.005);
  const total = gl + wc + propIns;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Industry"><Select value={industry} onChange={setI} options={[{value:'professional',label:'Professional services / Consulting'},{value:'tech',label:'Tech / SaaS'},{value:'retail',label:'Retail / E-commerce'},{value:'food',label:'Food service / Restaurant'},{value:'contractor',label:'Construction / Contractor'},{value:'manufacturing',label:'Manufacturing'}]} /></Field>
        <Field label="Annual Revenue"><NumInput value={revenue} onChange={setR} prefix="$" /></Field>
        <Field label="Employees"><NumInput value={employees} onChange={setE} /></Field>
        <Field label="Business Property Value"><NumInput value={property} onChange={setP} prefix="$" hint="Equipment, inventory, computers, signage." /></Field>
      </Card>
      <Result label="Estimated annual business insurance" value={fmt(total)} sub={<>
        <div><span className="text-gray-500">General Liability</span><strong className="block text-lg">{fmt(gl)}</strong></div>
        <div><span className="text-gray-500">Workers' Comp</span><strong className="block text-lg">{fmt(wc)}</strong></div>
        <div><span className="text-gray-500">Commercial Property</span><strong className="block text-lg">{fmt(propIns)}</strong></div>
      </>} hint="Add Professional Liability (E&O) for advice-based businesses, Cyber for any data handling. BOPs bundle GL + property at 10-15% discount." />
    </div>
  );
}