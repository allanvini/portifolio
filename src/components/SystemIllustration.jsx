import { Fragment } from 'react';
import Icon from './Icon';

const layers = [
  {
    className: 'layer-interface',
    icon: 'window',
    label: 'O QUE VOCÊ VÊ',
    title: 'Interface',
    number: '01',
    connection: 'interação',
  },
  {
    className: 'layer-logic',
    icon: 'layers',
    label: 'O QUE FAZ ACONTECER',
    title: 'Lógica',
    number: '02',
    connection: 'conexão',
  },
  {
    className: 'layer-data',
    icon: 'nodes',
    label: 'O QUE SUSTENTA',
    title: 'Dados',
    number: '03',
  },
];

export default function SystemIllustration() {
  return (
    <div
      className="system-illustration"
      role="img"
      aria-label="Do front-end ao back-end: interfaces, lógica e dados conectados em uma aplicação."
    >
      <div className="system-top" aria-hidden="true">
        <span><i /> VISÃO DO TODO</span>
        <span>AV / 01</span>
      </div>
      <div className="system-orbit" aria-hidden="true" />

      <div className="system-stack" aria-hidden="true">
        {layers.map((layer) => (
          <Fragment key={layer.number}>
            <div className={`system-layer ${layer.className}`}>
              <span className="layer-icon"><Icon name={layer.icon} /></span>
              <div>
                <span className="layer-kicker">{layer.label}</span>
                <strong>{layer.title}</strong>
              </div>
              <span className="layer-number">{layer.number}</span>
            </div>
            {layer.connection && (
              <div className="system-connector">
                <i /><span>{layer.connection}</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="system-bottom" aria-hidden="true">
        <span>PARTES QUE SE CONECTAM.</span>
        <span>Um produto que faz sentido.</span>
      </div>
      <Icon name="asterisk" className="system-spark" />
    </div>
  );
}
