﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.IntegrationStatusOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class IntegrationStatus : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string IntegrationEntryId = "integrationentryid";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string ObjectId = "objectid";
			public const string OrganizationId = "organizationid";
			public const string StateDescription = "statedescription";
			public const string StatusDescription = "statusdescription";
			public const string SystemName = "systemname";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "integrationstatus";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 3000;

		[DebuggerNonUserCode()]
		public IntegrationStatus()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public IntegrationStatus(Guid IntegrationStatusId)
		{
			Entity = new Entity(EntityLogicalName, IntegrationStatusId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public IntegrationStatus(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public IntegrationStatus(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public IntegrationStatus(Entity entity, Entity merge)
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
		public IntegrationStatus(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the integration status.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the integration status was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the integrationstatus.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? IntegrationEntryId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.IntegrationEntryId); }
			set { Entity.Attributes[Fields.IntegrationEntryId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the integration status.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the integration status was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the integrationstatus.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the integration status.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OrganizationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string StateDescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.StateDescription); }
			set { Entity.Attributes[Fields.StateDescription] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string StatusDescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.StatusDescription); }
			set { Entity.Attributes[Fields.StatusDescription] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - String - MaxLength: 200</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SystemName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SystemName); }
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