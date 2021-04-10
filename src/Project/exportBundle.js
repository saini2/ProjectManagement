import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppIndex from './components';
import './webfont.font';
/* global BASE_PATH */


export const ProjectBundle = feature => (
    <BrowserRouter basename={BASE_PATH}>
      <AppIndex feature={feature} />
    </BrowserRouter>
);
