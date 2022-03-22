//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_appconfiguration_Information {
		interface tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5_Sections {
			_28CB2DAE_5039_40B7_8668_60CFD3AE02C5_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5 extends DevKit.Controls.ITab {
			Section: tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5_Sections;
		}
		interface Tabs {
			_28CB2DAE_5039_40B7_8668_60CFD3AE02C5: tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5;
		}
		interface Body {
			Tab: Tabs;
			msdyn_appmoduleuniquename: DevKit.Controls.String;
			msdyn_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ApplicationExtensions: DevKit.Controls.Grid;
			SessionTemplates: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_appconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_appconfiguration_Information */
		Body: DevKit.Formmsdyn_appconfiguration_Information.Body;
		/** The Process of form msdyn_appconfiguration_Information */
		Process: DevKit.Formmsdyn_appconfiguration_Information.Process;
		/** The Grid of form msdyn_appconfiguration_Information */
		Grid: DevKit.Formmsdyn_appconfiguration_Information.Grid;
		/** The SidePanes of form msdyn_appconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUsers {
		interface tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5_Sections {
			_F382C2D9_A6A4_4F04_B980_0C279221C813: DevKit.Controls.Section;
		}
		interface tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5 extends DevKit.Controls.ITab {
			Section: tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5_Sections;
		}
		interface Tabs {
			_28CB2DAE_5039_40B7_8668_60CFD3AE02C5: tab__28CB2DAE_5039_40B7_8668_60CFD3AE02C5;
		}
		interface Body {
			Tab: Tabs;
			msdyn_appmoduleuniquename: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Users: DevKit.Controls.Grid;
		}
	}
	class FormUsers extends DevKit.IForm {
		/**
		* Users [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Users */
		Body: DevKit.FormUsers.Body;
		/** The Process of form Users */
		Process: DevKit.FormUsers.Process;
		/** The Grid of form Users */
		Grid: DevKit.FormUsers.Grid;
		/** The SidePanes of form Users */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_appconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_appconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_appconfiguration.ComponentState;
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
		/** Unique identifier for entity instances */
		msdyn_appconfigurationId: string;
		msdyn_appmoduleuniquename: string;
		msdyn_description: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_productivitypaneuniquename: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the App Configuration */
		statecode: OptionSet.msdyn_appconfiguration.statecode;
		/** Reason for the status of the App Configuration */
		statuscode: OptionSet.msdyn_appconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_appconfiguration {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}