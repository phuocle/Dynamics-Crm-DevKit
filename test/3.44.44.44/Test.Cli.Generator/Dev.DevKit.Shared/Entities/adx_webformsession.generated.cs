﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:44:32
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets
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
	public partial class adx_webformsession : EntityBase
	{
		public struct Fields
		{
			public const string adx_anonymousidentification = "adx_anonymousidentification";
			public const string adx_contact = "adx_contact";
			public const string adx_currentstepindex = "adx_currentstepindex";
			public const string adx_name = "adx_name";
			public const string adx_primaryrecordentitykeyname = "adx_primaryrecordentitykeyname";
			public const string adx_primaryrecordentitylogicalname = "adx_primaryrecordentitylogicalname";
			public const string adx_primaryrecordid = "adx_primaryrecordid";
			public const string adx_stephistory = "adx_stephistory";
			public const string adx_systemuser = "adx_systemuser";
			public const string adx_userhostaddress = "adx_userhostaddress";
			public const string adx_useridentityname = "adx_useridentityname";
			public const string adx_webformsessionId = "adx_webformsessionid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string mspp_webformid = "mspp_webformid";
			public const string mspp_webformstepid = "mspp_webformstepid";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "adx_webformsession";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10313;
		public const string EntityCollectionSchemaName = "adx_webformsessions";
		public const string EntityDisplayCollectionName = "Multistep Form Sessions";
		public const string DisplayName = "Multistep Form Session";
		public const string EntitySetName = "adx_webformsessions";
		public const string EntityLogicalCollectionName = "adx_webformsessions";
		public const string EntityPrimaryIdAttribute = "adx_webformsessionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "adx_name";
		public const string EntitySchemaName = "adx_webformsession";
		[DebuggerNonUserCode()]
		public adx_webformsession()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public adx_webformsession(Guid adx_webformsessionId)
		{
			Entity = new Entity(EntityLogicalName, adx_webformsessionId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public adx_webformsession(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="adx_webformsession"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public adx_webformsession(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="adx_webformsession"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public adx_webformsession(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new adx_webformsession(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="adx_webformsession"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public adx_webformsession(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new adx_webformsession(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public adx_webformsession(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Anonymous Identification</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_anonymousidentification
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_anonymousidentification); }
			set { Entity.Attributes[Fields.adx_anonymousidentification] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Contact</para>
		/// <para><strong>Description</strong>: Unique identifier for Contact associated with Multistep Form Session.</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_contact
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_contact); }
			set { Entity.Attributes[Fields.adx_contact] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Current Step Index</para>
		/// <para><strong>Description</strong>: The index of the current step the user last visited.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? adx_currentstepindex
		{
			get { return Entity.GetAttributeValue<int?>(Fields.adx_currentstepindex); }
			set { Entity.Attributes[Fields.adx_currentstepindex] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Type the name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_name); }
			set { Entity.Attributes[Fields.adx_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Primary Record Entity Primary Key Logical Name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_primaryrecordentitykeyname
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_primaryrecordentitykeyname); }
			set { Entity.Attributes[Fields.adx_primaryrecordentitykeyname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Primary Record Table name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_primaryrecordentitylogicalname
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_primaryrecordentitylogicalname); }
			set { Entity.Attributes[Fields.adx_primaryrecordentitylogicalname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Primary Record ID</para>
		/// <para><strong>Description</strong>: Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 38</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_primaryrecordid
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_primaryrecordid); }
			set { Entity.Attributes[Fields.adx_primaryrecordid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Step History</para>
		/// <para><strong>Description</strong>: History of steps in JSON</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 20,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_stephistory
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_stephistory); }
			set { Entity.Attributes[Fields.adx_stephistory] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: System User</para>
		/// <para><strong>Description</strong>: Unique identifier for User associated with Multistep Form Session.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_systemuser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_systemuser); }
			set { Entity.Attributes[Fields.adx_systemuser] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Host Address</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_userhostaddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_userhostaddress); }
			set { Entity.Attributes[Fields.adx_userhostaddress] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Identity Name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_useridentityname
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_useridentityname); }
			set { Entity.Attributes[Fields.adx_useridentityname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Multistep Form Session</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid adx_webformsessionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.adx_webformsessionId] = value;
				Entity.Id = value;
			}
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
		/// <para><strong>Description</strong>: Shows the date and time when the record was created. The date and time are displayed in the time zone selected in the solution options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who created the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Shows the sequence number of the import that created this record.</para>
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
		/// <para><strong>Description</strong>: Shows the date and time when the record was updated. The date and time are displayed in the time zone selected in the solution options.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who last updated the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Multistep Form</para>
		/// <para><strong>Description</strong>: Unique identifier for Web Form associated with Web Form Session.</para>
		/// <para><strong>Lookup</strong>: <see cref="powerpagecomponent"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_webformid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_webformid); }
			set { Entity.Attributes[Fields.mspp_webformid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Multistep Form Session</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Lookup</strong>: <see cref="powerpagecomponent"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_webformstepid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_webformstepid); }
			set { Entity.Attributes[Fields.mspp_webformstepid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Shows the organization.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in the solution options.</para>
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
		/// <para><strong>Description</strong>: Shows the status of the multistep form session.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Select the Multistep Form Session&apos;s status.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.adx_webformsessionOptionSets.statuscode)value.Value;
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
		/// <para><strong>Description</strong>: Shows the time zone code that was in use when the record was created.</para>
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