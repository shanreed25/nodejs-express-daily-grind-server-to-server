# Server to Server Communication


**An Express server that communicates with an external API using axios to complete a GET request.**


### Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
> The data from the API included other details but I only wanted the fun fact text, which made the response smaller, easier to use and the fields that does not need to be exposed never get exposed. 


### In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
> The axios error can expose information that are security risks and mean nothing to the user. A generic message keeps the client's error handling simple, and I can still see the full details on the server with `console.error`.

### How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
> You can use the optional config object to set request options as `params: { language }` and pass it to axios, so axios adds it to the URL.