//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_ocsystemmessage_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_ocsystemmessage_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocsystemmessage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_ocsystemmessage_Information */
		Body: LuckyMokey.Formmsdyn_ocsystemmessage_Information.Body;
	}
	class msdyn_ocsystemmessageApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsystemmessageApi
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
		/** Description of the message. */
		msdyn_messagedescription: DevKit.WebApi.StringValue;
		/** Stores the list of message receivers. */
		msdyn_messagereceiver: DevKit.WebApi.OptionSetValue;
		/** Text sent to the message receiver. */
		msdyn_messagetext: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocsystemmessageId: DevKit.WebApi.GuidValue;
		/** List of all available channels. */
		msdyn_streamsource: DevKit.WebApi.OptionSetValue;
		/** Stores the list of event types for system messages. */
		msdyn_systemmessageeventtype: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the System Message */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the System Message */
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
	namespace msdyn_ocsystemmessage {
		enum msdyn_messagereceiver {
			/** 192350000 */
			Agent,
			/** 192350001 */
			Customer
		}
		enum msdyn_streamsource {
			/** 192350000 */
			Entity_Records,
			/** 192360000 */
			Live_chat,
			/** 192370000 */
			Voice,
			/** 192380000 */
			Video,
			/** 192390000 */
			Co_browse,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192330000 */
			Facebook
		}
		enum msdyn_systemmessageeventtype {
			/** 192350000 */
			AgentAccepted,
			/** 192350001 */
			ConsultAccepted,
			/** 192350002 */
			TransferAccepted,
			/** 192350003 */
			ConsultInitiated,
			/** 192350004 */
			ConsultFailed,
			/** 192350005 */
			TransferInitiated,
			/** 192350006 */
			TransferFailed,
			/** 192350007 */
			ConsultRejected,
			/** 192350008 */
			TransferRejected,
			/** 192350009 */
			ConsultTimedOut,
			/** 192350010 */
			TransferTimedOut,
			/** 192350011 */
			TransferToQueueInitiated,
			/** 192350012 */
			TransferToQueueFailed,
			/** 192350013 */
			AgentDisconnected,
			/** 192350014 */
			AgentEnded,
			/** 192350015 */
			SessionClosed,
			/** 192350016 */
			ConsultSessionClosed,
			/** 192350017 */
			AgentAssignmentReady,
			/** 192350018 */
			AgentAssignmentFailure,
			/** 192350019 */
			CustomerEnded,
			/** 192350020 */
			CustomerDisconnected,
			/** 192350021 */
			CustomerQueuePosition_LiveChat,
			/** 192350022 */
			MessageFailedToSendToCustomer,
			/** 192350023 */
			OutsideOperationHours,
			/** 192350024 */
			CustomerQueuePosition_Next
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}