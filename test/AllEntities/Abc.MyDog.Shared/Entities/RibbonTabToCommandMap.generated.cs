﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.MyDog.Shared.Entities.RibbonTabToCommandMapOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted_Unpublished = 3
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

namespace Abc.MyDog.Shared.Entities
{
	public partial class RibbonTabToCommandMap : EntityBase
	{
		public struct Fields
		{
			public const string Command = "command";
			public const string ComponentState = "componentstate";
			public const string ControlId = "controlid";
			public const string Entity = "entity";
			public const string IsManaged = "ismanaged";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string RibbonDiffId = "ribbondiffid";
			public const string RibbonTabToCommandMapId = "ribbontabtocommandmapid";
			public const string RibbonTabToCommandMapUniqueId = "ribbontabtocommandmapuniqueid";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TabId = "tabid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "ribbontabtocommandmap";

		public const int EntityTypeCode = 1113;

		[DebuggerNonUserCode()]
		public RibbonTabToCommandMap()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonTabToCommandMap(Guid RibbonTabToCommandMapId)
		{
			Entity = new Entity(EntityLogicalName, RibbonTabToCommandMapId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonTabToCommandMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonTabToCommandMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonTabToCommandMap(Entity entity, Entity merge)
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
		public RibbonTabToCommandMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>A command Id of a control within that tab.</para>
		/// <para>Memo - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Command
		{
			get { return Entity.GetAttributeValue<string>(Fields.Command); }
			set { Entity.Attributes[Fields.Command] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.MyDog.Shared.Entities.RibbonTabToCommandMapOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Abc.MyDog.Shared.Entities.RibbonTabToCommandMapOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>A control id within that tab.</para>
		/// <para>Memo - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ControlId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ControlId); }
			set { Entity.Attributes[Fields.ControlId] = value; }
		}

		/// <summary>
		/// <para>The entity this rule applies to, also the entity this rule was imported from, will be exported to.</para>
		/// <para>String - MaxLength: 128</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Entity1
		{
			get { return Entity.GetAttributeValue<string>(Fields.Entity); }
			set { Entity.Attributes[Fields.Entity] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Boolean</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Unique identifier of the organization.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para>Unique identifier of the ribbon customization with which the ribbon command is associated.</para>
		/// <para>Required - Lookup</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RibbonDiffId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RibbonDiffId); }
			set { Entity.Attributes[Fields.RibbonDiffId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Primary Key</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid RibbonTabToCommandMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.RibbonTabToCommandMapId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RibbonTabToCommandMapUniqueId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RibbonTabToCommandMapUniqueId); }
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

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}

		/// <summary>
		/// <para>The Id of a tab</para>
		/// <para>String - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TabId
		{
			get { return Entity.GetAttributeValue<string>(Fields.TabId); }
			set { Entity.Attributes[Fields.TabId] = value; }
		}

		/// <summary>
		/// <para>Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook.</para>
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