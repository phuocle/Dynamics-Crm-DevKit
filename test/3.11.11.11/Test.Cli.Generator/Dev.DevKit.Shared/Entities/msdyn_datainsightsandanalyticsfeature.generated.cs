﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets
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

	public enum msdyn_provisionstatus
	{
		/// <summary>
		/// Not Provisioned = 192350001
		/// </summary>
		Not_Provisioned = 192350001,
		/// <summary>
		/// Provision Failed = 192350002
		/// </summary>
		Provision_Failed = 192350002,
		/// <summary>
		/// Provision in Progress = 192350003
		/// </summary>
		Provision_in_Progress = 192350003,
		/// <summary>
		/// Provisioned = 192350000
		/// </summary>
		Provisioned = 192350000
	}

	public enum msdyn_reporttype
	{
		/// <summary>
		/// Default = 192350000
		/// </summary>
		Default = 192350000,
		/// <summary>
		/// Draft = 192350002
		/// </summary>
		Draft = 192350002,
		/// <summary>
		/// Published = 192350001
		/// </summary>
		Published = 192350001
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
	public partial class msdyn_datainsightsandanalyticsfeature : EntityBase
	{
		public struct Fields
		{
			public const string ComponentIdUnique = "componentidunique";
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_analyticschecksum = "msdyn_analyticschecksum";
			public const string msdyn_datainsightsandanalyticsfeatureId = "msdyn_datainsightsandanalyticsfeatureid";
			public const string msdyn_iscustomizationsupported = "msdyn_iscustomizationsupported";
			public const string msdyn_isdemoenabled = "msdyn_isdemoenabled";
			public const string msdyn_isenabled = "msdyn_isenabled";
			public const string msdyn_lastaccesstime = "msdyn_lastaccesstime";
			public const string msdyn_lastreportrefreshtime = "msdyn_lastreportrefreshtime";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_provisionstatus = "msdyn_provisionstatus";
			public const string msdyn_reporttype = "msdyn_reporttype";
			public const string msdyn_schedule = "msdyn_schedule";
			public const string msdyn_templateid = "msdyn_templateid";
			public const string msdyn_timezonecode = "msdyn_timezonecode";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OverwriteTime = "overwritetime";
			public const string SolutionId = "solutionid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_datainsightsandanalyticsfeature";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10230;

		[DebuggerNonUserCode()]
		public msdyn_datainsightsandanalyticsfeature()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_datainsightsandanalyticsfeature(Guid msdyn_datainsightsandanalyticsfeatureId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_datainsightsandanalyticsfeatureId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_datainsightsandanalyticsfeature(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_datainsightsandanalyticsfeature(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_datainsightsandanalyticsfeature(Entity entity, Entity merge)
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
		public msdyn_datainsightsandanalyticsfeature(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Row id unique</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ComponentIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ComponentIdUnique); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.ComponentState)value.Value;
			}
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
		/// <para>Indicates whether the solution component is part of a managed solution.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Managed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
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
		/// <para>Internal analytics checksum</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Analytics Checksum</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_analyticschecksum
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_analyticschecksum); }
			set { Entity.Attributes[Fields.msdyn_analyticschecksum] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>DataInsightsAndAnalyticsFeature</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_datainsightsandanalyticsfeatureId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_datainsightsandanalyticsfeatureId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Is Customization Supported</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Customization Supported</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_iscustomizationsupported
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_iscustomizationsupported); }
		}

		/// <summary>
		/// <para>Is Demo Enabled</para>
		/// <para>Boolean</para>
		/// <para>Is Demo Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isdemoenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isdemoenabled); }
			set { Entity.Attributes[Fields.msdyn_isdemoenabled] = value; }
		}

		/// <summary>
		/// <para>Is Enabled</para>
		/// <para>Boolean</para>
		/// <para>Is Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isenabled); }
			set { Entity.Attributes[Fields.msdyn_isenabled] = value; }
		}

		/// <summary>
		/// <para>Record the most recent usage of the feature</para>
		/// <para>DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateAndTime</para>
		/// <para>Last Access Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_lastaccesstime
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_lastaccesstime); }
			set { Entity.Attributes[Fields.msdyn_lastaccesstime] = value; }
		}

		/// <summary>
		/// <para>Last Report Refresh Time</para>
		/// <para>DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateAndTime</para>
		/// <para>Last Report Refresh Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_lastreportrefreshtime
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_lastreportrefreshtime); }
			set { Entity.Attributes[Fields.msdyn_lastreportrefreshtime] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Provision Status</para>
		/// <para>Picklist</para>
		/// <para>Provision Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.msdyn_provisionstatus? msdyn_provisionstatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_provisionstatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.msdyn_provisionstatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_provisionstatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_provisionstatus] = null;
			}
		}

		/// <summary>
		/// <para>Report Type</para>
		/// <para>Picklist</para>
		/// <para>Report Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.msdyn_reporttype? msdyn_reporttype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_reporttype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.msdyn_reporttype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_reporttype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_reporttype] = null;
			}
		}

		/// <summary>
		/// <para>Job Schedule for the feature</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Schedule</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_schedule
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_schedule); }
			set { Entity.Attributes[Fields.msdyn_schedule] = value; }
		}

		/// <summary>
		/// <para>Template Id for Reports</para>
		/// <para>Required - String - MaxLength: 36</para>
		/// <para>Template Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_templateid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_templateid); }
			set { Entity.Attributes[Fields.msdyn_templateid] = value; }
		}

		/// <summary>
		/// <para>timezonecode from TimeZoneDefinition Entity for the Job Schedule</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Job Schedule Timezone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_timezonecode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_timezonecode); }
			set { Entity.Attributes[Fields.msdyn_timezonecode] = value; }
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
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>Unique identifier of the associated solution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		/// <summary>
		/// <para>Status of the DataInsightsAndAnalyticsFeature</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the DataInsightsAndAnalyticsFeature</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_datainsightsandanalyticsfeatureOptionSets.statuscode)value.Value;
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
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
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
