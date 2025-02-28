﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:20
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets
{
	public enum Operation
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Dỡ cài đặt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Do_cai_dat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhập</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Nhap = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xuất</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Xuat = 2
	}
	public enum Status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bắt đầu</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Bat_dau = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Kết thúc</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Ket_thuc = 1
	}
	public enum SubOperation
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Cap_nhat = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không có</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khong_co = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mới</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Moi = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nâng cấp</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Nang_cap = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Xoa = 4
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SolutionHistoryData : EntityBase
	{
		public struct Fields
		{
			public const string ActivityId = "activityid";
			public const string CorrelationId = "correlationid";
			public const string EndTime = "endtime";
			public const string ErrorCode = "errorcode";
			public const string ExceptionMessage = "exceptionmessage";
			public const string ExceptionStack = "exceptionstack";
			public const string IsManaged = "ismanaged";
			public const string IsMicrosoftPublisher = "ismicrosoftpublisher";
			public const string IsOverwriteCustomizations = "isoverwritecustomizations";
			public const string IsPatch = "ispatch";
			public const string Operation = "operation";
			public const string PackageName = "packagename";
			public const string PackageVersion = "packageversion";
			public const string PublisherName = "publishername";
			public const string Result = "result";
			public const string SolutionHistoryDataId = "solutionhistorydataid";
			public const string SolutionId = "solutionid";
			public const string SolutionName = "solutionname";
			public const string SolutionVersion = "solutionversion";
			public const string StartTime = "starttime";
			public const string Status = "status";
			public const string SubOperation = "suboperation";
		}
		public const string EntityLogicalName = "solutionhistorydata";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9890;
		public const string EntityCollectionSchemaName = "SolutionHistoryDatas";
		public const string EntityDisplayCollectionName = "SolutionHistoryDatas";
		public const string DisplayName = "SolutionHistoryData";
		public const string EntitySetName = "solutionhistories";
		public const string EntityLogicalCollectionName = "solutionhistorydatas";
		public const string EntityPrimaryIdAttribute = "solutionhistorydataid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "SolutionHistoryData";
		[DebuggerNonUserCode()]
		public SolutionHistoryData()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SolutionHistoryData(Guid SolutionHistoryDataId)
		{
			Entity = new Entity(EntityLogicalName, SolutionHistoryDataId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SolutionHistoryData(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SolutionHistoryData"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SolutionHistoryData(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SolutionHistoryData"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SolutionHistoryData(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SolutionHistoryData(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SolutionHistoryData"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SolutionHistoryData(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SolutionHistoryData(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SolutionHistoryData(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID Hoạt động</para>
		/// <para><strong>Description</strong>: ID Hoạt động.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ActivityId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ActivityId); }
			set { Entity.Attributes[Fields.ActivityId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id Tương quan</para>
		/// <para><strong>Description</strong>: Id Tương quan.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? CorrelationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.CorrelationId); }
			set { Entity.Attributes[Fields.CorrelationId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Kết thúc</para>
		/// <para><strong>Description</strong>: DateTime lúc kết thúc sự kiện giải pháp.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EndTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EndTime); }
			set { Entity.Attributes[Fields.EndTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã lỗi</para>
		/// <para><strong>Description</strong>: Mã lỗi của thao tác thực hiện trên giải pháp.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ErrorCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ErrorCode); }
			set { Entity.Attributes[Fields.ErrorCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ExceptionMessage</para>
		/// <para><strong>Description</strong>: Thông báo Ngoại lệ.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExceptionMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExceptionMessage); }
			set { Entity.Attributes[Fields.ExceptionMessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ExceptionStack</para>
		/// <para><strong>Description</strong>: Ngăn xếp Ngoại lệ.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExceptionStack
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExceptionStack); }
			set { Entity.Attributes[Fields.ExceptionStack] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là Giải pháp Được quản lý</para>
		/// <para><strong>Description</strong>: Là Giải pháp Được quản lý</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
			set { Entity.Attributes[Fields.IsManaged] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được phát hành bởi Microsoft</para>
		/// <para><strong>Description</strong>: Là giải pháp đã được một phát hành bởi một Nhà phát hành Microsoft.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsMicrosoftPublisher
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsMicrosoftPublisher); }
			set { Entity.Attributes[Fields.IsMicrosoftPublisher] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là Ghi đè Tùy chỉnh</para>
		/// <para><strong>Description</strong>: Sự kiện có ghi đè tùy chỉnh không.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsOverwriteCustomizations
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsOverwriteCustomizations); }
			set { Entity.Attributes[Fields.IsOverwriteCustomizations] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là Bản vá Giải pháp</para>
		/// <para><strong>Description</strong>: Là Bản vá Giải pháp</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsPatch
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsPatch); }
			set { Entity.Attributes[Fields.IsPatch] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thao tác</para>
		/// <para><strong>Description</strong>: Thao tác thực hiện trên giải pháp.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Operation"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Operation? Operation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Operation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Operation)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Operation] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Operation] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PackageName</para>
		/// <para><strong>Description</strong>: Tên của gói.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PackageName
		{
			get { return Entity.GetAttributeValue<string>(Fields.PackageName); }
			set { Entity.Attributes[Fields.PackageName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PackageVersion</para>
		/// <para><strong>Description</strong>: Phiên bản của gói.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PackageVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.PackageVersion); }
			set { Entity.Attributes[Fields.PackageVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên người phát hành</para>
		/// <para><strong>Description</strong>: Tên nhà phát hành của giải pháp.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 512</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PublisherName
		{
			get { return Entity.GetAttributeValue<string>(Fields.PublisherName); }
			set { Entity.Attributes[Fields.PublisherName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Kết quả</para>
		/// <para><strong>Description</strong>: Kết quả thao tác thực hiện trên giải pháp.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Result
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Result); }
			set { Entity.Attributes[Fields.Result] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SolutionHistoryDataId</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SolutionHistoryDataId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SolutionHistoryDataId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải pháp</para>
		/// <para><strong>Description</strong>: Giải pháp.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
			set { Entity.Attributes[Fields.SolutionId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SolutionName</para>
		/// <para><strong>Description</strong>: Tên giải pháp.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 65</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SolutionName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SolutionName); }
			set { Entity.Attributes[Fields.SolutionName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SolutionVersion</para>
		/// <para><strong>Description</strong>: Phiên bản Giải pháp.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SolutionVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.SolutionVersion); }
			set { Entity.Attributes[Fields.SolutionVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Bắt đầu</para>
		/// <para><strong>Description</strong>: DateTime lúc bắt đầu sự kiện giải pháp.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartTime); }
			set { Entity.Attributes[Fields.StartTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái thao tác thực hiện trên giải pháp.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Status"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Status? Status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.Status)value.Value;
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
		/// <para><strong>Display Name</strong>: Thao tác phụ</para>
		/// <para><strong>Description</strong>: Thao tác phụ thực hiện trên giải pháp.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.SubOperation"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.SubOperation? SubOperation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SubOperation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SolutionHistoryDataOptionSets.SubOperation)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SubOperation] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SubOperation] = null;
			}
		}
	}
}