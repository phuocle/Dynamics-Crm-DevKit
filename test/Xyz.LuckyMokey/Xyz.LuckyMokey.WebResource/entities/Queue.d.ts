//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		Body: LuckyMokey.FormQueue_Information.Body;
	}
	namespace FormOmnichannel_queue {
		interface Header {
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			queue_information: DevKit.Form.Controls.ControlSection;
			general_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			Agents: DevKit.Form.Controls.ControlGrid;
			/** Shows whether the queue is used as Omnichannel queue for work distribution. */
			msdyn_isomnichannelqueue: DevKit.Form.Controls.ControlBoolean;
			/** Priority of the queue to indicate conversation assignment order to the agent. */
			msdyn_priority: DevKit.Form.Controls.ControlInteger;
			/** Name of the queue. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormOmnichannel_queue extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Omnichannel_queue
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Omnichannel_queue */
		Body: LuckyMokey.FormOmnichannel_queue.Body;
		/** The Header section of form Omnichannel_queue */
		Header: LuckyMokey.FormOmnichannel_queue.Header;
	}
	namespace FormQueue {
		interface tab_general_Sections {
			queue_information: DevKit.Form.Controls.ControlSection;
			general_section_7: DevKit.Form.Controls.ControlSection;
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
			/** Shows whether the queue is used as Omnichannel queue for work distribution. */
			msdyn_isomnichannelqueue: DevKit.Form.Controls.ControlBoolean;
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
		Body: LuckyMokey.FormQueue.Body;
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
//{'JsForm':['Information','Omnichannel queue','Queue'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}