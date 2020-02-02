import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as phshActions, selectors as phshSelectors } from './state/phsh';
import PaypalModal from './paypal/PaypalModal';

const PaypalDemo = () => {

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
        <PaypalModal analysisDone={analysisDone}/>
        // <PhshOverlay isAnalyzing={isAnalyzing} analysisDone={analysisDone} />
    );
}

export default PaypalDemo;
