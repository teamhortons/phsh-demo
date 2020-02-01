import React from 'react';

import LoadingOverlay from 'react-loading-overlay';
import Rbc from '../rbc/Rbc';

const PhshOverlay = (options) => {

    return (

        <LoadingOverlay
            active={options.isAnalyzing || options.analysisDone}
            spinner={!options.analysisDone}
            text={options.isAnalyzing
                ? "Analyzing..."
                : options.analysisDone && "This website seems phishy. Please beware of entering any personal information or credentials!"}
            styles={{
                overlay: (base) =>({
                    ...base,
                    background: options.isAnalyzing ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 227, 159, 0.8)',
                })
            }}
        >
            <Rbc />
        </LoadingOverlay>

    )
};

export default PhshOverlay;
