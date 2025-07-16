export default function DefinitionList({ entries }) {
    if (!Array.isArray(entries)) {
    return <p className="italic text-gray-500">No definitions to show.</p>;
  }
  return (
    <div className="space-y-8">
      {entries.map((entry, ei) => (
        <div key={ei} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          {/* Word + phonetics */}
          <div className="mb-4 flex flex-wrap items-center gap-4">
            {entry.word && <h2 className="text-3xl font-bold">{entry.word}</h2>}
            {entry.phonetics.map((p, pi) =>
              p.text ? (
                <span key={pi} className="italic text-gray-500 dark:text-gray-400">
                  {p.text}
                </span>
              ) : null
            )}
          </div>

          {/* Meanings */}
          {entry.meanings.map((m, mi) => (
            <div key={mi} className="mb-6">
              <h3 className="text-xl font-semibold capitalize mb-2">
                {m.partOfSpeech}
              </h3>
              <ul className="list-decimal list-inside space-y-2">
                {m.definitions.map((d, di) => (
                  <li key={di}>
                    <p>{d.definition}</p>
                    {d.example && (
                      <p className="mt-1 pl-4 text-gray-600 italic">
                        “{d.example}”
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
