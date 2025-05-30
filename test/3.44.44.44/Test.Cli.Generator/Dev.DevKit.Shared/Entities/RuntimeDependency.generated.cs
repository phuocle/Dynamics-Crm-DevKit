﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:47
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
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
		public const string EntityCollectionSchemaName = "RuntimeDependencies";
		public const string EntityDisplayCollectionName = "RuntimeDependencies";
		public const string DisplayName = "RuntimeDependency";
		public const string EntitySetName = "runtimedependencies";
		public const string EntityLogicalCollectionName = "runtimedependencies";
		public const string EntityPrimaryIdAttribute = "dependencyid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "RuntimeDependency";
		[DebuggerNonUserCode()]
		public RuntimeDependency()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
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
		/// <summary>
		/// Instance new late bound class <see cref="RuntimeDependency"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public RuntimeDependency(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RuntimeDependency"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RuntimeDependency(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RuntimeDependency(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="RuntimeDependency"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RuntimeDependency(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RuntimeDependency(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public RuntimeDependency(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dependency Identifier</para>
		/// <para><strong>Description</strong>: Unique identifier of a dependency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? DependencyId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.DependencyId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dependent Component</para>
		/// <para><strong>Description</strong>: Unique identifier of the dependent component&apos;s node.</para>
		/// <para>Required - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? DependentComponentNodeId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.DependentComponentNodeId); }
			set { Entity.Attributes[Fields.DependentComponentNodeId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dependent Component Node Type</para>
		/// <para><strong>Description</strong>: Dependent Component Node Type</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? DependentComponentType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.DependentComponentType); }
			set { Entity.Attributes[Fields.DependentComponentType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the required component was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? RequiredComponentModifiedTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.RequiredComponentModifiedTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Required Component</para>
		/// <para><strong>Description</strong>: Unique identifier of the required component&apos;s node</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 300</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RequiredComponentNodeId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RequiredComponentNodeId); }
			set { Entity.Attributes[Fields.RequiredComponentNodeId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Required Component Node Type</para>
		/// <para><strong>Description</strong>: Required Component Node Type</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RequiredComponentType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RequiredComponentType); }
			set { Entity.Attributes[Fields.RequiredComponentType] = value; }
		}
	}
}