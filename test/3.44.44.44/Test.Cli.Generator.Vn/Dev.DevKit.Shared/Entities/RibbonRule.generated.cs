﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:55
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.RibbonRuleOptionSets
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
	public enum RuleType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bật</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Bat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cắt bỏ</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Cat_bo = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lựa chọn thẻ</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Lua_chon_the = 3
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RibbonRule : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Entity = "entity";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string RibbonCustomizationId = "ribboncustomizationid";
			public const string RibbonRuleId = "ribbonruleid";
			public const string RibbonRuleUniqueId = "ribbonruleuniqueid";
			public const string RuleDefinition = "ruledefinition";
			public const string RuleId = "ruleid";
			public const string RuleType = "ruletype";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "ribbonrule";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1117;
		public const string EntityCollectionSchemaName = "RibbonRules";
		public const string EntityDisplayCollectionName = "Quy tắc ruy băng";
		public const string DisplayName = "Quy tắc ruy băng";
		public const string EntitySetName = "ribbonrules";
		public const string EntityLogicalCollectionName = "ribbonrules";
		public const string EntityPrimaryIdAttribute = "ribbonruleid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "RibbonRule";
		[DebuggerNonUserCode()]
		public RibbonRule()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RibbonRule(Guid RibbonRuleId)
		{
			Entity = new Entity(EntityLogicalName, RibbonRuleId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public RibbonRule(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RibbonRule"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public RibbonRule(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="RibbonRule"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RibbonRule(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RibbonRule(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="RibbonRule"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public RibbonRule(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new RibbonRule(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public RibbonRule(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Cho biết người tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Hệ thống sẽ xuất thực thể áp dụng quy tắc này, cũng là thực thể nhập quy tắc này từ đó.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 128</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Entity2
		{
			get { return Entity.GetAttributeValue<string>(Fields.Entity); }
			set { Entity.Attributes[Fields.Entity] = value; }
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
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Cho biết người cập nhật bản ghi sau cùng.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày sửa đổi</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ cập nhật bản ghi sau cùng. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi (đại diện)</para>
		/// <para><strong>Description</strong>: Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Ghi đè Bản ghi</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tùy chỉnh ruy băng có liên kết với lệnh trên ruy băng.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="ribboncustomization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RibbonCustomizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RibbonCustomizationId); }
			set { Entity.Attributes[Fields.RibbonCustomizationId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Khóa chính</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid RibbonRuleId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.RibbonRuleId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RibbonRuleUniqueId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RibbonRuleUniqueId); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Định nghĩa của quy tắc - thực thể, quyền, giá trị dữ liệu, v.v... có thể đổi khi quy tắc này đúng hoặc sai.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RuleDefinition
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuleDefinition); }
			set { Entity.Attributes[Fields.RuleDefinition] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Id của quy tắc</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RuleId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuleId); }
			set { Entity.Attributes[Fields.RuleId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Loại quy tắc.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.RuleType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.RuleType? RuleType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.RuleType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.RibbonRuleOptionSets.RuleType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.RuleType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.RuleType] = null;
			}
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
		/// <para><strong>Description</strong>: Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}