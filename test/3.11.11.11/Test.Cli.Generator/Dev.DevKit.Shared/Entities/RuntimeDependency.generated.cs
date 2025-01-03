﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.RuntimeDependencyOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RuntimeDependency : EntityBase
	{
		public struct Fields
		{
			public const string CreatedTime = "createdtime";
			public const string DependencyId = "dependencyid";
			public const string DependentComponentNodeId = "dependentcomponentnodeid";
			public const string DependentComponentType = "dependentcomponenttype";
			public const string RequiredComponentModifiedTime = "requiredcomponentmodifiedtime";
			public const string RequiredComponentNodeId = "requiredcomponentnodeid";
			public const string RequiredComponentType = "requiredcomponenttype";
		}

		public const string EntityLogicalName = "runtimedependency";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 7200;

		[DebuggerNonUserCode()]
		public RuntimeDependency()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RuntimeDependency(Guid RuntimeDependencyId)
		{
			Entity = new Entity(EntityLogicalName, RuntimeDependencyId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RuntimeDependency(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RuntimeDependency(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RuntimeDependency(Entity entity, Entity merge)
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
		public RuntimeDependency(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedTime); }
		}

		/// <summary>
		/// <para>Unique identifier of a dependency.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Dependency Identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? DependencyId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.DependencyId); }
		}

		/// <summary>
		/// <para>Unique identifier of the dependent component&apos;s node.</para>
		/// <para>Required - Uniqueidentifier</para>
		/// <para>Dependent Component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? DependentComponentNodeId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.DependentComponentNodeId); }
			set { Entity.Attributes[Fields.DependentComponentNodeId] = value; }
		}

		/// <summary>
		/// <para>Dependent Component Node Type</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Dependent Component Node Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? DependentComponentType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.DependentComponentType); }
			set { Entity.Attributes[Fields.DependentComponentType] = value; }
		}

		/// <summary>
		/// <para>Date and time when the required component was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? RequiredComponentModifiedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.RequiredComponentModifiedTime); }
		}

		/// <summary>
		/// <para>Unique identifier of the required component&apos;s node</para>
		/// <para>Required - String - MaxLength: 300</para>
		/// <para>Required Component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RequiredComponentNodeId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RequiredComponentNodeId); }
			set { Entity.Attributes[Fields.RequiredComponentNodeId] = value; }
		}

		/// <summary>
		/// <para>Required Component Node Type</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Required Component Node Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RequiredComponentType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RequiredComponentType); }
			set { Entity.Attributes[Fields.RequiredComponentType] = value; }
		}
	}
}
