﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets
{
	public enum InteractionType
	{
		/// <summary>
		/// EmailOpen = 0
		/// </summary>
		EmailOpen = 0,
		/// <summary>
		/// LinkOpen = 1
		/// </summary>
		LinkOpen = 1,
		/// <summary>
		/// AttachmentOpen = 2
		/// </summary>
		AttachmentOpen = 2,
		/// <summary>
		/// EmailReply = 3
		/// </summary>
		EmailReply = 3
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

namespace Xyz.LuckyMokey.Shared.Entities
{
	public partial class InteractionForEmail : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EmailActivityId = "emailactivityid";
			public const string EmailAddress = "emailaddress";
			public const string EmailInteractionReplyId = "emailinteractionreplyid";
			public const string EmailInteractionTime = "emailinteractiontime";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string InteractedComponentText = "interactedcomponenttext";
			public const string InteractionForEmailId = "interactionforemailid";
			public const string InteractionLocation = "interactionlocation";
			public const string InteractionPartyId = "interactionpartyid";
			public const string InteractionPartyTypecode = "interactionpartytypecode";
			public const string InteractionRepliedBy = "interactionrepliedby";
			public const string InteractionReplyId = "interactionreplyid";
			public const string InteractionType = "interactiontype";
			public const string InteractionUserAgent = "interactionuseragent";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string name = "name";
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

		public const string EntityLogicalName = "interactionforemail";

		public const int EntityTypeCode = 9986;

		[DebuggerNonUserCode()]
		public InteractionForEmail()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InteractionForEmail(Guid InteractionForEmailId)
		{
			Entity = new Entity(EntityLogicalName, InteractionForEmailId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InteractionForEmail(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InteractionForEmail(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InteractionForEmail(Entity entity, Entity merge)
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
		public InteractionForEmail(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Email Activity Id.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Email Activity Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? EmailActivityId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.EmailActivityId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Email Interaction Component Related Text</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EmailAddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.EmailAddress); }
			set { Entity.Attributes[Fields.EmailAddress] = value; }
		}

		/// <summary>
		/// <para>Email Activity Id.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Email Activity Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? EmailInteractionReplyId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.EmailInteractionReplyId); }
		}

		/// <summary>
		/// <para>Shows the Interaction date and time of the an email.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Interaction date and time of the an email</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EmailInteractionTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EmailInteractionTime); }
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency.</para>
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
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Email Interaction Component Related Text</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractedComponentText
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractedComponentText); }
			set { Entity.Attributes[Fields.InteractedComponentText] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Interaction for Email</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid InteractionForEmailId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.InteractionForEmailId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows the location for an Interaction</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Location for an Interaction</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractionLocation
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractionLocation); }
			set { Entity.Attributes[Fields.InteractionLocation] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Interaction party id.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? InteractionPartyId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.InteractionPartyId); }
		}

		/// <summary>
		/// <para>For internal use only</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Interaction party type code.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? InteractionPartyTypecode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.InteractionPartyTypecode); }
		}

		/// <summary>
		/// <para>Shows the Name who replied to email if interaction is reply</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>Name who replied to email if interaction is reply</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractionRepliedBy
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractionRepliedBy); }
			set { Entity.Attributes[Fields.InteractionRepliedBy] = value; }
		}

		/// <summary>
		/// <para>InteractionReplyId</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>InteractionReplyId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractionReplyId
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractionReplyId); }
			set { Entity.Attributes[Fields.InteractionReplyId] = value; }
		}

		/// <summary>
		/// <para>Shows the type of Interaction.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Interaction Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.InteractionType? InteractionType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.InteractionType);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.InteractionType)value.Value;
			}
		}

		/// <summary>
		/// <para>Shows the User Agent for an Interaction if available</para>
		/// <para>String - MaxLength: 1250</para>
		/// <para>User Agent for an Interaction</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractionUserAgent
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractionUserAgent); }
			set { Entity.Attributes[Fields.InteractionUserAgent] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the record.</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string name
		{
			get { return Entity.GetAttributeValue<string>(Fields.name); }
			set { Entity.Attributes[Fields.name] = value; }
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
		/// <para>Unique identifier of the user or team who owns the record.</para>
		/// <para>Owner</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Status of the Interaction for Email</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Interaction for Email</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.InteractionForEmailOptionSets.statuscode)value.Value;
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
		/// <para>Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency.</para>
		/// <para>Lookup</para>
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
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}