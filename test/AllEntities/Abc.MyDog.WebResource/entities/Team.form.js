'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormTeam = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AdministratorId: {},
			AzureActiveDirectoryObjectId: {},
			BusinessUnitId: {},
			Description: {},
			Members: {},
			MembershipType: {},
			Name: {},
			TeamType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					General: {},
					Description: {},
					TeamMembers: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			QueueId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	MyDog.FormTeam_form_Business = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AdministratorId: {},
			BusinessUnitId: {},
			Description: {},
			Members: {},
			Name: {},
			TeamType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					General: {},
					Description: {},
					TeamMembers: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navMembers: {},
			navRoles: {},
			navFieldSecurityProfiles: {},
			navConnections: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Team = {
		MembershipType : {
			Members_and_guests: 0,
			Members: 1,
			Owners: 2,
			Guests: 3
		},
		TeamType : {
			Owner: 0,
			Access: 1,
			AAD_Security_Group: 2,
			AAD_Office_Group: 3
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));