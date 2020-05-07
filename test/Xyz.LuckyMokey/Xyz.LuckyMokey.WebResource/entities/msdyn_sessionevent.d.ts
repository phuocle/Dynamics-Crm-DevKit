//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSession_event_Form {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormSession_event_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Session_event_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Session_event_Form */
		Body: LuckyMokey.FormSession_event_Form.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_eventinfo: DevKit.WebApi.OptionSetValue;
		msdyn_eventreason: DevKit.WebApi.OptionSetValue;
		msdyn_eventtime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_eventtype: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_omnichannelsession: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_sessioneventId: DevKit.WebApi.GuidValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Session event */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Session event */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_sessionevent {
		enum msdyn_eventinfo {
			/** 192350000 */
			Default
		}
		enum msdyn_eventreason {
			/** 192350001 */
			AgentTransfer,
			/** 192350002 */
			QueueTransfer,
			/** 192350003 */
			PreChatSurvey,
			/** 192350004 */
			PostchatSurvey,
			/** 192350005 */
			UserAccept,
			/** 192350006 */
			AutoAccept,
			/** 192350007 */
			Closed,
			/** 192350008 */
			AgentInviteRejected,
			/** 192350009 */
			AgentInviteTimeout,
			/** 192350010 */
			AgentDisconnected,
			/** 192350011 */
			AgentTimeout,
			/** 192350012 */
			AgentTransferred,
			/** 192350013 */
			CustomerTimeout,
			/** 192350014 */
			CustomerDisconnect,
			/** 192350015 */
			SessionTimeout,
			/** 192350016 */
			Escalated,
			/** 192350017 */
			Rejected,
			/** 192350018 */
			TimedOut,
			/** 192350019 */
			Accepted,
			/** 192350020 */
			AutoAccepted,
			/** 192350021 */
			Item,
			/** 192350022 */
			Disconnect,
			/** 192350023 */
			Timeout,
			/** 192350024 */
			End,
			/** 192350000 */
			Default
		}
		enum msdyn_eventtype {
			/** 192350000 */
			Default,
			/** 192350001 */
			QueueAssigned,
			/** 192350002 */
			AgentAssigned,
			/** 192350003 */
			AgentAccepted,
			/** 192350004 */
			AgentInviteRejected,
			/** 192350005 */
			SessionEnd,
			/** 192350006 */
			SessionCreated,
			/** 192350007 */
			AgentInviteTimeout,
			/** 192350008 */
			Escalated,
			/** 192350009 */
			ParticipantInvited,
			/** 192350010 */
			ParticipantInviteRejected,
			/** 192350011 */
			ParticipantInviteAccepted,
			/** 192350012 */
			ParticipantInviteTimeout,
			/** 192350013 */
			ParticipantEnd,
			/** 192350014 */
			AgentDisconnected,
			/** 192350015 */
			AgentTimeout,
			/** 192350016 */
			CustomerTimeout,
			/** 192350017 */
			CustomerDisconnected,
			/** 192350018 */
			TransferedToAgent,
			/** 192350019 */
			TransferedToQueue,
			/** 192350020 */
			ParticipantLeft
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
//{'JsForm':['Session event Form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}