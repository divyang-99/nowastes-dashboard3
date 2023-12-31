// This function helps to build a dynamic URL for the waste data API

function buildWasteURL(baseURL, defaultParameters = {}) {

    // Create a URLSearchParams object to hold the query string parameters
    const urlSearchParams = new URLSearchParams();

    // Add non-null default parameters to the URL search params object
    Object.entries(defaultParameters).forEach(([key, value]) => {
        if (value !== null) {
            urlSearchParams.append(key, value);
        }
    });

    // Construct the dynamic URL by appending the query string to the base URL
    const queryString = urlSearchParams.toString();
    const dynamicURL = `${baseURL}${queryString ? `?${queryString}` : ""}`;

    // Return the dynamic URL
    return dynamicURL;
}

export default buildWasteURL;