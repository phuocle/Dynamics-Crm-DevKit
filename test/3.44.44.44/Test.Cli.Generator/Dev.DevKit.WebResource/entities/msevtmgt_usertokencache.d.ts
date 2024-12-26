//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_usertokencache_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msevtmgt_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsevtmgt_usertokencache_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_usertokencache_Information */
		Body: DevKit.Formmsevtmgt_usertokencache_Information.Body;
		/** The Navigation of form msevtmgt_usertokencache_Information */
		Navigation: DevKit.Formmsevtmgt_usertokencache_Information.Navigation;
		/** The SidePanes of form msevtmgt_usertokencache_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_usertokencacheApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_usertokencacheApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_encryptedvalue01: string;
		msevtmgt_encryptedvalue02: string;
		msevtmgt_encryptedvalue03: string;
		msevtmgt_encryptedvalue04: string;
		msevtmgt_encryptedvalue05: string;
		msevtmgt_encryptedvalue06: string;
		msevtmgt_encryptedvalue07: string;
		msevtmgt_encryptedvalue08: string;
		msevtmgt_encryptedvalue09: string;
		msevtmgt_encryptedvalue10: string;
		msevtmgt_encryptedvalue11: string;
		msevtmgt_encryptedvalue12: string;
		msevtmgt_encryptedvalue13: string;
		msevtmgt_encryptedvalue14: string;
		msevtmgt_encryptedvalue15: string;
		msevtmgt_encryptedvalue16: string;
		msevtmgt_encryptedvalue17: string;
		msevtmgt_encryptedvalue18: string;
		msevtmgt_encryptedvalue19: string;
		msevtmgt_encryptedvalue20: string;
		msevtmgt_encryptedvalue21: string;
		msevtmgt_encryptedvalue22: string;
		msevtmgt_encryptedvalue23: string;
		msevtmgt_encryptedvalue24: string;
		msevtmgt_encryptedvalue25: string;
		msevtmgt_encryptedvalue26: string;
		msevtmgt_encryptedvalue27: string;
		msevtmgt_encryptedvalue28: string;
		msevtmgt_encryptedvalue29: string;
		msevtmgt_encryptedvalue30: string;
		msevtmgt_encryptedvalue31: string;
		msevtmgt_encryptedvalue32: string;
		msevtmgt_encyptedvalue: string;
		/** The name of the custom entity. */
		msevtmgt_name: string;
		/** Unique identifier for User associated with User token cache. */
		msevtmgt_systemuserid: string;
		/** Unique identifier for entity instances */
		msevtmgt_usertokencacheId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the User token cache */
		statecode: OptionSet.msevtmgt_usertokencache.statecode;
		/** Reason for the status of the User token cache */
		statuscode: OptionSet.msevtmgt_usertokencache.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_encryptedvalue01: string;
			readonly msevtmgt_encryptedvalue02: string;
			readonly msevtmgt_encryptedvalue03: string;
			readonly msevtmgt_encryptedvalue04: string;
			readonly msevtmgt_encryptedvalue05: string;
			readonly msevtmgt_encryptedvalue06: string;
			readonly msevtmgt_encryptedvalue07: string;
			readonly msevtmgt_encryptedvalue08: string;
			readonly msevtmgt_encryptedvalue09: string;
			readonly msevtmgt_encryptedvalue10: string;
			readonly msevtmgt_encryptedvalue11: string;
			readonly msevtmgt_encryptedvalue12: string;
			readonly msevtmgt_encryptedvalue13: string;
			readonly msevtmgt_encryptedvalue14: string;
			readonly msevtmgt_encryptedvalue15: string;
			readonly msevtmgt_encryptedvalue16: string;
			readonly msevtmgt_encryptedvalue17: string;
			readonly msevtmgt_encryptedvalue18: string;
			readonly msevtmgt_encryptedvalue19: string;
			readonly msevtmgt_encryptedvalue20: string;
			readonly msevtmgt_encryptedvalue21: string;
			readonly msevtmgt_encryptedvalue22: string;
			readonly msevtmgt_encryptedvalue23: string;
			readonly msevtmgt_encryptedvalue24: string;
			readonly msevtmgt_encryptedvalue25: string;
			readonly msevtmgt_encryptedvalue26: string;
			readonly msevtmgt_encryptedvalue27: string;
			readonly msevtmgt_encryptedvalue28: string;
			readonly msevtmgt_encryptedvalue29: string;
			readonly msevtmgt_encryptedvalue30: string;
			readonly msevtmgt_encryptedvalue31: string;
			readonly msevtmgt_encryptedvalue32: string;
			readonly msevtmgt_encyptedvalue: string;
			/** The name of the custom entity. */
			readonly msevtmgt_name: string;
			/** Unique identifier for User associated with User token cache. */
			readonly msevtmgt_systemuserid: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_usertokencacheId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the User token cache */
			readonly statecode: string;
			/** Reason for the status of the User token cache */
			readonly statuscode: string;
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
	namespace msevtmgt_usertokencache {
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