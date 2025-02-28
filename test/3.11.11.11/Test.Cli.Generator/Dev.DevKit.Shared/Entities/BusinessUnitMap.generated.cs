﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.BusinessUnitMapOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class BusinessUnitMap : EntityBase
	{
		public struct Fields
		{
			public const string BusinessId = "businessid";
			public const string BusinessUnitMapId = "businessunitmapid";
			public const string SubBusinessId = "subbusinessid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "businessunitmap";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 6;

		[DebuggerNonUserCode()]
		public BusinessUnitMap()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessUnitMap(Guid BusinessUnitMapId)
		{
			Entity = new Entity(EntityLogicalName, BusinessUnitMapId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessUnitMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessUnitMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessUnitMap(Entity entity, Entity merge)
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
		public BusinessUnitMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? BusinessId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.BusinessId); }
			set { Entity.Attributes[Fields.BusinessId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid BusinessUnitMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.BusinessUnitMapId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SubBusinessId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SubBusinessId); }
			set { Entity.Attributes[Fields.SubBusinessId] = value; }
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
