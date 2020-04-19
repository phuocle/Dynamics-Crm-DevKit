'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormProperty = function(executionContext, defaultWebResourceName) {
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
			dynamic_property_summary: {
				Section: {
					dynamic_property_properties_1: {},
					dynamic_property_properties_31: {}
				}
			},
			dynamic_property_properties: {
				Section: {
					dynamic_property_properties_2: {},
					dynamic_property_properties_3: {},
					dynamic_property_properties_41: {}
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

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DynamicProperty = {
		DataType : {
			Option_Set: 0,
			Decimal: 1,
			Floating_Point_Number: 2,
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