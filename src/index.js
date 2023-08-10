import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import '../dist/main.css'
const jeditor = require('../dist/main');
//const jeditor = require('../package/index.js');

const JEditor = jeditor();

render(
  <div>
    <a target="_blank" href="https://github.com/YMFE/json-schema-editor-visual">
      <h1>JSON Schema Editor</h1>
    </a>
    <p style={{ fontSize: '16px' }}>
      Monthly Cost: 20.000 EUR in licensing fees :) 
    </p>
    <br />

    <JEditor
      showEditor={true}
      data={null}
      onChange={e => {}}
    />
  </div>,
  document.getElementById('root')
);
