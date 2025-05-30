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
namespace Dev.DevKit.Shared.Entities.ThemeOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Custom</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Custom = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: System</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		System = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Custom</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Custom</strong></para>
		/// </summary>
		Custom = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: System</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.System</strong></para>
		/// </summary>
		System = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Theme : EntityBase
	{
		public struct Fields
		{
			public const string AccentColor = "accentcolor";
			public const string BackgroundColor = "backgroundcolor";
			public const string ControlBorder = "controlborder";
			public const string ControlShade = "controlshade";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DefaultCustomEntityColor = "defaultcustomentitycolor";
			public const string DefaultEntityColor = "defaultentitycolor";
			public const string ExchangeRate = "exchangerate";
			public const string GlobalLinkColor = "globallinkcolor";
			public const string HeaderColor = "headercolor";
			public const string HoverLinkEffect = "hoverlinkeffect";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsDefaultTheme = "isdefaulttheme";
			public const string LogoId = "logoid";
			public const string LogoToolTip = "logotooltip";
			public const string MainColor = "maincolor";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string NavBarBackgroundColor = "navbarbackgroundcolor";
			public const string NavBarShelfColor = "navbarshelfcolor";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string PageHeaderBackgroundColor = "pageheaderbackgroundcolor";
			public const string PanelHeaderBackgroundColor = "panelheaderbackgroundcolor";
			public const string ProcessControlColor = "processcontrolcolor";
			public const string SelectedLinkEffect = "selectedlinkeffect";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string ThemeId = "themeid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string Type = "type";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "theme";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 2015;
		public const string EntityCollectionSchemaName = "Themes";
		public const string EntityDisplayCollectionName = "Themes";
		public const string DisplayName = "Theme";
		public const string EntitySetName = "themes";
		public const string EntityLogicalCollectionName = "themes";
		public const string EntityPrimaryIdAttribute = "themeid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "Theme";
		[DebuggerNonUserCode()]
		public Theme()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Theme(Guid ThemeId)
		{
			Entity = new Entity(EntityLogicalName, ThemeId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Theme(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Theme"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public Theme(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Theme"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Theme(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Theme(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="Theme"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Theme(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Theme(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public Theme(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Accent Color</para>
		/// <para><strong>Description</strong>: Choose the Unified Interface secondary theme color to be used on the process control</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AccentColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.AccentColor); }
			set { Entity.Attributes[Fields.AccentColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Background Color</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string BackgroundColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.BackgroundColor); }
			set { Entity.Attributes[Fields.BackgroundColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Control Hover Border Color</para>
		/// <para><strong>Description</strong>: Choose the color that controls will use for borders</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ControlBorder
		{
			get { return Entity.GetAttributeValue<string>(Fields.ControlBorder); }
			set { Entity.Attributes[Fields.ControlBorder] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Control Hover Fill Color</para>
		/// <para><strong>Description</strong>: Choose the background color for controls to use to indicate when you hover over items</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ControlShade
		{
			get { return Entity.GetAttributeValue<string>(Fields.ControlShade); }
			set { Entity.Attributes[Fields.ControlShade] = value; }
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
		/// <para><strong>Display Name</strong>: Default Custom Entity Color</para>
		/// <para><strong>Description</strong>: Choose the default custom entity color if no color is assigned</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DefaultCustomEntityColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.DefaultCustomEntityColor); }
			set { Entity.Attributes[Fields.DefaultCustomEntityColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Default Entity Color</para>
		/// <para><strong>Description</strong>: Choose the default color for system entities if no color is assigned</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DefaultEntityColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.DefaultEntityColor); }
			set { Entity.Attributes[Fields.DefaultEntityColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ExchangeRate</para>
		/// <para><strong>Description</strong>: Exchange rate for the currency associated with the Theme with respect to the base currency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Link and Button Text Color</para>
		/// <para><strong>Description</strong>: Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string GlobalLinkColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.GlobalLinkColor); }
			set { Entity.Attributes[Fields.GlobalLinkColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Title Text Color</para>
		/// <para><strong>Description</strong>: Choose the color for title text, such as form tab labels</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string HeaderColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.HeaderColor); }
			set { Entity.Attributes[Fields.HeaderColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hover Link Color</para>
		/// <para><strong>Description</strong>: Choose the color that commands or lists will use to indicate hovered over items</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string HoverLinkEffect
		{
			get { return Entity.GetAttributeValue<string>(Fields.HoverLinkEffect); }
			set { Entity.Attributes[Fields.HoverLinkEffect] = value; }
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
		/// <para><strong>Display Name</strong>: Default Theme</para>
		/// <para><strong>Description</strong>: Default status of theme.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDefaultTheme
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDefaultTheme); }
			set { Entity.Attributes[Fields.IsDefaultTheme] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Logo</para>
		/// <para><strong>Description</strong>: Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels.</para>
		/// <para><strong>Lookup</strong>: <see cref="webresource"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference LogoId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.LogoId); }
			set { Entity.Attributes[Fields.LogoId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Logo Tooltip</para>
		/// <para><strong>Description</strong>: Enter text that will be used as the tooltip and alt text for the logo.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 80</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string LogoToolTip
		{
			get { return Entity.GetAttributeValue<string>(Fields.LogoToolTip); }
			set { Entity.Attributes[Fields.LogoToolTip] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Main Color</para>
		/// <para><strong>Description</strong>: Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MainColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.MainColor); }
			set { Entity.Attributes[Fields.MainColor] = value; }
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
		/// <para><strong>Display Name</strong>: Theme Name</para>
		/// <para><strong>Description</strong>: The name of the Theme Entity.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Navigation Bar Fill Color</para>
		/// <para><strong>Description</strong>: Choose the primary Navigation Bar background color</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string NavBarBackgroundColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.NavBarBackgroundColor); }
			set { Entity.Attributes[Fields.NavBarBackgroundColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Navigation Bar Shelf Fill Color</para>
		/// <para><strong>Description</strong>: Choose the secondary Navigation Bar background color</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string NavBarShelfColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.NavBarShelfColor); }
			set { Entity.Attributes[Fields.NavBarShelfColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para><strong>Display Name</strong>: Page Header Fill Color</para>
		/// <para><strong>Description</strong>: Choose the page header background color</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PageHeaderBackgroundColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.PageHeaderBackgroundColor); }
			set { Entity.Attributes[Fields.PageHeaderBackgroundColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Panel Header Fill Color</para>
		/// <para><strong>Description</strong>: Choose the panel header background color</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PanelHeaderBackgroundColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.PanelHeaderBackgroundColor); }
			set { Entity.Attributes[Fields.PanelHeaderBackgroundColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Legacy Accent Color</para>
		/// <para><strong>Description</strong>: Choose the primary background color for process controls</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ProcessControlColor
		{
			get { return Entity.GetAttributeValue<string>(Fields.ProcessControlColor); }
			set { Entity.Attributes[Fields.ProcessControlColor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Selected Link Color</para>
		/// <para><strong>Description</strong>: Choose the color that commands or lists will use to indicate selected items</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 7</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SelectedLinkEffect
		{
			get { return Entity.GetAttributeValue<string>(Fields.SelectedLinkEffect); }
			set { Entity.Attributes[Fields.SelectedLinkEffect] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Theme</para>
		/// <para><strong>ReadOnly</strong> - <strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.ThemeOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ThemeOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ThemeOptionSets.statecode)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Theme</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.ThemeOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ThemeOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ThemeOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Theme</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ThemeId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ThemeId] = value;
				Entity.Id = value;
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
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Exchange rate for the currency associated with the Theme with respect to the base currency.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: Define type of theme.</para>
		/// <para><strong>Two Option</strong> - [<strong>Custom</strong>]: true - [<strong>System</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Custom</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? Type
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.Type); }
			set { Entity.Attributes[Fields.Type] = value; }
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
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}