﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets
{
	public enum Instance
	{
		/// <summary>
		/// First = 1
		/// </summary>
		First = 1,
		/// <summary>
		/// Fourth = 4
		/// </summary>
		Fourth = 4,
		/// <summary>
		/// Last = 5
		/// </summary>
		Last = 5,
		/// <summary>
		/// Second = 2
		/// </summary>
		Second = 2,
		/// <summary>
		/// Third = 3
		/// </summary>
		Third = 3
	}

	public enum MonthOfYear
	{
		/// <summary>
		/// April = 4
		/// </summary>
		April = 4,
		/// <summary>
		/// August = 8
		/// </summary>
		August = 8,
		/// <summary>
		/// December = 12
		/// </summary>
		December = 12,
		/// <summary>
		/// February = 2
		/// </summary>
		February = 2,
		/// <summary>
		/// Invalid Month Of Year = 0
		/// </summary>
		Invalid_Month_Of_Year = 0,
		/// <summary>
		/// January = 1
		/// </summary>
		January = 1,
		/// <summary>
		/// July = 7
		/// </summary>
		July = 7,
		/// <summary>
		/// June = 6
		/// </summary>
		June = 6,
		/// <summary>
		/// March = 3
		/// </summary>
		March = 3,
		/// <summary>
		/// May = 5
		/// </summary>
		May = 5,
		/// <summary>
		/// November = 11
		/// </summary>
		November = 11,
		/// <summary>
		/// October = 10
		/// </summary>
		October = 10,
		/// <summary>
		/// September = 9
		/// </summary>
		September = 9
	}

	public enum PatternEndType
	{
		/// <summary>
		/// No End Date = 1
		/// </summary>
		No_End_Date = 1,
		/// <summary>
		/// Occurrences = 2
		/// </summary>
		Occurrences = 2,
		/// <summary>
		/// Pattern End Date = 3
		/// </summary>
		Pattern_End_Date = 3
	}

	public enum RecurrencePatternType
	{
		/// <summary>
		/// Daily = 0
		/// </summary>
		Daily = 0,
		/// <summary>
		/// Monthly = 2
		/// </summary>
		Monthly = 2,
		/// <summary>
		/// Weekly = 1
		/// </summary>
		Weekly = 1,
		/// <summary>
		/// Yearly = 3
		/// </summary>
		Yearly = 3
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RecurrenceRule : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DayOfMonth = "dayofmonth";
			public const string DaysOfWeekMask = "daysofweekmask";
			public const string Duration = "duration";
			public const string EffectiveEndDate = "effectiveenddate";
			public const string EffectiveStartDate = "effectivestartdate";
			public const string EndTime = "endtime";
			public const string FirstDayOfWeek = "firstdayofweek";
			public const string Instance = "instance";
			public const string Interval = "interval";
			public const string IsNthMonthly = "isnthmonthly";
			public const string IsNthYearly = "isnthyearly";
			public const string IsRegenerate = "isregenerate";
			public const string IsWeekDayPattern = "isweekdaypattern";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string MonthOfYear = "monthofyear";
			public const string ObjectId = "objectid";
			public const string Occurrences = "occurrences";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PatternEndDate = "patternenddate";
			public const string PatternEndType = "patternendtype";
			public const string PatternStartDate = "patternstartdate";
			public const string RecurrencePatternType = "recurrencepatterntype";
			public const string RuleId = "ruleid";
			public const string StartTime = "starttime";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "recurrencerule";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4250;

		[DebuggerNonUserCode()]
		public RecurrenceRule()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RecurrenceRule(Guid RecurrenceRuleId)
		{
			Entity = new Entity(EntityLogicalName, RecurrenceRuleId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RecurrenceRule(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RecurrenceRule(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RecurrenceRule(Entity entity, Entity merge)
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
		public RecurrenceRule(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the recurrence rule.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the recurrence rule was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the recurrence rule.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>The day of the month on which the recurring appointment or task occurs.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 31</para>
		/// <para>Day Of Month</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? DayOfMonth
		{
			get { return Entity.GetAttributeValue<int?>(Fields.DayOfMonth); }
			set { Entity.Attributes[Fields.DayOfMonth] = value; }
		}

		/// <summary>
		/// <para>Bitmask representing the days of the week on which the recurring appointment or task occurs.</para>
		/// <para>Integer - MinValue: 1 - MaxValue: 127</para>
		/// <para>Days Of Week Mask</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? DaysOfWeekMask
		{
			get { return Entity.GetAttributeValue<int?>(Fields.DaysOfWeekMask); }
			set { Entity.Attributes[Fields.DaysOfWeekMask] = value; }
		}

		/// <summary>
		/// <para>Duration of the recurrence pattern in minutes.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Duration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Duration
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Duration); }
			set { Entity.Attributes[Fields.Duration] = value; }
		}

		/// <summary>
		/// <para>The actual end date for expansion of the recurrence pattern.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Effective End Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EffectiveEndDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EffectiveEndDate); }
			set { Entity.Attributes[Fields.EffectiveEndDate] = value; }
		}

		/// <summary>
		/// <para>The actual start date for expansion of the recurrence pattern.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Effective Start Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EffectiveStartDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EffectiveStartDate); }
			set { Entity.Attributes[Fields.EffectiveStartDate] = value; }
		}

		/// <summary>
		/// <para>End time of the associated activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>End Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EndTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EndTime); }
			set { Entity.Attributes[Fields.EndTime] = value; }
		}

		/// <summary>
		/// <para>First day Of week for the recurrence pattern.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 6</para>
		/// <para>First Day Of Week</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FirstDayOfWeek
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FirstDayOfWeek); }
			set { Entity.Attributes[Fields.FirstDayOfWeek] = value; }
		}

		/// <summary>
		/// <para>Specifies the count for which the recurrence pattern is valid for a given interval.</para>
		/// <para>Picklist</para>
		/// <para>Instance</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.Instance? Instance
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Instance);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.Instance)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Instance] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Instance] = null;
			}
		}

		/// <summary>
		/// <para>Number of units of a given recurrence type between occurrences.</para>
		/// <para>Integer - MinValue: 1 - MaxValue: 1,000</para>
		/// <para>Interval</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Interval
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Interval); }
			set { Entity.Attributes[Fields.Interval] = value; }
		}

		/// <summary>
		/// <para>Specifies whether the monthly recurrence pattern is Nth monthly, valid only for monthly recurrence.</para>
		/// <para>Boolean</para>
		/// <para>Nth Monthly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsNthMonthly
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsNthMonthly); }
			set { Entity.Attributes[Fields.IsNthMonthly] = value; }
		}

		/// <summary>
		/// <para>Specifies whether the yearly recurrence pattern is Nth yearly, valid only for yearly recurrence.</para>
		/// <para>Boolean</para>
		/// <para>Nth Yearly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsNthYearly
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsNthYearly); }
			set { Entity.Attributes[Fields.IsNthYearly] = value; }
		}

		/// <summary>
		/// <para>Valid only for task type recurrence,indicates whether task should be regenerated.</para>
		/// <para>Boolean</para>
		/// <para>Regenerate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsRegenerate
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsRegenerate); }
			set { Entity.Attributes[Fields.IsRegenerate] = value; }
		}

		/// <summary>
		/// <para>Specifies whether the weekly recurrence pattern is actually a daily every weekday pattern, valid only for weekly recurrence.</para>
		/// <para>Boolean</para>
		/// <para>Every Weekday</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsWeekDayPattern
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsWeekDayPattern); }
			set { Entity.Attributes[Fields.IsWeekDayPattern] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the recurrence rule.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the recurrence rule was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the recurrence rule.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Specifies the month of the year valid for the recurrence pattern.</para>
		/// <para>Picklist</para>
		/// <para>Month Of Year</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.MonthOfYear? MonthOfYear
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.MonthOfYear);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.MonthOfYear)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.MonthOfYear] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.MonthOfYear] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the object with which the recurrence rule is associated.</para>
		/// <para>Lookup to activitypointer</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}

		/// <summary>
		/// <para>Number of occurrences of the recurrence pattern.</para>
		/// <para>Integer - MinValue: 1 - MaxValue: 999</para>
		/// <para>Occurrences</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Occurrences
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Occurrences); }
			set { Entity.Attributes[Fields.Occurrences] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the recurrence rule.</para>
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
		/// <para>Unique identifier of the business unit that owns the recurrence rule.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>End date of the Recurrence Range.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Recurrence Range End</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PatternEndDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PatternEndDate); }
			set { Entity.Attributes[Fields.PatternEndDate] = value; }
		}

		/// <summary>
		/// <para>Pattern End Type of a recurring series.</para>
		/// <para>Picklist</para>
		/// <para>Pattern End Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.PatternEndType? PatternEndType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PatternEndType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.PatternEndType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.PatternEndType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.PatternEndType] = null;
			}
		}

		/// <summary>
		/// <para>Start date of the Recurrence Range.</para>
		/// <para>Required - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Recurrence Range Start</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PatternStartDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PatternStartDate); }
			set { Entity.Attributes[Fields.PatternStartDate] = value; }
		}

		/// <summary>
		/// <para>Type of Recurrence.</para>
		/// <para>Picklist</para>
		/// <para>Recurrence Pattern</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.RecurrencePatternType? RecurrencePatternType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.RecurrencePatternType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RecurrenceRuleOptionSets.RecurrencePatternType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.RecurrencePatternType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.RecurrencePatternType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the entity associated with recurrence rule.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Recurrence Rule</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RuleId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RuleId); }
			set { Entity.Attributes[Fields.RuleId] = value; }
		}

		/// <summary>
		/// <para>Start time of the recurring activity.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Start Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartTime); }
			set { Entity.Attributes[Fields.StartTime] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}