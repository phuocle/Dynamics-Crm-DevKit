'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAppointment = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			msdyncrm_associatedcustomerjourneyiteration: {},
			notescontrol: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {},
			Subject1: {},
			Subject2: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			appointment: {
				Section: {
					appointment_description: {},
					attachments: {},
					general_information: {},
					scheduling_information: {},
					tab_2_section_2: {}
				}
			},
			tab_ci_call_summary: {
				Section: {
					tab_ci_section_call_summary: {}
				}
			},
			tab_ci_notes: {
				Section: {
					tab_ci_section_notes: {}
				}
			},
			tab_notes: {
				Section: {
					timeline_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {},
			msdyn_appointment_bookableresourcebooking: {},
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: {},
			msdyn_appointment_msdyn_externalrecord: {},
			msdyn_appointment_msdyn_ocrecording_recordingtarget: {},
			msdyn_appointment_msdyn_recording_appointment_activity: {},
			msdyn_appointment_msdyn_resourcerequirement: {},
			msdyn_appointment_msdyn_transcript_transcripttarget: {},
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: {},
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: {},
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAppointment_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			RegardingObjectId1: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_5: {
				Section: {
					appointment_description: {},
					tab_5_section_2: {},
					tab_5_section_3: {},
					tab_5_section_5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {},
			msdyn_appointment_bookableresourcebooking: {},
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: {},
			msdyn_appointment_msdyn_externalrecord: {},
			msdyn_appointment_msdyn_ocrecording_recordingtarget: {},
			msdyn_appointment_msdyn_recording_appointment_activity: {},
			msdyn_appointment_msdyn_resourcerequirement: {},
			msdyn_appointment_msdyn_transcript_transcripttarget: {},
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: {},
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: {},
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAppointment_Wizard = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			StatusCode: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			appointment: {
				Section: {
					appointment_description: {},
					attachments: {},
					general_information: {},
					Hidden_Section: {},
					scheduling_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {},
			msdyn_appointment_bookableresourcebooking: {},
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: {},
			msdyn_appointment_msdyn_externalrecord: {},
			msdyn_appointment_msdyn_ocrecording_recordingtarget: {},
			msdyn_appointment_msdyn_recording_appointment_activity: {},
			msdyn_appointment_msdyn_resourcerequirement: {},
			msdyn_appointment_msdyn_transcript_transcripttarget: {},
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: {},
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: {},
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAppointment_quick_create_form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OptionalAttendees: {},
			OwnerId: {},
			PriorityCode: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Appointment = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10310,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 11063,
			Phone_Call: 4210,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Task: 4212,
			Teams_chat: 10185,
			Voicemail: 11070
		},
		AttachmentErrors : {
			None: 0,
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		OnlineMeetingType : {
			Teams_Meeting: 1
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0,
			Scheduled: 3
		},
		StatusCode : {
			Busy: 5,
			Canceled: 4,
			Completed: 3,
			Free: 1,
			Out_of_Office: 6,
			Tentative: 2
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