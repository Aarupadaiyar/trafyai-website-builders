import { useId, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/content";
import type { ServiceConfig } from "@/data/content/services";

const WEEKS_PER_MONTH = 4.33;
const MONTHS_PER_YEAR = 12;

function formatHours(value: number): string {
  return `${Math.round(value).toLocaleString()}`;
}

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString()}`;
}

export function ROICalculator({ config }: { config: ServiceConfig }) {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [automationPercent, setAutomationPercent] = useState(60);

  const employeesId = useId();
  const hoursId = useId();
  const costId = useId();
  const automationId = useId();

  const results = useMemo(() => {
    const hoursSavedPerMonth =
      employees * hoursPerWeek * (automationPercent / 100) * WEEKS_PER_MONTH;
    const hoursSavedPerYear = hoursSavedPerMonth * MONTHS_PER_YEAR;
    const costSavedPerMonth = hoursSavedPerMonth * hourlyCost;
    const costSavedPerYear = costSavedPerMonth * MONTHS_PER_YEAR;

    return { hoursSavedPerMonth, hoursSavedPerYear, costSavedPerMonth, costSavedPerYear };
  }, [employees, hoursPerWeek, hourlyCost, automationPercent]);

  const mailtoHref = useMemo(() => {
    const subject = `ROI estimate for ${config.name}`;
    const body = [
      `I'd like to talk about ${config.name} for our team.`,
      "",
      "My estimate inputs:",
      `- Employees affected: ${employees}`,
      `- Hours/week each on manual work: ${hoursPerWeek}`,
      `- Average hourly cost: $${hourlyCost}`,
      `- Estimated automation potential: ${automationPercent}%`,
      "",
      "Calculated savings:",
      `- Hours saved per month: ${formatHours(results.hoursSavedPerMonth)}`,
      `- Hours saved per year: ${formatHours(results.hoursSavedPerYear)}`,
      `- Cost saved per month: ${formatCurrency(results.costSavedPerMonth)}`,
      `- Cost saved per year: ${formatCurrency(results.costSavedPerYear)}`,
      "",
      "Can we talk through what this could look like for us?",
    ].join("\n");

    return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [config.name, employees, hoursPerWeek, hourlyCost, automationPercent, results]);

  return (
    <section
      id="roi-calculator"
      className="px-gutter py-section bg-secondary/40"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="block text-caption uppercase tracking-[0.25em] text-accent-element mb-5">
            Estimate Your Savings
          </span>
          <h2 id="roi-heading" className="font-display text-h2 text-foreground max-w-2xl">
            Estimate what {config.name} could save your team
          </h2>
          <p className="mt-4 text-body text-muted-foreground max-w-xl">
            Adjust the numbers below to reflect your team. The savings update instantly, no
            assumptions about project cost, just the math on your own time and headcount.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={employeesId} className="text-body-sm font-medium text-foreground">
                    Employees affected by this process
                  </label>
                  <span className="text-body-sm text-accent-element font-medium">{employees}</span>
                </div>
                <input
                  id={employeesId}
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="mt-3 w-full py-3 accent-accent-element cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-element rounded"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={hoursId} className="text-body-sm font-medium text-foreground">
                    Hours per week each spends on manual work
                  </label>
                  <span className="text-body-sm text-accent-element font-medium">{hoursPerWeek}</span>
                </div>
                <input
                  id={hoursId}
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="mt-3 w-full py-3 accent-accent-element cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-element rounded"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={costId} className="text-body-sm font-medium text-foreground">
                    Average hourly cost per employee (USD)
                  </label>
                  <span className="text-body-sm text-accent-element font-medium">${hourlyCost}</span>
                </div>
                <input
                  id={costId}
                  type="range"
                  min={10}
                  max={200}
                  step={5}
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="mt-3 w-full py-3 accent-accent-element cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-element rounded"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={automationId} className="text-body-sm font-medium text-foreground">
                    Estimated automation potential
                  </label>
                  <span className="text-body-sm text-accent-element font-medium">
                    {automationPercent}%
                  </span>
                </div>
                <input
                  id={automationId}
                  type="range"
                  min={10}
                  max={95}
                  step={5}
                  value={automationPercent}
                  onChange={(e) => setAutomationPercent(Number(e.target.value))}
                  className="mt-3 w-full py-3 accent-accent-element cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-element rounded"
                />
              </div>
            </div>

            {/* Outputs */}
            <div className="rounded-xl border border-border bg-background p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="font-display text-h1 text-accent-element leading-none break-words">
                    {formatHours(results.hoursSavedPerMonth)}
                  </div>
                  <div className="mt-2 text-body-sm text-muted-foreground">Hours saved / month</div>
                </div>
                <div>
                  <div className="font-display text-h1 text-accent-element leading-none break-words">
                    {formatHours(results.hoursSavedPerYear)}
                  </div>
                  <div className="mt-2 text-body-sm text-muted-foreground">Hours saved / year</div>
                </div>
                <div>
                  <div className="font-display text-h1 text-accent-element leading-none break-words">
                    {formatCurrency(results.costSavedPerMonth)}
                  </div>
                  <div className="mt-2 text-body-sm text-muted-foreground">Saved / month</div>
                </div>
                <div>
                  <div className="font-display text-h1 text-accent-element leading-none break-words">
                    {formatCurrency(results.costSavedPerYear)}
                  </div>
                  <div className="mt-2 text-body-sm text-muted-foreground">Saved / year</div>
                </div>
              </div>

              <p className="mt-6 text-caption text-muted-foreground">
                Based on your inputs alone, no assumed project cost or fees. We quote a fixed
                project fee after discovery, so this is purely the time and cost your team stands
                to reclaim.
              </p>

              <Button variant="glass" size="lg" className="mt-6 w-full" asChild>
                <a href={mailtoHref}>Send this estimate to Trafy</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
