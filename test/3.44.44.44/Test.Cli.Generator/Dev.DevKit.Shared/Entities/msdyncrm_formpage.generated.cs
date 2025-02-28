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
namespace Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets
{
	public enum msdyncrm_externalhostingformat
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: I want to host it as a script</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		I_want_to_host_it_as_a_script = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: I want to host it as an iframe</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		I_want_to_host_it_as_an_iframe = 192_350_001
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
	public partial class msdyncrm_formpage : EntityBase
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
			public const string msdyncrm_ConfirmationMessage = "msdyncrm_confirmationmessage";
			public const string msdyncrm_errorImageUrl = "msdyncrm_errorimageurl";
			public const string msdyncrm_ErrorMessage = "msdyncrm_errormessage";
			public const string msdyncrm_eventId = "msdyncrm_eventid";
			public const string msdyncrm_externalformhosting_iframe = "msdyncrm_externalformhosting_iframe";
			public const string msdyncrm_externalhostingformat = "msdyncrm_externalhostingformat";
			public const string msdyncrm_externalhostingformat_description = "msdyncrm_externalhostingformat_description";
			public const string msdyncrm_formpageId = "msdyncrm_formpageid";
			public const string msdyncrm_javascriptcode = "msdyncrm_javascriptcode";
			public const string msdyncrm_javascriptcode_compound = "msdyncrm_javascriptcode_compound";
			public const string msdyncrm_LimitExceededMessage = "msdyncrm_limitexceededmessage";
			public const string msdyncrm_marketingformId = "msdyncrm_marketingformid";
			public const string msdyncrm_marketingpageid = "msdyncrm_marketingpageid";
			public const string msdyncrm_name = "msdyncrm_name";
			public const string msdyncrm_RedirectURL = "msdyncrm_redirecturl";
			public const string msdyncrm_successImageUrl = "msdyncrm_successimageurl";
			public const string msdyncrm_websiteid = "msdyncrm_websiteid";
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
		public const string EntityLogicalName = "msdyncrm_formpage";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11150;
		public const string EntityCollectionSchemaName = "msdyncrm_formpages";
		public const string EntityDisplayCollectionName = "Form pages";
		public const string DisplayName = "Form page";
		public const string EntitySetName = "msdyncrm_formpages";
		public const string EntityLogicalCollectionName = "msdyncrm_formpages";
		public const string EntityPrimaryIdAttribute = "msdyncrm_formpageid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyncrm_name";
		public const string EntitySchemaName = "msdyncrm_formpage";
		[DebuggerNonUserCode()]
		public msdyncrm_formpage()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_formpage(Guid msdyncrm_formpageId)
		{
			Entity = new Entity(EntityLogicalName, msdyncrm_formpageId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_formpage(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_formpage"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyncrm_formpage(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_formpage"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_formpage(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_formpage(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyncrm_formpage"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_formpage(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_formpage(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyncrm_formpage(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Confirmation message</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_ConfirmationMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_ConfirmationMessage); }
			set { Entity.Attributes[Fields.msdyncrm_ConfirmationMessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Error image URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_errorImageUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_errorImageUrl); }
			set { Entity.Attributes[Fields.msdyncrm_errorImageUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Error message</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_ErrorMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_ErrorMessage); }
			set { Entity.Attributes[Fields.msdyncrm_ErrorMessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Event</para>
		/// <para><strong>Description</strong>: Usage of a Marketing Form on an Event.</para>
		/// <para><strong>Lookup</strong>: <see cref="msevtmgt_event"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_eventId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_eventId); }
			set { Entity.Attributes[Fields.msdyncrm_eventId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External hosting iframe</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_externalformhosting_iframe
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_externalformhosting_iframe); }
			set { Entity.Attributes[Fields.msdyncrm_externalformhosting_iframe] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External Hosting Format</para>
		/// <para><strong>Description</strong>: External Hosting Format</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.msdyncrm_externalhostingformat"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.msdyncrm_externalhostingformat.I_want_to_host_it_as_a_script"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.msdyncrm_externalhostingformat? msdyncrm_externalhostingformat
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyncrm_externalhostingformat);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.msdyncrm_externalhostingformat)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyncrm_externalhostingformat] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyncrm_externalhostingformat] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: External hosting format description</para>
		/// <para><strong>Description</strong>: External hosting format description</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_externalhostingformat_description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_externalhostingformat_description); }
			set { Entity.Attributes[Fields.msdyncrm_externalhostingformat_description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Form page</para>
		/// <para><strong>Description</strong>: Unique ID for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyncrm_formpageId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyncrm_formpageId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: JavaScript code</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_javascriptcode
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_javascriptcode); }
			set { Entity.Attributes[Fields.msdyncrm_javascriptcode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Javascript code</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// <para><strong>Calculated Field</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_javascriptcode_compound
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_javascriptcode_compound); }
			set { Entity.Attributes[Fields.msdyncrm_javascriptcode_compound] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Limit exceeded message</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_LimitExceededMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_LimitExceededMessage); }
			set { Entity.Attributes[Fields.msdyncrm_LimitExceededMessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing form</para>
		/// <para><strong>Description</strong>: Usage of a marketing form on a marketing page.</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_marketingform"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_marketingformId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_marketingformId); }
			set { Entity.Attributes[Fields.msdyncrm_marketingformId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing page</para>
		/// <para><strong>Description</strong>: The marketing page contains a marketing form.</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_marketingpage"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_marketingpageid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_marketingpageid); }
			set { Entity.Attributes[Fields.msdyncrm_marketingpageid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Name of the marketing form page</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_name); }
			set { Entity.Attributes[Fields.msdyncrm_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Redirect URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_RedirectURL
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_RedirectURL); }
			set { Entity.Attributes[Fields.msdyncrm_RedirectURL] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Success image URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_successImageUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_successImageUrl); }
			set { Entity.Attributes[Fields.msdyncrm_successImageUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Web site</para>
		/// <para><strong>Description</strong>: The website contains a marketing form</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_website"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_websiteid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_websiteid); }
			set { Entity.Attributes[Fields.msdyncrm_websiteid] = value; }
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
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner ID</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning business unit</para>
		/// <para><strong>Description</strong>: Indicates the business unit that owns this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning team</para>
		/// <para><strong>Description</strong>: Indicates the team that owns this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning user</para>
		/// <para><strong>Description</strong>: Indicates the team that owns this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the form page</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Form page status reason</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_formpageOptionSets.statuscode)value.Value;
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