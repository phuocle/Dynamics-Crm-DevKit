﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:47:33
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_attributedataprofile : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_attributedataprofile_attributename = "msdyn_attributedataprofile_attributename";
			public const string msdyn_attributedataprofile_checkifexactstats = "msdyn_attributedataprofile_checkifexactstats";
			public const string msdyn_attributedataprofile_count = "msdyn_attributedataprofile_count";
			public const string msdyn_attributedataprofile_errorcount = "msdyn_attributedataprofile_errorcount";
			public const string msdyn_attributedataprofile_histogramserialized = "msdyn_attributedataprofile_histogramserialized";
			public const string msdyn_attributedataprofile_max = "msdyn_attributedataprofile_max";
			public const string msdyn_attributedataprofile_min = "msdyn_attributedataprofile_min";
			public const string msdyn_attributedataprofile_missingcount = "msdyn_attributedataprofile_missingcount";
			public const string msdyn_attributedataprofile_momentskurtosis = "msdyn_attributedataprofile_momentskurtosis";
			public const string msdyn_attributedataprofile_momentsmean = "msdyn_attributedataprofile_momentsmean";
			public const string msdyn_attributedataprofile_momentsskewness = "msdyn_attributedataprofile_momentsskewness";
			public const string msdyn_attributedataprofile_momentsstddeviation = "msdyn_attributedataprofile_momentsstddeviation";
			public const string msdyn_attributedataprofile_momentsvariance = "msdyn_attributedataprofile_momentsvariance";
			public const string msdyn_attributedataprofile_pk = "msdyn_attributedataprofile_pk";
			public const string msdyn_attributedataprofile_profilingdate = "msdyn_attributedataprofile_profilingdate";
			public const string msdyn_attributedataprofile_qualifiedentityname = "msdyn_attributedataprofile_qualifiedentityname";
			public const string msdyn_attributedataprofile_quantilesp0d1 = "msdyn_attributedataprofile_quantilesp0d1";
			public const string msdyn_attributedataprofile_quantilesp1 = "msdyn_attributedataprofile_quantilesp1";
			public const string msdyn_attributedataprofile_quantilesp25 = "msdyn_attributedataprofile_quantilesp25";
			public const string msdyn_attributedataprofile_quantilesp5 = "msdyn_attributedataprofile_quantilesp5";
			public const string msdyn_attributedataprofile_quantilesp50 = "msdyn_attributedataprofile_quantilesp50";
			public const string msdyn_attributedataprofile_quantilesp75 = "msdyn_attributedataprofile_quantilesp75";
			public const string msdyn_attributedataprofile_quantilesp95 = "msdyn_attributedataprofile_quantilesp95";
			public const string msdyn_attributedataprofile_quantilesp99 = "msdyn_attributedataprofile_quantilesp99";
			public const string msdyn_attributedataprofile_quantilesp99d9 = "msdyn_attributedataprofile_quantilesp99d9";
			public const string msdyn_attributedataprofile_topkserialized = "msdyn_attributedataprofile_topkserialized";
			public const string msdyn_attributedataprofile_uniquevaluecount = "msdyn_attributedataprofile_uniquevaluecount";
			public const string msdyn_attributedataprofileId = "msdyn_attributedataprofileid";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
		}
		public const string EntityLogicalName = "msdyn_attributedataprofile";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11458;
		public const string EntityCollectionSchemaName = "msdyn_attributedataprofiles";
		public const string EntityDisplayCollectionName = "AttributeDataProfiles";
		public const string DisplayName = "AttributeDataProfile";
		public const string EntitySetName = "msdyn_attributedataprofiles";
		public const string EntityLogicalCollectionName = "msdyn_attributedataprofiles";
		public const string EntityPrimaryIdAttribute = "msdyn_attributedataprofileid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_attributedataprofile_pk";
		public const string EntitySchemaName = "msdyn_attributedataprofile";
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile(Guid msdyn_attributedataprofileId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_attributedataprofileId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_attributedataprofile"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_attributedataprofile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_attributedataprofile(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_attributedataprofile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_attributedataprofile(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_attributedataprofile(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_attributedataprofile(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: AttributeName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_attributedataprofile_attributename
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_attributedataprofile_attributename); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_attributename] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: CheckIfExactStats</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_attributedataprofile_checkifexactstats
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_attributedataprofile_checkifexactstats); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_checkifexactstats] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Count</para>
		/// <para><strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? msdyn_attributedataprofile_count
		{
			get { return Entity.GetAttributeValue<long?>(Fields.msdyn_attributedataprofile_count); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_count] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ErrorCount</para>
		/// <para><strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? msdyn_attributedataprofile_errorcount
		{
			get { return Entity.GetAttributeValue<long?>(Fields.msdyn_attributedataprofile_errorcount); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_errorcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: HistogramSerialized</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_attributedataprofile_histogramserialized
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_attributedataprofile_histogramserialized); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_histogramserialized] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Max</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_max
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_max); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_max] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Min</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_min
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_min); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_min] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MissingCount</para>
		/// <para><strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? msdyn_attributedataprofile_missingcount
		{
			get { return Entity.GetAttributeValue<long?>(Fields.msdyn_attributedataprofile_missingcount); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_missingcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MomentsKurtosis</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_momentskurtosis
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_momentskurtosis); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_momentskurtosis] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MomentsMean</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_momentsmean
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_momentsmean); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_momentsmean] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MomentsSkewness</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_momentsskewness
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_momentsskewness); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_momentsskewness] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MomentsStandardDeviation</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_momentsstddeviation
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_momentsstddeviation); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_momentsstddeviation] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: MomentsVariance</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_momentsvariance
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_momentsvariance); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_momentsvariance] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: PrimaryKey</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_attributedataprofile_pk
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_attributedataprofile_pk); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_pk] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ProfilingDate</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_attributedataprofile_profilingdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_attributedataprofile_profilingdate); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_profilingdate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QualifiedEntityName</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_attributedataprofile_qualifiedentityname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_attributedataprofile_qualifiedentityname); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_qualifiedentityname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP0D1</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp0d1
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp0d1); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp0d1] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP1</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp1
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp1); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp1] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP25</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp25
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp25); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp25] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP5</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp5
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp5); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp5] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP50</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp50
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp50); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp50] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP75</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp75
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp75); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp75] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP95</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp95
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp95); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp95] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP99</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp99
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp99); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp99] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: QuantilesP99D9</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>: -100,000,000,000 - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_attributedataprofile_quantilesp99d9
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_attributedataprofile_quantilesp99d9); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_quantilesp99d9] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TopKSerialized</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_attributedataprofile_topkserialized
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_attributedataprofile_topkserialized); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_topkserialized] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UniqueValueCount</para>
		/// <para><strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? msdyn_attributedataprofile_uniquevaluecount
		{
			get { return Entity.GetAttributeValue<long?>(Fields.msdyn_attributedataprofile_uniquevaluecount); }
			set { Entity.Attributes[Fields.msdyn_attributedataprofile_uniquevaluecount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: AttributeDataProfile</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_attributedataprofileId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_attributedataprofileId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the AttributeDataProfile</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the AttributeDataProfile</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_attributedataprofileOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Time Zone Rule Version Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
	}
}