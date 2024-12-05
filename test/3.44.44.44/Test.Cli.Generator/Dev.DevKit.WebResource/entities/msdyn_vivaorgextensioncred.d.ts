//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_vivaorgextensioncredApi {
		/**
		* DynamicsCrm.DevKit msdyn_vivaorgextensioncredApi
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
		msdyn_extensionclientid: string;
		/** Identifies which team | extension these credential is for */
		msdyn_extensionname: string;
		/** JSON object string of all the extension additional properties, if needed */
		msdyn_extensionproperties: string;
		msdyn_extensionsecret: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Identifies which org this org setting is associated with */
		msdyn_orgid: string;
		/** Identifier to track the association of this record with a Copilot product type */
		msdyn_producttype: OptionSet.msdyn_vivaorgextensioncred.msdyn_producttype;
		/** Track who created setting */
		msdyn_settingscreatedby: string;
		/** Track who modified setting last */
		msdyn_settingsmodifiedby: string;
		/** Unique identifier for entity instances */
		msdyn_vivaorgextensioncredId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the msdyn_vivaorgextensioncred */
		statecode: OptionSet.msdyn_vivaorgextensioncred.statecode;
		/** Reason for the status of the msdyn_vivaorgextensioncred */
		statuscode: OptionSet.msdyn_vivaorgextensioncred.statuscode;
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
			readonly msdyn_extensionclientid: string;
			/** Identifies which team | extension these credential is for */
			readonly msdyn_extensionname: string;
			/** JSON object string of all the extension additional properties, if needed */
			readonly msdyn_extensionproperties: string;
			readonly msdyn_extensionsecret: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Identifies which org this org setting is associated with */
			readonly msdyn_orgid: string;
			/** Identifier to track the association of this record with a Copilot product type */
			readonly msdyn_producttype: string;
			/** Track who created setting */
			readonly msdyn_settingscreatedby: string;
			/** Track who modified setting last */
			readonly msdyn_settingsmodifiedby: string;
			/** Unique identifier for entity instances */
			readonly msdyn_vivaorgextensioncredId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the msdyn_vivaorgextensioncred */
			readonly statecode: string;
			/** Reason for the status of the msdyn_vivaorgextensioncred */
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
	namespace msdyn_vivaorgextensioncred {
		enum msdyn_producttype {
			/** 10000 */
			Copilot_for_Sales,
			/** 10001 */
			Copilot_for_Service,
			/** 11000 */
			Shared
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