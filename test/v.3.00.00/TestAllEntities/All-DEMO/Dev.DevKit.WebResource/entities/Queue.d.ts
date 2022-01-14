//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQueue_Information {
		interface tab_general_Sections {
			email_configuration: DevKit.Controls.Section;
			incoming_email: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Description of the queue. */
			Description: DevKit.Controls.String;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Controls.String;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormQueue_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Queue_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Queue_Information */
		Body: DevKit.FormQueue_Information.Body;
		/** The Process of form Queue_Information */
		Process: DevKit.FormQueue_Information.Process;
		/** The SidePanes of form Queue_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOmnichannel_queue {
		interface Header extends DevKit.Controls.IHeader {
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			general_section_4: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows whether the queue is used as Omnichannel queue for work distribution. */
			msdyn_isomnichannelqueue: DevKit.Controls.Boolean;
			/** Unique identifier for Operating hour associated with Queue */
			msdyn_operatinghourid: DevKit.Controls.Lookup;
			/** Priority of the queue to indicate conversation assignment order to the agent. */
			msdyn_priority: DevKit.Controls.Integer;
			/** Defines the type of channels handled by this queue */
			msdyn_queuetype: DevKit.Controls.OptionSet;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Controls.OptionSet;
			WebResource_ocpreviewterms: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Agents: DevKit.Controls.Grid;
		}
	}
	class FormOmnichannel_queue extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Omnichannel_queue Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Omnichannel_queue */
		Body: DevKit.FormOmnichannel_queue.Body;
		/** The Header section of form Omnichannel_queue */
		Header: DevKit.FormOmnichannel_queue.Header;
		/** The Process of form Omnichannel_queue */
		Process: DevKit.FormOmnichannel_queue.Process;
		/** The Grid of form Omnichannel_queue */
		Grid: DevKit.FormOmnichannel_queue.Grid;
		/** The SidePanes of form Omnichannel_queue */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQueue {
		interface tab_conflictstab_Sections {
			conflictssection: DevKit.Controls.Section;
			general_section_7: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			incoming_email: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
			QueueItems: DevKit.Controls.Section;
			QueueMembers: DevKit.Controls.Section;
			QueueMembersNoRecord: DevKit.Controls.Section;
			RecordCreationAndUpdateRule: DevKit.Controls.Section;
		}
		interface tab_conflictstab extends DevKit.Controls.ITab {
			Section: tab_conflictstab_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			conflictstab: tab_conflictstab;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Description of the queue. */
			Description: DevKit.Controls.String;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Controls.String;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Shows whether the queue is used as Omnichannel queue for work distribution. */
			msdyn_isomnichannelqueue: DevKit.Controls.Boolean;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			QueueItemsGrid: DevKit.Controls.Grid;
			queuemembersgrid: DevKit.Controls.Grid;
			RecordCreationAndUpdateRuleGrid: DevKit.Controls.Grid;
		}
	}
	class FormQueue extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Queue Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Queue */
		Body: DevKit.FormQueue.Body;
		/** The Process of form Queue */
		Process: DevKit.FormQueue.Process;
		/** The Grid of form Queue */
		Grid: DevKit.FormQueue.Grid;
		/** The SidePanes of form Queue */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQueue_Hub_Form {
		interface tab_UsersTab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_UsersTab extends DevKit.Controls.ITab {
			Section: tab_UsersTab_Sections;
		}
		interface Tabs {
			UsersTab: tab_UsersTab;
		}
		interface Body {
			Tab: Tabs;
			msdyn_name1: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormQueue_Hub_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Queue_Hub_Form Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Queue_Hub_Form */
		Body: DevKit.FormQueue_Hub_Form.Body;
		/** The Process of form Queue_Hub_Form */
		Process: DevKit.FormQueue_Hub_Form.Process;
		/** The SidePanes of form Queue_Hub_Form */
		SidePanes: DevKit.SidePanes;
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
		/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
		AllowEmailCredentials: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the business unit with which the queue is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
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
		/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
		EmailPassword: DevKit.WebApi.StringValueReadonly;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: DevKit.WebApi.OptionSetValue;
		/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
		EmailUsername: DevKit.WebApi.StringValueReadonly;
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
		/** Indication of whether a queue is the fax delivery queue. */
		IsFaxQueue: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the queue. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the queue was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the queue. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Link assignment input contract with queue. */
		msdyn_assignmentinputcontractid: DevKit.WebApi.LookupValue;
		msdyn_assignmentstrategy: DevKit.WebApi.OptionSetValue;
		/** Shows whether the queue is set as default or not. */
		msdyn_isdefaultqueue: DevKit.WebApi.BooleanValue;
		/** Shows whether the queue is used as Omnichannel queue for work distribution. */
		msdyn_isomnichannelqueue: DevKit.WebApi.BooleanValue;
		/** Maximum queue size */
		msdyn_maxqueuesize: DevKit.WebApi.IntegerValue;
		/** Unique identifier for Operating hour associated with Queue */
		msdyn_operatinghourid: DevKit.WebApi.LookupValue;
		/** Priority of the queue to indicate conversation assignment order to the agent. */
		msdyn_priority: DevKit.WebApi.IntegerValue;
		/** Defines the type of channels handled by this queue */
		msdyn_queuetype: DevKit.WebApi.OptionSetValue;
		/** Unique Name for the entity. */
		msdyn_uniquename: DevKit.WebApi.StringValue;
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
		/** Unique identifier of the owner of the queue. */
		PrimaryUserId: DevKit.WebApi.LookupValue;
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
			/** 1 */
			Approved,
			/** 0 */
			Empty,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum IncomingEmailDeliveryMethod {
			/** 3 */
			Forward_Mailbox,
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum IncomingEmailFilteringMethod {
			/** 0 */
			All_email_messages,
			/** 2 */
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts,
			/** 3 */
			Email_messages_from_Dynamics_365_records_that_are_email_enabled,
			/** 1 */
			Email_messages_in_response_to_Dynamics_365_email,
			/** 4 */
			No_email_messages
		}
		enum msdyn_assignmentstrategy {
			/** 192350002 */
			Custom_Assignment_Configuration,
			/** 192350000 */
			Omnichannel_Assignment,
			/** 192350001 */
			Round_Robin
		}
		enum msdyn_queuetype {
			/** 192350001 */
			Entity,
			/** 192350000 */
			Messaging
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
			/** 1 */
			Private,
			/** 0 */
			Public
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}