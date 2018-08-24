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
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();