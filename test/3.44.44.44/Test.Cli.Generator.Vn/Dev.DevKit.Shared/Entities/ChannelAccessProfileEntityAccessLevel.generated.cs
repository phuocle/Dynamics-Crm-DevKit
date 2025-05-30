﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:08
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.ChannelAccessProfileEntityAccessLevelOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã phát hành</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Da_phat_hanh = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã xóa</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Da_xoa = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã xóa Hủy phát hành</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Da_xoa_Huy_phat_hanh = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hủy phát hành</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Huy_phat_hanh = 1
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ChannelAccessProfileEntityAccessLevel : EntityBase
	{
		public struct Fields
		{
			public const string ChannelAccessProfileEntityAccessLevelId = "channelaccessprofileentityaccesslevelid";
			public const string ChannelAccessProfileEntityAccessLevelIdUnique = "channelaccessprofileentityaccesslevelidunique";
			public const string ChannelAccessProfileId = "channelaccessprofileid";
			public const string ComponentState = "componentstate";
			public const string EntityAccessLevelDepthMask = "entityaccessleveldepthmask";
			public const string EntityAccessLevelId = "entityaccesslevelid";
			public const string IsManaged = "ismanaged";
			public const string OverwriteTime = "overwritetime";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "channelaccessprofileentityaccesslevel";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9404;
		public const string EntityCollectionSchemaName = "";
		public const string EntityDisplayCollectionName = "";
		public const string DisplayName = "";
		public const string EntitySetName = "channelaccessprofileentityaccesslevels";
		public const string EntityLogicalCollectionName = "";
		public const string EntityPrimaryIdAttribute = "channelaccessprofileentityaccesslevelid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "ChannelAccessProfileEntityAccessLevel";
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel(Guid ChannelAccessProfileEntityAccessLevelId)
		{
			Entity = new Entity(EntityLogicalName, ChannelAccessProfileEntityAccessLevelId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ChannelAccessProfileEntityAccessLevel"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ChannelAccessProfileEntityAccessLevel"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ChannelAccessProfileEntityAccessLevel(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="ChannelAccessProfileEntityAccessLevel"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ChannelAccessProfileEntityAccessLevel(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ChannelAccessProfileEntityAccessLevel(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public ChannelAccessProfileEntityAccessLevel(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của cấp độ truy cập vào thực thể được liên kết với cấu hình truy cập kênh.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ChannelAccessProfileEntityAccessLevelId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ChannelAccessProfileEntityAccessLevelId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ChannelAccessProfileEntityAccessLevelIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ChannelAccessProfileEntityAccessLevelIdUnique); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của cấu hình truy cập kênh.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ChannelAccessProfileId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ChannelAccessProfileId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ChannelAccessProfileEntityAccessLevelOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ChannelAccessProfileEntityAccessLevelOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ChannelAccessProfileEntityAccessLevelOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Thuộc tính do hệ thống tạo giúp lưu trữ các quyền được liên kết với vai trò.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? EntityAccessLevelDepthMask
		{
			get { return Entity.GetAttributeValue<int?>(Fields.EntityAccessLevelDepthMask); }
			set { Entity.Attributes[Fields.EntityAccessLevelDepthMask] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của cấp độ truy cập vào thực thể được liên kết với cấu hình truy cập kênh</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? EntityAccessLevelId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.EntityAccessLevelId); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian ghi đè bản ghi</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải pháp</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của giải pháp được liên kết.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải pháp</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
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