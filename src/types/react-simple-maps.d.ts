declare module 'react-simple-maps' {
  import React from 'react';

  // ComposableMap component
  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: object;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
  }
  export const ComposableMap: React.FC<ComposableMapProps>;

  // ZoomableGroup component
  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    className?: string;
    style?: React.CSSProperties;
    onMoveStart?: (event: any) => void;
    onMove?: (position: { coordinates: [number, number], zoom: number }) => void;
    onMoveEnd?: (position: { coordinates: [number, number], zoom: number }) => void;
  }
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;

  // Geographies component
  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: any[] }) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }
  export const Geographies: React.FC<GeographiesProps>;

  // Geography component
  export interface GeographyProps {
    geography: any;
    className?: string;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    onClick?: (event: React.MouseEvent) => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
  }
  export const Geography: React.FC<GeographyProps>;

  // Additional components
  export const Marker: React.FC<any>;
  export const Line: React.FC<any>;
  export const Annotation: React.FC<any>;
  export const Graticule: React.FC<any>;
  export const Sphere: React.FC<any>;
}