﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.PrincipalObjectAccessOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class PrincipalObjectAccess : EntityBase
	{
		public struct Fields
		{
			public const string AccessRightsMask = "accessrightsmask";
			public const string ChangedOn = "changedon";
			public const string InheritedAccessRightsMask = "inheritedaccessrightsmask";
			public const string ObjectId = "objectid";
			public const string PrincipalId = "principalid";
			public const string PrincipalObjectAccessId = "principalobjectaccessid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "principalobjectaccess";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11;

		[DebuggerNonUserCode()]
		public PrincipalObjectAccess()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PrincipalObjectAccess(Guid PrincipalObjectAccessId)
		{
			Entity = new Entity(EntityLogicalName, PrincipalObjectAccessId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PrincipalObjectAccess(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PrincipalObjectAccess(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PrincipalObjectAccess(Entity entity, Entity merge)
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
		public PrincipalObjectAccess(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AccessRightsMask
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AccessRightsMask); }
			set { Entity.Attributes[Fields.AccessRightsMask] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ChangedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ChangedOn); }
			set { Entity.Attributes[Fields.ChangedOn] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? InheritedAccessRightsMask
		{
			get { return Entity.GetAttributeValue<int?>(Fields.InheritedAccessRightsMask); }
			set { Entity.Attributes[Fields.InheritedAccessRightsMask] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PrincipalId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PrincipalId); }
		}

		/// <summary>
		/// <para>Unique identifier of the principal object access.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PrincipalObjectAccessId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.PrincipalObjectAccessId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
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
