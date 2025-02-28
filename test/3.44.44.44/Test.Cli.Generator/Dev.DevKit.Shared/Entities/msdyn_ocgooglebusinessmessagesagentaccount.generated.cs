﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:38
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets
{
	public enum msdyn_PostConversationSurveyBotSurveyMode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Insert survey in conversation</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Insert_survey_in_conversation = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Send survey link to conversation</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Send_survey_link_to_conversation = 192_350_001
	}
	public enum msdyn_PostConversationSurveyMode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Insert survey in conversation</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Insert_survey_in_conversation = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Send survey link to conversation</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Send_survey_link_to_conversation = 192_350_001
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
	public partial class msdyn_ocgooglebusinessmessagesagentaccount : EntityBase
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
			public const string msdyn_agentaccountclienttoken = "msdyn_agentaccountclienttoken";
			public const string msdyn_agentid = "msdyn_agentid";
			public const string msdyn_brandid = "msdyn_brandid";
			public const string msdyn_enableagentoverride = "msdyn_enableagentoverride";
			public const string msdyn_enablefileattachmentsforagents = "msdyn_enablefileattachmentsforagents";
			public const string msdyn_enablefileattachmentsforcustomers = "msdyn_enablefileattachmentsforcustomers";
			public const string msdyn_googlebusinessmessagescallbackurl = "msdyn_googlebusinessmessagescallbackurl";
			public const string msdyn_liveworkstreamid = "msdyn_liveworkstreamid";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_ocgbmpartneraccount = "msdyn_ocgbmpartneraccount";
			public const string msdyn_ocgooglebusinessmessagesagentaccountId = "msdyn_ocgooglebusinessmessagesagentaccountid";
			public const string msdyn_ocwidgetlanguage = "msdyn_ocwidgetlanguage";
			public const string msdyn_PostConversationSurvey = "msdyn_postconversationsurvey";
			public const string msdyn_PostConversationSurveyBotSurvey = "msdyn_postconversationsurveybotsurvey";
			public const string msdyn_PostConversationSurveyBotSurveyMessageText = "msdyn_postconversationsurveybotsurveymessagetext";
			public const string msdyn_PostConversationSurveyBotSurveyMode = "msdyn_postconversationsurveybotsurveymode";
			public const string msdyn_PostConversationSurveyEnable = "msdyn_postconversationsurveyenable";
			public const string msdyn_PostConversationSurveyMessageText = "msdyn_postconversationsurveymessagetext";
			public const string msdyn_PostConversationSurveyMode = "msdyn_postconversationsurveymode";
			public const string msdyn_PostConversationSurveySeparateBotSurvey = "msdyn_postconversationsurveyseparatebotsurvey";
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
		public const string EntityLogicalName = "msdyn_ocgooglebusinessmessagesagentaccount";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11619;
		public const string EntityCollectionSchemaName = "msdyn_ocgooglebusinessmessagesagentaccounts";
		public const string EntityDisplayCollectionName = "Google's Business Messages agent accounts";
		public const string DisplayName = "Google's Business Messages agent account";
		public const string EntitySetName = "msdyn_ocgooglebusinessmessagesagentaccounts";
		public const string EntityLogicalCollectionName = "msdyn_ocgooglebusinessmessagesagentaccounts";
		public const string EntityPrimaryIdAttribute = "msdyn_ocgooglebusinessmessagesagentaccountid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_ocgooglebusinessmessagesagentaccount";
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount(Guid msdyn_ocgooglebusinessmessagesagentaccountId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_ocgooglebusinessmessagesagentaccountId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ocgooglebusinessmessagesagentaccount"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ocgooglebusinessmessagesagentaccount"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ocgooglebusinessmessagesagentaccount(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_ocgooglebusinessmessagesagentaccount"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ocgooglebusinessmessagesagentaccount(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ocgooglebusinessmessagesagentaccount(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_ocgooglebusinessmessagesagentaccount(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Agent account client token</para>
		/// <para><strong>Description</strong>: Agent account client token of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_agentaccountclienttoken
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_agentaccountclienttoken); }
			set { Entity.Attributes[Fields.msdyn_agentaccountclienttoken] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Agent ID</para>
		/// <para><strong>Description</strong>: Agent ID of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_agentid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_agentid); }
			set { Entity.Attributes[Fields.msdyn_agentid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Brand ID</para>
		/// <para><strong>Description</strong>: Brand ID of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_brandid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_brandid); }
			set { Entity.Attributes[Fields.msdyn_brandid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Enable agent override</para>
		/// <para><strong>Description</strong>: Enable agent override of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enableagentoverride
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enableagentoverride); }
			set { Entity.Attributes[Fields.msdyn_enableagentoverride] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Enable file attachments for agent</para>
		/// <para><strong>Description</strong>: Enable file attachments for agent of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enablefileattachmentsforagents
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enablefileattachmentsforagents); }
			set { Entity.Attributes[Fields.msdyn_enablefileattachmentsforagents] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Enable file attachments for customer</para>
		/// <para><strong>Description</strong>: Enable file attachments for customer of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_enablefileattachmentsforcustomers
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_enablefileattachmentsforcustomers); }
			set { Entity.Attributes[Fields.msdyn_enablefileattachmentsforcustomers] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Google's Business Messages callback URL</para>
		/// <para><strong>Description</strong>: Google&apos;s Business Messages callback URL of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_googlebusinessmessagescallbackurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_googlebusinessmessagescallbackurl); }
			set { Entity.Attributes[Fields.msdyn_googlebusinessmessagescallbackurl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Live work stream ID</para>
		/// <para><strong>Description</strong>: Live work stream ID of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msdyn_liveworkstream"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_liveworkstreamid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_liveworkstreamid); }
			set { Entity.Attributes[Fields.msdyn_liveworkstreamid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Google's Business Messages partner account ID</para>
		/// <para><strong>Description</strong>: Google&apos;s Business Messages partner account ID of the agent account</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msdyn_ocgooglebusinessmessagespartneraccount"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_ocgbmpartneraccount
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_ocgbmpartneraccount); }
			set { Entity.Attributes[Fields.msdyn_ocgbmpartneraccount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Google's Business Messages agent account</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_ocgooglebusinessmessagesagentaccountId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_ocgooglebusinessmessagesagentaccountId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Widget language</para>
		/// <para><strong>Description</strong>: Widget language of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msdyn_oclanguage"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_ocwidgetlanguage
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_ocwidgetlanguage); }
			set { Entity.Attributes[Fields.msdyn_ocwidgetlanguage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Post conversation survey</para>
		/// <para><strong>Description</strong>: Post conversation survey of the Google&apos;s Business Messages agent account.</para>
		/// <para><strong>Lookup</strong>: <see cref="msfp_survey"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_PostConversationSurvey
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_PostConversationSurvey); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurvey] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bot Survey</para>
		/// <para><strong>Description</strong>: Enable or disable bot survey</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_PostConversationSurveyBotSurvey
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_PostConversationSurveyBotSurvey); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurveyBotSurvey] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Message</para>
		/// <para><strong>Description</strong>: Prefix text for survey link message that will be sent to the user.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_PostConversationSurveyBotSurveyMessageText
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_PostConversationSurveyBotSurveyMessageText); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurveyBotSurveyMessageText] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Survey Mode</para>
		/// <para><strong>Description</strong>: Mode of the survey to be sent</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyBotSurveyMode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyBotSurveyMode? msdyn_PostConversationSurveyBotSurveyMode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_PostConversationSurveyBotSurveyMode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyBotSurveyMode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_PostConversationSurveyBotSurveyMode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_PostConversationSurveyBotSurveyMode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Post conversation survey enable</para>
		/// <para><strong>Description</strong>: Post conversation survey enable of the Google&apos;s Business Messages agent account.</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_PostConversationSurveyEnable
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_PostConversationSurveyEnable); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurveyEnable] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Post conversation survey message text</para>
		/// <para><strong>Description</strong>: Post conversation survey message text of the Google&apos;s Business Messages agent account.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_PostConversationSurveyMessageText
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_PostConversationSurveyMessageText); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurveyMessageText] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Post conversation survey mode</para>
		/// <para><strong>Description</strong>: Post conversation survey mode of the Google&apos;s Business Messages agent account.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyMode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyMode? msdyn_PostConversationSurveyMode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_PostConversationSurveyMode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.msdyn_PostConversationSurveyMode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_PostConversationSurveyMode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_PostConversationSurveyMode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Survey</para>
		/// <para><strong>Description</strong>: Lookup to Dynamics 365 Customer Voice survey field</para>
		/// <para><strong>Lookup</strong>: <see cref="msfp_survey"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_PostConversationSurveySeparateBotSurvey
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_PostConversationSurveySeparateBotSurvey); }
			set { Entity.Attributes[Fields.msdyn_PostConversationSurveySeparateBotSurvey] = value; }
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
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Google&apos;s Business Messages agent account</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the Google&apos;s Business Messages agent account</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_ocgooglebusinessmessagesagentaccountOptionSets.statuscode)value.Value;
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