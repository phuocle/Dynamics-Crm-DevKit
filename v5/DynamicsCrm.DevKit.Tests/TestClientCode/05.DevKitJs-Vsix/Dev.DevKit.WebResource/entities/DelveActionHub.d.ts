//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class DelveActionHubApi {
		/**
		* DynamicsCrm.DevKit DelveActionHubApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Shows the type of the message. */
		readonly CardType: OptionSet.DelveActionHub.CardType | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedTime_UtcDateAndTime: Date | null;
		/** Shows the entity instances. */
		DelveActionHubId: string | null;
		/** For internal use only. */
		Description: string | null;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Stores the Icon Class name of the Delve ActionHub Card. */
		readonly IconClassName: string | null;
		/** Shows the mail web link. */
		MailWebLink: string | null;
		/** Shows the email message. This information is used only for email that is received. */
		MessageId: string | null;
		/** Shows the date and time when the email message is received. */
		readonly MessageTime_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedTime_UtcDateAndTime: Date | null;
		/** Shows the organization that the record belongs to. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		RelatedMailIds: string | null;
		/** Enter the sender of the email. */
		Sender: string | null;
		/** Record ID of the sender entity. */
		SenderEntityId: string | null;
		/** Object Type code of the sender entity. */
		readonly SenderEntityObjectTypeCode: number | null;
		/** Image of the sender. */
		SenderImageUrl: string | null;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: OptionSet.DelveActionHub.StateCode | null;
		/** Select the delve action record status. */
		StatusCode: OptionSet.DelveActionHub.StatusCode | null;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Default = 0*/
			Default = 0,
			/** MeetingRequest = 3*/
			MeetingRequest = 3,
			/** SendContentRequest = 1*/
			SendContentRequest = 1,
			/** YesNo = 2*/
			YesNo = 2
		}
		enum RecordIdObjectTypeCode {
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Completed = 1*/
			Completed = 1,
			/** Dismiss = 2*/
			Dismiss = 2,
			/** Pending = 0*/
			Pending = 0
		}
		enum StatusCode {
			/** Completed = 2*/
			Completed = 2,
			/** Dismiss = 3*/
			Dismiss = 3,
			/** Pending = 1*/
			Pending = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}