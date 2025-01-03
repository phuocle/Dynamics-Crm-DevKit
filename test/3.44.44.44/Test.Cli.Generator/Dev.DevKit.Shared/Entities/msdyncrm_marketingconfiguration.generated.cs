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
namespace Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets
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
	public partial class msdyncrm_marketingconfiguration : EntityBase
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
			public const string msdyncrm_configcacheexpirationdate = "msdyncrm_configcacheexpirationdate";
			public const string msdyncrm_ConfigCacheExpirationPeriodInMs = "msdyncrm_configcacheexpirationperiodinms";
			public const string msdyncrm_default = "msdyncrm_default";
			public const string msdyncrm_FirstTimeSetupUrl = "msdyncrm_firsttimesetupurl";
			public const string msdyncrm_httptimeout = "msdyncrm_httptimeout";
			public const string msdyncrm_isemailtemplatesconsented = "msdyncrm_isemailtemplatesconsented";
			public const string msdyncrm_IsInstallComplete = "msdyncrm_isinstallcomplete";
			public const string msdyncrm_IsMarketingListAvailableInApp = "msdyncrm_ismarketinglistavailableinapp";
			public const string msdyncrm_marketingconfigurationId = "msdyncrm_marketingconfigurationid";
			public const string msdyncrm_maxretryattempts = "msdyncrm_maxretryattempts";
			public const string msdyncrm_MktSvcDiscoveryEndpointUrl = "msdyncrm_mktsvcdiscoveryendpointurl";
			public const string msdyncrm_name = "msdyncrm_name";
			public const string msdyncrm_organization_config = "msdyncrm_organization_config";
			public const string msdyncrm_realtimediscoveryendpointurl = "msdyncrm_realtimediscoveryendpointurl";
			public const string msdyncrm_realtimetokenauthenticationresource = "msdyncrm_realtimetokenauthenticationresource";
			public const string msdyncrm_realtimeusebasicauth = "msdyncrm_realtimeusebasicauth";
			public const string msdyncrm_setupstatus = "msdyncrm_setupstatus";
			public const string msdyncrm_tokenauthenticationresource = "msdyncrm_tokenauthenticationresource";
			public const string msdyncrm_UseBasicAuth = "msdyncrm_usebasicauth";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyncrm_marketingconfiguration";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11155;
		public const string EntityCollectionSchemaName = "msdyncrm_marketingconfigurations";
		public const string EntityDisplayCollectionName = "Marketing configurations";
		public const string DisplayName = "Marketing configuration";
		public const string EntitySetName = "msdyncrm_marketingconfigurations";
		public const string EntityLogicalCollectionName = "msdyncrm_marketingconfigurations";
		public const string EntityPrimaryIdAttribute = "msdyncrm_marketingconfigurationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyncrm_name";
		public const string EntitySchemaName = "msdyncrm_marketingconfiguration";
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration(Guid msdyncrm_marketingconfigurationId)
		{
			Entity = new Entity(EntityLogicalName, msdyncrm_marketingconfigurationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_marketingconfiguration"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_marketingconfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_marketingconfiguration(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyncrm_marketingconfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingconfiguration(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_marketingconfiguration(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyncrm_marketingconfiguration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by</para>
		/// <para><strong>Description</strong>: Indicates the person who created this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created on</para>
		/// <para><strong>Description</strong>: Date and time when the record was created</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by (delegate)</para>
		/// <para><strong>Description</strong>: Indicates the person who created this for another person.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import sequence number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by</para>
		/// <para><strong>Description</strong>: Indicates the person who modified this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified on</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by (delegate)</para>
		/// <para><strong>Description</strong>: Indicates the person who modified this for another person.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Config cache expiration date</para>
		/// <para>Required - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyncrm_configcacheexpirationdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyncrm_configcacheexpirationdate); }
			set { Entity.Attributes[Fields.msdyncrm_configcacheexpirationdate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Config cache expiration period (milliseconds)</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyncrm_ConfigCacheExpirationPeriodInMs
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyncrm_ConfigCacheExpirationPeriodInMs); }
			set { Entity.Attributes[Fields.msdyncrm_ConfigCacheExpirationPeriodInMs] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Default</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_default
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_default); }
			set { Entity.Attributes[Fields.msdyncrm_default] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing First Time Setup Url</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_FirstTimeSetupUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_FirstTimeSetupUrl); }
			set { Entity.Attributes[Fields.msdyncrm_FirstTimeSetupUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: HTTP timeout (milliseconds)</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 120,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyncrm_httptimeout
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyncrm_httptimeout); }
			set { Entity.Attributes[Fields.msdyncrm_httptimeout] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Consent Given</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_isemailtemplatesconsented
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_isemailtemplatesconsented); }
			set { Entity.Attributes[Fields.msdyncrm_isemailtemplatesconsented] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is install complete</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_IsInstallComplete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_IsInstallComplete); }
			set { Entity.Attributes[Fields.msdyncrm_IsInstallComplete] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is marketing list available in the app</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_IsMarketingListAvailableInApp
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_IsMarketingListAvailableInApp); }
			set { Entity.Attributes[Fields.msdyncrm_IsMarketingListAvailableInApp] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing configuration</para>
		/// <para><strong>Description</strong>: Unique ID for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyncrm_marketingconfigurationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyncrm_marketingconfigurationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Maximum retry attempts</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 20</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyncrm_maxretryattempts
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyncrm_maxretryattempts); }
			set { Entity.Attributes[Fields.msdyncrm_maxretryattempts] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing service discovery endpoint URL</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_MktSvcDiscoveryEndpointUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_MktSvcDiscoveryEndpointUrl); }
			set { Entity.Attributes[Fields.msdyncrm_MktSvcDiscoveryEndpointUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing configuration</para>
		/// <para><strong>Description</strong>: The name of the marketing configuration entity</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_name); }
			set { Entity.Attributes[Fields.msdyncrm_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization config</para>
		/// <para><strong>Description</strong>: The configuration JSON</para>
		/// <para>Required - <strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_organization_config
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_organization_config); }
			set { Entity.Attributes[Fields.msdyncrm_organization_config] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Service Discovery Endpoint Url</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_realtimediscoveryendpointurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_realtimediscoveryendpointurl); }
			set { Entity.Attributes[Fields.msdyncrm_realtimediscoveryendpointurl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Token Authentication Resource</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_realtimetokenauthenticationresource
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_realtimetokenauthenticationresource); }
			set { Entity.Attributes[Fields.msdyncrm_realtimetokenauthenticationresource] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Use Basic Auth</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_realtimeusebasicauth
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_realtimeusebasicauth); }
			set { Entity.Attributes[Fields.msdyncrm_realtimeusebasicauth] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization setup status</para>
		/// <para><strong>Description</strong>: The organization setup status json</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_setupstatus
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_setupstatus); }
			set { Entity.Attributes[Fields.msdyncrm_setupstatus] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Token authentication resource</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_tokenauthenticationresource
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_tokenauthenticationresource); }
			set { Entity.Attributes[Fields.msdyncrm_tokenauthenticationresource] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Use basic authentication</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyncrm_UseBasicAuth
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyncrm_UseBasicAuth); }
			set { Entity.Attributes[Fields.msdyncrm_UseBasicAuth] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization ID</para>
		/// <para><strong>Description</strong>: Unique ID of the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record created on</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the marketing configuration</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status reason</para>
		/// <para><strong>Description</strong>: Marketing configuration status reason</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_marketingconfigurationOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time-zone rule version number</para>
		/// <para><strong>Description</strong>: For internal use only</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC conversion time-zone code</para>
		/// <para><strong>Description</strong>: Time-zone code that was in use when the record was created</para>
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