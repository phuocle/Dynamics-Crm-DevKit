﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSLAItem_Information = function(executionContext, defaultWebResourceName) {
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
			ActionURL: {},
			AllowPauseResume: {},
			ApplicableEntity: {},
			applicablewhencontrol: {},
			BusinessHoursId: {},
			FailureAfter: {},
			FailureAfter_1: {},
			msdyn_AdvancedPauseConfiguration: {},
			msdyn_PauseConfigurationXml: {},
			msdyn_slakpiid: {},
			Name: {},
			Name_1: {},
			relatedcasefield: {},
			successconditioncontrol: {},
			WarnAfter: {},
			WarnAfter_1: {},
			WebResource_preview: {},
			WebResource_slaitem_applicablewhen_notification: {},
			WebResource_slaitem_success_notification: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tabUC: {
				Section: {
					Actions: {},
					ApplicableWhen: {},
					PauseConfiguration: {},
					SuccessConditions: {},
					Warn_and_Fail_Duration: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			SLAId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLAItem = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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