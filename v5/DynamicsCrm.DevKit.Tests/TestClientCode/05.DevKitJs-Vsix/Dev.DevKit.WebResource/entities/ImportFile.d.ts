//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImportfile {
		interface tab_failureTab_Sections {
			/** FailureSection */
			failureSection: DevKit.Controls.Section;
		}
		interface tab_partialFailureTab_Sections {
			/** PartialFailureSection */
			partialFailureSection: DevKit.Controls.Section;
		}
		interface tab_successTab_Sections {
			/** SuccessSection */
			successSection: DevKit.Controls.Section;
		}
		/** Failures */
		interface tab_failureTab extends DevKit.Controls.ITab {
			Section: tab_failureTab_Sections;
		}
		/** Partial Failure */
		interface tab_partialFailureTab extends DevKit.Controls.ITab {
			Section: tab_partialFailureTab_Sections;
		}
		/** Success */
		interface tab_successTab extends DevKit.Controls.ITab {
			Section: tab_successTab_Sections;
		}
		interface Tabs {
			/** Failures */
			failureTab: tab_failureTab;
			/** Partial Failure */
			partialFailureTab: tab_partialFailureTab;
			/** Success */
			successTab: tab_successTab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the import associated with the import file was completed. */
			CompletedOn: DevKit.Controls.DateOnly;
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
	}
	export class FormImportfile extends DevKit.IForm {
		/**
		* Importfile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Importfile */
		Body: DevKit.FormImportfile.Body;
	}
	export class ImportFileApi {
		/**
		* DynamicsCrm.DevKit ImportFileApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Shows the secondary column headers. The additional headers are used during the process of transforming the import file into import data records. */
		readonly AdditionalHeaderRow: string | null;
		/** Shows the date and time when the import associated with the import file was completed. */
		readonly CompletedOn_UtcDateOnly: Date | null;
		/** Stores the content of the import file, stored as comma-separated values. */
		Content: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Select the single-character data delimiter used in the import file. This is typically a single or double quotation mark. */
		DataDelimiterCode: OptionSet.ImportFile.DataDelimiterCode | null;
		/** Select whether duplicate-detection rules should be run against the import job. */
		EnableDuplicateDetection: boolean | null;
		/** Unique identifier of the Alternate key Id */
		EntityKeyId: string | null;
		/** Shows the number of records in the import file that cannot be imported. */
		readonly FailureCount: number | null;
		/** Select the character that is used to separate each field in the import file. Typically, it is a comma. */
		FieldDelimiterCode: OptionSet.ImportFile.FieldDelimiterCode | null;
		/** Shows the type of source file that is uploaded for import. */
		FileTypeCode: OptionSet.ImportFile.FileTypeCode | null;
		/** Shows a list of each column header in the import file separated by a comma. The header is used for parsing the file during the import job. */
		readonly HeaderRow: string | null;
		/** Unique identifier of the import file. */
		ImportFileId: string | null;
		/** Choose the import job that the file was uploaded for. */
		ImportId: string | null;
		/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
		ImportMapId: string | null;
		/** Select whether the first row of the import file contains column headings, which are used for data mapping during the import job. */
		IsFirstRowHeader: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the name of the import file. This name is based on the name of the uploaded file. */
		Name: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the import file. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the import file. */
		readonly OwningUser: string | null;
		/** Shows the prefix applied to each column after the import file is parsed. */
		readonly ParsedTableColumnPrefix: string | null;
		/** Shows the number of columns included in the parsed import file. */
		readonly ParsedTableColumnsNumber: number | null;
		/** Shows the name of the table that contains the parsed data from the import file. */
		readonly ParsedTableName: string | null;
		/** Shows the number of records in this file that had failures during the import. */
		readonly PartialFailureCount: number | null;
		/** Tells whether the import file should be ignored or processed during the import. */
		ProcessCode: OptionSet.ImportFile.ProcessCode | null;
		/** Shows the import file's processing status code. This indicates whether the data in the import file has been parsed, transformed, or imported. */
		readonly ProcessingStatus: OptionSet.ImportFile.ProcessingStatus | null;
		/** Shows the progress code for the processing of the import file. This field is used when a paused import job is resumed. */
		readonly ProgressCounter: number | null;
		/** Shows the columns that are mapped to a related record type (entity) of the primary record type (entity) included in the import file. */
		RelatedEntityColumns: string | null;
		/** Shows the size of the import file, in kilobytes. */
		Size: string | null;
		/** Shows the name of the data source file uploaded in the import job. */
		Source: string | null;
		/** Shows the record type (entity) of the source data. */
		SourceEntityName: string | null;
		/** Shows the status of the import file record. By default, all records are active and can't be deactivated. */
		StateCode: OptionSet.ImportFile.StateCode | null;
		/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
		StatusCode: OptionSet.ImportFile.StatusCode | null;
		/** Shows the number of records in the import file that are imported successfully. */
		readonly SuccessCount: number | null;
		/** Select the target record type (entity) for the records that will be created during the import job. */
		TargetEntityName: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the total number of records in the import file. */
		readonly TotalCount: number | null;
		/** Select the value which is used for identify the upsert mode. By Default, it is a Create. */
		UpsertModeCode: OptionSet.ImportFile.UpsertModeCode | null;
		/** Tells whether an automatic system map was applied to the import file, which automatically maps the import data to the target entity in Microsoft Dynamics 365. */
		UseSystemMap: boolean | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows the secondary column headers. The additional headers are used during the process of transforming the import file into import data records. */
			readonly AdditionalHeaderRow: string;
			/** Shows the date and time when the import associated with the import file was completed. */
			readonly CompletedOn_UtcDateOnly: string;
			/** Stores the content of the import file, stored as comma-separated values. */
			readonly Content: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Select the single-character data delimiter used in the import file. This is typically a single or double quotation mark. */
			readonly DataDelimiterCode: string;
			/** Select whether duplicate-detection rules should be run against the import job. */
			readonly EnableDuplicateDetection: string;
			/** Unique identifier of the Alternate key Id */
			readonly EntityKeyId: string;
			/** Shows the number of records in the import file that cannot be imported. */
			readonly FailureCount: string;
			/** Select the character that is used to separate each field in the import file. Typically, it is a comma. */
			readonly FieldDelimiterCode: string;
			/** Shows the type of source file that is uploaded for import. */
			readonly FileTypeCode: string;
			/** Shows a list of each column header in the import file separated by a comma. The header is used for parsing the file during the import job. */
			readonly HeaderRow: string;
			/** Unique identifier of the import file. */
			readonly ImportFileId: string;
			/** Choose the import job that the file was uploaded for. */
			readonly ImportId: string;
			/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
			readonly ImportMapId: string;
			/** Select whether the first row of the import file contains column headings, which are used for data mapping during the import job. */
			readonly IsFirstRowHeader: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the name of the import file. This name is based on the name of the uploaded file. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the import file. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the import file. */
			readonly OwningUser: string;
			/** Shows the prefix applied to each column after the import file is parsed. */
			readonly ParsedTableColumnPrefix: string;
			/** Shows the number of columns included in the parsed import file. */
			readonly ParsedTableColumnsNumber: string;
			/** Shows the name of the table that contains the parsed data from the import file. */
			readonly ParsedTableName: string;
			/** Shows the number of records in this file that had failures during the import. */
			readonly PartialFailureCount: string;
			/** Tells whether the import file should be ignored or processed during the import. */
			readonly ProcessCode: string;
			/** Shows the import file's processing status code. This indicates whether the data in the import file has been parsed, transformed, or imported. */
			readonly ProcessingStatus: string;
			/** Shows the progress code for the processing of the import file. This field is used when a paused import job is resumed. */
			readonly ProgressCounter: string;
			/** Shows the columns that are mapped to a related record type (entity) of the primary record type (entity) included in the import file. */
			readonly RelatedEntityColumns: string;
			/** Shows the size of the import file, in kilobytes. */
			readonly Size: string;
			/** Shows the name of the data source file uploaded in the import job. */
			readonly Source: string;
			/** Shows the record type (entity) of the source data. */
			readonly SourceEntityName: string;
			/** Shows the status of the import file record. By default, all records are active and can't be deactivated. */
			readonly StateCode: string;
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			readonly StatusCode: string;
			/** Shows the number of records in the import file that are imported successfully. */
			readonly SuccessCount: string;
			/** Select the target record type (entity) for the records that will be created during the import job. */
			readonly TargetEntityName: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the total number of records in the import file. */
			readonly TotalCount: string;
			/** Select the value which is used for identify the upsert mode. By Default, it is a Create. */
			readonly UpsertModeCode: string;
			/** Tells whether an automatic system map was applied to the import file, which automatically maps the import data to the target entity in Microsoft Dynamics 365. */
			readonly UseSystemMap: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportFile {
		enum DataDelimiterCode {
			/** DoubleQuote = 1*/
			DoubleQuote = 1,
			/** None = 2*/
			None = 2,
			/** SingleQuote = 3*/
			SingleQuote = 3
		}
		enum FieldDelimiterCode {
			/** Colon = 1*/
			Colon = 1,
			/** Comma = 2*/
			Comma = 2,
			/** Semicolon = 4*/
			Semicolon = 4,
			/** Tab = 3*/
			Tab = 3
		}
		enum FileTypeCode {
			/** Attachment = 2*/
			Attachment = 2,
			/** CSV = 0*/
			CSV = 0,
			/** XLSX = 3*/
			XLSX = 3,
			/** XML_Spreadsheet_2003 = 1*/
			XML_Spreadsheet_2003 = 1
		}
		enum ProcessCode {
			/** Ignore = 2*/
			Ignore = 2,
			/** Internal = 3*/
			Internal = 3,
			/** Process = 1*/
			Process = 1
		}
		enum ProcessingStatus {
			/** Complex_Transformation = 4*/
			Complex_Transformation = 4,
			/** Import_Complete = 11*/
			Import_Complete = 11,
			/** Import_Pass_1 = 9*/
			Import_Pass_1 = 9,
			/** Import_Pass_2 = 10*/
			Import_Pass_2 = 10,
			/** Lookup_Transformation = 5*/
			Lookup_Transformation = 5,
			/** Not_Started = 1*/
			Not_Started = 1,
			/** Owner_Transformation = 7*/
			Owner_Transformation = 7,
			/** Parsing = 2*/
			Parsing = 2,
			/** Parsing_Complete = 3*/
			Parsing_Complete = 3,
			/** Picklist_Transformation = 6*/
			Picklist_Transformation = 6,
			/** Primary_Key_Transformation = 12*/
			Primary_Key_Transformation = 12,
			/** Transformation_Complete = 8*/
			Transformation_Complete = 8
		}
		enum RecordsOwnerIdType {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0
		}
		enum StatusCode {
			/** Completed = 4*/
			Completed = 4,
			/** Failed = 5*/
			Failed = 5,
			/** Importing = 3*/
			Importing = 3,
			/** Parsing = 1*/
			Parsing = 1,
			/** Submitted = 0*/
			Submitted = 0,
			/** Transforming = 2*/
			Transforming = 2
		}
		enum UpsertModeCode {
			/** Create = 0*/
			Create = 0,
			/** Ignore = 2*/
			Ignore = 2,
			/** Update = 1*/
			Update = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}