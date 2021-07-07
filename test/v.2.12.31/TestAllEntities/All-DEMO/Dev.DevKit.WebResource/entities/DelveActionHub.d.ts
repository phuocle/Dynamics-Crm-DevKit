//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class DelveActionHubApi {
		/**
		* DynamicsCrm.DevKit DelveActionHubApi
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
		/** Shows the type of the message. */
		CardType: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the entity instances. */
		DelveActionHubId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Stores the Icon Class name of the Delve ActionHub Card. */
		IconClassName: DevKit.WebApi.StringValueReadonly;
		/** Shows the mail web link. */
		MailWebLink: DevKit.WebApi.StringValue;
		/** Shows the email message. This information is used only for email that is received. */
		MessageId: DevKit.WebApi.StringValue;
		/** Shows the date and time when the email message is received. */
		MessageTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the organization that the record belongs to. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the record ID. */
		RecordId: DevKit.WebApi.LookupValue;
		RecordIdDsc: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the record that the email relates to. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		RegardingObjectIdDsc: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		RelatedMailIds: DevKit.WebApi.StringValue;
		/** Enter the sender of the email. */
		Sender: DevKit.WebApi.StringValue;
		/** Record ID of the sender entity. */
		SenderEntityId: DevKit.WebApi.GuidValue;
		/** Object Type code of the sender entity. */
		SenderEntityObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Image of the sender. */
		SenderImageUrl: DevKit.WebApi.StringValue;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the delve action record status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DelveActionHub {
		enum CardType {
			/** 0 */
			Default,
			/** 3 */
			MeetingRequest,
			/** 1 */
			SendContentRequest,
			/** 2 */
			YesNo
		}
		enum StateCode {
			/** 1 */
			Completed,
			/** 2 */
			Dismiss,
			/** 0 */
			Pending
		}
		enum StatusCode {
			/** 2 */
			Completed,
			/** 3 */
			Dismiss,
			/** 1 */
			Pending
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}