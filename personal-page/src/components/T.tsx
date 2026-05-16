'use client';

import { useParams } from 'next/navigation';
import React from 'react';

interface TProps {
  [key: string]: React.ReactNode;
}

/**
 * Componente T (Translate)
 * Renderiza el contenido basado en el locale actual de la URL.
 * Uso: <T es="Texto en español" en="Text in English" />
 */
export const T: React.FC<TProps> = (props) => {
  const params = useParams();
  const locale = (params?.locale as string) || 'es';

  // Retorna el contenido del idioma actual, cae en español o el primer idioma disponible
  return <>{props[locale] || props['es'] || Object.values(props)[0] || null}</>;
};

T.displayName = 'T';
