//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormQueue_Information {
		interface tab_general_Sections {
			queue_information: DevKit.Form.Controls.ControlSection;
			incoming_email: DevKit.Form.Controls.ControlSection;
			email_configuration: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Description of the queue. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the queue. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQueue_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Queue_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Queue_Information */
		Body: MyDog.FormQueue_Information.Body;
	}
	namespace FormQueue {
		interface tab_general_Sections {
			queue_information: DevKit.Form.Controls.ControlSection;
			incoming_email: DevKit.Form.Controls.ControlSection;
			RecordCreationAndUpdateRule: DevKit.Form.Controls.ControlSection;
			QueueItems: DevKit.Form.Controls.ControlSection;
			QueueMembers: DevKit.Form.Controls.ControlSection;
			QueueMembersNoRecord: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			RecordCreationAndUpdateRuleGrid: DevKit.Form.Controls.ControlGrid;
			QueueItemsGrid: DevKit.Form.Controls.ControlGrid;
			queuemembersgrid: DevKit.Form.Controls.ControlGrid;
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Description of the queue. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the queue. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormQueue extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Queue
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Queue */
		Body: MyDog.FormQueue.Body;
	}
	class QueueApi {
		/**
		* DynamicsCrm.DevKit QueueApi
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
		/** Unique identifier of the user who created the queue record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the queue was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the queue. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the mailbox associated with this queue. */
		DefaultMailbox: DevKit.WebApi.LookupValueReadonly;
		/** Description of the queue. */
		Description: DevKit.WebApi.StringValue;
		/** Email address that is associated with the queue. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: DevKit.WebApi.OptionSetValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Information that specifies whether a queue is to ignore unsolicited email (deprecated). */
		IgnoreUnsolicitedEmail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Incoming email delivery method for the queue. */
		IncomingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Convert Incoming Email To Activities */
		IncomingEmailFilteringMethod: DevKit.WebApi.OptionSetValue;
		/** Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the queue. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the queue was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the queue. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the queue. */
		Name: DevKit.WebApi.StringValue;
		/** Number of Queue items associated with the queue. */
		NumberOfItems: DevKit.WebApi.IntegerValueReadonly;
		/** Number of Members associated with the queue. */
		NumberOfMembers: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the organization associated with the queue. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Outgoing email delivery method for the queue. */
		OutgoingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the queue. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the queue. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the queue. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the queue. */
		QueueId: DevKit.WebApi.GuidValue;
		/** Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process. */
		QueueTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
		QueueViewType: DevKit.WebApi.OptionSetValue;
		/** Status of the queue. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the queue. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the currency associated with the queue. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the queue. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Queue {
		enum EmailRouterAccessApproval {
			/** 0 */
			Empty,
			/** 1 */
			Approved,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum IncomingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router,
			/** 3 */
			Forward_Mailbox
		}
		enum IncomingEmailFilteringMethod {
			/** 0 */
			All_email_messages,
			/** 1 */
			Email_messages_in_response_to_Dynamics_365_email,
			/** 2 */
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts,
			/** 3 */
			Email_messages_from_Dynamics_365_records_that_are_email_enabled,
			/** 4 */
			No_email_messages
		}
		enum OutgoingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum QueueTypeCode {
			/** 1 */
			Default_Value
		}
		enum QueueViewType {
			/** 0 */
			Public,
			/** 1 */
			Private
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Inactive,
			/** 1 */
			Active
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
//{'JsForm':['Information','Queue'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}