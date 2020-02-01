import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PhshOverlay from './phsh/PhshOverlay';
import { actions as phshActions, selectors as phshSelectors } from './state/phsh';

const Demo = () => {

    const dispatch = useDispatch();

    const isAnalyzing = useSelector(state => (
        phshSelectors.isAnalyzing(state)
    ));

    useEffect(() => {
        console.log("useeffect");
        dispatch(phshActions.analyzePage);
    }, [dispatch]);

    console.log("isAnalyzing? ", isAnalyzing);

    return (
        <PhshOverlay
            isActive={isAnalyzing}
        />
    );
}

export default Demo;
