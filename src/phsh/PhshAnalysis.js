const getAnalysis = async () => {

    const url = "http://www.omdbapi.com/?apikey=e1e3fd95&t=the";
    const delay = t => new Promise(resolve => setTimeout(resolve, t)) 
    const response = await Promise.all([fetch(url), delay(3000)])

    console.log("promiseArr: ", response);

    return true;
};

export default getAnalysis;