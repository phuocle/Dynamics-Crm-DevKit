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
namespace Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets
{
	public enum msdynmkt_type
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: OnDemand</para>
		/// <para><strong>Value</strong>: 723,270,000</para>
		/// </summary>
		OnDemand = 723_270_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Scheduled</para>
		/// <para><strong>Value</strong>: 723,270,001</para>
		/// </summary>
		Scheduled = 723_270_001
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
		/// <para><strong>Display Name</strong>: Failed</para>
		/// <para><strong>Value</strong>: 723,270,003</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Failed = 723_270_003,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: InProgress</para>
		/// <para><strong>Value</strong>: 723,270,001</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		InProgress = 723_270_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: NotStarted</para>
		/// <para><strong>Value</strong>: 723,270,000</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		NotStarted = 723_270_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Skipped</para>
		/// <para><strong>Value</strong>: 723,270,005</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Skipped = 723_270_005,
		/// <summary>
		/// <para><strong>Display Name</strong>: Succeeded</para>
		/// <para><strong>Value</strong>: 723,270,002</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Succeeded = 723_270_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: TimedOut</para>
		/// <para><strong>Value</strong>: 723,270,004</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		TimedOut = 723_270_004
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdynmkt_segmentexecution : EntityBase
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
			public const string msdynmkt_finishedon = "msdynmkt_finishedon";
			public const string msdynmkt_membershipcount = "msdynmkt_membershipcount";
			public const string msdynmkt_name = "msdynmkt_name";
			public const string msdynmkt_segmentdefinitionid = "msdynmkt_segmentdefinitionid";
			public const string msdynmkt_segmentexecutionId = "msdynmkt_segmentexecutionid";
			public const string msdynmkt_startedon = "msdynmkt_startedon";
			public const string msdynmkt_type = "msdynmkt_type";
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
		public const string EntityLogicalName = "msdynmkt_segmentexecution";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11257;
		public const string EntityCollectionSchemaName = "msdynmkt_segmentexecutions";
		public const string EntityDisplayCollectionName = "Segment Executions";
		public const string DisplayName = "Segment Execution";
		public const string EntitySetName = "msdynmkt_segmentexecutions";
		public const string EntityLogicalCollectionName = "msdynmkt_segmentexecutions";
		public const string EntityPrimaryIdAttribute = "msdynmkt_segmentexecutionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdynmkt_name";
		public const string EntitySchemaName = "msdynmkt_segmentexecution";
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution(Guid msdynmkt_segmentexecutionId)
		{
			Entity = new Entity(EntityLogicalName, msdynmkt_segmentexecutionId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_segmentexecution"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_segmentexecution"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_segmentexecution(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdynmkt_segmentexecution"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_segmentexecution(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_segmentexecution(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdynmkt_segmentexecution(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Finished On</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdynmkt_finishedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdynmkt_finishedon); }
			set { Entity.Attributes[Fields.msdynmkt_finishedon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Membership Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdynmkt_membershipcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdynmkt_membershipcount); }
			set { Entity.Attributes[Fields.msdynmkt_membershipcount] = value; }
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
		/// <para><strong>Display Name</strong>: Segment Definition Id</para>
		/// <para><strong>Description</strong>: Reference to Segment Definition</para>
		/// <para><strong>Lookup</strong>: <see cref="msdynmkt_segmentdefinition"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdynmkt_segmentdefinitionid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdynmkt_segmentdefinitionid); }
			set { Entity.Attributes[Fields.msdynmkt_segmentdefinitionid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Segment Execution Id</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdynmkt_segmentexecutionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdynmkt_segmentexecutionId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Started On</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdynmkt_startedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdynmkt_startedon); }
			set { Entity.Attributes[Fields.msdynmkt_startedon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.msdynmkt_type"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.msdynmkt_type? msdynmkt_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.msdynmkt_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_type] = null;
			}
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
		/// <para><strong>Description</strong>: Status of the Segment Execution</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the Segment Execution</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_segmentexecutionOptionSets.statuscode)value.Value;
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