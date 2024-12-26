//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class supportusertableApi {
		/**
		* DynamicsCrm.DevKit supportusertableApi
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
		/** AAD ObjectId of the support user. */
		AADUserObjectId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Status of the record for deletion */
		EnabledforSoftDelete: OptionSet.supportusertable.EnabledforSoftDelete;
		/** Expiration time for the User access. */
		ExpiryDateTime_UtcDateAndTime: Date;
		IdentityProvider: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Status of the User record. */
		IsActive: OptionSet.supportusertable.IsActive;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the SupportUserTable */
		statecode: OptionSet.supportusertable.statecode;
		/** Reason for the status of the SupportUserTable */
		statuscode: OptionSet.supportusertable.statuscode;
		/** Unique identifier for entity instances */
		supportusertableId: string;
		TenantId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		UPN: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** AAD ObjectId of the support user. */
			readonly AADUserObjectId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Status of the record for deletion */
			readonly EnabledforSoftDelete: string;
			/** Expiration time for the User access. */
			readonly ExpiryDateTime_UtcDateAndTime: string;
			readonly IdentityProvider: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Status of the User record. */
			readonly IsActive: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the SupportUserTable */
			readonly statecode: string;
			/** Reason for the status of the SupportUserTable */
			readonly statuscode: string;
			/** Unique identifier for entity instances */
			readonly supportusertableId: string;
			readonly TenantId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly UPN: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace supportusertable {
		enum EnabledforSoftDelete {
			/** 4 */
			Allowed,
			/** 0 */
			Not_Allowed
		}
		enum IsActive {
			/** 4 */
			Allowed,
			/** 0 */
			Not_Allowed
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}