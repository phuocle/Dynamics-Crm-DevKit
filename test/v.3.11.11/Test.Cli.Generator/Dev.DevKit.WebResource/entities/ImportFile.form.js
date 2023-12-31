'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormImportfile = function(executionContext, defaultWebResourceName) {
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
			partialFailureTab: {
				Section: {
					partialFailureSection: {}
				}
			},
			successTab: {
				Section: {
					successSection: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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
			Semicolon: 4,
			Tab: 3
		},
		FileTypeCode : {
			Attachment: 2,
			CSV: 0,
			XLSX: 3,
			XML_Spreadsheet_2003: 1
		},
		OwnerIdType : {
		},
		ProcessCode : {
			Ignore: 2,
			Internal: 3,
			Process: 1
		},
		ProcessingStatus : {
			Complex_Transformation: 4,
			Import_Complete: 11,
			Import_Pass_1: 9,
			Import_Pass_2: 10,
			Lookup_Transformation: 5,
			Not_Started: 1,
			Owner_Transformation: 7,
			Parsing: 2,
			Parsing_Complete: 3,
			Picklist_Transformation: 6,
			Primary_Key_Transformation: 12,
			Transformation_Complete: 8
		},
		RecordsOwnerIdType : {
		},
		StateCode : {
			Active: 0
		},
		StatusCode : {
			Completed: 4,
			Failed: 5,
			Importing: 3,
			Parsing: 1,
			Submitted: 0,
			Transforming: 2
		},
		UpsertModeCode : {
			Create: 0,
			Ignore: 2,
			Update: 1
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