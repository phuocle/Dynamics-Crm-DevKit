﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:41
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets
{
	public enum msevtmgt_Type
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: External speaker</para>
		/// <para><strong>Value</strong>: 100,000,001</para>
		/// </summary>
		External_speaker = 100_000_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Internal speaker</para>
		/// <para><strong>Value</strong>: 100,000,000</para>
		/// </summary>
		Internal_speaker = 100_000_000
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
	public partial class msevtmgt_Speaker : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EntityImageId = "entityimageid";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msevtmgt_About = "msevtmgt_about";
			public const string msevtmgt_Accomplishments = "msevtmgt_accomplishments";
			public const string msevtmgt_Blog = "msevtmgt_blog";
			public const string msevtmgt_Contact = "msevtmgt_contact";
			public const string msevtmgt_Email = "msevtmgt_email";
			public const string msevtmgt_EventId = "msevtmgt_eventid";
			public const string msevtmgt_EventRegistration = "msevtmgt_eventregistration";
			public const string msevtmgt_LinkedIn = "msevtmgt_linkedin";
			public const string msevtmgt_Name = "msevtmgt_name";
			public const string msevtmgt_Publications = "msevtmgt_publications";
			public const string msevtmgt_SpeakerCost = "msevtmgt_speakercost";
			public const string msevtmgt_speakercost_Base = "msevtmgt_speakercost_base";
			public const string msevtmgt_SpeakerId = "msevtmgt_speakerid";
			public const string msevtmgt_Title = "msevtmgt_title";
			public const string msevtmgt_TransactionCurrencyId = "msevtmgt_transactioncurrencyid";
			public const string msevtmgt_Twitter = "msevtmgt_twitter";
			public const string msevtmgt_Type = "msevtmgt_type";
			public const string msevtmgt_Website = "msevtmgt_website";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string processid = "processid";
			public const string stageid = "stageid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string traversedpath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msevtmgt_speaker";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11117;
		public const string EntityCollectionSchemaName = "msevtmgt_Speakers";
		public const string EntityDisplayCollectionName = "Speakers";
		public const string DisplayName = "Speaker";
		public const string EntitySetName = "msevtmgt_speakers";
		public const string EntityLogicalCollectionName = "msevtmgt_speakers";
		public const string EntityPrimaryIdAttribute = "msevtmgt_speakerid";
		public const string EntityPrimaryImageAttribute = "entityimage";
		public const string EntityPrimaryNameAttribute = "msevtmgt_name";
		public const string EntitySchemaName = "msevtmgt_Speaker";
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker(Guid msevtmgt_SpeakerId)
		{
			Entity = new Entity(EntityLogicalName, msevtmgt_SpeakerId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msevtmgt_Speaker"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msevtmgt_Speaker"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msevtmgt_Speaker(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msevtmgt_Speaker"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msevtmgt_Speaker(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msevtmgt_Speaker(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msevtmgt_Speaker(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created on</para>
		/// <para><strong>Description</strong>: The date and time when the record was created</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by (delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? EntityImageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.EntityImageId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Exchange rate</para>
		/// <para><strong>Description</strong>: Exchange rate between the base currency and the currency associated with the entity</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import sequence number</para>
		/// <para><strong>Description</strong>: The sequence number of the import that created this record</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified on</para>
		/// <para><strong>Description</strong>: The date and time when the record was modified</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by (delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: About</para>
		/// <para><strong>Description</strong>: About</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_About
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_About); }
			set { Entity.Attributes[Fields.msevtmgt_About] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Accomplishments</para>
		/// <para><strong>Description</strong>: Accomplishments</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Accomplishments
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Accomplishments); }
			set { Entity.Attributes[Fields.msevtmgt_Accomplishments] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Blog</para>
		/// <para><strong>Description</strong>: Blog</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Blog
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Blog); }
			set { Entity.Attributes[Fields.msevtmgt_Blog] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Contact</para>
		/// <para><strong>Description</strong>: Lookup field for contact</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_Contact
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_Contact); }
			set { Entity.Attributes[Fields.msevtmgt_Contact] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email</para>
		/// <para><strong>Description</strong>: Speaker email</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Email
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Email); }
			set { Entity.Attributes[Fields.msevtmgt_Email] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Event</para>
		/// <para><strong>Description</strong>: Unique identifier for the event associated with the speaker</para>
		/// <para><strong>Lookup</strong>: <see cref="msevtmgt_event"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_EventId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_EventId); }
			set { Entity.Attributes[Fields.msevtmgt_EventId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Event registration</para>
		/// <para><strong>Description</strong>: Lookup field for event registration</para>
		/// <para><strong>Lookup</strong>: <see cref="msevtmgt_eventregistration"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_EventRegistration
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_EventRegistration); }
			set { Entity.Attributes[Fields.msevtmgt_EventRegistration] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: LinkedIn</para>
		/// <para><strong>Description</strong>: LinkedIn</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_LinkedIn
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_LinkedIn); }
			set { Entity.Attributes[Fields.msevtmgt_LinkedIn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Name); }
			set { Entity.Attributes[Fields.msevtmgt_Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Publications</para>
		/// <para><strong>Description</strong>: Publications</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Publications
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Publications); }
			set { Entity.Attributes[Fields.msevtmgt_Publications] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Speaker cost</para>
		/// <para><strong>Description</strong>: Value of the speaker cost.</para>
		/// <para><strong>Currency</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 922,337,203,685,477</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msevtmgt_SpeakerCost
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msevtmgt_SpeakerCost);
				if (value == null) return null;
				return value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msevtmgt_SpeakerCost] = new Money(value.Value);
				else
					Entity.Attributes[Fields.msevtmgt_SpeakerCost] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Speaker cost (base)</para>
		/// <para><strong>Description</strong>: Value of the speaker cost (in the base currency)</para>
		/// <para><strong>ReadOnly</strong> - <strong>Currency</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 922,337,203,685,477</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msevtmgt_speakercost_Base
		{
			get
			{
				var value = Entity.GetAttributeValue<Money>(Fields.msevtmgt_speakercost_Base);
				if (value == null) return null;
				return value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Speaker</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msevtmgt_SpeakerId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msevtmgt_SpeakerId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Title</para>
		/// <para><strong>Description</strong>: Title</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Title); }
			set { Entity.Attributes[Fields.msevtmgt_Title] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Unique identifier of the currency associated with the entity</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_TransactionCurrencyId); }
			set { Entity.Attributes[Fields.msevtmgt_TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Twitter</para>
		/// <para><strong>Description</strong>: Twitter</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Twitter
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Twitter); }
			set { Entity.Attributes[Fields.msevtmgt_Twitter] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: Speaker type</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.msevtmgt_Type"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.msevtmgt_Type? msevtmgt_Type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msevtmgt_Type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.msevtmgt_Type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msevtmgt_Type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msevtmgt_Type] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Website</para>
		/// <para><strong>Description</strong>: Website URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Website
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Website); }
			set { Entity.Attributes[Fields.msevtmgt_Website] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record created on</para>
		/// <para><strong>Description</strong>: The date and time when the record was migrated</para>
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
		/// <para><strong>Description</strong>: Owner ID</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning business unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning user</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Process ID</para>
		/// <para><strong>Description</strong>: Contains the ID of the process associated with the entity</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? processid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.processid); }
			set { Entity.Attributes[Fields.processid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Stage ID</para>
		/// <para><strong>Description</strong>: Contains the ID of the stage where the entity is located</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? stageid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.stageid); }
			set { Entity.Attributes[Fields.stageid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the event speaker</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the event speaker</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_SpeakerOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time zone rule version number</para>
		/// <para><strong>Description</strong>: For internal use only</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Unique identifier of the currency associated with the entity</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Traversed path</para>
		/// <para><strong>Description</strong>: A comma-separated list of string values representing the unique IDs of stages in a business-process flow instance, in the order that they occur.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string traversedpath
		{
			get { return Entity.GetAttributeValue<string>(Fields.traversedpath); }
			set { Entity.Attributes[Fields.traversedpath] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC conversion time zone code</para>
		/// <para><strong>Description</strong>: The time zone code that was in use when the record was created</para>
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
		/// <summary>
		/// <para>byte[]</para>
		/// <para>Image</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public byte[] EntityImage
		{
			get { return Entity.GetAttributeValue<byte[]>("entityimage"); }
			set { Entity.Attributes["entityimage"] = value; }
		}
		/// <summary>
		/// <para>ReadOnly - String</para>
		/// <para>Image</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityImageUrl
		{
			get { return Entity.GetAttributeValue<string>("entityimage_url"); }
		}
	}
}