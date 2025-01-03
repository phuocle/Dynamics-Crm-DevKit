﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:40
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets
{
	public enum msdynmkt_state
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Audience</para>
		/// <para><strong>Value</strong>: 534,120,002</para>
		/// </summary>
		Audience = 534_120_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: Email</para>
		/// <para><strong>Value</strong>: 534,120,001</para>
		/// </summary>
		Email = 534_120_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Review</para>
		/// <para><strong>Value</strong>: 534,120,004</para>
		/// </summary>
		Review = 534_120_004,
		/// <summary>
		/// <para><strong>Display Name</strong>: Template</para>
		/// <para><strong>Value</strong>: 534,120,000</para>
		/// </summary>
		Template = 534_120_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Time</para>
		/// <para><strong>Value</strong>: 534,120,003</para>
		/// </summary>
		Time = 534_120_003
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
	public partial class msdynmkt_teamsengagement : EntityBase
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
			public const string msdynmkt_audiencechoice = "msdynmkt_audiencechoice";
			public const string msdynmkt_audienceparameters = "msdynmkt_audienceparameters";
			public const string msdynmkt_audiencesegment = "msdynmkt_audiencesegment";
			public const string msdynmkt_audiencetype = "msdynmkt_audiencetype";
			public const string msdynmkt_deliverytime = "msdynmkt_deliverytime";
			public const string msdynmkt_Email = "msdynmkt_email";
			public const string msdynmkt_engagementjourney = "msdynmkt_engagementjourney";
			public const string msdynmkt_name = "msdynmkt_name";
			public const string msdynmkt_sourcetemplateid = "msdynmkt_sourcetemplateid";
			public const string msdynmkt_state = "msdynmkt_state";
			public const string msdynmkt_teamsengagementId = "msdynmkt_teamsengagementid";
			public const string msdynmkt_timingchoice = "msdynmkt_timingchoice";
			public const string msdynmkt_timingparameters = "msdynmkt_timingparameters";
			public const string msdynmkt_virtualeventid = "msdynmkt_virtualeventid";
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
		public const string EntityLogicalName = "msdynmkt_teamsengagement";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11345;
		public const string EntityCollectionSchemaName = "msdynmkt_teamsengagements";
		public const string EntityDisplayCollectionName = "Teams Engagements";
		public const string DisplayName = "Teams Engagement";
		public const string EntitySetName = "msdynmkt_teamsengagements";
		public const string EntityLogicalCollectionName = "msdynmkt_teamsengagements";
		public const string EntityPrimaryIdAttribute = "msdynmkt_teamsengagementid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdynmkt_name";
		public const string EntitySchemaName = "msdynmkt_teamsengagement";
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement(Guid msdynmkt_teamsengagementId)
		{
			Entity = new Entity(EntityLogicalName, msdynmkt_teamsengagementId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_teamsengagement"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_teamsengagement"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_teamsengagement(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdynmkt_teamsengagement"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_teamsengagement(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_teamsengagement(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdynmkt_teamsengagement(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Audience Choice</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_audiencechoice
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_audiencechoice); }
			set { Entity.Attributes[Fields.msdynmkt_audiencechoice] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Audience Parameters</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_audienceparameters
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_audienceparameters); }
			set { Entity.Attributes[Fields.msdynmkt_audienceparameters] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Audience Segment</para>
		/// <para><strong>Lookup</strong>: <see cref="msdynmkt_segment"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdynmkt_audiencesegment
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdynmkt_audiencesegment); }
			set { Entity.Attributes[Fields.msdynmkt_audiencesegment] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Audience Type</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_audiencetype
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_audiencetype); }
			set { Entity.Attributes[Fields.msdynmkt_audiencetype] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Delivery Time</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_deliverytime
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_deliverytime); }
			set { Entity.Attributes[Fields.msdynmkt_deliverytime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Engagement Email</para>
		/// <para><strong>Lookup</strong>: <see cref="msdynmkt_email"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdynmkt_Email
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdynmkt_Email); }
			set { Entity.Attributes[Fields.msdynmkt_Email] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Engagement Journey</para>
		/// <para><strong>Lookup</strong>: <see cref="msdynmkt_journey"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdynmkt_engagementjourney
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdynmkt_engagementjourney); }
			set { Entity.Attributes[Fields.msdynmkt_engagementjourney] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_name); }
			set { Entity.Attributes[Fields.msdynmkt_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source Template Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_sourcetemplateid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_sourcetemplateid); }
			set { Entity.Attributes[Fields.msdynmkt_sourcetemplateid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Completion State</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.msdynmkt_state"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.msdynmkt_state? msdynmkt_state
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_state);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.msdynmkt_state)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_state] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_state] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: teamsengagement</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdynmkt_teamsengagementId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdynmkt_teamsengagementId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Timing Parameters</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_timingchoice
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_timingchoice); }
			set { Entity.Attributes[Fields.msdynmkt_timingchoice] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Timing Parameters</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_timingparameters
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_timingparameters); }
			set { Entity.Attributes[Fields.msdynmkt_timingparameters] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Virtual Event Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_virtualeventid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_virtualeventid); }
			set { Entity.Attributes[Fields.msdynmkt_virtualeventid] = value; }
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
		/// <para><strong>Display Name</strong>: Business Unit</para>
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
		/// <para><strong>Description</strong>: Status of the Teams engagement</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the Teams engagement</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_teamsengagementOptionSets.statuscode)value.Value;
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