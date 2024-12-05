'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormTemplate_Information = function(executionContext, defaultWebResourceName) {
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
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					email_template_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			Email_EmailTemplate: {},
			emailtemplate_convertrule: {},
			template_activity_mime_attachments: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTemplate = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			enhancededitorhtml: {},
			isenhancededitorenabled: {},
			IsPersonal: {},
			LanguageCode: {},
			SafeHtml: {},
			Subject: {},
			SubjectSafeHtml: {},
			TemplateTypeCode: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Attachment_tab: {
				Section: {
					tab_3_section_1: {}
				}
			},
			Enhance_Editor_tab: {
				Section: {
					tab_4_section_1: {}
				}
			},
			Template: {
				Section: {
					Details: {},
					Template_editor: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			Email_EmailTemplate: {},
			emailtemplate_convertrule: {},
			template_activity_mime_attachments: {}
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
	OptionSet.Template = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		TemplateTypeCode : {
			Account: 1,
			Campaign_Activity: 4402,
			Case: 112,
			Contact: 2,
			Contract: 1010,
			Entitlement: 9700,
			Invoice: 1090,
			Lead: 4,
			Opportunity: 3,
			Order: 1088,
			Quote: 1084,
			Service_Activity: 4214,
			System_Job: 4700,
			User: 8
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