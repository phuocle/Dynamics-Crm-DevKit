﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:44:34
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.DelveActionHubOptionSets
{
	public enum CardType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Default</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Default = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: MeetingRequest</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		MeetingRequest = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: SendContentRequest</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		SendContentRequest = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: YesNo</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		YesNo = 2
	}
	public enum StateCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Completed</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Completed = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dismiss</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Dismiss = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Pending</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Pending = 0
	}
	public enum StatusCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Completed</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Completed</strong></para>
		/// </summary>
		Completed = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dismiss</para>
		/// <para><strong>Value</strong>: 3</para>
		/// <para><strong>StateCode.Dismiss</strong></para>
		/// </summary>
		Dismiss = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Pending</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Pending</strong></para>
		/// </summary>
		Pending = 1
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class DelveActionHub : EntityBase
	{
		public struct Fields
		{
			public const string CardType = "cardtype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string CreatedTime = "createdtime";
			public const string DelveActionHubId = "delveactionhubid";
			public const string Description = "description";
			public const string ExchangeRate = "exchangerate";
			public const string IconClassName = "iconclassname";
			public const string MailWebLink = "mailweblink";
			public const string MessageId = "messageid";
			public const string MessageTime = "messagetime";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string ModifiedTime = "modifiedtime";
			public const string OrganizationId = "organizationid";
			public const string RecordId = "recordid";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RelatedMailIds = "relatedmailids";
			public const string Sender = "sender";
			public const string SenderEntityId = "senderentityid";
			public const string SenderEntityObjectTypeCode = "senderentityobjecttypecode";
			public const string SenderImageUrl = "senderimageurl";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string Subject = "subject";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "delveactionhub";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9961;
		public const string EntityCollectionSchemaName = "DelveActionHubs";
		public const string EntityDisplayCollectionName = "Smart Actions";
		public const string DisplayName = "DelveActionHub";
		public const string EntitySetName = "delveactionhubs";
		public const string EntityLogicalCollectionName = "delveactionhub";
		public const string EntityPrimaryIdAttribute = "delveactionhubid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "subject";
		public const string EntitySchemaName = "DelveActionHub";
		[DebuggerNonUserCode()]
		public DelveActionHub()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public DelveActionHub(Guid DelveActionHubId)
		{
			Entity = new Entity(EntityLogicalName, DelveActionHubId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public DelveActionHub(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="DelveActionHub"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public DelveActionHub(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="DelveActionHub"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public DelveActionHub(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new DelveActionHub(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="DelveActionHub"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public DelveActionHub(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new DelveActionHub(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public DelveActionHub(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Card Type</para>
		/// <para><strong>Description</strong>: Shows the type of the message.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.CardType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.CardType.Default"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.CardType? CardType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.CardType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.CardType)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Shows who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who created the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created Time</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Delve Action Hub</para>
		/// <para><strong>Description</strong>: Shows the entity instances.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid DelveActionHubId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.DelveActionHubId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Card Description</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 8,192</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ExchangeRate</para>
		/// <para><strong>Description</strong>: Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Icon ClassName</para>
		/// <para><strong>Description</strong>: Stores the Icon Class name of the Delve ActionHub Card.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IconClassName
		{
			get { return Entity.GetAttributeValue<string>(Fields.IconClassName); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mail Web Link</para>
		/// <para><strong>Description</strong>: Shows the mail web link.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MailWebLink
		{
			get { return Entity.GetAttributeValue<string>(Fields.MailWebLink); }
			set { Entity.Attributes[Fields.MailWebLink] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Message ID</para>
		/// <para><strong>Description</strong>: Shows the email message. This information is used only for email that is received.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 320</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MessageId
		{
			get { return Entity.GetAttributeValue<string>(Fields.MessageId); }
			set { Entity.Attributes[Fields.MessageId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Message Time</para>
		/// <para><strong>Description</strong>: Shows the date and time when the email message is received.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? MessageTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.MessageTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Shows who last updated the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who last updated the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified Time</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Shows the organization that the record belongs to.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: RecordId</para>
		/// <para><strong>Description</strong>: Shows the record ID.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RecordId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RecordId); }
			set { Entity.Attributes[Fields.RecordId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Regarding</para>
		/// <para><strong>Description</strong>: Choose the record that the email relates to.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Related Email Ids</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 8,192</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RelatedMailIds
		{
			get { return Entity.GetAttributeValue<string>(Fields.RelatedMailIds); }
			set { Entity.Attributes[Fields.RelatedMailIds] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: From</para>
		/// <para><strong>Description</strong>: Enter the sender of the email.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Sender
		{
			get { return Entity.GetAttributeValue<string>(Fields.Sender); }
			set { Entity.Attributes[Fields.Sender] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sender Record Id</para>
		/// <para><strong>Description</strong>: Record ID of the sender entity.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SenderEntityId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SenderEntityId); }
			set { Entity.Attributes[Fields.SenderEntityId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sender Entity Object Type Code</para>
		/// <para><strong>Description</strong>: Object Type code of the sender entity.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SenderEntityObjectTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SenderEntityObjectTypeCode); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sender Image Url</para>
		/// <para><strong>Description</strong>: Image of the sender.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SenderImageUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.SenderImageUrl); }
			set { Entity.Attributes[Fields.SenderImageUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Shows whether the Delve action record is pending, completed, or tracking.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StateCode.Pending"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StateCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Select the delve action record status.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.DelveActionHubOptionSets.StatusCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Message Subject</para>
		/// <para><strong>Description</strong>: Type a short description about the objective or primary topic of the email.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Subject
		{
			get { return Entity.GetAttributeValue<string>(Fields.Subject); }
			set { Entity.Attributes[Fields.Subject] = value; }
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
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Shows the time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}