﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_conversationdataOptionSets
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
	public partial class msdyn_conversationdata : EntityBase
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
			public const string msdyn_AccountId = "msdyn_accountid";
			public const string msdyn_AdditionalData = "msdyn_additionaldata";
			public const string msdyn_Channel = "msdyn_channel";
			public const string msdyn_ContactId = "msdyn_contactid";
			public const string msdyn_conversationdataId = "msdyn_conversationdataid";
			public const string msdyn_ConversationId = "msdyn_conversationid";
			public const string msdyn_ConversationTimestamp = "msdyn_conversationtimestamp";
			public const string msdyn_CustomAttribute1 = "msdyn_customattribute1";
			public const string msdyn_CustomAttribute2 = "msdyn_customattribute2";
			public const string msdyn_CustomAttribute3 = "msdyn_customattribute3";
			public const string msdyn_CustomAttribute4 = "msdyn_customattribute4";
			public const string msdyn_CustomAttribute5 = "msdyn_customattribute5";
			public const string msdyn_customerCity = "msdyn_customercity";
			public const string msdyn_customerCountry = "msdyn_customercountry";
			public const string msdyn_customerState = "msdyn_customerstate";
			public const string msdyn_customerZip = "msdyn_customerzip";
			public const string msdyn_ExternalCorrelationId = "msdyn_externalcorrelationid";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_PrimaryRelatedEntityName = "msdyn_primaryrelatedentityname";
			public const string msdyn_PrimaryRelatedEntityRecordId = "msdyn_primaryrelatedentityrecordid";
			public const string msdyn_ProviderId = "msdyn_providerid";
			public const string msdyn_ProviderName = "msdyn_providername";
			public const string msdyn_Region = "msdyn_region";
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

		public const string EntityLogicalName = "msdyn_conversationdata";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10249;

		[DebuggerNonUserCode()]
		public msdyn_conversationdata()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_conversationdata(Guid msdyn_conversationdataId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_conversationdataId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_conversationdata(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_conversationdata(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_conversationdata(Entity entity, Entity merge)
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
		public msdyn_conversationdata(KeyAttributeCollection keys)
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
		/// <para>Account unique identifier</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Account Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_AccountId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_AccountId); }
			set { Entity.Attributes[Fields.msdyn_AccountId] = value; }
		}

		/// <summary>
		/// <para>Additional data related to the conversation</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Additional Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_AdditionalData
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_AdditionalData); }
			set { Entity.Attributes[Fields.msdyn_AdditionalData] = value; }
		}

		/// <summary>
		/// <para>Conversation channel</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Channel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Channel
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Channel); }
			set { Entity.Attributes[Fields.msdyn_Channel] = value; }
		}

		/// <summary>
		/// <para>Contact unique identifier</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Contact Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ContactId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ContactId); }
			set { Entity.Attributes[Fields.msdyn_ContactId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Conversation Data Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_conversationdataId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_conversationdataId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Conversation identifier</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Conversation Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ConversationId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ConversationId); }
			set { Entity.Attributes[Fields.msdyn_ConversationId] = value; }
		}

		/// <summary>
		/// <para>Conversation started time</para>
		/// <para>Required - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Conversation Timestamp</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_ConversationTimestampUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_ConversationTimestamp); }
			set { Entity.Attributes[Fields.msdyn_ConversationTimestamp] = value; }
		}

		/// <summary>
		/// <para>Custom Attribute 1</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Custom Attribute 1</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CustomAttribute1
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CustomAttribute1); }
			set { Entity.Attributes[Fields.msdyn_CustomAttribute1] = value; }
		}

		/// <summary>
		/// <para>Custom Attribute 2</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Custom Attribute 2</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CustomAttribute2
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CustomAttribute2); }
			set { Entity.Attributes[Fields.msdyn_CustomAttribute2] = value; }
		}

		/// <summary>
		/// <para>Custom Attribute 3</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Custom Attribute 3</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CustomAttribute3
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CustomAttribute3); }
			set { Entity.Attributes[Fields.msdyn_CustomAttribute3] = value; }
		}

		/// <summary>
		/// <para>Custom Attribute 4</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Custom Attribute 4</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CustomAttribute4
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CustomAttribute4); }
			set { Entity.Attributes[Fields.msdyn_CustomAttribute4] = value; }
		}

		/// <summary>
		/// <para>Custom Attribute 5</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Custom Attribute 5</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_CustomAttribute5
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_CustomAttribute5); }
			set { Entity.Attributes[Fields.msdyn_CustomAttribute5] = value; }
		}

		/// <summary>
		/// <para>City name for customer address</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Customer City</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_customerCity
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_customerCity); }
			set { Entity.Attributes[Fields.msdyn_customerCity] = value; }
		}

		/// <summary>
		/// <para>Country name for customer address</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Customer Country</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_customerCountry
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_customerCountry); }
			set { Entity.Attributes[Fields.msdyn_customerCountry] = value; }
		}

		/// <summary>
		/// <para>State name for customer address</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Customer State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_customerState
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_customerState); }
			set { Entity.Attributes[Fields.msdyn_customerState] = value; }
		}

		/// <summary>
		/// <para>Zip for customer address</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Customer Zip</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_customerZip
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_customerZip); }
			set { Entity.Attributes[Fields.msdyn_customerZip] = value; }
		}

		/// <summary>
		/// <para>External System Correlation Id</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>External Correlation Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ExternalCorrelationId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ExternalCorrelationId); }
			set { Entity.Attributes[Fields.msdyn_ExternalCorrelationId] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
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
		/// <para>Name of the primary entity to which this work item belongs to</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Primary Related Entity Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_PrimaryRelatedEntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_PrimaryRelatedEntityName); }
			set { Entity.Attributes[Fields.msdyn_PrimaryRelatedEntityName] = value; }
		}

		/// <summary>
		/// <para>Id of the primary entity to which this work item belongs to</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Primary Related Entity Record Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_PrimaryRelatedEntityRecordId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_PrimaryRelatedEntityRecordId); }
			set { Entity.Attributes[Fields.msdyn_PrimaryRelatedEntityRecordId] = value; }
		}

		/// <summary>
		/// <para>Channel Integration Framework Provider Id</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Provider Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ProviderId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ProviderId); }
			set { Entity.Attributes[Fields.msdyn_ProviderId] = value; }
		}

		/// <summary>
		/// <para>Channel Integration Framework Provider Name</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Provider Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ProviderName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ProviderName); }
			set { Entity.Attributes[Fields.msdyn_ProviderName] = value; }
		}

		/// <summary>
		/// <para>Conversation origin region information</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>RegionData</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Region
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Region); }
			set { Entity.Attributes[Fields.msdyn_Region] = value; }
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
		/// <para>Status of the ConversationData</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_conversationdataOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_conversationdataOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the ConversationData</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_conversationdataOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_conversationdataOptionSets.statuscode)value.Value;
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