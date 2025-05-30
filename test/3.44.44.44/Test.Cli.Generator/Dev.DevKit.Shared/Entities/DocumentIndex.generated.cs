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
namespace Dev.DevKit.Shared.Entities.DocumentIndexOptionSets
{
	public enum DocumentTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Default Value</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Default_Value = 1
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class DocumentIndex : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DocumentId = "documentid";
			public const string DocumentIndexId = "documentindexid";
			public const string DocumentTypeCode = "documenttypecode";
			public const string IsLatestVersion = "islatestversion";
			public const string IsPublished = "ispublished";
			public const string KeyWords = "keywords";
			public const string Location = "location";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Number = "number";
			public const string OrganizationId = "organizationid";
			public const string SearchText = "searchtext";
			public const string SubjectId = "subjectid";
			public const string Title = "title";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "documentindex";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 126;
		public const string EntityCollectionSchemaName = "DocumentIndexes";
		public const string EntityDisplayCollectionName = "Indexed Articles";
		public const string DisplayName = "Indexed Article";
		public const string EntitySetName = "documentindexes";
		public const string EntityLogicalCollectionName = "documentindexes";
		public const string EntityPrimaryIdAttribute = "documentindexid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "title";
		public const string EntitySchemaName = "DocumentIndex";
		[DebuggerNonUserCode()]
		public DocumentIndex()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public DocumentIndex(Guid DocumentIndexId)
		{
			Entity = new Entity(EntityLogicalName, DocumentIndexId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public DocumentIndex(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="DocumentIndex"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public DocumentIndex(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="DocumentIndex"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public DocumentIndex(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new DocumentIndex(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="DocumentIndex"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public DocumentIndex(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new DocumentIndex(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public DocumentIndex(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the indexed article.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the indexed article was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the documentindex.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Document</para>
		/// <para><strong>Description</strong>: Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords.</para>
		/// <para><strong>Lookup</strong>: <see cref="kbarticle"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference DocumentId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.DocumentId); }
			set { Entity.Attributes[Fields.DocumentId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Document Index</para>
		/// <para><strong>Description</strong>: Unique identifier of the indexed article.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid DocumentIndexId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.DocumentIndexId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Document Type</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode.Default_Value"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode? DocumentTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DocumentTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DocumentTypeCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DocumentTypeCode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Latest Version</para>
		/// <para><strong>Description</strong>: Shows which version of the knowledge article is the latest version.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsLatestVersion
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsLatestVersion); }
			set { Entity.Attributes[Fields.IsLatestVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Published</para>
		/// <para><strong>Description</strong>: Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPublished
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPublished); }
			set { Entity.Attributes[Fields.IsPublished] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Key Words</para>
		/// <para><strong>Description</strong>: Type the keywords for the article. The keywords are updated in the search index every time the article is published.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string KeyWords
		{
			get { return Entity.GetAttributeValue<string>(Fields.KeyWords); }
			set { Entity.Attributes[Fields.KeyWords] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Location</para>
		/// <para><strong>Description</strong>: For system use only.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Location
		{
			get { return Entity.GetAttributeValue<string>(Fields.Location); }
			set { Entity.Attributes[Fields.Location] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the indexed article.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the indexed article was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who last modified the documentindex.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Number
		{
			get { return Entity.GetAttributeValue<string>(Fields.Number); }
			set { Entity.Attributes[Fields.Number] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization</para>
		/// <para><strong>Description</strong>: Choose the ID of the organization that the record is associated with.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Search Text</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,242,880</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SearchText
		{
			get { return Entity.GetAttributeValue<string>(Fields.SearchText); }
			set { Entity.Attributes[Fields.SearchText] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Subject</para>
		/// <para><strong>Description</strong>: Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published.</para>
		/// <para><strong>Lookup</strong>: <see cref="subject"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SubjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SubjectId); }
			set { Entity.Attributes[Fields.SubjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Title</para>
		/// <para><strong>Description</strong>: Type the title of the parent knowledge base article. This is updated in the search index every time the article is published.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.Title); }
			set { Entity.Attributes[Fields.Title] = value; }
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