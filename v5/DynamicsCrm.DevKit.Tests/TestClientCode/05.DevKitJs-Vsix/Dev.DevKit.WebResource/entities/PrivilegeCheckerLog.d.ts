//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PrivilegeCheckerLogApi {
		/**
		* DynamicsCrm.DevKit PrivilegeCheckerLogApi
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
		/** The checked privilege. */
		readonly CheckedPrivilege: string | null;
		/** The user whose privilege was checked. */
		readonly CheckedUser: string | null;
		/** The type of authorization check that was done. */
		readonly CheckType: OptionSet.PrivilegeCheckerLog.CheckType | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** If this was an impersonation, this will give who was impersonating -- in this case, their privilege was also checked. */
		readonly ImpersonatingUser: string | null;
		/** Sequence number of the import that created this record. */
		readonly ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the log. */
		readonly Name: string | null;
		/** Date and time that the record was migrated. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for entity instances */
		readonly PrivilegeCheckerLogId: string | null;
		/** Privilege Checker Run for this log */
		PrivilegeCheckerRunId: string | null;
		/** Depth that was checked for the privilege. */
		readonly PrivilegeDepth: OptionSet.PrivilegeCheckerLog.PrivilegeDepth | null;
		/** A brief description of the web request. */
		readonly Request: string | null;
		/** Status of the Privilege checker log */
		readonly statecode: OptionSet.PrivilegeCheckerLog.statecode | null;
		/** Reason for the status of the Privilege checker log */
		readonly statuscode: OptionSet.PrivilegeCheckerLog.statuscode | null;
		/** If this was a flow execution, this will give who was the owner of the flow -- in this case, their privilege was also checked. */
		readonly SupportingCaller: string | null;
		/** For internal use only. */
		readonly TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		readonly UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The checked privilege. */
			readonly CheckedPrivilege: string;
			/** The user whose privilege was checked. */
			readonly CheckedUser: string;
			/** The type of authorization check that was done. */
			readonly CheckType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** If this was an impersonation, this will give who was impersonating -- in this case, their privilege was also checked. */
			readonly ImpersonatingUser: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the log. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for entity instances */
			readonly PrivilegeCheckerLogId: string;
			/** Privilege Checker Run for this log */
			readonly PrivilegeCheckerRunId: string;
			/** Depth that was checked for the privilege. */
			readonly PrivilegeDepth: string;
			/** A brief description of the web request. */
			readonly Request: string;
			/** Status of the Privilege checker log */
			readonly statecode: string;
			/** Reason for the status of the Privilege checker log */
			readonly statuscode: string;
			/** If this was a flow execution, this will give who was the owner of the flow -- in this case, their privilege was also checked. */
			readonly SupportingCaller: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrivilegeCheckerLog {
		enum CheckType {
			/** Access_check = 2*/
			Access_check = 2,
			/** Privilege_Check = 1*/
			Privilege_Check = 1
		}
		enum PrivilegeDepth {
			/** Basic = 0*/
			Basic = 0,
			/** Deep = 2*/
			Deep = 2,
			/** Global = 3*/
			Global = 3,
			/** Local = 1*/
			Local = 1,
			/** NA = 5*/
			NA = 5,
			/** Record_Filter = 4*/
			Record_Filter = 4
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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