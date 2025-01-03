﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SystemFormOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted Unpublished = 3
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// Published = 0
		/// </summary>
		Published = 0,
		/// <summary>
		/// Unpublished = 1
		/// </summary>
		Unpublished = 1
	}

	public enum FormActivationState
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 0
		/// </summary>
		Inactive = 0
	}

	public enum FormPresentation
	{
		/// <summary>
		/// AirForm = 1
		/// </summary>
		AirForm = 1,
		/// <summary>
		/// ClassicForm = 0
		/// </summary>
		ClassicForm = 0,
		/// <summary>
		/// ConvertedICForm = 2
		/// </summary>
		ConvertedICForm = 2
	}

	public enum Type
	{
		/// <summary>
		/// AppointmentBook = 1
		/// </summary>
		AppointmentBook = 1,
		/// <summary>
		/// AppointmentBookBackup = 102
		/// </summary>
		AppointmentBookBackup = 102,
		/// <summary>
		/// Card = 11
		/// </summary>
		Card = 11,
		/// <summary>
		/// Contextual Dashboard = 13
		/// </summary>
		Contextual_Dashboard = 13,
		/// <summary>
		/// Dashboard = 0
		/// </summary>
		Dashboard = 0,
		/// <summary>
		/// Dialog = 8
		/// </summary>
		Dialog = 8,
		/// <summary>
		/// InteractionCentricDashboard = 10
		/// </summary>
		InteractionCentricDashboard = 10,
		/// <summary>
		/// Main = 2
		/// </summary>
		Main = 2,
		/// <summary>
		/// Main - Interactive experience = 12
		/// </summary>
		Main_Interactive_experience = 12,
		/// <summary>
		/// MainBackup = 101
		/// </summary>
		MainBackup = 101,
		/// <summary>
		/// MiniCampaignBO = 3
		/// </summary>
		MiniCampaignBO = 3,
		/// <summary>
		/// Mobile - Express = 5
		/// </summary>
		Mobile_Express = 5,
		/// <summary>
		/// Other = 100
		/// </summary>
		Other = 100,
		/// <summary>
		/// Power BI Dashboard = 103
		/// </summary>
		Power_BI_Dashboard = 103,
		/// <summary>
		/// Preview = 4
		/// </summary>
		Preview = 4,
		/// <summary>
		/// Quick Create = 7
		/// </summary>
		Quick_Create = 7,
		/// <summary>
		/// Quick View Form = 6
		/// </summary>
		Quick_View_Form = 6,
		/// <summary>
		/// Task Flow Form = 9
		/// </summary>
		Task_Flow_Form = 9
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SystemForm : EntityBase
	{
		public struct Fields
		{
			public const string AncestorFormId = "ancestorformid";
			public const string ComponentState = "componentstate";
			public const string Description = "description";
			public const string FormActivationState = "formactivationstate";
			public const string FormId = "formid";
			public const string FormIdUnique = "formidunique";
			public const string FormJson = "formjson";
			public const string FormPresentation = "formpresentation";
			public const string FormXml = "formxml";
			public const string FormXmlManaged = "formxmlmanaged";
			public const string IntroducedVersion = "introducedversion";
			public const string IsAIRMerged = "isairmerged";
			public const string IsDefault = "isdefault";
			public const string IsDesktopEnabled = "isdesktopenabled";
			public const string IsManaged = "ismanaged";
			public const string IsTabletEnabled = "istabletenabled";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string PublishedOn = "publishedon";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string Type = "type";
			public const string UniqueName = "uniquename";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "systemform";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1030;

		[DebuggerNonUserCode()]
		public SystemForm()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemForm(Guid SystemFormId)
		{
			Entity = new Entity(EntityLogicalName, SystemFormId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemForm(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemForm(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SystemForm(Entity entity, Entity merge)
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
		public SystemForm(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the parent form.</para>
		/// <para>Lookup to systemform</para>
		/// <para>Parent Form</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AncestorFormId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AncestorFormId); }
			set { Entity.Attributes[Fields.AncestorFormId] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SystemFormOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SystemFormOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Description of the form or dashboard.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Specifies the state of the form.</para>
		/// <para>Picklist</para>
		/// <para>Form State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SystemFormOptionSets.FormActivationState? FormActivationState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.FormActivationState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SystemFormOptionSets.FormActivationState)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.FormActivationState] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.FormActivationState] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the record type form.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? FormId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.FormId); }
			set { Entity.Attributes[Fields.FormId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? FormIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.FormIdUnique); }
		}

		/// <summary>
		/// <para>Json representation of the form layout.</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FormJson
		{
			get { return Entity.GetAttributeValue<string>(Fields.FormJson); }
			set { Entity.Attributes[Fields.FormJson] = value; }
		}

		/// <summary>
		/// <para>Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update.</para>
		/// <para>Picklist</para>
		/// <para>AIR Refreshed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SystemFormOptionSets.FormPresentation? FormPresentation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.FormPresentation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SystemFormOptionSets.FormPresentation)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.FormPresentation] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.FormPresentation] = null;
			}
		}

		/// <summary>
		/// <para>XML representation of the form layout.</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FormXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.FormXml); }
			set { Entity.Attributes[Fields.FormXml] = value; }
		}

		/// <summary>
		/// <para>formXml diff as in a managed solution. for internal use only</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FormXmlManaged
		{
			get { return Entity.GetAttributeValue<string>(Fields.FormXmlManaged); }
		}

		/// <summary>
		/// <para>Version in which the form is introduced.</para>
		/// <para>String - MaxLength: 48</para>
		/// <para>Introduced Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}

		/// <summary>
		/// <para>Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update.</para>
		/// <para>Boolean</para>
		/// <para>Refreshed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsAIRMerged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsAIRMerged); }
			set { Entity.Attributes[Fields.IsAIRMerged] = value; }
		}

		/// <summary>
		/// <para>Information that specifies whether the form or the dashboard is the system default.</para>
		/// <para>Boolean</para>
		/// <para>Default Form</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDefault
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDefault); }
			set { Entity.Attributes[Fields.IsDefault] = value; }
		}

		/// <summary>
		/// <para>Information that specifies whether the dashboard is enabled for desktop.</para>
		/// <para>Boolean</para>
		/// <para>Is Desktop Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDesktopEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDesktopEnabled); }
			set { Entity.Attributes[Fields.IsDesktopEnabled] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Boolean</para>
		/// <para>State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Information that specifies whether the dashboard is enabled for tablet.</para>
		/// <para>Boolean</para>
		/// <para>Is Tablet Enabled</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsTabletEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsTabletEnabled); }
			set { Entity.Attributes[Fields.IsTabletEnabled] = value; }
		}

		/// <summary>
		/// <para>Name of the form.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the organization.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Published On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PublishedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PublishedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the associated solution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}

		/// <summary>
		/// <para>Type of the form, for example, Dashboard or Preview.</para>
		/// <para>Picklist</para>
		/// <para>Form Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SystemFormOptionSets.Type? Type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SystemFormOptionSets.Type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Type] = null;
			}
		}

		/// <summary>
		/// <para>Unique Name</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Unique Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UniqueName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UniqueName); }
			set { Entity.Attributes[Fields.UniqueName] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Version
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Version); }
			set { Entity.Attributes[Fields.Version] = value; }
		}

		/// <summary>
		/// <para>Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook.</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}
