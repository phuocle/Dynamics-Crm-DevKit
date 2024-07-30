//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrivilegeCheckerLogApi {
		/**
		* DynamicsCrm.DevKit PrivilegeCheckerLogApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** The user whose privilege was checked. */
		readonly CheckedUser: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** If this was an impersonation, this will give who was impersonating -- in this case, their privilege was also checked. */
		readonly ImpersonatingUser: string;
		/** Sequence number of the import that created this record. */
		readonly ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the log. */
		readonly Name: string;
		/** Date and time that the record was migrated. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier for entity instances */
		readonly PrivilegeCheckerLogId: string;
		/** Privilege Checker Run for this log */
		PrivilegeCheckerRunId: string;
		/** Depth that was checked for the privilege. */
		readonly PrivilegeDepth: OptionSet.PrivilegeCheckerLog.PrivilegeDepth;
		/** Name of the checked privilege. */
		readonly PrivilegeName: string;
		/** Information about the web request. */
		readonly Request: string;
		/** Status of the Privilege checker log */
		readonly statecode: OptionSet.PrivilegeCheckerLog.statecode;
		/** Reason for the status of the Privilege checker log */
		readonly statuscode: OptionSet.PrivilegeCheckerLog.statuscode;
		/** If this was a flow execution, this will give who was the owner of the flow -- in this case, their privilege was also checked. */
		readonly SupportingCaller: string;
		/** For internal use only. */
		readonly TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		readonly UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** The user whose privilege was checked. */
			readonly CheckedUser: string;
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
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier for entity instances */
			readonly PrivilegeCheckerLogId: string;
			/** Privilege Checker Run for this log */
			readonly PrivilegeCheckerRunId: string;
			/** Depth that was checked for the privilege. */
			readonly PrivilegeDepth: string;
			/** Name of the checked privilege. */
			readonly PrivilegeName: string;
			/** Information about the web request. */
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
		enum PrivilegeDepth {
			/** 0 */
			Basic,
			/** 2 */
			Deep,
			/** 3 */
			Global,
			/** 1 */
			Local,
			/** 5 */
			NA
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}