import React from "react";
import Svg,{Path, G} from 'react-native-svg'
import { SvgXml } from 'react-native-svg';

const xml = `
<svg
id="prefix__Capa_1"
x={0}
y={0}
viewBox="0 0 315.6 252.4"
xmlSpace="preserve"

>
<style>
  {
    ".prefix__st0{fill:#1c3560}.prefix__st1{fill:#483ee8}.prefix__st2{fill:#a59fce}"
  }
</style>
<g id="prefix__Grupo_18">
  <g id="prefix__Grupo_17">
    <path
      id="prefix__Trazado_9"
      className="prefix__st0"
      d="M155.1 55.4H98.7c-2-.1-3.7 1.3-3.9 3.3v.5c0 6-.1 11.9-.1 17.8.1 12.5 0 25.1.1 37.6V132c0 2.8 1.2 4 4.1 4h36.7c1.8 0 1.8.2 1.5 1.9-.3 1.6-.4 3.2-.5 4.8 0 .8-.2 1-1 1H96.7c-3.3 0-7.7-3.5-8.9-6.7-.7-1.8-1-3.8-1-5.7V58.9c-.1-6.2 4.9-11.3 11.1-11.3h.2c7.4-.1 14.8-.1 22.1 0 1.2 0 1.5-.3 1.5-1.5-.1-3.1-.1-6.2 0-9.3.1-5.4 4.4-9.7 9.8-9.8h47.1c4.7 0 8.8 3.3 9.8 7.9.4 3.5.5 7.1.3 10.6 0 1.6.4 2.1 2 2 7.1-.1 14.1 0 21.2 0 5.1 0 9.6 3.3 11.1 8.1.3 1.1.5 2.2.6 3.3 0 24.6.1 49.2-.1 73.8 0 5.9-4.7 10.7-10.6 10.8h-.2c-12.4.1-24.8 0-37.1.1-1.2 0-1.7-.1-1.8-1.5 0-1.5-.2-3-.5-4.5-.3-1-.2-1.7 1.3-1.7 12.2.1 24.4 0 36.7 0 3.1 0 4.3-1.3 4.3-4.3V59.3c0-2.7-1.2-3.9-3.9-3.9h-56.6zm-23.4-20.8c-1.1.4-2.2.6-2.2 2.2v9.8c0 .8.2 1 1 1h49.2c.9 0 1-.3 1-1.1v-8.4c0-2.6.1-3.3-1.9-3.5-.2 0-.8-.1-1-.1-10.8.1-43.1.1-46.1.1z"
    />
    <path
      id="prefix__Trazado_10"
      className="prefix__st1"
      d="M171.3 58c-2.8 3.3-5.6 6.5-8.3 9.6-.4.5-.6 1.1-.5 1.7.3 3.3.6 6.5 1 9.7.3 3.2.6 6.3.9 9.5l.9 7.2c.2.5-.1 1.1-.6 1.3-3 1.8-5.9 3.7-8.9 5.5s-6 3.8-9 5.8c-.9.6-2.1.7-2.8 2-.2-1.9-.1-3.8.3-5.7.3-2.6.5-5.3.8-7.9.5-3.9.9-7.8 1.2-11.8.2-2.4.4-4.8.7-7.1.3-2.8.6-5.7.9-8.5.1-.5-.1-1-.5-1.4-2.4-2.8-4.8-5.7-7.3-8.5-.4-.4-.6-.9-1.1-1.5l32.3.1z"
    />
    <path
      id="prefix__Trazado_11"
      className="prefix__st0"
      d="M165.9 100.6c.5 5.3 1.1 10.5 1.6 15.6.1.7-.2 1.3-.8 1.6-5.5 3.3-10.9 6.7-16.4 10-2.6 1.6-5.2 3.3-7.9 5l-1.2.7c.3-2.8.5-5.5.7-8.1.3-3 .8-5.9.9-8.9-.1-1.3.6-2.4 1.8-3 5.8-3.3 11.3-7.1 17.1-10.4 1.4-.7 2.6-1.8 4.2-2.5z"
    />
    <path
      id="prefix__Trazado_12"
      className="prefix__st1"
      d="M140.5 139.1l27.8-17.2 3 30.7-16.3 16.3-16-16.1 1.5-13.7z"
    />
  </g>
  <path
    id="prefix__Trazado_13"
    className="prefix__st2"
    d="M99.6 60.5v70.9h37l7.9-61.4-7.9-9.5h-37z"
  />
  <path
    id="prefix__Trazado_14"
    className="prefix__st2"
    d="M166 71.1l10.6-10.4H211v69.6h-36.6L166 71.1z"
  />
</g>
<g id="prefix__NEXUSJOB">
  <path
    className="prefix__st0"
    d="M53.8 188.8v36.1h-6.2l-13.9-19.6v19.6h-8.2v-36.1h6.2l13.9 19.6v-19.6h8.2zM84.2 216.9v7.9H61.5v-36.1H84v7.9H69.8v6h12.9v7.8H69.8v6.4l14.4.1zM109.4 224.8l-6.1-10.4-6.1 10.4h-9.4l10.8-18.5-10.3-17.6h9.4l5.6 9.5 5.6-9.5h9.4L108 206.3l10.8 18.5h-9.4zM123.1 213.2v-24.4h8.2v23.7c0 2.7 1.3 5.1 5.7 5.1s5.7-2.3 5.7-5.1v-23.7h8.2v24.4c0 7.7-6 12.4-13.9 12.4s-13.9-4.7-13.9-12.4zM156.6 216.6l7.1-4.1c1.1 3.2 4.2 5.2 7.6 5 3.9 0 4.9-1.5 4.9-2.9 0-2.2-2.1-3.1-7.5-4.6s-10.6-4.1-10.6-11 5.9-11 12.1-11c5.6-.2 10.8 3 13.2 8.1l-6.9 4.1c-1.2-2.6-2.9-4.2-6.2-4.2-2.6 0-3.9 1.3-3.9 2.7 0 1.6.9 2.8 6.5 4.5s11.6 3.6 11.6 11.2c0 7-5.6 11.1-13.4 11.1-7.7 0-12.5-3.6-14.5-8.9z"
  />
  <g>
    <path
      className="prefix__st2"
      d="M188.5 218.5l7.2-4.1c1.1 2 2.3 3.1 5.1 3.1 3.6 0 4.7-2.1 4.7-4.3v-24.5h8.3v24.5c0 7.9-5.6 12.3-13 12.3-5.8 0-9.9-2.4-12.3-7zM219.6 206.8c0-10.4 8.4-18.8 18.8-18.8s18.8 8.4 18.8 18.8-8.4 18.8-18.8 18.8c-10.3.1-18.7-8.2-18.8-18.4v-.4zm29.3 0c-.1-5.8-4.9-10.4-10.7-10.3-5.8.1-10.4 4.9-10.3 10.7.1 5.7 4.8 10.3 10.5 10.3 5.7.1 10.4-4.3 10.5-10v-.7zM290.1 214.3c0 6.4-5.2 10.6-11.6 10.6h-15.1v-36.1h14.1c6.3 0 11.4 4.1 11.4 10.3.1 2.7-1.1 5.3-3.1 7.1 2.7 1.6 4.4 4.7 4.3 8.1zm-18.5-17.8v6.4h5.9c1.8-.1 3.1-1.6 3-3.4-.1-1.6-1.4-2.9-3-3h-5.9zm10.3 17.1c.1-1.8-1.3-3.3-3.1-3.4h-7.2v6.9h6.9c1.8.1 3.3-1.3 3.4-3.1v-.4z"
    />
  </g>
</g>
</svg>
`
;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;