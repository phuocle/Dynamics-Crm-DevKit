﻿//@ts-check
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
		/** Shows the type of the message. */
		readonly CardType: OptionSet.DelveActionHub.CardType;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedTime_UtcDateAndTime: Date;
		/** Shows the entity instances. */
		DelveActionHubId: string;
		/** For internal use only. */
		Description: string;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Stores the Icon Class name of the Delve ActionHub Card. */
		readonly IconClassName: string;
		/** Shows the mail web link. */
		MailWebLink: string;
		/** Shows the email message. This information is used only for email that is received. */
		MessageId: string;
		/** Shows the date and time when the email message is received. */
		readonly MessageTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedTime_UtcDateAndTime: Date;
		/** Shows the organization that the record belongs to. */
		readonly OrganizationId: string;
		/** For internal use only. */
		RelatedMailIds: string;
		/** Enter the sender of the email. */
		Sender: string;
		/** Record ID of the sender entity. */
		SenderEntityId: string;
		/** Object Type code of the sender entity. */
		readonly SenderEntityObjectTypeCode: number;
		/** Image of the sender. */
		SenderImageUrl: string;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: OptionSet.DelveActionHub.StateCode;
		/** Select the delve action record status. */
		StatusCode: OptionSet.DelveActionHub.StatusCode;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the type of the message. */
			readonly CardType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** Shows the entity instances. */
			readonly DelveActionHubId: string;
			/** For internal use only. */
			readonly Description: string;
			/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Stores the Icon Class name of the Delve ActionHub Card. */
			readonly IconClassName: string;
			/** Shows the mail web link. */
			readonly MailWebLink: string;
			/** Shows the email message. This information is used only for email that is received. */
			readonly MessageId: string;
			/** Shows the date and time when the email message is received. */
			readonly MessageTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedTime_UtcDateAndTime: string;
			/** Shows the organization that the record belongs to. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly RelatedMailIds: string;
			/** Enter the sender of the email. */
			readonly Sender: string;
			/** Record ID of the sender entity. */
			readonly SenderEntityId: string;
			/** Object Type code of the sender entity. */
			readonly SenderEntityObjectTypeCode: string;
			/** Image of the sender. */
			readonly SenderImageUrl: string;
			/** Shows whether the Delve action record is pending, completed, or tracking. */
			readonly StateCode: string;
			/** Select the delve action record status. */
			readonly StatusCode: string;
			/** Type a short description about the objective or primary topic of the email. */
			readonly Subject: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
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
		enum RecordIdObjectTypeCode {
		}
		enum RegardingObjectTypeCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}