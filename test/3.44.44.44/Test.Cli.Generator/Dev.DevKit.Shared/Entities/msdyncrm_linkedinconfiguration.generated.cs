﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:36
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets
{
	public enum msdyncrm_authenticationtype
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Basic Authentication</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Basic_Authentication = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Bearer Authentication</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Bearer_Authentication = 192_350_000
	}
	public enum msdyncrm_OnMatchingFail
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Create new lead</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Create_new_lead = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Ignore</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Ignore = 192_350_000
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
	public partial class msdyncrm_linkedinconfiguration : EntityBase
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
			public const string msdyncr2_synchronizecampaigns = "msdyncr2_synchronizecampaigns";
			public const string msdyncrm_authenticationresource = "msdyncrm_authenticationresource";
			public const string msdyncrm_authenticationtokenendpoint = "msdyncrm_authenticationtokenendpoint";
			public const string msdyncrm_authenticationtype = "msdyncrm_authenticationtype";
			public const string msdyncrm_clientId = "msdyncrm_clientid";
			public const string msdyncrm_configcacheexpirationdate = "msdyncrm_configcacheexpirationdate";
			public const string msdyncrm_configcacheexpirationperiodinms = "msdyncrm_configcacheexpirationperiodinms";
			public const string msdyncrm_discoveryendpointurl = "msdyncrm_discoveryendpointurl";
			public const string msdyncrm_linkedinconfigurationId = "msdyncrm_linkedinconfigurationid";
			public const string msdyncrm_OnMatchingFail = "msdyncrm_onmatchingfail";
			public const string msdyncrm_organization_config = "msdyncrm_organization_config";
			public const string msdyncrm_redirectUrl = "msdyncrm_redirecturl";
			public const string msdyncrm_s2sinboundconfigurl = "msdyncrm_s2sinboundconfigurl";
			public const string msdyncrm_servicepublicid = "msdyncrm_servicepublicid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyncrm_linkedinconfiguration";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11203;
		public const string EntityCollectionSchemaName = "msdyncrm_linkedinconfigurations";
		public const string EntityDisplayCollectionName = "LinkedIn Lead Gen Integration Configurations";
		public const string DisplayName = "LinkedIn Lead Gen Integration Configuration";
		public const string EntitySetName = "msdyncrm_linkedinconfigurations";
		public const string EntityLogicalCollectionName = "msdyncrm_linkedinconfigurations";
		public const string EntityPrimaryIdAttribute = "msdyncrm_linkedinconfigurationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyncrm_redirecturl";
		public const string EntitySchemaName = "msdyncrm_linkedinconfiguration";
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration(Guid msdyncrm_linkedinconfigurationId)
		{
			Entity = new Entity(EntityLogicalName, msdyncrm_linkedinconfigurationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_linkedinconfiguration"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_linkedinconfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_linkedinconfiguration(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyncrm_linkedinconfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_linkedinconfiguration(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_linkedinconfiguration(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyncrm_linkedinconfiguration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Indicates the person who created this.</para>
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
		/// <para><strong>Description</strong>: Indicates the person who created this for another person</para>
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
		/// <para><strong>Description</strong>: Indicates the person who modified this</para>
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
		/// <para><strong>Description</strong>: Indicates the person who modified this for another person</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Synchronize campaigns</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Yes</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncr2_synchronizecampaigns
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncr2_synchronizecampaigns); }
			set { Entity.Attributes[Fields.msdyncr2_synchronizecampaigns] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Authentication Resource</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,024</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_authenticationresource
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_authenticationresource); }
			set { Entity.Attributes[Fields.msdyncrm_authenticationresource] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Authentication Token Endpoint</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,024</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_authenticationtokenendpoint
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_authenticationtokenendpoint); }
			set { Entity.Attributes[Fields.msdyncrm_authenticationtokenendpoint] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Authentication Type</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_authenticationtype"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_authenticationtype.Bearer_Authentication"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_authenticationtype? msdyncrm_authenticationtype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyncrm_authenticationtype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_authenticationtype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyncrm_authenticationtype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyncrm_authenticationtype] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Client ID</para>
		/// <para><strong>Description</strong>: Client ID</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_clientId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_clientId); }
			set { Entity.Attributes[Fields.msdyncrm_clientId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Expiration date</para>
		/// <para><strong>Description</strong>: Expiration date</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyncrm_configcacheexpirationdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyncrm_configcacheexpirationdate); }
			set { Entity.Attributes[Fields.msdyncrm_configcacheexpirationdate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Expiration (in milliseconds)</para>
		/// <para><strong>Description</strong>: Expiration (in milliseconds)</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyncrm_configcacheexpirationperiodinms
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyncrm_configcacheexpirationperiodinms); }
			set { Entity.Attributes[Fields.msdyncrm_configcacheexpirationperiodinms] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Discovery endpoint for</para>
		/// <para><strong>Description</strong>: Discovery endpoint for the configuration</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_discoveryendpointurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_discoveryendpointurl); }
			set { Entity.Attributes[Fields.msdyncrm_discoveryendpointurl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: LinkedIn Configuration</para>
		/// <para><strong>Description</strong>: Unique identifier for this entity</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyncrm_linkedinconfigurationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyncrm_linkedinconfigurationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: On Matching Fail</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_OnMatchingFail"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_OnMatchingFail.Ignore"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_OnMatchingFail? msdyncrm_OnMatchingFail
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyncrm_OnMatchingFail);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.msdyncrm_OnMatchingFail)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyncrm_OnMatchingFail] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyncrm_OnMatchingFail] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization configuration</para>
		/// <para><strong>Description</strong>: Organization configuration</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_organization_config
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_organization_config); }
			set { Entity.Attributes[Fields.msdyncrm_organization_config] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Redirect URL</para>
		/// <para><strong>Description</strong>: Redirect URL</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_redirectUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_redirectUrl); }
			set { Entity.Attributes[Fields.msdyncrm_redirectUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: S2S Inbound Configuration URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_s2sinboundconfigurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_s2sinboundconfigurl); }
			set { Entity.Attributes[Fields.msdyncrm_s2sinboundconfigurl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Service Public Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_servicepublicid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_servicepublicid); }
			set { Entity.Attributes[Fields.msdyncrm_servicepublicid] = value; }
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
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner Id</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Indicates the business unit that owns this</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Indicates the team that owns this</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Indicates the person who owns this</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the LinkedIn Configuration</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the LinkedIn Configuration</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_linkedinconfigurationOptionSets.statuscode)value.Value;
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