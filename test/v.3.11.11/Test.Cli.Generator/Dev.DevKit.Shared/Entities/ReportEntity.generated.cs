﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ReportEntityOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted Unpublished = 3
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// Published = 0
		/// </summary>
		Published = 0,
		/// <summary>
		/// Unpublished = 1
		/// </summary>
		Unpublished = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ReportEntity : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsFilterable = "isfilterable";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningUser = "owninguser";
			public const string ReportEntityId = "reportentityid";
			public const string ReportEntityIdUnique = "reportentityidunique";
			public const string ReportId = "reportid";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "reportentity";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9101;

		[DebuggerNonUserCode()]
		public ReportEntity()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReportEntity(Guid ReportEntityId)
		{
			Entity = new Entity(EntityLogicalName, ReportEntityId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReportEntity(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReportEntity(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReportEntity(Entity entity, Entity merge)
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
		public ReportEntity(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ReportEntityOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ReportEntityOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the report record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the report record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the reportentity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Unique identifier of the data import or data migration that created this record.</para>
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
		/// <para>Information about whether the report is filterable.</para>
		/// <para>Boolean</para>
		/// <para>Filterable</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsFilterable
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsFilterable); }
			set { Entity.Attributes[Fields.IsFilterable] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Boolean</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the report record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the report record was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the reportentity.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the report entity.</para>
		/// <para>ReadOnly - Required - Lookup to systemuser, team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit that owns the report record.</para>
		/// <para>ReadOnly - Required - Uniqueidentifier</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns the report record.</para>
		/// <para>ReadOnly - Required - Uniqueidentifier</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningUser
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Unique identifier of the report record.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Report Related Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ReportEntityId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ReportEntityId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ReportEntityIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ReportEntityIdUnique); }
		}

		/// <summary>
		/// <para>Unique identifier of the report.</para>
		/// <para>Lookup to report</para>
		/// <para>Report</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ReportId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ReportId); }
			set { Entity.Attributes[Fields.ReportId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the associated solution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}