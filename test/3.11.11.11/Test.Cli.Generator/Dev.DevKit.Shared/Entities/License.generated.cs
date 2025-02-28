﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.LicenseOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class License : EntityBase
	{
		public struct Fields
		{
			public const string InstalledOn = "installedon";
			public const string LicenseId = "licenseid";
			public const string LicenseKey = "licensekey";
			public const string LicenseType = "licensetype";
			public const string OrganizationId = "organizationid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
		}

		public const string EntityLogicalName = "license";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 2027;

		[DebuggerNonUserCode()]
		public License()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public License(Guid LicenseId)
		{
			Entity = new Entity(EntityLogicalName, LicenseId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public License(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public License(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public License(Entity entity, Entity merge)
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
		public License(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Date and time when the license was installed.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? InstalledOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.InstalledOn); }
			set { Entity.Attributes[Fields.InstalledOn] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the license.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid LicenseId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.LicenseId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Key for the license.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string LicenseKey
		{
			get { return Entity.GetAttributeValue<string>(Fields.LicenseKey); }
			set { Entity.Attributes[Fields.LicenseKey] = value; }
		}

		/// <summary>
		/// <para>Type of license, such as Professional, Standard, or Suite.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? LicenseType
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.LicenseType); }
			set { Entity.Attributes[Fields.LicenseType] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the license.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
	}
}
