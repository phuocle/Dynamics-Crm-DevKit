//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocsystemmessage_Information {
		interface tab_MessageTemplate_GeneralTab_Sections {
			_F86C374B_46E7_4B2F_9BC6_2D41E13AAFE2: DevKit.Controls.Section;
			MessageTemplate_LocalizationDataGridSection: DevKit.Controls.Section;
		}
		interface tab_MessageTemplate_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_MessageTemplate_GeneralTab_Sections;
		}
		interface Tabs {
			MessageTemplate_GeneralTab: tab_MessageTemplate_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Default language of the message template. */
			msdyn_defaultlanguage: DevKit.Controls.Lookup;
			/** ID of the instance this system message is related to, represented in text form. */
			msdyn_instanceid: DevKit.Controls.String;
			/** Stores the list of message receivers. */
			msdyn_messagereceiver: DevKit.Controls.OptionSet;
			/** Stores the list of event types for message template */
			msdyn_messagetemplatetrigger: DevKit.Controls.OptionSet;
			/** Text sent to the message receiver. */
			msdyn_messagetext: DevKit.Controls.String;
			/** Stores the list of event types for system messages. */
			msdyn_messagetype: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** List of all available channels. */
			msdyn_streamsource: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			MessageTemplate_LocalizationDataGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocsystemmessage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsystemmessage_Information */
		Body: DevKit.Formmsdyn_ocsystemmessage_Information.Body;
		/** The Process of form msdyn_ocsystemmessage_Information */
		Process: DevKit.Formmsdyn_ocsystemmessage_Information.Process;
		/** The Grid of form msdyn_ocsystemmessage_Information */
		Grid: DevKit.Formmsdyn_ocsystemmessage_Information.Grid;
		/** The SidePanes of form msdyn_ocsystemmessage_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_ocsystemmessage_Information2 {
		interface tab_MessageTemplate_GeneralTab_Sections {
			_F86C374B_46E7_4B2F_9BC6_2D41E13AAFE2: DevKit.Controls.Section;
			MessageTemplate_LocalizationDataGridSection: DevKit.Controls.Section;
		}
		interface tab_MessageTemplate_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_MessageTemplate_GeneralTab_Sections;
		}
		interface Tabs {
			MessageTemplate_GeneralTab: tab_MessageTemplate_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the message. */
			msdyn_messagedescription: DevKit.Controls.String;
			/** Stores the list of message receivers. */
			msdyn_messagereceiver: DevKit.Controls.OptionSet;
			/** Stores the list of event types for system messages. */
			msdyn_messagetype: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** List of all available channels. */
			msdyn_streamsource: DevKit.Controls.OptionSet;
			/** Stores the list of event types for system messages. */
			msdyn_systemmessageeventtype: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			MessageTemplate_LocalizationDataGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocsystemmessage_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsystemmessage_Information2 */
		Body: DevKit.Formmsdyn_ocsystemmessage_Information2.Body;
		/** The Process of form msdyn_ocsystemmessage_Information2 */
		Process: DevKit.Formmsdyn_ocsystemmessage_Information2.Process;
		/** The Grid of form msdyn_ocsystemmessage_Information2 */
		Grid: DevKit.Formmsdyn_ocsystemmessage_Information2.Grid;
		/** The SidePanes of form msdyn_ocsystemmessage_Information2 */
		SidePanes: DevKit.SidePanes;
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
		/** Default language of the message template. */
		msdyn_defaultlanguage: string;
		/** ID of the instance this system message is related to, represented in text form. */
		msdyn_instanceid: string;
		/** Description of the message. */
		msdyn_messagedescription: string;
		/** Stores the list of message receivers. */
		msdyn_messagereceiver: OptionSet.msdyn_ocsystemmessage.msdyn_messagereceiver;
		/** Stores the list of event types for message template */
		msdyn_messagetemplatetrigger: OptionSet.msdyn_ocsystemmessage.msdyn_messagetemplatetrigger;
		/** Text sent to the message receiver. */
		msdyn_messagetext: string;
		/** Stores the list of event types for system messages. */
		msdyn_messagetype: OptionSet.msdyn_ocsystemmessage.msdyn_messagetype;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocsystemmessageId: string;
		/** List of all available channels. */
		msdyn_streamsource: OptionSet.msdyn_ocsystemmessage.msdyn_streamsource;
		/** Stores the list of event types for system messages. */
		msdyn_systemmessageeventtype: OptionSet.msdyn_ocsystemmessage.msdyn_systemmessageeventtype;
		/** Unique identifier for Chat Widget associated with System Message. */
		msdyn_widgetid: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the System Message */
		statecode: OptionSet.msdyn_ocsystemmessage.statecode;
		/** Reason for the status of the System Message */
		statuscode: OptionSet.msdyn_ocsystemmessage.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Default language of the message template. */
			readonly msdyn_defaultlanguage: string;
			/** ID of the instance this system message is related to, represented in text form. */
			readonly msdyn_instanceid: string;
			/** Description of the message. */
			readonly msdyn_messagedescription: string;
			/** Stores the list of message receivers. */
			readonly msdyn_messagereceiver: string;
			/** Stores the list of event types for message template */
			readonly msdyn_messagetemplatetrigger: string;
			/** Text sent to the message receiver. */
			readonly msdyn_messagetext: string;
			/** Stores the list of event types for system messages. */
			readonly msdyn_messagetype: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocsystemmessageId: string;
			/** List of all available channels. */
			readonly msdyn_streamsource: string;
			/** Stores the list of event types for system messages. */
			readonly msdyn_systemmessageeventtype: string;
			/** Unique identifier for Chat Widget associated with System Message. */
			readonly msdyn_widgetid: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the System Message */
			readonly statecode: string;
			/** Reason for the status of the System Message */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum msdyn_messagetemplatetrigger {
			/** 1 */
			Outside_24_hour_conversation_window
		}
		enum msdyn_messagetype {
			/** 2 */
			Automated_Message,
			/** 3 */
			Message_Template
		}
		enum msdyn_streamsource {
			/** 192450000 */
			Apple_Messages_for_Business,
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_systemmessageeventtype {
			/** 192350060 */
			Agent_accepted_consult_conversation,
			/** 192350017 */
			Agent_assigned_to_conversation,
			/** 192350018 */
			Agent_couldnt_be_assigned_to_conversation,
			/** 192350013 */
			Agent_disconnected_from_conversation,
			/** 192350062 */
			Agent_ended_consult_conversation,
			/** 192350014 */
			Agent_ended_conversation,
			/** 192350000 */
			Agent_joined_conversation,
			/** 192350061 */
			Agent_joined_customer_conversation,
			/** 192350058 */
			Agent_left_consult_conversation,
			/** 192350059 */
			Agent_left_customer_conversation,
			/** 192350063 */
			Agent_removed_from_consult_conversation,
			/** 192350022 */
			Agents_message_couldnt_be_sent,
			/** 192350069 */
			Apple_Pay_request_payment_failed,
			/** 192350068 */
			Apple_Pay_request_payment_succeeded,
			/** 192350031 */
			Average_wait_time_for_customers_Hours,
			/** 192350032 */
			Average_wait_time_for_customers_Hours_and_minutes,
			/** 192350030 */
			Average_wait_time_for_customers_Minutes,
			/** 192350001 */
			Consult_accepted,
			/** 192350007 */
			Consult_rejected,
			/** 192350004 */
			Consult_request_failed,
			/** 192350009 */
			Consult_request_timed_out,
			/** 192350016 */
			Consult_session_ended,
			/** 192350003 */
			Consult_started,
			/** 192350037 */
			Couldnt_find_the_channel_account_in_Omnichannel,
			/** 192350020 */
			Customer_disconnected,
			/** 192350019 */
			Customer_ended_conversation,
			/** 192350057 */
			Customer_has_opted_out_from_Async_Conversation,
			/** 192350024 */
			Customer_is_next_in_line,
			/** 192350043 */
			Customer_no_longer_on_hold,
			/** 192350066 */
			Customer_OAuth_Sign_in_response_failed,
			/** 192350065 */
			Customer_OAuth_Sign_in_response_successful,
			/** 192350042 */
			Customer_put_on_hold,
			/** 192350038 */
			Customers_file_couldnt_be_attached_because_its_too_big,
			/** 192350023 */
			Customers_message_couldnt_be_sent_Outside_of_operation_hours,
			/** 192350021 */
			Customers_position_in_queue,
			/** 192350055 */
			End_conversation_due_to_overflow,
			/** 192350056 */
			Greeting_Message_for_Async_Channels,
			/** 192350035 */
			Holiday_message_to_customer,
			/** 192350071 */
			Invalid_Apple_OAuth_response,
			/** 192350041 */
			Leave_as_many_messages_as_youd_like_and_well_get_back_to_you_as_soon_as_possible_Well_save_your_chat_history_so_you_can_leave_and_come_back_anytime,
			/** 192350025 */
			Message_couldnt_be_delivered_Unsupported_message_type,
			/** 192350034 */
			Message_couldnt_be_sent_A_channel_account_cant_message_another_account_within_Omnichannel,
			/** 192350040 */
			Message_couldnt_be_sent_File_couldnt_be_attached,
			/** 192350029 */
			Message_couldnt_be_sent_Outside_allowed_timeframe,
			/** 192350044 */
			Message_or_attachment_failed_to_send_Providing_error_details_including_error_code_reason_for_failure_message_id_timestamp_and_transaction_id,
			/** 192350064 */
			Not_enough_data_for_average_wait_time,
			/** 192350036 */
			Out_of_operating_hour_message_to_customer,
			/** 192350050 */
			Recording_and_transcription_paused,
			/** 192350051 */
			Recording_and_transcription_resumed,
			/** 192350049 */
			Recording_and_transcription_started,
			/** 192350052 */
			Recording_and_transcription_stopped,
			/** 192350015 */
			Session_ended,
			/** 192350046 */
			Transcription_paused,
			/** 192350047 */
			Transcription_resumed,
			/** 192350045 */
			Transcription_started,
			/** 192350048 */
			Transcription_stopped,
			/** 192350002 */
			Transfer_to_agent_accepted,
			/** 192350006 */
			Transfer_to_agent_failed,
			/** 192350008 */
			Transfer_to_agent_rejected,
			/** 192350005 */
			Transfer_to_agent_requested,
			/** 192350010 */
			Transfer_to_agent_timed_out,
			/** 192350039 */
			Transfer_to_out_of_operating_hour_queue,
			/** 192350012 */
			Transfer_to_queue_failed,
			/** 192350011 */
			Transfer_to_queue_started,
			/** 192350054 */
			Trial_conversation_time_limit_exceeded,
			/** 192350053 */
			Trial_usage_limit_exceeded,
			/** 192350027 */
			Voice_call_accepted,
			/** 192350028 */
			Voice_call_declined,
			/** 192350033 */
			Voice_call_ended,
			/** 192350026 */
			Voice_call_requested,
			/** 192350070 */
			Waiting_time_for_agent_when_customer_is_disconnected
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}