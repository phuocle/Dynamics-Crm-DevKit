﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:36
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_flow_awaitallactionapprovalmodel_teamOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_flow_awaitallactionapprovalmodel_team : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_flow_awaitallactionapprovalmodel_teamId = "msdyn_flow_awaitallactionapprovalmodel_teamid";
			public const string msdyn_flow_awaitallactionapprovalmodelid = "msdyn_flow_awaitallactionapprovalmodelid";
			public const string teamid = "teamid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_flow_awaitallactionapprovalmodel_team";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10104;
		public const string EntityCollectionSchemaName = "";
		public const string EntityDisplayCollectionName = "";
		public const string DisplayName = "";
		public const string EntitySetName = "msdyn_flow_awaitallactionapprovalmodel_teamset";
		public const string EntityLogicalCollectionName = "";
		public const string EntityPrimaryIdAttribute = "msdyn_flow_awaitallactionapprovalmodel_teamid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "msdyn_flow_awaitallactionapprovalmodel_team";
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team(Guid msdyn_flow_awaitallactionapprovalmodel_teamId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_flow_awaitallactionapprovalmodel_teamId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_flow_awaitallactionapprovalmodel_team"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_flow_awaitallactionapprovalmodel_team"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_flow_awaitallactionapprovalmodel_team(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_flow_awaitallactionapprovalmodel_team"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_flow_awaitallactionapprovalmodel_team(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_flow_awaitallactionapprovalmodel_team(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_flow_awaitallactionapprovalmodel_team(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_flow_awaitallactionapprovalmodel_teamId
		{
			get { return Id; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_flow_awaitallactionapprovalmodelid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_flow_awaitallactionapprovalmodelid); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? teamid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.teamid); }
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