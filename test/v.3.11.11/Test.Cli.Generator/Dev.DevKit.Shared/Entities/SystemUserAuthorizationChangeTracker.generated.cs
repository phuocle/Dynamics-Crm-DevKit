﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

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

		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker()
		{
			Entity = new Entity(EntityLogicalName);
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

		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemUserAuthorizationChangeTracker(Entity entity, Entity merge)
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
		public SystemUserAuthorizationChangeTracker(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Date and time when the column ChangedVersionNumber was changed.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Changed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ChangedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ChangedOn); }
		}

		/// <summary>
		/// <para>Database time stamp when user authorization settings were changed</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>ChangedVersionNumber</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? ChangedVersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.ChangedVersionNumber); }
		}

		/// <summary>
		/// <para>Date and time when the column ComputedVersionNumber was changed.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Computed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ComputedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ComputedOn); }
		}

		/// <summary>
		/// <para>Database time stamp when user authorization data were started recompute</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>ComputedVersionNumber</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? ComputedVersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.ComputedVersionNumber); }
		}

		/// <summary>
		/// <para>Unique identifier for the user</para>
		/// <para>Uniqueidentifier</para>
		/// <para>User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SystemUserId); }
			set { Entity.Attributes[Fields.SystemUserId] = value; }
		}
	}
}