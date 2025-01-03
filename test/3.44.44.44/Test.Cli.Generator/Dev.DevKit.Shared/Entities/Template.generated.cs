﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:52:40
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.TemplateOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted Unpublished</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Published</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Published = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Unpublished</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Unpublished = 1
	}
	public enum TemplateTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Account</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Account = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Campaign Activity</para>
		/// <para><strong>Value</strong>: 4,402</para>
		/// </summary>
		Campaign_Activity = 4_402,
		/// <summary>
		/// <para><strong>Display Name</strong>: Case</para>
		/// <para><strong>Value</strong>: 112</para>
		/// </summary>
		Case = 112,
		/// <summary>
		/// <para><strong>Display Name</strong>: Contact</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Contact = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Contract</para>
		/// <para><strong>Value</strong>: 1,010</para>
		/// </summary>
		Contract = 1_010,
		/// <summary>
		/// <para><strong>Display Name</strong>: Entitlement</para>
		/// <para><strong>Value</strong>: 9,700</para>
		/// </summary>
		Entitlement = 9_700,
		/// <summary>
		/// <para><strong>Display Name</strong>: Invoice</para>
		/// <para><strong>Value</strong>: 1,090</para>
		/// </summary>
		Invoice = 1_090,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lead</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Lead = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Opportunity</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Opportunity = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Order</para>
		/// <para><strong>Value</strong>: 1,088</para>
		/// </summary>
		Order = 1_088,
		/// <summary>
		/// <para><strong>Display Name</strong>: Quote</para>
		/// <para><strong>Value</strong>: 1,084</para>
		/// </summary>
		Quote = 1_084,
		/// <summary>
		/// <para><strong>Display Name</strong>: Service Activity</para>
		/// <para><strong>Value</strong>: 4,214</para>
		/// </summary>
		Service_Activity = 4_214,
		/// <summary>
		/// <para><strong>Display Name</strong>: System Job</para>
		/// <para><strong>Value</strong>: 4,700</para>
		/// </summary>
		System_Job = 4_700,
		/// <summary>
		/// <para><strong>Display Name</strong>: User</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		User = 8
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Template : EntityBase
	{
		public struct Fields
		{
			public const string Body = "body";
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string enhancededitorhtml = "enhancededitorhtml";
			public const string EntityImageId = "entityimageid";
			public const string GenerationTypeCode = "generationtypecode";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IntroducedVersion = "introducedversion";
			public const string isenhancededitorenabled = "isenhancededitorenabled";
			public const string IsManaged = "ismanaged";
			public const string IsPersonal = "ispersonal";
			public const string IsRecommended = "isrecommended";
			public const string LanguageCode = "languagecode";
			public const string MimeType = "mimetype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OpenCount = "opencount";
			public const string OpenRate = "openrate";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PresentationXml = "presentationxml";
			public const string ReplyCount = "replycount";
			public const string ReplyRate = "replyrate";
			public const string SafeHtml = "safehtml";
			public const string SolutionId = "solutionid";
			public const string Subject = "subject";
			public const string SubjectPresentationXml = "subjectpresentationxml";
			public const string SubjectSafeHtml = "subjectsafehtml";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TemplateId = "templateid";
			public const string TemplateIdUnique = "templateidunique";
			public const string TemplateTypeCode = "templatetypecode";
			public const string Title = "title";
			public const string UsedCount = "usedcount";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "template";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 2010;
		public const string EntityCollectionSchemaName = "Templates";
		public const string EntityDisplayCollectionName = "Email Templates";
		public const string DisplayName = "Email Template";
		public const string EntitySetName = "templates";
		public const string EntityLogicalCollectionName = "templates";
		public const string EntityPrimaryIdAttribute = "templateid";
		public const string EntityPrimaryImageAttribute = "entityimage";
		public const string EntityPrimaryNameAttribute = "title";
		public const string EntitySchemaName = "Template";
		[DebuggerNonUserCode()]
		public Template()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Template(Guid TemplateId)
		{
			Entity = new Entity(EntityLogicalName, TemplateId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Template(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Template"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public Template(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Template"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Template(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Template(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="Template"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Template(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Template(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public Template(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Body</para>
		/// <para><strong>Description</strong>: Body text of the email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Body
		{
			get { return Entity.GetAttributeValue<string>(Fields.Body); }
			set { Entity.Attributes[Fields.Body] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component State</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TemplateOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TemplateOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TemplateOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the email template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the email template was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Description</para>
		/// <para><strong>Description</strong>: Description of the email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: field</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,048,576</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string enhancededitorhtml
		{
			get { return Entity.GetAttributeValue<string>(Fields.enhancededitorhtml); }
			set { Entity.Attributes[Fields.enhancededitorhtml] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? EntityImageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.EntityImageId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Generation Type Code</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? GenerationTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.GenerationTypeCode); }
			set { Entity.Attributes[Fields.GenerationTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Unique identifier of the data import or data migration that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Introduced Version</para>
		/// <para><strong>Description</strong>: Version in which the form is introduced.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: isenhancededitorenabled</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? isenhancededitorenabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.isenhancededitorenabled); }
			set { Entity.Attributes[Fields.isenhancededitorenabled] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Managed</para>
		/// <para><strong>Description</strong>: Indicates whether the solution component is part of a managed solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Managed</strong>]: true - [<strong>Unmanaged</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Unmanaged</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Viewable By</para>
		/// <para><strong>Description</strong>: Information about whether the template is personal or is available to all users.</para>
		/// <para><strong>Two Option</strong> - [<strong>Individual</strong>]: true - [<strong>Organization</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Individual</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPersonal
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPersonal); }
			set { Entity.Attributes[Fields.IsPersonal] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Recommended</para>
		/// <para><strong>Description</strong>: Indicates if a template is recommended by Dynamics 365.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsRecommended
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsRecommended); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Language</para>
		/// <para><strong>Description</strong>: Language of the email template.</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? LanguageCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.LanguageCode); }
			set { Entity.Attributes[Fields.LanguageCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mime Type</para>
		/// <para><strong>Description</strong>: MIME type of the email template.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MimeType
		{
			get { return Entity.GetAttributeValue<string>(Fields.MimeType); }
			set { Entity.Attributes[Fields.MimeType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the email template was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who last modified the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Open Count</para>
		/// <para><strong>Description</strong>: For internal use only. Shows the number of times emails that use this template have been opened.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? OpenCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.OpenCount); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Open Rate</para>
		/// <para><strong>Description</strong>: Shows the open rate of this template. This is based on number of opens on followed emails that use this template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? OpenRate
		{
			get { return Entity.GetAttributeValue<int?>(Fields.OpenRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Overwrite Time</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Unique identifier of the user or team who owns the template for the email activity.</para>
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
		/// <para><strong>Description</strong>: Unique identifier of the business unit that owns the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier of the team who owns the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who owns the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Presentation XML</para>
		/// <para><strong>Description</strong>: XML data for the body of the email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PresentationXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.PresentationXml); }
			set { Entity.Attributes[Fields.PresentationXml] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Reply Count</para>
		/// <para><strong>Description</strong>: For internal use only. Shows the number of times emails that use this template have received replies.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ReplyCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ReplyCount); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Reply Rate</para>
		/// <para><strong>Description</strong>: Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ReplyRate
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ReplyRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Safe HTML of email template</para>
		/// <para><strong>Description</strong>: Safe html of email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SafeHtml
		{
			get { return Entity.GetAttributeValue<string>(Fields.SafeHtml); }
			set { Entity.Attributes[Fields.SafeHtml] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: Unique identifier of the associated solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Subject</para>
		/// <para><strong>Description</strong>: Subject associated with the email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Subject
		{
			get { return Entity.GetAttributeValue<string>(Fields.Subject); }
			set { Entity.Attributes[Fields.Subject] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Subject XML</para>
		/// <para><strong>Description</strong>: XML data for the subject of the email template.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SubjectPresentationXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.SubjectPresentationXml); }
			set { Entity.Attributes[Fields.SubjectPresentationXml] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Safe HTML of email template subject</para>
		/// <para><strong>Description</strong>: Safe html of email template subject.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SubjectSafeHtml
		{
			get { return Entity.GetAttributeValue<string>(Fields.SubjectSafeHtml); }
			set { Entity.Attributes[Fields.SubjectSafeHtml] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Email Template</para>
		/// <para><strong>Description</strong>: Unique identifier of the template.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid TemplateId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.TemplateId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TemplateIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TemplateIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Template Type</para>
		/// <para><strong>Description</strong>: Type of email template.</para>
		/// <para><strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TemplateTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.TemplateTypeCode); }
			set { Entity.Attributes[Fields.TemplateTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Title</para>
		/// <para><strong>Description</strong>: Title of the template.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.Title); }
			set { Entity.Attributes[Fields.Title] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sent email count</para>
		/// <para><strong>Description</strong>: Shows the number of sent emails that use this template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UsedCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UsedCount); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version number of the template.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
		/// <summary>
		/// <para>byte[]</para>
		/// <para>Image</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public byte[] EntityImage
		{
			get { return Entity.GetAttributeValue<byte[]>("entityimage"); }
			set { Entity.Attributes["entityimage"] = value; }
		}
		/// <summary>
		/// <para>ReadOnly - String</para>
		/// <para>Image</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityImageUrl
		{
			get { return Entity.GetAttributeValue<string>("entityimage_url"); }
		}
	}
}