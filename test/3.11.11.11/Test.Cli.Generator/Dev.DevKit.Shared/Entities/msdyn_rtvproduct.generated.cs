﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_rtvproductOptionSets
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
	public partial class msdyn_rtvproduct : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_Description = "msdyn_description";
			public const string msdyn_LineOrder = "msdyn_lineorder";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_Product = "msdyn_product";
			public const string msdyn_Quantity = "msdyn_quantity";
			public const string msdyn_RMA = "msdyn_rma";
			public const string msdyn_RMAProduct = "msdyn_rmaproduct";
			public const string msdyn_RTV = "msdyn_rtv";
			public const string msdyn_rtvproductId = "msdyn_rtvproductid";
			public const string msdyn_TotalCreditAmount = "msdyn_totalcreditamount";
			public const string msdyn_totalcreditamount_Base = "msdyn_totalcreditamount_base";
			public const string msdyn_Unit = "msdyn_unit";
			public const string msdyn_UnitCreditAmount = "msdyn_unitcreditamount";
			public const string msdyn_unitcreditamount_Base = "msdyn_unitcreditamount_base";
			public const string msdyn_Warehouse = "msdyn_warehouse";
			public const string msdyn_WorkOrder = "msdyn_workorder";
			public const string msdyn_WorkOrderProduct = "msdyn_workorderproduct";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_rtvproduct";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10642;

		[DebuggerNonUserCode()]
		public msdyn_rtvproduct()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_rtvproduct(Guid msdyn_rtvproductId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_rtvproductId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_rtvproduct(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_rtvproduct(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_rtvproduct(Entity entity, Entity merge)
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
		public msdyn_rtvproduct(KeyAttributeCollection keys)
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
		/// <para>Shows the exchange rate for the currency associated with the entity with respect to the base currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Exchange Rate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
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
		/// <para>Type a description of the product.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Description); }
			set { Entity.Attributes[Fields.msdyn_Description] = value; }
		}

		/// <summary>
		/// <para>Shows the order of this product within the RTV.</para>
		/// <para>Required - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Line Order</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_LineOrder
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_LineOrder); }
			set { Entity.Attributes[Fields.msdyn_LineOrder] = value; }
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
		/// <para>Product to return</para>
		/// <para>Required - Lookup to product</para>
		/// <para>Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Product
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Product); }
			set { Entity.Attributes[Fields.msdyn_Product] = value; }
		}

		/// <summary>
		/// <para>Enter the quantity returned.</para>
		/// <para>Required - Double - MinValue: 0 - MaxValue: 1,000,000,000</para>
		/// <para>Quantity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? msdyn_Quantity
		{
			get { return Entity.GetAttributeValue<double?>(Fields.msdyn_Quantity); }
			set { Entity.Attributes[Fields.msdyn_Quantity] = value; }
		}

		/// <summary>
		/// <para>Originating RMA if item was returned from customer</para>
		/// <para>Lookup to msdyn_rma</para>
		/// <para>RMA</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_RMA
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_RMA); }
			set { Entity.Attributes[Fields.msdyn_RMA] = value; }
		}

		/// <summary>
		/// <para>Originating RMA Product if item was returned from customer</para>
		/// <para>Lookup to msdyn_rmaproduct</para>
		/// <para>RMA Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_RMAProduct
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_RMAProduct); }
			set { Entity.Attributes[Fields.msdyn_RMAProduct] = value; }
		}

		/// <summary>
		/// <para>RTV this line item relates to</para>
		/// <para>Required - Lookup to msdyn_rtv</para>
		/// <para>RTV</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_RTV
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_RTV); }
			set { Entity.Attributes[Fields.msdyn_RTV] = value; }
		}

		/// <summary>
		/// <para>Shows the entity instances.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>RTV Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_rtvproductId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_rtvproductId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows the total Amount to be credited on this item.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 1,000,000,000</para>
		/// <para>Total Credit Amount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_TotalCreditAmount
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msdyn_TotalCreditAmount);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_TotalCreditAmount] = new Money(value.Value);
				else
					Entity.Attributes[Fields.msdyn_TotalCreditAmount] = null;
			}
		}

		/// <summary>
		/// <para>Shows the value of the total credit amount in the base currency.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para>Total Credit Amount (Base)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_totalcreditamount_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msdyn_totalcreditamount_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Unit for this product</para>
		/// <para>Required - Lookup to uom</para>
		/// <para>Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Unit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Unit); }
			set { Entity.Attributes[Fields.msdyn_Unit] = value; }
		}

		/// <summary>
		/// <para>Enter the unit amount to be credited.</para>
		/// <para>Money - MinValue: 0 - MaxValue: 1,000,000,000</para>
		/// <para>Unit Credit Amount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_UnitCreditAmount
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msdyn_UnitCreditAmount);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_UnitCreditAmount] = new Money(value.Value);
				else
					Entity.Attributes[Fields.msdyn_UnitCreditAmount] = null;
			}
		}

		/// <summary>
		/// <para>Shows the value of the unit credit amount in the base currency.</para>
		/// <para>ReadOnly - Money - MinValue: -922,337,203,685,477 - MaxValue: 922,337,203,685,477</para>
		/// <para>Unit Credit Amount (Base)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_unitcreditamount_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msdyn_unitcreditamount_Base);
				if (value == null) return null;
				return value.Value;
			}
		}

		/// <summary>
		/// <para>Warehouse from where this product is returned</para>
		/// <para>Lookup to msdyn_warehouse</para>
		/// <para>Warehouse</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Warehouse
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Warehouse); }
			set { Entity.Attributes[Fields.msdyn_Warehouse] = value; }
		}

		/// <summary>
		/// <para>Originating Work Order if item was returned from customer</para>
		/// <para>Lookup to msdyn_workorder</para>
		/// <para>Work Order</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_WorkOrder
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_WorkOrder); }
			set { Entity.Attributes[Fields.msdyn_WorkOrder] = value; }
		}

		/// <summary>
		/// <para>Originating Work Order Product if item was returned from customer</para>
		/// <para>Lookup to msdyn_workorderproduct</para>
		/// <para>Work Order Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_WorkOrderProduct
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_WorkOrderProduct); }
			set { Entity.Attributes[Fields.msdyn_WorkOrderProduct] = value; }
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
		/// <para>Status of the RTV Product</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_rtvproductOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_rtvproductOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the RTV Product</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_rtvproductOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_rtvproductOptionSets.statuscode)value.Value;
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
		/// <para>Unique identifier of the currency associated with the entity.</para>
		/// <para>Lookup to transactioncurrency</para>
		/// <para>Currency</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
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
