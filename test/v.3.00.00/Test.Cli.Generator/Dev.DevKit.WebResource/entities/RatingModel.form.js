﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRatingModel_Information = function(executionContext, defaultWebResourceName) {
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
			MaxRatingValue: {},
			MinRatingValue: {},
			msdyn_RatableEntity: {},
			Name: {},
			notescontrol: {},
			OwnerId: {},
			RatingValues: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: {
				Section: {
					_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: {},
					_FC24DD79_F2FF_4942_BB88_C5EF718132F1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			RatingValues: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {},
			navRatings: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRatingModel_Omnichannel_Information = function(executionContext, defaultWebResourceName) {
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
			MaxRatingValue: {},
			MinRatingValue: {},
			Name: {},
			OwnerId: {},
			RatingValues: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: {
				Section: {
					_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: {},
					_FC24DD79_F2FF_4942_BB88_C5EF718132F1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			RatingValues: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {},
			navRatings: {}
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
	OptionSet.RatingModel = {
		msdyn_RatableEntity : {
			None: 192350000,
			Skill: 192350001
		},
		OwnerIdType : {
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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