﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets
{
	public enum msdyn_CommandStatus
	{
		/// <summary>
		/// Error = 192350002
		/// </summary>
		Error = 192350002,
		/// <summary>
		/// In Progress = 192350000
		/// </summary>
		In_Progress = 192350000,
		/// <summary>
		/// Sent = 192350001
		/// </summary>
		Sent = 192350001
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
	public partial class msdyn_iotdevicecommand : EntityBase
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
			public const string msdyn_Command = "msdyn_command";
			public const string msdyn_CommandStatus = "msdyn_commandstatus";
			public const string msdyn_CommandStatusReason = "msdyn_commandstatusreason";
			public const string msdyn_CustomerAsset = "msdyn_customerasset";
			public const string msdyn_Device = "msdyn_device";
			public const string msdyn_DeviceID = "msdyn_deviceid";
			public const string msdyn_iotdevicecommandId = "msdyn_iotdevicecommandid";
			public const string msdyn_Message = "msdyn_message";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_ParentAlert = "msdyn_parentalert";
			public const string msdyn_SendToAllConnectedDevices = "msdyn_sendtoallconnecteddevices";
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

		public const string EntityLogicalName = "msdyn_iotdevicecommand";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10168;

		[DebuggerNonUserCode()]
		public msdyn_iotdevicecommand()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevicecommand(Guid msdyn_iotdevicecommandId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_iotdevicecommandId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevicecommand(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevicecommand(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_iotdevicecommand(Entity entity, Entity merge)
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
		public msdyn_iotdevicecommand(KeyAttributeCollection keys)
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
		/// <para>This optional field denotes the command definition that is used to construct the command string.</para>
		/// <para>Lookup to msdyn_iotdevicecommanddefinition</para>
		/// <para>Command</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Command
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Command); }
			set { Entity.Attributes[Fields.msdyn_Command] = value; }
		}

		/// <summary>
		/// <para>Describes the status of the command. If this stays at &quot;In Progress&quot; for a long time, verify the IoT endpoint configuration.</para>
		/// <para>Picklist</para>
		/// <para>Command Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.msdyn_CommandStatus? msdyn_CommandStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_CommandStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.msdyn_CommandStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_CommandStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_CommandStatus] = null;
			}
		}

		/// <summary>
		/// <para>A reason field that explains the command status.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Command Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CommandStatusReason
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CommandStatusReason); }
			set { Entity.Attributes[Fields.msdyn_CommandStatusReason] = value; }
		}

		/// <summary>
		/// <para>The command will be sent to a device connected to this asset.</para>
		/// <para>Lookup to msdyn_customerasset</para>
		/// <para>Customer Asset</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_CustomerAsset
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_CustomerAsset); }
			set { Entity.Attributes[Fields.msdyn_CustomerAsset] = value; }
		}

		/// <summary>
		/// <para>IoT device to send the message to.</para>
		/// <para>Lookup to msdyn_iotdevice</para>
		/// <para>Device</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Device
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Device); }
			set { Entity.Attributes[Fields.msdyn_Device] = value; }
		}

		/// <summary>
		/// <para>The ID of the IoT device to send the message to.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Device ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DeviceID
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DeviceID); }
			set { Entity.Attributes[Fields.msdyn_DeviceID] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>IoT Device Command</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_iotdevicecommandId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_iotdevicecommandId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Message to send to the IoT device. E.g.: A Json string.</para>
		/// <para>Memo - MaxLength: 8192</para>
		/// <para>Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Message
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Message); }
			set { Entity.Attributes[Fields.msdyn_Message] = value; }
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
		/// <para>Reference to a primary alert in response to which the message is being sent.</para>
		/// <para>Lookup to msdyn_iotalert</para>
		/// <para>Primary Alert</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_ParentAlert
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_ParentAlert); }
			set { Entity.Attributes[Fields.msdyn_ParentAlert] = value; }
		}

		/// <summary>
		/// <para>Yes, if a copy of the command should be sent to all registered devices connected under the parent entity of the selected device. No, if this command needs to be sent only to the selected device.</para>
		/// <para>Boolean</para>
		/// <para>Send To All Connected Devices</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_SendToAllConnectedDevices
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_SendToAllConnectedDevices); }
			set { Entity.Attributes[Fields.msdyn_SendToAllConnectedDevices] = value; }
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
		/// <para>Status of the IoT Device Command</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the IoT Device Command</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_iotdevicecommandOptionSets.statuscode)value.Value;
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