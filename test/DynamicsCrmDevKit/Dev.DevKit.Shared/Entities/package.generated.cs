﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.packageOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1
	}

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class package : EntityBase
	{
		public struct Fields
		{
			public const string AppId = "appid";
			public const string ApplicationName = "applicationname";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string InstalledOn = "installedon";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string packageId = "packageid";
			public const string PackageInstanceId = "packageinstanceid";
			public const string PackageInstanceOperationId = "packageinstanceoperationid";
			public const string PackageUniqueName = "packageuniquename";
			public const string PackageVersion = "packageversion";
			public const string PublisherId = "publisherid";
			public const string PublisherName = "publishername";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TPSPackageId = "tpspackageid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "package";

		public const int EntityTypeCode = 10077;

		[DebuggerNonUserCode()]
		public package()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public package(Guid packageId)
		{
			Entity = new Entity(EntityLogicalName, packageId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public package(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public package(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public package(Entity entity, Entity merge)
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
		public package(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para>AppId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? AppId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.AppId); }
			set { Entity.Attributes[Fields.AppId] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>ApplicationName</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ApplicationName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ApplicationName); }
			set { Entity.Attributes[Fields.ApplicationName] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Sequence number of the import that created this record.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}

		/// <summary>
		/// <para>Date and time when the package was first installed.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Installed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? InstalledOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.InstalledOn); }
			set { Entity.Attributes[Fields.InstalledOn] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Date and time that the record was migrated.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>PackageId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid packageId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.packageId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para>PackageInstanceId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PackageInstanceId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PackageInstanceId); }
			set { Entity.Attributes[Fields.PackageInstanceId] = value; }
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para>PackageInstanceOperationId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PackageInstanceOperationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PackageInstanceOperationId); }
			set { Entity.Attributes[Fields.PackageInstanceOperationId] = value; }
		}

		/// <summary>
		/// <para>The unique name of the package.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Package Unique Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PackageUniqueName
		{
			get { return Entity.GetAttributeValue<string>(Fields.PackageUniqueName); }
			set { Entity.Attributes[Fields.PackageUniqueName] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>PackageVersion</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PackageVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.PackageVersion); }
			set { Entity.Attributes[Fields.PackageVersion] = value; }
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para>PublisherId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PublisherId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PublisherId); }
			set { Entity.Attributes[Fields.PublisherId] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>PublisherName</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublisherName
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublisherName); }
			set { Entity.Attributes[Fields.PublisherName] = value; }
		}

		/// <summary>
		/// <para>Status of the Package</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.packageOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.packageOptionSets.statecode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statecode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statecode] = null;
			}
		}

		/// <summary>
		/// <para>Reason for the status of the Package</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.packageOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.packageOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para>TPSPackageId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TPSPackageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TPSPackageId); }
			set { Entity.Attributes[Fields.TPSPackageId] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}

		/// <summary>
		/// <para>Version Number</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}