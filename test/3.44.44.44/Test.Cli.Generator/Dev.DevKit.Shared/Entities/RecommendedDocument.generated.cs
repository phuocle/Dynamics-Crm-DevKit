﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:46
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.RecommendedDocumentOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RecommendedDocument : EntityBase
	{
		public struct Fields
		{
			public const string AbsoluteUrl = "absoluteurl";
			public const string AssociatedRecordName = "associatedrecordname";
			public const string Author = "author";
			public const string ContentType = "contenttype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EditUrl = "editurl";
			public const string ExchangeRate = "exchangerate";
			public const string ExternalDocumentId = "externaldocumentid";
			public const string ExternalModifiedBy = "externalmodifiedby";
			public const string FileSize = "filesize";
			public const string FileType = "filetype";
			public const string FullName = "fullname";
			public const string IconClassName = "iconclassname";
			public const string Location = "location";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string ReadUrl = "readurl";
			public const string RecommendedDocumentId = "recommendeddocumentid";
			public const string RegardingObjectId = "regardingobjectid";
			public const string Source = "source";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string Title = "title";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "recommendeddocument";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1189;
		public const string EntityCollectionSchemaName = "RecommendedDocuments";
		public const string EntityDisplayCollectionName = "Document Suggestions";
		public const string DisplayName = "Document Suggestions";
		public const string EntitySetName = "recommendeddocuments";
		public const string EntityLogicalCollectionName = "recommendeddocuments";
		public const string EntityPrimaryIdAttribute = "recommendeddocumentid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "title";
		public const string EntitySchemaName = "RecommendedDocument";
		[DebuggerNonUserCode()]
		public RecommendedDocument()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RecommendedDocument(Guid RecommendedDocumentId)
		{
			Entity = new Entity(EntityLogicalName, RecommendedDocumentId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RecommendedDocument(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RecommendedDocument"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public RecommendedDocument(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RecommendedDocument"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RecommendedDocument(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RecommendedDocument(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="RecommendedDocument"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RecommendedDocument(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RecommendedDocument(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public RecommendedDocument(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Absolute URL</para>
		/// <para><strong>Description</strong>: Type the URL where the recommended document is located.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AbsoluteUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.AbsoluteUrl); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Associated Record Name</para>
		/// <para><strong>Description</strong>: Shows the associated record name of the recommended document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AssociatedRecordName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AssociatedRecordName); }
			set { Entity.Attributes[Fields.AssociatedRecordName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Author</para>
		/// <para><strong>Description</strong>: Shows the name of the author of the recommended document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Author
		{
			get { return Entity.GetAttributeValue<string>(Fields.Author); }
			set { Entity.Attributes[Fields.Author] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Content Type</para>
		/// <para><strong>Description</strong>: Select the document content type.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ContentType
		{
			get { return Entity.GetAttributeValue<string>(Fields.ContentType); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Shows the user who created the record.</para>
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
		/// <para><strong>Display Name</strong>: Edit Web App URL</para>
		/// <para><strong>Description</strong>: Shows the Edit URL of the recommended document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EditUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.EditUrl); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ExchangeRate</para>
		/// <para><strong>Description</strong>: Shows the exchange rate for the currency associated with the recommended document with respect to the base currency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External Document ID</para>
		/// <para><strong>Description</strong>: Shows the external document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExternalDocumentId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExternalDocumentId); }
			set { Entity.Attributes[Fields.ExternalDocumentId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by</para>
		/// <para><strong>Description</strong>: Shows who last updated the document record.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExternalModifiedBy
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExternalModifiedBy); }
			set { Entity.Attributes[Fields.ExternalModifiedBy] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: File Size</para>
		/// <para><strong>Description</strong>: Shows the file size.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileSize
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileSize); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: File Type</para>
		/// <para><strong>Description</strong>: Shows the file type.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FileType
		{
			get { return Entity.GetAttributeValue<string>(Fields.FileType); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Shows the full name of the recommended document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FullName
		{
			get { return Entity.GetAttributeValue<string>(Fields.FullName); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Icon Class Name</para>
		/// <para><strong>Description</strong>: Stores the Icon Class name of the recommended document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IconClassName
		{
			get { return Entity.GetAttributeValue<string>(Fields.IconClassName); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Path</para>
		/// <para><strong>Description</strong>: Shows the location of the recommended document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Location
		{
			get { return Entity.GetAttributeValue<string>(Fields.Location); }
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
		/// <para><strong>Display Name</strong>: Organization ID</para>
		/// <para><strong>Description</strong>: Shows the organization.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Read Web App URL</para>
		/// <para><strong>Description</strong>: Shows the Read URL of the recommended document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ReadUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.ReadUrl); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Recommended Document</para>
		/// <para><strong>Description</strong>: Shows the recommended document record.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid RecommendedDocumentId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.RecommendedDocumentId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Regarding</para>
		/// <para><strong>Description</strong>: Choose the parent record that the recommended document record is associated with.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source</para>
		/// <para><strong>Description</strong>: Shows the source storage of the recommended document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Source
		{
			get { return Entity.GetAttributeValue<string>(Fields.Source); }
			set { Entity.Attributes[Fields.Source] = value; }
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
		/// <para><strong>Display Name</strong>: Title</para>
		/// <para><strong>Description</strong>: Type a title for the entity.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.Title); }
			set { Entity.Attributes[Fields.Title] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Shows the exchange rate for the currency associated with the recommended document with respect to the base currency.</para>
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
		/// <para><strong>Display Name</strong>: Recommended Document Version</para>
		/// <para><strong>Description</strong>: Shows the recommended document version.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Version
		{
			get { return Entity.GetAttributeValue<string>(Fields.Version); }
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