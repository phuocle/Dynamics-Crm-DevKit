﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.devkit_AzureContactOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class devkit_AzureContact : EntityBase
	{
		public struct Fields
		{
			public const string devkit_AzureContactId = "devkit_azurecontactid";
			public const string devkit_name = "devkit_name";
		}

		public const string EntityLogicalName = "devkit_azurecontact";

		public const int EntityTypeCode = 10148;

		[DebuggerNonUserCode()]
		public devkit_AzureContact()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_AzureContact(Guid devkit_AzureContactId)
		{
			Entity = new Entity(EntityLogicalName, devkit_AzureContactId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_AzureContact(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_AzureContact(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public devkit_AzureContact(Entity entity, Entity merge)
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
		public devkit_AzureContact(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Azure Contact</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid devkit_AzureContactId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.devkit_AzureContactId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string devkit_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.devkit_name); }
			set { Entity.Attributes[Fields.devkit_name] = value; }
		}
	}
}