//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formusermobileofflineprofilemembership_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formusermobileofflineprofilemembership_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form usermobileofflineprofilemembership_Information */
		Body: DevKit.Formusermobileofflineprofilemembership_Information.Body;
		/** The Process of form usermobileofflineprofilemembership_Information */
		Process: DevKit.Formusermobileofflineprofilemembership_Information.Process;
		/** The SidePanes of form usermobileofflineprofilemembership_Information */
		SidePanes: DevKit.SidePanes;
	}
	class usermobileofflineprofilemembershipApi {
		/**
		* DynamicsCrm.DevKit usermobileofflineprofilemembershipApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		HasMobileOfflineProfileIdConflict: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		MobileOfflineProfileId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the UserMobileOfflineProfileMembership */
		statecode: OptionSet.usermobileofflineprofilemembership.statecode;
		/** Reason for the status of the UserMobileOfflineProfileMembership */
		statuscode: OptionSet.usermobileofflineprofilemembership.statuscode;
		SystemUserId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier for entity instances */
		usermobileofflineprofilemembershipId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of UserMobileOfflineProfileMembership. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace usermobileofflineprofilemembership {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}