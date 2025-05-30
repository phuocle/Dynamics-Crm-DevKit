﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:44
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets
{
	public enum AuthType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: BasicAuth</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		BasicAuth = 0
	}
	public enum ComponentState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted Unpublished</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Published</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Published = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Unpublished</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Unpublished = 1
	}
	public enum IsolationMode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: External</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		External = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: None</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		None = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sandbox</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Sandbox = 2
	}
	public enum SourceType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: AzureWebApp</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		AzureWebApp = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Database</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Database = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Disk</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Disk = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: File Store</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		File_Store = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Normal</para>
		/// <para><strong>Value</strong>: 2</para>
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
		public const string EntityCollectionSchemaName = "PluginAssemblies";
		public const string EntityDisplayCollectionName = "Plug-in Assemblies";
		public const string DisplayName = "Plug-in Assembly";
		public const string EntitySetName = "pluginassemblies";
		public const string EntityLogicalCollectionName = "pluginassemblies";
		public const string EntityPrimaryIdAttribute = "pluginassemblyid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "PluginAssembly";
		[DebuggerNonUserCode()]
		public PluginAssembly()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
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
		/// <summary>
		/// Instance new late bound class <see cref="PluginAssembly"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public PluginAssembly(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="PluginAssembly"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public PluginAssembly(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new PluginAssembly(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="PluginAssembly"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public PluginAssembly(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new PluginAssembly(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
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
		/// <para><strong>Display Name</strong>: Specifies mode of authentication with web sources</para>
		/// <para><strong>Description</strong>: Specifies mode of authentication with web sources like WebApp</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.AuthType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
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
		/// <para><strong>Display Name</strong>: Component State</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
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
		/// <para><strong>Description</strong>: Bytes of the assembly, in Base64 format.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Content
		{
			get { return Entity.GetAttributeValue<string>(Fields.Content); }
			set { Entity.Attributes[Fields.Content] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the plug-in assembly.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the plug-in assembly was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the pluginassembly.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Culture</para>
		/// <para><strong>Description</strong>: Culture code for the plug-in assembly.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 32</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Culture
		{
			get { return Entity.GetAttributeValue<string>(Fields.Culture); }
			set { Entity.Attributes[Fields.Culture] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Customization Level.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>: -255 - <strong>MaxValue</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? CustomizationLevel
		{
			get { return Entity.GetAttributeValue<int?>(Fields.CustomizationLevel); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Description</para>
		/// <para><strong>Description</strong>: Description of the plug-in assembly.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Introduced Version</para>
		/// <para><strong>Description</strong>: Version in which the form is introduced.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: State</para>
		/// <para><strong>Description</strong>: Information that specifies whether this component is managed.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Managed</strong>]: true - [<strong>Unmanaged</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Unmanaged</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Isolation Mode</para>
		/// <para><strong>Description</strong>: Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.IsolationMode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.IsolationMode.None"/></para>
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
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPasswordSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPasswordSet); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Major of the assembly version.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 65,534</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Major
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Major); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ManagedIdentityId</para>
		/// <para><strong>Description</strong>: Unique identifier for managedidentity associated with pluginassembly.</para>
		/// <para><strong>Lookup</strong>: <see cref="managedidentity"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ManagedIdentityId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ManagedIdentityId); }
			set { Entity.Attributes[Fields.ManagedIdentityId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Minor of the assembly version.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 65,534</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Minor
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Minor); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the plug-in assembly.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the plug-in assembly was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who last modified the pluginassembly.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Name of the plug-in assembly.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the organization with which the plug-in assembly is associated.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Overwrite Time</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Package</para>
		/// <para><strong>Description</strong>: Unique identifier for Plugin Package associated with Plug-in Assembly.</para>
		/// <para><strong>Lookup</strong>: <see cref="pluginpackage"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PackageId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PackageId); }
			set { Entity.Attributes[Fields.PackageId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Password</para>
		/// <para><strong>Description</strong>: User Password</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Password
		{
			get { return Entity.GetAttributeValue<string>(Fields.Password); }
			set { Entity.Attributes[Fields.Password] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Path</para>
		/// <para><strong>Description</strong>: File name of the plug-in assembly. Used when the source type is set to 1.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Path
		{
			get { return Entity.GetAttributeValue<string>(Fields.Path); }
			set { Entity.Attributes[Fields.Path] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the plug-in assembly.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
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
		/// <para><strong>Description</strong>: Unique identifier of the plug-in assembly.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PluginAssemblyIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PluginAssemblyIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Public Key Token</para>
		/// <para><strong>Description</strong>: Public key token of the assembly. This value can be obtained from the assembly by using reflection.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 32</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublicKeyToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublicKeyToken); }
			set { Entity.Attributes[Fields.PublicKeyToken] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: Unique identifier of the associated solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Hash of the source of the assembly.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SourceHash
		{
			get { return Entity.GetAttributeValue<string>(Fields.SourceHash); }
			set { Entity.Attributes[Fields.SourceHash] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source Type</para>
		/// <para><strong>Description</strong>: Location of the assembly, for example 0=database, 1=on-disk.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.SourceType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.PluginAssemblyOptionSets.SourceType.Database"/></para>
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
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Web Url</para>
		/// <para><strong>Description</strong>: Web Url</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Url
		{
			get { return Entity.GetAttributeValue<string>(Fields.Url); }
			set { Entity.Attributes[Fields.Url] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Name</para>
		/// <para><strong>Description</strong>: User Name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UserName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UserName); }
			set { Entity.Attributes[Fields.UserName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version</para>
		/// <para><strong>Description</strong>: Version number of the assembly. The value can be obtained from the assembly through reflection.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Version
		{
			get { return Entity.GetAttributeValue<string>(Fields.Version); }
			set { Entity.Attributes[Fields.Version] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}