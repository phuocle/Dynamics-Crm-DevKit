﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSession_event_Form {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSession_event_Form extends DevKit.IForm {
		/**
		* Session event Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_event_Form */
		Body: DevKit.FormSession_event_Form.Body;
		/** The Process of form Session_event_Form */
		Process: DevKit.FormSession_event_Form.Process;
		/** The SidePanes of form Session_event_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sessioneventApi {
		/**
		* DynamicsCrm.DevKit msdyn_sessioneventApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Event information */
		msdyn_eventinfo: OptionSet.msdyn_sessionevent.msdyn_eventinfo;
		/** Reason for session event */
		msdyn_eventreason: OptionSet.msdyn_sessionevent.msdyn_eventreason;
		/** Date and time of session event */
		msdyn_eventtime_UtcDateOnly: Date;
		/** Type of session event e.g. accept, reject etc */
		msdyn_eventtype: OptionSet.msdyn_sessionevent.msdyn_eventtype;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for the associated session */
		msdyn_omnichannelsession: string;
		/** Unique identifier for entity instances */
		msdyn_sessioneventId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Session event */
		statecode: OptionSet.msdyn_sessionevent.statecode;
		/** Reason for the status of the Session event */
		statuscode: OptionSet.msdyn_sessionevent.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 192350032 */
			AgentEndConsult,
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
			AssignToAgentBySupervisor,
			/** 192350027 */
			AssignToQueueBySupervisor,
			/** 192350006 */
			AutoAccept,
			/** 192350020 */
			AutoAccepted,
			/** 192350025 */
			BotEndConversation,
			/** 192350024 */
			BotTransferSession,
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
			/** 192350031 */
			SupervisorTransferToAgent,
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
			/** 192350027 */
			AgentAddedToC2Chat,
			/** 192350002 */
			AgentAssigned,
			/** 192350014 */
			AgentDisconnected,
			/** 192350029 */
			AgentEndConsult,
			/** 192350026 */
			AgentEndConversation,
			/** 192350004 */
			AgentInviteRejected,
			/** 192350007 */
			AgentInviteTimeout,
			/** 192350028 */
			AgentRemovedFromC2Chat,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}