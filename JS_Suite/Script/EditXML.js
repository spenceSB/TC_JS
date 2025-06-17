const XML_PATH = "C:\github\XML\Data.xml"
  var xmlDoc = Sys.OleObject("Msxml2.DOMDocument.6.0");
function TestWithXPath()
{
  var Doc, s, Nodes, ChildNodes, i, Node;
  
  // Create a COM object
  // If you have MSXML 4:
//  Doc = getActiveXObject("Msxml2.DOMDocument.4.0");
  // If you have MSXML 6:
//  Doc = getActiveXObject("Msxml2.DOMDocument.6.0");

//  Doc.async = false;
  
  // Load data from a file
  // We use the file created earlier
  Doc.load("C:\\Data.xml");
  
  // Report an error, if, for instance, the markup or file structure is invalid
  if(Doc.parseError.errorCode != 0)
  {
    s = "Reason:\t" + Doc.parseError.reason + "\n" +
        "Line:\t" + aqConvert.VarToStr(Doc.parseError.line) + "\n" +
        "Pos:\t" + aqConvert.VarToStr(Doc.parseError.linePos) + "\n" +
        "Source:\t" + Doc.parseError.srcText;
    // Post an error to the log and exit
    Log.Error("Cannot parse the document.", s);
    return;
  }
  
  // Use an XPath expression to obtain a list of "control" nodes
  Nodes = Doc.selectNodes("//control");
  
  // Process the node
  for(i = 0; i < Nodes.length; i++)
  {
    // Get the node from the collection of the found nodes
    Node = Nodes.item(i);
    // Get child nodes
    ChildNodes = Node.childNodes;
    // Output two child nodes to the log
    Log.Message(ChildNodes.item(1).text + ": " + ChildNodes.item(2).text);
  }
}