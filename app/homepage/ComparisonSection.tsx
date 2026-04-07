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
        <h2 className="mt-3 font-heading text-3xl font-semibold text-black sm:text-4xl">AI Teacher vs Traditional Teacher</h2>
        <p className="mx-auto mt-2 max-w-3xl text-[#59607a]">The smart way to practice speaking without pressure.</p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-[#dbe3ff] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 border-collapse">
              <thead>
                <tr className="bg-[#eef3ff] text-left">
                  <th className="border-b border-[#dbe3ff] px-4 py-4 font-heading text-base font-semibold text-black sm:text-lg">
                    Feature
                  </th>
                  <th className="border-b border-l border-r border-[#dbe3ff] px-4 py-4 font-heading text-base font-semibold text-black sm:text-lg">
                    Arya AI
                  </th>
                  <th className="border-b border-[#dbe3ff] px-4 py-4 font-heading text-base font-semibold text-black sm:text-lg">
                    English Teacher
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-t border-[#e7ecff] align-top">
                    <td className="bg-[#f8faff] px-4 py-3 font-heading text-base font-semibold text-black sm:text-lg">
                      {row.feature}
                    </td>
                    <td className="border-l border-r border-[#e7ecff] px-4 py-3 text-sm text-black sm:text-base">
                      {markedFeatures.has(row.feature) ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="font-semibold text-black">✓</span>
                          <span>{row.ai}</span>
                        </span>
                      ) : (
                        row.ai
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-black sm:text-base">
                      {markedFeatures.has(row.feature) ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="font-semibold text-red-600">✕</span>
                          <span>{row.traditional}</span>
                        </span>
                      ) : (
                        row.traditional
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}