﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:52:40
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets
{
	public enum Status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Failed</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Failed = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: In progress</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		In_progress = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Queued</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Queued = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Success</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Success = 3
	}
	public enum StatusReason
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Analysis failed</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Analysis_failed = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Analyzing topic analysis execution</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Analyzing_topic_analysis_execution = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Connection failed</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Connection_failed = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Synchronization failed</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Synchronization_failed = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Topic analysis execution is queued</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Topic_analysis_execution_is_queued = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Topic analysis execution is synchronizing</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Topic_analysis_execution_is_synchronizing = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Topic analysis has built</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Topic_analysis_has_built = 4
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class TopicModelExecutionHistory : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ErrorDetails = "azuresyncerrormessage";
			public const string FetchXmlList = "fetchxmllist";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsTestExecution = "istestexecution";
			public const string MaxTopics = "maxtopics";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string NumberOfTopicsFound = "numberoftopicsfound";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string RecordCorrelationId = "recordcorrelationid";
			public const string RecordsProcessed = "recordsprocessed";
			public const string StartTime = "starttime";
			public const string Status = "status";
			public const string StatusReason = "statusreason";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TopicModelConfigurationId = "topicmodelconfigurationid";
			public const string TopicModelExecutionHistoryId = "topicmodelexecutionhistoryid";
			public const string TopicModelId = "topicmodelid";
			public const string TotalTime = "totaltime";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "topicmodelexecutionhistory";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9943;
		public const string EntityCollectionSchemaName = "TopicModelExecutionHistories";
		public const string EntityDisplayCollectionName = "Topic Model Execution Histories";
		public const string DisplayName = "Topic Model Execution History";
		public const string EntitySetName = "topicmodelexecutionhistories";
		public const string EntityLogicalCollectionName = "topicmodelexecutionhistories";
		public const string EntityPrimaryIdAttribute = "topicmodelexecutionhistoryid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "TopicModelExecutionHistory";
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory(Guid TopicModelExecutionHistoryId)
		{
			Entity = new Entity(EntityLogicalName, TopicModelExecutionHistoryId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TopicModelExecutionHistory"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="TopicModelExecutionHistory"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TopicModelExecutionHistory(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="TopicModelExecutionHistory"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public TopicModelExecutionHistory(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new TopicModelExecutionHistory(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public TopicModelExecutionHistory(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the topic model execution history.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
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
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the topic model execution history.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Error Details</para>
		/// <para><strong>Description</strong>: Detailed error message for the Topic Analysis process</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorDetails
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorDetails); }
			set { Entity.Attributes[Fields.ErrorDetails] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Fetch Xml</para>
		/// <para><strong>Description</strong>: Fetch Xml</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 500,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FetchXmlList
		{
			get { return Entity.GetAttributeValue<string>(Fields.FetchXmlList); }
			set { Entity.Attributes[Fields.FetchXmlList] = value; }
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
		/// <para><strong>Display Name</strong>: Test Execution</para>
		/// <para><strong>Description</strong>: Allow model to check is test executed.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsTestExecution
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsTestExecution); }
			set { Entity.Attributes[Fields.IsTestExecution] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Max Topics</para>
		/// <para><strong>Description</strong>: Maximum number of Topics.</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? MaxTopics
		{
			get { return Entity.GetAttributeValue<int?>(Fields.MaxTopics); }
			set { Entity.Attributes[Fields.MaxTopics] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the topic model execution history.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
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
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who last modified the topic model execution history.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: name</para>
		/// <para><strong>Description</strong>: name</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Number of Topics Identified</para>
		/// <para><strong>Description</strong>: Number of Topics Identified</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? NumberOfTopicsFound
		{
			get { return Entity.GetAttributeValue<int?>(Fields.NumberOfTopicsFound); }
			set { Entity.Attributes[Fields.NumberOfTopicsFound] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
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
		/// <para><strong>Display Name</strong>: Record Correlation Id</para>
		/// <para><strong>Description</strong>: Record Correlation Id.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RecordCorrelationId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RecordCorrelationId); }
			set { Entity.Attributes[Fields.RecordCorrelationId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Number of Records Synchronized</para>
		/// <para><strong>Description</strong>: Number of Records Synchronized</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RecordsProcessed
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RecordsProcessed); }
			set { Entity.Attributes[Fields.RecordsProcessed] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Start Time</para>
		/// <para><strong>Description</strong>: StartTime</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartTime); }
			set { Entity.Attributes[Fields.StartTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.Status"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.Status.Queued"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.Status? Status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.Status)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: StatusReason</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.StatusReason"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.StatusReason? StatusReason
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusReason);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TopicModelExecutionHistoryOptionSets.StatusReason)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusReason] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusReason] = null;
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
		/// <para><strong>Display Name</strong>: Topic Model Configuration</para>
		/// <para><strong>Description</strong>: Unique identifier for Model associated with Topic Model Execution History.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="topicmodelconfiguration"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TopicModelConfigurationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TopicModelConfigurationId); }
			set { Entity.Attributes[Fields.TopicModelConfigurationId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TopicModelExecutionHistory</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid TopicModelExecutionHistoryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.TopicModelExecutionHistoryId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: TopicModelId</para>
		/// <para><strong>Description</strong>: Unique identifier for Model associated with Topic Model Execution History.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="topicmodel"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TopicModelId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TopicModelId); }
			set { Entity.Attributes[Fields.TopicModelId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Duration (in mins)</para>
		/// <para><strong>Description</strong>: Duration (in mins)</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TotalTime
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TotalTime); }
			set { Entity.Attributes[Fields.TotalTime] = value; }
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
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version Number</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}