﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.PrincipalSyncAttributeMapOptionSets
{
	public enum DefaultSyncDirection
	{
		/// <summary>
		/// Bidirectional = 3
		/// </summary>
		Bidirectional = 3,
		/// <summary>
		/// None = 0
		/// </summary>
		None = 0,
		/// <summary>
		/// ToCRM = 2
		/// </summary>
		ToCRM = 2,
		/// <summary>
		/// ToExchange = 1
		/// </summary>
		ToExchange = 1
	}

	public enum SyncDirection
	{
		/// <summary>
		/// Bidirectional = 3
		/// </summary>
		Bidirectional = 3,
		/// <summary>
		/// None = 0
		/// </summary>
		None = 0,
		/// <summary>
		/// ToCRM = 2
		/// </summary>
		ToCRM = 2,
		/// <summary>
		/// ToExchange = 1
		/// </summary>
		ToExchange = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
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

		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap()
		{
			Entity = new Entity(EntityLogicalName);
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

		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PrincipalSyncAttributeMap(Entity entity, Entity merge)
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
		public PrincipalSyncAttributeMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Specifies allowed sync directions.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: -1</para>
		/// <para>Allowed Sync Directions</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AllowedSyncDirection
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AllowedSyncDirection); }
			set { Entity.Attributes[Fields.AllowedSyncDirection] = value; }
		}

		/// <summary>
		/// <para>CRM Attribute Display Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>The display name of the AttributeCRMName attribute, which is enabled for data localization.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeCRMDisplayName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeCRMDisplayName); }
			set { Entity.Attributes[Fields.AttributeCRMDisplayName] = value; }
		}

		/// <summary>
		/// <para>CRM Attribute Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>CRM Name of the attribute for which this mapping is defined</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeCRMName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeCRMName); }
			set { Entity.Attributes[Fields.AttributeCRMName] = value; }
		}

		/// <summary>
		/// <para>Exchange Attribute Display Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>The display name of the AttributeExchangeName attribute, which is enabled for data localization.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeExchangeDisplayName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeExchangeDisplayName); }
			set { Entity.Attributes[Fields.AttributeExchangeDisplayName] = value; }
		}

		/// <summary>
		/// <para>Exchange Attribute Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Exchange Name of the attribute for which this mapping is defined</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeExchangeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeExchangeName); }
			set { Entity.Attributes[Fields.AttributeExchangeName] = value; }
		}

		/// <summary>
		/// <para>Computed Properties.</para>
		/// <para>String - MaxLength: 500</para>
		/// <para>Computed Properties for one attribute</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ComputedProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.ComputedProperties); }
			set { Entity.Attributes[Fields.ComputedProperties] = value; }
		}

		/// <summary>
		/// <para>Default Sync Direction</para>
		/// <para>Picklist</para>
		/// <para>Sync Direction</para>
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
		/// <para>Indicates whether the mapping is a computed property</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Computed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsComputed
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsComputed); }
		}

		/// <summary>
		/// <para>Mapping Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name of the mapping</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MappingName
		{
			get { return Entity.GetAttributeValue<string>(Fields.MappingName); }
			set { Entity.Attributes[Fields.MappingName] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the associated organization.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Parent Sync-Attribute Mapping to which this mapping belongs</para>
		/// <para>Lookup to principalsyncattributemap</para>
		/// <para>Parent Sync-Attribute Mapping</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ParentPrincipalSyncAttributeMappingId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ParentPrincipalSyncAttributeMappingId); }
			set { Entity.Attributes[Fields.ParentPrincipalSyncAttributeMappingId] = value; }
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PrincipalId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PrincipalId); }
			set { Entity.Attributes[Fields.PrincipalId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the principal sync attribute mapping.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
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
		/// <para>Sync Direction</para>
		/// <para>Picklist</para>
		/// <para>Sync Direction</para>
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