//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_copilotsummarizationsetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_copilotsummarizationsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_copilotsummarizationsetting_Information */
		Body: DevKit.Formmsdyn_copilotsummarizationsetting_Information.Body;
		/** The Navigation of form msdyn_copilotsummarizationsetting_Information */
		Navigation: DevKit.Formmsdyn_copilotsummarizationsetting_Information.Navigation;
		/** The SidePanes of form msdyn_copilotsummarizationsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_copilotsummarizationsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_copilotsummarizationsettingApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_copilotsummarizationsetting.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_allowcreatecase: boolean;
		msdyn_allowcrossgeo: boolean;
		msdyn_allowtranslation: boolean;
		msdyn_autoenabled: boolean;
		msdyn_autoenableddone: boolean;
		msdyn_casesummaryconfiguration: string;
		msdyn_casesummaryenabled: boolean;
		/** The date when the admin has most recently consented */
		msdyn_consentacceptedon_UtcDateAndTime: Date;
		msdyn_conversationsummaryconfiguration: string;
		/** Unique identifier for entity instances */
		msdyn_copilotsummarizationsettingId: string;
		msdyn_enabled: boolean;
		msdyn_featureaccessrolelist: string;
		msdyn_interactionsenabled: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_ondemandenabled: boolean;
		msdyn_systemmetadata: string;
		msdyn_useagentlanguage: boolean;
		msdyn_whenagentjoinsenabled: boolean;
		msdyn_whenconversationendsenabled: boolean;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Copilot Summarization Setting */
		statecode: OptionSet.msdyn_copilotsummarizationsetting.statecode;
		/** Reason for the status of the Copilot Summarization Setting */
		statuscode: OptionSet.msdyn_copilotsummarizationsetting.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_allowcreatecase: string;
			readonly msdyn_allowcrossgeo: string;
			readonly msdyn_allowtranslation: string;
			readonly msdyn_autoenabled: string;
			readonly msdyn_autoenableddone: string;
			readonly msdyn_casesummaryconfiguration: string;
			readonly msdyn_casesummaryenabled: string;
			/** The date when the admin has most recently consented */
			readonly msdyn_consentacceptedon_UtcDateAndTime: string;
			readonly msdyn_conversationsummaryconfiguration: string;
			/** Unique identifier for entity instances */
			readonly msdyn_copilotsummarizationsettingId: string;
			readonly msdyn_enabled: string;
			readonly msdyn_featureaccessrolelist: string;
			readonly msdyn_interactionsenabled: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_ondemandenabled: string;
			readonly msdyn_systemmetadata: string;
			readonly msdyn_useagentlanguage: string;
			readonly msdyn_whenagentjoinsenabled: string;
			readonly msdyn_whenconversationendsenabled: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Copilot Summarization Setting */
			readonly statecode: string;
			/** Reason for the status of the Copilot Summarization Setting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_copilotsummarizationsetting {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
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