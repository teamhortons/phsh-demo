import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhshOverlay from './phsh/PhshOverlay';
import { actions as phshActions, selectors as phshSelectors } from './state/phsh';
import Modal from './Modal';

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
        <Modal/>
        // <PhshOverlay isAnalyzing={isAnalyzing} analysisDone={analysisDone} />
    );
}

export default Demo;
