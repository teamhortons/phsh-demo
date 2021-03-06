import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as phshActions, selectors as phshSelectors } from './state/phsh';
import RbcModal from './rbc/RbcModal';

const Demo = () => {

    const dispatch = useDispatch();

    const isAnalyzing = useSelector(state => (
        phshSelectors.isAnalyzing(state)
    ));

    const analysisDone = useSelector(state => (
        phshSelectors.isAnalysisDone(state)
    ));

    useEffect(() => {
        dispatch(phshActions.analyzePage);
    }, [dispatch]);

    return (
        <RbcModal analysisDone={analysisDone}/>
        // <PhshOverlay isAnalyzing={isAnalyzing} analysisDone={analysisDone} />
    );
}

export default Demo;
