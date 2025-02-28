﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:43
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.OfficeDocumentOptionSets
{
	public enum DocumentType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Microsoft Excel</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Microsoft_Excel = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Microsoft Word</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Microsoft_Word = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class OfficeDocument : EntityBase
	{
		public struct Fields
		{
			public const string ClientData = "clientdata";
			public const string Content = "content";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DocumentType = "documenttype";
			public const string FileLockState = "filelockstate";
			public const string FileSize = "filesize";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string ObjectId = "objectid";
			public const string OfficeDocumentId = "officedocumentid";
			public const string OwnerId = "ownerid";
			public const string SHA256 = "sha256";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "officedocument";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4490;
		public const string EntityCollectionSchemaName = "OfficeDocuments";
		public const string EntityDisplayCollectionName = "Office Documents";
		public const string DisplayName = "Office Document";
		public const string EntitySetName = "officedocuments";
		public const string EntityLogicalCollectionName = "officedocuments";
		public const string EntityPrimaryIdAttribute = "officedocumentid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "OfficeDocument";
		[DebuggerNonUserCode()]
		public OfficeDocument()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public OfficeDocument(Guid OfficeDocumentId)
		{
			Entity = new Entity(EntityLogicalName, OfficeDocumentId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public OfficeDocument(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="OfficeDocument"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public OfficeDocument(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="OfficeDocument"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public OfficeDocument(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new OfficeDocument(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="OfficeDocument"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public OfficeDocument(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new OfficeDocument(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public OfficeDocument(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Description</strong>: Client data regarding this office document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ClientData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ClientData); }
			set { Entity.Attributes[Fields.ClientData] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Bytes of the office document.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Content
		{
			get { return Entity.GetAttributeValue<string>(Fields.Content); }
			set { Entity.Attributes[Fields.Content] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the office document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the office document was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the office document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: Option set for selecting the type of the office document</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.OfficeDocumentOptionSets.DocumentType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.OfficeDocumentOptionSets.DocumentType? DocumentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DocumentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.OfficeDocumentOptionSets.DocumentType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DocumentType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DocumentType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Lock state of file.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileLockState
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileLockState); }
			set { Entity.Attributes[Fields.FileLockState] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: File Size.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileSize
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileSize); }
			set { Entity.Attributes[Fields.FileSize] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the office document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the office document was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the office document.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Name of the office document.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Object Id</para>
		/// <para><strong>Description</strong>: Object Id.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Office Document Identifier</para>
		/// <para><strong>Description</strong>: Unique identifier of the office document.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid OfficeDocumentId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.OfficeDocumentId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Unique identifier of the user or team who owns the office document.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SHA256</para>
		/// <para><strong>Description</strong>: Stores the SHA256 Hash key value.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 64</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SHA256
		{
			get { return Entity.GetAttributeValue<string>(Fields.SHA256); }
			set { Entity.Attributes[Fields.SHA256] = value; }
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