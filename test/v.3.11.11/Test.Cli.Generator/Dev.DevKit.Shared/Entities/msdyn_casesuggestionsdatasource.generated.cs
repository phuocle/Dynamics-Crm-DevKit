﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_casesuggestionsdatasourceOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_casesuggestionsdatasource : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_casesuggestionsdatasourceId = "msdyn_casesuggestionsdatasourceid";
			public const string msdyn_name = "msdyn_name";
		}

		public const string EntityLogicalName = "msdyn_casesuggestionsdatasource";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10219;

		[DebuggerNonUserCode()]
		public msdyn_casesuggestionsdatasource()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_casesuggestionsdatasource(Guid msdyn_casesuggestionsdatasourceId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_casesuggestionsdatasourceId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_casesuggestionsdatasource(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_casesuggestionsdatasource(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_casesuggestionsdatasource(Entity entity, Entity merge)
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
		public msdyn_casesuggestionsdatasource(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Case Suggestions Data Source</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_casesuggestionsdatasourceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_casesuggestionsdatasourceId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
	}
}