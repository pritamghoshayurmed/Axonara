import React from 'react';
import './Marquee.css';

const brands = [
  { name: 'Logoipsum 1', symbol: '◆' },
  { name: 'Logoipsum 2', symbol: '●' },
  { name: 'Logoipsum 3', symbol: '▲' },
  { name: 'Logoipsum 4', symbol: '■' },
  { name: 'Logoipsum 5', symbol: '◇' },
  { name: 'Logoipsum 6', symbol: '○' },
  { name: 'Logoipsum 7', symbol: '△' },
  { name: 'Logoipsum 8', symbol: '□' },
];

const BrandItem: React.FC<{ name: string; symbol: string }> = ({ name, symbol }) => (
  <div className="marquee__item">
    <span className="marquee__item-icon">{symbol}</span>
    <span className="marquee__item-name">{name}</span>
  </div>
);

const Marquee: React.FC = () => {
  return (
    <section className="marquee-section" aria-label="Trusted brands">
      <div className="marquee-section__header">
        <p className="marquee-section__label">Trusted by 10,000+ teams worldwide</p>
      </div>
      <div className="marquee-track-outer">
        <div className="marquee-track">
          {/* Duplicate for seamless loop */}
          {[...brands, ...brands].map((brand, i) => (
            <BrandItem key={i} name={brand.name} symbol={brand.symbol} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
