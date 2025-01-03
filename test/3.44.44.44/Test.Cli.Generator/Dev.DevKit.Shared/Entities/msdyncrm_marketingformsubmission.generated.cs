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
namespace Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets
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
		/// <para><strong>Display Name</strong>: Failure</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Failure = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Finished</para>
		/// <para><strong>Value</strong>: 192,350,003</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Finished = 192_350_003,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Pending</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Pending = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Success</para>
		/// <para><strong>Value</strong>: 192,350,002</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Success = 192_350_002
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyncrm_marketingformsubmission : EntityBase
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
			public const string msdyncrm_contactmatchingresult = "msdyncrm_contactmatchingresult";
			public const string msdyncrm_customerjourneyid = "msdyncrm_customerjourneyid";
			public const string msdyncrm_customerjourneyid_value = "msdyncrm_customerjourneyid_value";
			public const string msdyncrm_eventid_value = "msdyncrm_eventid_value";
			public const string msdyncrm_failuredescription = "msdyncrm_failuredescription";
			public const string msdyncrm_failuretechnicaldetails = "msdyncrm_failuretechnicaldetails";
			public const string msdyncrm_formname = "msdyncrm_formname";
			public const string msdyncrm_leadmatchingresult = "msdyncrm_leadmatchingresult";
			public const string msdyncrm_marketingemailid = "msdyncrm_marketingemailid";
			public const string msdyncrm_marketingemailid_value = "msdyncrm_marketingemailid_value";
			public const string msdyncrm_marketingformid = "msdyncrm_marketingformid";
			public const string msdyncrm_marketingformid_value = "msdyncrm_marketingformid_value";
			public const string msdyncrm_marketingformsubmissionId = "msdyncrm_marketingformsubmissionid";
			public const string msdyncrm_marketingpageid = "msdyncrm_marketingpageid";
			public const string msdyncrm_marketingpageid_value = "msdyncrm_marketingpageid_value";
			public const string msdyncrm_matchedcontactid = "msdyncrm_matchedcontactid";
			public const string msdyncrm_matchedleadid = "msdyncrm_matchedleadid";
			public const string msdyncrm_originalcontactid = "msdyncrm_originalcontactid";
			public const string msdyncrm_originalcontactid_value = "msdyncrm_originalcontactid_value";
			public const string msdyncrm_pageurl = "msdyncrm_pageurl";
			public const string msdyncrm_processingstep = "msdyncrm_processingstep";
			public const string msdyncrm_registrationid_value = "msdyncrm_registrationid_value";
			public const string msdyncrm_sessionid_value = "msdyncrm_sessionid_value";
			public const string msdyncrm_submittedvalues = "msdyncrm_submittedvalues";
			public const string msdyncrm_timestamp_submission = "msdyncrm_timestamp_submission";
			public const string msdyncrm_visitorid_value = "msdyncrm_visitorid_value";
			public const string msdyncrm_websiteid_value = "msdyncrm_websiteid_value";
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
		public const string EntityLogicalName = "msdyncrm_marketingformsubmission";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11167;
		public const string EntityCollectionSchemaName = "msdyncrm_marketingformsubmissions";
		public const string EntityDisplayCollectionName = "Marketing form submissions";
		public const string DisplayName = "Marketing form submission";
		public const string EntitySetName = "msdyncrm_marketingformsubmissions";
		public const string EntityLogicalCollectionName = "msdyncrm_marketingformsubmissions";
		public const string EntityPrimaryIdAttribute = "msdyncrm_marketingformsubmissionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyncrm_formname";
		public const string EntitySchemaName = "msdyncrm_marketingformsubmission";
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission(Guid msdyncrm_marketingformsubmissionId)
		{
			Entity = new Entity(EntityLogicalName, msdyncrm_marketingformsubmissionId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_marketingformsubmission"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyncrm_marketingformsubmission"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_marketingformsubmission(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyncrm_marketingformsubmission"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyncrm_marketingformsubmission(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyncrm_marketingformsubmission(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyncrm_marketingformsubmission(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Contact matching result</para>
		/// <para><strong>Description</strong>: Contact matching result</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_contactmatchingresult
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_contactmatchingresult); }
			set { Entity.Attributes[Fields.msdyncrm_contactmatchingresult] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source customer journey</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_customerjourney"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_customerjourneyid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_customerjourneyid); }
			set { Entity.Attributes[Fields.msdyncrm_customerjourneyid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Customer Journey Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_customerjourneyid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_customerjourneyid_value); }
			set { Entity.Attributes[Fields.msdyncrm_customerjourneyid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: event id value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_eventid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_eventid_value); }
			set { Entity.Attributes[Fields.msdyncrm_eventid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Description</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_failuredescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_failuredescription); }
			set { Entity.Attributes[Fields.msdyncrm_failuredescription] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Technical details</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 20,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_failuretechnicaldetails
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_failuretechnicaldetails); }
			set { Entity.Attributes[Fields.msdyncrm_failuretechnicaldetails] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Form name</para>
		/// <para><strong>Description</strong>: The name of the custom entity</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_formname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_formname); }
			set { Entity.Attributes[Fields.msdyncrm_formname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lead matching result</para>
		/// <para><strong>Description</strong>: Lead matching result</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_leadmatchingresult
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_leadmatchingresult); }
			set { Entity.Attributes[Fields.msdyncrm_leadmatchingresult] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source marketing email</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_marketingemail"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_marketingemailid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_marketingemailid); }
			set { Entity.Attributes[Fields.msdyncrm_marketingemailid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing Email Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_marketingemailid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_marketingemailid_value); }
			set { Entity.Attributes[Fields.msdyncrm_marketingemailid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source marketing form</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_marketingform"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_marketingformid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_marketingformid); }
			set { Entity.Attributes[Fields.msdyncrm_marketingformid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing Form Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_marketingformid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_marketingformid_value); }
			set { Entity.Attributes[Fields.msdyncrm_marketingformid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing form submission</para>
		/// <para><strong>Description</strong>: Unique identifier for this entity</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyncrm_marketingformsubmissionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyncrm_marketingformsubmissionId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source marketing page</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyncrm_marketingpage"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_marketingpageid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_marketingpageid); }
			set { Entity.Attributes[Fields.msdyncrm_marketingpageid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Marketing Page Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_marketingpageid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_marketingpageid_value); }
			set { Entity.Attributes[Fields.msdyncrm_marketingpageid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Matched contact</para>
		/// <para><strong>Description</strong>: Unique identifier for Contact associated with Marketing form submission.</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_matchedcontactid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_matchedcontactid); }
			set { Entity.Attributes[Fields.msdyncrm_matchedcontactid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Matched lead</para>
		/// <para><strong>Description</strong>: Unique identifier for Lead associated with Marketing form submission.</para>
		/// <para><strong>Lookup</strong>: <see cref="lead"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_matchedleadid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_matchedleadid); }
			set { Entity.Attributes[Fields.msdyncrm_matchedleadid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Original contact</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyncrm_originalcontactid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyncrm_originalcontactid); }
			set { Entity.Attributes[Fields.msdyncrm_originalcontactid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Original Contact Id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_originalcontactid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_originalcontactid_value); }
			set { Entity.Attributes[Fields.msdyncrm_originalcontactid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: page url</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,083</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_pageurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_pageurl); }
			set { Entity.Attributes[Fields.msdyncrm_pageurl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Processing step</para>
		/// <para><strong>Description</strong>: Number of step to be processed</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyncrm_processingstep
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyncrm_processingstep); }
			set { Entity.Attributes[Fields.msdyncrm_processingstep] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: registration id value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_registrationid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_registrationid_value); }
			set { Entity.Attributes[Fields.msdyncrm_registrationid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: session id value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_sessionid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_sessionid_value); }
			set { Entity.Attributes[Fields.msdyncrm_sessionid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Submitted values</para>
		/// <para><strong>Description</strong>: Submitted values</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// <para><strong>Calculated Field</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_submittedvalues
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_submittedvalues); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: timestamp of form submission</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_timestamp_submission
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_timestamp_submission); }
			set { Entity.Attributes[Fields.msdyncrm_timestamp_submission] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: visitor id value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_visitorid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_visitorid_value); }
			set { Entity.Attributes[Fields.msdyncrm_visitorid_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Website id</para>
		/// <para><strong>Description</strong>: Website id</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyncrm_websiteid_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyncrm_websiteid_value); }
			set { Entity.Attributes[Fields.msdyncrm_websiteid_value] = value; }
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
		/// <para><strong>Description</strong>: Indicates the business unit that owns this</para>
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
		/// <para><strong>Description</strong>: Indicates the person who owns this.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the marketing form submission</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the marketing form submission</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyncrm_marketingformsubmissionOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time zone rule version number</para>
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
		/// <para><strong>Display Name</strong>: UTC conversion time zone code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created</para>
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