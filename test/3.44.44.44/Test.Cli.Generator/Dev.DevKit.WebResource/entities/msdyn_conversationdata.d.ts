﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_conversationdata_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_conversationdata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationdata_Information */
		Body: DevKit.Formmsdyn_conversationdata_Information.Body;
		/** The Navigation of form msdyn_conversationdata_Information */
		Navigation: DevKit.Formmsdyn_conversationdata_Information.Navigation;
		/** The SidePanes of form msdyn_conversationdata_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_conversationdataApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationdataApi
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
		/** Account unique identifier */
		msdyn_AccountId: string;
		/** Additional data related to the conversation */
		msdyn_AdditionalData: string;
		/** Conversation channel */
		msdyn_Channel: string;
		/** Contact unique identifier */
		msdyn_ContactId: string;
		/** Unique identifier for entity instances */
		msdyn_conversationdataId: string;
		/** Conversation identifier */
		msdyn_ConversationId: string;
		/** Conversation started time */
		msdyn_ConversationTimestamp_UtcDateAndTime: Date;
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
		/** City name for customer address */
		msdyn_customerCity: string;
		/** Country name for customer address */
		msdyn_customerCountry: string;
		/** State name for customer address */
		msdyn_customerState: string;
		/** Zip for customer address */
		msdyn_customerZip: string;
		/** External System Correlation Id */
		msdyn_ExternalCorrelationId: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Name of the primary entity to which this work item belongs to */
		msdyn_PrimaryRelatedEntityName: string;
		/** Id of the primary entity to which this work item belongs to */
		msdyn_PrimaryRelatedEntityRecordId: string;
		/** Channel Integration Framework Provider Id */
		msdyn_ProviderId: string;
		/** Channel Integration Framework Provider Name */
		msdyn_ProviderName: string;
		/** Conversation origin region information */
		msdyn_Region: string;
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
		/** Status of the ConversationData */
		statecode: OptionSet.msdyn_conversationdata.statecode;
		/** Reason for the status of the ConversationData */
		statuscode: OptionSet.msdyn_conversationdata.statuscode;
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
			/** Account unique identifier */
			readonly msdyn_AccountId: string;
			/** Additional data related to the conversation */
			readonly msdyn_AdditionalData: string;
			/** Conversation channel */
			readonly msdyn_Channel: string;
			/** Contact unique identifier */
			readonly msdyn_ContactId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_conversationdataId: string;
			/** Conversation identifier */
			readonly msdyn_ConversationId: string;
			/** Conversation started time */
			readonly msdyn_ConversationTimestamp_UtcDateAndTime: string;
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
			/** City name for customer address */
			readonly msdyn_customerCity: string;
			/** Country name for customer address */
			readonly msdyn_customerCountry: string;
			/** State name for customer address */
			readonly msdyn_customerState: string;
			/** Zip for customer address */
			readonly msdyn_customerZip: string;
			/** External System Correlation Id */
			readonly msdyn_ExternalCorrelationId: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Name of the primary entity to which this work item belongs to */
			readonly msdyn_PrimaryRelatedEntityName: string;
			/** Id of the primary entity to which this work item belongs to */
			readonly msdyn_PrimaryRelatedEntityRecordId: string;
			/** Channel Integration Framework Provider Id */
			readonly msdyn_ProviderId: string;
			/** Channel Integration Framework Provider Name */
			readonly msdyn_ProviderName: string;
			/** Conversation origin region information */
			readonly msdyn_Region: string;
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
			/** Status of the ConversationData */
			readonly statecode: string;
			/** Reason for the status of the ConversationData */
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
	namespace msdyn_conversationdata {
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