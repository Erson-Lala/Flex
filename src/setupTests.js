import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));

configure({ testIdAttribute: 'data-testid' });
