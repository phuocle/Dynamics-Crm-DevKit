﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ProductAssociationOptionSets
{
	public enum ProductIsRequired
	{
		/// <summary>
		/// Optional = 0
		/// </summary>
		Optional = 0,
		/// <summary>
		/// Required = 1
		/// </summary>
		Required = 1
	}

	public enum PropertyCustomizationStatus
	{
		/// <summary>
		/// Available = 1
		/// </summary>
		Available = 1,
		/// <summary>
		/// Not Available = 0
		/// </summary>
		Not_Available = 0
	}

	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Draft = 2
		/// </summary>
		Draft = 2,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1,
		/// <summary>
		/// Under Revision = 3
		/// </summary>
		Under_Revision = 3
	}

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Draft = 0
		/// </summary>
		Draft = 0,
		/// <summary>
		/// DraftActive = 3
		/// </summary>
		DraftActive = 3,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ProductAssociation : EntityBase
	{
		public struct Fields
		{
			public const string AssociatedProduct = "associatedproduct";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DMTImportState = "dmtimportstate";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string ProductAssociationId = "productassociationid";
			public const string ProductId = "productid";
			public const string ProductIsRequired = "productisrequired";
			public const string PropertyCustomizationStatus = "propertycustomizationstatus";
			public const string Quantity = "quantity";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UoMId = "uomid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "productassociation";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1025;

		[DebuggerNonUserCode()]
		public ProductAssociation()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductAssociation(Guid ProductAssociationId)
		{
			Entity = new Entity(EntityLogicalName, ProductAssociationId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductAssociation(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductAssociation(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProductAssociation(Entity entity, Entity merge)
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
		public ProductAssociation(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Select a product to add to the bundle or kit.</para>
		/// <para>Lookup to product</para>
		/// <para>Associated Product</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AssociatedProduct
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AssociatedProduct); }
			set { Entity.Attributes[Fields.AssociatedProduct] = value; }
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
		/// <para>Internal Use Only</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Internal Use Only</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? DMTImportState
		{
			get { return Entity.GetAttributeValue<int?>(Fields.DMTImportState); }
			set { Entity.Attributes[Fields.DMTImportState] = value; }
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
		/// <para>Shows the unique identifier of the product association.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Product Association ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ProductAssociationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ProductAssociationId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Select a bundle or a kit.</para>
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
		/// <para>Select whether the associated product is required or optional.</para>
		/// <para>Required - Picklist</para>
		/// <para>Required</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.ProductIsRequired? ProductIsRequired
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ProductIsRequired);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.ProductIsRequired)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ProductIsRequired] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ProductIsRequired] = null;
			}
		}

		/// <summary>
		/// <para>Shows whether the item has properties that can be customized.</para>
		/// <para>Picklist</para>
		/// <para>Property Customization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.PropertyCustomizationStatus? PropertyCustomizationStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PropertyCustomizationStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.PropertyCustomizationStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.PropertyCustomizationStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.PropertyCustomizationStatus] = null;
			}
		}

		/// <summary>
		/// <para>Type the quantity of the products added to the bundle or kit.</para>
		/// <para>Required - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Quantity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? Quantity
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.Quantity); }
			set { Entity.Attributes[Fields.Quantity] = value; }
		}

		/// <summary>
		/// <para>Shows whether the associated product is active or inactive.</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.statecode)value.Value;
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
		/// <para>Select the associated product&apos;s status.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ProductAssociationOptionSets.statuscode)value.Value;
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
		/// <para>Shows the unit of the product association.</para>
		/// <para>Required - Lookup to uom</para>
		/// <para>Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference UoMId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.UoMId); }
			set { Entity.Attributes[Fields.UoMId] = value; }
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
