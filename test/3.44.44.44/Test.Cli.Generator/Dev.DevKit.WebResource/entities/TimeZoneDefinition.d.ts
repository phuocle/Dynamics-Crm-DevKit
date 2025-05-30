﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TimeZoneDefinitionApi {
		/**
		* DynamicsCrm.DevKit TimeZoneDefinitionApi
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
		/** Base time bias of the time zone. */
		Bias: number;
		/** Unique identifier of the user who created the time zone record. */
		readonly CreatedBy: string;
		/** Date and time when the time zone record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the timezonedefinition. */
		readonly CreatedOnBehalfBy: string;
		/** Time zone name for the daylight time. */
		DaylightName: string;
		/** Unique identifier of the user who last modified the time zone record. */
		readonly ModifiedBy: string;
		/** Date and time when the time zone record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the timezonedefinition. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the time zone definition. */
		readonly OrganizationId: string;
		/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
		RetiredOrder: number;
		/** Time zone name for the standard time. */
		StandardName: string;
		/** Time zone identification code. */
		TimeZoneCode: number;
		/** Unique identifier of the time zone record. */
		TimeZoneDefinitionId: string;
		/** Display name for the time zone in the Microsoft Windows registry. */
		UserInterfaceName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Base time bias of the time zone. */
			readonly Bias: string;
			/** Unique identifier of the user who created the time zone record. */
			readonly CreatedBy: string;
			/** Date and time when the time zone record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the timezonedefinition. */
			readonly CreatedOnBehalfBy: string;
			/** Time zone name for the daylight time. */
			readonly DaylightName: string;
			/** Unique identifier of the user who last modified the time zone record. */
			readonly ModifiedBy: string;
			/** Date and time when the time zone record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the timezonedefinition. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the time zone definition. */
			readonly OrganizationId: string;
			/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
			readonly RetiredOrder: string;
			/** Time zone name for the standard time. */
			readonly StandardName: string;
			/** Time zone identification code. */
			readonly TimeZoneCode: string;
			/** Unique identifier of the time zone record. */
			readonly TimeZoneDefinitionId: string;
			/** Display name for the time zone in the Microsoft Windows registry. */
			readonly UserInterfaceName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TimeZoneDefinition {
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