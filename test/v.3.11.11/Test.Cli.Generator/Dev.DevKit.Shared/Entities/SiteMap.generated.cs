﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SiteMapOptionSets
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
	[DebuggerNonUserCode()]
	public partial class SiteMap : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EnableCollapsibleGroups = "enablecollapsiblegroups";
			public const string IsAppAware = "isappaware";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string ShowHome = "showhome";
			public const string ShowPinned = "showpinned";
			public const string ShowRecents = "showrecents";
			public const string SiteMapId = "sitemapid";
			public const string SiteMapIdUnique = "sitemapidunique";
			public const string SiteMapName = "sitemapname";
			public const string SiteMapNameUnique = "sitemapnameunique";
			public const string SiteMapXml = "sitemapxml";
			public const string SiteMapXmlManaged = "sitemapxmlmanaged";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "sitemap";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4709;

		[DebuggerNonUserCode()]
		public SiteMap()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SiteMap(Guid SiteMapId)
		{
			Entity = new Entity(EntityLogicalName, SiteMapId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SiteMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SiteMap(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SiteMap(Entity entity, Entity merge)
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
		public SiteMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SiteMapOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SiteMapOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Shows who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Shows who created the record on behalfÂ of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enable to allow sitemap groups to be collapsed.</para>
		/// <para>Boolean</para>
		/// <para>Enable Collapsible Groups</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? EnableCollapsibleGroups
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.EnableCollapsibleGroups); }
			set { Entity.Attributes[Fields.EnableCollapsibleGroups] = value; }
		}

		/// <summary>
		/// <para>Information about whether the site map is associated with app module.</para>
		/// <para>Boolean</para>
		/// <para>IsAppAware</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsAppAware
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsAppAware); }
			set { Entity.Attributes[Fields.IsAppAware] = value; }
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
		/// <para>Shows who last updated the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Shows who last updated the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>Enable to show the home button in the sitemap.</para>
		/// <para>Boolean</para>
		/// <para>Show Home</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? ShowHome
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.ShowHome); }
			set { Entity.Attributes[Fields.ShowHome] = value; }
		}

		/// <summary>
		/// <para>Enable to show the pinned dropdown in the sitemap.</para>
		/// <para>Boolean</para>
		/// <para>Show Pinned</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? ShowPinned
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.ShowPinned); }
			set { Entity.Attributes[Fields.ShowPinned] = value; }
		}

		/// <summary>
		/// <para>Enable to show the recents dropdown in the sitemap.</para>
		/// <para>Boolean</para>
		/// <para>Show Recents</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? ShowRecents
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.ShowRecents); }
			set { Entity.Attributes[Fields.ShowRecents] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SiteMapId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SiteMapIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SiteMapIdUnique); }
		}

		/// <summary>
		/// <para>String - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SiteMapName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SiteMapName); }
			set { Entity.Attributes[Fields.SiteMapName] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SiteMapNameUnique
		{
			get { return Entity.GetAttributeValue<string>(Fields.SiteMapNameUnique); }
			set { Entity.Attributes[Fields.SiteMapNameUnique] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SiteMapXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.SiteMapXml); }
			set { Entity.Attributes[Fields.SiteMapXml] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SiteMapXmlManaged
		{
			get { return Entity.GetAttributeValue<string>(Fields.SiteMapXmlManaged); }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
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
