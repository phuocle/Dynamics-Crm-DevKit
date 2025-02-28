﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets
{
	public enum msfp_status
	{
		/// <summary>
		/// Active = 647390000
		/// </summary>
		Active = 647390000,
		/// <summary>
		/// Completed = 647390001
		/// </summary>
		Completed = 647390001,
		/// <summary>
		/// Failed = 647390002
		/// </summary>
		Failed = 647390002
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
	public partial class msfp_surveyreminder : EntityBase
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
			public const string msfp_description = "msfp_description";
			public const string msfp_emailtemplate = "msfp_emailtemplate";
			public const string msfp_name = "msfp_name";
			public const string msfp_properties = "msfp_properties";
			public const string msfp_scheduleddate = "msfp_scheduleddate";
			public const string msfp_status = "msfp_status";
			public const string msfp_survey = "msfp_survey";
			public const string msfp_surveyreminderId = "msfp_surveyreminderid";
			public const string msfp_type = "msfp_type";
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

		public const string EntityLogicalName = "msfp_surveyreminder";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10341;

		[DebuggerNonUserCode()]
		public msfp_surveyreminder()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_surveyreminder(Guid msfp_surveyreminderId)
		{
			Entity = new Entity(EntityLogicalName, msfp_surveyreminderId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_surveyreminder(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_surveyreminder(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_surveyreminder(Entity entity, Entity merge)
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
		public msfp_surveyreminder(KeyAttributeCollection keys)
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
		/// <para>Date and time when the survey reminder was created.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
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
		/// <para>Description of the survey reminder.</para>
		/// <para>String - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_description); }
			set { Entity.Attributes[Fields.msfp_description] = value; }
		}

		/// <summary>
		/// <para>Email template used in the survey reminder.</para>
		/// <para>Required - Lookup to msfp_emailtemplate</para>
		/// <para>Email template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msfp_emailtemplate
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msfp_emailtemplate); }
			set { Entity.Attributes[Fields.msfp_emailtemplate] = value; }
		}

		/// <summary>
		/// <para>Name of the survey reminder.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_name); }
			set { Entity.Attributes[Fields.msfp_name] = value; }
		}

		/// <summary>
		/// <para>Properties of the survey reminder.</para>
		/// <para>Required - Memo - MaxLength: 1000000</para>
		/// <para>Properties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_properties
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_properties); }
			set { Entity.Attributes[Fields.msfp_properties] = value; }
		}

		/// <summary>
		/// <para>Date and time for which the survey reminder is scheduled to be sent.</para>
		/// <para>Required - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Scheduled date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msfp_scheduleddateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msfp_scheduleddate); }
			set { Entity.Attributes[Fields.msfp_scheduleddate] = value; }
		}

		/// <summary>
		/// <para>Status of the survey reminder.</para>
		/// <para>Required - Picklist</para>
		/// <para>Reminder Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.msfp_status? msfp_status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msfp_status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.msfp_status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msfp_status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msfp_status] = null;
			}
		}

		/// <summary>
		/// <para>Survey for which the reminder was created.</para>
		/// <para>Required - Lookup to msfp_survey</para>
		/// <para>Survey</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msfp_survey
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msfp_survey); }
			set { Entity.Attributes[Fields.msfp_survey] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Customer Voice survey reminder</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msfp_surveyreminderId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msfp_surveyreminderId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Type of the survey reminder.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_type
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_type); }
			set { Entity.Attributes[Fields.msfp_type] = value; }
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
		/// <para>Status of the Customer Voice survey reminder</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Customer Voice survey reminder</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_surveyreminderOptionSets.statuscode)value.Value;
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
