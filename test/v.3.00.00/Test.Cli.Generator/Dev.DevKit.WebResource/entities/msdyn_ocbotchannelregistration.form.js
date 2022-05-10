﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocbotchannelregistration_Information = function(executionContext, defaultWebResourceName) {
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
			CustomMessagingChannels: {},
			msdyn_iscustommessagingbcr: {},
			msdyn_iscustommessagingcreated: {},
			msdyn_lastvalidateddate: {},
			msdyn_messagingendpoint: {},
			msdyn_msappid: {},
			msdyn_msappsecret: {},
			msdyn_name: {},
			msdyn_validationstatus: {},
			OwnerId: {},
			WebResource_CopyCustomMessagingEndpointUrl: {},
			WebResource_CustomMessagingAccountDetailsDisclaimer: {},
			WebResource_CustomMessagingEndpointUrlDisclaimer: {},
			WebResource_CustomMessagingValidateButton: {},
			WebResource_ShowHideCustomMessagingMSAppSecret: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_A5BDA06F_065C_4B0C_B963_1A94D7693649: {
				Section: {
					_3C9CB577_F8E3_4468_912D_98FEF8318FAC: {},
					_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_2: {},
					_A5BDA06F_065C_4B0C_B963_1A94D7693649_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			CustomMessagingChannels: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocbotchannelregistration = {
		OwnerIdType : {
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