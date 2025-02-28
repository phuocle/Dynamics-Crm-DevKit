﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:41
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.MetadataDifferenceOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class MetadataDifference : EntityBase
	{
		public struct Fields
		{
			public const string CreatedOn = "createdon";
			public const string DifferenceXml = "differencexml";
			public const string IntroducedVersion = "introducedversion";
			public const string IntroducedVersionString = "introducedversionstring";
			public const string MetadataDifferenceId = "metadatadifferenceid";
			public const string ModifiedOn = "modifiedon";
			public const string SolutionId = "solutionid";
		}
		public const string EntityLogicalName = "metadatadifference";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4231;
		public const string EntityCollectionSchemaName = "MetadataDifferences";
		public const string EntityDisplayCollectionName = "Khác biệt Siêu dữ liệu";
		public const string DisplayName = "Khác biệt Siêu dữ liệu";
		public const string EntitySetName = "metadatadifferences";
		public const string EntityLogicalCollectionName = "metadatadifferences";
		public const string EntityPrimaryIdAttribute = "metadatadifferenceid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "MetadataDifference";
		[DebuggerNonUserCode()]
		public MetadataDifference()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public MetadataDifference(Guid MetadataDifferenceId)
		{
			Entity = new Entity(EntityLogicalName, MetadataDifferenceId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public MetadataDifference(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="MetadataDifference"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public MetadataDifference(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="MetadataDifference"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public MetadataDifference(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new MetadataDifference(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="MetadataDifference"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public MetadataDifference(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new MetadataDifference(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public MetadataDifference(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo sự khác biệt siêu dữ liệu.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Khác biệt Xml</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DifferenceXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.DifferenceXml); }
			set { Entity.Attributes[Fields.DifferenceXml] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Phiên bản được Giới thiệu</para>
		/// <para><strong>Decimal Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? IntroducedVersion
		{
			get { return Entity.GetAttributeValue<double?>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chuỗi Phiên bản được Giới thiệu</para>
		/// <para><strong>Description</strong>: Phiên bản có giới thiệu sự khác biệt.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersionString
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersionString); }
			set { Entity.Attributes[Fields.IntroducedVersionString] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của sự khác biệt siêu dữ liệu.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid MetadataDifferenceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.MetadataDifferenceId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi lần cuối sự khác biệt siêu dữ liệu.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
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
	}
}