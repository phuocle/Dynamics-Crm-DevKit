﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyusd_task_agentscriptactionOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyusd_task_agentscriptaction : EntityBase
	{
		public struct Fields
		{
			public const string msdyusd_agentscriptactionid = "msdyusd_agentscriptactionid";
			public const string msdyusd_task_agentscriptactionId = "msdyusd_task_agentscriptactionid";
			public const string msdyusd_taskid = "msdyusd_taskid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyusd_task_agentscriptaction";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10864;

		[DebuggerNonUserCode()]
		public msdyusd_task_agentscriptaction()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_task_agentscriptaction(Guid msdyusd_task_agentscriptactionId)
		{
			Entity = new Entity(EntityLogicalName, msdyusd_task_agentscriptactionId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_task_agentscriptaction(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_task_agentscriptaction(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_task_agentscriptaction(Entity entity, Entity merge)
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
		public msdyusd_task_agentscriptaction(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyusd_agentscriptactionid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyusd_agentscriptactionid); }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyusd_task_agentscriptactionId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyusd_taskid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyusd_taskid); }
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