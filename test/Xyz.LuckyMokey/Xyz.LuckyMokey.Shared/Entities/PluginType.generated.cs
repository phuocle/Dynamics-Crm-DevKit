﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.PluginTypeOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Published = 0
		/// </summary>
		Published = 0,
		/// <summary>
		/// Unpublished = 1
		/// </summary>
		Unpublished = 1,
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted_Unpublished = 3
		/// </summary>
		Deleted_Unpublished = 3
	}
}

namespace Xyz.LuckyMokey.Shared.Entities
{
	public partial class PluginType : EntityBase
	{
		public struct Fields
		{
			public const string AssemblyName = "assemblyname";
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Culture = "culture";
			public const string CustomizationLevel = "customizationlevel";
			public const string CustomWorkflowActivityInfo = "customworkflowactivityinfo";
			public const string Description = "description";
			public const string FriendlyName = "friendlyname";
			public const string IsManaged = "ismanaged";
			public const string IsWorkflowActivity = "isworkflowactivity";
			public const string Major = "major";
			public const string Minor = "minor";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string PluginAssemblyId = "pluginassemblyid";
			public const string PluginTypeId = "plugintypeid";
			public const string PluginTypeIdUnique = "plugintypeidunique";
			public const string PublicKeyToken = "publickeytoken";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TypeName = "typename";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
			public const string WorkflowActivityGroupName = "workflowactivitygroupname";
		}

		public const string EntityLogicalName = "plugintype";

		public const int EntityTypeCode = 4602;

		[DebuggerNonUserCode()]
		public PluginType()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginType(Guid PluginTypeId)
		{
			Entity = new Entity(EntityLogicalName, PluginTypeId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginType(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginType(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginType(Entity entity, Entity merge)
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
		public PluginType(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Full path name of the plug-in assembly.</para>
		/// <para>ReadOnly - Required - String - MaxLength: 100</para>
		/// <para>Assembly Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AssemblyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AssemblyName); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.PluginTypeOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.PluginTypeOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the plug-in type.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the plug-in type was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the plugintype.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Culture code for the plug-in assembly.</para>
		/// <para>ReadOnly - Required - String - MaxLength: 32</para>
		/// <para>Culture</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Culture
		{
			get { return Entity.GetAttributeValue<string>(Fields.Culture); }
		}

		/// <summary>
		/// <para>Customization level of the plug-in type.</para>
		/// <para>ReadOnly - Integer - MinValue: -255 - MaxValue: 255</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? CustomizationLevel
		{
			get { return Entity.GetAttributeValue<int?>(Fields.CustomizationLevel); }
		}

		/// <summary>
		/// <para>Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1048576</para>
		/// <para>Custom Workflow Activity Info</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string CustomWorkflowActivityInfo
		{
			get { return Entity.GetAttributeValue<string>(Fields.CustomWorkflowActivityInfo); }
		}

		/// <summary>
		/// <para>Description of the plug-in type.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>User friendly name for the plug-in.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Display Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FriendlyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.FriendlyName); }
			set { Entity.Attributes[Fields.FriendlyName] = value; }
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
		/// <para>Indicates if the plug-in is a custom activity for workflows.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Workflow Activity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsWorkflowActivity
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsWorkflowActivity); }
		}

		/// <summary>
		/// <para>Major of the version number of the assembly for the plug-in type.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 65,534</para>
		/// <para>Version major</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Major
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Major); }
		}

		/// <summary>
		/// <para>Minor of the version number of the assembly for the plug-in type.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 65,534</para>
		/// <para>Version minor</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Minor
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Minor); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the plug-in type.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the plug-in type was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the plugintype.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Name of the plug-in type.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the organization with which the plug-in type is associated.</para>
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
		/// <para>Unique identifier of the plug-in assembly that contains this plug-in type.</para>
		/// <para>Lookup</para>
		/// <para>Plugin Assembly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PluginAssemblyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PluginAssemblyId); }
			set { Entity.Attributes[Fields.PluginAssemblyId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the plug-in type.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Plug-in Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PluginTypeId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.PluginTypeId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the plug-in type.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PluginTypeIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PluginTypeIdUnique); }
		}

		/// <summary>
		/// <para>Public key token of the assembly for the plug-in type.</para>
		/// <para>ReadOnly - Required - String - MaxLength: 32</para>
		/// <para>Public Key Token</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublicKeyToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublicKeyToken); }
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
		/// <para>Fully qualified type name of the plug-in type.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Type Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TypeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.TypeName); }
			set { Entity.Attributes[Fields.TypeName] = value; }
		}

		/// <summary>
		/// <para>Version number of the assembly for the plug-in type.</para>
		/// <para>ReadOnly - Required - String - MaxLength: 48</para>
		/// <para>Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Version
		{
			get { return Entity.GetAttributeValue<string>(Fields.Version); }
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

		/// <summary>
		/// <para>Group name of workflow custom activity.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Workflow Activity Group Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string WorkflowActivityGroupName
		{
			get { return Entity.GetAttributeValue<string>(Fields.WorkflowActivityGroupName); }
			set { Entity.Attributes[Fields.WorkflowActivityGroupName] = value; }
		}
	}
}