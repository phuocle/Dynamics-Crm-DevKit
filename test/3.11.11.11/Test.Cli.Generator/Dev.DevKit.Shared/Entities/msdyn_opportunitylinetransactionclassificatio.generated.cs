﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets
{
	public enum msdyn_BillingType
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

	public enum msdyn_TransactionClassification
	{
		/// <summary>
		/// Additional = 690970001
		/// </summary>
		Additional = 690970001,
		/// <summary>
		/// Commission = 690970000
		/// </summary>
		Commission = 690970000,
		/// <summary>
		/// Expense = 192350001
		/// </summary>
		Expense = 192350001,
		/// <summary>
		/// Fee = 192350004
		/// </summary>
		Fee = 192350004,
		/// <summary>
		/// Material = 192350002
		/// </summary>
		Material = 192350002,
		/// <summary>
		/// Milestone = 192350003
		/// </summary>
		Milestone = 192350003,
		/// <summary>
		/// Tax = 690970002
		/// </summary>
		Tax = 690970002,
		/// <summary>
		/// Time = 192350000
		/// </summary>
		Time = 192350000
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
	public partial class msdyn_opportunitylinetransactionclassificatio : EntityBase
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
			public const string msdyn_BillingType = "msdyn_billingtype";
			public const string msdyn_description = "msdyn_description";
			public const string msdyn_Include = "msdyn_include";
			public const string msdyn_OpportunityLine = "msdyn_opportunityline";
			public const string msdyn_opportunitylinetransactionclassificatioId = "msdyn_opportunitylinetransactionclassificatioid";
			public const string msdyn_TransactionClassification = "msdyn_transactionclassification";
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

		public const string EntityLogicalName = "msdyn_opportunitylinetransactionclassificatio";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10520;

		[DebuggerNonUserCode()]
		public msdyn_opportunitylinetransactionclassificatio()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_opportunitylinetransactionclassificatio(Guid msdyn_opportunitylinetransactionclassificatioId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_opportunitylinetransactionclassificatioId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_opportunitylinetransactionclassificatio(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_opportunitylinetransactionclassificatio(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_opportunitylinetransactionclassificatio(Entity entity, Entity merge)
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
		public msdyn_opportunitylinetransactionclassificatio(KeyAttributeCollection keys)
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
		/// <para>Select whether the transaction classification identified on the opportunity line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.</para>
		/// <para>Picklist</para>
		/// <para>Billing Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.msdyn_BillingType? msdyn_BillingType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_BillingType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.msdyn_BillingType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_BillingType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_BillingType] = null;
			}
		}

		/// <summary>
		/// <para>Type the name of the custom entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_description); }
			set { Entity.Attributes[Fields.msdyn_description] = value; }
		}

		/// <summary>
		/// <para>Select whether the transaction classification identified on the opportunity line will be used to map costs in the classification to the opportunity line to affect the gross margin calculation.</para>
		/// <para>Boolean</para>
		/// <para>Map for Costs calculation?</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_Include
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_Include); }
			set { Entity.Attributes[Fields.msdyn_Include] = value; }
		}

		/// <summary>
		/// <para>Type the opportunity line that this transaction classification applies to.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Opportunity Line</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_OpportunityLine
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_OpportunityLine); }
			set { Entity.Attributes[Fields.msdyn_OpportunityLine] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Opportunity Line Transaction Classification</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_opportunitylinetransactionclassificatioId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_opportunitylinetransactionclassificatioId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Select the transaction classifications that apply to the opportunity line. Select the transaction classifications are broadly 4 types: Select the time, Expense, Material and Fee</para>
		/// <para>Required - Picklist</para>
		/// <para>Transaction Classification</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.msdyn_TransactionClassification? msdyn_TransactionClassification
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_TransactionClassification);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.msdyn_TransactionClassification)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_TransactionClassification] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_TransactionClassification] = null;
			}
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
		/// <para>Status of the Opportunity Line Transaction Classification</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Opportunity Line Transaction Classification</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_opportunitylinetransactionclassificatioOptionSets.statuscode)value.Value;
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
