﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets
{
	public enum Direction
	{
		/// <summary>
		/// Bi-Directional = 1
		/// </summary>
		Bi_Directional = 1,
		/// <summary>
		/// Uni-Directional = 0
		/// </summary>
		Uni_Directional = 0
	}

	public enum SalesRelationshipType
	{
		/// <summary>
		/// Accessory = 2
		/// </summary>
		Accessory = 2,
		/// <summary>
		/// Cross-sell = 1
		/// </summary>
		Cross_sell = 1,
		/// <summary>
		/// Substitute = 3
		/// </summary>
		Substitute = 3,
		/// <summary>
		/// Up-sell = 0
		/// </summary>
		Up_sell = 0
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
	public partial class ProductSubstitute : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Direction = "direction";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string ProductId = "productid";
			public const string ProductSubstituteId = "productsubstituteid";
			public const string SalesRelationshipType = "salesrelationshiptype";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SubstitutedProductId = "substitutedproductid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "productsubstitute";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1028;

		[DebuggerNonUserCode()]
		public ProductSubstitute()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductSubstitute(Guid ProductSubstituteId)
		{
			Entity = new Entity(EntityLogicalName, ProductSubstituteId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductSubstitute(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductSubstitute(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductSubstitute(Entity entity, Entity merge)
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
		public ProductSubstitute(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Shows who created the record.</para>
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
		/// <para>Select whether the relationship is unidirectional or bidirectional.</para>
		/// <para>Picklist</para>
		/// <para>Direction</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.Direction? Direction
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Direction);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.Direction)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Direction] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Direction] = null;
			}
		}

		/// <summary>
		/// <para>Shows the conversion rate of the record&apos;s currency. The exchange rate is used to convert all money fields in the record from the local currency to the system&apos;s default currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Exchange Rate</para>
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
		/// <para>Shows who last updated the record.</para>
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
		/// <para>Shows who created the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>name</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para>Shows the product that the relationship is defined for.</para>
		/// <para>Lookup to product</para>
		/// <para>Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ProductId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ProductId); }
			set { Entity.Attributes[Fields.ProductId] = value; }
		}

		/// <summary>
		/// <para>Shows the unique identifier of the product relationship.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Product Relationship ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ProductSubstituteId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ProductSubstituteId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Select the type of the product relationship.</para>
		/// <para>Picklist</para>
		/// <para>Sales Relationship Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.SalesRelationshipType? SalesRelationshipType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SalesRelationshipType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.SalesRelationshipType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SalesRelationshipType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SalesRelationshipType] = null;
			}
		}

		/// <summary>
		/// <para>Select the product relationship&apos;s status.</para>
		/// <para>ReadOnly - State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.statecode)value.Value;
			}
		}

		/// <summary>
		/// <para>Shows whether the product relationship is active or inactive.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductSubstituteOptionSets.statuscode)value.Value;
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
		/// <para>Select the related product that the relationship needs to be defined for.</para>
		/// <para>Lookup to product</para>
		/// <para>Related Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SubstitutedProductId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SubstitutedProductId); }
			set { Entity.Attributes[Fields.SubstitutedProductId] = value; }
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
		/// <para>Shows the currency associated with the record.</para>
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
