﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SubscriptionStatisticsOfflineOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class SubscriptionStatisticsOffline : EntityBase
	{
		public struct Fields
		{
			public const string FullSyncRequired = "fullsyncrequired";
			public const string ObjectTypeCode = "objecttypecode";
			public const string SubscriptionId = "subscriptionid";
		}

		public const string EntityLogicalName = "subscriptionstatisticsoffline";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 45;

		[DebuggerNonUserCode()]
		public SubscriptionStatisticsOffline()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SubscriptionStatisticsOffline(Guid SubscriptionStatisticsOfflineId)
		{
			Entity = new Entity(EntityLogicalName, SubscriptionStatisticsOfflineId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SubscriptionStatisticsOffline(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SubscriptionStatisticsOffline(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SubscriptionStatisticsOffline(Entity entity, Entity merge)
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
		public SubscriptionStatisticsOffline(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Is full sync required or not</para>
		/// <para>Boolean</para>
		/// <para>FullSyncRequired</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? FullSyncRequired
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.FullSyncRequired); }
			set { Entity.Attributes[Fields.FullSyncRequired] = value; }
		}

		/// <summary>
		/// <para>Entity object type code</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>ObjectTypeCode</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ObjectTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ObjectTypeCode); }
			set { Entity.Attributes[Fields.ObjectTypeCode] = value; }
		}

		/// <summary>
		/// <para>Subscription Id</para>
		/// <para>Uniqueidentifier</para>
		/// <para>SubscriptionId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SubscriptionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SubscriptionId); }
			set { Entity.Attributes[Fields.SubscriptionId] = value; }
		}
	}
}