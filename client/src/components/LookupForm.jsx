import { useState } from 'react';

export default function LookupForm({ onLookup, initialWord }) {
  const [word, setWord] = useState(initialWord);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onLookup(word.trim());
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={word}
        onChange={e => setWord(e.target.value)}
        placeholder="Enter a word…"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                   focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg
                   hover:bg-indigo-600 transition"
      >
        Lookup
      </button>
    </form>
  );
}
