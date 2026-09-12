"use client";

import {useLocale} from "./locale-provider";

const labels = {
  fr: ["DONNÉES BRUTES", "PIPELINES", "MODÈLES", "DÉCISIONS"],
  en: ["RAW DATA", "PIPELINES", "MODELS", "DECISIONS"],
};

export function DataFlow() {
  const {locale} = useLocale();
  const t = labels[locale];
  return <div className="data-flow" aria-label={locale === "fr" ? "Transformation animée de la donnée brute en décisions" : "Animated transformation of raw data into decisions"}>
    <div className="flow-orbit orbit-one"/>
    <div className="flow-orbit orbit-two"/>
    <svg viewBox="0 0 660 520" role="img">
      <defs>
        <linearGradient id="flowGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#8b5cf6"/>
          <stop offset=".55" stopColor="#22d3ee"/>
          <stop offset="1" stopColor="#ffbd4a"/>
        </linearGradient>
        <filter id="flowGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path id="mainFlow" className="flow-path" d="M45 385 C150 385 135 136 265 145 S390 405 490 318 S570 115 625 124"/>
      <path className="flow-echo" d="M45 420 C160 420 150 180 273 184 S403 436 512 348 S574 166 630 165"/>
      <g className="motion-particles" filter="url(#flowGlow)">
        {[0, .18, .38, .58, .78].map((begin, index) => <circle key={index} r={index % 2 ? 4 : 6} fill={index > 3 ? "#ffbd4a" : index > 1 ? "#22d3ee" : "#8b5cf6"}>
          <animateMotion dur="5.5s" begin={`${begin * 5.5}s`} repeatCount="indefinite"><mpath href="#mainFlow"/></animateMotion>
        </circle>)}
      </g>
      {[
        {x: 68, y: 386, n: "01", label: t[0]},
        {x: 264, y: 145, n: "02", label: t[1]},
        {x: 490, y: 318, n: "03", label: t[2]},
        {x: 620, y: 124, n: "04", label: t[3]},
      ].map(node => <g key={node.n} className="flow-node" transform={`translate(${node.x} ${node.y})`}>
        <circle r="28"/><circle className="node-core" r="8"/>
        <text className="node-number" x="0" y="-42">{node.n}</text>
        <text className="node-label" x="0" y="54">{node.label}</text>
      </g>)}
    </svg>
    <div className="flow-readout"><span>LIVE FLOW</span><b>DATA → IMPACT</b></div>
  </div>;
}
