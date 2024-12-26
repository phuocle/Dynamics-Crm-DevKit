'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingformfield_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			MarketingForms: {},
			msdyncrm_contactmapping: {},
			msdyncrm_contactmapping_target: {},
			msdyncrm_defaultformlabel: {},
			msdyncrm_defaultformplaceholder: {},
			msdyncrm_format: {},
			msdyncrm_leadmapping: {},
			msdyncrm_leadmapping_target: {},
			msdyncrm_lookup_target: {},
			msdyncrm_marketingformfieldtype: {},
			msdyncrm_name: {},
			msdyncrm_prototype_attribute: {},
			msdyncrm_prototype_entity: {},
			msdyncrm_prototype_target: {},
			msdyncrm_PublicVisibility: {},
			msdyncrm_renderas: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_5437586D_4A52_439F_9A8E_1CFFFA3850B0: {
				Section: {
					_5437586D_4A52_439F_9A8E_1CFFFA3850B0_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MarketingForms: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_marketingformfield_submission: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_marketingformfield_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_contactmapping: {},
			msdyncrm_contactmapping_target: {},
			msdyncrm_defaultformlabel: {},
			msdyncrm_defaultformplaceholder: {},
			msdyncrm_format: {},
			msdyncrm_leadmapping: {},
			msdyncrm_leadmapping_target: {},
			msdyncrm_lookup_target: {},
			msdyncrm_marketingformfieldtype: {},
			msdyncrm_name: {},
			msdyncrm_prototype_attribute: {},
			msdyncrm_prototype_entity: {},
			msdyncrm_prototype_target: {},
			msdyncrm_PublicVisibility: {},
			msdyncrm_renderas: {},
			OwnerId: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingformfield = {
		msdyncrm_format : {
			Date: 6,
			Date_and_time: 7,
			Email: 3,
			Phone: 5,
			Text: 1,
			Text_area: 2,
			URL: 4
		},
		msdyncrm_marketingformfieldtype : {
			Currency: 9,
			Date_and_time: 8,
			Decimal_number: 7,
			Floating_point_number: 6,
			Lookup: 11,
			Multi_select_option_set: 10,
			Multiple_lines_of_text: 2,
			Option_set: 3,
			Single_line_of_text: 1,
			Two_options: 4,
			Whole_number: 5
		},
		msdyncrm_renderas : {
			Checkbox: 7,
			Checkbox_list: 12,
			Date_picker: 10,
			Date_time_picker: 11,
			Drop_down: 8,
			Email_input: 2,
			Lookup: 13,
			Number_input: 5,
			Phone_input: 4,
			Radio_buttons: 9,
			Text_area: 6,
			Text_box: 1,
			URL_input: 3
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