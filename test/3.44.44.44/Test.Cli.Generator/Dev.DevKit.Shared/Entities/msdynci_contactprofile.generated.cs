﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:35
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdynci_contactprofileOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdynci_contactprofile : EntityBase
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
			public const string msdynci_birthdate = "msdynci_birthdate";
			public const string msdynci_city = "msdynci_city";
			public const string msdynci_contactid = "msdynci_contactid";
			public const string msdynci_contactprofileId = "msdynci_contactprofileid";
			public const string msdynci_countryorregion = "msdynci_countryorregion";
			public const string msdynci_customerid = "msdynci_customerid";
			public const string msdynci_entityname = "msdynci_entityname";
			public const string msdynci_firstname = "msdynci_firstname";
			public const string msdynci_gender = "msdynci_gender";
			public const string msdynci_id = "msdynci_id";
			public const string msdynci_identifier = "msdynci_identifier";
			public const string msdynci_jobtitle = "msdynci_jobtitle";
			public const string msdynci_lastname = "msdynci_lastname";
			public const string msdynci_lookupfield_customer = "msdynci_lookupfield_customer";
			public const string msdynci_postalcode = "msdynci_postalcode";
			public const string msdynci_primaryemail = "msdynci_primaryemail";
			public const string msdynci_primaryphone = "msdynci_primaryphone";
			public const string msdynci_sourceid = "msdynci_sourceid";
			public const string msdynci_stateorprovince = "msdynci_stateorprovince";
			public const string msdynci_streetaddress = "msdynci_streetaddress";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PartitionId = "partitionid";
			public const string TTLInSeconds = "ttlinseconds";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdynci_contactprofile";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11476;
		public const string EntityCollectionSchemaName = "msdynci_contactprofiles";
		public const string EntityDisplayCollectionName = "ContactProfile";
		public const string DisplayName = "ContactProfile";
		public const string EntitySetName = "msdynci_contactprofiles";
		public const string EntityLogicalCollectionName = "msdynci_contactprofiles";
		public const string EntityPrimaryIdAttribute = "msdynci_contactprofileid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdynci_identifier";
		public const string EntitySchemaName = "msdynci_contactprofile";
		[DebuggerNonUserCode()]
		public msdynci_contactprofile()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynci_contactprofile(Guid msdynci_contactprofileId)
		{
			Entity = new Entity(EntityLogicalName, msdynci_contactprofileId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdynci_contactprofile(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynci_contactprofile"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdynci_contactprofile(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdynci_contactprofile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynci_contactprofile(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynci_contactprofile(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdynci_contactprofile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdynci_contactprofile(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdynci_contactprofile(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdynci_contactprofile(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: BirthDate</para>
		/// <para><strong>Description</strong>: BirthDate</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdynci_birthdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdynci_birthdate); }
			set { Entity.Attributes[Fields.msdynci_birthdate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: City</para>
		/// <para><strong>Description</strong>: City</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_city
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_city); }
			set { Entity.Attributes[Fields.msdynci_city] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ContactId</para>
		/// <para><strong>Description</strong>: ContactId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_contactid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_contactid); }
			set { Entity.Attributes[Fields.msdynci_contactid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ContactProfile</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdynci_contactprofileId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdynci_contactprofileId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: CountryOrRegion</para>
		/// <para><strong>Description</strong>: CountryOrRegion</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_countryorregion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_countryorregion); }
			set { Entity.Attributes[Fields.msdynci_countryorregion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: CustomerId</para>
		/// <para><strong>Description</strong>: CustomerId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_customerid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_customerid); }
			set { Entity.Attributes[Fields.msdynci_customerid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: EntityName</para>
		/// <para><strong>Description</strong>: EntityName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_entityname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_entityname); }
			set { Entity.Attributes[Fields.msdynci_entityname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: FirstName</para>
		/// <para><strong>Description</strong>: FirstName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_firstname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_firstname); }
			set { Entity.Attributes[Fields.msdynci_firstname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Gender</para>
		/// <para><strong>Description</strong>: Gender</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_gender
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_gender); }
			set { Entity.Attributes[Fields.msdynci_gender] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id</para>
		/// <para><strong>Description</strong>: Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_id
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_id); }
			set { Entity.Attributes[Fields.msdynci_id] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Identifier</para>
		/// <para><strong>Description</strong>: Identifier</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_identifier
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_identifier); }
			set { Entity.Attributes[Fields.msdynci_identifier] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: JobTitle</para>
		/// <para><strong>Description</strong>: JobTitle</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_jobtitle
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_jobtitle); }
			set { Entity.Attributes[Fields.msdynci_jobtitle] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: LastName</para>
		/// <para><strong>Description</strong>: LastName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_lastname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_lastname); }
			set { Entity.Attributes[Fields.msdynci_lastname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: msdynci_lookupfield_customer</para>
		/// <para><strong>Lookup</strong>: <see cref="msdynci_customerprofile"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdynci_lookupfield_customer
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdynci_lookupfield_customer); }
			set { Entity.Attributes[Fields.msdynci_lookupfield_customer] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PostalCode</para>
		/// <para><strong>Description</strong>: PostalCode</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_postalcode
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_postalcode); }
			set { Entity.Attributes[Fields.msdynci_postalcode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PrimaryEmail</para>
		/// <para><strong>Description</strong>: PrimaryEmail</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_primaryemail
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_primaryemail); }
			set { Entity.Attributes[Fields.msdynci_primaryemail] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PrimaryPhone</para>
		/// <para><strong>Description</strong>: PrimaryPhone</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_primaryphone
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_primaryphone); }
			set { Entity.Attributes[Fields.msdynci_primaryphone] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SourceId</para>
		/// <para><strong>Description</strong>: SourceId</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_sourceid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_sourceid); }
			set { Entity.Attributes[Fields.msdynci_sourceid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: StateOrProvince</para>
		/// <para><strong>Description</strong>: StateOrProvince</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_stateorprovince
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_stateorprovince); }
			set { Entity.Attributes[Fields.msdynci_stateorprovince] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: StreetAddress</para>
		/// <para><strong>Description</strong>: StreetAddress</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdynci_streetaddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdynci_streetaddress); }
			set { Entity.Attributes[Fields.msdynci_streetaddress] = value; }
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
		/// <para><strong>Display Name</strong>: Partition Id</para>
		/// <para><strong>Description</strong>: Logical partition id. A logical partition consists of a set of records with same partition id.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PartitionId
		{
			get { return Entity.GetAttributeValue<string>(Fields.PartitionId); }
			set { Entity.Attributes[Fields.PartitionId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Time to live</para>
		/// <para><strong>Description</strong>: Time to live in seconds.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TTLInSeconds
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TTLInSeconds); }
			set { Entity.Attributes[Fields.TTLInSeconds] = value; }
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