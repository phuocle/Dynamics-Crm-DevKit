'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormChannel_Instance = function(executionContext, defaultWebResourceName) {
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
			extended_form: {},
			msdyn_ChannelDefinitionId: {},
			msdyn_ContactPoint: {},
			msdyn_Description: {},
			msdyn_extendedentityId: {},
			msdyn_Name: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_ChannelInstance_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMobile_app_configuration = function(executionContext, defaultWebResourceName) {
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
			devinfo_form: {},
			extended_form: {},
			grid_mobile_devices: {},
			msdyn_ChannelDefinitionId: {},
			msdyn_ContactPoint: {},
			msdyn_Description: {},
			msdyn_extendedentityId: {},
			msdyn_Name: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_mobile_devices: {
				Section: {
					tab_mobile_devices_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_mobile_devices: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMobile_app_wizard = function(executionContext, defaultWebResourceName) {
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
			wizard_main: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_Name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPhone_Number_Properties = function(executionContext, defaultWebResourceName) {
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
			msdyn_ContactPoint: {},
			msdyn_Name: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			PhoneNumber: {
				Section: {
					PhoneNumberProperties: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_ChannelInstance_Wizard = function(executionContext, defaultWebResourceName) {
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
			wizard_main: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_Name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyn_msdyn_liveworkitem_msdyn_channelinstance: {},
			msdyn_msdyn_ocsession_msdyn_channelinstance: {},
			msdyn_msdyn_transcript_msdyn_channelinstance: {},
			msdynmkt_msdyn_ChannelInstance_msdynmkt_customchannelmessage: {}
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
	OptionSet.msdyn_ChannelInstance = {
		msdyn_extendedentityIdType : {
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