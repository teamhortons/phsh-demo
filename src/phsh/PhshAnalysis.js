const getAnalysis = async () => {
    const url = "https://cors-anywhere.herokuapp.com/iscorsneeded";
    console.log("before response");
    const response = setTimeout(async function() {
        return await fetch(url, {
            mode: "no-cors"
        });
    }, 5000);
    // const json = await response.json();
    // console.log("json: ", json);
    // return json;
    return response;
};

export default getAnalysis;