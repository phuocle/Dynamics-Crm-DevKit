'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormProperty = function(executionContext, defaultWebResourceName) {
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
			DataType: {},
			DefaultValueDecimal: {},
			DefaultValueDouble: {},
			DefaultValueInteger: {},
			DefaultValueOptionSet: {},
			DefaultValueString: {},
			Description: {},
			grid_DynamicPropertyOptionSetItem: {},
			IsHidden: {},
			IsReadOnly: {},
			IsRequired: {},
			MaxLengthString: {},
			MaxValueDecimal: {},
			MaxValueDouble: {},
			MaxValueInteger: {},
			MinValueDecimal: {},
			MinValueDouble: {},
			MinValueInteger: {},
			Name: {},
			Precision: {},
			RegardingObjectId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			dynamic_property_properties: {
				Section: {
					dynamic_property_properties_2: {},
					dynamic_property_properties_3: {},
					dynamic_property_properties_41: {}
				}
			},
			dynamic_property_summary: {
				Section: {
					dynamic_property_properties_1: {},
					dynamic_property_properties_31: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			grid_DynamicPropertyOptionSetItem: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProperty_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			DataType: {},
			DefaultValueDecimal: {},
			DefaultValueDouble: {},
			DefaultValueInteger: {},
			DefaultValueOptionSet: {},
			DefaultValueString: {},
			Description: {},
			IsHidden: {},
			IsReadOnly: {},
			IsRequired: {},
			MaxLengthString: {},
			MaxValueDecimal: {},
			MaxValueDouble: {},
			MaxValueInteger: {},
			MinValueDecimal: {},
			MinValueDouble: {},
			MinValueInteger: {},
			Name: {},
			Precision: {},
			RegardingObjectId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			dynamic_property_summary: {
				Section: {
					dynamic_property_properties_1: {}
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
	OptionSet.DynamicProperty = {
		DataType : {
			Decimal: 1,
			Floating_Point_Number: 2,
			Option_Set: 0,
			Single_Line_Of_Text: 3,
			Whole_Number: 4
		},
		statecode : {
			Active: 0,
			Draft: 1,
			Retired: 2
		},
		statuscode : {
			Active: 1,
			Draft: 0,
			Retired: 2
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