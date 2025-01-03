﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_systemuser_msdyn_omnichannelqueueOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_systemuser_msdyn_omnichannelqueue : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_omnichannelqueueid = "msdyn_omnichannelqueueid";
			public const string msdyn_systemuser_msdyn_omnichannelqueueId = "msdyn_systemuser_msdyn_omnichannelqueueid";
			public const string systemuserid = "systemuserid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_systemuser_msdyn_omnichannelqueue";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10791;

		[DebuggerNonUserCode()]
		public msdyn_systemuser_msdyn_omnichannelqueue()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_systemuser_msdyn_omnichannelqueue(Guid msdyn_systemuser_msdyn_omnichannelqueueId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_systemuser_msdyn_omnichannelqueueId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_systemuser_msdyn_omnichannelqueue(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_systemuser_msdyn_omnichannelqueue(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_systemuser_msdyn_omnichannelqueue(Entity entity, Entity merge)
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
		public msdyn_systemuser_msdyn_omnichannelqueue(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_omnichannelqueueid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_omnichannelqueueid); }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_systemuser_msdyn_omnichannelqueueId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? systemuserid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.systemuserid); }
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
