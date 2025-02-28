﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:53
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.RelationshipRoleMapOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RelationshipRoleMap : EntityBase
	{
		public struct Fields
		{
			public const string AssociateObjectTypeCode = "associateobjecttypecode";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string PrimaryObjectTypeCode = "primaryobjecttypecode";
			public const string RelationshipRoleId = "relationshiproleid";
			public const string RelationshipRoleMapId = "relationshiprolemapid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "relationshiprolemap";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4501;
		public const string EntityCollectionSchemaName = "RelationshipRoleMaps";
		public const string EntityDisplayCollectionName = "Bản đồ vai trò của mối quan hệ";
		public const string DisplayName = "Bản đồ vai trò của mối quan hệ";
		public const string EntitySetName = "relationshiprolemaps";
		public const string EntityLogicalCollectionName = "relationshiprolemaps";
		public const string EntityPrimaryIdAttribute = "relationshiprolemapid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "RelationshipRoleMap";
		[DebuggerNonUserCode()]
		public RelationshipRoleMap()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RelationshipRoleMap(Guid RelationshipRoleMapId)
		{
			Entity = new Entity(EntityLogicalName, RelationshipRoleMapId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RelationshipRoleMap(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RelationshipRoleMap"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public RelationshipRoleMap(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RelationshipRoleMap"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RelationshipRoleMap(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RelationshipRoleMap(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="RelationshipRoleMap"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RelationshipRoleMap(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RelationshipRoleMap(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public RelationshipRoleMap(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Description</strong>: Loại thực thể đã liên kết trong ánh xạ vai trò của mối quan hệ.</para>
		/// <para><strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AssociateObjectTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.AssociateObjectTypeCode); }
			set { Entity.Attributes[Fields.AssociateObjectTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo bản đồ vai trò của mối quan hệ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Ngày và giờ tạo bản đồ vai trò của mối quan hệ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo relationshiprolemap.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã sửa bản đồ vai trò của mối quan hệ lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi bản ghi bản đồ vai trò của mối quan hệ lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi relationshiprolemap lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức có liên kết với bản đồ vai trò của mối quan hệ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OrganizationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Loại thực thể chính trong ánh xạ vai trò của mối quan hệ.</para>
		/// <para><strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PrimaryObjectTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.PrimaryObjectTypeCode); }
			set { Entity.Attributes[Fields.PrimaryObjectTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất dành cho vai trò của mối quan hệ. Vai trò của mối quan hệ này chỉ hợp lệ cho mối quan hệ giữa đối tượng của loại đã chỉ định trong thuộc tính primaryobjecttypecode và đối tượng của loại đã chỉ định trong thuộc tính associateobjecttypecode.</para>
		/// <para><strong>Lookup</strong>: <see cref="relationshiprole"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RelationshipRoleId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RelationshipRoleId); }
			set { Entity.Attributes[Fields.RelationshipRoleId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bản đồ vai trò của mối quan hệ.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid RelationshipRoleMapId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.RelationshipRoleMapId] = value;
				Entity.Id = value;
			}
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