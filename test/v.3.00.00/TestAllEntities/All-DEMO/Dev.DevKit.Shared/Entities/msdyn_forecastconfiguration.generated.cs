﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets
{
	public enum msdyn_CalendarTemplate
	{
		/// <summary>
		/// 3-3-3-4 = 100000005
		/// </summary>
		_3334 = 100000005,
		/// <summary>
		/// 3-3-4-3 = 100000006
		/// </summary>
		_3343 = 100000006,
		/// <summary>
		/// 3-4-3-3 = 100000007
		/// </summary>
		_3433 = 100000007,
		/// <summary>
		/// 4-3-3-3 = 100000008
		/// </summary>
		_4333 = 100000008,
		/// <summary>
		/// 4-4-5 = 100000000
		/// </summary>
		_445 = 100000000,
		/// <summary>
		/// 4-5-4 = 100000001
		/// </summary>
		_454 = 100000001,
		/// <summary>
		/// 5-4-4 = 100000002
		/// </summary>
		_544 = 100000002,
		/// <summary>
		/// Broadcast Calendar = 100000004
		/// </summary>
		Broadcast_Calendar = 100000004,
		/// <summary>
		/// Gregorian = 100000003
		/// </summary>
		Gregorian = 100000003
	}

	public enum msdyn_periodtype
	{
		/// <summary>
		/// Monthly = 0
		/// </summary>
		Monthly = 0,
		/// <summary>
		/// Quarterly = 1
		/// </summary>
		Quarterly = 1
	}

	public enum msdyn_startingfiscalmonth
	{
		/// <summary>
		/// April = 3
		/// </summary>
		April = 3,
		/// <summary>
		/// August = 7
		/// </summary>
		August = 7,
		/// <summary>
		/// December = 11
		/// </summary>
		December = 11,
		/// <summary>
		/// February = 1
		/// </summary>
		February = 1,
		/// <summary>
		/// January = 0
		/// </summary>
		January = 0,
		/// <summary>
		/// July = 6
		/// </summary>
		July = 6,
		/// <summary>
		/// June = 5
		/// </summary>
		June = 5,
		/// <summary>
		/// March = 2
		/// </summary>
		March = 2,
		/// <summary>
		/// May = 4
		/// </summary>
		May = 4,
		/// <summary>
		/// November = 10
		/// </summary>
		November = 10,
		/// <summary>
		/// October = 9
		/// </summary>
		October = 9,
		/// <summary>
		/// September = 8
		/// </summary>
		September = 8
	}

	public enum msdyn_startingfiscalquarter
	{
		/// <summary>
		/// Q1 = 0
		/// </summary>
		Q1 = 0,
		/// <summary>
		/// Q2 = 1
		/// </summary>
		Q2 = 1,
		/// <summary>
		/// Q3 = 2
		/// </summary>
		Q3 = 2,
		/// <summary>
		/// Q4 = 3
		/// </summary>
		Q4 = 3
	}

	public enum msdyn_startingfiscalyear
	{
		/// <summary>
		/// FY2018 = 0
		/// </summary>
		FY2018 = 0,
		/// <summary>
		/// FY2019 = 1
		/// </summary>
		FY2019 = 1,
		/// <summary>
		/// FY2020 = 2
		/// </summary>
		FY2020 = 2,
		/// <summary>
		/// FY2021 = 3
		/// </summary>
		FY2021 = 3,
		/// <summary>
		/// FY2022 = 4
		/// </summary>
		FY2022 = 4,
		/// <summary>
		/// FY2023 = 5
		/// </summary>
		FY2023 = 5,
		/// <summary>
		/// FY2024 = 6
		/// </summary>
		FY2024 = 6,
		/// <summary>
		/// FY2025 = 7
		/// </summary>
		FY2025 = 7,
		/// <summary>
		/// FY2026 = 8
		/// </summary>
		FY2026 = 8,
		/// <summary>
		/// FY2027 = 9
		/// </summary>
		FY2027 = 9,
		/// <summary>
		/// FY2028 = 10
		/// </summary>
		FY2028 = 10
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
		/// Active = 3
		/// </summary>
		Active = 3,
		/// <summary>
		/// Archived = 6
		/// </summary>
		Archived = 6,
		/// <summary>
		/// Draft = 1
		/// </summary>
		Draft = 1,
		/// <summary>
		/// Failed = 4
		/// </summary>
		Failed = 4,
		/// <summary>
		/// In progress = 2
		/// </summary>
		In_progress = 2,
		/// <summary>
		/// Inactive = 5
		/// </summary>
		Inactive = 5,
		/// <summary>
		/// Invalidated = 7
		/// </summary>
		Invalidated = 7
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyn_forecastconfiguration : EntityBase
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
			public const string msdyn_addedWeekIndex = "msdyn_addedweekindex";
			public const string msdyn_additionalfilter = "msdyn_additionalfilter";
			public const string msdyn_advancedsettings = "msdyn_advancedsettings";
			public const string msdyn_CalendarTemplate = "msdyn_calendartemplate";
			public const string msdyn_columns = "msdyn_columns";
			public const string msdyn_enddate = "msdyn_enddate";
			public const string msdyn_errormessage = "msdyn_errormessage";
			public const string msdyn_FiscalYearStartDate = "msdyn_fiscalyearstartdate";
			public const string msdyn_forecastcategoryattribute = "msdyn_forecastcategoryattribute";
			public const string msdyn_forecastconfigurationId = "msdyn_forecastconfigurationid";
			public const string msdyn_hierarchyentity = "msdyn_hierarchyentity";
			public const string msdyn_hierarchyrelationship = "msdyn_hierarchyrelationship";
			public const string msdyn_issnapshotscheduled = "msdyn_issnapshotscheduled";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_numberofrecurrences = "msdyn_numberofrecurrences";
			public const string msdyn_periodtype = "msdyn_periodtype";
			public const string msdyn_permissionsdata = "msdyn_permissionsdata";
			public const string msdyn_pivots = "msdyn_pivots";
			public const string msdyn_previewFlags = "msdyn_previewflags";
			public const string msdyn_publisheddatetime = "msdyn_publisheddatetime";
			public const string msdyn_rollupdefaultviewid = "msdyn_rollupdefaultviewid";
			public const string msdyn_rollupentity = "msdyn_rollupentity";
			public const string msdyn_rootentityrecordid = "msdyn_rootentityrecordid";
			public const string msdyn_snapshotschedule = "msdyn_snapshotschedule";
			public const string msdyn_snapshottimezone = "msdyn_forecasttimezone";
			public const string msdyn_startdate = "msdyn_startdate";
			public const string msdyn_startingfiscalmonth = "msdyn_startingfiscalmonth";
			public const string msdyn_startingfiscalquarter = "msdyn_startingfiscalquarter";
			public const string msdyn_startingfiscalyear = "msdyn_startingfiscalyear";
			public const string msdyn_templatetype = "msdyn_templatetype";
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

		public const string EntityLogicalName = "msdyn_forecastconfiguration";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10232;

		[DebuggerNonUserCode()]
		public msdyn_forecastconfiguration()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_forecastconfiguration(Guid msdyn_forecastconfigurationId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_forecastconfigurationId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_forecastconfiguration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_forecastconfiguration(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_forecastconfiguration(Entity entity, Entity merge)
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
		public msdyn_forecastconfiguration(KeyAttributeCollection keys)
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
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>addedWeekIndex</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_addedWeekIndex
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_addedWeekIndex); }
			set { Entity.Attributes[Fields.msdyn_addedWeekIndex] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>Additional filters</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_additionalfilter
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_additionalfilter); }
			set { Entity.Attributes[Fields.msdyn_additionalfilter] = value; }
		}

		/// <summary>
		/// <para>Forecast configuration settings</para>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_advancedsettings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_advancedsettings); }
			set { Entity.Attributes[Fields.msdyn_advancedsettings] = value; }
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>Calendar Template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_CalendarTemplate? msdyn_CalendarTemplate
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_CalendarTemplate);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_CalendarTemplate)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_CalendarTemplate] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_CalendarTemplate] = null;
			}
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>Columns</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_columns
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_columns); }
			set { Entity.Attributes[Fields.msdyn_columns] = value; }
		}

		/// <summary>
		/// <para>Required - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>End Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_enddateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_enddate); }
			set { Entity.Attributes[Fields.msdyn_enddate] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Error message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_errormessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_errormessage); }
			set { Entity.Attributes[Fields.msdyn_errormessage] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Fiscal Year Start Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_FiscalYearStartDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_FiscalYearStartDate); }
			set { Entity.Attributes[Fields.msdyn_FiscalYearStartDate] = value; }
		}

		/// <summary>
		/// <para>Required - String - MaxLength: 4000</para>
		/// <para>Forecast category attribute</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_forecastcategoryattribute
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_forecastcategoryattribute); }
			set { Entity.Attributes[Fields.msdyn_forecastcategoryattribute] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Forecast configuration id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_forecastconfigurationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_forecastconfigurationId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Required - String - MaxLength: 4000</para>
		/// <para>Hierarchy entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_hierarchyentity
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_hierarchyentity); }
			set { Entity.Attributes[Fields.msdyn_hierarchyentity] = value; }
		}

		/// <summary>
		/// <para>Required - String - MaxLength: 4000</para>
		/// <para>Relationship</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_hierarchyrelationship
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_hierarchyrelationship); }
			set { Entity.Attributes[Fields.msdyn_hierarchyrelationship] = value; }
		}

		/// <summary>
		/// <para>Enable scheduling for forecast snapshots</para>
		/// <para>Required - Boolean</para>
		/// <para>Enable Snapshot Scheduling</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_issnapshotscheduled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_issnapshotscheduled); }
			set { Entity.Attributes[Fields.msdyn_issnapshotscheduled] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Forecast configuration name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Indicate the number of recurrences that the forecast will be generated.</para>
		/// <para>Required - Integer - MinValue: 1 - MaxValue: 12</para>
		/// <para>Number of recurrences</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_numberofrecurrences
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_numberofrecurrences); }
			set { Entity.Attributes[Fields.msdyn_numberofrecurrences] = value; }
		}

		/// <summary>
		/// <para>Select the type of period for which the forecast must be generated.</para>
		/// <para>Required - Picklist</para>
		/// <para>Forecast period</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_periodtype? msdyn_periodtype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_periodtype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_periodtype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_periodtype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_periodtype] = null;
			}
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>Permissions</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_permissionsdata
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_permissionsdata); }
			set { Entity.Attributes[Fields.msdyn_permissionsdata] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>Pivots</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_pivots
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_pivots); }
			set { Entity.Attributes[Fields.msdyn_pivots] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para>previewFlags</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_previewFlags
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_previewFlags); }
			set { Entity.Attributes[Fields.msdyn_previewFlags] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Published date time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_publisheddatetimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_publisheddatetime); }
			set { Entity.Attributes[Fields.msdyn_publisheddatetime] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Rollup entity default view</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_rollupdefaultviewid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_rollupdefaultviewid); }
			set { Entity.Attributes[Fields.msdyn_rollupdefaultviewid] = value; }
		}

		/// <summary>
		/// <para>Required - String - MaxLength: 4000</para>
		/// <para>Rollup entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_rollupentity
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_rollupentity); }
			set { Entity.Attributes[Fields.msdyn_rollupentity] = value; }
		}

		/// <summary>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Root record Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_rootentityrecordid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_rootentityrecordid); }
			set { Entity.Attributes[Fields.msdyn_rootentityrecordid] = value; }
		}

		/// <summary>
		/// <para>Schedule governing the forecast snapshot</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Schedule governing the forecast snapshot</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_snapshotschedule
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_snapshotschedule); }
			set { Entity.Attributes[Fields.msdyn_snapshotschedule] = value; }
		}

		/// <summary>
		/// <para>Prefered timezone governing the scheduler of forecast snapshot</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Prefered timezone governing the scheduler of forecast snapshot</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_snapshottimezone
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_snapshottimezone); }
			set { Entity.Attributes[Fields.msdyn_snapshottimezone] = value; }
		}

		/// <summary>
		/// <para>Required - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Start Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_startdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_startdate); }
			set { Entity.Attributes[Fields.msdyn_startdate] = value; }
		}

		/// <summary>
		/// <para>Select the fiscal month for the forecast configuration.</para>
		/// <para>Picklist</para>
		/// <para>Starting Fiscal month</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalmonth? msdyn_startingfiscalmonth
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_startingfiscalmonth);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalmonth)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_startingfiscalmonth] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_startingfiscalmonth] = null;
			}
		}

		/// <summary>
		/// <para>Select the fiscal quarter for the forecast configuration.</para>
		/// <para>Picklist</para>
		/// <para>Starting Fiscal quarter</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalquarter? msdyn_startingfiscalquarter
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_startingfiscalquarter);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalquarter)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_startingfiscalquarter] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_startingfiscalquarter] = null;
			}
		}

		/// <summary>
		/// <para>Select the fiscal year for the forecast configuration.</para>
		/// <para>Picklist</para>
		/// <para>Starting Fiscal year</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalyear? msdyn_startingfiscalyear
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_startingfiscalyear);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.msdyn_startingfiscalyear)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_startingfiscalyear] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_startingfiscalyear] = null;
			}
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Template type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_templatetype
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_templatetype); }
			set { Entity.Attributes[Fields.msdyn_templatetype] = value; }
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
		/// <para>Status of the Forecast Configuration</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Forecast Configuration</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_forecastconfigurationOptionSets.statuscode)value.Value;
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