﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets
{
	public enum msdyn_RecommendationType
	{
		/// <summary>
		/// Incident Type = 192350002
		/// </summary>
		Incident_Type = 192350002,
		/// <summary>
		/// Work Order Product = 192350000
		/// </summary>
		Work_Order_Product = 192350000,
		/// <summary>
		/// Work Order Service = 192350001
		/// </summary>
		Work_Order_Service = 192350001
	}

	public enum statecode
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

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Applied = 192350001
		/// </summary>
		Applied = 192350001,
		/// <summary>
		/// Disliked = 192350000
		/// </summary>
		Disliked = 192350000,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyn_incidenttyperecommendationresult : EntityBase
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
			public const string msdyn_IncidentType = "msdyn_incidenttype";
			public const string msdyn_IncidentTypeForMerge = "msdyn_incidenttypeformerge";
			public const string msdyn_IncidentTypeId = "msdyn_incidenttypeid";
			public const string msdyn_IncidentTypeIdForMerge = "msdyn_incidenttypeidformerge";
			public const string msdyn_incidenttyperecommendationresultId = "msdyn_incidenttyperecommendationresultid";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_OccurrenceTimes = "msdyn_occurrencetimes";
			public const string msdyn_ProductService = "msdyn_productservice";
			public const string msdyn_ProductServiceId = "msdyn_productserviceid";
			public const string msdyn_RecommendationDescription = "msdyn_recommendationdescription";
			public const string msdyn_RecommendationType = "msdyn_recommendationtype";
			public const string msdyn_RunHistoryId = "msdyn_runhistoryid";
			public const string msdyn_RunId = "msdyn_runid";
			public const string msdyn_ScoreRanking = "msdyn_scoreranking";
			public const string msdyn_SuggestedValue = "msdyn_suggestedvalue";
			public const string msdyn_TotalOccurrenceTimes = "msdyn_totaloccurrencetimes";
			public const string msdyn_Unit = "msdyn_unit";
			public const string msdyn_UnitId = "msdyn_unitid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_incidenttyperecommendationresult";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10567;

		[DebuggerNonUserCode()]
		public msdyn_incidenttyperecommendationresult()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_incidenttyperecommendationresult(Guid msdyn_incidenttyperecommendationresultId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_incidenttyperecommendationresultId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_incidenttyperecommendationresult(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_incidenttyperecommendationresult(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_incidenttyperecommendationresult(Entity entity, Entity merge)
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
		public msdyn_incidenttyperecommendationresult(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
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
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
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
		/// <para>Unique identifier of the user who modified the record.</para>
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
		/// <para>Unique identifier of the delegate user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Shows the incident related to this suggestion result.</para>
		/// <para>Lookup to msdyn_incidenttype</para>
		/// <para>Incident Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_IncidentType
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_IncidentType); }
			set { Entity.Attributes[Fields.msdyn_IncidentType] = value; }
		}

		/// <summary>
		/// <para>Shows the incident (for merge) related to this suggestion result.</para>
		/// <para>Lookup to msdyn_incidenttype</para>
		/// <para>Incident Type (For Merge)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_IncidentTypeForMerge
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_IncidentTypeForMerge); }
			set { Entity.Attributes[Fields.msdyn_IncidentTypeForMerge] = value; }
		}

		/// <summary>
		/// <para>Shows unique identifier of an incident type.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Incident Type Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_IncidentTypeId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_IncidentTypeId); }
			set { Entity.Attributes[Fields.msdyn_IncidentTypeId] = value; }
		}

		/// <summary>
		/// <para>Shows unique identifier of an incident (for merge).</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Incident Type Id (For Merge)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_IncidentTypeIdForMerge
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_IncidentTypeIdForMerge); }
			set { Entity.Attributes[Fields.msdyn_IncidentTypeIdForMerge] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Incident Type Suggestion Result</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_incidenttyperecommendationresultId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_incidenttyperecommendationresultId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Shows the occurrence times of the related incident type.</para>
		/// <para>Required - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Occurrence Times</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_OccurrenceTimes
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_OccurrenceTimes); }
			set { Entity.Attributes[Fields.msdyn_OccurrenceTimes] = value; }
		}

		/// <summary>
		/// <para>Shows the product related to this suggestion result.</para>
		/// <para>Lookup to product</para>
		/// <para>Product/Service</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_ProductService
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_ProductService); }
			set { Entity.Attributes[Fields.msdyn_ProductService] = value; }
		}

		/// <summary>
		/// <para>Shows unique identifier of a product.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Product/Service Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ProductServiceId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ProductServiceId); }
			set { Entity.Attributes[Fields.msdyn_ProductServiceId] = value; }
		}

		/// <summary>
		/// <para>Shows the suggestion description.</para>
		/// <para>Memo - MaxLength: 8000</para>
		/// <para>Suggestion Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RecommendationDescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RecommendationDescription); }
			set { Entity.Attributes[Fields.msdyn_RecommendationDescription] = value; }
		}

		/// <summary>
		/// <para>Shows the type of incident type suggestion.</para>
		/// <para>Required - Picklist</para>
		/// <para>Suggestion Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.msdyn_RecommendationType? msdyn_RecommendationType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_RecommendationType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.msdyn_RecommendationType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_RecommendationType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_RecommendationType] = null;
			}
		}

		/// <summary>
		/// <para>Id of Incident Type Suggestion Run History</para>
		/// <para>Lookup to msdyn_incidenttyperecommendationrunhistory</para>
		/// <para>Run History Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_RunHistoryId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_RunHistoryId); }
			set { Entity.Attributes[Fields.msdyn_RunHistoryId] = value; }
		}

		/// <summary>
		/// <para>Shows unique identifier of the related run job.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Run Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RunId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RunId); }
			set { Entity.Attributes[Fields.msdyn_RunId] = value; }
		}

		/// <summary>
		/// <para>Shows the score ranking of the result.</para>
		/// <para>Required - Integer - MinValue: 0 - MaxValue: 1,000</para>
		/// <para>Score Ranking</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ScoreRanking
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ScoreRanking); }
			set { Entity.Attributes[Fields.msdyn_ScoreRanking] = value; }
		}

		/// <summary>
		/// <para>Shows the suggested value of product quantity or service duration.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Suggested Value</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_SuggestedValue
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_SuggestedValue); }
			set { Entity.Attributes[Fields.msdyn_SuggestedValue] = value; }
		}

		/// <summary>
		/// <para>Shows the total occurrence times of the related incident type.</para>
		/// <para>Required - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Total Occurrence Times</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_TotalOccurrenceTimes
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_TotalOccurrenceTimes); }
			set { Entity.Attributes[Fields.msdyn_TotalOccurrenceTimes] = value; }
		}

		/// <summary>
		/// <para>The unit that determines the pricing and final quantity for this product or service.</para>
		/// <para>Lookup to uom</para>
		/// <para>Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Unit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Unit); }
			set { Entity.Attributes[Fields.msdyn_Unit] = value; }
		}

		/// <summary>
		/// <para>Shows unique identifier of the unit.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Unit Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_UnitId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_UnitId); }
			set { Entity.Attributes[Fields.msdyn_UnitId] = value; }
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
		/// <para>Owner Id</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the business unit that owns the record</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Status of the Incident Type Suggestion Result</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Incident Type Suggestion Result</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_incidenttyperecommendationresultOptionSets.statuscode)value.Value;
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