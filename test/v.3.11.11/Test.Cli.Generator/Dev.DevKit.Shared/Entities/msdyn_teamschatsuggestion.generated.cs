﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets
{
	public enum msdyn_computationstate
	{
		/// <summary>
		/// Failure = 5
		/// </summary>
		Failure = 5,
		/// <summary>
		/// In progress = 2
		/// </summary>
		In_progress = 2,
		/// <summary>
		/// Not started = 0
		/// </summary>
		Not_started = 0,
		/// <summary>
		/// Partial Success = 3
		/// </summary>
		Partial_Success = 3,
		/// <summary>
		/// Success = 4
		/// </summary>
		Success = 4,
		/// <summary>
		/// Triggered = 1
		/// </summary>
		Triggered = 1
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
	public partial class msdyn_teamschatsuggestion : EntityBase
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
			public const string msdyn_computationstate = "msdyn_computationstate";
			public const string msdyn_computedon = "msdyn_computedon";
			public const string msdyn_regardingobjectid = "msdyn_regardingobjectid";
			public const string msdyn_regardingobjectname = "msdyn_regardingobjectname";
			public const string msdyn_suggestions = "msdyn_suggestions";
			public const string msdyn_teamschatsuggestionId = "msdyn_teamschatsuggestionid";
			public const string msdyn_teamschatsuggestionname = "msdyn_teamschatsuggestionname";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_teamschatsuggestion";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10264;

		[DebuggerNonUserCode()]
		public msdyn_teamschatsuggestion()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_teamschatsuggestion(Guid msdyn_teamschatsuggestionId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_teamschatsuggestionId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_teamschatsuggestion(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_teamschatsuggestion(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_teamschatsuggestion(Entity entity, Entity merge)
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
		public msdyn_teamschatsuggestion(KeyAttributeCollection keys)
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
		/// <para>For internal use only</para>
		/// <para>Picklist</para>
		/// <para>Computation State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.msdyn_computationstate? msdyn_computationstate
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_computationstate);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.msdyn_computationstate)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_computationstate] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_computationstate] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Computed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_computedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_computedon); }
			set { Entity.Attributes[Fields.msdyn_computedon] = value; }
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Regarding Object Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_regardingobjectid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_regardingobjectid); }
			set { Entity.Attributes[Fields.msdyn_regardingobjectid] = value; }
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Regarding Object Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_regardingobjectname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_regardingobjectname); }
			set { Entity.Attributes[Fields.msdyn_regardingobjectname] = value; }
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>Suggestions</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_suggestions
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_suggestions); }
			set { Entity.Attributes[Fields.msdyn_suggestions] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Microsoft Teams chat suggestion entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_teamschatsuggestionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_teamschatsuggestionId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>teamschatsuggestionname</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_teamschatsuggestionname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_teamschatsuggestionname); }
			set { Entity.Attributes[Fields.msdyn_teamschatsuggestionname] = value; }
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
		/// <para>Status of the Microsoft Teams chat suggestion entity</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Microsoft Teams chat suggestion entity</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_teamschatsuggestionOptionSets.statuscode)value.Value;
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