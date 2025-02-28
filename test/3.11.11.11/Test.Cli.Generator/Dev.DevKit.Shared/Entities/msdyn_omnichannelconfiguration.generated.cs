﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets
{
	public enum msdyn_defaultAgentInputLanguage
	{
		/// <summary>
		/// Arabic - Saudi Arabia = 1025
		/// </summary>
		Arabic_Saudi_Arabia = 1025,
		/// <summary>
		/// Basque - Spain = 1069
		/// </summary>
		Basque_Spain = 1069,
		/// <summary>
		/// Bulgarian - Bulgaria = 1026
		/// </summary>
		Bulgarian_Bulgaria = 1026,
		/// <summary>
		/// Catalan - Spain = 1027
		/// </summary>
		Catalan_Spain = 1027,
		/// <summary>
		/// Chinese - China = 2052
		/// </summary>
		Chinese_China = 2052,
		/// <summary>
		/// Chinese - Hong Kong = 3076
		/// </summary>
		Chinese_Hong_Kong = 3076,
		/// <summary>
		/// Croatian - Croatia = 1050
		/// </summary>
		Croatian_Croatia = 1050,
		/// <summary>
		/// Czech - Czech Republic = 1029
		/// </summary>
		Czech_Czech_Republic = 1029,
		/// <summary>
		/// Danish - Denmark = 1030
		/// </summary>
		Danish_Denmark = 1030,
		/// <summary>
		/// Dutch - Netherlands = 1043
		/// </summary>
		Dutch_Netherlands = 1043,
		/// <summary>
		/// English - United States = 1033
		/// </summary>
		English_United_States = 1033,
		/// <summary>
		/// Estonian - Estonia = 1061
		/// </summary>
		Estonian_Estonia = 1061,
		/// <summary>
		/// Finnish - Finland = 1035
		/// </summary>
		Finnish_Finland = 1035,
		/// <summary>
		/// French - France = 1036
		/// </summary>
		French_France = 1036,
		/// <summary>
		/// Galician - Spain = 1110
		/// </summary>
		Galician_Spain = 1110,
		/// <summary>
		/// German - Germany = 1031
		/// </summary>
		German_Germany = 1031,
		/// <summary>
		/// Greek - Greece = 1032
		/// </summary>
		Greek_Greece = 1032,
		/// <summary>
		/// Hebrew - Israel = 1037
		/// </summary>
		Hebrew_Israel = 1037,
		/// <summary>
		/// Hindi - India = 1081
		/// </summary>
		Hindi_India = 1081,
		/// <summary>
		/// Hungarian - Hungary = 1038
		/// </summary>
		Hungarian_Hungary = 1038,
		/// <summary>
		/// Indonesian - Indonesia = 1057
		/// </summary>
		Indonesian_Indonesia = 1057,
		/// <summary>
		/// Italian - Italy = 1040
		/// </summary>
		Italian_Italy = 1040,
		/// <summary>
		/// Japanese - Japan = 1041
		/// </summary>
		Japanese_Japan = 1041,
		/// <summary>
		/// Kazakh - Kazakhstan = 1087
		/// </summary>
		Kazakh_Kazakhstan = 1087,
		/// <summary>
		/// Korean - Korea = 1042
		/// </summary>
		Korean_Korea = 1042,
		/// <summary>
		/// Latvian - Latvia = 1062
		/// </summary>
		Latvian_Latvia = 1062,
		/// <summary>
		/// Lithuanian - Lithuania = 1063
		/// </summary>
		Lithuanian_Lithuania = 1063,
		/// <summary>
		/// Malay - Malaysia = 1086
		/// </summary>
		Malay_Malaysia = 1086,
		/// <summary>
		/// Norwegian Bokmal - Norway = 1044
		/// </summary>
		Norwegian_Bokmal_Norway = 1044,
		/// <summary>
		/// Polish - Poland = 1045
		/// </summary>
		Polish_Poland = 1045,
		/// <summary>
		/// Portuguese - Brazil = 1046
		/// </summary>
		Portuguese_Brazil = 1046,
		/// <summary>
		/// Portuguese - Portugal = 2070
		/// </summary>
		Portuguese_Portugal = 2070,
		/// <summary>
		/// Romanian - Romania = 1048
		/// </summary>
		Romanian_Romania = 1048,
		/// <summary>
		/// Russian - Russia = 1049
		/// </summary>
		Russian_Russia = 1049,
		/// <summary>
		/// Serbian (Cyrillic) - Serbia = 3098
		/// </summary>
		Serbian_Cyrillic_Serbia = 3098,
		/// <summary>
		/// Serbian (Latin) - Serbia = 2074
		/// </summary>
		Serbian_Latin_Serbia = 2074,
		/// <summary>
		/// Slovak - Slovakia = 1051
		/// </summary>
		Slovak_Slovakia = 1051,
		/// <summary>
		/// Slovenian - Slovenia = 1060
		/// </summary>
		Slovenian_Slovenia = 1060,
		/// <summary>
		/// Spanish - Spain = 3082
		/// </summary>
		Spanish_Spain = 3082,
		/// <summary>
		/// Swedish - Sweden = 1053
		/// </summary>
		Swedish_Sweden = 1053,
		/// <summary>
		/// Thai - Thailand = 1054
		/// </summary>
		Thai_Thailand = 1054,
		/// <summary>
		/// Turkish - Turkey = 1055
		/// </summary>
		Turkish_Turkey = 1055,
		/// <summary>
		/// Ukrainian - Ukraine = 1058
		/// </summary>
		Ukrainian_Ukraine = 1058,
		/// <summary>
		/// Vietnamese - Vietnam = 1066
		/// </summary>
		Vietnamese_Vietnam = 1066
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

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_omnichannelconfiguration : EntityBase
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
			public const string msdyn_defaultAgentInputLanguage = "msdyn_defaultagentinputlanguage";
			public const string msdyn_dnd_presence_lookup = "msdyn_dnd_presence_lookup";
			public const string msdyn_enable_advance_entity_routing = "msdyn_enable_advance_entity_routing";
			public const string msdyn_enable_agent_reject_notifications = "msdyn_enable_agent_reject_notifications";
			public const string msdyn_enable_missed_notifications = "msdyn_enable_missed_notifications";
			public const string msdyn_enable_new_consult_exp = "msdyn_enable_new_consult_exp";
			public const string msdyn_enable_supervisor_assign = "msdyn_enable_supervisor_assign";
			public const string msdyn_enable_supervisor_monitor = "msdyn_enable_supervisor_monitor";
			public const string msdyn_enable_supervisor_transfer = "msdyn_enable_supervisor_transfer";
			public const string msdyn_enable_unified_routing_diagnostic = "msdyn_enable_unified_routing_diagnostic";
			public const string msdyn_enable_visitorjourney = "msdyn_enable_visitorjourney";
			public const string msdyn_enablemarkdown = "msdyn_enablemarkdown";
			public const string msdyn_enablenewconversationform = "msdyn_enablenewconversationform";
			public const string msdyn_EnableRealTimeTranslation = "msdyn_enablerealtimetranslation";
			public const string msdyn_enablesoundnotifications = "msdyn_enablesoundnotifications";
			public const string msdyn_inactive_presence_lookup = "msdyn_inactive_presence_lookup";
			public const string msdyn_isdefaultpersonamapped = "msdyn_isdefaultpersonamapped";
			public const string msdyn_ispersonalizationofsoundenabled = "msdyn_ispersonalizationofsoundenabled";
			public const string msdyn_isPersonalMessagesEnabled = "msdyn_ispersonalmessagesenabled";
			public const string msdyn_ispersonasecurityrolemappingenabled = "msdyn_ispersonasecurityrolemappingenabled";
			public const string msdyn_IsSkillBasedRoutingEnabled = "msdyn_isskillbasedroutingenabled";
			public const string msdyn_IsUpdateSkillsEnabled = "msdyn_isupdateskillsenabled";
			public const string msdyn_maskforagent = "msdyn_maskforagent";
			public const string msdyn_maskforcustomer = "msdyn_maskforcustomer";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_omnichannelconfigurationId = "msdyn_omnichannelconfigurationid";
			public const string msdyn_SoundFormControl = "msdyn_soundformcontrol";
			public const string msdyn_translationwebresourceurl = "msdyn_translationwebresourceurl";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_omnichannelconfiguration";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10766;

		[DebuggerNonUserCode()]
		public msdyn_omnichannelconfiguration()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_omnichannelconfiguration(Guid msdyn_omnichannelconfigurationId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_omnichannelconfigurationId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_omnichannelconfiguration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_omnichannelconfiguration(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_omnichannelconfiguration(Entity entity, Entity merge)
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
		public msdyn_omnichannelconfiguration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
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
		/// <para>ReadOnly - Lookup to systemuser</para>
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
		/// <para>ReadOnly - Lookup to systemuser</para>
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
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Default language in which customer&apos;s messages are translated for an org</para>
		/// <para>Picklist</para>
		/// <para>Default input language</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.msdyn_defaultAgentInputLanguage? msdyn_defaultAgentInputLanguage
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_defaultAgentInputLanguage);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.msdyn_defaultAgentInputLanguage)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_defaultAgentInputLanguage] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_defaultAgentInputLanguage] = null;
			}
		}

		/// <summary>
		/// <para>Lookup to display DND presence.</para>
		/// <para>Lookup to msdyn_presence</para>
		/// <para>DND Presnce</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_dnd_presence_lookup
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_dnd_presence_lookup); }
			set { Entity.Attributes[Fields.msdyn_dnd_presence_lookup] = value; }
		}

		/// <summary>
		/// <para>Setting to change advance entity routing for the org.</para>
		/// <para>Boolean</para>
		/// <para>Enable advance entity routing</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_advance_entity_routing
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_advance_entity_routing); }
			set { Entity.Attributes[Fields.msdyn_enable_advance_entity_routing] = value; }
		}

		/// <summary>
		/// <para>Setting to change agent status when agent rejects a notification.</para>
		/// <para>Boolean</para>
		/// <para>Enable Agent Reject Notification Setting</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_agent_reject_notifications
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_agent_reject_notifications); }
			set { Entity.Attributes[Fields.msdyn_enable_agent_reject_notifications] = value; }
		}

		/// <summary>
		/// <para>Setting to change agent status when a notification has been missed.</para>
		/// <para>Boolean</para>
		/// <para>Enable missed notifications setting</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_missed_notifications
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_missed_notifications); }
			set { Entity.Attributes[Fields.msdyn_enable_missed_notifications] = value; }
		}

		/// <summary>
		/// <para>Enable consult pane</para>
		/// <para>Boolean</para>
		/// <para>Enable consult pane</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_new_consult_exp
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_new_consult_exp); }
			set { Entity.Attributes[Fields.msdyn_enable_new_consult_exp] = value; }
		}

		/// <summary>
		/// <para>Enables supervisor assign feature for the org</para>
		/// <para>Required - Boolean</para>
		/// <para>Enable supervisor assign</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_supervisor_assign
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_supervisor_assign); }
			set { Entity.Attributes[Fields.msdyn_enable_supervisor_assign] = value; }
		}

		/// <summary>
		/// <para>Enables supervisor monitor feature for the org</para>
		/// <para>Required - Boolean</para>
		/// <para>Enable supervisor monitor</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_supervisor_monitor
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_supervisor_monitor); }
			set { Entity.Attributes[Fields.msdyn_enable_supervisor_monitor] = value; }
		}

		/// <summary>
		/// <para>Enables supervisor transfer feature for the org</para>
		/// <para>Required - Boolean</para>
		/// <para>Enable supervisor transfer</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_supervisor_transfer
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_supervisor_transfer); }
			set { Entity.Attributes[Fields.msdyn_enable_supervisor_transfer] = value; }
		}

		/// <summary>
		/// <para>Setting to change unified routing diagnostic for the org.</para>
		/// <para>Boolean</para>
		/// <para>Enable unified routing diagnostic</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_unified_routing_diagnostic
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_unified_routing_diagnostic); }
			set { Entity.Attributes[Fields.msdyn_enable_unified_routing_diagnostic] = value; }
		}

		/// <summary>
		/// <para>Enables self service feature for the org</para>
		/// <para>Required - Boolean</para>
		/// <para>Enable self service</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enable_visitorjourney
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enable_visitorjourney); }
			set { Entity.Attributes[Fields.msdyn_enable_visitorjourney] = value; }
		}

		/// <summary>
		/// <para>Enable markdown support for messages</para>
		/// <para>Boolean</para>
		/// <para>Enable Markdown</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enablemarkdown
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enablemarkdown); }
			set { Entity.Attributes[Fields.msdyn_enablemarkdown] = value; }
		}

		/// <summary>
		/// <para>Enable new conversation form feature</para>
		/// <para>Boolean</para>
		/// <para>Enable new conversation form</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enablenewconversationform
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enablenewconversationform); }
			set { Entity.Attributes[Fields.msdyn_enablenewconversationform] = value; }
		}

		/// <summary>
		/// <para>Enable real time translation feature for the org</para>
		/// <para>Boolean</para>
		/// <para>Enable Real Time Translation</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_EnableRealTimeTranslation
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_EnableRealTimeTranslation); }
			set { Entity.Attributes[Fields.msdyn_EnableRealTimeTranslation] = value; }
		}

		/// <summary>
		/// <para>Enable sound notifications feature</para>
		/// <para>Boolean</para>
		/// <para>Enable sound notifications</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enablesoundnotifications
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enablesoundnotifications); }
			set { Entity.Attributes[Fields.msdyn_enablesoundnotifications] = value; }
		}

		/// <summary>
		/// <para>Lookup to display inactive presence settings.</para>
		/// <para>Lookup to msdyn_presence</para>
		/// <para>Inactive Presence</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_inactive_presence_lookup
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_inactive_presence_lookup); }
			set { Entity.Attributes[Fields.msdyn_inactive_presence_lookup] = value; }
		}

		/// <summary>
		/// <para>Required - Boolean</para>
		/// <para>isdefaultpersonamapped</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isdefaultpersonamapped
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isdefaultpersonamapped); }
			set { Entity.Attributes[Fields.msdyn_isdefaultpersonamapped] = value; }
		}

		/// <summary>
		/// <para>Allow agents to create personal sound settings</para>
		/// <para>Required - Boolean</para>
		/// <para>Allow agents to create personal sound settings</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_ispersonalizationofsoundenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_ispersonalizationofsoundenabled); }
			set { Entity.Attributes[Fields.msdyn_ispersonalizationofsoundenabled] = value; }
		}

		/// <summary>
		/// <para>Enable personal messages feature for the org</para>
		/// <para>Boolean</para>
		/// <para>Enable personal messages</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isPersonalMessagesEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isPersonalMessagesEnabled); }
			set { Entity.Attributes[Fields.msdyn_isPersonalMessagesEnabled] = value; }
		}

		/// <summary>
		/// <para>Required - Boolean</para>
		/// <para>ispersonasecurityrolemappingenabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_ispersonasecurityrolemappingenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_ispersonasecurityrolemappingenabled); }
			set { Entity.Attributes[Fields.msdyn_ispersonasecurityrolemappingenabled] = value; }
		}

		/// <summary>
		/// <para>Enable Skill Based Routing for Agents &amp; Supervisors</para>
		/// <para>Boolean</para>
		/// <para>Enable Skill Based Routing</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsSkillBasedRoutingEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsSkillBasedRoutingEnabled); }
			set { Entity.Attributes[Fields.msdyn_IsSkillBasedRoutingEnabled] = value; }
		}

		/// <summary>
		/// <para>This will enable agents to view and update skills for a conversation.</para>
		/// <para>Boolean</para>
		/// <para>Enable update skill control</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsUpdateSkillsEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsUpdateSkillsEnabled); }
			set { Entity.Attributes[Fields.msdyn_IsUpdateSkillsEnabled] = value; }
		}

		/// <summary>
		/// <para>Mask agent data</para>
		/// <para>Boolean</para>
		/// <para>Mask for agent</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_maskforagent
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_maskforagent); }
			set { Entity.Attributes[Fields.msdyn_maskforagent] = value; }
		}

		/// <summary>
		/// <para>Mask customer data</para>
		/// <para>Boolean</para>
		/// <para>Mask for customer</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_maskforcustomer
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_maskforcustomer); }
			set { Entity.Attributes[Fields.msdyn_maskforcustomer] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Omnichannel Configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_omnichannelconfigurationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_omnichannelconfigurationId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Field to host sound form control</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Sound Form Control</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SoundFormControl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SoundFormControl); }
			set { Entity.Attributes[Fields.msdyn_SoundFormControl] = value; }
		}

		/// <summary>
		/// <para>Webresource URL used for real time translation of the messages</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Web resource URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_translationwebresourceurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_translationwebresourceurl); }
			set { Entity.Attributes[Fields.msdyn_translationwebresourceurl] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para>Status of the Omnichannel Configuration</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Omnichannel Configuration</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_omnichannelconfigurationOptionSets.statuscode)value.Value;
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
