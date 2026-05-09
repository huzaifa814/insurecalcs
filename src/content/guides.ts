export interface GuideStep { title: string; body: string }
export interface GuideFAQ { q: string; a: string }
export interface Guide {
  slug: string;
  title: string;
  query: string;
  metaDescription: string;
  intro: string;
  steps: GuideStep[];
  tips: string[];
  faq: GuideFAQ[];
  relatedTool: string;
  keywords: string[];
  publishedAt: string;
}

export const guides: Guide[] = [
  {
    slug: 'how-much-life-insurance-do-i-need',
    title: 'How Much Life Insurance Do I Need? (DIME Method + Examples)',
    query: 'how much life insurance do i need',
    metaDescription: 'Calculate how much life insurance you need with the DIME method: Debt + Income + Mortgage + Education. Worked examples for ages 30, 40, and 50.',
    intro: 'Most online quizzes throw out a number like "10× your salary" and call it done. That works for some people and badly underestimates everyone with kids or a mortgage. The DIME method — Debt, Income, Mortgage, Education — gives you a coverage number tied to your actual obligations, not a generic multiplier.',
    steps: [
      { title: 'Add up your non-mortgage debt (D)', body: 'Credit cards, car loans, student loans, personal loans, medical debt. The goal is for your family to clear these without selling assets. If you have $18,000 in cards and a $22,000 car loan, that is $40,000 of D.' },
      { title: 'Multiply your income by years of replacement (I)', body: 'How many years of your salary should the policy replace? Typical answers: until your youngest child turns 18, or until your spouse reaches retirement. A 35-year-old earning $80,000 with a 5-year-old usually picks 13 years × $80,000 = $1.04M for I.' },
      { title: 'Add the mortgage payoff (M)', body: 'The current loan balance, not the original amount and not the home value. If you owe $310,000, M = $310,000. This lets your family stay in the house without scrambling for a refi.' },
      { title: 'Add education costs per child (E)', body: 'In-state public 4-year is roughly $108,000 in 2026 (tuition, fees, room, and board). Private averages closer to $230,000. Pick the school type you actually expect, not the cheapest, and multiply by number of kids.' },
      { title: 'Subtract what you already have', body: 'Existing employer life insurance, savings, taxable investments, and your spouse\'s income capacity. If your DIME total is $1.6M and you have $200,000 saved + $150,000 in employer coverage, you need $1.25M in new coverage.' },
      { title: 'Round up, do not round down', body: 'Coverage is priced in tiers ($500K, $750K, $1M, $1.5M, $2M). Going from $1.25M to $1.5M usually adds $4–$8/month for healthy applicants under 45. The buffer matters more than the savings.' },
      { title: 'Buy term, not whole, unless you have a specific reason', body: 'For 95% of households, a 20- or 30-year level term policy at 10–15× the price you would pay for whole life is the right answer. Use the calculator on this site to see the cost gap over 20 years.' },
    ],
    tips: [
      'If your spouse stays home, do not put their coverage at zero. Replacing childcare, household management, and lost income capacity typically requires $250,000–$500,000.',
      'Buy in your 30s if you can. Premiums roughly double every decade for the same coverage and same health rating.',
      'Get the medical exam version, not no-exam. No-exam policies are 30–80% more expensive for healthy people.',
      'Lock the policy length to your need date — the year your youngest finishes college or your mortgage pays off, whichever is later.',
    ],
    faq: [
      { q: 'Is 10× my salary a good rule of thumb?', a: '10× works as a fast sanity check but consistently underestimates parents and homeowners. A $90,000 earner with two kids and a mortgage usually needs $1.5–$2M, which is closer to 17–22×. Use DIME for the real number.' },
      { q: 'Do stay-at-home parents need life insurance?', a: 'Yes, usually $250,000–$500,000 of term coverage. Replacing childcare alone runs $20,000–$30,000 per year per child in most US metros. Add household management and the loss of future earning capacity and the number rises fast.' },
      { q: 'Should I count my employer-provided life insurance?', a: 'Yes, but discount it. It usually disappears the day you change jobs, and the typical 1× or 2× salary employer policy is well below DIME for anyone with a family. Treat it as a supplement, not a foundation.' },
      { q: 'What term length should I pick — 20 or 30 years?', a: 'Pick the longer of: years until your youngest is 22, or years until your mortgage is paid. A 32-year-old with a 2-year-old and a 30-year mortgage almost always picks 30-year term.' },
      { q: 'Is term life cheaper if I quit smoking?', a: 'Dramatically. Smokers pay 2.5–3.5× the rate of non-smokers for the same coverage. Most carriers reclassify you after 12 months smoke-free. Apply, then re-shop after a year off cigarettes.' },
      { q: 'Can I get life insurance with high blood pressure or diabetes?', a: 'Almost always yes, with controlled conditions. Type 2 diabetes managed with diet or metformin and an A1C under 7 typically rates Standard or Standard Plus. Use a broker who shops 10+ carriers — rates vary 60% across companies for the same applicant.' },
    ],
    relatedTool: 'life-insurance-calculator',
    keywords: ['how much life insurance do i need', 'dime method life insurance', 'life insurance coverage calculator', 'how much life insurance', 'life insurance amount'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'term-vs-whole-life-insurance',
    title: 'Term vs Whole Life Insurance: Honest Comparison (2026)',
    query: 'term vs whole life insurance',
    metaDescription: 'Term vs whole life: real cost differences, when each makes sense, and the math behind "buy term and invest the difference." Worked examples + decision framework.',
    intro: 'Whole life policies cost 8–15× more per dollar of coverage than term, and that gap funds a cash value account growing at 2–4%. For most households, the math says buy term and put the savings in a Roth IRA. Here is when whole life actually makes sense and how to run the comparison yourself.',
    steps: [
      { title: 'Get a real quote on both', body: 'A healthy 35-year-old non-smoker pays roughly $30/month for $500K of 20-year term, or $385/month for $500K of whole life. Same coverage, 12.8× the cost. Get actual quotes — your numbers, not averages.' },
      { title: 'Calculate the "buy term, invest the difference" math', body: 'Take the monthly difference ($355 in the example above) and assume it goes into a low-cost index fund at a 7% real return for 20 years. That is roughly $185,000 in inflation-adjusted dollars. Whole life cash value over the same period typically lands at $90,000–$120,000.' },
      { title: 'Decide if you actually need permanent coverage', body: 'Term covers 95% of cases — you need protection while kids are home and the mortgage is unpaid. After that, your accumulated assets replace the insurance. Whole life only beats term if you have a specific permanent need: special-needs dependent, estate tax exposure, business buy-sell agreement.' },
      { title: 'Check the surrender table on whole life policies', body: 'Most whole life policies have negative cash value for the first 3–7 years. If you cancel at year 5, you typically get back 30–60% of premiums paid. This is the biggest hidden cost — most people who buy whole life eventually lapse it.' },
      { title: 'Run the breakeven', body: 'For most policies, the cash value does not exceed cumulative premiums paid until year 12–15. If you might need flexibility before then, whole life is a worse savings vehicle than a taxable brokerage.' },
      { title: 'If you still want permanent coverage, look at guaranteed universal life (GUL) instead', body: 'GUL is permanent like whole life but stripped of the savings component, costing 30–50% less. A 40-year-old non-smoker pays roughly $200/month for $500K GUL to age 100, vs $420/month for $500K whole life.' },
    ],
    tips: [
      'Insurance agents earn 90–105% of first-year whole life premium as commission. Term commissions are 30–60%. Be aware of who benefits from which sale.',
      'If you have already had whole life for 10+ years, do not necessarily cancel — the math gets better the longer you hold. Get a current cash surrender value quote and run the numbers.',
      'For estate planning at $13M+ net worth, second-to-die whole life can pay estate taxes efficiently. Below that threshold, the standard estate exemption covers most families.',
    ],
    faq: [
      { q: 'Is whole life ever worth it?', a: 'Yes, for three specific cases: (1) you need permanent coverage for a special-needs dependent, (2) you are using it for estate liquidity over the federal estate exemption, or (3) it is part of an irrevocable life insurance trust. Outside those cases, term plus separate investing wins on the math nearly every time.' },
      { q: 'What happens to my term policy at the end of the term?', a: 'It expires. You can usually renew at much higher rates (3–8× the original premium) or convert a portion to permanent coverage if your policy includes a conversion rider. The point of term is to bridge the years when you need protection — by the time it expires, you should be self-insured through accumulated assets.' },
      { q: 'Can I borrow against whole life cash value?', a: 'Yes, typically at 5–8% interest. The loan reduces your death benefit dollar-for-dollar until repaid, and unpaid loans at death come out of the payout. It is a legitimate liquidity tool but expensive — most home equity lines and 401(k) loans cost less.' },
      { q: 'Will whole life dividends keep up with inflation?', a: 'Usually no. Mutual whole life dividends have averaged 5–6% over the last decade on a participating policy, but that is on the cash value, not the death benefit. Inflation-adjusted real return after fees and cost of insurance is typically 1–3%.' },
      { q: 'Is "infinite banking" with whole life a good idea?', a: 'It is a marketing concept built around using whole life cash value loans as a private financing system. The math only works if you would otherwise borrow at higher rates than the policy loan rate. For homeowners with HELOC access at prime rate, it rarely pencils out.' },
    ],
    relatedTool: 'term-vs-whole-life',
    keywords: ['term vs whole life', 'term vs whole life insurance', 'is whole life insurance worth it', 'buy term invest the difference', 'permanent vs term life'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'how-much-car-insurance-do-i-need',
    title: 'How Much Car Insurance Do I Need? Coverage Limits Explained',
    query: 'how much car insurance do i need',
    metaDescription: 'State minimums are not enough. How to set liability, comprehensive, collision, and uninsured motorist coverage based on your assets and vehicle.',
    intro: 'Most state minimum liability limits ($25K/$50K/$25K is common) do not cover one trip to the ER for the other driver. Here is how to set each coverage type to actually protect your assets, with real cost-vs-protection numbers.',
    steps: [
      { title: 'Set bodily injury liability to at least 100/300', body: 'That is $100,000 per person, $300,000 per accident. State minimums of $25K/$50K disappear in any serious crash — average ER admission for car-accident injury is $42,000 before surgery. The premium difference between 25/50 and 100/300 is usually $80–$180/year.' },
      { title: 'Set property damage liability to $100,000', body: 'You can total a Tesla Model Y or a luxury SUV in a single fender-bender. State minimums of $25K cover almost nothing on the road in 2026. Going from $25K to $100K adds roughly $40–$70/year.' },
      { title: 'Match uninsured/underinsured motorist (UM/UIM) to your liability', body: '14% of US drivers have no insurance and another 20% are underinsured. UM/UIM covers your medical bills if they hit you. Buy at the same limits as your liability — same logic, your protection should match what you would owe someone else.' },
      { title: 'Pick collision and comprehensive only if your car is worth keeping', body: 'Rough rule: drop both when the annual premium for them exceeds 10% of the car\'s actual cash value. A 2014 Camry worth $9,000 should not have $1,200/year in collision + comp. A 2023 RAV4 worth $32,000 absolutely should.' },
      { title: 'Set deductibles to $1,000 minimum', body: 'Going from $500 to $1,000 typically saves $80–$140/year on collision + comp combined. The breakeven is 4–6 years between claims, which most safe drivers easily exceed. Higher deductibles also discourage filing small claims that raise your rate.' },
      { title: 'Add an umbrella policy if your assets exceed $300K', body: 'A $1M personal umbrella runs $200–$400/year and stacks on top of your auto liability. If you own a home, have retirement accounts, and earn well, you have more assets at risk than 100/300 protects.' },
    ],
    tips: [
      'Re-shop every 2 years. Insurers raise rates on existing customers far more than on new applicants — the average loyal customer overpays by 18–28% according to recent state DOI studies.',
      'Bundle home + auto with the same carrier only if the bundle discount exceeds the premium gap. Run the math; sometimes the cheapest auto carrier and cheapest home carrier separately beat the bundle.',
      'Use telematics if you drive less than 10,000 miles/year. Programs like Progressive Snapshot, State Farm Drive Safe, and Allstate Drivewise typically save 15–30% for low-mileage safe drivers.',
    ],
    faq: [
      { q: 'What is the cheapest car insurance I can legally have?', a: 'Whatever your state minimum is, but "cheapest" and "adequate" are very different. State minimum policies cost $400–$900/year nationally; getting hit with a real claim above your limits exposes your savings, retirement accounts, and future wages to garnishment.' },
      { q: 'Do I need full coverage on a paid-off car?', a: 'Only if losing the car would create real hardship. If you can afford to replace the vehicle out of pocket and the comp + collision premium is more than 10% of the car\'s value annually, drop it.' },
      { q: 'Is the difference between 50/100 and 100/300 worth it?', a: 'Almost always yes. The premium gap is typically $40–$120/year while the protection gap is $50,000 per person and $200,000 per accident. One serious injury claim wipes out a decade of "savings" from running lower limits.' },
      { q: 'What is gap insurance and do I need it?', a: 'Gap insurance covers the difference between your loan balance and the car\'s actual cash value if it is totaled. New cars depreciate 20–30% in year one — if you put less than 20% down or financed for 60+ months, you almost certainly need gap until the loan balance drops below the car\'s value.' },
      { q: 'How much can I save by raising my deductible from $500 to $2,000?', a: 'Typically $180–$320/year combined on collision and comprehensive, depending on vehicle and ZIP code. Worth it if you have $2,000 in liquid savings; not worth it if a $2,000 surprise bill would put you on a credit card.' },
    ],
    relatedTool: 'auto-insurance-calculator',
    keywords: ['how much car insurance do i need', 'car insurance coverage limits', 'auto insurance liability limits', 'car insurance amounts', 'recommended car insurance coverage'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'average-car-insurance-cost-by-state',
    title: 'Average Car Insurance Cost by State (2026 Rates)',
    query: 'average car insurance cost by state',
    metaDescription: 'State-by-state average car insurance premiums, the factors that drive your rate, and how to tell if you are overpaying.',
    intro: 'The national average for full-coverage car insurance in 2026 sits around $2,150/year, but state averages range from $1,180 (Vermont) to $3,950 (Louisiana). Your actual rate depends more on six personal factors than your state — but state matters for the floor and ceiling.',
    steps: [
      { title: 'Look up your state\'s average', body: 'Cheapest five states (2026): Vermont ($1,180), Idaho ($1,290), New Hampshire ($1,310), Maine ($1,340), Ohio ($1,420). Most expensive five: Louisiana ($3,950), Florida ($3,710), Michigan ($3,580), New York ($3,490), Nevada ($3,180).' },
      { title: 'Compare your premium to the state average', body: 'If you pay within 15% of the average, you are in line. More than 25% above? You have something raising your rate — recent at-fault claim, low credit-based insurance score, high-risk vehicle, or simply a carrier that does not like your profile.' },
      { title: 'Identify the six rate factors that matter most', body: 'In rough order of impact: driving record (worth 40–80% rate increases for a single at-fault), credit-based insurance score (20–80% in states that allow it), age and gender (under-25 males pay 50%+ more), ZIP code (urban dense ZIPs cost 2× rural), vehicle (new luxury = highest), and annual mileage.' },
      { title: 'Pull your CLUE report', body: 'CLUE is the insurance industry\'s claim history database. You get one free copy per year from LexisNexis. If a prior claim is reported wrong or a claim you withdrew is showing, dispute it — that single fix can drop your rate 10–30%.' },
      { title: 'Re-quote with at least 4 carriers', body: 'Rate spreads of 60–120% across carriers for the same driver are normal. The cheapest carrier for a 28-year-old in suburban Phoenix might be the most expensive for a 55-year-old in rural Iowa. Always quote your specific profile, not "best carriers" lists.' },
      { title: 'Apply discounts you actually qualify for', body: 'Common ones: paid-in-full (4–10%), paperless billing (1–3%), telematics (10–30%), good student (8–15%), home/auto bundle (10–22%), defensive driving course (5–10%), low annual mileage under 7,500 (5–15%). Stack them.' },
    ],
    tips: [
      'Florida\'s no-fault PIP system explains most of its high cost. Michigan\'s unlimited PIP medical was the previous cause; reforms have lowered the average but Detroit ZIPs still see $4,500+ averages.',
      'In California, Massachusetts, Hawaii, and Michigan, credit-based scoring is restricted or banned for auto. Moving from a credit-using state to one of these typically helps anyone with a credit score under 700.',
      'Annual mileage is self-reported and rarely audited unless you file a claim. Be honest, but if you genuinely commute less than 7,500 miles/year, document it — this discount alone can save 10–15%.',
    ],
    faq: [
      { q: 'Why is car insurance more expensive in Louisiana and Florida?', a: 'Both states have unusually high lawsuit frequency in auto cases, low judicial caps on non-economic damages, and (in Florida) widespread roof-related litigation that crosses into the auto market through bundled carrier exposure. Louisiana also has a unique direct-action statute that lets injured parties sue insurers directly.' },
      { q: 'Does my credit score really affect my car insurance rate?', a: 'In 47 states, yes — heavily. The "insurance score" is a credit-derived number that statistically correlates with claim frequency. Improving from a 620 to a 720 typically reduces auto premiums 15–35% in scoring states.' },
      { q: 'Is car insurance cheaper if I pay annually instead of monthly?', a: 'Yes, by 4–10% on the total premium plus you avoid monthly installment fees of $4–$8 per cycle. If you can swing the lump sum, do it — that discount is essentially a 4–10% guaranteed annual return on the cash you would have spent monthly.' },
      { q: 'How long do tickets and at-fault accidents stay on my record?', a: 'For insurance rating, most carriers look back 3–5 years. A speeding ticket adds about 15–25% for 3 years; an at-fault accident adds 30–60% for 3–5 years; a DUI adds 70–150% for 5+ years and many carriers will non-renew.' },
      { q: 'Can my insurance cancel me for one accident?', a: 'Mid-policy cancellation requires fraud or non-payment in nearly every state. Non-renewal at the end of the term is permitted, and a serious at-fault accident or pattern of small claims can trigger one. Most cancellations come from the policyholder switching carriers, not the carrier dropping them.' },
    ],
    relatedTool: 'car-insurance-comparison',
    keywords: ['average car insurance cost', 'car insurance cost by state', 'auto insurance rates by state', 'how much is car insurance', 'cheapest car insurance state'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'how-much-home-insurance-do-i-need',
    title: 'How Much Home Insurance Do I Need? Replacement Cost Guide',
    query: 'how much home insurance do i need',
    metaDescription: 'Set dwelling, personal property, liability, and loss-of-use coverage based on replacement cost — not market value or purchase price.',
    intro: 'Home insurance is sized to rebuild cost, not market value. A house that sells for $620,000 might cost $410,000 to rebuild, or $730,000 — the answer depends on construction type, ZIP code labor costs, and finishes. Most homeowners under-insure by 20–40% because they confuse market value with replacement cost.',
    steps: [
      { title: 'Calculate dwelling coverage at full replacement cost', body: 'Multiply your home\'s square footage by current local rebuild cost. In 2026 that is roughly $180–$240/sqft for tract-grade construction, $240–$360/sqft for mid-grade, and $360–$600+/sqft for custom or coastal. A 2,400 sqft tract home in suburban Atlanta = $475,000–$575,000 dwelling.' },
      { title: 'Add an extended replacement cost endorsement', body: 'Standard policies cap at the dwelling number. Extended replacement adds 25–50% on top, so if rebuild costs spike (post-disaster labor + materials), you are not on the hook. The endorsement costs 2–5% of the base premium and is essentially mandatory in fire-prone or hurricane-prone areas.' },
      { title: 'Set personal property at 50–75% of dwelling', body: 'Default policies often set this automatically at 50%. If you have above-average belongings — bicycles, electronics, jewelry, art, instruments, professional equipment — push it to 70–75%. Jewelry, firearms, and collectibles need separate scheduled riders above $1,500–$2,500 sub-limits.' },
      { title: 'Choose actual cash value vs replacement cost', body: 'Replacement cost pays to replace stolen or damaged items new. Actual cash value pays depreciated value. Always pick replacement cost on personal property — the premium difference is small, the claims difference is large.' },
      { title: 'Set liability to $300K minimum, $500K if you have assets', body: 'Standard $100K liability is inadequate. Lawsuits over dog bites and slip-and-falls regularly settle for $50K–$250K. The premium gap from $100K to $500K is typically $40–$90/year. Add a $1M umbrella above that for $200–$400/year.' },
      { title: 'Confirm loss-of-use is at least 20% of dwelling', body: 'Loss-of-use covers temporary housing while your home is rebuilt. After major events, "temporary" can mean 12–24 months. 20% of dwelling is standard but in tight rental markets like the Bay Area or Boston, push to 30%.' },
    ],
    tips: [
      'Get a third-party rebuild estimate every 4–5 years. Construction costs jumped 38% from 2020–2025 nationally; your dwelling figure from 2020 is almost certainly too low.',
      'If your home is in an HOA or condo, your master policy covers the structure to a defined point ("walls-in" or "all-in"). Your HO-6 condo policy fills the gap — request the master policy declarations to know what gap you are filling.',
      'Old plumbing (galvanized steel, polybutylene) and old electrical (knob-and-tube, aluminum branch wiring, FPE/Zinsco panels) cause carriers to non-renew. Update before shopping; getting a quote with these flags is harder than getting one before they\'re documented.',
    ],
    faq: [
      { q: 'Should my dwelling coverage match my home\'s purchase price?', a: 'No. Purchase price includes the land, which does not need insuring. In coastal areas and dense metros, land can be 30–60% of total value. Use rebuild cost only — your insurer or a local appraiser can give you a current estimate.' },
      { q: 'Does standard home insurance cover floods or earthquakes?', a: 'Neither. Flood requires a separate NFIP policy or private flood carrier; earthquake requires a separate policy from the state plan (CEA in California) or a private carrier. About 90% of US natural-disaster losses involve at least one of these uncovered perils.' },
      { q: 'What is the difference between HO-3 and HO-5 policies?', a: 'HO-3 covers your dwelling on an "open perils" basis (anything not excluded) but personal property on a "named perils" basis (only specific listed events). HO-5 extends open-perils to personal property. HO-5 costs 5–15% more and is worth it if your contents value is substantial.' },
      { q: 'Will filing one home insurance claim raise my rate?', a: 'Usually yes, by 10–20%, and the surcharge typically lasts 3–5 years. Two claims in a 3-year window often triggers non-renewal. As a rule, do not file claims under $5,000 over your deductible — pay out of pocket and preserve the loss-free history.' },
      { q: 'Should I increase my home insurance deductible to save money?', a: 'Going from $1,000 to $2,500 typically saves 8–15% on premium. Going from $2,500 to $5,000 saves another 5–10%. The breakeven on $2,500 is about 6–8 years between claims, which most homeowners exceed.' },
    ],
    relatedTool: 'home-insurance-calculator',
    keywords: ['how much home insurance do i need', 'home insurance coverage amount', 'dwelling coverage calculator', 'replacement cost home insurance', 'homeowners insurance amounts'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'what-does-renters-insurance-cover',
    title: 'What Does Renters Insurance Cover? Plain-English Breakdown',
    query: 'what does renters insurance cover',
    metaDescription: 'Renters insurance covers personal property, liability, and loss-of-use — typically $12–$25/month. Here is what is and is not included, and how much coverage to buy.',
    intro: 'Renters insurance averages $185/year nationally and covers a lot more than most renters realize. It does not protect the building (your landlord\'s policy does that), but it covers your stuff, your liability, and your living costs if your unit becomes unlivable. Here is exactly what is and is not in a standard policy.',
    steps: [
      { title: 'Personal property: what is yours', body: 'Furniture, electronics, clothes, kitchen items, bikes, sporting goods, instruments. Coverage applies inside your unit and usually 10% of that limit anywhere in the world (laptop stolen on vacation = covered). Do an inventory — most renters underestimate their belongings by $8K–$15K until they walk through every drawer.' },
      { title: 'Liability: when you are at fault for damage to others', body: 'If you flood the unit below, your dog bites someone, or a guest trips on your rug and breaks an ankle, your liability coverage pays. Standard policies start at $100K; push to $300K for a few extra dollars per month.' },
      { title: 'Loss-of-use: covered displacement costs', body: 'If your unit becomes unlivable (fire, severe water damage, etc.), this covers hotel, restaurant meals above your normal grocery cost, laundromat, and storage. Usually capped at 30–40% of your personal property limit.' },
      { title: 'Medical payments to others', body: 'A small ($1K–$5K) no-fault coverage that pays medical bills for guests injured in your unit, regardless of liability. Useful for keeping minor incidents out of liability lawsuit territory.' },
      { title: 'What is NOT covered (the important list)', body: 'Flood (separate NFIP policy), earthquake (separate or endorsement), pest infestations, intentional damage, your roommate\'s belongings (unless they are on the policy), business equipment above $2,500–$5,000 sub-limit, cash and precious metals above $200, and most cyber/identity theft (separate add-on).' },
      { title: 'Choose replacement cost, not actual cash value', body: 'Replacement cost pays to buy a new equivalent item. Actual cash value pays depreciated value (your 5-year-old laptop = maybe $150). Replacement cost coverage costs 10–15% more and is worth every penny when you actually file a claim.' },
    ],
    tips: [
      'Most landlords now require a $100K–$300K liability minimum on renters policies. Read your lease; bring proof of coverage at signing or pay a "no insurance" surcharge of $20–$50/month plus a deposit increase.',
      'High-value items (engagement ring, professional camera, road bike, drum kit) usually need a scheduled rider above the $1,500 jewelry / $2,500 firearms / $1,000 cash sub-limits. Costs $5–$25/year per $1,000 of declared value.',
      'Bundle with your auto insurance for a 5–18% multi-policy discount — that often makes renters insurance effectively free or near-free.',
    ],
    faq: [
      { q: 'Is renters insurance worth it for $20/month?', a: 'Almost universally yes. The personal property coverage alone usually exceeds $30K, the liability coverage prevents wage garnishment from a single dog-bite or guest-injury claim, and loss-of-use covers hotel costs after fires and floods that would otherwise hit your savings hard.' },
      { q: 'Does renters insurance cover roommate belongings?', a: 'No, unless the roommate is named on the policy. Most carriers will not list unrelated roommates on the same policy — each roommate buys their own. A couple living together typically can share one policy.' },
      { q: 'Will my renters insurance cover my stuff in a storage unit?', a: 'Usually yes, at 10% of your personal property limit (so a $30K policy covers up to $3K in storage). For more, you need a storage-unit endorsement or a separate policy from the storage facility.' },
      { q: 'Does renters insurance cover bedbugs?', a: 'No. Pest infestations are universally excluded as a maintenance issue, and bedbugs specifically are typically the landlord\'s responsibility in most state landlord-tenant laws (varies by state).' },
      { q: 'How much renters insurance do I need?', a: 'Start with $25K–$40K personal property (do an honest inventory), $300K liability, and replacement cost coverage. Adjust personal property up if you have above-average electronics or specialty equipment. The cost difference between $25K and $50K of property coverage is usually $40–$80/year.' },
    ],
    relatedTool: 'renters-insurance-calculator',
    keywords: ['what does renters insurance cover', 'renters insurance coverage', 'is renters insurance worth it', 'how much renters insurance', 'renters insurance explained'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'cobra-vs-marketplace-which-is-cheaper',
    title: 'COBRA vs Marketplace: Which Is Cheaper After Job Loss?',
    query: 'cobra vs marketplace',
    metaDescription: 'Comparing COBRA continuation coverage vs ACA marketplace plans after job loss — premium math, network considerations, and the special enrollment window.',
    intro: 'Losing your job triggers two health insurance options: continue your employer plan via COBRA (typically $650–$2,400/month for a family) or switch to a marketplace plan during your 60-day special enrollment window. For most people, marketplace wins on cost — but COBRA wins for specific situations. Here is the framework.',
    steps: [
      { title: 'Get your actual COBRA quote in writing', body: 'COBRA costs the full premium plus a 2% admin fee. Your employer paid 70–85% of that while you worked there, so the COBRA bill is often 4–6× what was deducted from your paycheck. The HR letter you receive in the first 14 days has the exact number.' },
      { title: 'Estimate your marketplace subsidy', body: 'The ACA premium tax credit is based on household income for the year, not last year\'s. Estimate your full-year income including the gap (severance, unemployment, partial-year wages from new job). At 200% of FPL — about $31K single, $64K family of 4 — subsidies typically cover 70–90% of a Silver plan premium.' },
      { title: 'Compare networks, not just premiums', body: 'COBRA keeps your exact employer network. Marketplace plans (especially Silver and Bronze) often use narrow networks that exclude major hospital systems. If you are mid-treatment, mid-pregnancy, or have a specialist relationship, network continuity may justify the COBRA premium gap.' },
      { title: 'Check deductible and out-of-pocket reset', body: 'COBRA continues your same plan with the same deductible — including the portion you have already paid this year. A new marketplace plan resets the deductible to zero. If you have already hit $4,000 of a $5,000 deductible by August, COBRA for the rest of the year is often the better total-cost choice even if monthly premium is higher.' },
      { title: 'Use the 60-day special enrollment window strategically', body: 'After job loss, you have 60 days to enroll in a marketplace plan with retroactive coverage to the loss-of-coverage date. You also have 60 days to elect COBRA. You can wait, see if you have a medical event, and elect COBRA retroactively if needed — a free option with real value.' },
      { title: 'For 1–4 month gaps, consider short-term plans cautiously', body: 'Short-term medical insurance costs $100–$350/month but excludes pre-existing conditions and often does not cover prescription drugs or maternity. It is a stopgap for healthy single people, not a real substitute. ACA-compliant marketplace plans are almost always better for anyone with ongoing conditions.' },
    ],
    tips: [
      'If you have a Health Savings Account from a high-deductible employer plan, you can keep using the existing balance for medical expenses regardless of which option you choose — the HSA is yours forever.',
      'Severance pay counts as income for both subsidy calculation and COBRA election timing. If your severance includes employer-paid COBRA for 3–6 months, take it — that often beats marketplace for the period.',
      'You can switch from COBRA to marketplace at the next open enrollment, but not from marketplace back to COBRA mid-year. Pick carefully.',
    ],
    faq: [
      { q: 'How long does COBRA last?', a: 'Typically 18 months from your termination date, extending to 29 months if you become disabled, or 36 months for divorce/death-of-employee qualifying events. The end-of-COBRA date is itself a qualifying event for marketplace special enrollment.' },
      { q: 'Can I get an ACA subsidy if I quit my job voluntarily?', a: 'Yes. The marketplace does not care why you lost employer coverage — voluntary quit, layoff, or termination all trigger the same 60-day special enrollment window. Subsidies are based on income, not the reason for job change.' },
      { q: 'What if I find a new job in a few weeks — can I cancel COBRA?', a: 'Yes, you can drop COBRA mid-month or any time. If you elected and paid for COBRA but only used a few weeks, you eat that month\'s premium but face no penalty for stopping.' },
      { q: 'Will marketplace coverage be accepted by my doctor?', a: 'Depends on the specific plan. Marketplace plans use insurance networks (BCBS, Anthem, Kaiser, Oscar, etc.) — your doctor\'s acceptance depends on whether they take that network, not whether it came from the marketplace. Always verify before enrolling.' },
      { q: 'Is short-term health insurance the same as marketplace coverage?', a: 'No, and the difference is significant. Short-term plans can deny coverage for pre-existing conditions, exclude maternity, cap annual benefits, and do not satisfy the ACA. They are a budget bridge, not real coverage. Treat them like accidents-and-emergencies coverage only.' },
    ],
    relatedTool: 'cobra-vs-marketplace',
    keywords: ['cobra vs marketplace', 'cobra alternatives', 'health insurance after job loss', 'marketplace insurance after layoff', 'cobra cost vs aca'],
    publishedAt: '2026-05-09',
  },
  {
    slug: 'is-pet-insurance-worth-it',
    title: 'Is Pet Insurance Worth It? Real Cost-Benefit Math',
    query: 'is pet insurance worth it',
    metaDescription: 'When pet insurance pays off and when it does not — premium vs claim math, breed-specific risk, and the case for a pet emergency fund instead.',
    intro: 'Pet insurance averages $35–$70/month for dogs and $20–$40/month for cats in 2026. Whether it pays off depends almost entirely on breed, age at enrollment, and whether you would actually pay for $8,000 of unexpected vet care. Here is the math, with the cases where it wins and where a savings account beats it.',
    steps: [
      { title: 'Get your actual quote, not the "average"', body: 'Premiums vary 4× across breeds. A 1-year-old Maine Coon costs $25/month; a 1-year-old French Bulldog costs $95/month for the same policy. Same with dogs — Labs are cheap, brachycephalic breeds (Frenchies, Bulldogs, Pugs) and giant breeds (Great Danes, Mastiffs) are expensive.' },
      { title: 'Calculate lifetime cost of premiums', body: 'Premiums rise 8–15% per year, more steeply after age 8. For a Labrador adopted at 1 and insured for 12 years, expect $9,000–$13,000 in cumulative premiums. For a French Bulldog, $20,000–$28,000. Your insurance has to pay out more than that to come out ahead.' },
      { title: 'Compare to typical lifetime vet costs', body: 'Average lifetime vet spend for a dog: $11,000–$18,000 (more for large dogs and brachycephalic breeds). Cats: $6,000–$12,000. The insurance edge comes when one major event — TPLO surgery ($5K–$8K), cancer treatment ($8K–$20K), foreign body removal ($3K–$6K) — would otherwise be unaffordable.' },
      { title: 'Read the exclusions before enrolling', body: 'Pre-existing conditions are universally excluded. Most policies also exclude or limit hereditary conditions, dental disease, and behavioral treatment. Bilateral conditions (hip dysplasia in either hip) — if one side is pre-existing, the other side is often excluded too.' },
      { title: 'Pick reimbursement %, deductible, and annual cap', body: 'Standard configuration: 80% reimbursement, $500 deductible, $10,000 annual cap. Going to 90% reimbursement adds 15–20% to premium. Going to unlimited annual cap adds 10–25%. For peace-of-mind buyers, max it out; for cost-conscious, 80%/$500/$10K is usually plenty.' },
      { title: 'Consider a pet emergency fund instead', body: 'Saving $50/month from age 1 yields about $9,000 by age 10 (assuming 4% return). For healthy breeds with no chronic conditions, that fund covers most reasonable emergencies. Insurance wins for high-risk breeds; self-insurance often wins for low-risk breeds with disciplined savers.' },
    ],
    tips: [
      'Enroll while your pet is young and healthy. Conditions diagnosed before policy start are excluded forever — including conditions discovered at the wellness exam right before you buy the policy. Enroll first, then schedule the exam.',
      'Wellness add-ons (covering vaccines, routine exams, dental cleaning) are rarely worth it on the math. You pay $200–$400/year for benefits worth $250–$500. Skip them and put that money into savings.',
      'If you have multiple pets, ASPCA, Embrace, and Healthy Paws offer multi-pet discounts of 5–10%. Stack with annual-pay discounts (5–8%) for the cleanest savings.',
    ],
    faq: [
      { q: 'Does pet insurance cover pre-existing conditions?', a: 'Almost never. The industry-wide standard is to permanently exclude any condition that showed symptoms before policy start, even if undiagnosed. A few carriers (Embrace, Spot) will cover "curable" pre-existing conditions after a 12-month symptom-free period.' },
      { q: 'How does pet insurance reimbursement work?', a: 'You pay the vet directly, submit the invoice, and the insurer reimburses you 70–90% (your chosen percentage) after your deductible. Trupanion and a few others offer direct vet pay, but the standard model is reimbursement — you need cash flow to cover the bill upfront.' },
      { q: 'Should I get pet insurance for an older pet?', a: 'It gets harder and more expensive past age 8. Some carriers cap new enrollment at 14, others stop at 10. If your dog or cat is already 9+, the math usually favors a self-funded emergency fund unless you can get a cap-free policy.' },
      { q: 'What does pet insurance not cover?', a: 'Pre-existing conditions (universal), routine wellness (unless you add it), elective procedures, breeding costs, behavioral training (mostly), grooming, and food/supplements. Hereditary conditions are sometimes excluded; read the breed-specific exclusions in the policy.' },
      { q: 'Is pet insurance worth it for indoor cats?', a: 'Marginal. Indoor cats have low accident risk and most chronic illnesses (kidney disease, hyperthyroidism, diabetes) are manageable with $30–$80/month in care. Premiums of $20–$40/month rarely pay off across a lifetime. A $40/month savings account often beats insurance for indoor-only cats.' },
    ],
    relatedTool: 'pet-insurance-calculator',
    keywords: ['is pet insurance worth it', 'pet insurance cost', 'dog insurance worth it', 'cat insurance', 'pet insurance comparison'],
    publishedAt: '2026-05-09',
  },
];

export const getGuide = (slug: string) => guides.find(g => g.slug === slug);
