import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <header className="bg-white dark:bg-gray-800 shadow p-4">
          <h1 className="text-2xl font-bold text-center">📖 Dictionary Lookup</h1>
        </header>
        <main className="p-4 max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/define/:word" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
