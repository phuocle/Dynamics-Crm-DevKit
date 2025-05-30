﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:34
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets
{
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
	public partial class msdyn_TeamsCollaboration : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_AppId = "msdyn_appid";
			public const string msdyn_ChannelFolderRelativeUrl = "msdyn_channelfolderrelativeurl";
			public const string msdyn_ChannelId = "msdyn_channelid";
			public const string msdyn_ChannelName = "msdyn_channelname";
			public const string msdyn_channelType = "msdyn_channeltype";
			public const string msdyn_ContentUrl = "msdyn_contenturl";
			public const string msdyn_GroupId = "msdyn_groupid";
			public const string msdyn_pipedEntityId = "msdyn_pipedentityid";
			public const string msdyn_TeamId = "msdyn_teamid";
			public const string msdyn_TeamName = "msdyn_teamname";
			public const string msdyn_TeamsCollaborationId = "msdyn_teamscollaborationid";
			public const string msdyn_TeamSiteUrl = "msdyn_teamsiteurl";
			public const string msdyn_TenantId = "msdyn_tenantid";
			public const string msdyn_WebUrl = "msdyn_weburl";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RegardingObjectTypeCode = "regardingobjecttypecode";
			public const string RegardingObjectTypeName = "regardingobjecttypename";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_teamscollaboration";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10511;
		public const string EntityCollectionSchemaName = "msdyn_TeamsCollaborations";
		public const string EntityDisplayCollectionName = "Microsoft Teams Collaboration entities";
		public const string DisplayName = "Microsoft Teams Collaboration entity";
		public const string EntitySetName = "msdyn_teamscollaborations";
		public const string EntityLogicalCollectionName = "msdyn_teamscollaborations";
		public const string EntityPrimaryIdAttribute = "msdyn_teamscollaborationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_teamname";
		public const string EntitySchemaName = "msdyn_TeamsCollaboration";
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration(Guid msdyn_TeamsCollaborationId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_TeamsCollaborationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_TeamsCollaboration"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_TeamsCollaboration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_TeamsCollaboration(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_TeamsCollaboration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_TeamsCollaboration(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_TeamsCollaboration(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_TeamsCollaboration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
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
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
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
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
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
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration app id  which was used to pin the record</para>
		/// <para><strong>Description</strong>: Collaboration appid which was used to pin the record</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_AppId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_AppId); }
			set { Entity.Attributes[Fields.msdyn_AppId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Channel Relative Folder URL</para>
		/// <para><strong>Description</strong>: Collaboration channel relative folder URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ChannelFolderRelativeUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ChannelFolderRelativeUrl); }
			set { Entity.Attributes[Fields.msdyn_ChannelFolderRelativeUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration channel ID</para>
		/// <para><strong>Description</strong>: Collaboration channel Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ChannelId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ChannelId); }
			set { Entity.Attributes[Fields.msdyn_ChannelId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Channel Name</para>
		/// <para><strong>Description</strong>: Collaboration channel name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ChannelName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ChannelName); }
			set { Entity.Attributes[Fields.msdyn_ChannelName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Channel Type(Private, etc)</para>
		/// <para><strong>Description</strong>: Collaboration Channel Type required to differentiate between private and other channels</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 10</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_channelType
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_channelType); }
			set { Entity.Attributes[Fields.msdyn_channelType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration tab content url</para>
		/// <para><strong>Description</strong>: Collaboration tab content url</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ContentUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ContentUrl); }
			set { Entity.Attributes[Fields.msdyn_ContentUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Group Identifier</para>
		/// <para><strong>Description</strong>: Collaboration group identifier</para>
		/// <para>Required - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_GroupId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_GroupId); }
			set { Entity.Attributes[Fields.msdyn_GroupId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration piped entity id  which was used to pin the record</para>
		/// <para><strong>Description</strong>: Collaboration piped entity which was used to pin the record</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 800</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_pipedEntityId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_pipedEntityId); }
			set { Entity.Attributes[Fields.msdyn_pipedEntityId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Team ID</para>
		/// <para><strong>Description</strong>: Collaboration team Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TeamId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TeamId); }
			set { Entity.Attributes[Fields.msdyn_TeamId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Team Name</para>
		/// <para><strong>Description</strong>: Collaboration team name</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TeamName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TeamName); }
			set { Entity.Attributes[Fields.msdyn_TeamName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Teams Collaboration Identifier</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_TeamsCollaborationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_TeamsCollaborationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Team Site URL</para>
		/// <para><strong>Description</strong>: Team site URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TeamSiteUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TeamSiteUrl); }
			set { Entity.Attributes[Fields.msdyn_TeamSiteUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration Tenant Identifier</para>
		/// <para><strong>Description</strong>: Collaboration tenant identifier</para>
		/// <para>Required - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_TenantId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_TenantId); }
			set { Entity.Attributes[Fields.msdyn_TenantId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Collaboration tab web url</para>
		/// <para><strong>Description</strong>: Collaboration tab web url</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_WebUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_WebUrl); }
			set { Entity.Attributes[Fields.msdyn_WebUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization ID</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
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
		/// <para><strong>Display Name</strong>: Related Dynamics 365 Record ID</para>
		/// <para><strong>Description</strong>: Related Dynamics 365 record Id</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RegardingObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Related Dynamics 365 Record ID (Entity Code)</para>
		/// <para><strong>Description</strong>: Related Dynamics 365 record Id (entity code)</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RegardingObjectTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RegardingObjectTypeCode); }
			set { Entity.Attributes[Fields.RegardingObjectTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Related Dynamics 365 Record Type Name</para>
		/// <para><strong>Description</strong>: Related Dynamics 365 record type name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RegardingObjectTypeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.RegardingObjectTypeName); }
			set { Entity.Attributes[Fields.RegardingObjectTypeName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Collaboration entity</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Collaboration entity</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_TeamsCollaborationOptionSets.statuscode)value.Value;
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
	}
}