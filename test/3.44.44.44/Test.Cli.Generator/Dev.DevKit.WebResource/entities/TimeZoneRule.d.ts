//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Base time bias of the time zone rule. */
		Bias: number;
		/** Unique identifier of the user who created the time zone rule. */
		readonly CreatedBy: string;
		/** Date and time when the time zone rule was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the timezonerule. */
		readonly CreatedOnBehalfBy: string;
		/** Time bias in addition to the base bias for daylight savings time. */
		DaylightBias: number;
		/** Day of the month when daylight savings time starts. */
		DaylightDay: number;
		/** Day of the week when daylight savings time starts. */
		DaylightDayOfWeek: number;
		/** Hour of the day when daylight savings time starts */
		DaylightHour: number;
		/** Minute of the hour when daylight savings time starts. */
		DaylightMinute: number;
		/** Month when daylight savings time starts. */
		DaylightMonth: number;
		/** Second of the minute when daylight savings time starts */
		DaylightSecond: number;
		/** Year when daylight savings times starts. */
		DaylightYear: number;
		/** Time that this rule takes effect, in local time. */
		EffectiveDateTime_UtcDateOnly: Date;
		/** Unique identifier of the user who last modified the time zone rule. */
		readonly ModifiedBy: string;
		/** Date and time when the time zone rule was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the timezonerule. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the time zone rule. */
		readonly OrganizationId: string;
		/** Time bias in addition to the base bias for standard time. */
		StandardBias: number;
		/** Day of the month when standard time starts. */
		StandardDay: number;
		/** Day of the week when standard time starts. */
		StandardDayOfWeek: number;
		/** Hour of the day when standard time starts. */
		StandardHour: number;
		/** Minute of the hour when standard time starts. */
		StandardMinute: number;
		/** Month when standard time starts. */
		StandardMonth: number;
		/** Second of the Minute when standard time starts. */
		StandardSecond: number;
		/** Year when standard time starts. */
		StandardYear: number;
		/** Unique identifier of the time zone definition. */
		TimeZoneDefinitionId: string;
		/** Unique identifier of the time zone rule. */
		TimeZoneRuleId: string;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Base time bias of the time zone rule. */
			readonly Bias: string;
			/** Unique identifier of the user who created the time zone rule. */
			readonly CreatedBy: string;
			/** Date and time when the time zone rule was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the timezonerule. */
			readonly CreatedOnBehalfBy: string;
			/** Time bias in addition to the base bias for daylight savings time. */
			readonly DaylightBias: string;
			/** Day of the month when daylight savings time starts. */
			readonly DaylightDay: string;
			/** Day of the week when daylight savings time starts. */
			readonly DaylightDayOfWeek: string;
			/** Hour of the day when daylight savings time starts */
			readonly DaylightHour: string;
			/** Minute of the hour when daylight savings time starts. */
			readonly DaylightMinute: string;
			/** Month when daylight savings time starts. */
			readonly DaylightMonth: string;
			/** Second of the minute when daylight savings time starts */
			readonly DaylightSecond: string;
			/** Year when daylight savings times starts. */
			readonly DaylightYear: string;
			/** Time that this rule takes effect, in local time. */
			readonly EffectiveDateTime_UtcDateOnly: string;
			/** Unique identifier of the user who last modified the time zone rule. */
			readonly ModifiedBy: string;
			/** Date and time when the time zone rule was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the timezonerule. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the time zone rule. */
			readonly OrganizationId: string;
			/** Time bias in addition to the base bias for standard time. */
			readonly StandardBias: string;
			/** Day of the month when standard time starts. */
			readonly StandardDay: string;
			/** Day of the week when standard time starts. */
			readonly StandardDayOfWeek: string;
			/** Hour of the day when standard time starts. */
			readonly StandardHour: string;
			/** Minute of the hour when standard time starts. */
			readonly StandardMinute: string;
			/** Month when standard time starts. */
			readonly StandardMonth: string;
			/** Second of the Minute when standard time starts. */
			readonly StandardSecond: string;
			/** Year when standard time starts. */
			readonly StandardYear: string;
			/** Unique identifier of the time zone definition. */
			readonly TimeZoneDefinitionId: string;
			/** Unique identifier of the time zone rule. */
			readonly TimeZoneRuleId: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}