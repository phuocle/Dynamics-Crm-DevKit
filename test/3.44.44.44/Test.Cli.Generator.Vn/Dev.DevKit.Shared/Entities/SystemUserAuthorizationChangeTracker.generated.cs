﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:22
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SystemUserAuthorizationChangeTrackerOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SystemUserAuthorizationChangeTracker : EntityBase
	{
		public struct Fields
		{
			public const string ChangedOn = "changedon";
			public const string ChangedVersionNumber = "changedversionnumber";
			public const string ComputedOn = "computedon";
			public const string ComputedVersionNumber = "computedversionnumber";
			public const string SystemUserId = "systemuserid";
		}
		public const string EntityLogicalName = "systemuserauthorizationchangetracker";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 60;
		public const string EntityCollectionSchemaName = "SystemUserAuthorizationChangeTrackers";
		public const string EntityDisplayCollectionName = "SystemUserAuthorizationChangeTrackers";
		public const string DisplayName = "SystemUserAuthorizationChangeTracker";
		public const string EntitySetName = "systemuserauthorizationchangetrackers";
		public const string EntityLogicalCollectionName = "systemuserauthorizationchangetrackers";
		public const string EntityPrimaryIdAttribute = "systemuserid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "SystemUserAuthorizationChangeTracker";
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Guid SystemUserAuthorizationChangeTrackerId)
		{
			Entity = new Entity(EntityLogicalName, SystemUserAuthorizationChangeTrackerId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SystemUserAuthorizationChangeTracker"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SystemUserAuthorizationChangeTracker"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SystemUserAuthorizationChangeTracker(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SystemUserAuthorizationChangeTracker"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SystemUserAuthorizationChangeTracker(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SystemUserAuthorizationChangeTracker(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Changed On</para>
		/// <para><strong>Description</strong>: Date and time when the column ChangedVersionNumber was changed.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ChangedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ChangedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ChangedVersionNumber</para>
		/// <para><strong>Description</strong>: Database time stamp when user authorization settings were changed</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? ChangedVersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.ChangedVersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Computed On</para>
		/// <para><strong>Description</strong>: Date and time when the column ComputedVersionNumber was changed.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ComputedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ComputedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ComputedVersionNumber</para>
		/// <para><strong>Description</strong>: Database time stamp when user authorization data were started recompute</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? ComputedVersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.ComputedVersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SystemUserId); }
			set { Entity.Attributes[Fields.SystemUserId] = value; }
		}
	}
}