﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets
{
	public enum msdyn_messagereceiver
	{
		/// <summary>
		/// Agent = 192350000
		/// </summary>
		Agent = 192350000,
		/// <summary>
		/// Customer = 192350001
		/// </summary>
		Customer = 192350001
	}

	public enum msdyn_messagetemplatetrigger
	{
		/// <summary>
		/// Outside 24-hour conversation window = 1
		/// </summary>
		Outside_24hour_conversation_window = 1
	}

	public enum msdyn_messagetype
	{
		/// <summary>
		/// Automated Message = 2
		/// </summary>
		Automated_Message = 2,
		/// <summary>
		/// Message Template = 3
		/// </summary>
		Message_Template = 3
	}

	public enum msdyn_streamsource
	{
		/// <summary>
		/// Co-browse = 192390000
		/// </summary>
		Cobrowse = 192390000,
		/// <summary>
		/// Custom = 192350002
		/// </summary>
		Custom = 192350002,
		/// <summary>
		/// Entity Records = 192350000
		/// </summary>
		Entity_Records = 192350000,
		/// <summary>
		/// Facebook = 192330000
		/// </summary>
		Facebook = 192330000,
		/// <summary>
		/// LINE = 192310000
		/// </summary>
		LINE = 192310000,
		/// <summary>
		/// Live chat = 192360000
		/// </summary>
		Live_chat = 192360000,
		/// <summary>
		/// Microsoft Teams = 19241000
		/// </summary>
		Microsoft_Teams = 19241000,
		/// <summary>
		/// Screen sharing = 192400000
		/// </summary>
		Screen_sharing = 192400000,
		/// <summary>
		/// SMS = 192340000
		/// </summary>
		SMS = 192340000,
		/// <summary>
		/// Twitter = 192350001
		/// </summary>
		Twitter = 192350001,
		/// <summary>
		/// Video = 192380000
		/// </summary>
		Video = 192380000,
		/// <summary>
		/// Voice = 192370000
		/// </summary>
		Voice = 192370000,
		/// <summary>
		/// WeChat = 192320000
		/// </summary>
		WeChat = 192320000,
		/// <summary>
		/// WhatsApp = 192300000
		/// </summary>
		WhatsApp = 192300000
	}

	public enum msdyn_systemmessageeventtype
	{
		/// <summary>
		/// Agent assigned to conversation = 192350017
		/// </summary>
		Agent_assigned_to_conversation = 192350017,
		/// <summary>
		/// Agent couldn't be assigned to conversation = 192350018
		/// </summary>
		Agent_couldnt_be_assigned_to_conversation = 192350018,
		/// <summary>
		/// Agent disconnected from conversation = 192350013
		/// </summary>
		Agent_disconnected_from_conversation = 192350013,
		/// <summary>
		/// Agent ended conversation = 192350014
		/// </summary>
		Agent_ended_conversation = 192350014,
		/// <summary>
		/// Agent joined conversation = 192350000
		/// </summary>
		Agent_joined_conversation = 192350000,
		/// <summary>
		/// Agent's message couldn't be sent = 192350022
		/// </summary>
		Agents_message_couldnt_be_sent = 192350022,
		/// <summary>
		/// Average wait time for customers: Hours = 192350031
		/// </summary>
		Average_wait_time_for_customers_Hours = 192350031,
		/// <summary>
		/// Average wait time for customers: Hours and minutes = 192350032
		/// </summary>
		Average_wait_time_for_customers_Hours_and_minutes = 192350032,
		/// <summary>
		/// Average wait time for customers: Minutes = 192350030
		/// </summary>
		Average_wait_time_for_customers_Minutes = 192350030,
		/// <summary>
		/// Consult accepted = 192350001
		/// </summary>
		Consult_accepted = 192350001,
		/// <summary>
		/// Consult rejected = 192350007
		/// </summary>
		Consult_rejected = 192350007,
		/// <summary>
		/// Consult request failed = 192350004
		/// </summary>
		Consult_request_failed = 192350004,
		/// <summary>
		/// Consult request timed out = 192350009
		/// </summary>
		Consult_request_timed_out = 192350009,
		/// <summary>
		/// Consult session ended = 192350016
		/// </summary>
		Consult_session_ended = 192350016,
		/// <summary>
		/// Consult started = 192350003
		/// </summary>
		Consult_started = 192350003,
		/// <summary>
		/// Couldn’t find the channel account in Omnichannel = 192350037
		/// </summary>
		Couldnt_find_the_channel_account_in_Omnichannel = 192350037,
		/// <summary>
		/// Customer disconnected = 192350020
		/// </summary>
		Customer_disconnected = 192350020,
		/// <summary>
		/// Customer ended conversation = 192350019
		/// </summary>
		Customer_ended_conversation = 192350019,
		/// <summary>
		/// Customer has opted out from Async Conversation = 192350057
		/// </summary>
		Customer_has_opted_out_from_Async_Conversation = 192350057,
		/// <summary>
		/// Customer is next in line = 192350024
		/// </summary>
		Customer_is_next_in_line = 192350024,
		/// <summary>
		/// Customer no longer on hold. = 192350043
		/// </summary>
		Customer_no_longer_on_hold = 192350043,
		/// <summary>
		/// Customer put on hold. = 192350042
		/// </summary>
		Customer_put_on_hold = 192350042,
		/// <summary>
		/// Customer's file couldn't be attached because it's too big = 192350038
		/// </summary>
		Customers_file_couldnt_be_attached_because_its_too_big = 192350038,
		/// <summary>
		/// Customer's message couldn't be sent: Outside of operation hours = 192350023
		/// </summary>
		Customers_message_couldnt_be_sent_Outside_of_operation_hours = 192350023,
		/// <summary>
		/// Customer's position in queue = 192350021
		/// </summary>
		Customers_position_in_queue = 192350021,
		/// <summary>
		/// End conversation due to overflow = 192350055
		/// </summary>
		End_conversation_due_to_overflow = 192350055,
		/// <summary>
		/// Greeting Message for Async Channels = 192350056
		/// </summary>
		Greeting_Message_for_Async_Channels = 192350056,
		/// <summary>
		/// Holiday message to customer = 192350035
		/// </summary>
		Holiday_message_to_customer = 192350035,
		/// <summary>
		/// Leave as many messages as you’d like and we’ll get back to you as soon as possible. We’ll save your chat history, so you can leave and come back anytime. = 192350041
		/// </summary>
		Leave_as_many_messages_as_youd_like_and_well_get_back_to_you_as_soon_as_possible_Well_save_your_chat_history_so_you_can_leave_and_come_back_anytime = 192350041,
		/// <summary>
		/// Message couldn't be delivered: Unsupported message type = 192350025
		/// </summary>
		Message_couldnt_be_delivered_Unsupported_message_type = 192350025,
		/// <summary>
		/// Message couldn’t be sent: A channel account can’t message another account within Omnichannel = 192350034
		/// </summary>
		Message_couldnt_be_sent_A_channel_account_cant_message_another_account_within_Omnichannel = 192350034,
		/// <summary>
		/// Message couldn’t be sent: File couldn’t be attached = 192350040
		/// </summary>
		Message_couldnt_be_sent_File_couldnt_be_attached = 192350040,
		/// <summary>
		/// Message couldn't be sent: Outside allowed timeframe = 192350029
		/// </summary>
		Message_couldnt_be_sent_Outside_allowed_timeframe = 192350029,
		/// <summary>
		/// Message or attachment failed to send. Providing error details including error code, reason for failure, message id, timestamp, and transaction id = 192350044
		/// </summary>
		Message_or_attachment_failed_to_send_Providing_error_details_including_error_code_reason_for_failure_message_id_timestamp_and_transaction_id = 192350044,
		/// <summary>
		/// Out of operating hour message to customer = 192350036
		/// </summary>
		Out_of_operating_hour_message_to_customer = 192350036,
		/// <summary>
		/// Recording and transcription paused. = 192350050
		/// </summary>
		Recording_and_transcription_paused = 192350050,
		/// <summary>
		/// Recording and transcription resumed. = 192350051
		/// </summary>
		Recording_and_transcription_resumed = 192350051,
		/// <summary>
		/// Recording and transcription started. = 192350049
		/// </summary>
		Recording_and_transcription_started = 192350049,
		/// <summary>
		/// Recording and transcription stopped. = 192350052
		/// </summary>
		Recording_and_transcription_stopped = 192350052,
		/// <summary>
		/// Session ended = 192350015
		/// </summary>
		Session_ended = 192350015,
		/// <summary>
		/// Transcription paused. = 192350046
		/// </summary>
		Transcription_paused = 192350046,
		/// <summary>
		/// Transcription resumed. = 192350047
		/// </summary>
		Transcription_resumed = 192350047,
		/// <summary>
		/// Transcription started. = 192350045
		/// </summary>
		Transcription_started = 192350045,
		/// <summary>
		/// Transcription stopped. = 192350048
		/// </summary>
		Transcription_stopped = 192350048,
		/// <summary>
		/// Transfer to agent accepted = 192350002
		/// </summary>
		Transfer_to_agent_accepted = 192350002,
		/// <summary>
		/// Transfer to agent failed = 192350006
		/// </summary>
		Transfer_to_agent_failed = 192350006,
		/// <summary>
		/// Transfer to agent rejected = 192350008
		/// </summary>
		Transfer_to_agent_rejected = 192350008,
		/// <summary>
		/// Transfer to agent requested = 192350005
		/// </summary>
		Transfer_to_agent_requested = 192350005,
		/// <summary>
		/// Transfer to agent timed out = 192350010
		/// </summary>
		Transfer_to_agent_timed_out = 192350010,
		/// <summary>
		/// Transfer to out of operating hour queue = 192350039
		/// </summary>
		Transfer_to_out_of_operating_hour_queue = 192350039,
		/// <summary>
		/// Transfer to queue failed = 192350012
		/// </summary>
		Transfer_to_queue_failed = 192350012,
		/// <summary>
		/// Transfer to queue started = 192350011
		/// </summary>
		Transfer_to_queue_started = 192350011,
		/// <summary>
		/// Trial conversation time limit exceeded = 192350054
		/// </summary>
		Trial_conversation_time_limit_exceeded = 192350054,
		/// <summary>
		/// Trial usage limit exceeded = 192350053
		/// </summary>
		Trial_usage_limit_exceeded = 192350053,
		/// <summary>
		/// Voice call accepted = 192350027
		/// </summary>
		Voice_call_accepted = 192350027,
		/// <summary>
		/// Voice call declined = 192350028
		/// </summary>
		Voice_call_declined = 192350028,
		/// <summary>
		/// Voice call ended = 192350033
		/// </summary>
		Voice_call_ended = 192350033,
		/// <summary>
		/// Voice call requested = 192350026
		/// </summary>
		Voice_call_requested = 192350026
	}

	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1
	}

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyn_ocsystemmessage : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_defaultlanguage = "msdyn_defaultlanguage";
			public const string msdyn_instanceid = "msdyn_instanceid";
			public const string msdyn_messagedescription = "msdyn_messagedescription";
			public const string msdyn_messagereceiver = "msdyn_messagereceiver";
			public const string msdyn_messagetemplatetrigger = "msdyn_messagetemplatetrigger";
			public const string msdyn_messagetext = "msdyn_messagetext";
			public const string msdyn_messagetype = "msdyn_messagetype";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_ocsystemmessageId = "msdyn_ocsystemmessageid";
			public const string msdyn_streamsource = "msdyn_streamsource";
			public const string msdyn_systemmessageeventtype = "msdyn_systemmessageeventtype";
			public const string msdyn_widgetid = "msdyn_widgetid";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_ocsystemmessage";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10662;

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage(Guid msdyn_ocsystemmessageId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_ocsystemmessageId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_ocsystemmessage(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Sequence number of the import that created this record.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Default language of the message template.</para>
		/// <para>Required - Lookup to msdyn_oclanguage</para>
		/// <para>Default language</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_defaultlanguage
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_defaultlanguage); }
			set { Entity.Attributes[Fields.msdyn_defaultlanguage] = value; }
		}

		/// <summary>
		/// <para>ID of the instance this system message is related to, represented in text form.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Instance ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_instanceid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_instanceid); }
			set { Entity.Attributes[Fields.msdyn_instanceid] = value; }
		}

		/// <summary>
		/// <para>Description of the message.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Message description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_messagedescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_messagedescription); }
			set { Entity.Attributes[Fields.msdyn_messagedescription] = value; }
		}

		/// <summary>
		/// <para>Stores the list of message receivers.</para>
		/// <para>Required - Picklist</para>
		/// <para>Message recipient</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagereceiver? msdyn_messagereceiver
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_messagereceiver);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagereceiver)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_messagereceiver] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_messagereceiver] = null;
			}
		}

		/// <summary>
		/// <para>Stores the list of event types for message template</para>
		/// <para>Required - Picklist</para>
		/// <para>Message template trigger</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagetemplatetrigger? msdyn_messagetemplatetrigger
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_messagetemplatetrigger);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagetemplatetrigger)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_messagetemplatetrigger] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_messagetemplatetrigger] = null;
			}
		}

		/// <summary>
		/// <para>Text sent to the message receiver.</para>
		/// <para>Required - Memo - MaxLength: 2000</para>
		/// <para>Message Text</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_messagetext
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_messagetext); }
			set { Entity.Attributes[Fields.msdyn_messagetext] = value; }
		}

		/// <summary>
		/// <para>Stores the list of event types for system messages.</para>
		/// <para>Picklist</para>
		/// <para>Message type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagetype? msdyn_messagetype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_messagetype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_messagetype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_messagetype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_messagetype] = null;
			}
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_ocsystemmessageId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_ocsystemmessageId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>List of all available channels.</para>
		/// <para>Required - Picklist</para>
		/// <para>Channel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_streamsource? msdyn_streamsource
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_streamsource);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_streamsource)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_streamsource] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_streamsource] = null;
			}
		}

		/// <summary>
		/// <para>Stores the list of event types for system messages.</para>
		/// <para>Required - Picklist</para>
		/// <para>Message trigger</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_systemmessageeventtype? msdyn_systemmessageeventtype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_systemmessageeventtype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.msdyn_systemmessageeventtype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_systemmessageeventtype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_systemmessageeventtype] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier for Chat Widget associated with System Message.</para>
		/// <para>Lookup to msdyn_livechatconfig</para>
		/// <para>Widget</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_widgetid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_widgetid); }
			set { Entity.Attributes[Fields.msdyn_widgetid] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Date and time that the record was migrated.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Status of the System Message</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.statecode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statecode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statecode] = null;
			}
		}

		/// <summary>
		/// <para>Reason for the status of the System Message</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocsystemmessageOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}

		/// <summary>
		/// <para>Version Number</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}