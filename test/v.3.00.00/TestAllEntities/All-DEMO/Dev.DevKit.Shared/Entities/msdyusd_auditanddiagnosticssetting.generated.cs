﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets
{
	public enum msdyusd_DGTVerbosityLevel
	{
		/// <summary>
		/// Error = 100000000
		/// </summary>
		Error = 100000000,
		/// <summary>
		/// Information = 100000002
		/// </summary>
		Information = 100000002,
		/// <summary>
		/// Verbose = 100000003
		/// </summary>
		Verbose = 100000003,
		/// <summary>
		/// Warning = 100000001
		/// </summary>
		Warning = 100000001
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
	public partial class msdyusd_auditanddiagnosticssetting : EntityBase
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
			public const string msdyusd_ATEnabled = "msdyusd_ATEnabled";
			public const string msdyusd_ATforActionCalls = "msdyusd_ATforActionCalls";
			public const string msdyusd_ATforAgentLogin = "msdyusd_ATforAgentLogin";
			public const string msdyusd_ATforAgentScripts = "msdyusd_ATforAgentScripts";
			public const string msdyusd_ATforCustomerSession = "msdyusd_ATforCustomerSession";
			public const string msdyusd_ATforEvents = "msdyusd_ATforEvents";
			public const string msdyusd_ATforHostedControl = "msdyusd_ATforHostedControl";
			public const string msdyusd_ATforSubActionCalls = "msdyusd_ATforSubActionCalls";
			public const string msdyusd_ATforUIIAction = "msdyusd_ATforUIIAction";
			public const string msdyusd_ATforWindowsNavRules = "msdyusd_ATforWindowsNavRules";
			public const string msdyusd_auditanddiagnosticssettingId = "msdyusd_auditanddiagnosticssettingid";
			public const string msdyusd_CacheSize = "msdyusd_CacheSize";
			public const string msdyusd_CrashDumpEnabled = "msdyusd_CrashDumpEnabled";
			public const string msdyusd_DGTEnabled = "msdyusd_DGTEnabled";
			public const string msdyusd_DGTVerbosityLevel = "msdyusd_DGTVerbosityLevel";
			public const string msdyusd_EnableCaching = "msdyusd_EnableCaching";
			public const string msdyusd_ExitMonitoringEnabled = "msdyusd_ExitMonitoringEnabled";
			public const string msdyusd_IsDefault = "msdyusd_isdefault";
			public const string msdyusd_LogsDirectory = "msdyusd_LogsDirectory";
			public const string msdyusd_MaxDiagnosticLogsSizeInMB = "msdyusd_MaxDiagnosticLogsSizeInMB";
			public const string msdyusd_name = "msdyusd_name";
			public const string msdyusd_ODDShortcut = "msdyusd_ODDShortcut";
			public const string msdyusd_ODPerfBeginShortcut = "msdyusd_odperfbeginshortcut";
			public const string msdyusd_ODPerfEndShortcut = "msdyusd_odperfendshortcut";
			public const string msdyusd_userschemasettings = "msdyusd_userschemasettings";
			public const string msdyusd_WEREnabled = "msdyusd_WEREnabled";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string processid = "processid";
			public const string stageid = "stageid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string traversedpath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyusd_auditanddiagnosticssetting";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10768;

		[DebuggerNonUserCode()]
		public msdyusd_auditanddiagnosticssetting()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_auditanddiagnosticssetting(Guid msdyusd_auditanddiagnosticssettingId)
		{
			Entity = new Entity(EntityLogicalName, msdyusd_auditanddiagnosticssettingId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_auditanddiagnosticssetting(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_auditanddiagnosticssetting(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyusd_auditanddiagnosticssetting(Entity entity, Entity merge)
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
		public msdyusd_auditanddiagnosticssetting(KeyAttributeCollection keys)
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
		/// <para>Select whether activity tracking should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATEnabled); }
			set { Entity.Attributes[Fields.msdyusd_ATEnabled] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for action calls should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Action Calls</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforActionCalls
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforActionCalls); }
			set { Entity.Attributes[Fields.msdyusd_ATforActionCalls] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for agent login should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Agent Login</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforAgentLogin
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforAgentLogin); }
			set { Entity.Attributes[Fields.msdyusd_ATforAgentLogin] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for agent scripts should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Agent Scripts</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforAgentScripts
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforAgentScripts); }
			set { Entity.Attributes[Fields.msdyusd_ATforAgentScripts] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for customer session should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Customer Session</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforCustomerSession
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforCustomerSession); }
			set { Entity.Attributes[Fields.msdyusd_ATforCustomerSession] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for events should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Events</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforEvents
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforEvents); }
			set { Entity.Attributes[Fields.msdyusd_ATforEvents] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for hosted controls should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Hosted Controls</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforHostedControl
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforHostedControl); }
			set { Entity.Attributes[Fields.msdyusd_ATforHostedControl] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for sub action calls should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Sub Action Calls</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforSubActionCalls
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforSubActionCalls); }
			set { Entity.Attributes[Fields.msdyusd_ATforSubActionCalls] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for UII Action should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for UII Action</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforUIIAction
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforUIIAction); }
			set { Entity.Attributes[Fields.msdyusd_ATforUIIAction] = value; }
		}

		/// <summary>
		/// <para>Select whether activity tracking for window navigation rules should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Activity Tracking for Windows Navigation Rules</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ATforWindowsNavRules
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ATforWindowsNavRules); }
			set { Entity.Attributes[Fields.msdyusd_ATforWindowsNavRules] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Audit & Diagnostics Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyusd_auditanddiagnosticssettingId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyusd_auditanddiagnosticssettingId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Cache Size Audit &amp; Diagnostics Setting.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>CacheSize</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyusd_CacheSize
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyusd_CacheSize); }
			set { Entity.Attributes[Fields.msdyusd_CacheSize] = value; }
		}

		/// <summary>
		/// <para>Choose whether to generate a memory dump for unhandled exceptions.</para>
		/// <para>Boolean</para>
		/// <para>Enable Crash Dump Generation</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_CrashDumpEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_CrashDumpEnabled); }
			set { Entity.Attributes[Fields.msdyusd_CrashDumpEnabled] = value; }
		}

		/// <summary>
		/// <para>Select whether diagnostic tracking should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Diagnostics Tracking Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_DGTEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_DGTEnabled); }
			set { Entity.Attributes[Fields.msdyusd_DGTEnabled] = value; }
		}

		/// <summary>
		/// <para>Select the verbosity level for diagnostics.</para>
		/// <para>Picklist</para>
		/// <para>Diagnostics Verbosity Level</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.msdyusd_DGTVerbosityLevel? msdyusd_DGTVerbosityLevel
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyusd_DGTVerbosityLevel);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.msdyusd_DGTVerbosityLevel)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyusd_DGTVerbosityLevel] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyusd_DGTVerbosityLevel] = null;
			}
		}

		/// <summary>
		/// <para>Select whether Enable Caching for UII Action should be enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Enable Caching UII Action</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_EnableCaching
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_EnableCaching); }
			set { Entity.Attributes[Fields.msdyusd_EnableCaching] = value; }
		}

		/// <summary>
		/// <para>Choose whether to collect a diagnostics report when the application closes unexpectedly.</para>
		/// <para>Boolean</para>
		/// <para>Enable Exit Monitoring</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_ExitMonitoringEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_ExitMonitoringEnabled); }
			set { Entity.Attributes[Fields.msdyusd_ExitMonitoringEnabled] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>Is Default</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_IsDefault
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_IsDefault); }
			set { Entity.Attributes[Fields.msdyusd_IsDefault] = value; }
		}

		/// <summary>
		/// <para>Enter the folder name where diagnostics logs are stored.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Diagnostics Logs Directory</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_LogsDirectory
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_LogsDirectory); }
			set { Entity.Attributes[Fields.msdyusd_LogsDirectory] = value; }
		}

		/// <summary>
		/// <para>Enter the maximum size in megabytes (MB) of the folder where diagnostics logs are stored.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Max Diagnostics Logs Size (MB)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyusd_MaxDiagnosticLogsSizeInMB
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyusd_MaxDiagnosticLogsSizeInMB); }
			set { Entity.Attributes[Fields.msdyusd_MaxDiagnosticLogsSizeInMB] = value; }
		}

		/// <summary>
		/// <para>Enter the name of the Audit &amp; Diagnostics Setting.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_name); }
			set { Entity.Attributes[Fields.msdyusd_name] = value; }
		}

		/// <summary>
		/// <para>Enter the shortcut key combination for on demand diagnostics report collection.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>On-Demand Diagnostics Shortcut</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_ODDShortcut
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_ODDShortcut); }
			set { Entity.Attributes[Fields.msdyusd_ODDShortcut] = value; }
		}

		/// <summary>
		/// <para>Shortcut to begin performance marker logs at runtime</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>On-Demand Begin Shortcut</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_ODPerfBeginShortcut
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_ODPerfBeginShortcut); }
			set { Entity.Attributes[Fields.msdyusd_ODPerfBeginShortcut] = value; }
		}

		/// <summary>
		/// <para>Shortcut to end performance marker logs at runtime</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>On-Demand End Shortcut</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_ODPerfEndShortcut
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_ODPerfEndShortcut); }
			set { Entity.Attributes[Fields.msdyusd_ODPerfEndShortcut] = value; }
		}

		/// <summary>
		/// <para>User Schema Settings</para>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>User Schema Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyusd_userschemasettings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyusd_userschemasettings); }
			set { Entity.Attributes[Fields.msdyusd_userschemasettings] = value; }
		}

		/// <summary>
		/// <para>Choose whether to enable Windows Error Reporting.</para>
		/// <para>Boolean</para>
		/// <para>Enable Windows Error Reporting</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyusd_WEREnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyusd_WEREnabled); }
			set { Entity.Attributes[Fields.msdyusd_WEREnabled] = value; }
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
		/// <para>Owner Id</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the business unit that owns the record</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Contains the id of the process associated with the entity.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Process Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? processid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.processid); }
			set { Entity.Attributes[Fields.processid] = value; }
		}

		/// <summary>
		/// <para>Contains the id of the stage where the entity is located.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>(Deprecated) Stage Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? stageid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.stageid); }
			set { Entity.Attributes[Fields.stageid] = value; }
		}

		/// <summary>
		/// <para>Status of the Audit &amp; Diagnostics Setting.</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.statecode)value.Value;
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
		/// <para>Status Reason of the Audit &amp; Diagnostics Setting.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyusd_auditanddiagnosticssettingOptionSets.statuscode)value.Value;
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
		/// <para>A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>(Deprecated) Traversed Path</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string traversedpath
		{
			get { return Entity.GetAttributeValue<string>(Fields.traversedpath); }
			set { Entity.Attributes[Fields.traversedpath] = value; }
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