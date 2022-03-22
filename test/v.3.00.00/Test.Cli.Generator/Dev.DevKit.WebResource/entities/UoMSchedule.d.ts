//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUoMSchedule_Information {
		interface tab_general_Sections {
			uom_schedule_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Name of the base unit. */
			BaseUoMName: DevKit.Controls.String;
			/** Description of the unit group. */
			Description: DevKit.Controls.String;
			/** Name of the unit group. */
			Name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUoMSchedule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UoMSchedule_Information */
		Body: DevKit.FormUoMSchedule_Information.Body;
		/** The Process of form UoMSchedule_Information */
		Process: DevKit.FormUoMSchedule_Information.Process;
		/** The SidePanes of form UoMSchedule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UoMScheduleApi {
		/**
		* DynamicsCrm.DevKit UoMScheduleApi
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
		/** Name of the base unit. */
		BaseUoMName: string;
		/** Unique identifier of the user who created the unit group. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the unit group was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the uomschedule. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the unit group. */
		Description: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who last modified the unit group. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the unit group was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the uomschedule. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the unit group. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Unit Group. */
		StateCode: OptionSet.UoMSchedule.StateCode;
		/** Reason for the status of the Unit Group. */
		StatusCode: OptionSet.UoMSchedule.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier for the unit group. */
		UoMScheduleId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace UoMSchedule {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}