'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormImportfile = function(executionContext, defaultWebResourceName) {
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
			CompletedOn: {},
			CreatedBy: {},
			CreatedOn: {},
			EnableDuplicateDetection: {},
			FailureCount: {},
			import_Logs_Failure: {},
			import_Logs_Failures: {},
			import_Logs_Succes: {},
			ImportMapId: {},
			Name: {},
			PartialFailureCount: {},
			RecordsOwnerId: {},
			Size: {},
			Source: {},
			StatusCode: {},
			SuccessCount: {},
			TargetEntityName: {},
			TotalCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			failureTab: {
				Section: {
					failureSection: {}
				}
			},
			successTab: {
				Section: {
					successSection: {}
				}
			},
			partialFailureTab: {
				Section: {
					partialFailureSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StatusCode: {}
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImportFile = {
		DataDelimiterCode : {
			DoubleQuote: 1,
			None: 2,
			SingleQuote: 3
		},
		FieldDelimiterCode : {
			Colon: 1,
			Comma: 2,
			Tab: 3,
			Semicolon: 4
		},
		FileTypeCode : {
			CSV: 0,
			XML_Spreadsheet_2003: 1,
			Attachment: 2,
			XLSX: 3
		},
		ProcessCode : {
			Process: 1,
			Ignore: 2,
			Internal: 3
		},
		ProcessingStatus : {
			Not_Started: 1,
			Parsing: 2,
			Parsing_Complete: 3,
			Complex_Transformation: 4,
			Lookup_Transformation: 5,
			Picklist_Transformation: 6,
			Owner_Transformation: 7,
			Transformation_Complete: 8,
			Import_Pass_1: 9,
			Import_Pass_2: 10,
			Import_Complete: 11,
			Primary_Key_Transformation: 12
		},
		StateCode : {
			Active: 0
		},
		StatusCode : {
			Submitted: 0,
			Parsing: 1,
			Transforming: 2,
			Importing: 3,
			Completed: 4,
			Failed: 5
		},
		UpsertModeCode : {
			Create: 0,
			Update: 1,
			Ignore: 2
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