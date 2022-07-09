// Unit Testing DOM elements

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from '../components/TestElements';

afterEach(cleanup);

// testt 1 : Test if the counter is equal to 0:
