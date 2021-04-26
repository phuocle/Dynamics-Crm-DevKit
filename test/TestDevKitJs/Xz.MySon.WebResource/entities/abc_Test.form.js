'use strict';
/** @namespace MySon */
var MySon;
(function (MySon) {
	'use strict';
	MySon.FormTest = function (executionContext, defaultWebResourceName) {
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
			abc_All: {},
			abc_All_1: {},
			abc_Boolean: {},
			abc_Lookup: {},
			abc_OptionSetCode: {},
			abc_FloatingPointNumber: {},
			abc_IFramed: {},
			abc_KbSearch: {},
			abc_TimelineWall: {},
			abc_Timer: {},
			abc_Date: {},
			abc_DateTime: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Tab1: {
				Section: {
					Tab1Section1: {},
					Tab1Section2: {}
				}
			},
			Tab2: {
				Section: {
					Tab2Section1: {},
					Tab2Section2: {}
				}
			},
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			abc_All: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			abc_All: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _Process_1 = {
			abc_All: {}
		};
		devKit.LoadFields(formContext, _Process_1, "header_process_");
		process.Process_1 = _Process_1;
		form.Process = process;
		var quickForm = {
			QuickForm: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Contacts: {}
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav01: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MySon || (MySon = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.abc_Test = {
		abc_OptionSetCode: {
			Value_1: 100000000,
			Value_2: 100000001,
			Value_3: 100000002,
			Value_4: 100000003,
			Value_5: 100000004,
			Value_6: 100000005
		}
	};
})(OptionSet || (OptionSet = {}));