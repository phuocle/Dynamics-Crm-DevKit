﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:38
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets
{
	public enum msdynmkt_domainalignmentvalidationstatus
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: canceled </para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		canceled = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirmed</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Confirmed = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirming DNS registration</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Confirming_DNS_registration = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Internal error</para>
		/// <para><strong>Value</strong>: 32</para>
		/// </summary>
		Internal_error = 32,
		/// <summary>
		/// <para><strong>Display Name</strong>: Keys not found on DNS</para>
		/// <para><strong>Value</strong>: 30</para>
		/// </summary>
		Keys_not_found_on_DNS = 30,
		/// <summary>
		/// <para><strong>Display Name</strong>: Not requested</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Not_requested = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Record not found</para>
		/// <para><strong>Value</strong>: 31</para>
		/// </summary>
		Record_not_found = 31,
		/// <summary>
		/// <para><strong>Display Name</strong>: Waiting to confirm</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Waiting_to_confirm = 0
	}
	public enum msdynmkt_emaildnsrecord1status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: canceled </para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		canceled = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirmed</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Confirmed = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirming DNS registration</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Confirming_DNS_registration = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Internal error</para>
		/// <para><strong>Value</strong>: 32</para>
		/// </summary>
		Internal_error = 32,
		/// <summary>
		/// <para><strong>Display Name</strong>: Keys not found on DNS</para>
		/// <para><strong>Value</strong>: 30</para>
		/// </summary>
		Keys_not_found_on_DNS = 30,
		/// <summary>
		/// <para><strong>Display Name</strong>: Not requested</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Not_requested = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Record not found</para>
		/// <para><strong>Value</strong>: 31</para>
		/// </summary>
		Record_not_found = 31,
		/// <summary>
		/// <para><strong>Display Name</strong>: Waiting to confirm</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Waiting_to_confirm = 0
	}
	public enum msdynmkt_emaildnsrecord2status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: canceled </para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		canceled = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirmed</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Confirmed = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirming DNS registration</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Confirming_DNS_registration = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Internal error</para>
		/// <para><strong>Value</strong>: 32</para>
		/// </summary>
		Internal_error = 32,
		/// <summary>
		/// <para><strong>Display Name</strong>: Keys not found on DNS</para>
		/// <para><strong>Value</strong>: 30</para>
		/// </summary>
		Keys_not_found_on_DNS = 30,
		/// <summary>
		/// <para><strong>Display Name</strong>: Not requested</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Not_requested = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Record not found</para>
		/// <para><strong>Value</strong>: 31</para>
		/// </summary>
		Record_not_found = 31,
		/// <summary>
		/// <para><strong>Display Name</strong>: Waiting to confirm</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Waiting_to_confirm = 0
	}
	public enum msdynmkt_ownershipvalidationstatus
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: canceled </para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		canceled = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirmed</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Confirmed = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirming DNS registration</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Confirming_DNS_registration = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Internal error</para>
		/// <para><strong>Value</strong>: 32</para>
		/// </summary>
		Internal_error = 32,
		/// <summary>
		/// <para><strong>Display Name</strong>: Keys not found on DNS</para>
		/// <para><strong>Value</strong>: 30</para>
		/// </summary>
		Keys_not_found_on_DNS = 30,
		/// <summary>
		/// <para><strong>Display Name</strong>: Not requested</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Not_requested = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Record not found</para>
		/// <para><strong>Value</strong>: 31</para>
		/// </summary>
		Record_not_found = 31,
		/// <summary>
		/// <para><strong>Display Name</strong>: Waiting to confirm</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Waiting_to_confirm = 0
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdynmkt_domain : EntityBase
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
			public const string msdynmkt_alignedname = "msdynmkt_alignedname";
			public const string msdynmkt_businessunitowned = "msdynmkt_businessunitowned";
			public const string msdynmkt_domainalignmentrecordhost = "msdynmkt_domainalignmentrecordhost";
			public const string msdynmkt_domainalignmentrecordtype = "msdynmkt_domainalignmentrecordtype";
			public const string msdynmkt_domainalignmentrecordvalue = "msdynmkt_domainalignmentrecordvalue";
			public const string msdynmkt_domainalignmentvalidationstatus = "msdynmkt_domainalignmentvalidationstatus";
			public const string msdynmkt_domainId = "msdynmkt_domainid";
			public const string msdynmkt_emaildnsrecord1status = "msdynmkt_emaildnsrecord1status";
			public const string msdynmkt_emaildnsrecord2status = "msdynmkt_emaildnsrecord2status";
			public const string msdynmkt_emailhost1 = "msdynmkt_emailhost1";
			public const string msdynmkt_emailhost2 = "msdynmkt_emailhost2";
			public const string msdynmkt_emailkey1 = "msdynmkt_emailkey1";
			public const string msdynmkt_emailkey2 = "msdynmkt_emailkey2";
			public const string msdynmkt_emailtyperecord1 = "msdynmkt_emailtyperecord1";
			public const string msdynmkt_emailtyperecord2 = "msdynmkt_emailtyperecord2";
			public const string msdynmkt_generatedomainalignmentkeys = "msdynmkt_generatedomainalignmentkeys";
			public const string msdynmkt_generateemailkeys = "msdynmkt_generateemailkeys";
			public const string msdynmkt_generateformkeys = "msdynmkt_generateformkeys";
			public const string msdynmkt_name = "msdynmkt_name";
			public const string msdynmkt_obmprefillenabled = "msdynmkt_obmprefillenabled";
			public const string msdynmkt_ownershiprecordkey = "msdynmkt_ownershiprecordkey";
			public const string msdynmkt_ownershiprecordtype = "msdynmkt_ownershiprecordtype";
			public const string msdynmkt_ownershipvalidationstatus = "msdynmkt_ownershipvalidationstatus";
			public const string msdynmkt_rtmprefillenabled = "msdynmkt_rtmprefillenabled";
			public const string msdynmkt_stepwizardprogress = "msdynmkt_stepwizardprogress";
			public const string msdynmkt_validationdate = "msdynmkt_validationdate";
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
		public const string EntityLogicalName = "msdynmkt_domain";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11337;
		public const string EntityCollectionSchemaName = "msdynmkt_domains";
		public const string EntityDisplayCollectionName = "Domains";
		public const string DisplayName = "Domain";
		public const string EntitySetName = "msdynmkt_domains";
		public const string EntityLogicalCollectionName = "msdynmkt_domains";
		public const string EntityPrimaryIdAttribute = "msdynmkt_domainid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdynmkt_name";
		public const string EntitySchemaName = "msdynmkt_domain";
		[DebuggerNonUserCode()]
		public msdynmkt_domain()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_domain(Guid msdynmkt_domainId)
		{
			Entity = new Entity(EntityLogicalName, msdynmkt_domainId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_domain(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_domain"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdynmkt_domain(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_domain"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_domain(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_domain(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynmkt_domain"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynmkt_domain(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynmkt_domain(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynmkt_domain(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Envelope-from domain name</para>
		/// <para><strong>Description</strong>: Name of aligned (envelope-from) domain</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_alignedname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_alignedname); }
			set { Entity.Attributes[Fields.msdynmkt_alignedname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Business Unit Owned</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Yes</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_businessunitowned
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_businessunitowned); }
			set { Entity.Attributes[Fields.msdynmkt_businessunitowned] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Envelope-from record host</para>
		/// <para><strong>Description</strong>: Host of envelope-from DNS record</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_domainalignmentrecordhost
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_domainalignmentrecordhost); }
			set { Entity.Attributes[Fields.msdynmkt_domainalignmentrecordhost] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Envelope-from record type</para>
		/// <para><strong>Description</strong>: Type of DNS record for envelope-from domain</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_domainalignmentrecordtype
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_domainalignmentrecordtype); }
			set { Entity.Attributes[Fields.msdynmkt_domainalignmentrecordtype] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Enveope-from record value</para>
		/// <para><strong>Description</strong>: Value of envelope-from DNS record</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_domainalignmentrecordvalue
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_domainalignmentrecordvalue); }
			set { Entity.Attributes[Fields.msdynmkt_domainalignmentrecordvalue] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Envelope-from verification status</para>
		/// <para><strong>Description</strong>: Envelope-from domain validation status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_domainalignmentvalidationstatus"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_domainalignmentvalidationstatus? msdynmkt_domainalignmentvalidationstatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_domainalignmentvalidationstatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_domainalignmentvalidationstatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_domainalignmentvalidationstatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_domainalignmentvalidationstatus] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Domain</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdynmkt_domainId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdynmkt_domainId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Key 1 Verification Status</para>
		/// <para><strong>Description</strong>: Email dns record 1 status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord1status"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord1status? msdynmkt_emaildnsrecord1status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_emaildnsrecord1status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord1status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_emaildnsrecord1status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_emaildnsrecord1status] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Key 2 Verification Status</para>
		/// <para><strong>Description</strong>: Email dns record 2 status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord2status"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord2status? msdynmkt_emaildnsrecord2status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_emaildnsrecord2status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_emaildnsrecord2status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_emaildnsrecord2status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_emaildnsrecord2status] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Host 1</para>
		/// <para><strong>Description</strong>: The email DNS record 1 host</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailhost1
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailhost1); }
			set { Entity.Attributes[Fields.msdynmkt_emailhost1] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Host 2</para>
		/// <para><strong>Description</strong>: The email DNS record 2 host</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailhost2
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailhost2); }
			set { Entity.Attributes[Fields.msdynmkt_emailhost2] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Value 1</para>
		/// <para><strong>Description</strong>: Value of email key 1</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailkey1
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailkey1); }
			set { Entity.Attributes[Fields.msdynmkt_emailkey1] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Value 2</para>
		/// <para><strong>Description</strong>: Value of email key 2</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailkey2
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailkey2); }
			set { Entity.Attributes[Fields.msdynmkt_emailkey2] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Type 1</para>
		/// <para><strong>Description</strong>: Type of DNS email 1 record</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailtyperecord1
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailtyperecord1); }
			set { Entity.Attributes[Fields.msdynmkt_emailtyperecord1] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Record Type 2</para>
		/// <para><strong>Description</strong>: Type of DNS email 2 record</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_emailtyperecord2
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_emailtyperecord2); }
			set { Entity.Attributes[Fields.msdynmkt_emailtyperecord2] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Enable custom Envelope-from domain</para>
		/// <para><strong>Description</strong>: Enable envelope-from domain and generate envelope-from domain keys</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_generatedomainalignmentkeys
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_generatedomainalignmentkeys); }
			set { Entity.Attributes[Fields.msdynmkt_generatedomainalignmentkeys] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email sending enabled</para>
		/// <para><strong>Description</strong>: Enable for email sending (generate email keys)</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Yes</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_generateemailkeys
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_generateemailkeys); }
			set { Entity.Attributes[Fields.msdynmkt_generateemailkeys] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Form hosting enabled</para>
		/// <para><strong>Description</strong>: Enable for form hosting</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_generateformkeys
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_generateformkeys); }
			set { Entity.Attributes[Fields.msdynmkt_generateformkeys] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Domain Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_name); }
			set { Entity.Attributes[Fields.msdynmkt_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Prefill outbound marketing forms</para>
		/// <para><strong>Description</strong>: Prefill outbound marketing forms</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_obmprefillenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_obmprefillenabled); }
			set { Entity.Attributes[Fields.msdynmkt_obmprefillenabled] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ownership Record Value</para>
		/// <para><strong>Description</strong>: The key of the DNS record for domain ownership</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_ownershiprecordkey
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_ownershiprecordkey); }
			set { Entity.Attributes[Fields.msdynmkt_ownershiprecordkey] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record type</para>
		/// <para><strong>Description</strong>: The DNS record type for domain ownership</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_ownershiprecordtype
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_ownershiprecordtype); }
			set { Entity.Attributes[Fields.msdynmkt_ownershiprecordtype] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ownership status</para>
		/// <para><strong>Description</strong>: Ownership validation status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_ownershipvalidationstatus"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_ownershipvalidationstatus? msdynmkt_ownershipvalidationstatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdynmkt_ownershipvalidationstatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.msdynmkt_ownershipvalidationstatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdynmkt_ownershipvalidationstatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdynmkt_ownershipvalidationstatus] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Prefill marketing forms</para>
		/// <para><strong>Description</strong>: Prefill marketing forms</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdynmkt_rtmprefillenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdynmkt_rtmprefillenabled); }
			set { Entity.Attributes[Fields.msdynmkt_rtmprefillenabled] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Step Wizard Progress</para>
		/// <para><strong>Description</strong>: Internal field for tracking progress of entity configuration via wizard</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynmkt_stepwizardprogress
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynmkt_stepwizardprogress); }
			set { Entity.Attributes[Fields.msdynmkt_stepwizardprogress] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Confirmed on</para>
		/// <para><strong>Description</strong>: The date when DNS registration was last confirmed</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdynmkt_validationdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdynmkt_validationdate); }
			set { Entity.Attributes[Fields.msdynmkt_validationdate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner Id</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Domain</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Domain</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdynmkt_domainOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time Zone Rule Version Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version Number</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}