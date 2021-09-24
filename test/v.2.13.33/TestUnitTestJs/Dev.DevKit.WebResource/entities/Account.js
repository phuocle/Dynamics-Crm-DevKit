//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
		if (form.FormType !== OptionSet.FormType.Create) {
			form.Body.Name.Disabled = true;
		}
	}
	async function onSave(executionContext) {
	}
	async function createEmail(executionContext) {
		form = new DevKit.FormAccount(executionContext);

		var from = new DevKit.ActivityPartyApi();
		from.partyid_systemuser.Value = form.Utility.UserSettings.UserId;
		from.ParticipationTypeMask.Value = OptionSet.ActivityParty.ParticipationTypeMask.Sender;

		var to = new DevKit.ActivityPartyApi();
		to.partyid_account.Value = form.EntityId;
		to.ParticipationTypeMask.Value = OptionSet.ActivityParty.ParticipationTypeMask.To_Recipient;

		var email = new DevKit.EmailApi();
		email.Subject.Value = "EMAIL SUBJECT";
		email.Description.Value = "EMAIL BODY"
		email.DirectionCode.Value = true;
		email.regardingobjectid_account_email.Value = form.EntityId;
		email.PriorityCode.Value = OptionSet.Email.PriorityCode.High;
		email.ActivityParties = [from.Entity, to.Entity];

		debugger;

		var createEmail = await Xrm.WebApi.createRecord(email.EntityName, email.Entity);
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave,
		CreateEmail: createEmail
	};
})();