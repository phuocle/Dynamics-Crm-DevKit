'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSharePointSite_Information = function(executionContext, defaultWebResourceName) {
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
			AbsoluteURL: {},
			Description: {},
			IsGridPresent: {},
			IsPowerBISite: {},
			LastValidated: {},
			Name: {},
			OwnerId: {},
			ParentSite: {},
			RelativeUrl: {},
			urloption: {},
			ValidationStatus: {},
			ValidationStatusErrorCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					section_1: {},
					url_option: {},
					url_validation: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			navSharePointSubSites: {},
			navSubDocumentLocations: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SharePointSite = {
		FolderStructureEntity : {
			Account: 1,
			Contact: 2,
			None: 0
		},
		OwnerIdType : {
		},
		ParentSiteObjectTypeCode : {
		},
		ServiceType : {
			MS_Teams: 3,
			OneDrive: 1,
			Shared_with_me: 2,
			SharePoint: 0
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		ValidationStatus : {
			Could_not_validate: 5,
			In_Progress: 2,
			Invalid: 3,
			Not_Validated: 1,
			Valid: 4
		},
		ValidationStatusErrorCode : {
			Authentication_failure: 6,
			Invalid_certificates: 7,
			The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings: 5,
			The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different: 4,
			This_records_URL_has_not_been_validated: 1,
			This_records_URL_is_not_valid: 3,
			This_records_URL_is_valid: 2
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