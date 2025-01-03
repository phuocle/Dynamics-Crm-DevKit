﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets
{
	public enum AuthType
	{
		/// <summary>
		/// BasicAuth = 0
		/// </summary>
		BasicAuth = 0
	}

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

	public enum IsolationMode
	{
		/// <summary>
		/// External = 3
		/// </summary>
		External = 3,
		/// <summary>
		/// None = 1
		/// </summary>
		None = 1,
		/// <summary>
		/// Sandbox = 2
		/// </summary>
		Sandbox = 2
	}

	public enum SourceType
	{
		/// <summary>
		/// AzureWebApp = 3
		/// </summary>
		AzureWebApp = 3,
		/// <summary>
		/// Database = 0
		/// </summary>
		Database = 0,
		/// <summary>
		/// Disk = 1
		/// </summary>
		Disk = 1,
		/// <summary>
		/// File Store = 4
		/// </summary>
		File_Store = 4,
		/// <summary>
		/// Normal = 2
		/// </summary>
		Normal = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class PluginAssembly : EntityBase
	{
		public struct Fields
		{
			public const string AuthType = "authtype";
			public const string ComponentState = "componentstate";
			public const string Content = "content";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Culture = "culture";
			public const string CustomizationLevel = "customizationlevel";
			public const string Description = "description";
			public const string IntroducedVersion = "introducedversion";
			public const string IsManaged = "ismanaged";
			public const string IsolationMode = "isolationmode";
			public const string IsPasswordSet = "ispasswordset";
			public const string Major = "major";
			public const string ManagedIdentityId = "managedidentityid";
			public const string Minor = "minor";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string PackageId = "packageid";
			public const string Password = "password";
			public const string Path = "path";
			public const string PluginAssemblyId = "pluginassemblyid";
			public const string PluginAssemblyIdUnique = "pluginassemblyidunique";
			public const string PublicKeyToken = "publickeytoken";
			public const string SolutionId = "solutionid";
			public const string SourceHash = "sourcehash";
			public const string SourceType = "sourcetype";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string Url = "url";
			public const string UserName = "username";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "pluginassembly";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4605;

		[DebuggerNonUserCode()]
		public PluginAssembly()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginAssembly(Guid PluginAssemblyId)
		{
			Entity = new Entity(EntityLogicalName, PluginAssemblyId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginAssembly(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginAssembly(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginAssembly(Entity entity, Entity merge)
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
		public PluginAssembly(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Specifies mode of authentication with web sources like WebApp</para>
		/// <para>Picklist</para>
		/// <para>Specifies mode of authentication with web sources</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.AuthType? AuthType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.AuthType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.AuthType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.AuthType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.AuthType] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Bytes of the assembly, in Base64 format.</para>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Content
		{
			get { return Entity.GetAttributeValue<string>(Fields.Content); }
			set { Entity.Attributes[Fields.Content] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the plug-in assembly.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the plug-in assembly was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the pluginassembly.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Culture code for the plug-in assembly.</para>
		/// <para>String - MaxLength: 32</para>
		/// <para>Culture</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Culture
		{
			get { return Entity.GetAttributeValue<string>(Fields.Culture); }
			set { Entity.Attributes[Fields.Culture] = value; }
		}

		/// <summary>
		/// <para>Customization Level.</para>
		/// <para>ReadOnly - Integer - MinValue: -255 - MaxValue: 255</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? CustomizationLevel
		{
			get { return Entity.GetAttributeValue<int?>(Fields.CustomizationLevel); }
		}

		/// <summary>
		/// <para>Description of the plug-in assembly.</para>
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
		/// <para>Version in which the form is introduced.</para>
		/// <para>String - MaxLength: 48</para>
		/// <para>Introduced Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}

		/// <summary>
		/// <para>Information that specifies whether this component is managed.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed.</para>
		/// <para>Picklist</para>
		/// <para>Isolation Mode</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.IsolationMode? IsolationMode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.IsolationMode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.IsolationMode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.IsolationMode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.IsolationMode] = null;
			}
		}

		/// <summary>
		/// <para>ReadOnly - Boolean</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPasswordSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPasswordSet); }
		}

		/// <summary>
		/// <para>Major of the assembly version.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 65,534</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Major
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Major); }
		}

		/// <summary>
		/// <para>Unique identifier for managedidentity associated with pluginassembly.</para>
		/// <para>Lookup to managedidentity</para>
		/// <para>ManagedIdentityId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ManagedIdentityId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ManagedIdentityId); }
			set { Entity.Attributes[Fields.ManagedIdentityId] = value; }
		}

		/// <summary>
		/// <para>Minor of the assembly version.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 65,534</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Minor
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Minor); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the plug-in assembly.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the plug-in assembly was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the pluginassembly.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Name of the plug-in assembly.</para>
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
		/// <para>Unique identifier of the organization with which the plug-in assembly is associated.</para>
		/// <para>ReadOnly - Lookup to organization</para>
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
		/// <para>Unique identifier for Plugin Package associated with Plug-in Assembly.</para>
		/// <para>Lookup to pluginpackage</para>
		/// <para>Package</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PackageId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PackageId); }
			set { Entity.Attributes[Fields.PackageId] = value; }
		}

		/// <summary>
		/// <para>User Password</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>User Password</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Password
		{
			get { return Entity.GetAttributeValue<string>(Fields.Password); }
			set { Entity.Attributes[Fields.Password] = value; }
		}

		/// <summary>
		/// <para>File name of the plug-in assembly. Used when the source type is set to 1.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Path</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Path
		{
			get { return Entity.GetAttributeValue<string>(Fields.Path); }
			set { Entity.Attributes[Fields.Path] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the plug-in assembly.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PluginAssemblyId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.PluginAssemblyId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the plug-in assembly.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PluginAssemblyIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PluginAssemblyIdUnique); }
		}

		/// <summary>
		/// <para>Public key token of the assembly. This value can be obtained from the assembly by using reflection.</para>
		/// <para>String - MaxLength: 32</para>
		/// <para>Public Key Token</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublicKeyToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublicKeyToken); }
			set { Entity.Attributes[Fields.PublicKeyToken] = value; }
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
		/// <para>Hash of the source of the assembly.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SourceHash
		{
			get { return Entity.GetAttributeValue<string>(Fields.SourceHash); }
			set { Entity.Attributes[Fields.SourceHash] = value; }
		}

		/// <summary>
		/// <para>Location of the assembly, for example 0=database, 1=on-disk.</para>
		/// <para>Picklist</para>
		/// <para>Source Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.SourceType? SourceType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SourceType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.SourceType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SourceType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SourceType] = null;
			}
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
		/// <para>Web Url</para>
		/// <para>String - MaxLength: 2000</para>
		/// <para>Web Url</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Url
		{
			get { return Entity.GetAttributeValue<string>(Fields.Url); }
			set { Entity.Attributes[Fields.Url] = value; }
		}

		/// <summary>
		/// <para>User Name</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>User Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UserName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UserName); }
			set { Entity.Attributes[Fields.UserName] = value; }
		}

		/// <summary>
		/// <para>Version number of the assembly. The value can be obtained from the assembly through reflection.</para>
		/// <para>String - MaxLength: 48</para>
		/// <para>Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Version
		{
			get { return Entity.GetAttributeValue<string>(Fields.Version); }
			set { Entity.Attributes[Fields.Version] = value; }
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
