﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.TopicModelOptionSets
{
	public enum SourceEntity
	{
		/// <summary>
		/// Case = 112
		/// </summary>
		Case = 112
	}

	public enum StateCode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1
	}

	public enum StatusCode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class TopicModel : EntityBase
	{
		public struct Fields
		{
			public const string AvgNumberofTopics = "avgnumberoftopics";
			public const string AzureSchedulerJobName = "azureschedulerjobname";
			public const string AzureSchedulerOnDemandJobName = "azureschedulerondemandjobname";
			public const string AzureSchedulerTestJobName = "azureschedulertestjobname";
			public const string AzureServiceConnectionId = "azureserviceconnectionid";
			public const string BuildRecurrence = "buildrecurrence";
			public const string ConfigurationUsed = "configurationused";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string EndTime = "endtime";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string MaxNumberofTopics = "maxnumberoftopics";
			public const string MaxTopics = "maxtopics";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string SourceEntity = "sourceentity";
			public const string StartTime = "starttime";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TopicModelId = "topicmodelid";
			public const string TopicsLastCreatedOn = "topicslastcreatedon";
			public const string TotalTopicsFound = "totaltopicsfound";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "topicmodel";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9944;

		[DebuggerNonUserCode()]
		public TopicModel()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TopicModel(Guid TopicModelId)
		{
			Entity = new Entity(EntityLogicalName, TopicModelId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TopicModel(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TopicModel(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TopicModel(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public TopicModel(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Shows the average number of topics found per build.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>Average Number of Topics per Build</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AvgNumberofTopics
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AvgNumberofTopics); }
			set { Entity.Attributes[Fields.AvgNumberofTopics] = value; }
		}

		/// <summary>
		/// <para>Azure Scheduler Job Name.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>AzureSchedulerJobName</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AzureSchedulerJobName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AzureSchedulerJobName); }
			set { Entity.Attributes[Fields.AzureSchedulerJobName] = value; }
		}

		/// <summary>
		/// <para>Azure Scheduler Job Name for build model</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Scheduler Build Job</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AzureSchedulerOnDemandJobName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AzureSchedulerOnDemandJobName); }
			set { Entity.Attributes[Fields.AzureSchedulerOnDemandJobName] = value; }
		}

		/// <summary>
		/// <para>Azure Scheduler Job Name for test model</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Scheduler Test Job</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AzureSchedulerTestJobName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AzureSchedulerTestJobName); }
			set { Entity.Attributes[Fields.AzureSchedulerTestJobName] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for AzureServiceConnection associated with TopicModel.</para>
		/// <para>Required - Lookup to azureserviceconnection</para>
		/// <para>Connection</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AzureServiceConnectionId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AzureServiceConnectionId); }
			set { Entity.Attributes[Fields.AzureServiceConnectionId] = value; }
		}

		/// <summary>
		/// <para>Shows how frequently topic analysis is done.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Build Recurrence</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string BuildRecurrence
		{
			get { return Entity.GetAttributeValue<string>(Fields.BuildRecurrence); }
			set { Entity.Attributes[Fields.BuildRecurrence] = value; }
		}

		/// <summary>
		/// <para>Shows the configuration used for topic analysis.</para>
		/// <para>Lookup to topicmodelconfiguration</para>
		/// <para>Configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ConfigurationUsed
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ConfigurationUsed); }
			set { Entity.Attributes[Fields.ConfigurationUsed] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the Topic Model.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the topic Model.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter a description for the model.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Shows the time when topic analysis will stop</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>End Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EndTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EndTime); }
			set { Entity.Attributes[Fields.EndTime] = value; }
		}

		/// <summary>
		/// <para>Sequence number of the import that created this record.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}

		/// <summary>
		/// <para>Shows the maximum number of topics found across builds.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>Maximum Topics Found Across Builds</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? MaxNumberofTopics
		{
			get { return Entity.GetAttributeValue<int?>(Fields.MaxNumberofTopics); }
			set { Entity.Attributes[Fields.MaxNumberofTopics] = value; }
		}

		/// <summary>
		/// <para>Shows the maximum number of topics to be determined.</para>
		/// <para>Required - Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>Maximum Topics</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? MaxTopics
		{
			get { return Entity.GetAttributeValue<int?>(Fields.MaxTopics); }
			set { Entity.Attributes[Fields.MaxTopics] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the Topic Model.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the Topic model.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Shows the name of the topic model.</para>
		/// <para>Required - String - MaxLength: 160</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Date and time that the record was migrated.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Shows the entity whose records are used for topic analysis.</para>
		/// <para>Required - EntityName</para>
		/// <para>Source Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SourceEntity
		{
			get { return Entity.GetAttributeValue<string>(Fields.SourceEntity); }
			set { Entity.Attributes[Fields.SourceEntity] = value; }
		}

		/// <summary>
		/// <para>Shows the time when topic analysis will start according to the recurrence schedule.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Start Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartTime); }
			set { Entity.Attributes[Fields.StartTime] = value; }
		}

		/// <summary>
		/// <para>Shows the status of the topic model build</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TopicModelOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TopicModelOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		/// <summary>
		/// <para>Reason for the status of the TopicModel</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.TopicModelOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.TopicModelOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>TopicModel</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid TopicModelId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.TopicModelId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows when the topics were last created.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Topics Last Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? TopicsLastCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.TopicsLastCreatedOn); }
			set { Entity.Attributes[Fields.TopicsLastCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Shows the total number of topics found.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>Total Topics Found</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TotalTopicsFound
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TotalTopicsFound); }
			set { Entity.Attributes[Fields.TotalTopicsFound] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}

		/// <summary>
		/// <para>Version Number</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}
