import { comparisonRows } from "./content";

export default function ComparisonSection() {
  const markedFeatures = new Set([
    "Availability",
    "Session length",
    "Talk about any topic",
    "Real-time feedback",
    "Lesson summary",
    "Pressure-free"
  ]);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-304 px-4 sm:px-6">
        <div className="text-center">
        <p className="inline-flex rounded-full bg-[#666cfb]/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
          Feature Comparison
        </p>
        <h2 className="mt-3 font-heading text-3xl px-4 font-semibold text-black sm:text-4xl">AI Teacher vs Traditional Teacher</h2>
        <p className="mx-auto mt-2 max-w-3xl text-[#59607a] px-4">The smart way to practice speaking without pressure.</p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-[#dbe3ff] bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#eef3ff] text-left">
                <th className="border-b border-[#dbe3ff] px-2 py-2 font-heading text-xs font-semibold text-black sm:px-4 sm:py-3 sm:text-sm">
                  Feature
                </th>
                <th className="border-b border-l border-r border-[#dbe3ff] px-2 py-2 font-heading text-xs font-semibold text-black sm:px-4 sm:py-3 sm:text-sm">
                  Arya AI
                </th>
                <th className="border-b border-[#dbe3ff] px-2 py-2 font-heading text-xs font-semibold text-black sm:px-4 sm:py-3 sm:text-sm">
                  English Teacher
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-t border-[#e7ecff] align-top">
                  <td className="bg-[#f8faff] px-2 py-2 font-heading text-xs font-semibold text-black sm:px-4 sm:py-3 sm:text-sm">
                    <span className="sm:hidden">{row.shortFeature || row.feature}</span>
                    <span className="hidden sm:inline">{row.feature}</span>
                  </td>
                  <td className="border-l border-r border-[#e7ecff] px-2 py-2 text-xs text-black sm:px-4 sm:py-3 sm:text-sm">
                    {markedFeatures.has(row.feature) ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="font-semibold text-black">✓</span>
                        <span className="sm:hidden">{row.shortAi || row.ai}</span>
                        <span className="hidden sm:inline">{row.ai}</span>
                      </span>
                    ) : (
                      <>
                        <span className="sm:hidden">{row.shortAi || row.ai}</span>
                        <span className="hidden sm:inline">{row.ai}</span>
                      </>
                    )}
                  </td>
                  <td className="px-2 py-2 text-xs text-black sm:px-4 sm:py-3 sm:text-sm">
                    {markedFeatures.has(row.feature) ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="font-semibold text-red-600">✕</span>
                        <span className="sm:hidden">{row.shortTraditional || row.traditional}</span>
                        <span className="hidden sm:inline">{row.traditional}</span>
                      </span>
                    ) : (
                      <>
                        <span className="sm:hidden">{row.shortTraditional || row.traditional}</span>
                        <span className="hidden sm:inline">{row.traditional}</span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}