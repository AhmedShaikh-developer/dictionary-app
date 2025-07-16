import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LookupForm from '../components/LookupForm';
import DefinitionList from '../components/DefinitionList';
import ErrorMessage from '../components/ErrorMessage';

export default function HomePage() {
  const { word: urlWord } = useParams();
  const navigate = useNavigate();

  const [data, setData]     = useState(null);
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  const lookup = async (word) => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const res = await axios.get(`/api/lookup/${word}`);
      setData(res.data);
      navigate(`/define/${word}`, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  // Auto‑lookup if loaded via URL
  useEffect(() => {
    if (urlWord) lookup(urlWord);
  }, [urlWord]);

  console.log('lookup data →', data);

  return (
    <div className="space-y-6">
      <LookupForm onLookup={lookup} initialWord={urlWord || ''} />

      {loading && (
        <div className="text-center text-lg">Loading…</div>
      )}

      {error && <ErrorMessage message={error} />}

      {Array.isArray(data) && data.length > 0 && (
        <DefinitionList entries={data} />
        )}

    </div>
  );
}
