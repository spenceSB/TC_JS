//USEUNIT EditXML

function logMessage(){
  Log.Message("Passing Test")

  Log.SaveResultsAs("C:\\TestResults\\Log\\LogResults2.xml", lsJUnit)
    xmlDoc.async = false;
  xmlDoc.load(xmlFilePath);

}
function LogPropertyConfig(){
  AddXrayPropertyToJUnitXML('C:\\TestResults\\Log\\LogResults2.xml', 'ANLIT-5986')
}

function AddXrayPropertyToJUnitXML(xmlFilePath, testKey) {
//  var xmlDoc = Sys.OleObject("Msxml2.DOMDocument.6.0");
  xmlDoc.async = false;
  xmlDoc.load(xmlFilePath);

  var testcases = xmlDoc.getElementsByTagName("testcase");
  for (var i = 0; i < testcases.length; i++) {
    var properties = xmlDoc.createElement("properties");
    var property = xmlDoc.createElement("property");
    property.setAttribute("name", "test_key");
    property.setAttribute("value", testKey); // You can set this dynamically per test case
    properties.appendChild(property);
    testcases.item(i).appendChild(properties);
  }
  xmlDoc.save(xmlFilePath);
}
