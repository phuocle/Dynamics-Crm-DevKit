﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SocialActivityOptionSets
{
	public enum ActivityTypeCode
	{
		/// <summary>
		/// Appointment = 4201
		/// </summary>
		Appointment = 4201,
		/// <summary>
		/// Booking Alert = 10357
		/// </summary>
		Booking_Alert = 10357,
		/// <summary>
		/// Campaign Activity = 4402
		/// </summary>
		Campaign_Activity = 4402,
		/// <summary>
		/// Campaign Response = 4401
		/// </summary>
		Campaign_Response = 4401,
		/// <summary>
		/// Case Resolution = 4206
		/// </summary>
		Case_Resolution = 4206,
		/// <summary>
		/// Conversation = 10644
		/// </summary>
		Conversation = 10644,
		/// <summary>
		/// Customer Voice alert = 10261
		/// </summary>
		Customer_Voice_alert = 10261,
		/// <summary>
		/// Customer Voice survey invite = 10271
		/// </summary>
		Customer_Voice_survey_invite = 10271,
		/// <summary>
		/// Customer Voice survey response = 10273
		/// </summary>
		Customer_Voice_survey_response = 10273,
		/// <summary>
		/// Email = 4202
		/// </summary>
		Email = 4202,
		/// <summary>
		/// Fax = 4204
		/// </summary>
		Fax = 4204,
		/// <summary>
		/// Letter = 4207
		/// </summary>
		Letter = 4207,
		/// <summary>
		/// Opportunity Close = 4208
		/// </summary>
		Opportunity_Close = 4208,
		/// <summary>
		/// Order Close = 4209
		/// </summary>
		Order_Close = 4209,
		/// <summary>
		/// Outbound message = 10752
		/// </summary>
		Outbound_message = 10752,
		/// <summary>
		/// Phone Call = 4210
		/// </summary>
		Phone_Call = 4210,
		/// <summary>
		/// Project Service Approval = 10387
		/// </summary>
		Project_Service_Approval = 10387,
		/// <summary>
		/// Quick Campaign = 4406
		/// </summary>
		Quick_Campaign = 4406,
		/// <summary>
		/// Quote Close = 4211
		/// </summary>
		Quote_Close = 4211,
		/// <summary>
		/// Recurring Appointment = 4251
		/// </summary>
		Recurring_Appointment = 4251,
		/// <summary>
		/// Service Activity = 4214
		/// </summary>
		Service_Activity = 4214,
		/// <summary>
		/// Session = 10659
		/// </summary>
		Session = 10659,
		/// <summary>
		/// Task = 4212
		/// </summary>
		Task = 4212
	}

	public enum Community
	{
		/// <summary>
		/// Cortana = 5
		/// </summary>
		Cortana = 5,
		/// <summary>
		/// Direct Line = 6
		/// </summary>
		Direct_Line = 6,
		/// <summary>
		/// Direct Line Speech = 8
		/// </summary>
		Direct_Line_Speech = 8,
		/// <summary>
		/// Email = 9
		/// </summary>
		Email = 9,
		/// <summary>
		/// Facebook = 1
		/// </summary>
		Facebook = 1,
		/// <summary>
		/// GroupMe = 10
		/// </summary>
		GroupMe = 10,
		/// <summary>
		/// Kik = 11
		/// </summary>
		Kik = 11,
		/// <summary>
		/// Line = 3
		/// </summary>
		Line = 3,
		/// <summary>
		/// Microsoft Teams = 7
		/// </summary>
		Microsoft_Teams = 7,
		/// <summary>
		/// Other = 0
		/// </summary>
		Other = 0,
		/// <summary>
		/// Skype = 13
		/// </summary>
		Skype = 13,
		/// <summary>
		/// Slack = 14
		/// </summary>
		Slack = 14,
		/// <summary>
		/// Telegram = 12
		/// </summary>
		Telegram = 12,
		/// <summary>
		/// Twitter = 2
		/// </summary>
		Twitter = 2,
		/// <summary>
		/// Wechat = 4
		/// </summary>
		Wechat = 4,
		/// <summary>
		/// WhatsApp = 15
		/// </summary>
		WhatsApp = 15
	}

	public enum PostMessageType
	{
		/// <summary>
		/// Private Message = 1
		/// </summary>
		Private_Message = 1,
		/// <summary>
		/// Public Message = 0
		/// </summary>
		Public_Message = 0
	}

	public enum PriorityCode
	{
		/// <summary>
		/// High = 2
		/// </summary>
		High = 2,
		/// <summary>
		/// Low = 0
		/// </summary>
		Low = 0,
		/// <summary>
		/// Normal = 1
		/// </summary>
		Normal = 1
	}

	public enum StateCode
	{
		/// <summary>
		/// Canceled = 2
		/// </summary>
		Canceled = 2,
		/// <summary>
		/// Completed = 1
		/// </summary>
		Completed = 1,
		/// <summary>
		/// Open = 0
		/// </summary>
		Open = 0
	}

	public enum StatusCode
	{
		/// <summary>
		/// Canceled = 5
		/// </summary>
		Canceled = 5,
		/// <summary>
		/// Completed = 1
		/// </summary>
		Completed = 1,
		/// <summary>
		/// Failed = 2
		/// </summary>
		Failed = 2,
		/// <summary>
		/// Open = 4
		/// </summary>
		Open = 4,
		/// <summary>
		/// Processing = 3
		/// </summary>
		Processing = 3
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class SocialActivity : EntityBase
	{
		public struct Fields
		{
			public const string ActivityAdditionalParams = "activityadditionalparams";
			public const string ActivityId = "activityid";
			public const string ActivityTypeCode = "activitytypecode";
			public const string ActualDurationMinutes = "actualdurationminutes";
			public const string ActualEnd = "actualend";
			public const string ActualStart = "actualstart";
			public const string Community = "community";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string DirectionCode = "directioncode";
			public const string ExchangeRate = "exchangerate";
			public const string From = "from";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string InResponseTo = "inresponseto";
			public const string IsBilled = "isbilled";
			public const string IsRegularActivity = "isregularactivity";
			public const string IsWorkflowCreated = "isworkflowcreated";
			public const string LastOnHoldTime = "lastonholdtime";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OnHoldTime = "onholdtime";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PostAuthor = "postauthor";
			public const string PostAuthorAccount = "postauthoraccount";
			public const string PostedOn = "postedon";
			public const string PostFromProfileId = "postfromprofileid";
			public const string PostId = "postid";
			public const string PostMessageType = "postmessagetype";
			public const string PostToProfileId = "posttoprofileid";
			public const string PostURL = "posturl";
			public const string PriorityCode = "prioritycode";
			public const string ProcessId = "processid";
			public const string RegardingObjectId = "regardingobjectid";
			public const string Resources = "resources";
			public const string ScheduledDurationMinutes = "scheduleddurationminutes";
			public const string ScheduledEnd = "scheduledend";
			public const string ScheduledStart = "scheduledstart";
			public const string SentimentValue = "sentimentvalue";
			public const string ServiceId = "serviceid";
			public const string SLAId = "slaid";
			public const string SLAInvokedId = "slainvokedid";
			public const string SocialAdditionalParams = "socialadditionalparams";
			public const string SortDate = "sortdate";
			public const string StageId = "stageid";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string Subject = "subject";
			public const string ThreadId = "threadid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string To = "to";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string TraversedPath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "socialactivity";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4216;

		[DebuggerNonUserCode()]
		public SocialActivity()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SocialActivity(Guid SocialActivityId)
		{
			Entity = new Entity(EntityLogicalName, SocialActivityId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SocialActivity(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SocialActivity(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SocialActivity(Entity entity, Entity merge)
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
		public SocialActivity(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 8192</para>
		/// <para>Additional Parameters</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActivityAdditionalParams
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActivityAdditionalParams); }
			set { Entity.Attributes[Fields.ActivityAdditionalParams] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the activity.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Activity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ActivityId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ActivityId); }
			set { Entity.Attributes[Fields.ActivityId] = value; }
		}

		/// <summary>
		/// <para>Type of activity.</para>
		/// <para>ReadOnly - EntityName</para>
		/// <para>Activity Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActivityTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActivityTypeCode); }
		}

		/// <summary>
		/// <para>Actual duration of the activity in minutes.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Actual Duration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ActualDurationMinutes
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ActualDurationMinutes); }
			set { Entity.Attributes[Fields.ActualDurationMinutes] = value; }
		}

		/// <summary>
		/// <para>Actual end time of the activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Actual End</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ActualEndUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ActualEnd); }
			set { Entity.Attributes[Fields.ActualEnd] = value; }
		}

		/// <summary>
		/// <para>Actual start time of the activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Actual Start</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ActualStartUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ActualStart); }
			set { Entity.Attributes[Fields.ActualStart] = value; }
		}

		/// <summary>
		/// <para>Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.</para>
		/// <para>Picklist</para>
		/// <para>Social Channel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialActivityOptionSets.Community? Community
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Community);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialActivityOptionSets.Community)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Community] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Community] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the activity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the activity was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the activitypointer.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Shows information about the social post content. This field is read-only.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Post Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Select the direction of the post as incoming or outbound.</para>
		/// <para>Boolean</para>
		/// <para>Direction</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? DirectionCode
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.DirectionCode); }
			set { Entity.Attributes[Fields.DirectionCode] = value; }
		}

		/// <summary>
		/// <para>Shows the conversion rate of the record&apos;s currency. The exchange rate is used to convert all money fields in the record from the local currency to the system&apos;s default currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Exchange Rate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}

		/// <summary>
		/// <para>Person who the activity is from.</para>
		/// <para>Lookup to account;contact;lead;systemuser</para>
		/// <para>From</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public System.Collections.Generic.List<ActivityParty> From
		{
			get
			{
				var data = new System.Collections.Generic.List<ActivityParty>();
				foreach (var item in Entity.GetAttributeValue<EntityCollection>(Fields.From).Entities)
					data.Add(new ActivityParty(item));
				return data;
			}
			set
			{
				var data = new EntityCollection();
				foreach (var item in value)
					data.Entities.Add(item.Entity);
				Entity.Attributes[Fields.From] = data;
			}
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
		/// <para>Unique identifier for the responses to a post. For internal use only.</para>
		/// <para>String - MaxLength: 160</para>
		/// <para>In Response To</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InResponseTo
		{
			get { return Entity.GetAttributeValue<string>(Fields.InResponseTo); }
			set { Entity.Attributes[Fields.InResponseTo] = value; }
		}

		/// <summary>
		/// <para>Information regarding whether the activity was billed as part of resolving a case.</para>
		/// <para>Boolean</para>
		/// <para>Is Billed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsBilled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsBilled); }
			set { Entity.Attributes[Fields.IsBilled] = value; }
		}

		/// <summary>
		/// <para>Information regarding whether the activity is a regular activity type or event type.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Regular Activity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsRegularActivity
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsRegularActivity); }
		}

		/// <summary>
		/// <para>Information regarding whether the activity was created from a workflow rule.</para>
		/// <para>Boolean</para>
		/// <para>Is Workflow Created</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsWorkflowCreated
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsWorkflowCreated); }
			set { Entity.Attributes[Fields.IsWorkflowCreated] = value; }
		}

		/// <summary>
		/// <para>Contains the date and time stamp of the last on hold time.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Last On Hold Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? LastOnHoldTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.LastOnHoldTime); }
			set { Entity.Attributes[Fields.LastOnHoldTime] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Last Updated</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Shows how long, in minutes, that the record was on hold.</para>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>On Hold Time (Minutes)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? OnHoldTime
		{
			get { return Entity.GetAttributeValue<int?>(Fields.OnHoldTime); }
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
		/// <para>Unique identifier of the user or team who owns the activity.</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit that owns the activity.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team that owns the activity.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns the Activity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Shows the contact or account that authored the post.</para>
		/// <para>Lookup to account;contact</para>
		/// <para>Post Author</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PostAuthor
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PostAuthor); }
			set { Entity.Attributes[Fields.PostAuthor] = value; }
		}

		/// <summary>
		/// <para>Shows the parent account of the author of the post.</para>
		/// <para>Required - Lookup to account;contact</para>
		/// <para>Post Author Account</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PostAuthorAccount
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PostAuthorAccount); }
			set { Entity.Attributes[Fields.PostAuthorAccount] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PostedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PostedOn); }
			set { Entity.Attributes[Fields.PostedOn] = value; }
		}

		/// <summary>
		/// <para>Shows the author of the post on the corresponding social channel.</para>
		/// <para>Lookup to socialprofile</para>
		/// <para>Posted By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PostFromProfileId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PostFromProfileId); }
			set { Entity.Attributes[Fields.PostFromProfileId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the post. For internal use only.</para>
		/// <para>String - MaxLength: 160</para>
		/// <para>Post ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PostId
		{
			get { return Entity.GetAttributeValue<string>(Fields.PostId); }
			set { Entity.Attributes[Fields.PostId] = value; }
		}

		/// <summary>
		/// <para>Shows if the social post originated as a private or public message.</para>
		/// <para>Picklist</para>
		/// <para>Received As</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialActivityOptionSets.PostMessageType? PostMessageType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PostMessageType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialActivityOptionSets.PostMessageType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.PostMessageType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.PostMessageType] = null;
			}
		}

		/// <summary>
		/// <para>Shows the recipients of the social post.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Posted To</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PostToProfileId
		{
			get { return Entity.GetAttributeValue<string>(Fields.PostToProfileId); }
			set { Entity.Attributes[Fields.PostToProfileId] = value; }
		}

		/// <summary>
		/// <para>Shows the URL of the post.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Post URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PostURL
		{
			get { return Entity.GetAttributeValue<string>(Fields.PostURL); }
			set { Entity.Attributes[Fields.PostURL] = value; }
		}

		/// <summary>
		/// <para>Shows the priority so that preferred customers or critical issues are handled quickly.</para>
		/// <para>Picklist</para>
		/// <para>Priority</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialActivityOptionSets.PriorityCode? PriorityCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PriorityCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialActivityOptionSets.PriorityCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.PriorityCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.PriorityCode] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the Process.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Process</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ProcessId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ProcessId); }
			set { Entity.Attributes[Fields.ProcessId] = value; }
		}

		/// <summary>
		/// <para>Shows the record that the social activity relates to.</para>
		/// <para>Lookup to account;asyncoperation;bookableresourcebooking;bookableresourcebookingheader;bulkoperation;campaign;campaignactivity;contact;contract;entitlement;entitlementtemplate;incident;invoice;knowledgearticle;knowledgebaserecord;lead;msdyn_agreement;msdyn_agreementbookingdate;msdyn_agreementbookingincident;msdyn_agreementbookingproduct;msdyn_agreementbookingservice;msdyn_agreementbookingservicetask;msdyn_agreementbookingsetup;msdyn_agreementinvoicedate;msdyn_agreementinvoiceproduct;msdyn_agreementinvoicesetup;msdyn_bookingalertstatus;msdyn_bookingrule;msdyn_bookingtimestamp;msdyn_customerasset;msdyn_fieldservicesetting;msdyn_incidenttypecharacteristic;msdyn_incidenttypeproduct;msdyn_incidenttypeservice;msdyn_inventoryadjustment;msdyn_inventoryadjustmentproduct;msdyn_inventoryjournal;msdyn_inventorytransfer;msdyn_payment;msdyn_paymentdetail;msdyn_paymentmethod;msdyn_paymentterm;msdyn_playbookinstance;msdyn_postalbum;msdyn_postalcode;msdyn_processnotes;msdyn_productinventory;msdyn_projectteam;msdyn_purchaseorder;msdyn_purchaseorderbill;msdyn_purchaseorderproduct;msdyn_purchaseorderreceipt;msdyn_purchaseorderreceiptproduct;msdyn_purchaseordersubstatus;msdyn_quotebookingincident;msdyn_quotebookingproduct;msdyn_quotebookingservice;msdyn_quotebookingservicetask;msdyn_resourceterritory;msdyn_rma;msdyn_rmaproduct;msdyn_rmareceipt;msdyn_rmareceiptproduct;msdyn_rmasubstatus;msdyn_rtv;msdyn_rtvproduct;msdyn_rtvsubstatus;msdyn_shipvia;msdyn_systemuserschedulersetting;msdyn_timegroup;msdyn_timegroupdetail;msdyn_timeoffrequest;msdyn_warehouse;msdyn_workorder;msdyn_workordercharacteristic;msdyn_workorderincident;msdyn_workorderproduct;msdyn_workorderresourcerestriction;msdyn_workorderservice;msdyn_workorderservicetask;opportunity;quote;salesorder;site;uii_action;uii_hostedapplication;uii_nonhostedapplication;uii_option;uii_savedsession;uii_workflow;uii_workflowstep;uii_workflow_workflowstep_mapping</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}

		/// <summary>
		/// <para>Users or facility/equipment that are required for the activity.</para>
		/// <para>Lookup to equipment;systemuser</para>
		/// <para>Resources</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public System.Collections.Generic.List<ActivityParty> Resources
		{
			get
			{
				var data = new System.Collections.Generic.List<ActivityParty>();
				foreach (var item in Entity.GetAttributeValue<EntityCollection>(Fields.Resources).Entities)
					data.Add(new ActivityParty(item));
				return data;
			}
			set
			{
				var data = new EntityCollection();
				foreach (var item in value)
					data.Entities.Add(item.Entity);
				Entity.Attributes[Fields.Resources] = data;
			}
		}

		/// <summary>
		/// <para>Scheduled duration of the activity, specified in minutes.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Scheduled Duration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ScheduledDurationMinutes
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ScheduledDurationMinutes); }
			set { Entity.Attributes[Fields.ScheduledDurationMinutes] = value; }
		}

		/// <summary>
		/// <para>Scheduled end time of the activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Due Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ScheduledEndUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ScheduledEnd); }
			set { Entity.Attributes[Fields.ScheduledEnd] = value; }
		}

		/// <summary>
		/// <para>Scheduled start time of the activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Start Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ScheduledStartUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ScheduledStart); }
			set { Entity.Attributes[Fields.ScheduledStart] = value; }
		}

		/// <summary>
		/// <para>Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values.</para>
		/// <para>Double - MinValue: -100,000,000,000 - MaxValue: 100,000,000,000</para>
		/// <para>Sentiment Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? SentimentValue
		{
			get { return Entity.GetAttributeValue<double?>(Fields.SentimentValue); }
			set { Entity.Attributes[Fields.SentimentValue] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the associated service.</para>
		/// <para>Lookup to service</para>
		/// <para>Service</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ServiceId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ServiceId); }
			set { Entity.Attributes[Fields.ServiceId] = value; }
		}

		/// <summary>
		/// <para>Choose the service level agreement (SLA) that you want to apply to the Social Activity record.</para>
		/// <para>Lookup to sla</para>
		/// <para>SLA</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SLAId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SLAId); }
			set { Entity.Attributes[Fields.SLAId] = value; }
		}

		/// <summary>
		/// <para>Last SLA that was applied to this Social Activity. This field is for internal use only.</para>
		/// <para>ReadOnly - Lookup to sla</para>
		/// <para>Last SLA applied</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SLAInvokedId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SLAInvokedId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 8192</para>
		/// <para>Social Additional Parameters</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SocialAdditionalParams
		{
			get { return Entity.GetAttributeValue<string>(Fields.SocialAdditionalParams); }
			set { Entity.Attributes[Fields.SocialAdditionalParams] = value; }
		}

		/// <summary>
		/// <para>Shows the date and time by which the activities are sorted.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Sort Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? SortDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.SortDate); }
			set { Entity.Attributes[Fields.SortDate] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the Stage.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>(Deprecated) Process Stage</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? StageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.StageId); }
			set { Entity.Attributes[Fields.StageId] = value; }
		}

		/// <summary>
		/// <para>Shows whether the social activity completed. This field is read-only.</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialActivityOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialActivityOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		/// <summary>
		/// <para>Shows whether the social activity is completed, failed, or processing. This field is read-only.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialActivityOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialActivityOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}

		/// <summary>
		/// <para>Subject associated with the activity.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Subject</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Subject
		{
			get { return Entity.GetAttributeValue<string>(Fields.Subject); }
			set { Entity.Attributes[Fields.Subject] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the social conversation. For internal use only.</para>
		/// <para>String - MaxLength: 160</para>
		/// <para>Thread ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ThreadId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ThreadId); }
			set { Entity.Attributes[Fields.ThreadId] = value; }
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
		/// <para>Person who is the receiver of the activity.</para>
		/// <para>Lookup to account;contact;lead;systemuser</para>
		/// <para>To</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public System.Collections.Generic.List<ActivityParty> To
		{
			get
			{
				var data = new System.Collections.Generic.List<ActivityParty>();
				foreach (var item in Entity.GetAttributeValue<EntityCollection>(Fields.To).Entities)
					data.Add(new ActivityParty(item));
				return data;
			}
			set
			{
				var data = new EntityCollection();
				foreach (var item in value)
					data.Entities.Add(item.Entity);
				Entity.Attributes[Fields.To] = data;
			}
		}

		/// <summary>
		/// <para>Choose the local currency for the record to make sure budgets are reported in the correct currency.</para>
		/// <para>Lookup to transactioncurrency</para>
		/// <para>Currency</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>(Deprecated) Traversed Path</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TraversedPath
		{
			get { return Entity.GetAttributeValue<string>(Fields.TraversedPath); }
			set { Entity.Attributes[Fields.TraversedPath] = value; }
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
		/// <para>Version number of the social activity.</para>
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