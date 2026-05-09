'use client';
import { useState } from 'react';
import { Card, Field, NumInput, Result, fmt } from './_shared';

export function DisabilityInsuranceCalculator() {
  const [salary, setSal] = useState(75000);
  const [emerg, setEmerg] = useState(15000);
  const [hasEmployer, setHasE] = useState(0);
  const monthlyIncome = salary / 12;
  const recommendedReplacement = monthlyIncome * 0.65;
  const employerCovers = (hasEmployer / 100) * monthlyIncome;
  const gap = Math.max(0, recommendedReplacement - employerCovers);
  const monthsCovered = emerg / monthlyIncome;
  const annualPolicyEst = Math.round(gap * 12 * 0.025);
  return (
    <div className="space-y-6">
      <Card>
        <Field label="Annual Salary"><NumInput value={salary} onChange={setSal} prefix="$" /></Field>
        <Field label="Emergency Fund"><NumInput value={emerg} onChange={setEmerg} prefix="$" /></Field>
        <Field label="Employer DI Coverage (% of salary)" span><NumInput value={hasEmployer} onChange={setHasE} step="1" hint="Most employers offer 60% short-term DI — check your benefits booklet." /></Field>
      </Card>
      <Result label="Monthly income gap to insure privately" value={fmt(gap)} sub={<>
        <div><span className="text-gray-500">Monthly income</span><strong className="block text-lg">{fmt(monthlyIncome)}</strong></div>
        <div><span className="text-gray-500">65% replacement target</span><strong className="block text-lg">{fmt(recommendedReplacement)}</strong></div>
        <div><span className="text-gray-500">Emergency fund covers</span><strong className="block text-lg">{monthsCovered.toFixed(1)} months</strong></div>
      </>} hint={`Annual policy estimate: ${fmt(annualPolicyEst)}. DI typically costs 1-3% of insured income, with 90-day elimination period.`} />
    </div>
  );
}