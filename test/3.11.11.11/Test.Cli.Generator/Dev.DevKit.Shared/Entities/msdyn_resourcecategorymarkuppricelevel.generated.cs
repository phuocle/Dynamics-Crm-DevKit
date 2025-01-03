﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets
{
	public enum msdyn_pricecalculation
	{
		/// <summary>
		/// At cost = 192350001
		/// </summary>
		At_cost = 192350001,
		/// <summary>
		/// Markup percentage = 192350002
		/// </summary>
		Markup_percentage = 192350002,
		/// <summary>
		/// Price per unit = 192350000
		/// </summary>
		Price_per_unit = 192350000
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
	public partial class msdyn_resourcecategorymarkuppricelevel : EntityBase
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
			public const string msdyn_bookableresource = "msdyn_bookableresource";
			public const string msdyn_description = "msdyn_description";
			public const string msdyn_organizationalunit = "msdyn_organizationalunit";
			public const string msdyn_percent = "msdyn_percent";
			public const string msdyn_pricecalculation = "msdyn_pricecalculation";
			public const string msdyn_pricelist = "msdyn_pricelist";
			public const string msdyn_resourcecategory = "msdyn_resourcecategory";
			public const string msdyn_resourcecategorymarkuppricelevelId = "msdyn_resourcecategorymarkuppricelevelid";
			public const string msdyn_transactioncategory = "msdyn_transactioncategory";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_resourcecategorymarkuppricelevel";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10549;

		[DebuggerNonUserCode()]
		public msdyn_resourcecategorymarkuppricelevel()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_resourcecategorymarkuppricelevel(Guid msdyn_resourcecategorymarkuppricelevelId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_resourcecategorymarkuppricelevelId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_resourcecategorymarkuppricelevel(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_resourcecategorymarkuppricelevel(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_resourcecategorymarkuppricelevel(Entity entity, Entity merge)
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
		public msdyn_resourcecategorymarkuppricelevel(KeyAttributeCollection keys)
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
		/// <para>Select the bookable resource that the price is being set for.</para>
		/// <para>Lookup to bookableresource</para>
		/// <para>Resource</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_bookableresource
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_bookableresource); }
			set { Entity.Attributes[Fields.msdyn_bookableresource] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_description); }
			set { Entity.Attributes[Fields.msdyn_description] = value; }
		}

		/// <summary>
		/// <para>Select the organizational unit of the resource performing the work.</para>
		/// <para>Lookup to msdyn_organizationalunit</para>
		/// <para>Resourcing Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_organizationalunit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_organizationalunit); }
			set { Entity.Attributes[Fields.msdyn_organizationalunit] = value; }
		}

		/// <summary>
		/// <para>Enter the markup percent over base price. This field is relevant only when the price calculation method selected is &quot;Markup percentage&quot;.</para>
		/// <para>Decimal - MinValue: -100 - MaxValue: 100,000,000,000</para>
		/// <para>Percent</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_percent
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_percent); }
			set { Entity.Attributes[Fields.msdyn_percent] = value; }
		}

		/// <summary>
		/// <para>Select the price calculation method to determine the price.</para>
		/// <para>ReadOnly - Required - Picklist</para>
		/// <para>Price Calculation</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.msdyn_pricecalculation? msdyn_pricecalculation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_pricecalculation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.msdyn_pricecalculation)value.Value;
			}
		}

		/// <summary>
		/// <para>Select the price list to which this price list item is being added.</para>
		/// <para>Required - Lookup to pricelevel</para>
		/// <para>Price List</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_pricelist
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_pricelist); }
			set { Entity.Attributes[Fields.msdyn_pricelist] = value; }
		}

		/// <summary>
		/// <para>Select the role that the price is being set for.</para>
		/// <para>Lookup to bookableresourcecategory</para>
		/// <para>Role</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_resourcecategory
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_resourcecategory); }
			set { Entity.Attributes[Fields.msdyn_resourcecategory] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Role Price Markup</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_resourcecategorymarkuppricelevelId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_resourcecategorymarkuppricelevelId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Select the transaction category that the price is being set for.</para>
		/// <para>Lookup to msdyn_transactioncategory</para>
		/// <para>Transaction Category</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_transactioncategory
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_transactioncategory); }
			set { Entity.Attributes[Fields.msdyn_transactioncategory] = value; }
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
		/// <para>Status of the Role Price Markup</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Role Price Markup</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_resourcecategorymarkuppricelevelOptionSets.statuscode)value.Value;
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
