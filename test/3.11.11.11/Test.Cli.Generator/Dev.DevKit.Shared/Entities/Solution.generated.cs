﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.SolutionOptionSets
{
	public enum SolutionType
	{
		/// <summary>
		/// Internal = 2
		/// </summary>
		Internal = 2,
		/// <summary>
		/// None = 0
		/// </summary>
		None = 0,
		/// <summary>
		/// Snapshot = 1
		/// </summary>
		Snapshot = 1
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Solution : EntityBase
	{
		public struct Fields
		{
			public const string ConfigurationPageId = "configurationpageid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string FileId = "fileid";
			public const string FriendlyName = "friendlyname";
			public const string InstalledOn = "installedon";
			public const string IsApiManaged = "isapimanaged";
			public const string IsInternal = "isinternal";
			public const string IsManaged = "ismanaged";
			public const string IsVisible = "isvisible";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string ParentSolutionId = "parentsolutionid";
			public const string PinpointAssetId = "pinpointassetid";
			public const string PinpointPublisherId = "pinpointpublisherid";
			public const string PinpointSolutionDefaultLocale = "pinpointsolutiondefaultlocale";
			public const string PinpointSolutionId = "pinpointsolutionid";
			public const string PublisherId = "publisherid";
			public const string SolutionId = "solutionid";
			public const string SolutionPackageVersion = "solutionpackageversion";
			public const string SolutionType = "solutiontype";
			public const string TemplateSuffix = "templatesuffix";
			public const string Thumbprint = "thumbprint";
			public const string UniqueName = "uniquename";
			public const string UpdatedOn = "updatedon";
			public const string UpgradeInfo = "upgradeinfo";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "solution";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 7100;

		[DebuggerNonUserCode()]
		public Solution()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Solution(Guid SolutionId)
		{
			Entity = new Entity(EntityLogicalName, SolutionId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Solution(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Solution(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Solution(Entity entity, Entity merge)
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
		public Solution(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>A link to an optional configuration page for this solution.</para>
		/// <para>Lookup to webresource</para>
		/// <para>Configuration Page</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ConfigurationPageId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ConfigurationPageId); }
			set { Entity.Attributes[Fields.ConfigurationPageId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the solution.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the solution was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the solution.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Description of the solution.</para>
		/// <para>String - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>File Id for the blob url used for file storage.</para>
		/// <para>ReadOnly - Virtual</para>
		/// <para>File Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FileId
		{
			get { return Entity.GetAttributeValue<string>(Fields.FileId); }
		}

		/// <summary>
		/// <para>User display name for the solution.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Display Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FriendlyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.FriendlyName); }
			set { Entity.Attributes[Fields.FriendlyName] = value; }
		}

		/// <summary>
		/// <para>Date and time when the solution was installed/upgraded.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Installed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? InstalledOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.InstalledOn); }
		}

		/// <summary>
		/// <para>Information about whether the solution is api managed.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Api Managed Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsApiManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsApiManaged); }
		}

		/// <summary>
		/// <para>Indicates whether the solution is internal or not.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is internal solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsInternal
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsInternal); }
		}

		/// <summary>
		/// <para>Indicates whether the solution is managed or unmanaged.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Package Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Indicates whether the solution is visible outside of the platform.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Visible Outside Platform</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsVisible
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsVisible); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the solution.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the solution was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the solution.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the solution.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Unique identifier of the parent solution. Should only be non-null if this solution is a patch.</para>
		/// <para>ReadOnly - Lookup to solution</para>
		/// <para>Parent Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ParentSolutionId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ParentSolutionId); }
		}

		/// <summary>
		/// <para>ReadOnly - String - MaxLength: 255</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PinpointAssetId
		{
			get { return Entity.GetAttributeValue<string>(Fields.PinpointAssetId); }
		}

		/// <summary>
		/// <para>Identifier of the publisher of this solution in Microsoft Pinpoint.</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? PinpointPublisherId
		{
			get { return Entity.GetAttributeValue<long?>(Fields.PinpointPublisherId); }
		}

		/// <summary>
		/// <para>Default locale of the solution in Microsoft Pinpoint.</para>
		/// <para>ReadOnly - String - MaxLength: 16</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PinpointSolutionDefaultLocale
		{
			get { return Entity.GetAttributeValue<string>(Fields.PinpointSolutionDefaultLocale); }
		}

		/// <summary>
		/// <para>Identifier of the solution in Microsoft Pinpoint.</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? PinpointSolutionId
		{
			get { return Entity.GetAttributeValue<long?>(Fields.PinpointSolutionId); }
		}

		/// <summary>
		/// <para>Unique identifier of the publisher.</para>
		/// <para>Lookup to publisher</para>
		/// <para>Publisher</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PublisherId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PublisherId); }
			set { Entity.Attributes[Fields.PublisherId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the solution.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Solution Identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SolutionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SolutionId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Solution package source organization version</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Solution Package Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SolutionPackageVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.SolutionPackageVersion); }
			set { Entity.Attributes[Fields.SolutionPackageVersion] = value; }
		}

		/// <summary>
		/// <para>Solution Type</para>
		/// <para>Picklist</para>
		/// <para>Solution Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SolutionOptionSets.SolutionType? SolutionType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SolutionType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SolutionOptionSets.SolutionType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SolutionType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SolutionType] = null;
			}
		}

		/// <summary>
		/// <para>The template suffix of this solution</para>
		/// <para>String - MaxLength: 65</para>
		/// <para>Suffix</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TemplateSuffix
		{
			get { return Entity.GetAttributeValue<string>(Fields.TemplateSuffix); }
			set { Entity.Attributes[Fields.TemplateSuffix] = value; }
		}

		/// <summary>
		/// <para>thumbprint of the solution signature</para>
		/// <para>String - MaxLength: 65</para>
		/// <para>Thumbprint</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Thumbprint
		{
			get { return Entity.GetAttributeValue<string>(Fields.Thumbprint); }
			set { Entity.Attributes[Fields.Thumbprint] = value; }
		}

		/// <summary>
		/// <para>The unique name of this solution</para>
		/// <para>String - MaxLength: 65</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UniqueName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UniqueName); }
			set { Entity.Attributes[Fields.UniqueName] = value; }
		}

		/// <summary>
		/// <para>Date and time when the solution was updated.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Updated On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? UpdatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.UpdatedOn); }
		}

		/// <summary>
		/// <para>Contains component info for the solution upgrade operation</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UpgradeInfo
		{
			get { return Entity.GetAttributeValue<string>(Fields.UpgradeInfo); }
		}

		/// <summary>
		/// <para>Solution version, used to identify a solution for upgrades and hotfixes.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Version
		{
			get { return Entity.GetAttributeValue<string>(Fields.Version); }
			set { Entity.Attributes[Fields.Version] = value; }
		}

		/// <summary>
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
