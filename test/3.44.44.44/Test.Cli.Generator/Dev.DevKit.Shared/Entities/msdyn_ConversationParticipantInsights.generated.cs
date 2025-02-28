﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:34
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets
{
	public enum msdyn_ParticipantRole
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Agent</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Agent = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Customer</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Customer = 1
	}
	public enum msdyn_ParticipationMethod
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Callee</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Callee = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Caller</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Caller = 192_350_000
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_ConversationParticipantInsights : EntityBase
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
			public const string msdyn_AadId = "msdyn_aadid";
			public const string msdyn_AvgPauseBeforeSpeakingInMS = "msdyn_avgpausebeforespeakinginms";
			public const string msdyn_ChannelIndex = "msdyn_channelindex";
			public const string msdyn_ConversationAggregatedInsights = "msdyn_conversationaggregatedinsights";
			public const string msdyn_ConversationParticipantInsightsId = "msdyn_conversationparticipantinsightsid";
			public const string msdyn_DisplayName = "msdyn_displayname";
			public const string msdyn_Email = "msdyn_email";
			public const string msdyn_LongestMonologueInMS = "msdyn_longestmonologueinms";
			public const string msdyn_Name = "msdyn_name";
			public const string msdyn_ParticipantId = "msdyn_participantid";
			public const string msdyn_ParticipantRole = "msdyn_participantrole";
			public const string msdyn_ParticipationMethod = "msdyn_participationmethod";
			public const string msdyn_PhoneNumber = "msdyn_phonenumber";
			public const string msdyn_SwitchCount = "msdyn_switchcount";
			public const string msdyn_TalkingSpeedWordsPerMin = "msdyn_talkingspeedwordspermin";
			public const string msdyn_TalkToListenRatio = "msdyn_talktolistenratio";
			public const string msdyn_TenantId = "msdyn_tenantid";
			public const string msdyn_User = "msdyn_user";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_conversationparticipantinsights";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10770;
		public const string EntityCollectionSchemaName = "msdyn_ConversationParticipantInsightses";
		public const string EntityDisplayCollectionName = "Conversation Participant Insights";
		public const string DisplayName = "Conversation Participant Insights";
		public const string EntitySetName = "msdyn_conversationparticipantinsights";
		public const string EntityLogicalCollectionName = "msdyn_conversationparticipantinsightses";
		public const string EntityPrimaryIdAttribute = "msdyn_conversationparticipantinsightsid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_ConversationParticipantInsights";
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights(Guid msdyn_ConversationParticipantInsightsId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_ConversationParticipantInsightsId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ConversationParticipantInsights"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ConversationParticipantInsights"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ConversationParticipantInsights(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_ConversationParticipantInsights"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ConversationParticipantInsights(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ConversationParticipantInsights(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_ConversationParticipantInsights(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: AadId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 36</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_AadId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_AadId); }
			set { Entity.Attributes[Fields.msdyn_AadId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: AvgPauseBeforeSpeakingInMS</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_AvgPauseBeforeSpeakingInMS
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_AvgPauseBeforeSpeakingInMS); }
			set { Entity.Attributes[Fields.msdyn_AvgPauseBeforeSpeakingInMS] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ChannelIndex</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ChannelIndex
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ChannelIndex); }
			set { Entity.Attributes[Fields.msdyn_ChannelIndex] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ConversationAggregatedInsights</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyn_conversationaggregatedinsights"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_ConversationAggregatedInsights
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_ConversationAggregatedInsights); }
			set { Entity.Attributes[Fields.msdyn_ConversationAggregatedInsights] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ConversationParticipantInsights</para>
		/// <para><strong>Description</strong>: Unique identifier for conversation participant insights</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_ConversationParticipantInsightsId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_ConversationParticipantInsightsId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: DisplayName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DisplayName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DisplayName); }
			set { Entity.Attributes[Fields.msdyn_DisplayName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Email
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Email); }
			set { Entity.Attributes[Fields.msdyn_Email] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: LongestMonologueInMS</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_LongestMonologueInMS
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_LongestMonologueInMS); }
			set { Entity.Attributes[Fields.msdyn_LongestMonologueInMS] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Name); }
			set { Entity.Attributes[Fields.msdyn_Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ParticipantId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ParticipantId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ParticipantId); }
			set { Entity.Attributes[Fields.msdyn_ParticipantId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Participant Role</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipantRole"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipantRole? msdyn_ParticipantRole
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_ParticipantRole);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipantRole)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_ParticipantRole] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_ParticipantRole] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ParticipationMethod</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipationMethod"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipationMethod? msdyn_ParticipationMethod
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_ParticipationMethod);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.msdyn_ParticipationMethod)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_ParticipationMethod] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_ParticipationMethod] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PhoneNumber</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_PhoneNumber
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_PhoneNumber); }
			set { Entity.Attributes[Fields.msdyn_PhoneNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SwitchCount</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_SwitchCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_SwitchCount); }
			set { Entity.Attributes[Fields.msdyn_SwitchCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TalkingSpeedWordsPerMin</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_TalkingSpeedWordsPerMin
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_TalkingSpeedWordsPerMin); }
			set { Entity.Attributes[Fields.msdyn_TalkingSpeedWordsPerMin] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TalkToListenRatio</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_TalkToListenRatio
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_TalkToListenRatio); }
			set { Entity.Attributes[Fields.msdyn_TalkToListenRatio] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TenantId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 36</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TenantId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TenantId); }
			set { Entity.Attributes[Fields.msdyn_TenantId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="contact"/>, <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_User
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_User); }
			set { Entity.Attributes[Fields.msdyn_User] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner Id</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the ConversationParticipantInsights</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the ConversationParticipantInsights</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ConversationParticipantInsightsOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time Zone Rule Version Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version Number</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}