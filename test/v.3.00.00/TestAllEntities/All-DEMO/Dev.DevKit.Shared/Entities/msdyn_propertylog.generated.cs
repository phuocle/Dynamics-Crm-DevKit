﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_propertylogOptionSets
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
	public partial class msdyn_propertylog : EntityBase
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
			public const string msdyn_booleanvalue = "msdyn_booleanvalue";
			public const string msdyn_customerasset = "msdyn_customerasset";
			public const string msdyn_datevalue = "msdyn_datevalue";
			public const string msdyn_delta = "msdyn_delta";
			public const string msdyn_islatest = "msdyn_islatest";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_numbervalue = "msdyn_numbervalue";
			public const string msdyn_property = "msdyn_property";
			public const string msdyn_propertylogId = "msdyn_propertylogid";
			public const string msdyn_readingtime = "msdyn_readingtime";
			public const string msdyn_stringvalue = "msdyn_stringvalue";
			public const string msdyn_valuetodisplay = "msdyn_valuetodisplay";
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

		public const string EntityLogicalName = "msdyn_propertylog";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10134;

		[DebuggerNonUserCode()]
		public msdyn_propertylog()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_propertylog(Guid msdyn_propertylogId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_propertylogId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_propertylog(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_propertylog(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_propertylog(Entity entity, Entity merge)
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
		public msdyn_propertylog(KeyAttributeCollection keys)
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
		/// <para>Boolean</para>
		/// <para>Boolean Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_booleanvalue
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_booleanvalue); }
			set { Entity.Attributes[Fields.msdyn_booleanvalue] = value; }
		}

		/// <summary>
		/// <para>Required - Lookup to msdyn_customerasset</para>
		/// <para>Customer Asset</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_customerasset
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_customerasset); }
			set { Entity.Attributes[Fields.msdyn_customerasset] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Date/time Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_datevalueUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_datevalue); }
			set { Entity.Attributes[Fields.msdyn_datevalue] = value; }
		}

		/// <summary>
		/// <para>For Internal Use only</para>
		/// <para>Decimal - MinValue: -100,000,000,000 - MaxValue: 100,000,000,000</para>
		/// <para>Delta</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_delta
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_delta); }
			set { Entity.Attributes[Fields.msdyn_delta] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>Is Latest</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_islatest
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_islatest); }
			set { Entity.Attributes[Fields.msdyn_islatest] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>String - MaxLength: 850</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Decimal - MinValue: -100,000,000,000 - MaxValue: 100,000,000,000</para>
		/// <para>Number Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_numbervalue
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_numbervalue); }
			set { Entity.Attributes[Fields.msdyn_numbervalue] = value; }
		}

		/// <summary>
		/// <para>Required - Lookup to msdyn_property</para>
		/// <para>Property</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_property
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_property); }
			set { Entity.Attributes[Fields.msdyn_property] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Property Log</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_propertylogId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_propertylogId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Reading Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_readingtimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_readingtime); }
			set { Entity.Attributes[Fields.msdyn_readingtime] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>String Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_stringvalue
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_stringvalue); }
			set { Entity.Attributes[Fields.msdyn_stringvalue] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 850</para>
		/// <para>Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_valuetodisplay
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_valuetodisplay); }
			set { Entity.Attributes[Fields.msdyn_valuetodisplay] = value; }
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
		/// <para>Status of the Property Log</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_propertylogOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_propertylogOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Property Log</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_propertylogOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_propertylogOptionSets.statuscode)value.Value;
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