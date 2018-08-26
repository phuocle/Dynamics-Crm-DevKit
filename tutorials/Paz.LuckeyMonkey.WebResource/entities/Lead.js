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
	return {
		OnLoad: onLoad,
		OnSave: onSave,
        HasRole: hasRole,
		__SubjectAddOnChange__: SubjectAddOnChange,
		__PhoneAddOnChange__: PhoneAddOnChange
	};
})();