﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ReplicationBacklogOptionSets
{
	public enum ReplicationBacklogType
	{
		/// <summary>
		/// Create = 0
		/// </summary>
		Create = 0,
		/// <summary>
		/// Delete = 2
		/// </summary>
		Delete = 2,
		/// <summary>
		/// Update = 1
		/// </summary>
		Update = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ReplicationBacklog : EntityBase
	{
		public struct Fields
		{
			public const string Data = "data";
			public const string ReplicationBacklogId = "replicationbacklogid";
			public const string ReplicationBacklogType = "replicationbacklogtype";
			public const string TargetDatacenterId = "targetdatacenterid";
			public const string TargetObjectId = "targetobjectid";
		}

		public const string EntityLogicalName = "replicationbacklog";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1140;

		[DebuggerNonUserCode()]
		public ReplicationBacklog()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReplicationBacklog(Guid ReplicationBacklogId)
		{
			Entity = new Entity(EntityLogicalName, ReplicationBacklogId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReplicationBacklog(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReplicationBacklog(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ReplicationBacklog(Entity entity, Entity merge)
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
		public ReplicationBacklog(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Additional data related to the replication backlog entry. For internal use only.</para>
		/// <para>ReadOnly - String - MaxLength: 1073741823</para>
		/// <para>Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Data
		{
			get { return Entity.GetAttributeValue<string>(Fields.Data); }
		}

		/// <summary>
		/// <para>Unique identifier of the replication backlog entry.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ReplicationBacklogId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>The type of replication backlog.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Replication Backlog Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ReplicationBacklogOptionSets.ReplicationBacklogType? ReplicationBacklogType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ReplicationBacklogType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ReplicationBacklogOptionSets.ReplicationBacklogType)value.Value;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Target Data Center Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TargetDatacenterId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TargetDatacenterId); }
		}

		/// <summary>
		/// <para>Unique identifier of the target object</para>
		/// <para>ReadOnly - Lookup to report</para>
		/// <para>Target Object Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TargetObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TargetObjectId); }
		}
	}
}
