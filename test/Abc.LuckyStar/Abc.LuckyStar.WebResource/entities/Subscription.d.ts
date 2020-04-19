//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class SubscriptionApi {
		/**
		* DynamicsCrm.DevKit SubscriptionApi
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
		/** Client Version. */
		ClientVersion: DevKit.WebApi.StringValueReadonly;
		/** UTC time when the last successfully completed synchronization was started. This is the difference between local time and standard Coordinated Universal Time. */
		CompletedSyncStartedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Database time stamp at the start time of the last successfully completed synchronization. */
		CompletedSyncVersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** For internal use only. */
		LastSyncStartedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		MachineName: DevKit.WebApi.StringValue;
		/** Database time stamp at the start time of the last successfully completed synchronization. */
		ReInitialize: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ResetForCreate: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SubscriptionType: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		SyncEntryTableName: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		SystemUserId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace Subscription {
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