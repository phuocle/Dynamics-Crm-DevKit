'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_eventmanagementconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_authenticationresource: {},
			msevtmgt_authenticationtokenendpoint: {},
			msevtmgt_configcacheexpirationdate: {},
			msevtmgt_configcacheexpirationinsec: {},
			msevtmgt_discoveryendpointurl: {},
			msevtmgt_organization_config: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_D56E1811_CE09_4D4D_9EE1_D93EA081C5C8: {
				Section: {
					_6A115463_CCBE_4FA6_8C16_C427CF837F90: {},
					_D56E1811_CE09_4D4D_9EE1_D93EA081C5C8_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.msevtmgt_eventmanagementconfiguration = {
		msevtmgt_configuration_state : {
			Configured_successfully: 832530001,
			Not_configured: 832530000
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