'use client';
import { ReactNode } from 'react';

export const BRAND = '#0891b2';
export const fmt = (v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
export const fmtCents = (v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const fmtPct = (v: number, d = 2) => v.toFixed(d) + '%';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4 md:grid-cols-2 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">{children}</div>
);

export const Field = ({ label, hint, children, span }: { label: string; hint?: string; children: ReactNode; span?: boolean }) => (
  <label className={span ? 'block md:col-span-2' : 'block'}>
    <span className="block text-sm font-medium mb-2">{label}</span>
    {children}
    {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
  </label>
);

export const NumInput = ({ value, onChange, prefix, step, min, max, hint }: { value: number; onChange: (n: number) => void; prefix?: string; step?: string; min?: number; max?: number; hint?: string }) => (
  <>
    <div className="relative">
      {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">{prefix}</span>}
      <input type="number" value={value} step={step} min={min} max={max} onChange={(e) => onChange(Number(e.target.value) || 0)} className={(prefix ? 'pl-8 ' : 'px-3 ') + 'w-full pr-3 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900'} />
    </div>
    {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
  </>
);

export const Select = ({ value, onChange, options }: { value: string | number; onChange: (v: string) => void; options: { value: string | number; label: string }[] }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900">
    {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
  </select>
);

export const Result = ({ label, value, sub, hint }: { label: string; value: string; sub?: ReactNode; hint?: string }) => (
  <div className="p-8 rounded-2xl" style={{ background: BRAND + '10', border: '1px solid ' + BRAND + '33' }}>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{label}</p>
    <p className="text-5xl font-bold mb-2" style={{ color: BRAND }}>{value}</p>
    {sub && <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">{sub}</div>}
    {hint && <p className="text-xs text-gray-500 mt-4">{hint}</p>}
  </div>
);

export const Stat = ({ label, value }: { label: string; value: string }) => (
  <div><span className="text-gray-500">{label}</span> <strong className="block text-lg">{value}</strong></div>
);