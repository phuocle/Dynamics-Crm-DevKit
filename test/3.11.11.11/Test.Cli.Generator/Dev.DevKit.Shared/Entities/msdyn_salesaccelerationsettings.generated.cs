﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets
{
	public enum msdyn_CalendarType
	{
		/// <summary>
		/// CRM = 0
		/// </summary>
		CRM = 0,
		/// <summary>
		/// Outlook = 1
		/// </summary>
		Outlook = 1
	}

	public enum statecode
	{
		/// <summary>
		/// Closed = 1
		/// </summary>
		Closed = 1,
		/// <summary>
		/// Open = 0
		/// </summary>
		Open = 0
	}

	public enum statuscode
	{
		/// <summary>
		/// Assignment Rules Published = 3
		/// </summary>
		Assignment_Rules_Published = 3,
		/// <summary>
		/// Published = 2
		/// </summary>
		Published = 2,
		/// <summary>
		/// Saved = 1
		/// </summary>
		Saved = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_salesaccelerationsettings : EntityBase
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
			public const string msdyn_CalendarType = "msdyn_calendartype";
			public const string msdyn_DisableWQAutoRefreshOnMarkComplete = "msdyn_disablewqautorefreshonmarkcomplete";
			public const string msdyn_EntityConfiguration = "msdyn_entityconfiguration";
			public const string msdyn_IsAutoCreatePhoneCallEnabled = "msdyn_isautocreatephonecallenabled";
			public const string msdyn_IsDefaultSetting = "msdyn_isdefaultsetting";
			public const string msdyn_IsSignalRNotificationEnabled = "msdyn_issignalrnotificationenabled";
			public const string msdyn_IsWorkScheduleEnabled = "msdyn_isworkscheduleenabled";
			public const string msdyn_linkingconfiguration = "msdyn_linkingconfiguration";
			public const string msdyn_LinkSequenceStepToActivity = "msdyn_linksequencesteptoactivity";
			public const string msdyn_MigrationStatus = "msdyn_migrationstatus";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_RecommendationSecurityRoles = "msdyn_recommendationsecurityroles";
			public const string msdyn_salesaccelerationsettingsId = "msdyn_salesaccelerationsettingsid";
			public const string msdyn_SecurityRoles = "msdyn_securityroles";
			public const string msdyn_SecurityRolesAssignmentRules = "msdyn_securityrolesassignmentrules";
			public const string msdyn_SecurityRolesNew = "msdyn_securityrolesnew";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_salesaccelerationsettings";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10305;

		[DebuggerNonUserCode()]
		public msdyn_salesaccelerationsettings()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_salesaccelerationsettings(Guid msdyn_salesaccelerationsettingsId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_salesaccelerationsettingsId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_salesaccelerationsettings(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_salesaccelerationsettings(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_salesaccelerationsettings(Entity entity, Entity merge)
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
		public msdyn_salesaccelerationsettings(KeyAttributeCollection keys)
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
		/// <para>Type of calendar to honour availability</para>
		/// <para>Picklist</para>
		/// <para>Calendar type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.msdyn_CalendarType? msdyn_CalendarType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_CalendarType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.msdyn_CalendarType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_CalendarType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_CalendarType] = null;
			}
		}

		/// <summary>
		/// <para>Indicates whether when Mark Complete is done on a step/manual activity, is the WQ to be refreshed or not</para>
		/// <para>Boolean</para>
		/// <para>Should disable auto WQ refresh on Mark Complete</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_DisableWQAutoRefreshOnMarkComplete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_DisableWQAutoRefreshOnMarkComplete); }
			set { Entity.Attributes[Fields.msdyn_DisableWQAutoRefreshOnMarkComplete] = value; }
		}

		/// <summary>
		/// <para>Entity configuration for the work queue</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Entity configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_EntityConfiguration
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_EntityConfiguration); }
			set { Entity.Attributes[Fields.msdyn_EntityConfiguration] = value; }
		}

		/// <summary>
		/// <para>Indicates whether automatic creation of phonecall activity record is enabled.</para>
		/// <para>Boolean</para>
		/// <para>Is Auto Create PhoneCall Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsAutoCreatePhoneCallEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsAutoCreatePhoneCallEnabled); }
			set { Entity.Attributes[Fields.msdyn_IsAutoCreatePhoneCallEnabled] = value; }
		}

		/// <summary>
		/// <para>Indicates whether the settings record is default.</para>
		/// <para>Boolean</para>
		/// <para>Is default setting</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsDefaultSetting
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsDefaultSetting); }
			set { Entity.Attributes[Fields.msdyn_IsDefaultSetting] = value; }
		}

		/// <summary>
		/// <para>Indicates whether receiving notifications from signalR is enabled or not.</para>
		/// <para>Boolean</para>
		/// <para>Is notification with SignalR enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsSignalRNotificationEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsSignalRNotificationEnabled); }
			set { Entity.Attributes[Fields.msdyn_IsSignalRNotificationEnabled] = value; }
		}

		/// <summary>
		/// <para>Indicates whether work schedule setting is enabled.</para>
		/// <para>Boolean</para>
		/// <para>Indicates whether work schedule setting is enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsWorkScheduleEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsWorkScheduleEnabled); }
			set { Entity.Attributes[Fields.msdyn_IsWorkScheduleEnabled] = value; }
		}

		/// <summary>
		/// <para>Admin configuration of linking between sequence step and activities</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Linking configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_linkingconfiguration
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_linkingconfiguration); }
			set { Entity.Attributes[Fields.msdyn_linkingconfiguration] = value; }
		}

		/// <summary>
		/// <para>Indicates whether sequence step should be linked to activity created from it.</para>
		/// <para>Boolean</para>
		/// <para>Should link sequence step to activity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_LinkSequenceStepToActivity
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_LinkSequenceStepToActivity); }
			set { Entity.Attributes[Fields.msdyn_LinkSequenceStepToActivity] = value; }
		}

		/// <summary>
		/// <para>Status of Migration</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Migration Staus</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_MigrationStatus
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_MigrationStatus); }
			set { Entity.Attributes[Fields.msdyn_MigrationStatus] = value; }
		}

		/// <summary>
		/// <para>The name of the Sales Acceleration settings instance.</para>
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
		/// <para>Suggestion Security roles enabled for the settings instance</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Suggestion Security role list</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RecommendationSecurityRoles
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RecommendationSecurityRoles); }
			set { Entity.Attributes[Fields.msdyn_RecommendationSecurityRoles] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for Sales Acceleration settings instance</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Sales Acceleration setting ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_salesaccelerationsettingsId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_salesaccelerationsettingsId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Security roles enabled for the settings instance</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Security role list</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SecurityRoles
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SecurityRoles); }
			set { Entity.Attributes[Fields.msdyn_SecurityRoles] = value; }
		}

		/// <summary>
		/// <para>Security roles list for assignment rules</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Security role list for assignment rules</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SecurityRolesAssignmentRules
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SecurityRolesAssignmentRules); }
			set { Entity.Attributes[Fields.msdyn_SecurityRolesAssignmentRules] = value; }
		}

		/// <summary>
		/// <para>Security roles (new) enabled for the settings instance</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Security role list (new)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SecurityRolesNew
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SecurityRolesNew); }
			set { Entity.Attributes[Fields.msdyn_SecurityRolesNew] = value; }
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
		/// <para>Status of the Sales Acceleration settings</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Sales Acceleration settings</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_salesaccelerationsettingsOptionSets.statuscode)value.Value;
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
