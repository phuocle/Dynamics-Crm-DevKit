﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:23
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.TeamSyncAttributeMappingProfilesOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class TeamSyncAttributeMappingProfiles : EntityBase
	{
		public struct Fields
		{
			public const string SyncAttributeMappingProfileId = "syncattributemappingprofileid";
			public const string TeamId = "teamid";
			public const string TeamSyncAttributeMappingProfileId = "teamsyncattributemappingprofileid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "teamsyncattributemappingprofiles";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1403;
		public const string EntityCollectionSchemaName = "TeamSyncAttributeMappingProfiles";
		public const string EntityDisplayCollectionName = "Cấu hình của ánh xạ thuộc tính đồng bộ nhóm";
		public const string DisplayName = "Cấu hình của ánh xạ thuộc tính đồng bộ nhóm";
		public const string EntitySetName = "teamsyncattributemappingprofilescollection";
		public const string EntityLogicalCollectionName = "teamsyncattributemappingprofilescollection";
		public const string EntityPrimaryIdAttribute = "teamsyncattributemappingprofileid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "TeamSyncAttributeMappingProfiles";
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles(Guid TeamSyncAttributeMappingProfilesId)
		{
			Entity = new Entity(EntityLogicalName, TeamSyncAttributeMappingProfilesId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TeamSyncAttributeMappingProfiles"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TeamSyncAttributeMappingProfiles"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TeamSyncAttributeMappingProfiles(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="TeamSyncAttributeMappingProfiles"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TeamSyncAttributeMappingProfiles(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TeamSyncAttributeMappingProfiles(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public TeamSyncAttributeMappingProfiles(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SyncAttributeMappingProfileId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SyncAttributeMappingProfileId); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TeamId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TeamId); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TeamSyncAttributeMappingProfileId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TeamSyncAttributeMappingProfileId); }
			set { Entity.Attributes[Fields.TeamSyncAttributeMappingProfileId] = value; }
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