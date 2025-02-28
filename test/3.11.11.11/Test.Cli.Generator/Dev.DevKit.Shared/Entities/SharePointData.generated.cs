﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SharePointDataOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SharePointData : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Data = "data";
			public const string IsValid = "isvalid";
			public const string Location = "location";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string NextPageToken = "nextpagetoken";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string PageNumber = "pagenumber";
			public const string PreviousPageToken = "previouspagetoken";
			public const string RegardingObjectId = "regardingobjectid";
			public const string SharePointDataId = "sharepointdataid";
			public const string UserId = "userid";
		}

		public const string EntityLogicalName = "sharepointdata";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9509;

		[DebuggerNonUserCode()]
		public SharePointData()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SharePointData(Guid SharePointDataId)
		{
			Entity = new Entity(EntityLogicalName, SharePointDataId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SharePointData(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SharePointData(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SharePointData(Entity entity, Entity merge)
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
		public SharePointData(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the SharePoint Data was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>SharePoint Data Serialized</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para>SharePoint Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Data
		{
			get { return Entity.GetAttributeValue<string>(Fields.Data); }
			set { Entity.Attributes[Fields.Data] = value; }
		}

		/// <summary>
		/// <para>Is valid</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Valid</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsValid
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsValid); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Location</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference Location
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.Location); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the Sharepoint Data was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Next Page Token of the SharePoint document.</para>
		/// <para>ReadOnly - String - MaxLength: 2000</para>
		/// <para>Next Page Token</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string NextPageToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.NextPageToken); }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the SharePoint Data.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? PageNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.PageNumber); }
		}

		/// <summary>
		/// <para>Previous Page Token of the SharePoint document.</para>
		/// <para>ReadOnly - String - MaxLength: 2000</para>
		/// <para>Previous Page Token</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PreviousPageToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.PreviousPageToken); }
		}

		/// <summary>
		/// <para>Regarding Object Id.</para>
		/// <para>ReadOnly - String - MaxLength: 2000</para>
		/// <para>Regarding Object Id.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RegardingObjectId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RegardingObjectId); }
		}

		/// <summary>
		/// <para>Unique identifier of the SharePoint data record.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>SharePoint data ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SharePointDataId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SharePointDataId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the SharePoint data.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>User Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference UserId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.UserId); }
		}
	}
}
