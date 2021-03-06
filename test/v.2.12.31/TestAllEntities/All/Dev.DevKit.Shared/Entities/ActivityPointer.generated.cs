﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ActivityPointerOptionSets
{
	public enum Community
	{
		/// <summary>
		/// Facebook = 1
		/// </summary>
		Facebook = 1,
		/// <summary>
		/// Other = 0
		/// </summary>
		Other = 0,
		/// <summary>
		/// Twitter = 2
		/// </summary>
		Twitter = 2
	}

	public enum DeliveryPriorityCode
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

	public enum InstanceTypeCode
	{
		/// <summary>
		/// Not_Recurring = 0
		/// </summary>
		Not_Recurring = 0,
		/// <summary>
		/// Recurring_Exception = 3
		/// </summary>
		Recurring_Exception = 3,
		/// <summary>
		/// Recurring_Future_Exception = 4
		/// </summary>
		Recurring_Future_Exception = 4,
		/// <summary>
		/// Recurring_Instance = 2
		/// </summary>
		Recurring_Instance = 2,
		/// <summary>
		/// Recurring_Master = 1
		/// </summary>
		Recurring_Master = 1
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
		Open = 0,
		/// <summary>
		/// Scheduled = 3
		/// </summary>
		Scheduled = 3
	}

	public enum StatusCode
	{
		/// <summary>
		/// Canceled = 3
		/// </summary>
		Canceled = 3,
		/// <summary>
		/// Completed = 2
		/// </summary>
		Completed = 2,
		/// <summary>
		/// Open = 1
		/// </summary>
		Open = 1,
		/// <summary>
		/// Scheduled = 4
		/// </summary>
		Scheduled = 4
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class ActivityPointer : EntityBase
	{
		public struct Fields
		{
			public const string ActivityAdditionalParams = "activityadditionalparams";
			public const string ActivityId = "activityid";
			public const string ActivityTypeCode = "activitytypecode";
			public const string ActualDurationMinutes = "actualdurationminutes";
			public const string ActualEnd = "actualend";
			public const string ActualStart = "actualstart";
			public const string allparties = "allparties";
			public const string Community = "community";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DeliveryLastAttemptedOn = "deliverylastattemptedon";
			public const string DeliveryPriorityCode = "deliveryprioritycode";
			public const string Description = "description";
			public const string ExchangeItemId = "exchangeitemid";
			public const string ExchangeRate = "exchangerate";
			public const string ExchangeWebLink = "exchangeweblink";
			public const string InstanceTypeCode = "instancetypecode";
			public const string IsBilled = "isbilled";
			public const string IsMapiPrivate = "ismapiprivate";
			public const string IsRegularActivity = "isregularactivity";
			public const string IsWorkflowCreated = "isworkflowcreated";
			public const string LastOnHoldTime = "lastonholdtime";
			public const string LeftVoiceMail = "leftvoicemail";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OnHoldTime = "onholdtime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PostponeActivityProcessingUntil = "postponeactivityprocessinguntil";
			public const string PriorityCode = "prioritycode";
			public const string ProcessId = "processid";
			public const string RegardingObjectId = "regardingobjectid";
			public const string ScheduledDurationMinutes = "scheduleddurationminutes";
			public const string ScheduledEnd = "scheduledend";
			public const string ScheduledStart = "scheduledstart";
			public const string SenderMailboxId = "sendermailboxid";
			public const string SentOn = "senton";
			public const string SeriesId = "seriesid";
			public const string SLAId = "slaid";
			public const string SLAInvokedId = "slainvokedid";
			public const string SortDate = "sortdate";
			public const string StageId = "stageid";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string Subject = "subject";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string TraversedPath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "activitypointer";

		public const int EntityTypeCode = 4200;

		[DebuggerNonUserCode()]
		public ActivityPointer()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActivityPointer(Guid ActivityPointerId)
		{
			Entity = new Entity(EntityLogicalName, ActivityPointerId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActivityPointer(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActivityPointer(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActivityPointer(Entity entity, Entity merge)
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
		public ActivityPointer(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Additional information provided by the external application as JSON. For internal use only.</para>
		/// <para>Memo - MaxLength: 8192</para>
		/// <para>Activity Additional Parameters</para>
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
		/// <para>All activity parties associated with this activity.</para>
		/// <para>ReadOnly - PartyList</para>
		/// <para>All Activity Parties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public System.Collections.Generic.List<ActivityParty> allparties
		{
			get
			{
				var data = new System.Collections.Generic.List<ActivityParty>();
				foreach (var item in Entity.GetAttributeValue<EntityCollection>(Fields.allparties).Entities)
					data.Add(new ActivityParty(item));
				return data;
			}
		}

		/// <summary>
		/// <para>Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.</para>
		/// <para>Picklist</para>
		/// <para>Social Channel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.Community? Community
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Community);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.Community)value.Value;
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
		/// <para>Date Created</para>
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
		/// <para>Date and time when the delivery of the activity was last attempted.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Date Delivery Last Attempted</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? DeliveryLastAttemptedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.DeliveryLastAttemptedOn); }
		}

		/// <summary>
		/// <para>Priority of delivery of the activity to the email server.</para>
		/// <para>Picklist</para>
		/// <para>Delivery Priority</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.DeliveryPriorityCode? DeliveryPriorityCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DeliveryPriorityCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.DeliveryPriorityCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DeliveryPriorityCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DeliveryPriorityCode] = null;
			}
		}

		/// <summary>
		/// <para>Description of the activity.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>The message id of activity which is returned from Exchange Server.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Exchange Item ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExchangeItemId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExchangeItemId); }
			set { Entity.Attributes[Fields.ExchangeItemId] = value; }
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the activitypointer with respect to the base currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Exchange Rate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}

		/// <summary>
		/// <para>Shows the web link of Activity of type email.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Exchange WebLink</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExchangeWebLink
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExchangeWebLink); }
			set { Entity.Attributes[Fields.ExchangeWebLink] = value; }
		}

		/// <summary>
		/// <para>Type of instance of a recurring series.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Recurring Instance Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.InstanceTypeCode? InstanceTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.InstanceTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.InstanceTypeCode)value.Value;
			}
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
		/// <para>For internal use only.</para>
		/// <para>Boolean</para>
		/// <para>Is Private</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsMapiPrivate
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsMapiPrivate); }
			set { Entity.Attributes[Fields.IsMapiPrivate] = value; }
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
		/// <para>Left the voice mail</para>
		/// <para>Boolean</para>
		/// <para>Left Voice Mail</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? LeftVoiceMail
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.LeftVoiceMail); }
			set { Entity.Attributes[Fields.LeftVoiceMail] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of user who last modified the activity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when activity was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Last Updated</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the activitypointer.</para>
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
		/// <para>Unique identifier of the user or team who owns the activity.</para>
		/// <para>Owner</para>
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
		/// <para>Unique identifier of the user that owns the activity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Delay activity processing until</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PostponeActivityProcessingUntilUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PostponeActivityProcessingUntil); }
		}

		/// <summary>
		/// <para>Priority of the activity.</para>
		/// <para>Picklist</para>
		/// <para>Priority</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.PriorityCode? PriorityCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PriorityCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.PriorityCode)value.Value;
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
		/// <para>Unique identifier of the object with which the activity is associated.</para>
		/// <para>Lookup to account;contact;interactionforemail;knowledgearticle;knowledgebaserecord</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
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
		/// <para>Unique identifier of the mailbox associated with the sender of the email message.</para>
		/// <para>ReadOnly - Lookup to mailbox</para>
		/// <para>Sender's Mailbox</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SenderMailboxId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SenderMailboxId); }
		}

		/// <summary>
		/// <para>Date and time when the activity was sent.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Date Sent</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? SentOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.SentOn); }
		}

		/// <summary>
		/// <para>Uniqueidentifier specifying the id of recurring series of an instance.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Series Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SeriesId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SeriesId); }
		}

		/// <summary>
		/// <para>Choose the service level agreement (SLA) that you want to apply to the case record.</para>
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
		/// <para>Last SLA that was applied to this case. This field is for internal use only.</para>
		/// <para>ReadOnly - Lookup to sla</para>
		/// <para>Last SLA applied</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SLAInvokedId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SLAInvokedId); }
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
		/// <para>Status of the activity.</para>
		/// <para>State</para>
		/// <para>Activity Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.StateCode)value.Value;
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
		/// <para>Reason for the status of the activity.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPointerOptionSets.StatusCode)value.Value;
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
		/// <para>Required - String - MaxLength: 400</para>
		/// <para>Subject</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Subject
		{
			get { return Entity.GetAttributeValue<string>(Fields.Subject); }
			set { Entity.Attributes[Fields.Subject] = value; }
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
		/// <para>Unique identifier of the currency associated with the activitypointer.</para>
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
		/// <para>Version number of the activity.</para>
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
