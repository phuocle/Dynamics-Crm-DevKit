﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SystemUserManagerMapOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SystemUserManagerMap : EntityBase
	{
		public struct Fields
		{
			public const string HierarchyLevel = "hierarchylevel";
			public const string ParentSystemUserId = "parentsystemuserid";
			public const string SystemUserId = "systemuserid";
			public const string SystemUserManagerMapId = "systemusermanagermapid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "systemusermanagermap";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 51;

		[DebuggerNonUserCode()]
		public SystemUserManagerMap()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserManagerMap(Guid SystemUserManagerMapId)
		{
			Entity = new Entity(EntityLogicalName, SystemUserManagerMapId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserManagerMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserManagerMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserManagerMap(Entity entity, Entity merge)
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
		public SystemUserManagerMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? HierarchyLevel
		{
			get { return Entity.GetAttributeValue<int?>(Fields.HierarchyLevel); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ParentSystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ParentSystemUserId); }
			set { Entity.Attributes[Fields.ParentSystemUserId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SystemUserId); }
			set { Entity.Attributes[Fields.SystemUserId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SystemUserManagerMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SystemUserManagerMapId] = value;
				Entity.Id = value;
			}
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
