﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets
{
	public enum msdyn_billingtype
	{
		/// <summary>
		/// Chargeable = 192350001
		/// </summary>
		Chargeable = 192350001,
		/// <summary>
		/// Complimentary = 192350002
		/// </summary>
		Complimentary = 192350002,
		/// <summary>
		/// Non Chargeable = 192350000
		/// </summary>
		Non_Chargeable = 192350000,
		/// <summary>
		/// Not Available = 192350003
		/// </summary>
		Not_Available = 192350003
	}

	public enum StateCode
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

	public enum StatusCode
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
	public partial class BookableResourceCategory : EntityBase
	{
		public struct Fields
		{
			public const string BookableResourceCategoryId = "bookableresourcecategoryid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_billingtype = "msdyn_billingtype";
			public const string msdyn_targetutilization = "msdyn_targetutilization";
			public const string msdyn_TransactionCategory = "msdyn_transactioncategory";
			public const string Name = "name";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "bookableresourcecategory";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1147;

		[DebuggerNonUserCode()]
		public BookableResourceCategory()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BookableResourceCategory(Guid BookableResourceCategoryId)
		{
			Entity = new Entity(EntityLogicalName, BookableResourceCategoryId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BookableResourceCategory(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BookableResourceCategory(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BookableResourceCategory(Entity entity, Entity merge)
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
		public BookableResourceCategory(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the resource category.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Resource Category</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid BookableResourceCategoryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.BookableResourceCategoryId] = value;
				Entity.Id = value;
			}
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
		/// <para>Type a detailed description of what the categorization is about.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the bookableresourcecategory with respect to the base currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>ExchangeRate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
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
		/// <para>Select the billing type for this resource role.</para>
		/// <para>Picklist</para>
		/// <para>Billing Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.msdyn_billingtype? msdyn_billingtype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_billingtype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.msdyn_billingtype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_billingtype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_billingtype] = null;
			}
		}

		/// <summary>
		/// <para>Enter the target usage rate for this resource role.</para>
		/// <para>Integer - MinValue: 1 - MaxValue: 100</para>
		/// <para>Target Utilization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_targetutilization
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_targetutilization); }
			set { Entity.Attributes[Fields.msdyn_targetutilization] = value; }
		}

		/// <summary>
		/// <para>Enter the default transaction category for this resource role.</para>
		/// <para>Lookup to msdyn_transactioncategory</para>
		/// <para>Transaction Category</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_TransactionCategory
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_TransactionCategory); }
			set { Entity.Attributes[Fields.msdyn_TransactionCategory] = value; }
		}

		/// <summary>
		/// <para>Type the name of the resource category.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
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
		/// <para>Status of the Resource Category</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		/// <summary>
		/// <para>Reason for the status of the Resource Category</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.BookableResourceCategoryOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
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
		/// <para>Exchange rate for the currency associated with the BookableResourceCategory with respect to the base currency.</para>
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