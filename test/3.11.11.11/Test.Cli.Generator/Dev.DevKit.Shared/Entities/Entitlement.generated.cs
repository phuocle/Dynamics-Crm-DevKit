﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.EntitlementOptionSets
{
	public enum AllocationTypeCode
	{
		/// <summary>
		/// Discount % and Price List = 192350000
		/// </summary>
		Discount_and_Price_List = 192350000,
		/// <summary>
		/// Number of cases = 0
		/// </summary>
		Number_of_cases = 0,
		/// <summary>
		/// Number of hours = 1
		/// </summary>
		Number_of_hours = 1
	}

	public enum DecreaseRemainingOn
	{
		/// <summary>
		/// Case Creation = 1
		/// </summary>
		Case_Creation = 1,
		/// <summary>
		/// Case Resolution = 0
		/// </summary>
		Case_Resolution = 0
	}

	public enum entitytype
	{
		/// <summary>
		/// Case = 0
		/// </summary>
		Case = 0,
		/// <summary>
		/// Work Order = 192350000
		/// </summary>
		Work_Order = 192350000
	}

	public enum KbAccessLevel
	{
		/// <summary>
		/// None = 2
		/// </summary>
		None = 2,
		/// <summary>
		/// Premium = 1
		/// </summary>
		Premium = 1,
		/// <summary>
		/// Standard = 0
		/// </summary>
		Standard = 0
	}

	public enum msdyn_AppliesTo
	{
		/// <summary>
		/// Both Work Order Products & Services = 690970002
		/// </summary>
		Both_Work_Order_Products_Services = 690970002,
		/// <summary>
		/// Work Order Products = 690970000
		/// </summary>
		Work_Order_Products = 690970000,
		/// <summary>
		/// Work Order Services = 690970001
		/// </summary>
		Work_Order_Services = 690970001
	}

	public enum StateCode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Cancelled = 2
		/// </summary>
		Cancelled = 2,
		/// <summary>
		/// Draft = 0
		/// </summary>
		Draft = 0,
		/// <summary>
		/// Expired = 3
		/// </summary>
		Expired = 3,
		/// <summary>
		/// Waiting = 4
		/// </summary>
		Waiting = 4
	}

	public enum StatusCode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Cancelled = 2
		/// </summary>
		Cancelled = 2,
		/// <summary>
		/// Draft = 0
		/// </summary>
		Draft = 0,
		/// <summary>
		/// Expired = 3
		/// </summary>
		Expired = 3,
		/// <summary>
		/// Waiting = 1200
		/// </summary>
		Waiting = 1200
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Entitlement : EntityBase
	{
		public struct Fields
		{
			public const string AccountId = "accountid";
			public const string AllocationTypeCode = "allocationtypecode";
			public const string ContactId = "contactid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string CustomerId = "customerid";
			public const string DecreaseRemainingOn = "decreaseremainingon";
			public const string Description = "description";
			public const string EmailAddress = "emailaddress";
			public const string EndDate = "enddate";
			public const string EntitlementId = "entitlementid";
			public const string EntitlementTemplateId = "entitlementtemplateid";
			public const string entitytype = "entitytype";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsDefault = "isdefault";
			public const string KbAccessLevel = "kbaccesslevel";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_AppliesTo = "msdyn_appliesto";
			public const string msdyn_EntitlementPrioritization = "msdyn_entitlementprioritization";
			public const string msdyn_PercentDiscount = "msdyn_percentdiscount";
			public const string msdyn_PriceListToApply = "msdyn_pricelisttoapply";
			public const string Name = "name";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string ProcessId = "processid";
			public const string RemainingTerms = "remainingterms";
			public const string RestrictCaseCreation = "restrictcasecreation";
			public const string SLAId = "slaid";
			public const string StageId = "stageid";
			public const string StartDate = "startdate";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TotalTerms = "totalterms";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string TraversedPath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "entitlement";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9700;

		[DebuggerNonUserCode()]
		public Entitlement()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Entitlement(Guid EntitlementId)
		{
			Entity = new Entity(EntityLogicalName, EntitlementId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Entitlement(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Entitlement(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Entitlement(Entity entity, Entity merge)
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
		public Entitlement(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier for Account associated with Entitlement.</para>
		/// <para>ReadOnly - Lookup to account</para>
		/// <para>Account</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AccountId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AccountId); }
		}

		/// <summary>
		/// <para>Select the type of entitlement terms.</para>
		/// <para>Required - Picklist</para>
		/// <para>Allocation Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.AllocationTypeCode? AllocationTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.AllocationTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.AllocationTypeCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.AllocationTypeCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.AllocationTypeCode] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier for Contact associated with Entitlement.</para>
		/// <para>ReadOnly - Lookup to contact</para>
		/// <para>Contact</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ContactId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ContactId); }
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
		/// <para>Unique identifier of the delegate user who created the entitlement.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Choose a contact or account for which this entitlement has been defined.</para>
		/// <para>Lookup to account, contact</para>
		/// <para>Customer</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CustomerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CustomerId); }
			set { Entity.Attributes[Fields.CustomerId] = value; }
		}

		/// <summary>
		/// <para>Select whether to decrease the remaining terms when the case is created or when it is resolved.</para>
		/// <para>Required - Picklist</para>
		/// <para>Decrease Remaining On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.DecreaseRemainingOn? DecreaseRemainingOn
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DecreaseRemainingOn);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.DecreaseRemainingOn)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DecreaseRemainingOn] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DecreaseRemainingOn] = null;
			}
		}

		/// <summary>
		/// <para>Type additional information to describe the Entitlement</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>The primary email address for the entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Email Address</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EmailAddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.EmailAddress); }
			set { Entity.Attributes[Fields.EmailAddress] = value; }
		}

		/// <summary>
		/// <para>Enter the date when the entitlement ends.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>End Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EndDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EndDate); }
			set { Entity.Attributes[Fields.EndDate] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Entitlement</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid EntitlementId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.EntitlementId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier for Entitlement Template associated with Entitlement.</para>
		/// <para>Lookup to entitlementtemplate</para>
		/// <para>Entitlement Template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference EntitlementTemplateId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.EntitlementTemplateId); }
			set { Entity.Attributes[Fields.EntitlementTemplateId] = value; }
		}

		/// <summary>
		/// <para>Entity type for which the entitlement applies</para>
		/// <para>Required - Picklist</para>
		/// <para>Entity Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.entitytype? entitytype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.entitytype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.entitytype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.entitytype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.entitytype] = null;
			}
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the contact with respect to the base currency.</para>
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
		/// <para>Shows whether this entitlement is the default one for the specified customer.</para>
		/// <para>Required - Boolean</para>
		/// <para>Is Default</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDefault
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDefault); }
			set { Entity.Attributes[Fields.IsDefault] = value; }
		}

		/// <summary>
		/// <para>Select the access someone will have to the knowledge base on the portal.</para>
		/// <para>Picklist</para>
		/// <para>KB Access Level</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.KbAccessLevel? KbAccessLevel
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.KbAccessLevel);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.KbAccessLevel)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.KbAccessLevel] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.KbAccessLevel] = null;
			}
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
		/// <para>The work order entities to which the entitlement is applicable.</para>
		/// <para>Required - Picklist</para>
		/// <para>Applies To</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.msdyn_AppliesTo? msdyn_AppliesTo
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_AppliesTo);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.msdyn_AppliesTo)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_AppliesTo] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_AppliesTo] = null;
			}
		}

		/// <summary>
		/// <para>The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Entitlement Prioritization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_EntitlementPrioritization
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_EntitlementPrioritization); }
			set { Entity.Attributes[Fields.msdyn_EntitlementPrioritization] = value; }
		}

		/// <summary>
		/// <para>The percent discount the entitlement applies to the work order.</para>
		/// <para>Double - MinValue: 0 - MaxValue: 100</para>
		/// <para>% Discount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? msdyn_PercentDiscount
		{
			get { return Entity.GetAttributeValue<double?>(Fields.msdyn_PercentDiscount); }
			set { Entity.Attributes[Fields.msdyn_PercentDiscount] = value; }
		}

		/// <summary>
		/// <para>The price list that the entitlement applies to the work order.</para>
		/// <para>Lookup to pricelevel</para>
		/// <para>Price List To Apply</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_PriceListToApply
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_PriceListToApply); }
			set { Entity.Attributes[Fields.msdyn_PriceListToApply] = value; }
		}

		/// <summary>
		/// <para>Type a meaningful name for the entitlement.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Entitlement Name</para>
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
		/// <para>Contains the id of the process associated with the entity.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Process Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ProcessId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ProcessId); }
			set { Entity.Attributes[Fields.ProcessId] = value; }
		}

		/// <summary>
		/// <para>Type the total number of entitlement terms that are left.</para>
		/// <para>Decimal - MinValue: -100,000,000,000 - MaxValue: 100,000,000,000</para>
		/// <para>Remaining Terms</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? RemainingTerms
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.RemainingTerms); }
			set { Entity.Attributes[Fields.RemainingTerms] = value; }
		}

		/// <summary>
		/// <para>Tells whether case creation is restricted based on entitlement terms.</para>
		/// <para>Required - Boolean</para>
		/// <para>Restrict based on entitlement terms</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? RestrictCaseCreation
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.RestrictCaseCreation); }
			set { Entity.Attributes[Fields.RestrictCaseCreation] = value; }
		}

		/// <summary>
		/// <para>Choose the service level agreement (SLA) associated with the entitlement.</para>
		/// <para>Lookup to sla</para>
		/// <para>SLA</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SLAId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SLAId); }
			set { Entity.Attributes[Fields.SLAId] = value; }
		}

		/// <summary>
		/// <para>Contains the id of the stage where the entity is located.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>(Deprecated) Stage Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? StageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.StageId); }
			set { Entity.Attributes[Fields.StageId] = value; }
		}

		/// <summary>
		/// <para>Enter the date when the entitlement starts.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Start Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartDate); }
			set { Entity.Attributes[Fields.StartDate] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.StateCode)value.Value;
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
		/// <para>Select the reason code that explains the status of the entitlement.</para>
		/// <para>Status</para>
		/// <para>Status Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.EntitlementOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.EntitlementOptionSets.StatusCode)value.Value;
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
		/// <para>Type the total number of entitlement terms.</para>
		/// <para>Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>Total Terms</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? TotalTerms
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.TotalTerms); }
			set { Entity.Attributes[Fields.TotalTerms] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the currency associated with the contact.</para>
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
		/// <para>A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>(Deprecated) Traversed Path</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TraversedPath
		{
			get { return Entity.GetAttributeValue<string>(Fields.TraversedPath); }
			set { Entity.Attributes[Fields.TraversedPath] = value; }
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
