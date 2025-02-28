﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.LocalConfigStoreOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class LocalConfigStore : EntityBase
	{
		public struct Fields
		{
			public const string AssemblyName = "assemblyname";
			public const string Id = "id";
			public const string IsValueSet = "isvalueset";
			public const string KeyName = "keyname";
			public const string PublicToken = "publictoken";
			public const string Value = "value";
		}

		public const string EntityLogicalName = "localconfigstore";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9201;

		[DebuggerNonUserCode()]
		public LocalConfigStore()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public LocalConfigStore(Guid LocalConfigStoreId)
		{
			Entity = new Entity(EntityLogicalName, LocalConfigStoreId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public LocalConfigStore(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public LocalConfigStore(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public LocalConfigStore(Entity entity, Entity merge)
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
		public LocalConfigStore(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Assembly Name</para>
		/// <para>ReadOnly - String - MaxLength: 255</para>
		/// <para>Assembly Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AssemblyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AssemblyName); }
		}

		/// <summary>
		/// <para>Unique identifier of LocalConfigStore entry.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? Id1
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.Id); }
			set { Entity.Attributes[Fields.Id] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Boolean</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsValueSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsValueSet); }
		}

		/// <summary>
		/// <para>Key Name</para>
		/// <para>ReadOnly - String - MaxLength: 255</para>
		/// <para>Key Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string KeyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.KeyName); }
		}

		/// <summary>
		/// <para>Assembly Public Token</para>
		/// <para>ReadOnly - String - MaxLength: 255</para>
		/// <para>Assembly Public Token</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublicToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublicToken); }
		}

		/// <summary>
		/// <para>Value</para>
		/// <para>ReadOnly - String - MaxLength: 100</para>
		/// <para>Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Value
		{
			get { return Entity.GetAttributeValue<string>(Fields.Value); }
		}
	}
}
