//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_KPIEventData_Information {
		interface Tabs {
		}
		interface Body {
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_KPIEventData_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_KPIEventData_Information */
		Body: DevKit.Formmsdyn_KPIEventData_Information.Body;
		/** The Navigation of form msdyn_KPIEventData_Information */
		Navigation: DevKit.Formmsdyn_KPIEventData_Information.Navigation;
		/** The SidePanes of form msdyn_KPIEventData_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_KPIEventDataApi {
		/**
		* DynamicsCrm.DevKit msdyn_KPIEventDataApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Additional data related to the kpi event */
		msdyn_AdditionalData: string;
		/** Unique identifier for Channel Integration Framework session */
		msdyn_cifSessionId: string;
		/** Client session identifier */
		msdyn_ClientSessionId: string;
		/** Conversation Identifier */
		msdyn_ConversationId: string;
		/** Custom Attribute 1 */
		msdyn_CustomAttribute1: string;
		/** Custom Attribute 2 */
		msdyn_CustomAttribute2: string;
		/** Custom Attribute 3 */
		msdyn_CustomAttribute3: string;
		/** Custom Attribute 4 */
		msdyn_CustomAttribute4: string;
		/** Custom Attribute 5 */
		msdyn_CustomAttribute5: string;
		/** Timestamp at which the event occurred */
		msdyn_EventTimestamp_UtcDateAndTime: Date;
		/** External System Correlation Id */
		msdyn_ExternalCorrelationId: string;
		/** Unique identifier for entity instances */
		msdyn_KPIEventDataId: string;
		/** Unique identifier for the KPI Event */
		msdyn_KPIEventId: string;
		/** Name of the  associated KPI event */
		msdyn_KPIEventName: string;
		/** Reason due to which the KPI event was created */
		msdyn_KPIEventReason: string;
		/** Required name field */
		msdyn_Name: string;
		/** Identifier of the agent for whom the event was fired */
		msdyn_ParticipantId: string;
		/** Unique identifier of the Provider that triggered this event */
		msdyn_ProviderId: string;
		/** Unique identifier of the provider session */
		msdyn_ProviderSessionId: string;
		/** Unique identifier for session */
		msdyn_sessionId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the KPI Event Data */
		statecode: OptionSet.msdyn_KPIEventData.statecode;
		/** Reason for the status of the KPI Event Data */
		statuscode: OptionSet.msdyn_KPIEventData.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Additional data related to the kpi event */
			readonly msdyn_AdditionalData: string;
			/** Unique identifier for Channel Integration Framework session */
			readonly msdyn_cifSessionId: string;
			/** Client session identifier */
			readonly msdyn_ClientSessionId: string;
			/** Conversation Identifier */
			readonly msdyn_ConversationId: string;
			/** Custom Attribute 1 */
			readonly msdyn_CustomAttribute1: string;
			/** Custom Attribute 2 */
			readonly msdyn_CustomAttribute2: string;
			/** Custom Attribute 3 */
			readonly msdyn_CustomAttribute3: string;
			/** Custom Attribute 4 */
			readonly msdyn_CustomAttribute4: string;
			/** Custom Attribute 5 */
			readonly msdyn_CustomAttribute5: string;
			/** Timestamp at which the event occurred */
			readonly msdyn_EventTimestamp_UtcDateAndTime: string;
			/** External System Correlation Id */
			readonly msdyn_ExternalCorrelationId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_KPIEventDataId: string;
			/** Unique identifier for the KPI Event */
			readonly msdyn_KPIEventId: string;
			/** Name of the  associated KPI event */
			readonly msdyn_KPIEventName: string;
			/** Reason due to which the KPI event was created */
			readonly msdyn_KPIEventReason: string;
			/** Required name field */
			readonly msdyn_Name: string;
			/** Identifier of the agent for whom the event was fired */
			readonly msdyn_ParticipantId: string;
			/** Unique identifier of the Provider that triggered this event */
			readonly msdyn_ProviderId: string;
			/** Unique identifier of the provider session */
			readonly msdyn_ProviderSessionId: string;
			/** Unique identifier for session */
			readonly msdyn_sessionId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the KPI Event Data */
			readonly statecode: string;
			/** Reason for the status of the KPI Event Data */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_KPIEventData {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}