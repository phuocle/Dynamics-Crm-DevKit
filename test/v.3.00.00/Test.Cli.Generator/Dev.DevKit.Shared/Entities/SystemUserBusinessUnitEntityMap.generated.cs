﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SystemUserBusinessUnitEntityMapOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class SystemUserBusinessUnitEntityMap : EntityBase
	{
		public struct Fields
		{
			public const string BusinessUnitId = "businessunitid";
			public const string ReadPrivilegeDepth = "readprivilegedepth";
			public const string SystemUserBusinessUnitEntityMapId = "systemuserbusinessunitentitymapid";
			public const string SystemUserId = "systemuserid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "systemuserbusinessunitentitymap";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 42;

		[DebuggerNonUserCode()]
		public SystemUserBusinessUnitEntityMap()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserBusinessUnitEntityMap(Guid SystemUserBusinessUnitEntityMapId)
		{
			Entity = new Entity(EntityLogicalName, SystemUserBusinessUnitEntityMapId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserBusinessUnitEntityMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserBusinessUnitEntityMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserBusinessUnitEntityMap(Entity entity, Entity merge)
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
		public SystemUserBusinessUnitEntityMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? BusinessUnitId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.BusinessUnitId); }
		}

		/// <summary>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ReadPrivilegeDepth
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ReadPrivilegeDepth); }
		}

		/// <summary>
		/// <para>Unique identifier of the SystemUserBusinessUnitEntityMap .</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SystemUserBusinessUnitEntityMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SystemUserBusinessUnitEntityMapId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SystemUserId); }
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