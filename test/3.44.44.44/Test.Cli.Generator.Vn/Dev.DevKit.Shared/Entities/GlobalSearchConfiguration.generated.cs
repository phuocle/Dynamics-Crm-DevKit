﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:26
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.GlobalSearchConfigurationOptionSets
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
	public partial class GlobalSearchConfiguration : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string GlobalSearchConfigurationId = "globalsearchconfigurationid";
			public const string GlobalSearchConfigurationidUnique = "globalsearchconfigurationidunique";
			public const string IsEnabled = "isenabled";
			public const string IsLocalized = "islocalized";
			public const string IsManaged = "ismanaged";
			public const string IsSearchBoxVisible = "issearchboxvisible";
			public const string OverwriteTime = "overwritetime";
			public const string SearchProviderName = "searchprovidername";
			public const string SearchProviderResultsPage = "searchproviderresultspage";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
		}
		public const string EntityLogicalName = "globalsearchconfiguration";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 54;
		public const string EntityCollectionSchemaName = "GlobalSearchConfigurations";
		public const string EntityDisplayCollectionName = "Cấu hình Tìm kiếm Chung";
		public const string DisplayName = "Cấu hình Tìm kiếm Chung";
		public const string EntitySetName = "globalsearchconfigurations";
		public const string EntityLogicalCollectionName = "globalsearchconfigurations";
		public const string EntityPrimaryIdAttribute = "globalsearchconfigurationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "GlobalSearchConfiguration";
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration(Guid GlobalSearchConfigurationId)
		{
			Entity = new Entity(EntityLogicalName, GlobalSearchConfigurationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="GlobalSearchConfiguration"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="GlobalSearchConfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new GlobalSearchConfiguration(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="GlobalSearchConfiguration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public GlobalSearchConfiguration(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new GlobalSearchConfiguration(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public GlobalSearchConfiguration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.GlobalSearchConfigurationOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.GlobalSearchConfigurationOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.GlobalSearchConfigurationOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid GlobalSearchConfigurationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.GlobalSearchConfigurationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? GlobalSearchConfigurationidUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.GlobalSearchConfigurationidUnique); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Thông tin chỉ định có bật tìm kiếm cụ thể hay không.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Có</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsEnabled); }
			set { Entity.Attributes[Fields.IsEnabled] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Thông tin chỉ định khả năng bản địa hóa tên logic của tìm kiếm.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Có</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsLocalized
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsLocalized); }
			set { Entity.Attributes[Fields.IsLocalized] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được quản lý</para>
		/// <para><strong>Description</strong>: Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Thông tin chỉ định Hộp Tìm kiếm có hiển thị hay không.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Có</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsSearchBoxVisible
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsSearchBoxVisible); }
			set { Entity.Attributes[Fields.IsSearchBoxVisible] = value; }
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
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 64</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SearchProviderName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SearchProviderName); }
			set { Entity.Attributes[Fields.SearchProviderName] = value; }
		}
		/// <summary>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 64</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SearchProviderResultsPage
		{
			get { return Entity.GetAttributeValue<string>(Fields.SearchProviderResultsPage); }
			set { Entity.Attributes[Fields.SearchProviderResultsPage] = value; }
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
	}
}