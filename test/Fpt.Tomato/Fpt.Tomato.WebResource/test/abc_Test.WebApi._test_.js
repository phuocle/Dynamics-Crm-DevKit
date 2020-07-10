/*
//@ts-check
define(['xrm-mock', 'sinon'], () => {
    var xrmMock = require('xrm-mock');
    var sinon = require('sinon');
    describe('', () => {
        beforeEach(function () {
            var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
        });
        it('WebApi Retreive', async () => {
            sinon.stub(Xrm.WebApi, 'retrieveMultipleRecords')
                .withArgs("devkit_webapi")
                .returns({
                    entities: "AA",
                    nextLink: "AA"
                });




            var fetchData = {
                devkit_name: "STRING"
            };
            var fetchXml = `<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='devkit_webapi'>
    <attribute name='devkit_name'/>
    <attribute name='devkit_singlelineoftexturl'/>
    <attribute name='devkit_singlelineoftexttickersymbol'/>
    <attribute name='devkit_singlelineoftexttextarea'/>
    <attribute name='devkit_singlelineoftexttext'/>
    <attribute name='devkit_singlelineoftextphone'/>
    <attribute name='devkit_singlelineoftextemail'/>
    <attribute name='ownerid'/>
    <attribute name='devkit_multipleliniesoftext'/>
    <attribute name='devkit_linkwebapiid'/>
    <attribute name='devkit_customerid'/>
    <attribute name='devkit_webapiid'/>
    <order attribute='devkit_name' descending='false'/>
    <filter type='and'>
      <condition attribute='devkit_name' operator='eq' value='${fetchData.devkit_name}'/>
    </filter>
  </entity>
</fetch>`;
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            var res = await Xrm.WebApi.retrieveMultipleRecords("devkit_webapi", fetchXml);
            debugger;
            res.
        });
    });
});
*/