//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormImportfile {
		interface tab_failureTab_Sections {
			failureSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_successTab_Sections {
			successSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_partialFailureTab_Sections {
			partialFailureSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_failureTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_failureTab_Sections;
		}
		interface tab_successTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_successTab_Sections;
		}
		interface tab_partialFailureTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_partialFailureTab_Sections;
		}
		interface Tabs {
			failureTab: tab_failureTab;
			successTab: tab_successTab;
			partialFailureTab: tab_partialFailureTab;
		}
		interface Body {
			Tab: Tabs;
			FailureSubgrid: DevKit.Form.Controls.ControlGrid;
			import_Logs_Succes: DevKit.Form.Controls.ControlActionCards;
			import_Logs_Failure: DevKit.Form.Controls.ControlActionCards;
			/** Shows the date and time when the import associated with the import file was completed. */
			CompletedOn: DevKit.Form.Controls.ControlDate;
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Select whether duplicate-detection rules should be run against the import job. */
			EnableDuplicateDetection: DevKit.Form.Controls.ControlBoolean;
			/** Shows the number of records in the import file that cannot be imported. */
			FailureCount: DevKit.Form.Controls.ControlInteger;
			/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
			ImportMapId: DevKit.Form.Controls.ControlLookup;
			/** Shows the name of the import file. This name is based on the name of the uploaded file. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the number of records in this file that had failures during the import. */
			PartialFailureCount: DevKit.Form.Controls.ControlInteger;
			/** Choose the user that the records created during the import job should be assigned to. */
			RecordsOwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the size of the import file, in kilobytes. */
			Size: DevKit.Form.Controls.ControlString;
			/** Shows the name of the data source file uploaded in the import job. */
			Source: DevKit.Form.Controls.ControlString;
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the number of records in the import file that are imported successfully. */
			SuccessCount: DevKit.Form.Controls.ControlInteger;
			/** Select the target record type (entity) for the records that will be created during the import job. */
			TargetEntityName: DevKit.Form.Controls.ControlString;
			/** Shows the total number of records in the import file. */
			TotalCount: DevKit.Form.Controls.ControlInteger;
		}
		interface Footer {
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormImportfile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Importfile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Importfile */
		Body: LuckyMokey.FormImportfile.Body;
		/** The Footer section of form Importfile */
		Footer: LuckyMokey.FormImportfile.Footer;
	}
}
declare namespace OptionSet {
	namespace ImportFile {
		enum DataDelimiterCode {
			/** 1 */
			DoubleQuote,
			/** 2 */
			None,
			/** 3 */
			SingleQuote
		}
		enum FieldDelimiterCode {
			/** 1 */
			Colon,
			/** 2 */
			Comma,
			/** 3 */
			Tab,
			/** 4 */
			Semicolon
		}
		enum FileTypeCode {
			/** 0 */
			CSV,
			/** 1 */
			XML_Spreadsheet_2003,
			/** 2 */
			Attachment,
			/** 3 */
			XLSX
		}
		enum ProcessCode {
			/** 1 */
			Process,
			/** 2 */
			Ignore,
			/** 3 */
			Internal
		}
		enum ProcessingStatus {
			/** 1 */
			Not_Started,
			/** 2 */
			Parsing,
			/** 3 */
			Parsing_Complete,
			/** 4 */
			Complex_Transformation,
			/** 5 */
			Lookup_Transformation,
			/** 6 */
			Picklist_Transformation,
			/** 7 */
			Owner_Transformation,
			/** 8 */
			Transformation_Complete,
			/** 9 */
			Import_Pass_1,
			/** 10 */
			Import_Pass_2,
			/** 11 */
			Import_Complete,
			/** 12 */
			Primary_Key_Transformation
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Submitted,
			/** 1 */
			Parsing,
			/** 2 */
			Transforming,
			/** 3 */
			Importing,
			/** 4 */
			Completed,
			/** 5 */
			Failed
		}
		enum UpsertModeCode {
			/** 0 */
			Create,
			/** 1 */
			Update,
			/** 2 */
			Ignore
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Importfile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}