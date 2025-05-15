function httpGetRequest()
{
  var address = "https://dog.ceo/api/breeds/list/all";

  // Create an aqHttpRequest object
  var aqHttpRequest = aqHttp.CreateGetRequest(address);
  Log.Message("address: " + address);
  // Send the request, get an aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send();

  if (aqHttpResponse != null)
  {
    // Read the response data
    Log.Message(aqHttpResponse.AllHeaders); // All headers
    Log.Message(aqHttpResponse.GetHeader("Content-Type")); // A specific header
    Log.Message(aqHttpResponse.StatusCode); // A status code
    Log.Message(aqHttpResponse.StatusText); // A status text
    Log.Message(aqHttpResponse.Text); // A response body
    
    // Save the response body to a file and place it to the project folder
    aqHttpResponse.SaveToFile(Project.Path + "body.txt");
  
  }
}

