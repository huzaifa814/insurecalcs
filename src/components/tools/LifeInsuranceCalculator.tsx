'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function LifeInsuranceCalculator() {
  const [debt, setDebt] = useState(20000);
  const [income, setIncome] = useState(75000);
  const [yrs, setYrs] = useState(10);
  const [mort, setMort] = useState(250000);
  const [kids, setKids] = useState(2);
  const [edu, setEdu] = useState(60000);
  const [fun, setFun] = useState(15000);
  const need = debt + income * yrs + mort + kids * edu + fun;
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Outstanding Debt (non-mortgage)"><NumInput value={debt} onChange={setDebt} prefix="$" /></Field>
        <Field label="Annual Income to Replace"><NumInput value={income} onChange={setIncome} prefix="$" /></Field>
        <Field label="Years of Income to Cover"><NumInput value={yrs} onChange={setYrs} /></Field>
        <Field label="Mortgage Balance"><NumInput value={mort} onChange={setMort} prefix="$" /></Field>
        <Field label="Number of Children"><NumInput value={kids} onChange={setKids} /></Field>
        <Field label="Education $ per Child"><NumInput value={edu} onChange={setEdu} prefix="$" /></Field>
        <Field label="Final Expenses (funeral)" span><NumInput value={fun} onChange={setFun} prefix="$" /></Field>
      </Card>
      <Result label="Life insurance you should carry (DIME method)" value={fmt(need)} sub={<>
        <div><span className="text-gray-500">Debt</span><strong className="block text-lg">{fmt(debt)}</strong></div>
        <div><span className="text-gray-500">Income</span><strong className="block text-lg">{fmt(income*yrs)}</strong></div>
        <div><span className="text-gray-500">Mortgage</span><strong className="block text-lg">{fmt(mort)}</strong></div>
      </>} hint="DIME = Debt + Income (× years to replace) + Mortgage + Education + final Expenses." />
    </div>
  );
}