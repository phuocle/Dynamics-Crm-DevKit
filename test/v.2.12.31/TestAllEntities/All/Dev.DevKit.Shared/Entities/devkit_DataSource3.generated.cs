﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.devkit_DataSource3OptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class devkit_DataSource3 : EntityBase
	{
		public struct Fields
		{
			public const string devkit_DataSource3Id = "devkit_datasource3id";
			public const string devkit_DataSource3Name = "devkit_datasource3name";
		}

		public const string EntityLogicalName = "devkit_datasource3";

		public const int EntityTypeCode = 10168;

		[DebuggerNonUserCode()]
		public devkit_DataSource3()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_DataSource3(Guid devkit_DataSource3Id)
		{
			Entity = new Entity(EntityLogicalName, devkit_DataSource3Id);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_DataSource3(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_DataSource3(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_DataSource3(Entity entity, Entity merge)
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
		public devkit_DataSource3(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Data Source 3</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid devkit_DataSource3Id
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.devkit_DataSource3Id] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Data Source 3</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string devkit_DataSource3Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.devkit_DataSource3Name); }
			set { Entity.Attributes[Fields.devkit_DataSource3Name] = value; }
		}
	}
}