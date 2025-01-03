﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_agreementinvoicesetupOptionSets
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
	[DebuggerNonUserCode()]
	public partial class msdyn_agreementinvoicesetup : EntityBase
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
			public const string msdyn_Agreement = "msdyn_agreement";
			public const string msdyn_agreementinvoicesetupId = "msdyn_agreementinvoicesetupid";
			public const string msdyn_Description = "msdyn_description";
			public const string msdyn_InternalFlags = "msdyn_internalflags";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_PostponeGenerationUntil = "msdyn_postponegenerationuntil";
			public const string msdyn_ProcessStartedOn = "msdyn_processstartedon";
			public const string msdyn_RecurrenceSettings = "msdyn_recurrencesettings";
			public const string msdyn_Revision = "msdyn_revision";
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

		public const string EntityLogicalName = "msdyn_agreementinvoicesetup";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10588;

		[DebuggerNonUserCode()]
		public msdyn_agreementinvoicesetup()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_agreementinvoicesetup(Guid msdyn_agreementinvoicesetupId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_agreementinvoicesetupId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_agreementinvoicesetup(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_agreementinvoicesetup(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_agreementinvoicesetup(Entity entity, Entity merge)
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
		public msdyn_agreementinvoicesetup(KeyAttributeCollection keys)
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
		/// <para>Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Shows who created the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Shows the sequence number of the import that created this record.</para>
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
		/// <para>Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Shows who last updated the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Agreement this Invoice Setup relates to</para>
		/// <para>Required - Lookup to msdyn_agreement</para>
		/// <para>Agreement</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Agreement
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Agreement); }
			set { Entity.Attributes[Fields.msdyn_Agreement] = value; }
		}

		/// <summary>
		/// <para>Shows the entity instances.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Agreement Invoice Setup</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_agreementinvoicesetupId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_agreementinvoicesetupId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Type a description of this invoice setup.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Description); }
			set { Entity.Attributes[Fields.msdyn_Description] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>Internal Flags</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_InternalFlags
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_InternalFlags); }
			set { Entity.Attributes[Fields.msdyn_InternalFlags] = value; }
		}

		/// <summary>
		/// <para>Enter the name of the custom entity.</para>
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
		/// <para>Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior.</para>
		/// <para>DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateAndTime</para>
		/// <para>Postpone Generation Until</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_PostponeGenerationUntil
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_PostponeGenerationUntil); }
			set { Entity.Attributes[Fields.msdyn_PostponeGenerationUntil] = value; }
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>DateTimeBehavior: TimeZoneIndependent - DateTimeFormat: DateAndTime</para>
		/// <para>Process Started On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_ProcessStartedOn
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_ProcessStartedOn); }
			set { Entity.Attributes[Fields.msdyn_ProcessStartedOn] = value; }
		}

		/// <summary>
		/// <para>Stores the invoice recurrence settings.</para>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>Recurrence Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RecurrenceSettings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RecurrenceSettings); }
			set { Entity.Attributes[Fields.msdyn_RecurrenceSettings] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: 1 - MaxValue: 2,147,483,647</para>
		/// <para>Revision</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_Revision
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_Revision); }
			set { Entity.Attributes[Fields.msdyn_Revision] = value; }
		}

		/// <summary>
		/// <para>Shows the date and time that the record was migrated.</para>
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
		/// <para>Contains the ID of the process associated with the entity.</para>
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
		/// <para>Contains the ID of the stage where the entity is located.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Stage Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? stageid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.stageid); }
			set { Entity.Attributes[Fields.stageid] = value; }
		}

		/// <summary>
		/// <para>Status of the Agreement Invoice Setup</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_agreementinvoicesetupOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_agreementinvoicesetupOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Agreement Invoice Setup</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_agreementinvoicesetupOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_agreementinvoicesetupOptionSets.statuscode)value.Value;
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
		/// <para>Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Traversed Path</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string traversedpath
		{
			get { return Entity.GetAttributeValue<string>(Fields.traversedpath); }
			set { Entity.Attributes[Fields.traversedpath] = value; }
		}

		/// <summary>
		/// <para>Shows the time zone code that was in use when the record was created.</para>
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
