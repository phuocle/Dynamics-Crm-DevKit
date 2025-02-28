﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_msdyn_liveworkstream_systemuserOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_msdyn_liveworkstream_systemuser : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_liveworkstreamid = "msdyn_liveworkstreamid";
			public const string msdyn_msdyn_liveworkstream_systemuserId = "msdyn_msdyn_liveworkstream_systemuserid";
			public const string systemuserid = "systemuserid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_msdyn_liveworkstream_systemuser";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10809;

		[DebuggerNonUserCode()]
		public msdyn_msdyn_liveworkstream_systemuser()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_liveworkstream_systemuser(Guid msdyn_msdyn_liveworkstream_systemuserId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_msdyn_liveworkstream_systemuserId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_liveworkstream_systemuser(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_liveworkstream_systemuser(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_liveworkstream_systemuser(Entity entity, Entity merge)
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
		public msdyn_msdyn_liveworkstream_systemuser(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_liveworkstreamid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_liveworkstreamid); }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_msdyn_liveworkstream_systemuserId
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
