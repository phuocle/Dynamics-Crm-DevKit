﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:45
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets
{
	public enum DefaultSyncDirection
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bidirectional</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Bidirectional = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: None</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		None = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: ToCRM</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		ToCRM = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: ToExchange</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		ToExchange = 1
	}
	public enum SyncDirection
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bidirectional</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Bidirectional = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: None</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		None = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: ToCRM</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		ToCRM = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: ToExchange</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		ToExchange = 1
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class PrincipalSyncAttributeMap : EntityBase
	{
		public struct Fields
		{
			public const string AllowedSyncDirection = "allowedsyncdirection";
			public const string AttributeCRMDisplayName = "attributecrmdisplayname";
			public const string AttributeCRMName = "attributecrmname";
			public const string AttributeExchangeDisplayName = "attributeexchangedisplayname";
			public const string AttributeExchangeName = "attributeexchangename";
			public const string ComputedProperties = "computedproperties";
			public const string DefaultSyncDirection = "defaultsyncdirection";
			public const string EntityTypeCode = "entitytypecode";
			public const string IsComputed = "iscomputed";
			public const string MappingName = "mappingname";
			public const string OrganizationId = "organizationid";
			public const string ParentPrincipalSyncAttributeMappingId = "parentprincipalsyncattributemappingid";
			public const string PrincipalId = "principalid";
			public const string PrincipalSyncAttributeMapId = "principalsyncattributemapid";
			public const string SyncDirection = "syncdirection";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "principalsyncattributemap";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1404;
		public const string EntityCollectionSchemaName = "PrincipalSyncAttributeMaps";
		public const string EntityDisplayCollectionName = "";
		public const string DisplayName = "Principal Sync Attribute Map";
		public const string EntitySetName = "principalsyncattributemaps";
		public const string EntityLogicalCollectionName = "principalsyncattributemaps";
		public const string EntityPrimaryIdAttribute = "principalsyncattributemapid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "PrincipalSyncAttributeMap";
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Guid PrincipalSyncAttributeMapId)
		{
			Entity = new Entity(EntityLogicalName, PrincipalSyncAttributeMapId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="PrincipalSyncAttributeMap"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="PrincipalSyncAttributeMap"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new PrincipalSyncAttributeMap(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="PrincipalSyncAttributeMap"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new PrincipalSyncAttributeMap(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public PrincipalSyncAttributeMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Allowed Sync Directions</para>
		/// <para><strong>Description</strong>: Specifies allowed sync directions.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: -1</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AllowedSyncDirection
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AllowedSyncDirection); }
			set { Entity.Attributes[Fields.AllowedSyncDirection] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: The display name of the AttributeCRMName attribute, which is enabled for data localization.</para>
		/// <para><strong>Description</strong>: CRM Attribute Display Name.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeCRMDisplayName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeCRMDisplayName); }
			set { Entity.Attributes[Fields.AttributeCRMDisplayName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: CRM Name of the attribute for which this mapping is defined</para>
		/// <para><strong>Description</strong>: CRM Attribute Name.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeCRMName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeCRMName); }
			set { Entity.Attributes[Fields.AttributeCRMName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: The display name of the AttributeExchangeName attribute, which is enabled for data localization.</para>
		/// <para><strong>Description</strong>: Exchange Attribute Display Name.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeExchangeDisplayName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeExchangeDisplayName); }
			set { Entity.Attributes[Fields.AttributeExchangeDisplayName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Exchange Name of the attribute for which this mapping is defined</para>
		/// <para><strong>Description</strong>: Exchange Attribute Name.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeExchangeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeExchangeName); }
			set { Entity.Attributes[Fields.AttributeExchangeName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Computed Properties for one attribute</para>
		/// <para><strong>Description</strong>: Computed Properties.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ComputedProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.ComputedProperties); }
			set { Entity.Attributes[Fields.ComputedProperties] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sync Direction</para>
		/// <para><strong>Description</strong>: Default Sync Direction</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.DefaultSyncDirection"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.DefaultSyncDirection.None"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.DefaultSyncDirection? DefaultSyncDirection
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DefaultSyncDirection);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.DefaultSyncDirection)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DefaultSyncDirection] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DefaultSyncDirection] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name of the Entity for which this attribute mapping is defined</para>
		/// <para><strong>Description</strong>: Object type code for the entity.</para>
		/// <para><strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityTypeCode2
		{
			get { return Entity.GetAttributeValue<string>(Fields.EntityTypeCode); }
			set { Entity.Attributes[Fields.EntityTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Computed</para>
		/// <para><strong>Description</strong>: Indicates whether the mapping is a computed property</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsComputed
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsComputed); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name of the mapping</para>
		/// <para><strong>Description</strong>: Mapping Name.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MappingName
		{
			get { return Entity.GetAttributeValue<string>(Fields.MappingName); }
			set { Entity.Attributes[Fields.MappingName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization</para>
		/// <para><strong>Description</strong>: Unique identifier of the associated organization.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Parent Sync-Attribute Mapping</para>
		/// <para><strong>Description</strong>: Parent Sync-Attribute Mapping to which this mapping belongs</para>
		/// <para><strong>Lookup</strong>: <see cref="principalsyncattributemap"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ParentPrincipalSyncAttributeMappingId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ParentPrincipalSyncAttributeMappingId); }
			set { Entity.Attributes[Fields.ParentPrincipalSyncAttributeMappingId] = value; }
		}
		/// <summary>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PrincipalId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PrincipalId); }
			set { Entity.Attributes[Fields.PrincipalId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the principal sync attribute mapping.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PrincipalSyncAttributeMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.PrincipalSyncAttributeMapId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sync Direction</para>
		/// <para><strong>Description</strong>: Sync Direction</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.SyncDirection"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.SyncDirection.None"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.SyncDirection? SyncDirection
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SyncDirection);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets.SyncDirection)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SyncDirection] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SyncDirection] = null;
			}
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