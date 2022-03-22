//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUoM_Information {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUoM_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UoM_Information */
		Body: DevKit.FormUoM_Information.Body;
		/** The Process of form UoM_Information */
		Process: DevKit.FormUoM_Information.Process;
		/** The SidePanes of form UoM_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUnit_of_Measure_Quick_Create {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
	}
	class FormUnit_of_Measure_Quick_Create extends DevKit.IForm {
		/**
		* Unit of Measure Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Unit_of_Measure_Quick_Create */
		Body: DevKit.FormUnit_of_Measure_Quick_Create.Body;
	}
	class UoMApi {
		/**
		* DynamicsCrm.DevKit UoMApi
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
		/** Choose the base or primary unit on which the unit is based. */
		BaseUoM: string;
		/** Unique identifier of the user who created the unit. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the unit was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the uom. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Tells whether the unit is the base unit for the associated unit group. */
		readonly IsScheduleBaseUoM: boolean;
		/** Unique identifier of the user who last modified the unit. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the unit was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the uom. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive title or name for the unit of measure. */
		Name: string;
		/** Unique identifier of the organization associated with the unit of measure. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unit quantity for the product. */
		Quantity: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the unit. */
		UoMId: string;
		/** Choose the ID of the unit group that the unit is associated with. */
		UoMScheduleId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace UoM {
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