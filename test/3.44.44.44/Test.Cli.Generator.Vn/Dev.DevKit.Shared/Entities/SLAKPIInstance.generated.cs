﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:19
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets
{
	public enum msdyn_ActionExecutionStatus
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: None</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		None = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Success</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Success = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Warning</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Warning = 1
	}
	public enum Status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã hủy</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Da_huy = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã tạm dừng</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Da_tam_dung = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã thành công</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Da_thanh_cong = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đang tiến hành</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Dang_tien_hanh = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gần như không tuân thủ</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Gan_nhu_khong_tuan_thu = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không tuân thủ</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Khong_tuan_thu = 1
	}
	public enum WarningTimeReached
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Có</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Co = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khong = 0
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SLAKPIInstance : EntityBase
	{
		public struct Fields
		{
			public const string ApplicableFromValue = "applicablefromvalue";
			public const string ComputedFailureTime = "computedfailuretime";
			public const string ComputedWarningTime = "computedwarningtime";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ElapsedTime = "elapsedtime";
			public const string ExchangeRate = "exchangerate";
			public const string FailureTime = "failuretime";
			public const string LastResumeTime = "lastresumetime";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_ActionExecutionStatus = "msdyn_actionexecutionstatus";
			public const string msdyn_activeduration = "msdyn_activeduration";
			public const string msdyn_calendarid = "msdyn_calendarid";
			public const string msdyn_prevslakpiinstanceid = "msdyn_prevslakpiinstanceid";
			public const string msdyn_slaitemid = "msdyn_slaitemid";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PausedOn = "pausedon";
			public const string Regarding = "regarding";
			public const string RegardingEntityID = "regardingentityid";
			public const string SLAKPIInstanceId = "slakpiinstanceid";
			public const string Status = "status";
			public const string SucceededOn = "succeededon";
			public const string SuccessCheckedAt = "successcheckedat";
			public const string TerminalStateReached = "terminalstatereached";
			public const string TerminalStateTime = "terminalstatetime";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string VersionNumber = "versionnumber";
			public const string WarningTime = "warningtime";
			public const string WarningTimeReached = "warningtimereached";
		}
		public const string EntityLogicalName = "slakpiinstance";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9752;
		public const string EntityCollectionSchemaName = "SLAKPIInstances";
		public const string EntityDisplayCollectionName = "Phiên bản SLA KPI";
		public const string DisplayName = "Phiên bản SLA KPI";
		public const string EntitySetName = "slakpiinstances";
		public const string EntityLogicalCollectionName = "slakpiinstances";
		public const string EntityPrimaryIdAttribute = "slakpiinstanceid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "SLAKPIInstance";
		[DebuggerNonUserCode()]
		public SLAKPIInstance()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SLAKPIInstance(Guid SLAKPIInstanceId)
		{
			Entity = new Entity(EntityLogicalName, SLAKPIInstanceId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SLAKPIInstance(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SLAKPIInstance"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SLAKPIInstance(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SLAKPIInstance"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SLAKPIInstance(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SLAKPIInstance(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SLAKPIInstance"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SLAKPIInstance(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SLAKPIInstance(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SLAKPIInstance(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Applicable From Value</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ApplicableFromValueUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ApplicableFromValue); }
			set { Entity.Attributes[Fields.ApplicableFromValue] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian lỗi đã tính</para>
		/// <para><strong>Description</strong>: Ngày giờ lỗi đã tính</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ComputedFailureTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ComputedFailureTime); }
			set { Entity.Attributes[Fields.ComputedFailureTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian cảnh báo đã tính</para>
		/// <para><strong>Description</strong>: Ngày giờ cảnh báo đã tính</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ComputedWarningTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ComputedWarningTime); }
			set { Entity.Attributes[Fields.ComputedWarningTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Elapsed Time (min)</para>
		/// <para><strong>Description</strong>: Paused duration of a KPI in business hours</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ElapsedTime
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ElapsedTime); }
			set { Entity.Attributes[Fields.ElapsedTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tỷ giá</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian lỗi</para>
		/// <para><strong>Description</strong>: Nhập ngày giờ hết hạn Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA).</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? FailureTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.FailureTime); }
			set { Entity.Attributes[Fields.FailureTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Last Resume Time</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? LastResumeTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.LastResumeTime); }
			set { Entity.Attributes[Fields.LastResumeTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Action Execution Status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.msdyn_ActionExecutionStatus"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.msdyn_ActionExecutionStatus? msdyn_ActionExecutionStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_ActionExecutionStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.msdyn_ActionExecutionStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_ActionExecutionStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_ActionExecutionStatus] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Active Duration (min)</para>
		/// <para><strong>Description</strong>: Time taken in business hours by a KPI instance to reach the Success or failed state</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_activeduration
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_activeduration); }
			set { Entity.Attributes[Fields.msdyn_activeduration] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Applicable Calendar</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_calendarid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_calendarid); }
			set { Entity.Attributes[Fields.msdyn_calendarid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Previous SLAKPI Instance</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_prevslakpiinstanceid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_prevslakpiinstanceid); }
			set { Entity.Attributes[Fields.msdyn_prevslakpiinstanceid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SLAItem</para>
		/// <para><strong>Description</strong>: Unique identifier for SLA KPI Instance associated with SLA Item.</para>
		/// <para><strong>Lookup</strong>: <see cref="slaitem"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_slaitemid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_slaitemid); }
			set { Entity.Attributes[Fields.msdyn_slaitemid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Nhập tên mô tả dành cho phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA).</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: Nhập người dùng hoặc nhóm đã gán quản lý bản ghi. Trường này sẽ cập nhật mỗi lần gán bản ghi cho người dùng hoặc nhóm khác.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh Sở hữu</para>
		/// <para><strong>Description</strong>: Đơn vị kinh doanh sở hữu.</para>
		/// <para><strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
			set { Entity.Attributes[Fields.OwningBusinessUnit] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm Sở hữu</para>
		/// <para><strong>Description</strong>: Nhóm sở hữu.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
			set { Entity.Attributes[Fields.OwningTeam] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Sở hữu</para>
		/// <para><strong>Description</strong>: Người dùng sở hữu.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
			set { Entity.Attributes[Fields.OwningUser] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Paused On</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PausedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PausedOn); }
			set { Entity.Attributes[Fields.PausedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản lưu ý</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bản ghi có liên kết với phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) này.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="activitypointer"/>, <see cref="appointment"/>, <see cref="contact"/>, <see cref="email"/>, <see cref="fax"/>, <see cref="letter"/>, <see cref="phonecall"/>, <see cref="socialactivity"/>, <see cref="task"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference Regarding
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.Regarding); }
			set { Entity.Attributes[Fields.Regarding] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Regarding ID</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RegardingEntityID
		{
			get { return Entity.GetAttributeValue<string>(Fields.RegardingEntityID); }
			set { Entity.Attributes[Fields.RegardingEntityID] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: InstanceId SLA KPI</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI).</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SLAKPIInstanceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SLAKPIInstanceId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của phiên bản Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA). Ví dụ: Chỉ số Đo lường Hiệu suất Chính của Thỏa thuận Cấp độ Dịch vụ (SLA KPI) có thể là Không tuân thủ hoặc Đã thành công.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.Status"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.Status? Status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.Status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Status] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thành công vào</para>
		/// <para><strong>Description</strong>: Hiện ngày giờ thỏa mãn tiêu chí thành công cho Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA).</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? SucceededOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.SucceededOn); }
			set { Entity.Attributes[Fields.SucceededOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SuccessCheckedAt</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: TimeZoneIndependent - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? SuccessCheckedAt
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.SuccessCheckedAt); }
			set { Entity.Attributes[Fields.SuccessCheckedAt] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Terminal State Reached</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? TerminalStateReached
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.TerminalStateReached); }
			set { Entity.Attributes[Fields.TerminalStateReached] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Terminal State Time</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? TerminalStateTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.TerminalStateTime); }
			set { Entity.Attributes[Fields.TerminalStateTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại tiền</para>
		/// <para><strong>Description</strong>: Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số Phiên bản</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian cảnh báo</para>
		/// <para><strong>Description</strong>: Nhập ngày giờ mà Chỉ số Đo lường Hiệu suất Chính (KPI) của thỏa thuận cấp độ dịch vụ (SLA) sẽ chuyển sang trạng thái cảnh báo.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? WarningTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.WarningTime); }
			set { Entity.Attributes[Fields.WarningTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian cảnh báo đã đến</para>
		/// <para><strong>Description</strong>: Hiện thông tin về khả năng trường hợp đến thời gian cảnh báo.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.WarningTimeReached"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.WarningTimeReached.Khong"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.WarningTimeReached? WarningTimeReached
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.WarningTimeReached);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SLAKPIInstanceOptionSets.WarningTimeReached)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.WarningTimeReached] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.WarningTimeReached] = null;
			}
		}
	}
}