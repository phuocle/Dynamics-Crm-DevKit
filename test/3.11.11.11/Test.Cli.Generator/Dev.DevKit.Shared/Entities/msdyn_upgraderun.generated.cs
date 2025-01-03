﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets
{
	public enum msdyn_Status
	{
		/// <summary>
		/// Failure = 100000002
		/// </summary>
		Failure = 100000002,
		/// <summary>
		/// Started = 100000000
		/// </summary>
		Started = 100000000,
		/// <summary>
		/// Success = 100000001
		/// </summary>
		Success = 100000001
	}

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
	[DebuggerNonUserCode()]
	public partial class msdyn_upgraderun : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_Error = "msdyn_error";
			public const string msdyn_FinishedDate = "msdyn_finished";
			public const string msdyn_Package = "msdyn_package";
			public const string msdyn_Solution = "msdyn_solution";
			public const string msdyn_StartingVersion = "msdyn_startingversion";
			public const string msdyn_Status = "msdyn_status";
			public const string msdyn_Summary = "msdyn_summary";
			public const string msdyn_TargetVersion = "msdyn_targetversion";
			public const string msdyn_upgraderunId = "msdyn_upgraderunid";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_upgraderun";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10139;

		[DebuggerNonUserCode()]
		public msdyn_upgraderun()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_upgraderun(Guid msdyn_upgraderunId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_upgraderunId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_upgraderun(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_upgraderun(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_upgraderun(Entity entity, Entity merge)
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
		public msdyn_upgraderun(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
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
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Started</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
			set { Entity.Attributes[Fields.CreatedOn] = value; }
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
		/// <para>Errors during upgrade or installation, if any</para>
		/// <para>Memo - MaxLength: 4000</para>
		/// <para>Error</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Error
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Error); }
			set { Entity.Attributes[Fields.msdyn_Error] = value; }
		}

		/// <summary>
		/// <para>Date/time when an upgrade run finished</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Finished Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_FinishedDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_FinishedDate); }
			set { Entity.Attributes[Fields.msdyn_FinishedDate] = value; }
		}

		/// <summary>
		/// <para>Name of the Package Deployer package</para>
		/// <para>Required - String - MaxLength: 200</para>
		/// <para>Package Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Package
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Package); }
			set { Entity.Attributes[Fields.msdyn_Package] = value; }
		}

		/// <summary>
		/// <para>Name of the Solution that is upgraded</para>
		/// <para>Required - String - MaxLength: 200</para>
		/// <para>Solution Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Solution
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Solution); }
			set { Entity.Attributes[Fields.msdyn_Solution] = value; }
		}

		/// <summary>
		/// <para>Version that was installed before upgrade run</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Starting Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_StartingVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_StartingVersion); }
			set { Entity.Attributes[Fields.msdyn_StartingVersion] = value; }
		}

		/// <summary>
		/// <para>Status/outcome of an upgrade run</para>
		/// <para>Picklist</para>
		/// <para>Run Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.msdyn_Status? msdyn_Status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_Status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.msdyn_Status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_Status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_Status] = null;
			}
		}

		/// <summary>
		/// <para>Summary of an upgrade operation performed by Package Deployer</para>
		/// <para>Required - String - MaxLength: 4000</para>
		/// <para>Summary</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Summary
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Summary); }
			set { Entity.Attributes[Fields.msdyn_Summary] = value; }
		}

		/// <summary>
		/// <para>Version that will be achieved by the upgrade run</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Target Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TargetVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TargetVersion); }
			set { Entity.Attributes[Fields.msdyn_TargetVersion] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Upgrade Run</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_upgraderunId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_upgraderunId] = value;
				Entity.Id = value;
			}
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
		/// <para>Status of the UpgradeRun</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the UpgradeRun</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_upgraderunOptionSets.statuscode)value.Value;
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
