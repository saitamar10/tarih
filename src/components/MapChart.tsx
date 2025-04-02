'use client';

import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';

interface MapChartProps {
  selectedYear: string;
}

const MapChart: React.FC<MapChartProps> = ({ selectedYear }) => {
  // Dünya haritası için GeoJSON dosyası
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  // Farklı dönemlere göre ülke/imparatorluk renklerini belirle
  const getCountryColor = (geo: any) => {
    const { NAME } = geo.properties;
    
    // Bu kısım gerçek bir uygulamada daha karmaşık olabilir ve gerçek tarihsel verilere dayanabilir
    // Şu an için basit bir örnek
    
    if (selectedYear === '-500') {
      // Antik Çağ
      if (['Greece', 'Turkey', 'Iran', 'Iraq', 'Egypt', 'Syria', 'Lebanon', 'Israel'].includes(NAME)) {
        return '#d88c9a'; // Pers İmparatorluğu ve Yunan şehir devletleri
      }
      if (['Italy'].includes(NAME)) {
        return '#f2d0a9'; // Roma Cumhuriyeti
      }
    } 
    else if (selectedYear === '1000') {
      // Orta Çağ
      if (['Turkey', 'Greece', 'Bulgaria', 'Romania', 'Syria', 'Lebanon', 'Israel', 'Egypt'].includes(NAME)) {
        return '#5e548e'; // Bizans İmparatorluğu
      }
      if (['Saudi Arabia', 'Iraq', 'Iran', 'Afghanistan', 'Pakistan', 'Uzbekistan'].includes(NAME)) {
        return '#90be6d'; // Abbasi Halifeliği
      }
      if (['Spain', 'Portugal', 'Morocco', 'Algeria', 'Tunisia'].includes(NAME)) {
        return '#f9c74f'; // Endülüs Emevileri
      }
      if (['France', 'Germany', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Austria'].includes(NAME)) {
        return '#277da1'; // Kutsal Roma İmparatorluğu
      }
    }
    else if (selectedYear === '1500') {
      // Yeni Çağ
      if (['Spain', 'Portugal', 'Netherlands', 'Belgium', 'Luxembourg', 'Austria', 'Germany', 'Italy', 'Croatia', 'Hungary'].includes(NAME)) {
        return '#f94144'; // Habsburg İmparatorluğu
      }
      if (['Turkey', 'Greece', 'Bulgaria', 'Romania', 'Serbia', 'Bosnia and Herzegovina', 'Albania', 'Egypt', 'Syria', 'Iraq', 'Saudi Arabia', 'Yemen', 'Algeria', 'Tunisia', 'Libya'].includes(NAME)) {
        return '#577590'; // Osmanlı İmparatorluğu
      }
      if (['United Kingdom', 'Ireland'].includes(NAME)) {
        return '#43aa8b'; // İngiltere
      }
      if (['France'].includes(NAME)) {
        return '#f8961e'; // Fransa
      }
    }
    else if (selectedYear === '1900') {
      // Modern Çağ
      if (['United Kingdom', 'Canada', 'Australia', 'India', 'Pakistan', 'Bangladesh', 'Myanmar', 'Malaysia', 'Singapore', 'Kenya', 'Uganda', 'Tanzania', 'South Africa', 'Nigeria', 'Ghana', 'Egypt'].includes(NAME)) {
        return '#f94144'; // Britanya İmparatorluğu
      }
      if (['France', 'Algeria', 'Morocco', 'Tunisia', 'Senegal', 'Mali', 'Niger', 'Chad', 'Central African Republic', 'Gabon', 'Congo', 'Madagascar', 'Vietnam', 'Laos', 'Cambodia'].includes(NAME)) {
        return '#577590'; // Fransız Sömürgeleri
      }
      if (['Germany'].includes(NAME)) {
        return '#43aa8b'; // Alman İmparatorluğu
      }
      if (['Russia', 'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan', 'Georgia', 'Armenia', 'Azerbaijan', 'Ukraine', 'Belarus', 'Moldova', 'Estonia', 'Latvia', 'Lithuania'].includes(NAME)) {
        return '#f8961e'; // Rus İmparatorluğu
      }
    }
    
    // Varsayılan renk
    return '#d3d3d3';
  };

  return (
    <div className="map-container w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <ComposableMap projection="geoMercator" className="w-full h-full">
        <ZoomableGroup center={[0, 30]} zoom={1.2}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountryColor(geo)}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#F53', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;