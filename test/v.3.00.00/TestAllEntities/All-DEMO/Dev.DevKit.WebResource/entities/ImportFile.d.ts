//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImportfile {
		interface tab_failureTab_Sections {
			failureSection: DevKit.Controls.Section;
		}
		interface tab_partialFailureTab_Sections {
			partialFailureSection: DevKit.Controls.Section;
		}
		interface tab_successTab_Sections {
			successSection: DevKit.Controls.Section;
		}
		interface tab_failureTab extends DevKit.Controls.ITab {
			Section: tab_failureTab_Sections;
		}
		interface tab_partialFailureTab extends DevKit.Controls.ITab {
			Section: tab_partialFailureTab_Sections;
		}
		interface tab_successTab extends DevKit.Controls.ITab {
			Section: tab_successTab_Sections;
		}
		interface Tabs {
			failureTab: tab_failureTab;
			partialFailureTab: tab_partialFailureTab;
			successTab: tab_successTab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the import associated with the import file was completed. */
			CompletedOn: DevKit.Controls.Date;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select whether duplicate-detection rules should be run against the import job. */
			EnableDuplicateDetection: DevKit.Controls.Boolean;
			/** Shows the number of records in the import file that cannot be imported. */
			FailureCount: DevKit.Controls.Integer;
			import_Logs_Failure: DevKit.Controls.ActionCards;
			import_Logs_Failures: DevKit.Controls.ActionCards;
			import_Logs_Succes: DevKit.Controls.ActionCards;
			/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
			ImportMapId: DevKit.Controls.Lookup;
			/** Shows the name of the import file. This name is based on the name of the uploaded file. */
			Name: DevKit.Controls.String;
			/** Shows the number of records in this file that had failures during the import. */
			PartialFailureCount: DevKit.Controls.Integer;
			/** Choose the user that the records created during the import job should be assigned to. */
			RecordsOwnerId: DevKit.Controls.Lookup;
			/** Shows the size of the import file, in kilobytes. */
			Size: DevKit.Controls.String;
			/** Shows the name of the data source file uploaded in the import job. */
			Source: DevKit.Controls.String;
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the number of records in the import file that are imported successfully. */
			SuccessCount: DevKit.Controls.Integer;
			/** Select the target record type (entity) for the records that will be created during the import job. */
			TargetEntityName: DevKit.Controls.String;
			/** Shows the total number of records in the import file. */
			TotalCount: DevKit.Controls.Integer;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormImportfile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Importfile Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Importfile */
		Body: DevKit.FormImportfile.Body;
		/** The Footer section of form Importfile */
		Footer: DevKit.FormImportfile.Footer;
		/** The Process of form Importfile */
		Process: DevKit.FormImportfile.Process;
		/** The SidePanes of form Importfile */
		SidePanes: DevKit.SidePanes;
	}
	class ImportFileApi {
		/**
		* DynamicsCrm.DevKit ImportFileApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows the secondary column headers. The additional headers are used during the process of transforming the import file into import data records. */
		AdditionalHeaderRow: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time when the import associated with the import file was completed. */
		CompletedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Stores the content of the import file, stored as comma-separated values. */
		Content: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the single-character data delimiter used in the import file. This is typically a single or double quotation mark. */
		DataDelimiterCode: DevKit.WebApi.OptionSetValue;
		/** Select whether duplicate-detection rules should be run against the import job. */
		EnableDuplicateDetection: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the Alternate key Id */
		EntityKeyId: DevKit.WebApi.GuidValue;
		/** Shows the number of records in the import file that cannot be imported. */
		FailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Select the character that is used to separate each field in the import file. Typically, it is a comma. */
		FieldDelimiterCode: DevKit.WebApi.OptionSetValue;
		/** Shows the type of source file that is uploaded for import. */
		FileTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows a list of each column header in the import file separated by a comma. The header is used for parsing the file during the import job. */
		HeaderRow: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the import file. */
		ImportFileId: DevKit.WebApi.GuidValue;
		/** Choose the import job that the file was uploaded for. */
		ImportId: DevKit.WebApi.LookupValue;
		/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
		ImportMapId: DevKit.WebApi.LookupValue;
		/** Select whether the first row of the import file contains column headings, which are used for data mapping during the import job. */
		IsFirstRowHeader: DevKit.WebApi.BooleanValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the name of the import file. This name is based on the name of the uploaded file. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the import file. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the import file. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the prefix applied to each column after the import file is parsed. */
		ParsedTableColumnPrefix: DevKit.WebApi.StringValueReadonly;
		/** Shows the number of columns included in the parsed import file. */
		ParsedTableColumnsNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the name of the table that contains the parsed data from the import file. */
		ParsedTableName: DevKit.WebApi.StringValueReadonly;
		/** Shows the number of records in this file that had failures during the import. */
		PartialFailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Tells whether the import file should be ignored or processed during the import. */
		ProcessCode: DevKit.WebApi.OptionSetValue;
		/** Shows the import file's processing status code. This indicates whether the data in the import file has been parsed, transformed, or imported. */
		ProcessingStatus: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows the progress code for the processing of the import file. This field is used when a paused import job is resumed. */
		ProgressCounter: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the user that the records created during the import job should be assigned to. */
		recordsownerid_systemuser: DevKit.WebApi.LookupValue;
		/** Choose the user that the records created during the import job should be assigned to. */
		recordsownerid_team: DevKit.WebApi.LookupValue;
		/** Shows the columns that are mapped to a related record type (entity) of the primary record type (entity) included in the import file. */
		RelatedEntityColumns: DevKit.WebApi.StringValue;
		/** Shows the size of the import file, in kilobytes. */
		Size: DevKit.WebApi.StringValue;
		/** Shows the name of the data source file uploaded in the import job. */
		Source: DevKit.WebApi.StringValue;
		/** Shows the record type (entity) of the source data. */
		SourceEntityName: DevKit.WebApi.StringValue;
		/** Shows the status of the import file record. By default, all records are active and can't be deactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Shows the number of records in the import file that are imported successfully. */
		SuccessCount: DevKit.WebApi.IntegerValueReadonly;
		/** Select the target record type (entity) for the records that will be created during the import job. */
		TargetEntityName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the total number of records in the import file. */
		TotalCount: DevKit.WebApi.IntegerValueReadonly;
		/** Select the value which is used for identify the upsert mode. By Default, it is a Create. */
		UpsertModeCode: DevKit.WebApi.OptionSetValue;
		/** Tells whether an automatic system map was applied to the import file, which automatically maps the import data to the target entity in Microsoft Dynamics 365. */
		UseSystemMap: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
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
			/** 4 */
			Semicolon,
			/** 3 */
			Tab
		}
		enum FileTypeCode {
			/** 2 */
			Attachment,
			/** 0 */
			CSV,
			/** 3 */
			XLSX,
			/** 1 */
			XML_Spreadsheet_2003
		}
		enum ProcessCode {
			/** 2 */
			Ignore,
			/** 3 */
			Internal,
			/** 1 */
			Process
		}
		enum ProcessingStatus {
			/** 4 */
			Complex_Transformation,
			/** 11 */
			Import_Complete,
			/** 9 */
			Import_Pass_1,
			/** 10 */
			Import_Pass_2,
			/** 5 */
			Lookup_Transformation,
			/** 1 */
			Not_Started,
			/** 7 */
			Owner_Transformation,
			/** 2 */
			Parsing,
			/** 3 */
			Parsing_Complete,
			/** 6 */
			Picklist_Transformation,
			/** 12 */
			Primary_Key_Transformation,
			/** 8 */
			Transformation_Complete
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 4 */
			Completed,
			/** 5 */
			Failed,
			/** 3 */
			Importing,
			/** 1 */
			Parsing,
			/** 0 */
			Submitted,
			/** 2 */
			Transforming
		}
		enum UpsertModeCode {
			/** 0 */
			Create,
			/** 2 */
			Ignore,
			/** 1 */
			Update
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}