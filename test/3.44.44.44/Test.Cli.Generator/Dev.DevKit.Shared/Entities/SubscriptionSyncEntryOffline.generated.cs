﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:52:39
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SubscriptionSyncEntryOfflineOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SubscriptionSyncEntryOffline : EntityBase
	{
		public struct Fields
		{
			public const string ObjectId = "objectid";
			public const string ObjectTypeCode = "objecttypecode";
			public const string SubscriptionId = "subscriptionid";
			public const string SyncState = "syncstate";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "subscriptionsyncentryoffline";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 47;
		public const string EntityCollectionSchemaName = "SubscriptionSyncEntriesOffline";
		public const string EntityDisplayCollectionName = "Subscription Sync Entry Offline";
		public const string DisplayName = "Subscription Sync Entry Offline";
		public const string EntitySetName = "subscriptionsyncentriesoffline";
		public const string EntityLogicalCollectionName = "subscriptionsyncentriesoffline";
		public const string EntityPrimaryIdAttribute = "subscriptionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "SubscriptionSyncEntryOffline";
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline(Guid SubscriptionSyncEntryOfflineId)
		{
			Entity = new Entity(EntityLogicalName, SubscriptionSyncEntryOfflineId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SubscriptionSyncEntryOffline"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SubscriptionSyncEntryOffline"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SubscriptionSyncEntryOffline(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SubscriptionSyncEntryOffline"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SubscriptionSyncEntryOffline(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SubscriptionSyncEntryOffline(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SubscriptionSyncEntryOffline(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ObjectId</para>
		/// <para><strong>Description</strong>: Object Id</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ObjectTypeCode</para>
		/// <para><strong>Description</strong>: Entity object type code</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ObjectTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ObjectTypeCode); }
			set { Entity.Attributes[Fields.ObjectTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SubscriptionId</para>
		/// <para><strong>Description</strong>: Subscription Id</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SubscriptionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SubscriptionId); }
			set { Entity.Attributes[Fields.SubscriptionId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SyncState</para>
		/// <para><strong>Description</strong>: Sync state</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: -1</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SyncState
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SyncState); }
			set { Entity.Attributes[Fields.SyncState] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: VersionNumber</para>
		/// <para><strong>Description</strong>: Version number</para>
		/// <para><strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
			set { Entity.Attributes[Fields.VersionNumber] = value; }
		}
	}
}