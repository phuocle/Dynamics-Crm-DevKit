﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets
{
	public enum adobe_automaticreminder
	{
		/// <summary>
		/// Never = 648770000
		/// </summary>
		Never = 648770000,
		/// <summary>
		/// Every_Day_Until_Signed = 648770001
		/// </summary>
		Every_Day_Until_Signed = 648770001,
		/// <summary>
		/// Every_Week_Until_Signed = 648770002
		/// </summary>
		Every_Week_Until_Signed = 648770002
	}

	public enum adobe_identityverification
	{
		/// <summary>
		/// EMAIL = 648770003
		/// </summary>
		EMAIL = 648770003,
		/// <summary>
		/// PHONE = 648770004
		/// </summary>
		PHONE = 648770004,
		/// <summary>
		/// PASSWORD = 648770000
		/// </summary>
		PASSWORD = 648770000,
		/// <summary>
		/// KNOWLEDGE_BASE = 648770001
		/// </summary>
		KNOWLEDGE_BASE = 648770001,
		/// <summary>
		/// WEB_IDENTITY = 648770002
		/// </summary>
		WEB_IDENTITY = 648770002
	}

	public enum adobe_sendersigningoptions
	{
		/// <summary>
		/// I_sign_first = 648770000
		/// </summary>
		I_sign_first = 648770000,
		/// <summary>
		/// I_sign_last = 648770001
		/// </summary>
		I_sign_last = 648770001,
		/// <summary>
		/// Only_I_sign = 648770002
		/// </summary>
		Only_I_sign = 648770002
	}

	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1
	}

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Xyz.LuckyMokey.Shared.Entities
{
	public partial class adobe_agreementtemplate : EntityBase
	{
		public struct Fields
		{
			public const string adobe_activetemplate = "adobe_activetemplate";
			public const string adobe_addpostsignredirecturl = "adobe_addpostsignredirecturl";
			public const string adobe_agreementname = "adobe_agreementname";
			public const string adobe_agreementtemplateId = "adobe_agreementtemplateid";
			public const string adobe_ApplySettings = "adobe_applysettings";
			public const string adobe_assigntoallusers = "adobe_assigntoallusers";
			public const string adobe_authoring = "adobe_authoring";
			public const string adobe_automaticreminder = "adobe_automaticreminder";
			public const string adobe_autosending = "adobe_autosending";
			public const string adobe_currentagreementid = "adobe_currentagreementid";
			public const string adobe_datamapping = "adobe_datamapping";
			public const string adobe_datamappingentity = "adobe_datamappingentity";
			public const string adobe_daystoexpire = "adobe_daystoexpire";
			public const string adobe_defaulttemplate = "adobe_defaulttemplate";
			public const string adobe_Expires = "adobe_expires";
			public const string adobe_forceanyorder = "adobe_forceanyorder";
			public const string adobe_hostsigning = "adobe_hostsigning";
			public const string adobe_identityverification = "adobe_identityverification";
			public const string adobe_message = "adobe_message";
			public const string adobe_migrationguid = "adobe_migrationguid";
			public const string adobe_name = "adobe_name";
			public const string adobe_noteids = "adobe_noteids";
			public const string adobe_plugintrigger = "adobe_plugintrigger";
			public const string adobe_postsigningredirecturl = "adobe_postsigningredirecturl";
			public const string adobe_postsignredirectdelay = "adobe_postsignredirectdelay";
			public const string adobe_postsignredirecturl = "adobe_postsignredirecturl";
			public const string adobe_primaryentity = "adobe_primaryentity";
			public const string adobe_securesignedpdf = "adobe_securesignedpdf";
			public const string adobe_selectedlanguage = "adobe_selectedlanguage";
			public const string adobe_selfsigning = "adobe_selfsigning";
			public const string adobe_sendersigningoptions = "adobe_sendersigningoptions";
			public const string adobe_sendersignsfirst = "adobe_sendersignsfirst";
			public const string adobe_sendersignsonly = "adobe_sendersignsonly";
			public const string adobe_sequentialsigning = "adobe_sequentialsigning";
			public const string adobe_signaturetypeesign = "adobe_signaturetypeesign";
			public const string adobe_signedpdfpassword = "adobe_signedpdfpassword";
			public const string adobe_signingpassword = "adobe_signingpassword";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
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

		public const string EntityLogicalName = "adobe_agreementtemplate";

		public const int EntityTypeCode = 10396;

		[DebuggerNonUserCode()]
		public adobe_agreementtemplate()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_agreementtemplate(Guid adobe_agreementtemplateId)
		{
			Entity = new Entity(EntityLogicalName, adobe_agreementtemplateId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_agreementtemplate(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_agreementtemplate(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_agreementtemplate(Entity entity, Entity merge)
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
		public adobe_agreementtemplate(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Enable this option to make the template available for sending</para>
		/// <para>Boolean</para>
		/// <para>Active</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_activetemplate
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_activetemplate); }
			set { Entity.Attributes[Fields.adobe_activetemplate] = value; }
		}

		/// <summary>
		/// <para>Redirect your signers or approvers to a landing page of your choice</para>
		/// <para>Boolean</para>
		/// <para>Add Post Sign Redirect URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_addpostsignredirecturl
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_addpostsignredirecturl); }
			set { Entity.Attributes[Fields.adobe_addpostsignredirecturl] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>agreement name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_agreementname
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_agreementname); }
			set { Entity.Attributes[Fields.adobe_agreementname] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Agreement Template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid adobe_agreementtemplateId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.adobe_agreementtemplateId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>Apply Settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_ApplySettings
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_ApplySettings); }
			set { Entity.Attributes[Fields.adobe_ApplySettings] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>assigntoallusers</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_assigntoallusers
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_assigntoallusers); }
			set { Entity.Attributes[Fields.adobe_assigntoallusers] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>authoring</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_authoring
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_authoring); }
			set { Entity.Attributes[Fields.adobe_authoring] = value; }
		}

		/// <summary>
		/// <para>Select an option for automatic reminder</para>
		/// <para>Picklist</para>
		/// <para>Automatic Reminders</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_automaticreminder? adobe_automaticreminder
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_automaticreminder);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_automaticreminder)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_automaticreminder] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_automaticreminder] = null;
			}
		}

		/// <summary>
		/// <para>Send agreements out for signature bypassing the Agreement page step. Note this prevents your users from making modifications to recipients, messaging, or the documents</para>
		/// <para>Boolean</para>
		/// <para>One-click send</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_autosending
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_autosending); }
			set { Entity.Attributes[Fields.adobe_autosending] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>current agreement id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_currentagreementid
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_currentagreementid); }
			set { Entity.Attributes[Fields.adobe_currentagreementid] = value; }
		}

		/// <summary>
		/// <para>Lookup</para>
		/// <para>Data Mapping</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adobe_datamapping
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adobe_datamapping); }
			set { Entity.Attributes[Fields.adobe_datamapping] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Primary Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_datamappingentity
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_datamappingentity); }
			set { Entity.Attributes[Fields.adobe_datamappingentity] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>daystoexpire</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? adobe_daystoexpire
		{
			get { return Entity.GetAttributeValue<int?>(Fields.adobe_daystoexpire); }
			set { Entity.Attributes[Fields.adobe_daystoexpire] = value; }
		}

		/// <summary>
		/// <para>Make this template default for selected primary entity</para>
		/// <para>Boolean</para>
		/// <para>Default</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_defaulttemplate
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_defaulttemplate); }
			set { Entity.Attributes[Fields.adobe_defaulttemplate] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>Expires</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_Expires
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_Expires); }
			set { Entity.Attributes[Fields.adobe_Expires] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>forceparellel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_forceanyorder
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_forceanyorder); }
			set { Entity.Attributes[Fields.adobe_forceanyorder] = value; }
		}

		/// <summary>
		/// <para>Select this option when signers are present and will sign in person</para>
		/// <para>Boolean</para>
		/// <para>host signing</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_hostsigning
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_hostsigning); }
			set { Entity.Attributes[Fields.adobe_hostsigning] = value; }
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>identity verification</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_identityverification? adobe_identityverification
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_identityverification);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_identityverification)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_identityverification] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_identityverification] = null;
			}
		}

		/// <summary>
		/// <para>Memo - MaxLength: 20000</para>
		/// <para>Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_message
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_message); }
			set { Entity.Attributes[Fields.adobe_message] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>migration guid</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_migrationguid
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_migrationguid); }
			set { Entity.Attributes[Fields.adobe_migrationguid] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 400</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_name); }
			set { Entity.Attributes[Fields.adobe_name] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>noteids</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_noteids
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_noteids); }
			set { Entity.Attributes[Fields.adobe_noteids] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>plugintrigger</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_plugintrigger
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_plugintrigger); }
			set { Entity.Attributes[Fields.adobe_plugintrigger] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Post Sign Redirect URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_postsigningredirecturl
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_postsigningredirecturl); }
			set { Entity.Attributes[Fields.adobe_postsigningredirecturl] = value; }
		}

		/// <summary>
		/// <para>It is recommended you allow the user to see the completion screen and download any documents before re-directing to your landing page.  Adobe recommends between 10-30 seconds.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 10,000</para>
		/// <para>Post Sign Redirect Delay</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? adobe_postsignredirectdelay
		{
			get { return Entity.GetAttributeValue<int?>(Fields.adobe_postsignredirectdelay); }
			set { Entity.Attributes[Fields.adobe_postsignredirectdelay] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Post Sign Redirect URL old</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_postsignredirecturl
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_postsignredirecturl); }
			set { Entity.Attributes[Fields.adobe_postsignredirecturl] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Primary Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_primaryentity
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_primaryentity); }
			set { Entity.Attributes[Fields.adobe_primaryentity] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>secure signed pdf</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_securesignedpdf
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_securesignedpdf); }
			set { Entity.Attributes[Fields.adobe_securesignedpdf] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>selected language</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_selectedlanguage
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_selectedlanguage); }
			set { Entity.Attributes[Fields.adobe_selectedlanguage] = value; }
		}

		/// <summary>
		/// <para>Add yourself to the signing order</para>
		/// <para>Boolean</para>
		/// <para>selfsigning</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_selfsigning
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_selfsigning); }
			set { Entity.Attributes[Fields.adobe_selfsigning] = value; }
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>sender signing options</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_sendersigningoptions? adobe_sendersigningoptions
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_sendersigningoptions);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.adobe_sendersigningoptions)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_sendersigningoptions] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_sendersigningoptions] = null;
			}
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>sendersignsfirst</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_sendersignsfirst
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_sendersignsfirst); }
			set { Entity.Attributes[Fields.adobe_sendersignsfirst] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>Sender Signs Only</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_sendersignsonly
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_sendersignsonly); }
			set { Entity.Attributes[Fields.adobe_sendersignsonly] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>sequential signing</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_sequentialsigning
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_sequentialsigning); }
			set { Entity.Attributes[Fields.adobe_sequentialsigning] = value; }
		}

		/// <summary>
		/// <para>Boolean</para>
		/// <para>signaturetypeesign</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? adobe_signaturetypeesign
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.adobe_signaturetypeesign); }
			set { Entity.Attributes[Fields.adobe_signaturetypeesign] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Signed Pdf Password</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_signedpdfpassword
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_signedpdfpassword); }
			set { Entity.Attributes[Fields.adobe_signedpdfpassword] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>Signing Password</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_signingpassword
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_signingpassword); }
			set { Entity.Attributes[Fields.adobe_signingpassword] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Sequence number of the import that created this record.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Date and time that the record was migrated.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Owner Id</para>
		/// <para>Owner</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the business unit that owns the record</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Status of the Agreement Template</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Agreement Template</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_agreementtemplateOptionSets.statuscode)value.Value;
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
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}

		/// <summary>
		/// <para>Version Number</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}