﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets
{
	public enum msdyn_ActionType
	{
		/// <summary>
		/// Approve = 192350003
		/// </summary>
		Approve = 192350003,
		/// <summary>
		/// Cancel = 192350004
		/// </summary>
		Cancel = 192350004,
		/// <summary>
		/// Recall = 192350002
		/// </summary>
		Recall = 192350002,
		/// <summary>
		/// Reject = 192350001
		/// </summary>
		Reject = 192350001,
		/// <summary>
		/// Submit = 192350000
		/// </summary>
		Submit = 192350000,
		/// <summary>
		/// Unknown = 192350999
		/// </summary>
		Unknown = 192350999
	}

	public enum msdyn_EntryType
	{
		/// <summary>
		/// Expense = 192350001
		/// </summary>
		Expense = 192350001,
		/// <summary>
		/// Time = 192350000
		/// </summary>
		Time = 192350000
	}

	public enum msdyn_TargetStatus
	{
		/// <summary>
		/// Approved = 192350002
		/// </summary>
		Approved = 192350002,
		/// <summary>
		/// Draft = 192350000
		/// </summary>
		Draft = 192350000,
		/// <summary>
		/// Recall Requested = 192350004
		/// </summary>
		Recall_Requested = 192350004,
		/// <summary>
		/// Rejected = 192350003
		/// </summary>
		Rejected = 192350003,
		/// <summary>
		/// Submitted = 192350001
		/// </summary>
		Submitted = 192350001,
		/// <summary>
		/// Unknown = 192350999
		/// </summary>
		Unknown = 192350999
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
		/// Completed = 192350004
		/// </summary>
		Completed = 192350004,
		/// <summary>
		/// Failed = 192350003
		/// </summary>
		Failed = 192350003,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2,
		/// <summary>
		/// Partially Completed = 192350002
		/// </summary>
		Partially_Completed = 192350002,
		/// <summary>
		/// Processing = 192350001
		/// </summary>
		Processing = 192350001,
		/// <summary>
		/// Queued = 192350000
		/// </summary>
		Queued = 192350000
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_approvalset : EntityBase
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
			public const string msdyn_ActionType = "msdyn_actiontype";
			public const string msdyn_approvalsetId = "msdyn_approvalsetid";
			public const string msdyn_Approver = "msdyn_approver";
			public const string msdyn_Description = "msdyn_description";
			public const string msdyn_EntryType = "msdyn_entrytype";
			public const string msdyn_LifeTime = "msdyn_lifetime";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_Project = "msdyn_project";
			public const string msdyn_SystemJobId = "msdyn_systemjobid";
			public const string msdyn_TargetStatus = "msdyn_targetstatus";
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

		public const string EntityLogicalName = "msdyn_approvalset";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10570;

		[DebuggerNonUserCode()]
		public msdyn_approvalset()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_approvalset(Guid msdyn_approvalsetId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_approvalsetId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_approvalset(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_approvalset(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_approvalset(Entity entity, Entity merge)
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
		public msdyn_approvalset(KeyAttributeCollection keys)
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
		/// <para>Picklist</para>
		/// <para>Action Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_ActionType? msdyn_ActionType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_ActionType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_ActionType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_ActionType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_ActionType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Approval Set</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_approvalsetId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_approvalsetId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>The approver that approves the approval set.</para>
		/// <para>Lookup to systemuser</para>
		/// <para>Approver</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Approver
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Approver); }
			set { Entity.Attributes[Fields.msdyn_Approver] = value; }
		}

		/// <summary>
		/// <para>The description of the custom entity.</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Description); }
			set { Entity.Attributes[Fields.msdyn_Description] = value; }
		}

		/// <summary>
		/// <para>Shows the entry type of the project approvals.</para>
		/// <para>Picklist</para>
		/// <para>Entry Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_EntryType? msdyn_EntryType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_EntryType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_EntryType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_EntryType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_EntryType] = null;
			}
		}

		/// <summary>
		/// <para>Number of times this Project Approval Set can be retried.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 10,000</para>
		/// <para>Life Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_LifeTime
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_LifeTime); }
			set { Entity.Attributes[Fields.msdyn_LifeTime] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Shows the project for the approval set.</para>
		/// <para>Lookup to msdyn_project</para>
		/// <para>Project</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Project
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Project); }
			set { Entity.Attributes[Fields.msdyn_Project] = value; }
		}

		/// <summary>
		/// <para>Shows the latest system job that ran the project approval set.</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>System Job Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SystemJobId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SystemJobId); }
			set { Entity.Attributes[Fields.msdyn_SystemJobId] = value; }
		}

		/// <summary>
		/// <para>The target status for each of the approval items in the set.</para>
		/// <para>Picklist</para>
		/// <para>Target Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_TargetStatus? msdyn_TargetStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_TargetStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.msdyn_TargetStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_TargetStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_TargetStatus] = null;
			}
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
		/// <para>Owner Id</para>
		/// <para>Lookup to systemuser, team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the business unit that owns the record</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Status of the Approval Set</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Approval Set</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_approvalsetOptionSets.statuscode)value.Value;
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