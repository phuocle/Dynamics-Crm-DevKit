//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Base time bias of the time zone. */
		Bias: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the time zone record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the timezonedefinition. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Time zone name for the daylight time. */
		DaylightName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the time zone record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the timezonedefinition. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the time zone definition. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
		RetiredOrder: DevKit.WebApi.IntegerValue;
		/** Time zone name for the standard time. */
		StandardName: DevKit.WebApi.StringValue;
		/** Time zone identification code. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the time zone record. */
		TimeZoneDefinitionId: DevKit.WebApi.GuidValue;
		/** Display name for the time zone in the Microsoft Windows registry. */
		UserInterfaceName: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}