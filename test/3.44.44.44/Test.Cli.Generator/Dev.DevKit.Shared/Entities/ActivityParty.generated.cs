﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:44:32
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.ActivityPartyOptionSets
{
	public enum InstanceTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Not Recurring</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Not_Recurring = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Recurring Exception</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Recurring_Exception = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Recurring Future Exception</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Recurring_Future_Exception = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Recurring Instance</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Recurring_Instance = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Recurring Master</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Recurring_Master = 1
	}
	public enum ParticipationTypeMask
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: BCC Recipient</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		BCC_Recipient = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: CC Recipient</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		CC_Recipient = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Chat Participant</para>
		/// <para><strong>Value</strong>: 12</para>
		/// </summary>
		Chat_Participant = 12,
		/// <summary>
		/// <para><strong>Display Name</strong>: Customer</para>
		/// <para><strong>Value</strong>: 11</para>
		/// </summary>
		Customer = 11,
		/// <summary>
		/// <para><strong>Display Name</strong>: Optional attendee</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Optional_attendee = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Organizer</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Organizer = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		Owner = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Regarding</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Regarding = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: Related</para>
		/// <para><strong>Value</strong>: 13</para>
		/// </summary>
		Related = 13,
		/// <summary>
		/// <para><strong>Display Name</strong>: Required attendee</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Required_attendee = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Resource</para>
		/// <para><strong>Value</strong>: 10</para>
		/// </summary>
		Resource = 10,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sender</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Sender = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: To Recipient</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		To_Recipient = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ActivityParty : EntityBase
	{
		public struct Fields
		{
			public const string ActivityId = "activityid";
			public const string ActivityPartyId = "activitypartyid";
			public const string AddressUsed = "addressused";
			public const string AddressUsedEmailColumnNumber = "addressusedemailcolumnnumber";
			public const string DoNotEmail = "donotemail";
			public const string DoNotFax = "donotfax";
			public const string DoNotPhone = "donotphone";
			public const string DoNotPostalMail = "donotpostalmail";
			public const string Effort = "effort";
			public const string ExchangeEntryId = "exchangeentryid";
			public const string ExternalId = "externalid";
			public const string ExternalIdType = "externalidtype";
			public const string InstanceTypeCode = "instancetypecode";
			public const string IsPartyDeleted = "ispartydeleted";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningUser = "owninguser";
			public const string ParticipationTypeMask = "participationtypemask";
			public const string PartyId = "partyid";
			public const string ResourceSpecId = "resourcespecid";
			public const string ScheduledEnd = "scheduledend";
			public const string ScheduledStart = "scheduledstart";
			public const string UnresolvedPartyName = "unresolvedpartyname";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "activityparty";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 135;
		public const string EntityCollectionSchemaName = "ActivityParties";
		public const string EntityDisplayCollectionName = "Activity Parties";
		public const string DisplayName = "Activity Party";
		public const string EntitySetName = "activityparties";
		public const string EntityLogicalCollectionName = "activityparties";
		public const string EntityPrimaryIdAttribute = "activitypartyid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "partyidname";
		public const string EntitySchemaName = "ActivityParty";
		[DebuggerNonUserCode()]
		public ActivityParty()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ActivityParty(Guid ActivityPartyId)
		{
			Entity = new Entity(EntityLogicalName, ActivityPartyId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ActivityParty(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ActivityParty"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public ActivityParty(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ActivityParty"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ActivityParty(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ActivityParty(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ActivityParty"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ActivityParty(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ActivityParty(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ActivityParty(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Activity</para>
		/// <para><strong>Description</strong>: Unique identifier of the activity associated with the activity party. (A &quot;party&quot; is any person who is associated with an activity.)</para>
		/// <para><strong>Lookup</strong>: <see cref="activitypointer"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ActivityId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ActivityId); }
			set { Entity.Attributes[Fields.ActivityId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Activity Party</para>
		/// <para><strong>Description</strong>: Unique identifier of the activity party.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ActivityPartyId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ActivityPartyId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Address</para>
		/// <para><strong>Description</strong>: Email address to which an email is delivered, and which is associated with the target entity.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 320</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AddressUsed
		{
			get { return Entity.GetAttributeValue<string>(Fields.AddressUsed); }
			set { Entity.Attributes[Fields.AddressUsed] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email column number of party</para>
		/// <para><strong>Description</strong>: Email address column number from associated party.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AddressUsedEmailColumnNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AddressUsedEmailColumnNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Do not allow Emails</para>
		/// <para><strong>Description</strong>: Information about whether to allow sending email to the activity party.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Do Not Allow</strong>]: true - [<strong>Allow</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Allow</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? DoNotEmail
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.DoNotEmail); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Do not allow Faxes</para>
		/// <para><strong>Description</strong>: Information about whether to allow sending faxes to the activity party.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Do Not Allow</strong>]: true - [<strong>Allow</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Allow</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? DoNotFax
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.DoNotFax); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Do not allow Phone Calls</para>
		/// <para><strong>Description</strong>: Information about whether to allow phone calls to the lead.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Do Not Allow</strong>]: true - [<strong>Allow</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Allow</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? DoNotPhone
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.DoNotPhone); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Do not allow Postal Mails</para>
		/// <para><strong>Description</strong>: Information about whether to allow sending postal mail to the lead.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Do Not Allow</strong>]: true - [<strong>Allow</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Allow</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? DoNotPostalMail
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.DoNotPostalMail); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Effort</para>
		/// <para><strong>Description</strong>: Amount of effort used by the resource in a service appointment activity.</para>
		/// <para><strong>Decimal Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? Effort
		{
			get { return Entity.GetAttributeValue<double?>(Fields.Effort); }
			set { Entity.Attributes[Fields.Effort] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Exchange Entry</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,024</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExchangeEntryId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExchangeEntryId); }
			set { Entity.Attributes[Fields.ExchangeEntryId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External Id</para>
		/// <para><strong>Description</strong>: The external id used when the party does not have an email address.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExternalId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExternalId); }
			set { Entity.Attributes[Fields.ExternalId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External Id Type</para>
		/// <para><strong>Description</strong>: The external id type used when the party does not have an email address.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExternalIdType
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExternalIdType); }
			set { Entity.Attributes[Fields.ExternalIdType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Appointment Type</para>
		/// <para><strong>Description</strong>: Type of instance of a recurring series.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.InstanceTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.InstanceTypeCode.Not_Recurring"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.InstanceTypeCode? InstanceTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.InstanceTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.InstanceTypeCode)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Party Deleted</para>
		/// <para><strong>Description</strong>: Information about whether the underlying entity record is deleted.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPartyDeleted
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPartyDeleted); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Unique identifier of the user or team who owns the activity_party.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningUser
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Participation Type</para>
		/// <para><strong>Description</strong>: Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.ParticipationTypeMask"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.ParticipationTypeMask? ParticipationTypeMask
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ParticipationTypeMask);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityPartyOptionSets.ParticipationTypeMask)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ParticipationTypeMask] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ParticipationTypeMask] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Party</para>
		/// <para><strong>Description</strong>: Unique identifier of the party associated with the activity.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="bulkoperation"/>, <see cref="campaign"/>, <see cref="campaignactivity"/>, <see cref="contact"/>, <see cref="contract"/>, <see cref="entitlement"/>, <see cref="equipment"/>, <see cref="incident"/>, <see cref="invoice"/>, <see cref="knowledgearticle"/>, <see cref="lead"/>, <see cref="msdyn_salessuggestion"/>, <see cref="opportunity"/>, <see cref="queue"/>, <see cref="quote"/>, <see cref="salesorder"/>, <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PartyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PartyId); }
			set { Entity.Attributes[Fields.PartyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Resource Specification</para>
		/// <para><strong>Description</strong>: Unique identifier of the resource specification for the activity party.</para>
		/// <para><strong>Lookup</strong>: <see cref="resourcespec"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ResourceSpecId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ResourceSpecId); }
			set { Entity.Attributes[Fields.ResourceSpecId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Scheduled End</para>
		/// <para><strong>Description</strong>: Scheduled end time of the activity.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ScheduledEndUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ScheduledEnd); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Scheduled Start</para>
		/// <para><strong>Description</strong>: Scheduled start time of the activity.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ScheduledStartUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ScheduledStart); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Unresolved Party Name</para>
		/// <para><strong>Description</strong>: The name of the party to be used when the party is not resolved to an entity.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UnresolvedPartyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UnresolvedPartyName); }
			set { Entity.Attributes[Fields.UnresolvedPartyName] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}