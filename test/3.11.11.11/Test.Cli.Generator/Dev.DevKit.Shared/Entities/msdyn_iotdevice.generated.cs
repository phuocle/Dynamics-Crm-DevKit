﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets
{
	public enum msdyn_IsSimulated
	{
		/// <summary>
		/// No = 192350001
		/// </summary>
		No = 192350001,
		/// <summary>
		/// Yes = 192350000
		/// </summary>
		Yes = 192350000
	}

	public enum msdyn_RegistrationStatus
	{
		/// <summary>
		/// Error = 192350004
		/// </summary>
		Error = 192350004,
		/// <summary>
		/// In Progress = 192350002
		/// </summary>
		In_Progress = 192350002,
		/// <summary>
		/// Registered = 192350003
		/// </summary>
		Registered = 192350003,
		/// <summary>
		/// Unknown = 192350000
		/// </summary>
		Unknown = 192350000,
		/// <summary>
		/// Unregistered = 192350001
		/// </summary>
		Unregistered = 192350001
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
	public partial class msdyn_iotdevice : EntityBase
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
			public const string msdyn_Account = "msdyn_account";
			public const string msdyn_Category = "msdyn_category";
			public const string msdyn_ConnectionState = "msdyn_connectionstate";
			public const string msdyn_DeviceId = "msdyn_deviceid";
			public const string msdyn_DeviceReportedProperties = "msdyn_devicereportedproperties";
			public const string msdyn_DeviceSettings = "msdyn_devicesettings";
			public const string msdyn_iotdeviceId = "msdyn_iotdeviceid";
			public const string msdyn_IoTProviderInstance = "msdyn_iotproviderinstance";
			public const string msdyn_IsSimulated = "msdyn_issimulated";
			public const string msdyn_LastActivityTime = "msdyn_lastactivitytime";
			public const string msdyn_LastCommandSent = "msdyn_lastcommandsent";
			public const string msdyn_LastCommandSentTime = "msdyn_lastcommandsenttime";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_RegistrationMessage = "msdyn_registrationmessage";
			public const string msdyn_RegistrationStatus = "msdyn_registrationstatus";
			public const string msdyn_Tags = "msdyn_tags";
			public const string msdyn_Timezone = "msdyn_timezone";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_iotdevice";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10166;

		[DebuggerNonUserCode()]
		public msdyn_iotdevice()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevice(Guid msdyn_iotdeviceId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_iotdeviceId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevice(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevice(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevice(Entity entity, Entity merge)
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
		public msdyn_iotdevice(KeyAttributeCollection keys)
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
		/// <para>Parent customer of this device</para>
		/// <para>Lookup to account</para>
		/// <para>Account</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Account
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Account); }
			set { Entity.Attributes[Fields.msdyn_Account] = value; }
		}

		/// <summary>
		/// <para>The device category that this IoT device belongs to.</para>
		/// <para>Lookup to msdyn_iotdevicecategory</para>
		/// <para>Category</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Category
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Category); }
			set { Entity.Attributes[Fields.msdyn_Category] = value; }
		}

		/// <summary>
		/// <para>The connection status of the device (Disconnected or Connected)</para>
		/// <para>Boolean</para>
		/// <para>Connection State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_ConnectionState
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_ConnectionState); }
			set { Entity.Attributes[Fields.msdyn_ConnectionState] = value; }
		}

		/// <summary>
		/// <para>Device ID used to register with the IoT provider.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Device ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DeviceId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DeviceId); }
			set { Entity.Attributes[Fields.msdyn_DeviceId] = value; }
		}

		/// <summary>
		/// <para>Reported Properties data for Device</para>
		/// <para>Memo - MaxLength: 8000</para>
		/// <para>Device Reported Properties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DeviceReportedProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DeviceReportedProperties); }
			set { Entity.Attributes[Fields.msdyn_DeviceReportedProperties] = value; }
		}

		/// <summary>
		/// <para>The editable properties for a device.</para>
		/// <para>Memo - MaxLength: 8000</para>
		/// <para>Device Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DeviceSettings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DeviceSettings); }
			set { Entity.Attributes[Fields.msdyn_DeviceSettings] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>IoT Device</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_iotdeviceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_iotdeviceId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>The IoT Provider Instance to which this device belongs.</para>
		/// <para>Lookup to msdyn_iotproviderinstance</para>
		/// <para>IoT Provider Instance</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_IoTProviderInstance
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_IoTProviderInstance); }
			set { Entity.Attributes[Fields.msdyn_IoTProviderInstance] = value; }
		}

		/// <summary>
		/// <para>Select “Yes” if this device is simulated for testing and development purposes. Select “No” if this is a real device.​</para>
		/// <para>Picklist</para>
		/// <para>Simulated</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.msdyn_IsSimulated? msdyn_IsSimulated
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_IsSimulated);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.msdyn_IsSimulated)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_IsSimulated] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_IsSimulated] = null;
			}
		}

		/// <summary>
		/// <para>The last activity time of the device</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Last Activity Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_LastActivityTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_LastActivityTime); }
			set { Entity.Attributes[Fields.msdyn_LastActivityTime] = value; }
		}

		/// <summary>
		/// <para>Lookup to msdyn_iotdevicecommand</para>
		/// <para>[Deprecated] Last Command Sent</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_LastCommandSent
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_LastCommandSent); }
			set { Entity.Attributes[Fields.msdyn_LastCommandSent] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>[Deprecated] Last Command Sent Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_LastCommandSentTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_LastCommandSentTime); }
			set { Entity.Attributes[Fields.msdyn_LastCommandSentTime] = value; }
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
		/// <para>A message field that explains the IoT Registration Status.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Registration Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RegistrationMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RegistrationMessage); }
			set { Entity.Attributes[Fields.msdyn_RegistrationMessage] = value; }
		}

		/// <summary>
		/// <para>A status field that denotes whether the device is registered with the IoT provider.</para>
		/// <para>Picklist</para>
		/// <para>Registration Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.msdyn_RegistrationStatus? msdyn_RegistrationStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_RegistrationStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.msdyn_RegistrationStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_RegistrationStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_RegistrationStatus] = null;
			}
		}

		/// <summary>
		/// <para>Identifying Tags for the Device</para>
		/// <para>Memo - MaxLength: 8000</para>
		/// <para>Device Tags</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Tags
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Tags); }
			set { Entity.Attributes[Fields.msdyn_Tags] = value; }
		}

		/// <summary>
		/// <para>The device&apos;s time zone.</para>
		/// <para>Integer - MinValue: -1,500 - MaxValue: 1,500</para>
		/// <para>Time Zone</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_Timezone
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_Timezone); }
			set { Entity.Attributes[Fields.msdyn_Timezone] = value; }
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
		/// <para>Lookup to systemuser, team</para>
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
		/// <para>Status of the IoT Device</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the IoT Device</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdeviceOptionSets.statuscode)value.Value;
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
