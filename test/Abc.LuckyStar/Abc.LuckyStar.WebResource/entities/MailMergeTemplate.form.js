'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormMailMergeTemplate_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			IsPersonal: {},
			LanguageCode: {},
			Name: {},
			OwnerId: {},
			TemplateTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					Details: {},
					Categorization: {},
					Ownership: {},
					Language: {}
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
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MailMergeTemplate = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		DocumentFormat : {
			_2003: 1,
			_2007: 2
		},
		MailMergeType : {
			Letter: 1,
			Email_Message: 2,
			Envelope: 3,
			Labels: 4,
			Quotes: 5,
			Fax: 6
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