'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormLocation = function(executionContext, defaultWebResourceName) {
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
			chartAccount: {},
			CreatedOn: {},
			devkit_AccountId: {},
			devkit_AccountId_1: {},
			devkit_ContactId: {},
			devkit_ContactId_1: {},
			devkit_CustomerId: {},
			devkit_file: {},
			devkit_Image: {},
			devkit_Image_URL: {},
			devkit_Name: {},
			gridAccount: {},
			IFRAME_google: {},
			ModifiedBy: {},
			ModifiedOn: {},
			notescontrol: {},
			OwnerId: {},
			panelAccount: {},
			panelContact: {},
			timerControl: {},
			WebResource_HelloWorld: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1: {
				Section: {
					tab1sec1: {},
					tab1sec2: {}
				}
			},
			tab2: {
				Section: {
					tab2sec1: {}
				}
			},
			tab3: {
				Section: {
					tab3sec1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			devkit_AccountId: {},
			devkit_ContactId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			CreatedOn: {},
			ModifiedOn: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _BPF_Location_2 = {
			address1_city: {},
			devkit_AccountId: {},
			devkit_ContactId: {},
			devkit_CustomerId: {},
			OwnerId: {}
		}
		devKit.LoadFields(formContext, _BPF_Location_2, "header_process_");
		process.BPF_Location_2 = _BPF_Location_2;
		var _BPF_Location_1 = {
			devkit_AccountId: {},
			devkit_ContactId: {},
			devkit_CustomerId: {}
		}
		devKit.LoadFields(formContext, _BPF_Location_1, "header_process_");
		process.BPF_Location_1 = _BPF_Location_1;
		form.Process = process;
		var quickForm = {
			qwAccount: {},
			quickViewContact: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			chartAccount: {},
			panelContact: {},
			panelAccount: {},
			gridAccount: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAudit: {},
			nav_devkit_devkit_location_account_LocationId: {},
			nav_devkit_devkit_location_contact_LocationId: {},
			nav_bpf_devkit_location_devkit_bpf_location_1: {},
			nav_bpf_devkit_location_new_bpf_301232cf016d4faebcee80f57b143c69: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormLocation_2 = function(executionContext, defaultWebResourceName) {
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
			chartAccount: {},
			CreatedOn: {},
			devkit_AccountId: {},
			devkit_AccountId_1: {},
			devkit_ContactId: {},
			devkit_ContactId_1: {},
			devkit_CustomerId: {},
			devkit_file: {},
			devkit_Image: {},
			devkit_Image_URL: {},
			devkit_Name: {},
			gridAccount: {},
			IFRAME_google: {},
			ModifiedBy: {},
			ModifiedOn: {},
			notescontrol: {},
			OwnerId: {},
			panelAccount: {},
			panelContact: {},
			timerControl: {},
			WebResource_HelloWorld: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1: {
				Section: {
					tab1sec1: {},
					tab1sec2: {}
				}
			},
			tab2: {
				Section: {
					tab2sec1: {}
				}
			},
			tab3: {
				Section: {
					tab3sec1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			devkit_AccountId: {},
			devkit_ContactId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			CreatedOn: {},
			ModifiedOn: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _BPF_Location_2 = {
			address1_city: {},
			devkit_AccountId: {},
			devkit_ContactId: {},
			devkit_CustomerId: {},
			OwnerId: {}
		}
		devKit.LoadFields(formContext, _BPF_Location_2, "header_process_");
		process.BPF_Location_2 = _BPF_Location_2;
		var _BPF_Location_1 = {
			devkit_AccountId: {},
			devkit_ContactId: {},
			devkit_CustomerId: {}
		}
		devKit.LoadFields(formContext, _BPF_Location_1, "header_process_");
		process.BPF_Location_1 = _BPF_Location_1;
		form.Process = process;
		var quickForm = {
			qwAccount: {},
			quickViewContact: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			chartAccount: {},
			panelContact: {},
			panelAccount: {},
			gridAccount: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAudit: {},
			nav_devkit_devkit_location_account_LocationId: {},
			nav_devkit_devkit_location_contact_LocationId: {},
			nav_bpf_devkit_location_devkit_bpf_location_1: {},
			nav_bpf_devkit_location_new_bpf_301232cf016d4faebcee80f57b143c69: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormQuick_Create_Location = function(executionContext, defaultWebResourceName) {
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
			devkit_AccountId: {},
			devkit_ContactId: {},
			devkit_CustomerId: {},
			devkit_Name: {},
			OwnerId: {},
			statuscode: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab1sec1: {},
					tab1sec2: {},
					tab1sec3: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.devkit_Location = {
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