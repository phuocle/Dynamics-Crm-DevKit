//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSync_Error {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Controls.Section;
		}
		/** Details */
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		/** General */
		interface tab_General_Tab extends DevKit.Controls.ITab {
			Section: tab_General_Tab_Sections;
		}
		interface Tabs {
			/** Details */
			Details: tab_Details;
			/** General */
			General_Tab: tab_General_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Action Name for which sync error has occurred */
			Action: DevKit.Controls.String;
			/** Enter a short description of the sync error. */
			Description: DevKit.Controls.String;
			/** Displays the error code. */
			ErrorCode: DevKit.Controls.String;
			/** Error description from the exception */
			ErrorDetail: DevKit.Controls.String;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Controls.String;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Controls.DateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Controls.String;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormSync_Error extends DevKit.IForm {
		/**
		* Sync Error [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Sync_Error */
		Body: DevKit.FormSync_Error.Body;
		/** The Header section of form Sync_Error */
		Header: DevKit.FormSync_Error.Header;
	}
	export class SyncErrorApi {
		/**
		* DynamicsCrm.DevKit SyncErrorApi
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
		/** Action Name for which sync error has occurred */
		Action: string | null;
		/** Show the action data */
		ActionData: string | null;
		/** Unique identifier of the user who created the sync error. */
		readonly CreatedBy: string | null;
		/** Date and time when the sync Error was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sync error. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter a short description of the sync error. */
		Description: string | null;
		/** Displays the error code. */
		ErrorCode: string | null;
		/** Error description from the exception */
		ErrorDetail: string | null;
		/** Error Message of the exception */
		ErrorMessage: string | null;
		/** Date and time when the upsync request was executed on CRM server */
		ErrorTime_UtcDateAndTime: Date | null;
		/** Select the preferred error type. */
		ErrorType: OptionSet.SyncError.ErrorType | null;
		/** Unique identifier of the user who last modified the sync error. */
		readonly ModifiedBy: string | null;
		/** Date and time when the sync error was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sync error. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Entity name of the record for which sync error has occurred */
		Name: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Business unit that owns the sync error. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the sync error. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the sync error. */
		readonly OwningUser: string | null;
		/** Request data for the entity that had the sync error. */
		RequestData: string | null;
		/** Shows whether the sync error is active or resolved. */
		StateCode: OptionSet.SyncError.StateCode | null;
		/** Select the sync error status. */
		StatusCode: OptionSet.SyncError.StatusCode | null;
		/** Unique identifier of the sync error. */
		SyncErrorId: string | null;
		/** Shows the version number of the sync error. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Action Name for which sync error has occurred */
			readonly Action: string;
			/** Show the action data */
			readonly ActionData: string;
			/** Unique identifier of the user who created the sync error. */
			readonly CreatedBy: string;
			/** Date and time when the sync Error was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sync error. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a short description of the sync error. */
			readonly Description: string;
			/** Displays the error code. */
			readonly ErrorCode: string;
			/** Error description from the exception */
			readonly ErrorDetail: string;
			/** Error Message of the exception */
			readonly ErrorMessage: string;
			/** Date and time when the upsync request was executed on CRM server */
			readonly ErrorTime_UtcDateAndTime: string;
			/** Select the preferred error type. */
			readonly ErrorType: string;
			/** Unique identifier of the user who last modified the sync error. */
			readonly ModifiedBy: string;
			/** Date and time when the sync error was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sync error. */
			readonly ModifiedOnBehalfBy: string;
			/** Entity name of the record for which sync error has occurred */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the sync error. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the sync error. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the sync error. */
			readonly OwningUser: string;
			/** Request data for the entity that had the sync error. */
			readonly RequestData: string;
			/** Shows whether the sync error is active or resolved. */
			readonly StateCode: string;
			/** Select the sync error status. */
			readonly StatusCode: string;
			/** Unique identifier of the sync error. */
			readonly SyncErrorId: string;
			/** Shows the version number of the sync error. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** Conflict = 0*/
			Conflict = 0,
			/** Others = 3*/
			Others = 3,
			/** Record_already_exists = 2*/
			Record_already_exists = 2,
			/** Record_not_found = 1*/
			Record_not_found = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Resolved = 1*/
			Resolved = 1
		}
		enum StatusCode {
			/** Active = 0*/
			Active = 0,
			/** Fixed = 1*/
			Fixed = 1
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