//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormSession_event_Form {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormSession_event_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Session_event_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_event_Form */
		Body: MyDog.FormSession_event_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_sessionevent {
		enum msdyn_eventinfo {
			/** 192350000 */
			Default
		}
		enum msdyn_eventreason {
			/** 192350019 */
			Accepted,
			/** 192350010 */
			AgentDisconnected,
			/** 192350030 */
			AgentEndConversation,
			/** 192350008 */
			AgentInviteRejected,
			/** 192350009 */
			AgentInviteTimeout,
			/** 192350011 */
			AgentTimeout,
			/** 192350001 */
			AgentTransfer,
			/** 192350012 */
			AgentTransferred,
			/** 192350026 */
			AssignToAgentBySupervisor_,
			/** 192350027 */
			AssignToQueueBySupervisor_,
			/** 192350006 */
			AutoAccept,
			/** 192350020 */
			AutoAccepted,
			/** 192350025 */
			BotEndConversation_,
			/** 192350024 */
			BotTransferSession_,
			/** 192350007 */
			Closed,
			/** 192350014 */
			CustomerDisconnect,
			/** 192350029 */
			CustomerEndConversation,
			/** 192350028 */
			CustomerRejoin,
			/** 192350013 */
			CustomerTimeout,
			/** 192350000 */
			Default,
			/** 192350021 */
			Disconnect,
			/** 192350023 */
			End,
			/** 192350016 */
			Escalated,
			/** 192350004 */
			PostchatSurvey,
			/** 192350003 */
			PreChatSurvey,
			/** 192350002 */
			QueueTransfer,
			/** 192350017 */
			Rejected,
			/** 192350015 */
			SessionTimeout,
			/** 192350018 */
			TimedOut,
			/** 192350022 */
			Timeout,
			/** 192350005 */
			UserAccept
		}
		enum msdyn_eventtype {
			/** 192350003 */
			AgentAccepted,
			/** 192350002 */
			AgentAssigned,
			/** 192350014 */
			AgentDisconnected,
			/** 192350026 */
			AgentEndConversation,
			/** 192350004 */
			AgentInviteRejected,
			/** 192350007 */
			AgentInviteTimeout,
			/** 192350015 */
			AgentTimeout,
			/** 192350023 */
			AssignToAgentBySupervisor,
			/** 192350024 */
			AssignToQueueBySupervisor,
			/** 192350022 */
			BotEndConversation,
			/** 192350021 */
			BotTransferSession,
			/** 192350017 */
			CustomerDisconnected,
			/** 192350025 */
			CustomerEndConversation,
			/** 192350016 */
			CustomerTimeout,
			/** 192350000 */
			Default,
			/** 192350008 */
			Escalated,
			/** 192350013 */
			ParticipantEnd,
			/** 192350011 */
			ParticipantInviteAccepted,
			/** 192350009 */
			ParticipantInvited,
			/** 192350010 */
			ParticipantInviteRejected,
			/** 192350012 */
			ParticipantInviteTimeout,
			/** 192350020 */
			ParticipantLeft,
			/** 192350001 */
			QueueAssigned,
			/** 192350006 */
			SessionCreated,
			/** 192350005 */
			SessionEnd,
			/** 192350018 */
			TransferedToAgent,
			/** 192350019 */
			TransferedToQueue
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'JsForm':['Session event Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}