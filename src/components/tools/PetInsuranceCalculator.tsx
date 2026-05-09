'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Select, Result, fmt } from './_shared';

export function PetInsuranceCalculator() {
  const [species, setSpec] = useState('dog');
  const [age, setAge] = useState(4);
  const [size, setSize] = useState('med');
  const [bigClaim, setBC] = useState(15);
  const baseMonthly = species === 'dog' ? (size === 'small' ? 35 : size === 'med' ? 50 : 75) : 25;
  const ageF = age < 2 ? 0.85 : age < 6 ? 1 : age < 9 ? 1.4 : 2;
  const monthly = Math.round(baseMonthly * ageF);
  const annualPrem = monthly * 12;
  const expectedBigCost = (bigClaim / 100) * (species === 'dog' ? 4500 : 2500);
  const expectedRoutineSave = expectedBigCost * 0.7;
  const breakEven = expectedRoutineSave > 0 ? annualPrem / expectedRoutineSave : 0;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Species"><Select value={species} onChange={setSpec} options={[{value:'dog',label:'Dog'},{value:'cat',label:'Cat'}]} /></Field>
        <Field label="Age (years)"><NumInput value={age} onChange={setAge} /></Field>
        <Field label="Size (dogs)"><Select value={size} onChange={setSize} options={[{value:'small',label:'Small (< 25 lb)'},{value:'med',label:'Medium (25-60 lb)'},{value:'large',label:'Large (60+ lb)'}]} /></Field>
        <Field label="Annual probability of major claim (%)"><NumInput value={bigClaim} onChange={setBC} hint="Vet emergencies happen ~10-25%/yr depending on breed and age." /></Field>
      </Card>
      <Result label="Annual premium" value={fmt(annualPrem)} sub={<>
        <div><span className="text-gray-500">Monthly</span><strong className="block text-lg">{fmt(monthly)}</strong></div>
        <div><span className="text-gray-500">Expected vet savings</span><strong className="block text-lg">{fmt(expectedRoutineSave)}</strong></div>
        <div><span className="text-gray-500">Premium / savings ratio</span><strong className="block text-lg">{breakEven.toFixed(2)}x</strong></div>
      </>} hint="Below 1.0x: insurance pays off on average. Above 1.0x: self-insure with a savings account. Older pets and accident-prone breeds tip the balance toward insurance." />
    </div>
  );
}