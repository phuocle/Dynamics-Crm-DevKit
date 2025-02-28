﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:21
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SubscriptionTrackingDeletedObjectOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SubscriptionTrackingDeletedObject : EntityBase
	{
		public struct Fields
		{
			public const string CrmCreatedOn = "crmcreatedon";
			public const string DeleteTime = "deletetime";
			public const string IsArchivalDelete = "isarchivaldelete";
			public const string IsLogicalDelete = "islogicaldelete";
			public const string ObjectId = "objectid";
			public const string ObjectTypeCode = "objecttypecode";
			public const string TimeStamp = "timestamp";
		}
		public const string EntityLogicalName = "subscriptiontrackingdeletedobject";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 35;
		public const string EntityCollectionSchemaName = "SubscriptionTrackingDeletedObjects";
		public const string EntityDisplayCollectionName = "Thông tin theo dõi thực thể đã xóa";
		public const string DisplayName = "Thông tin theo dõi thực thể đã xóa";
		public const string EntitySetName = "subscriptiontrackingdeletedobjects";
		public const string EntityLogicalCollectionName = "subscriptiontrackingdeletedobjects";
		public const string EntityPrimaryIdAttribute = "timestamp";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "SubscriptionTrackingDeletedObject";
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject(Guid SubscriptionTrackingDeletedObjectId)
		{
			Entity = new Entity(EntityLogicalName, SubscriptionTrackingDeletedObjectId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SubscriptionTrackingDeletedObject"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SubscriptionTrackingDeletedObject"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SubscriptionTrackingDeletedObject(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SubscriptionTrackingDeletedObject"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SubscriptionTrackingDeletedObject(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SubscriptionTrackingDeletedObject(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SubscriptionTrackingDeletedObject(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo CRM</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ tạo bản ghi trong CRM. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics 365.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CrmCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CrmCreatedOn); }
			set { Entity.Attributes[Fields.CrmCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? DeleteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.DeleteTime); }
			set { Entity.Attributes[Fields.DeleteTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Archival Delete</para>
		/// <para><strong>Description</strong>: Indicates that the record is deleted by Archival or not</para>
		/// <para><strong>Two Option</strong> - [<strong></strong>]: true - [<strong></strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong></strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsArchivalDelete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsArchivalDelete); }
			set { Entity.Attributes[Fields.IsArchivalDelete] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là Xóa Logic</para>
		/// <para><strong>Description</strong>: Cho biết bản ghi thực thể nhận thức giải pháp có bị xóa logic hay không</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsLogicalDelete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsLogicalDelete); }
			set { Entity.Attributes[Fields.IsLogicalDelete] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Loại thực thể hệ thống đã xóa.</para>
		/// <para><strong>ReadOnly</strong> - <strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ObjectTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ObjectTypeCode); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? TimeStamp
		{
			get { return Entity.GetAttributeValue<long?>(Fields.TimeStamp); }
		}
	}
}