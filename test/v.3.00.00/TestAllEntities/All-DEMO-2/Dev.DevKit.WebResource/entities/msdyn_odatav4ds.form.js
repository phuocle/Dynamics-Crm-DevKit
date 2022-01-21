'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_odatav4ds_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_isparameter10header: {},
			msdyn_isparameter1header: {},
			msdyn_isparameter2header: {},
			msdyn_isparameter3header: {},
			msdyn_isparameter4header: {},
			msdyn_isparameter5header: {},
			msdyn_isparameter6header: {},
			msdyn_isparameter7header: {},
			msdyn_isparameter8header: {},
			msdyn_isparameter9header: {},
			msdyn_name: {},
			msdyn_paginationtype: {},
			msdyn_parameter10name: {},
			msdyn_parameter10value: {},
			msdyn_parameter1name: {},
			msdyn_parameter1value: {},
			msdyn_parameter2name: {},
			msdyn_parameter2value: {},
			msdyn_parameter3name: {},
			msdyn_parameter3value: {},
			msdyn_parameter4name: {},
			msdyn_parameter4value: {},
			msdyn_parameter5name: {},
			msdyn_parameter5value: {},
			msdyn_parameter6name: {},
			msdyn_parameter6value: {},
			msdyn_parameter7name: {},
			msdyn_parameter7value: {},
			msdyn_parameter8name: {},
			msdyn_parameter8value: {},
			msdyn_parameter9name: {},
			msdyn_parameter9value: {},
			msdyn_returninlinecount: {},
			msdyn_timeout: {},
			msdyn_uri: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_additional_parameters: {
				Section: {
					tab_additional_section_parametername: {},
					tab_additional_section_parametertype: {},
					tab_additional_section_value: {}
				}
			},
			tab_Request_Parameters: {
				Section: {
					tab_requestparameters_section_name: {},
					tab_requestparameters_section_type: {},
					tab_requestparameters_section_value: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_odatav4ds_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_isparameter10header: {},
			msdyn_isparameter1header: {},
			msdyn_isparameter2header: {},
			msdyn_isparameter3header: {},
			msdyn_isparameter4header: {},
			msdyn_isparameter5header: {},
			msdyn_isparameter6header: {},
			msdyn_isparameter7header: {},
			msdyn_isparameter8header: {},
			msdyn_isparameter9header: {},
			msdyn_name: {},
			msdyn_paginationtype: {},
			msdyn_parameter10name: {},
			msdyn_parameter10value: {},
			msdyn_parameter1name: {},
			msdyn_parameter1value: {},
			msdyn_parameter2name: {},
			msdyn_parameter2value: {},
			msdyn_parameter3name: {},
			msdyn_parameter3value: {},
			msdyn_parameter4name: {},
			msdyn_parameter4value: {},
			msdyn_parameter5name: {},
			msdyn_parameter5value: {},
			msdyn_parameter6name: {},
			msdyn_parameter6value: {},
			msdyn_parameter7name: {},
			msdyn_parameter7value: {},
			msdyn_parameter8name: {},
			msdyn_parameter8value: {},
			msdyn_parameter9name: {},
			msdyn_parameter9value: {},
			msdyn_returninlinecount: {},
			msdyn_timeout: {},
			msdyn_uri: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_additional_parameters: {
				Section: {
					tab_additional_section_parametername: {},
					tab_additional_section_parametertype: {},
					tab_additional_section_value: {}
				}
			},
			tab_Request_Parameters: {
				Section: {
					tab_requestparameters_section_name: {},
					tab_requestparameters_section_type: {},
					tab_requestparameters_section_value: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_odatav4ds = {
		msdyn_paginationtype : {
			Client_side_Paging: 0,
			Server_side_Paging: 1
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