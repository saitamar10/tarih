'use client';

import { useState, useEffect } from 'react';
import MapChart from '../components/MapChart';
import periodsData from '../data/periods.json';

export default function Home() {
  const [selectedYear, setSelectedYear] = useState('-500');
  const [selectedPeriod, setSelectedPeriod] = useState<any>(null);

  useEffect(() => {
    // Seçilen yıla göre dönem bilgilerini güncelle
    const period = periodsData.periods.find(p => p.id === selectedYear);
    setSelectedPeriod(period);
  }, [selectedYear]);

  return (
    <main className="min-h-screen p-6 md:p-12 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-merriweather text-gray-800 mb-4">Dünya Tarihi</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Farklı tarihsel dönemlerde dünya haritasını ve önemli imparatorlukları keşfedin.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sol taraf - Harita ve Dönem Seçici */}
        <div className="lg:w-2/3">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex justify-center space-x-4 mb-6">
              <button 
                onClick={() => setSelectedYear('-500')} 
                className={`px-4 py-2 rounded-full ${selectedYear === '-500' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Antik Çağ
              </button>
              <button 
                onClick={() => setSelectedYear('1000')} 
                className={`px-4 py-2 rounded-full ${selectedYear === '1000' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Orta Çağ
              </button>
              <button 
                onClick={() => setSelectedYear('1500')} 
                className={`px-4 py-2 rounded-full ${selectedYear === '1500' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Yeni Çağ
              </button>
              <button 
                onClick={() => setSelectedYear('1900')} 
                className={`px-4 py-2 rounded-full ${selectedYear === '1900' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Modern Çağ
              </button>
            </div>
            <MapChart selectedYear={selectedYear} />
          </div>
        </div>

        {/* Sağ taraf - Dönem Bilgileri */}
        <div className="lg:w-1/3">
          {selectedPeriod && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-merriweather text-gray-800 mb-4">{selectedPeriod.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{selectedPeriod.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Önemli Olaylar</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {selectedPeriod.key_events.map((event: string, index: number) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Büyük İmparatorluklar</h3>
                <div className="space-y-4">
                  {selectedPeriod.major_empires.map((empire: any, index: number) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: empire.color }}>
                      <h4 className="font-bold text-gray-800">{empire.name}</h4>
                      <p className="text-sm text-gray-600">{empire.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2023 Dünya Tarihi Ansiklopedisi</p>
      </footer>
    </main>
  );
}