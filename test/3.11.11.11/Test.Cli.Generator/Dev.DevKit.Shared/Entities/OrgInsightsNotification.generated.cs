﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.OrgInsightsNotificationOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class OrgInsightsNotification : EntityBase
	{
		public struct Fields
		{
			public const string CreatedOn = "createdon";
			public const string InternalName = "internalname";
			public const string JsonData = "jsondata";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OrgInsightsNotificationId = "orginsightsnotificationid";
		}

		public const string EntityLogicalName = "orginsightsnotification";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9690;

		[DebuggerNonUserCode()]
		public OrgInsightsNotification()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public OrgInsightsNotification(Guid OrgInsightsNotificationId)
		{
			Entity = new Entity(EntityLogicalName, OrgInsightsNotificationId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public OrgInsightsNotification(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public OrgInsightsNotification(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public OrgInsightsNotification(Entity entity, Entity merge)
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
		public OrgInsightsNotification(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Date and time when the organization insights notification was created</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Name of the notification which is used for retrieving the data</para>
		/// <para>String - MaxLength: 160</para>
		/// <para>Name of the notification that is used for retrieving the data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InternalName
		{
			get { return Entity.GetAttributeValue<string>(Fields.InternalName); }
			set { Entity.Attributes[Fields.InternalName] = value; }
		}

		/// <summary>
		/// <para>Notification Data in Json format</para>
		/// <para>ReadOnly - Memo - MaxLength: 2000</para>
		/// <para>Notification Data in Json format</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string JsonData
		{
			get { return Entity.GetAttributeValue<string>(Fields.JsonData); }
		}

		/// <summary>
		/// <para>Legend Name used while displaying the notification</para>
		/// <para>String - MaxLength: 160</para>
		/// <para>Legend Name used wile displaying the notification</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the record</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid OrgInsightsNotificationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.OrgInsightsNotificationId] = value;
				Entity.Id = value;
			}
		}
	}
}
