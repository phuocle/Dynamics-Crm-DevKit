'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocsystemmessage_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			MessageTemplate_LocalizationDataGrid: {},
			msdyn_defaultlanguage: {},
			msdyn_instanceid: {},
			msdyn_messagereceiver: {},
			msdyn_messagetemplatetrigger: {},
			msdyn_messagetext: {},
			msdyn_messagetype: {},
			msdyn_name: {},
			msdyn_streamsource: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			MessageTemplate_GeneralTab: {
				Section: {
					_F86C374B_46E7_4B2F_9BC6_2D41E13AAFE2: {},
					MessageTemplate_LocalizationDataGridSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			MessageTemplate_LocalizationDataGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_ocsystemmessage_Information2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			MessageTemplate_LocalizationDataGrid: {},
			msdyn_messagedescription: {},
			msdyn_messagereceiver: {},
			msdyn_messagetype: {},
			msdyn_msdyn_instanceid: {},
			msdyn_name: {},
			msdyn_streamsource: {},
			msdyn_systemmessageeventtype: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			MessageTemplate_GeneralTab: {
				Section: {
					_F86C374B_46E7_4B2F_9BC6_2D41E13AAFE2: {},
					MessageTemplate_LocalizationDataGridSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			MessageTemplate_LocalizationDataGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsystemmessage = {
		msdyn_messagereceiver : {
			Agent: 192350000,
			Customer: 192350001
		},
		msdyn_messagetemplatetrigger : {
			Outside_24_hour_conversation_window: 1
		},
		msdyn_messagetype : {
			Automated_Message: 2,
			Message_Template: 3
		},
		msdyn_streamsource : {
			Apple_Messages_for_Business: 192450000,
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_systemmessageeventtype : {
			Agent_accepted_consult_conversation: 192350060,
			Agent_assigned_to_conversation: 192350017,
			Agent_couldnt_be_assigned_to_conversation: 192350018,
			Agent_disconnected_from_conversation: 192350013,
			Agent_ended_consult_conversation: 192350062,
			Agent_ended_conversation: 192350014,
			Agent_joined_conversation: 192350000,
			Agent_joined_customer_conversation: 192350061,
			Agent_left_consult_conversation: 192350058,
			Agent_left_customer_conversation: 192350059,
			Agent_removed_from_consult_conversation: 192350063,
			Agents_message_couldnt_be_sent: 192350022,
			Apple_Pay_request_payment_failed: 192350069,
			Apple_Pay_request_payment_succeeded: 192350068,
			Average_wait_time_for_customers_Hours: 192350031,
			Average_wait_time_for_customers_Hours_and_minutes: 192350032,
			Average_wait_time_for_customers_Minutes: 192350030,
			Consult_accepted: 192350001,
			Consult_rejected: 192350007,
			Consult_request_failed: 192350004,
			Consult_request_timed_out: 192350009,
			Consult_session_ended: 192350016,
			Consult_started: 192350003,
			Couldnt_find_the_channel_account_in_Omnichannel: 192350037,
			Customer_disconnected: 192350020,
			Customer_ended_conversation: 192350019,
			Customer_has_opted_out_from_Async_Conversation: 192350057,
			Customer_is_next_in_line: 192350024,
			Customer_no_longer_on_hold: 192350043,
			Customer_OAuth_Sign_in_response_failed: 192350066,
			Customer_OAuth_Sign_in_response_successful: 192350065,
			Customer_put_on_hold: 192350042,
			Customers_file_couldnt_be_attached_because_its_too_big: 192350038,
			Customers_message_couldnt_be_sent_Outside_of_operation_hours: 192350023,
			Customers_position_in_queue: 192350021,
			End_conversation_due_to_overflow: 192350055,
			Greeting_Message_for_Async_Channels: 192350056,
			Holiday_message_to_customer: 192350035,
			Invalid_Apple_OAuth_response: 192350071,
			Leave_as_many_messages_as_youd_like_and_well_get_back_to_you_as_soon_as_possible_Well_save_your_chat_history_so_you_can_leave_and_come_back_anytime: 192350041,
			Message_couldnt_be_delivered_Unsupported_message_type: 192350025,
			Message_couldnt_be_sent_A_channel_account_cant_message_another_account_within_Omnichannel: 192350034,
			Message_couldnt_be_sent_File_couldnt_be_attached: 192350040,
			Message_couldnt_be_sent_Outside_allowed_timeframe: 192350029,
			Message_or_attachment_failed_to_send_Providing_error_details_including_error_code_reason_for_failure_message_id_timestamp_and_transaction_id: 192350044,
			Not_enough_data_for_average_wait_time: 192350064,
			Out_of_operating_hour_message_to_customer: 192350036,
			Recording_and_transcription_paused: 192350050,
			Recording_and_transcription_resumed: 192350051,
			Recording_and_transcription_started: 192350049,
			Recording_and_transcription_stopped: 192350052,
			Session_ended: 192350015,
			Transcription_paused: 192350046,
			Transcription_resumed: 192350047,
			Transcription_started: 192350045,
			Transcription_stopped: 192350048,
			Transfer_to_agent_accepted: 192350002,
			Transfer_to_agent_failed: 192350006,
			Transfer_to_agent_rejected: 192350008,
			Transfer_to_agent_requested: 192350005,
			Transfer_to_agent_timed_out: 192350010,
			Transfer_to_out_of_operating_hour_queue: 192350039,
			Transfer_to_queue_failed: 192350012,
			Transfer_to_queue_started: 192350011,
			Trial_conversation_time_limit_exceeded: 192350054,
			Trial_usage_limit_exceeded: 192350053,
			Voice_call_accepted: 192350027,
			Voice_call_declined: 192350028,
			Voice_call_ended: 192350033,
			Voice_call_requested: 192350026,
			Waiting_time_for_agent_when_customer_is_disconnected: 192350070
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));