//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQueueItem_Information {
		interface tab_general_Sections {
			/** Information */
			information: DevKit.Controls.Section;
			/** Section */
			Time_Information: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date the record was assigned to the queue. */
			EnteredOn: DevKit.Controls.DateTime;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Choose the queue that the item is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** Shows who is working on the queue item. */
			WorkerId: DevKit.Controls.Lookup;
		}
	}
	export class FormQueueItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form QueueItem_Information */
		Body: DevKit.FormQueueItem_Information.Body;
	}
	export class QueueItemApi {
		/**
		* DynamicsCrm.DevKit QueueItemApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the date the record was assigned to the queue. */
		readonly EnteredOn_UtcDateAndTime: Date | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the queueitem. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Select the type of the queue item, such as activity, case, or appointment. */
		readonly ObjectTypeCode: OptionSet.QueueItem.ObjectTypeCode | null;
		/** Unique identifier of the organization with which the queue item is associated. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the queue item. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the queue item. */
		readonly OwningUser: string | null;
		/** Priority of the queue item. */
		Priority: number | null;
		/** Choose the queue that the item is assigned to. */
		QueueId: string | null;
		/** Unique identifier of the queue item. */
		QueueItemId: string | null;
		/** Sender who created the queue item. */
		Sender: string | null;
		/** Status of the queue item. */
		State: number | null;
		/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.QueueItem.StateCode | null;
		/** Reason for the status of the queue item. */
		Status: number | null;
		/** Select the item's status. */
		StatusCode: OptionSet.QueueItem.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
		Title: string | null;
		/** Recipients listed on the To line of the message for email queue items. */
		ToRecipients: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the queue item. */
		readonly VersionNumber: number | null;
		/** Shows the date and time when the queue item was last assigned to a user. */
		readonly WorkerIdModifiedOn_UtcDateOnly: Date | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the date the record was assigned to the queue. */
			readonly EnteredOn_UtcDateAndTime: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the queueitem. */
			readonly ModifiedOnBehalfBy: string;
			/** Select the type of the queue item, such as activity, case, or appointment. */
			readonly ObjectTypeCode: string;
			/** Unique identifier of the organization with which the queue item is associated. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the queue item. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the queue item. */
			readonly OwningUser: string;
			/** Priority of the queue item. */
			readonly Priority: string;
			/** Choose the queue that the item is assigned to. */
			readonly QueueId: string;
			/** Unique identifier of the queue item. */
			readonly QueueItemId: string;
			/** Sender who created the queue item. */
			readonly Sender: string;
			/** Status of the queue item. */
			readonly State: string;
			/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Reason for the status of the queue item. */
			readonly Status: string;
			/** Select the item's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
			readonly Title: string;
			/** Recipients listed on the To line of the message for email queue items. */
			readonly ToRecipients: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the queue item. */
			readonly VersionNumber: string;
			/** Shows the date and time when the queue item was last assigned to a user. */
			readonly WorkerIdModifiedOn_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** Activity = 4200*/
			Activity = 4200,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Knowledge_Article = 9953*/
			Knowledge_Article = 9953,
			/** Knowledge_Article_Template = 10269*/
			Knowledge_Article_Template = 10269,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum WorkerIdType {
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