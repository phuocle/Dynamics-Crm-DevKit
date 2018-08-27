///<reference path='Lead.intellisense.js' />
var formLead = (function () {
	function onLoad(executionContext) {
	    var form = new LuckeyMonkey.FormLead(executionContext);	    
	    if (form.FormType !== OptionSet.FormType.Create) {
	        form.Body.Subject.Disabled = true;
	    }
	    else {
	        form.Body.Subject.AddOnChange(SubjectAddOnChange);
	    }
	    form.Body.Telephone1.AddOnChange(PhoneAddOnChange);
	    form.Body.MobilePhone.AddOnChange(PhoneAddOnChange);
	}
	function onSave(executionContext) {
	
	}
	function SubjectAddOnChange(executionContext) {
	    var form = new LuckeyMonkey.FormLead(executionContext);
	    if (form.Body.Subject.Value !== null) {
	        form.Body.Subject.Value = form.Body.Subject.Value.toUpperCase();
	    }
	}
	function PhoneAddOnChange(executionContext) {
	    var form = new LuckeyMonkey.FormLead(executionContext);
	    if (form.Body.Telephone1.Value !== null ||
            form.Body.MobilePhone.Value !== null) {
	        form.Body.Telephone1.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
	        form.Body.MobilePhone.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
	    }
	    else {
	        form.Body.Telephone1.RequiredLevel = OptionSet.FieldRequiredLevel.None;
	        form.Body.MobilePhone.RequiredLevel = OptionSet.FieldRequiredLevel.None;
	    }
	}
	function hasRole(role) {
	    var fetchData = {
	        name: role
	    };
	    var fetchXml = [
    "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>",
    "  <entity name='systemuser'>",
    "    <attribute name='systemuserid'/>",
    "    <filter type='and'>",
    "      <condition attribute='systemuserid' operator='eq-userid'/>",
    "    </filter>",
    "    <link-entity name='systemuserroles' from='systemuserid' to='systemuserid' visible='false' intersect='true'>",
    "      <link-entity name='role' from='roleid' to='roleid' alias='ae'>",
    "        <filter type='and'>",
    "          <condition attribute='name' operator='eq' value='", fetchData.name, "'/>",
    "        </filter>",
    "      </link-entity>",
    "    </link-entity>",
    "  </entity>",
    "</fetch>",
	    ].join("");
	    var req = new LuckeyMonkey.WebApi.RetrieveRequest();
	    req.async = false;
	    req.fetchXml = fetchXml;
	    req.entityName = "systemuser";
	    var res = WebApiClient.Retrieve(req);
	    if (res.value.length === 0) return false;
	    return true;
	}
	function qualifyLead_Click(executionContext) {//executionContext is PrimaryControl parameter use in the Riibon Workbench
	    var form = new LuckeyMonkey.FormLead(executionContext);
	    var input = {
	        LeadId: form.EntityId
	    };
	    var jsonInput = JSON.stringify(input);
	    var req = new LuckeyMonkey.WebApi.CustomRequest();
	    req.async = false;
	    req.method = "POST";
	    req.bound = false;
	    req.name = "paz_Ajax";
	    req.payload = {
	        "function": "QualifyLead",
	        "jsonInput": jsonInput
	    };
	    var res = WebApiClient.Execute(req);
	    var outputJson = res.output;
	    var output = JSON.parse(outputJson);
	    if (output.Status) {
	        form.Utility.OpenForm({
	            entityName: "account",
	            entityId: output.AccountId
	        }, null, null, null);
	    }
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave,
		HasRole: hasRole,
		QualifyLead_Click: qualifyLead_Click,
		__SubjectAddOnChange__: SubjectAddOnChange,
		__PhoneAddOnChange__: PhoneAddOnChange
	};
})();