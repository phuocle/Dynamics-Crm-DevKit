﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.UserFiscalCalendarOptionSets
{

}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class UserFiscalCalendar : EntityBase
	{
		public struct Fields
		{
			public const string BusinessUnitId = "businessunitid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EffectiveOn = "effectiveon";
			public const string ExchangeRate = "exchangerate";
			public const string FiscalPeriodType = "fiscalperiodtype";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Period1 = "period1";
			public const string Period1_Base = "period1_base";
			public const string Period10 = "period10";
			public const string Period10_Base = "period10_base";
			public const string Period11 = "period11";
			public const string Period11_Base = "period11_base";
			public const string Period12 = "period12";
			public const string Period12_Base = "period12_base";
			public const string Period13 = "period13";
			public const string Period13_Base = "period13_base";
			public const string Period2 = "period2";
			public const string Period2_Base = "period2_base";
			public const string Period3 = "period3";
			public const string Period3_Base = "period3_base";
			public const string Period4 = "period4";
			public const string Period4_Base = "period4_base";
			public const string Period5 = "period5";
			public const string Period5_Base = "period5_base";
			public const string Period6 = "period6";
			public const string Period6_Base = "period6_base";
			public const string Period7 = "period7";
			public const string Period7_Base = "period7_base";
			public const string Period8 = "period8";
			public const string Period8_Base = "period8_base";
			public const string Period9 = "period9";
			public const string Period9_Base = "period9_base";
			public const string SalesPersonId = "salespersonid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UserFiscalCalendarId = "userfiscalcalendarid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
		}

		public const string EntityLogicalName = "userfiscalcalendar";

		public const int EntityTypeCode = 1086;

		[DebuggerNonUserCode()]
		public UserFiscalCalendar()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserFiscalCalendar(Guid UserFiscalCalendarId)
		{
			Entity = new Entity(EntityLogicalName, UserFiscalCalendarId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserFiscalCalendar(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserFiscalCalendar(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserFiscalCalendar(Entity entity, Entity merge)
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
		public UserFiscalCalendar(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the business unit with which the user fiscal calendar is associated.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? BusinessUnitId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.BusinessUnitId); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the fiscal calendar.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the fiscal calendar was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the userfiscalcalendar.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Date and time when the fiscal calendar takes effect.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EffectiveOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EffectiveOn); }
			set { Entity.Attributes[Fields.EffectiveOn] = value; }
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the user fiscal calendar with respect to the base currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Exchange Rate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}

		/// <summary>
		/// <para>Type of fiscal period used in the fiscal calendar.</para>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FiscalPeriodType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FiscalPeriodType); }
		}

		/// <summary>
		/// <para>Unique identifier of the data import or data migration that created this record.</para>
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
		/// <para>Unique identifier of the user who last modified the fiscal calendar.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the fiscal calendar was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the userfiscalcalendar.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Sales quota for the first period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period1
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period1);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period1] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period1] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the first period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period1_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period1_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the tenth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period10
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period10);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period10] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period10] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the tenth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period10_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period10_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the eleventh period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period11
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period11);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period11] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period11] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the eleventh period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period11_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period11_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the twelfth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period12
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period12);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period12] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period12] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the twelfth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period12_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period12_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the thirteenth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period13
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period13);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period13] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period13] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the thirteenth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period13_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period13_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the second period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period2
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period2);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period2] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period2] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the second period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period2_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period2_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the third period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period3
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period3);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period3] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period3] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the third period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period3_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period3_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the fourth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period4
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period4);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period4] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period4] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the fourth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period4_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period4_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the fifth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period5
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period5);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period5] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period5] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the fifth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period5_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period5_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the sixth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period6
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period6);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period6] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period6] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the sixth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period6_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period6_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the seventh period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period7
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period7);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period7] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period7] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the seventh period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period7_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period7_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the eighth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period8
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period8);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period8] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period8] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the eighth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period8_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period8_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Sales quota for the ninth period in the fiscal year.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period9
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period9);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Period9] = new Money(value.Value);
				else
					Entity.Attributes[Fields.Period9] = null;
			}
		}

		/// <summary>
		/// <para>Base currency equivalent of the sales quota for the ninth period in the fiscal year.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Period9_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.Period9_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the salesperson to whom the fiscal calendar is assigned.</para>
		/// <para>Lookup</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SalesPersonId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SalesPersonId); }
			set { Entity.Attributes[Fields.SalesPersonId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the currency associated with the user fiscal calendar.</para>
		/// <para>Lookup</para>
		/// <para>Currency</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the fiscal calendar.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid UserFiscalCalendarId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.UserFiscalCalendarId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
	}
}