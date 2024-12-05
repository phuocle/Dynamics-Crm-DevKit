'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSummary = function(executionContext, defaultWebResourceName) {
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
			description: {},
			description_communication: {},
			description_email_communication: {},
			description_tracking: {},
			extended_form: {},
			msdynmkt_customenforcementmodel: {},
			msdynmkt_enforcementmodel: {},
			msdynmkt_enforcementmodel1: {},
			msdynmkt_extendedentityId: {},
			msdynmkt_name: {},
			msdynmkt_smsenforcementmodel: {},
			msdynmkt_type: {},
			OwnerId: {},
			topicgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					null_section_3: {},
					topics: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			ModifiedOn: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			topicgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_msdynmkt_compliancesettings4_TrackingCons: {},
			msdynmkt_msdynmkt_contactpointconsent4_purposeId_m: {},
			msdynmkt_msdynmkt_customchannelmessage_purpose_msdynmkt_purpose: {},
			msdynmkt_msdynmkt_purpose_msdynmkt_email_purpose: {},
			msdynmkt_msdynmkt_purpose_msdynmkt_emailtemplate_purpose: {},
			msdynmkt_msdynmkt_purpose_msdynmkt_topic: {},
			msdynmkt_msdynmkt_pushnotification_purpose_msdynmkt_purpose: {},
			msdynmkt_msdynmkt_sms_purpose_msdynmkt_purpose: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurpose_quick_create_form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdynmkt_uionlycomplianceprofilelookup: {},
			msdynmkt_uionlypurposelookup: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPurpose_quick_create_form2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdynmkt_customenforcementmodel: {},
			msdynmkt_enforcementmodel: {},
			msdynmkt_name: {},
			msdynmkt_smsenforcementmodel: {},
			msdynmkt_type: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			OwningBusinessUnit1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_1_section_2: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_purpose = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_customenforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_enforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_extendedentityIdType : {
		},
		msdynmkt_smsenforcementmodel : {
			Disabled: 534120002,
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_type : {
			Commercial_Communication: 534120000,
			Tracking: 534120002,
			Transactional_Communication: 534120001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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