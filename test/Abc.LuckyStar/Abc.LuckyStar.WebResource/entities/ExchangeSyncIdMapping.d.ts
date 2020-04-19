//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class ExchangeSyncIdMappingApi {
		/**
		* DynamicsCrm.DevKit ExchangeSyncIdMappingApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		ExchangeEntryId: DevKit.WebApi.StringValue;
		ExchangeSyncIdmappingId: DevKit.WebApi.GuidValue;
		FromCrmChangeType: DevKit.WebApi.IntegerValue;
		IsDeletedInExchange: DevKit.WebApi.BooleanValue;
		IsUnlinkedInCRM: DevKit.WebApi.BooleanValue;
		ItemSubject: DevKit.WebApi.StringValue;
		LastSyncError: DevKit.WebApi.StringValue;
		LastSyncErrorCode: DevKit.WebApi.IntegerValue;
		/** Last Sync Error Time */
		LastSyncErrorOccurredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		ObjectId: DevKit.WebApi.GuidValue;
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		Retries: DevKit.WebApi.IntegerValue;
		ToCrmChangeType: DevKit.WebApi.IntegerValue;
		UserDecision: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ExchangeSyncIdMapping {
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