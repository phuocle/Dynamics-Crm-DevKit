﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets
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

	public enum ProfileState
	{
		/// <summary>
		/// Aborted = 5
		/// </summary>
		Aborted = 5,
		/// <summary>
		/// Aborting = 4
		/// </summary>
		Aborting = 4,
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Deactivated = 8
		/// </summary>
		Deactivated = 8,
		/// <summary>
		/// Deleted = 3
		/// </summary>
		Deleted = 3,
		/// <summary>
		/// Error = 2
		/// </summary>
		Error = 2,
		/// <summary>
		/// Inactive = 0
		/// </summary>
		Inactive = 0,
		/// <summary>
		/// Suspended = 6
		/// </summary>
		Suspended = 6,
		/// <summary>
		/// Suspending = 7
		/// </summary>
		Suspending = 7
	}

	public enum ProfileType
	{
		/// <summary>
		/// EventAnalytics = 1
		/// </summary>
		EventAnalytics = 1,
		/// <summary>
		/// SynapseLink = 0
		/// </summary>
		SynapseLink = 0
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
	public partial class synapselinkprofile : EntityBase
	{
		public struct Fields
		{
			public const string ActivationTime = "activationtime";
			public const string ComponentIdUnique = "componentidunique";
			public const string ComponentState = "componentstate";
			public const string CopyAttachments = "copyattachments";
			public const string CopyFiles = "copyfiles";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string datalakefolder = "datalakefolder";
			public const string ExtendedProperties = "extendedproperties";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OverwriteTime = "overwritetime";
			public const string ProfileState = "profilestate";
			public const string ProfileType = "profiletype";
			public const string ProfileUpdatedTime = "profileupdatedtime";
			public const string ProfileVersion = "profileversion";
			public const string SnapshotsToPersist = "snapshotstopersist";
			public const string SolutionId = "solutionid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string synapselinkprofileId = "synapselinkprofileid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UniqueName = "uniquename";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "synapselinkprofile";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10032;

		[DebuggerNonUserCode()]
		public synapselinkprofile()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public synapselinkprofile(Guid synapselinkprofileId)
		{
			Entity = new Entity(EntityLogicalName, synapselinkprofileId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public synapselinkprofile(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public synapselinkprofile(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public synapselinkprofile(Entity entity, Entity merge)
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
		public synapselinkprofile(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Activation time of profile</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Activation Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ActivationTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ActivationTime); }
			set { Entity.Attributes[Fields.ActivationTime] = value; }
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
		public Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Enable Copy Attachments</para>
		/// <para>Required - Boolean</para>
		/// <para>Copy Attachments</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? CopyAttachments
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.CopyAttachments); }
			set { Entity.Attributes[Fields.CopyAttachments] = value; }
		}

		/// <summary>
		/// <para>Enable Copy Files</para>
		/// <para>Required - Boolean</para>
		/// <para>Copy Files</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? CopyFiles
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.CopyFiles); }
			set { Entity.Attributes[Fields.CopyFiles] = value; }
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
		/// <para>Unique identifier for Data Lake Folder associated with Synapse Link Profile.</para>
		/// <para>Lookup to datalakefolder</para>
		/// <para>Data Lake Folder</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference datalakefolder
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.datalakefolder); }
			set { Entity.Attributes[Fields.datalakefolder] = value; }
		}

		/// <summary>
		/// <para>Extended properties</para>
		/// <para>Memo - MaxLength: 4000</para>
		/// <para>Extended Properties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExtendedProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExtendedProperties); }
			set { Entity.Attributes[Fields.ExtendedProperties] = value; }
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
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string name
		{
			get { return Entity.GetAttributeValue<string>(Fields.name); }
			set { Entity.Attributes[Fields.name] = value; }
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
		/// <para>State of the profile</para>
		/// <para>Required - Picklist</para>
		/// <para>Profile State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ProfileState? ProfileState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ProfileState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ProfileState)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ProfileState] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ProfileState] = null;
			}
		}

		/// <summary>
		/// <para>Type of profile</para>
		/// <para>Required - Picklist</para>
		/// <para>Profile Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ProfileType? ProfileType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ProfileType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.ProfileType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ProfileType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ProfileType] = null;
			}
		}

		/// <summary>
		/// <para>Profile Updated Time</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Profile Updated Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ProfileUpdatedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ProfileUpdatedTime); }
			set { Entity.Attributes[Fields.ProfileUpdatedTime] = value; }
		}

		/// <summary>
		/// <para>Profile version</para>
		/// <para>Required - String - MaxLength: 32</para>
		/// <para>Profile Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ProfileVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.ProfileVersion); }
			set { Entity.Attributes[Fields.ProfileVersion] = value; }
		}

		/// <summary>
		/// <para>Number of snapshots To persist</para>
		/// <para>Required - Integer - MinValue: 0 - MaxValue: 100</para>
		/// <para>Snapshots To Persist</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SnapshotsToPersist
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SnapshotsToPersist); }
			set { Entity.Attributes[Fields.SnapshotsToPersist] = value; }
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
		/// <para>Status of the Synapse Link Profile</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Synapse Link Profile</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.synapselinkprofileOptionSets.statuscode)value.Value;
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
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Synapse Link Profile</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid synapselinkprofileId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.synapselinkprofileId] = value;
				Entity.Id = value;
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
		/// <para>Unique name</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Unique Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UniqueName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UniqueName); }
			set { Entity.Attributes[Fields.UniqueName] = value; }
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
