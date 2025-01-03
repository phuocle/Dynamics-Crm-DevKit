﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:47
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SalesLiteratureOptionSets
{
	public enum LiteratureTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bulletins</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Bulletins = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Company Background</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		Company_Background = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Manuals</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Manuals = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing Collateral</para>
		/// <para><strong>Value</strong>: 100,001</para>
		/// </summary>
		Marketing_Collateral = 100_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: News</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		News = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Policies And Procedures</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Policies_And_Procedures = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Presentation</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Presentation = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Price Sheets</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Price_Sheets = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Product Sheet</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Product_Sheet = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sales Literature</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Sales_Literature = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Spreadsheets</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Spreadsheets = 4
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SalesLiterature : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string EmployeeContactId = "employeecontactid";
			public const string EntityImageId = "entityimageid";
			public const string ExchangeRate = "exchangerate";
			public const string ExpirationDate = "expirationdate";
			public const string HasAttachments = "hasattachments";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsCustomerViewable = "iscustomerviewable";
			public const string KeyWords = "keywords";
			public const string LiteratureTypeCode = "literaturetypecode";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string ProcessId = "processid";
			public const string SalesLiteratureId = "salesliteratureid";
			public const string StageId = "stageid";
			public const string SubjectId = "subjectid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string TraversedPath = "traversedpath";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "salesliterature";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1038;
		public const string EntityCollectionSchemaName = "SalesLiteratures";
		public const string EntityDisplayCollectionName = "Sales Literature";
		public const string DisplayName = "Sales Literature";
		public const string EntitySetName = "salesliteratures";
		public const string EntityLogicalCollectionName = "salesliteratures";
		public const string EntityPrimaryIdAttribute = "salesliteratureid";
		public const string EntityPrimaryImageAttribute = "entityimage";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "SalesLiterature";
		[DebuggerNonUserCode()]
		public SalesLiterature()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SalesLiterature(Guid SalesLiteratureId)
		{
			Entity = new Entity(EntityLogicalName, SalesLiteratureId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SalesLiterature(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SalesLiterature"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SalesLiterature(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SalesLiterature"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SalesLiterature(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SalesLiterature(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SalesLiterature"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SalesLiterature(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SalesLiterature(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SalesLiterature(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
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
		/// <para><strong>Description</strong>: Shows who created the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Description</para>
		/// <para><strong>Description</strong>: Type additional information to describe the sales literature, such as the intended audience or primary messages.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Employee Contact</para>
		/// <para><strong>Description</strong>: Choose the user who is responsible for maintaining or updating the sales literature.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference EmployeeContactId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.EmployeeContactId); }
			set { Entity.Attributes[Fields.EmployeeContactId] = value; }
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
		/// <para><strong>Display Name</strong>: Exchange Rate</para>
		/// <para><strong>Description</strong>: Shows the conversion rate of the record&apos;s currency. The exchange rate is used to convert all money fields in the record from the local currency to the system&apos;s default currency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Expiration Date</para>
		/// <para><strong>Description</strong>: Enter the expiration date or last day the sales literature can be distributed.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ExpirationDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ExpirationDate); }
			set { Entity.Attributes[Fields.ExpirationDate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Has Attachments</para>
		/// <para><strong>Description</strong>: Tells whether the sales literature has one or more attachments.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? HasAttachments
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.HasAttachments); }
			set { Entity.Attributes[Fields.HasAttachments] = value; }
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
		/// <para><strong>Display Name</strong>: Customer Viewable</para>
		/// <para><strong>Description</strong>: Select whether the sales literature can be distributed to prospects and customers or is for internal use only.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsCustomerViewable
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsCustomerViewable); }
			set { Entity.Attributes[Fields.IsCustomerViewable] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Key Words</para>
		/// <para><strong>Description</strong>: Type one or more topics or keywords that can be used to search for the sales literature.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string KeyWords
		{
			get { return Entity.GetAttributeValue<string>(Fields.KeyWords); }
			set { Entity.Attributes[Fields.KeyWords] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: Select a category or type to help others identify the intended use of the sales literature.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SalesLiteratureOptionSets.LiteratureTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SalesLiteratureOptionSets.LiteratureTypeCode.Policies_And_Procedures"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SalesLiteratureOptionSets.LiteratureTypeCode? LiteratureTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.LiteratureTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SalesLiteratureOptionSets.LiteratureTypeCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.LiteratureTypeCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.LiteratureTypeCode] = null;
			}
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
		/// <para><strong>Description</strong>: Shows who last updated the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Title</para>
		/// <para><strong>Description</strong>: Type a descriptive title for the sales literature.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para><strong>Display Name</strong>: Process Id</para>
		/// <para><strong>Description</strong>: Contains the id of the process associated with the entity.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ProcessId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ProcessId); }
			set { Entity.Attributes[Fields.ProcessId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sales Literature</para>
		/// <para><strong>Description</strong>: Unique identifier of the sales literature.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SalesLiteratureId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SalesLiteratureId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: (Deprecated) Stage Id</para>
		/// <para><strong>Description</strong>: Contains the id of the stage where the entity is located.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? StageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.StageId); }
			set { Entity.Attributes[Fields.StageId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Subject</para>
		/// <para><strong>Description</strong>: Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="subject"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SubjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SubjectId); }
			set { Entity.Attributes[Fields.SubjectId] = value; }
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
		/// <para><strong>Description</strong>: Choose the local currency for the record to make sure budgets are reported in the correct currency.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: (Deprecated) Traversed Path</para>
		/// <para><strong>Description</strong>: A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TraversedPath
		{
			get { return Entity.GetAttributeValue<string>(Fields.TraversedPath); }
			set { Entity.Attributes[Fields.TraversedPath] = value; }
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