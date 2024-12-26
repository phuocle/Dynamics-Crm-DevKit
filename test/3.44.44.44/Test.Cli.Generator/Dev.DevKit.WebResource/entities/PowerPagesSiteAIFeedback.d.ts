//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSubmit_Feedback {
		interface Tabs {
		}
		interface Body {
			Feedback: DevKit.Controls.OptionSet;
			Name: DevKit.Controls.String;
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for down */
			Reason: DevKit.Controls.String;
			Response: DevKit.Controls.String;
			UserPrompt: DevKit.Controls.String;
			WebsiteDomain: DevKit.Controls.String;
			WebsiteId: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormSubmit_Feedback extends DevKit.IForm {
		/**
		* Submit Feedback [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Submit_Feedback */
		Body: DevKit.FormSubmit_Feedback.Body;
		/** The Navigation of form Submit_Feedback */
		Navigation: DevKit.FormSubmit_Feedback.Navigation;
		/** The SidePanes of form Submit_Feedback */
		SidePanes: DevKit.SidePanes;
	}
	class PowerPagesSiteAIFeedbackApi {
		/**
		* DynamicsCrm.DevKit PowerPagesSiteAIFeedbackApi
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
		Contact: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		Feedback: OptionSet.PowerPagesSiteAIFeedback.Feedback;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		Name: string;
		Origin: string;
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
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Unique identifier for entity instances */
		PowerPagesSiteAIFeedbackId: string;
		/** Unique identifier for entity instances */
		PowerPagesSiteAIFeedbackName: string;
		/** Reason for down */
		Reason: string;
		Response: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		UserPrompt: string;
		/** Version Number */
		readonly VersionNumber: number;
		WebsiteDomain: string;
		WebsiteId: string;
		readonly FormattedValue: {
			readonly Contact: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly Feedback: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
			readonly Origin: string;
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
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Unique identifier for entity instances */
			readonly PowerPagesSiteAIFeedbackId: string;
			/** Unique identifier for entity instances */
			readonly PowerPagesSiteAIFeedbackName: string;
			/** Reason for down */
			readonly Reason: string;
			readonly Response: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			readonly UserPrompt: string;
			/** Version Number */
			readonly VersionNumber: string;
			readonly WebsiteDomain: string;
			readonly WebsiteId: string;
		}
	}
}
declare namespace OptionSet {
	namespace PowerPagesSiteAIFeedback {
		enum Feedback {
			/** 195620001 */
			Down,
			/** 195620000 */
			Up
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