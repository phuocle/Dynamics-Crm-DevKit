'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_ocsystemmessage_Information = function(executionContext, defaultWebResourceName) {
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			MessageTemplate_LocalizationDataGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
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
			Agent_assigned_to_conversation: 192350017,
			Agent_couldnt_be_assigned_to_conversation: 192350018,
			Agent_disconnected_from_conversation: 192350013,
			Agent_ended_conversation: 192350014,
			Agent_joined_conversation: 192350000,
			Agents_message_couldnt_be_sent: 192350022,
			Average_wait_time_for_customers_Hours: 192350031,
			Average_wait_time_for_customers_Hours_and_minutes: 192350032,
			Average_wait_time_for_customers_Minutes: 192350030,
			Consult_accepted: 192350001,
			Consult_rejected: 192350007,
			Consult_request_failed: 192350004,
			Consult_request_timed_out: 192350009,
			Consult_session_ended: 192350016,
			Consult_started: 192350003,
			Couldn’t_find_the_channel_account_in_Omnichannel: 192350037,
			Customer_disconnected: 192350020,
			Customer_ended_conversation: 192350019,
			Customer_is_next_in_line: 192350024,
			Customers_file_couldnt_be_attached_because_its_too_big: 192350038,
			Customers_message_couldnt_be_sent_Outside_of_operation_hours: 192350023,
			Customers_position_in_queue: 192350021,
			Holiday_message_to_customer: 192350035,
			Leave_as_many_messages_as_you’d_like_and_we’ll_get_back_to_you_as_soon_as_possible_We’ll_save_your_chat_history_so_you_can_leave_and_come_back_anytime: 192350041,
			Message_couldn’t_be_sent_A_channel_account_can’t_message_another_account_within_Omnichannel: 192350034,
			Message_couldn’t_be_sent_File_couldn’t_be_attached: 192350040,
			Message_couldnt_be_delivered_Unsupported_message_type: 192350025,
			Message_couldnt_be_sent_Outside_allowed_timeframe: 192350029,
			Message_or_attachment_failed_to_send_Providing_error_details_including_error_code_reason_for_failure_message_id_timestamp_and_transaction_id: 192350044,
			Out_of_operating_hour_message_to_customer: 192350036,
			Session_ended: 192350015,
			Transfer_to_agent_accepted: 192350002,
			Transfer_to_agent_failed: 192350006,
			Transfer_to_agent_rejected: 192350008,
			Transfer_to_agent_requested: 192350005,
			Transfer_to_agent_timed_out: 192350010,
			Transfer_to_out_of_operating_hour_queue: 192350039,
			Transfer_to_queue_failed: 192350012,
			Transfer_to_queue_started: 192350011,
			Voice_call_accepted: 192350027,
			Voice_call_declined: 192350028,
			Voice_call_ended: 192350033,
			Voice_call_requested: 192350026
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