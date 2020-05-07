//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class UntrackedEmailApi {
		/**
		* DynamicsCrm.DevKit UntrackedEmailApi
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
		/** Unique identifier of untracked the email activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows information about the untracked email. This field is read-only. */
		Description: DevKit.WebApi.StringValue;
		/** The message id of untracked email which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of untracked email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		ModifiedByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		ModifiedOnBehalfByDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the untracked email activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the untracked email activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the untracked email activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the record that the untracked email relates to. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		RegardingObjectIdDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Type a short description about the objective or primary topic of the UntrackedEmail. */
		Subject: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the untracked email message. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UntrackedEmail {
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