﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:37
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_msdyn_prod_actioninputparameter_msdyn_parOptionSets
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
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_msdyn_prod_actioninputparameter_msdyn_par : EntityBase
	{
		public struct Fields
		{
			public const string ComponentIdUnique = "componentidunique";
			public const string ComponentState = "componentstate";
			public const string IsManaged = "ismanaged";
			public const string msdyn_msdyn_prod_actioninputparameter_msdyn_parId = "msdyn_msdyn_prod_actioninputparameter_msdyn_parid";
			public const string msdyn_productivityactioninputparameterid = "msdyn_productivityactioninputparameterid";
			public const string msdyn_productivityparameterdefinitionid = "msdyn_productivityparameterdefinitionid";
			public const string OverwriteTime = "overwritetime";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_msdyn_prod_actioninputparameter_msdyn_par";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10501;
		public const string EntityCollectionSchemaName = "";
		public const string EntityDisplayCollectionName = "";
		public const string DisplayName = "";
		public const string EntitySetName = "msdyn_msdyn_prod_actioninputparameter_msdyn_parset";
		public const string EntityLogicalCollectionName = "";
		public const string EntityPrimaryIdAttribute = "msdyn_msdyn_prod_actioninputparameter_msdyn_parid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "msdyn_msdyn_prod_actioninputparameter_msdyn_par";
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(Guid msdyn_msdyn_prod_actioninputparameter_msdyn_parId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_msdyn_prod_actioninputparameter_msdyn_parId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_msdyn_prod_actioninputparameter_msdyn_par"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_msdyn_prod_actioninputparameter_msdyn_par"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_msdyn_prod_actioninputparameter_msdyn_par(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_msdyn_prod_actioninputparameter_msdyn_par"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_msdyn_prod_actioninputparameter_msdyn_par(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_msdyn_prod_actioninputparameter_msdyn_par(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Row id unique</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ComponentIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ComponentIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component State</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_msdyn_prod_actioninputparameter_msdyn_parOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_msdyn_prod_actioninputparameter_msdyn_parOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_msdyn_prod_actioninputparameter_msdyn_parOptionSets.ComponentState)value.Value;
			}
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
		/// <para><strong>ReadOnly</strong> - <strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_msdyn_prod_actioninputparameter_msdyn_parId
		{
			get { return Id; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_productivityactioninputparameterid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_productivityactioninputparameterid); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_productivityparameterdefinitionid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_productivityparameterdefinitionid); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Overwrite Time</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
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
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}