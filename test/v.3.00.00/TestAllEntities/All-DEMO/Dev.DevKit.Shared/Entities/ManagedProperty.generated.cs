﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ManagedPropertyOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted Unpublished = 3
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// Published = 0
		/// </summary>
		Published = 0,
		/// <summary>
		/// Unpublished = 1
		/// </summary>
		Unpublished = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class ManagedProperty : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string EnablesAttributeName = "enablesattributename";
			public const string EnablesEntityName = "enablesentityname";
			public const string LogicalName = "logicalname";
			public const string ManagedPropertyId = "managedpropertyid";
			public const string ManagedPropertyRowId = "managedpropertyrowid";
			public const string OverwriteTime = "overwritetime";
			public const string SolutionId = "solutionid";
		}

		public const string EntityLogicalName = "managedproperty";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9812;

		[DebuggerNonUserCode()]
		public ManagedProperty()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ManagedProperty(Guid ManagedPropertyId)
		{
			Entity = new Entity(EntityLogicalName, ManagedPropertyId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ManagedProperty(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ManagedProperty(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ManagedProperty(Entity entity, Entity merge)
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
		public ManagedProperty(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ManagedPropertyOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ManagedPropertyOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Enables Attribute Name of this Managed Property.</para>
		/// <para>String - MaxLength: 128</para>
		/// <para>Enables Atrribute Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EnablesAttributeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.EnablesAttributeName); }
			set { Entity.Attributes[Fields.EnablesAttributeName] = value; }
		}

		/// <summary>
		/// <para>Enables Entity Name of this Managed Property.</para>
		/// <para>String - MaxLength: 128</para>
		/// <para>Enables Entity Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EnablesEntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.EnablesEntityName); }
			set { Entity.Attributes[Fields.EnablesEntityName] = value; }
		}

		/// <summary>
		/// <para>The logical name of this Managed Property.</para>
		/// <para>String - MaxLength: 128</para>
		/// <para>Logical Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string LogicalName
		{
			get { return Entity.GetAttributeValue<string>(Fields.LogicalName); }
			set { Entity.Attributes[Fields.LogicalName] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the managed property key.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Managed Property Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ManagedPropertyId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ManagedPropertyId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the Managed Property</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Managed Property Row Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ManagedPropertyRowId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ManagedPropertyRowId); }
			set { Entity.Attributes[Fields.ManagedPropertyRowId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>Unique identifier of the associated solution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
	}
}