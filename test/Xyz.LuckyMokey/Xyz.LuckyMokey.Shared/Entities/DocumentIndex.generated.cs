﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.DocumentIndexOptionSets
{
	public enum DocumentTypeCode
	{
		/// <summary>
		/// Default_Value = 1
		/// </summary>
		Default_Value = 1
	}
}

namespace Xyz.LuckyMokey.Shared.Entities
{
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

		public const int EntityTypeCode = 126;

		[DebuggerNonUserCode()]
		public DocumentIndex()
		{
			Entity = new Entity(EntityLogicalName);
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

		[DebuggerNonUserCode()]
		public DocumentIndex(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DocumentIndex(Entity entity, Entity merge)
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
		public DocumentIndex(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the indexed article.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the indexed article was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the documentindex.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords.</para>
		/// <para>Lookup</para>
		/// <para>Document</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference DocumentId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.DocumentId); }
			set { Entity.Attributes[Fields.DocumentId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the indexed article.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Document Index</para>
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
		/// <para>For internal use only.</para>
		/// <para>Picklist</para>
		/// <para>Document Type </para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode? DocumentTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DocumentTypeCode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.DocumentIndexOptionSets.DocumentTypeCode)value.Value;
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
		/// <para>Shows which version of the knowledge article is the latest version.</para>
		/// <para>Boolean</para>
		/// <para>Is Latest Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsLatestVersion
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsLatestVersion); }
			set { Entity.Attributes[Fields.IsLatestVersion] = value; }
		}

		/// <summary>
		/// <para>Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index.</para>
		/// <para>Boolean</para>
		/// <para>Is Published</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPublished
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPublished); }
			set { Entity.Attributes[Fields.IsPublished] = value; }
		}

		/// <summary>
		/// <para>Type the keywords for the article. The keywords are updated in the search index every time the article is published.</para>
		/// <para>Memo - MaxLength: 100000</para>
		/// <para>Key Words</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string KeyWords
		{
			get { return Entity.GetAttributeValue<string>(Fields.KeyWords); }
			set { Entity.Attributes[Fields.KeyWords] = value; }
		}

		/// <summary>
		/// <para>For system use only.</para>
		/// <para>String - MaxLength: 500</para>
		/// <para>Location</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Location
		{
			get { return Entity.GetAttributeValue<string>(Fields.Location); }
			set { Entity.Attributes[Fields.Location] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the indexed article.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the indexed article was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the documentindex.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Number
		{
			get { return Entity.GetAttributeValue<string>(Fields.Number); }
			set { Entity.Attributes[Fields.Number] = value; }
		}

		/// <summary>
		/// <para>Choose the ID of the organization that the record is associated with.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 5242880</para>
		/// <para>Search Text</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SearchText
		{
			get { return Entity.GetAttributeValue<string>(Fields.SearchText); }
			set { Entity.Attributes[Fields.SearchText] = value; }
		}

		/// <summary>
		/// <para>Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published.</para>
		/// <para>Lookup</para>
		/// <para>Subject</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference SubjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SubjectId); }
			set { Entity.Attributes[Fields.SubjectId] = value; }
		}

		/// <summary>
		/// <para>Type the title of the parent knowledge base article. This is updated in the search index every time the article is published.</para>
		/// <para>Required - String - MaxLength: 500</para>
		/// <para>Title</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.Title); }
			set { Entity.Attributes[Fields.Title] = value; }
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