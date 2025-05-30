﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:24
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets
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
	public enum DataTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Giá trị</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Gia_tri = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tham chiếu</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Tham_chieu = 0
	}
	public enum ParameterTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đầu ra</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Dau_ra = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đầu vào</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Dau_vao = 0
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class TransformationParameterMapping : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Data = "data";
			public const string DataTypeCode = "datatypecode";
			public const string IntroducedVersion = "introducedversion";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OverwriteTime = "overwritetime";
			public const string ParameterArrayIndex = "parameterarrayindex";
			public const string ParameterSequence = "parametersequence";
			public const string ParameterTypeCode = "parametertypecode";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TransformationMappingId = "transformationmappingid";
			public const string TransformationParameterMappingId = "transformationparametermappingid";
			public const string TransformationParameterMappingIdUnique = "transformationparametermappingidunique";
		}
		public const string EntityLogicalName = "transformationparametermapping";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4427;
		public const string EntityCollectionSchemaName = "TransformationParameterMappings";
		public const string EntityDisplayCollectionName = "Các ánh xạ tham số biến đổi";
		public const string DisplayName = "Ánh xạ tham số biến đổi";
		public const string EntitySetName = "transformationparametermappings";
		public const string EntityLogicalCollectionName = "transformationparametermappings";
		public const string EntityPrimaryIdAttribute = "transformationparametermappingid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "data";
		public const string EntitySchemaName = "TransformationParameterMapping";
		[DebuggerNonUserCode()]
		public TransformationParameterMapping()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TransformationParameterMapping(Guid TransformationParameterMappingId)
		{
			Entity = new Entity(EntityLogicalName, TransformationParameterMappingId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TransformationParameterMapping(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TransformationParameterMapping"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public TransformationParameterMapping(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TransformationParameterMapping"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TransformationParameterMapping(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TransformationParameterMapping(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="TransformationParameterMapping"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TransformationParameterMapping(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TransformationParameterMapping(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public TransformationParameterMapping(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo ánh xạ tham số.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo ánh xạ tham số biến đổi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo transformationparametermapping.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu</para>
		/// <para><strong>Description</strong>: Dữ liệu biến đổi cho tham số biến đổi</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Data
		{
			get { return Entity.GetAttributeValue<string>(Fields.Data); }
			set { Entity.Attributes[Fields.Data] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại dữ liệu tham số</para>
		/// <para><strong>Description</strong>: Loại dữ liệu của tham số biến đổi.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.DataTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.DataTypeCode? DataTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.DataTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.DataTypeCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.DataTypeCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.DataTypeCode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản được đưa vào</para>
		/// <para><strong>Description</strong>: Phiên bản có thành phần được đưa vào.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Thông tin chỉ định khả năng quản lý thành phần này.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã sửa đổi ánh xạ tham số biến đổi lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi ánh xạ tham số biến đổi lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi transformationparametermapping lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
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
		/// <para><strong>Display Name</strong>: Chỉ mục mảng tham số</para>
		/// <para><strong>Description</strong>: Chỉ mục của mảng nếu tham số đầu vào là một mảng.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ParameterArrayIndex
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ParameterArrayIndex); }
			set { Entity.Attributes[Fields.ParameterArrayIndex] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thứ tự tham số</para>
		/// <para><strong>Description</strong>: Số thứ tự tham số.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ParameterSequence
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ParameterSequence); }
			set { Entity.Attributes[Fields.ParameterSequence] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại tham số</para>
		/// <para><strong>Description</strong>: Loại tham số biến đổi.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ParameterTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ParameterTypeCode? ParameterTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ParameterTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TransformationParameterMappingOptionSets.ParameterTypeCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ParameterTypeCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ParameterTypeCode] = null;
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
		/// <para><strong>Display Name</strong>: Id ánh xạ biến đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của biến đổi có tham số được liên kết.</para>
		/// <para><strong>Lookup</strong>: <see cref="transformationmapping"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransformationMappingId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransformationMappingId); }
			set { Entity.Attributes[Fields.TransformationMappingId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của ánh xạ tham số biến đổi.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid TransformationParameterMappingId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.TransformationParameterMappingId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của Ánh xạ Tham số Biến đổi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TransformationParameterMappingIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TransformationParameterMappingIdUnique); }
		}
	}
}