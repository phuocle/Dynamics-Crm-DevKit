﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.OfficeDocumentOptionSets
{
	public enum DocumentType
	{
		/// <summary>
		/// Microsoft Excel = 1
		/// </summary>
		Microsoft_Excel = 1,
		/// <summary>
		/// Microsoft Word = 2
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

		[DebuggerNonUserCode()]
		public OfficeDocument()
		{
			Entity = new Entity(EntityLogicalName);
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

		[DebuggerNonUserCode()]
		public OfficeDocument(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public OfficeDocument(Entity entity, Entity merge)
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
		public OfficeDocument(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Client data regarding this office document.</para>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ClientData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ClientData); }
			set { Entity.Attributes[Fields.ClientData] = value; }
		}

		/// <summary>
		/// <para>Bytes of the office document.</para>
		/// <para>String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Content
		{
			get { return Entity.GetAttributeValue<string>(Fields.Content); }
			set { Entity.Attributes[Fields.Content] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the office document.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the office document was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the office document.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Option set for selecting the type of the office document</para>
		/// <para>Picklist</para>
		/// <para>Type</para>
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
		/// <para>Lock state of file.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileLockState
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileLockState); }
			set { Entity.Attributes[Fields.FileLockState] = value; }
		}

		/// <summary>
		/// <para>File Size.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileSize
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileSize); }
			set { Entity.Attributes[Fields.FileSize] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the office document.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the office document was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the office document.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Name of the office document.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Object Id.</para>
		/// <para>Lookup to </para>
		/// <para>Object Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the office document.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Office Document Identifier</para>
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
		/// <para>Unique identifier of the user or team who owns the office document.</para>
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
		/// <para>Stores the SHA256 Hash key value.</para>
		/// <para>String - MaxLength: 64</para>
		/// <para>SHA256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SHA256
		{
			get { return Entity.GetAttributeValue<string>(Fields.SHA256); }
			set { Entity.Attributes[Fields.SHA256] = value; }
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