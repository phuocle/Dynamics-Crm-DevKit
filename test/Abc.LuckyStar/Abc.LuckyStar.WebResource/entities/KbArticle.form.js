'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormKbArticle_Information = function(executionContext, defaultWebResourceName) {
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
			ArticleComments: {},
			ArticleXml: {},
			KeyWords: {},
			LanguageCode: {},
			notescontrol: {},
			SubjectId: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					article_information: {},
					Article_Keywords: {},
					kb_article_description: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			_B641B7D4_753C_C99A_5978_977E6912E856: {
				Section: {
					_493D7206_6935_E73D_75CC_44DC53D021E8: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
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
	OptionSet.KbArticle = {
		StateCode : {
			Draft: 1,
			Unapproved: 2,
			Published: 3
		},
		StatusCode : {
			Draft: 1,
			Unapproved: 2,
			Published: 3
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