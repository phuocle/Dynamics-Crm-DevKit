﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.DependencyFeatureOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted_Unpublished = 3
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
}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class DependencyFeature : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string DependencyFeatureId = "dependencyfeatureid";
			public const string DependencyFeatureIdUnique = "dependencyfeatureidunique";
			public const string IntroducedVersion = "introducedversion";
			public const string IsManaged = "ismanaged";
			public const string OverwriteTime = "overwritetime";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
		}

		public const string EntityLogicalName = "dependencyfeature";

		public const int EntityTypeCode = 7108;

		[DebuggerNonUserCode()]
		public DependencyFeature()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyFeature(Guid DependencyFeatureId)
		{
			Entity = new Entity(EntityLogicalName, DependencyFeatureId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyFeature(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyFeature(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyFeature(Entity entity, Entity merge)
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
		public DependencyFeature(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.DependencyFeatureOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.DependencyFeatureOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of a dependency feature.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para>Dependency Identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid DependencyFeatureId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? DependencyFeatureIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.DependencyFeatureIdUnique); }
		}

		/// <summary>
		/// <para>Version in which the feature is introduced.</para>
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
		/// <para>Tells whether the record is part of a managed solution.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
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
	}
}