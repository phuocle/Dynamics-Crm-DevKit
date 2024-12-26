'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_templateforproperties_Information = function(executionContext, defaultWebResourceName) {
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
			AssetCategoriesSubgrid: {},
			AssetsSubgrid: {},
			LocationSubgrid: {},
			LocationTypeSubgrid: {},
			msdyn_name: {},
			msdyn_Type: {},
			OwnerId: {},
			PropertiesSubgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_188F2590_F9AA_48C2_9541_97CD71121D0C: {
				Section: {
					assetsection: {},
					locationsection: {},
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			AssetCategoriesSubgrid: {},
			AssetsSubgrid: {},
			LocationSubgrid: {},
			LocationTypeSubgrid: {},
			PropertiesSubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate: {},
			msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate: {},
			msdyn_msdyn_templateforproperties_msdyn_locationtemplateassociation_PropertyTemplate: {},
			msdyn_msdyn_templateforproperties_msdyn_locationtypetemplateassociation_propertytemplate: {},
			msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate: {}
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
	OptionSet.msdyn_templateforproperties = {
		msdyn_Type : {
			Asset: 700610000,
			Functional_location: 700610001
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