﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.TraceRegardingOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class TraceRegarding : EntityBase
	{
		public struct Fields
		{
			public const string RegardingObjectId = "regardingobjectid";
			public const string RegardingObjectOwnerId = "regardingobjectownerid";
			public const string RegardingObjectOwningBusinessUnit = "regardingobjectowningbusinessunit";
			public const string TraceRegardingId = "traceregardingid";
		}

		public const string EntityLogicalName = "traceregarding";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 8052;

		[DebuggerNonUserCode()]
		public TraceRegarding()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TraceRegarding(Guid TraceRegardingId)
		{
			Entity = new Entity(EntityLogicalName, TraceRegardingId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TraceRegarding(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TraceRegarding(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TraceRegarding(Entity entity, Entity merge)
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
		public TraceRegarding(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the regarding object.</para>
		/// <para>Lookup to emailserverprofile;mailbox</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the regarding object.</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectOwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectOwnerId); }
			set { Entity.Attributes[Fields.RegardingObjectOwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit that owns the regarding object.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectOwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectOwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the trace-regarding record.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Trace Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid TraceRegardingId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.TraceRegardingId] = value;
				Entity.Id = value;
			}
		}
	}
}