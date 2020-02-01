import React from 'react';

import LoadingOverlay from 'react-loading-overlay';
import Rbc from './Rbc';

const PhshOverlay = (isActive) => (
    <LoadingOverlay
        active={isActive.isActive}
        spinner
        text="Analyzing..."
    >
        <Rbc />
    </LoadingOverlay>
);

export default PhshOverlay;
