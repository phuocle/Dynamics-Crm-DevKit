//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class TimeZoneRuleApi {
		/**
		* DynamicsCrm.DevKit TimeZoneRuleApi
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
		/** Base time bias of the time zone rule. */
		Bias: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the time zone rule. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone rule was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the timezonerule. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Time bias in addition to the base bias for daylight savings time. */
		DaylightBias: DevKit.WebApi.IntegerValue;
		/** Day of the month when daylight savings time starts. */
		DaylightDay: DevKit.WebApi.IntegerValue;
		/** Day of the week when daylight savings time starts. */
		DaylightDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Hour of the day when daylight savings time starts */
		DaylightHour: DevKit.WebApi.IntegerValue;
		/** Minute of the hour when daylight savings time starts. */
		DaylightMinute: DevKit.WebApi.IntegerValue;
		/** Month when daylight savings time starts. */
		DaylightMonth: DevKit.WebApi.IntegerValue;
		/** Second of the minute when daylight savings time starts */
		DaylightSecond: DevKit.WebApi.IntegerValue;
		/** Year when daylight savings times starts. */
		DaylightYear: DevKit.WebApi.IntegerValue;
		/** Time that this rule takes effect, in local time. */
		EffectiveDateTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the user who last modified the time zone rule. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the time zone rule was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the timezonerule. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the time zone rule. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Time bias in addition to the base bias for standard time. */
		StandardBias: DevKit.WebApi.IntegerValue;
		/** Day of the month when standard time starts. */
		StandardDay: DevKit.WebApi.IntegerValue;
		/** Day of the week when standard time starts. */
		StandardDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Hour of the day when standard time starts. */
		StandardHour: DevKit.WebApi.IntegerValue;
		/** Minute of the hour when standard time starts. */
		StandardMinute: DevKit.WebApi.IntegerValue;
		/** Month when standard time starts. */
		StandardMonth: DevKit.WebApi.IntegerValue;
		/** Second of the Minute when standard time starts. */
		StandardSecond: DevKit.WebApi.IntegerValue;
		/** Year when standard time starts. */
		StandardYear: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the time zone definition. */
		TimeZoneDefinitionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the time zone rule. */
		TimeZoneRuleId: DevKit.WebApi.GuidValue;
		/** For internal use only */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TimeZoneRule {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}