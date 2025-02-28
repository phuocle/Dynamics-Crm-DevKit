﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:47
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Hien_hoat = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Khong_hoat_dong = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Hien_hoat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Khong_hoat_dong</strong></para>
		/// </summary>
		Khong_hoat_dong = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class mspp_pollplacement : EntityBase
	{
		public struct Fields
		{
			public const string mspp_createdby = "mspp_createdby";
			public const string mspp_createdon = "mspp_createdon";
			public const string mspp_modifiedby = "mspp_modifiedby";
			public const string mspp_modifiedon = "mspp_modifiedon";
			public const string mspp_name = "mspp_name";
			public const string mspp_pollplacementId = "mspp_pollplacementid";
			public const string mspp_websiteid = "mspp_websiteid";
			public const string mspp_webtemplateid = "mspp_webtemplateid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
		}
		public const string EntityLogicalName = "mspp_pollplacement";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10326;
		public const string EntityCollectionSchemaName = "mspp_pollplacements";
		public const string EntityDisplayCollectionName = "Vị trí thăm dò ý kiến";
		public const string DisplayName = "Vị trí thăm dò ý kiến";
		public const string EntitySetName = "mspp_pollplacements";
		public const string EntityLogicalCollectionName = "mspp_pollplacements";
		public const string EntityPrimaryIdAttribute = "mspp_pollplacementid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "mspp_name";
		public const string EntitySchemaName = "mspp_pollplacement";
		[DebuggerNonUserCode()]
		public mspp_pollplacement()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public mspp_pollplacement(Guid mspp_pollplacementId)
		{
			Entity = new Entity(EntityLogicalName, mspp_pollplacementId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public mspp_pollplacement(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="mspp_pollplacement"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public mspp_pollplacement(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="mspp_pollplacement"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public mspp_pollplacement(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new mspp_pollplacement(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="mspp_pollplacement"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public mspp_pollplacement(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new mspp_pollplacement(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public mspp_pollplacement(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Hiển thị người đã tạo bản ghi.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_createdby
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_createdby); }
			set { Entity.Attributes[Fields.mspp_createdby] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Hiển thị ngày và giờ tạo bản ghi.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? mspp_createdonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.mspp_createdon); }
			set { Entity.Attributes[Fields.mspp_createdon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Hiển thị người gần đây nhất đã cập nhật bản ghi.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_modifiedby
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_modifiedby); }
			set { Entity.Attributes[Fields.mspp_modifiedby] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày sửa đổi</para>
		/// <para><strong>Description</strong>: Hiển thị ngày và giờ sửa đổi bản ghi.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? mspp_modifiedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.mspp_modifiedon); }
			set { Entity.Attributes[Fields.mspp_modifiedon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên của thực thể tùy chỉnh.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_name); }
			set { Entity.Attributes[Fields.mspp_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Vị trí thăm dò ý kiến</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid mspp_pollplacementId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.mspp_pollplacementId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Website</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho website được liên kết với vị trí thăm dò ý kiến.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="mspp_website"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_websiteid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_websiteid); }
			set { Entity.Attributes[Fields.mspp_websiteid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mẫu web</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho mẫu web được liên kết với vị trí thăm dò ý kiến.</para>
		/// <para><strong>Lookup</strong>: <see cref="mspp_webtemplate"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_webtemplateid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_webtemplateid); }
			set { Entity.Attributes[Fields.mspp_webtemplateid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của vị trí thăm dò ý kiến</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statecode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statecode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statecode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lý do dẫn đến trạng thái</para>
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của vị trí thăm dò ý kiến</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.mspp_pollplacementOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}
	}
}