import React, { useMemo } from 'react';
import { useNanoTicker } from '../api';

import { safeRawToMega } from '../utils';

interface Props {
  number: number;
  options?: Intl.NumberFormatOptions;
}

export const IntlNumber: React.FC<Props> = ({ number, options }) => {
  const formatted = useMemo(() => {
    return new Intl.NumberFormat(undefined, options).format(number);
  }, [ number, JSON.stringify(options) ]);

  return <>
    { formatted }
  </>;
};

interface RawToUSDProps {
  raw?: string;
}

export const RawToUSD: React.FC<RawToUSDProps> = ({ raw }) => {
  const { data } = useNanoTicker("nano");
 
  const value = parseFloat(safeRawToMega(raw)) * (parseFloat(data?.market_data.current_price.usd?? ''));

  return <IntlNumber number={value} options={{ style: 'currency', currency: 'USD' }}/>
}