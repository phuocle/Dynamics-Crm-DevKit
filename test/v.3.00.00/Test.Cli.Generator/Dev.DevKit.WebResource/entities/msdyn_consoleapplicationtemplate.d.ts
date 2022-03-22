﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_consoleapplicationtemplate_Information {
		interface tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_Sections {
			_1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE extends DevKit.Controls.ITab {
			Section: tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_Sections;
		}
		interface Tabs {
			_1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE: tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the record */
			msdyn_description: DevKit.Controls.String;
			/** Display icon for the application. */
			msdyn_icon: DevKit.Controls.String;
			/** The name of the Application tab. */
			msdyn_name: DevKit.Controls.String;
			/** Type of the application. */
			msdyn_PageType: DevKit.Controls.Lookup;
			/** Whether this tab can be closed */
			msdyn_Pinned: DevKit.Controls.Boolean;
			/** The title of the application displayed on this application tab panel. */
			msdyn_Title: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_consoleapplicationtemplate_tags: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Parameters: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_consoleapplicationtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_consoleapplicationtemplate_Information */
		Body: DevKit.Formmsdyn_consoleapplicationtemplate_Information.Body;
		/** The Navigation of form msdyn_consoleapplicationtemplate_Information */
		Navigation: DevKit.Formmsdyn_consoleapplicationtemplate_Information.Navigation;
		/** The Process of form msdyn_consoleapplicationtemplate_Information */
		Process: DevKit.Formmsdyn_consoleapplicationtemplate_Information.Process;
		/** The Grid of form msdyn_consoleapplicationtemplate_Information */
		Grid: DevKit.Formmsdyn_consoleapplicationtemplate_Information.Grid;
		/** The SidePanes of form msdyn_consoleapplicationtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_consoleapplicationtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_consoleapplicationtemplateApi
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
		/** Unique identifier for entity instances */
		msdyn_consoleapplicationtemplateId: string;
		/** Description of the record */
		msdyn_description: string;
		/** Display icon for the application. */
		msdyn_icon: string;
		/** Boolean value to indicate whether or not an entity is stale */
		msdyn_IsStale: boolean;
		/** The name of the Application tab. */
		msdyn_name: string;
		/** Type of the application. */
		msdyn_PageType: string;
		/** Whether this tab can be closed */
		msdyn_Pinned: boolean;
		/** A JSON string with all pageType parameters with template values provided */
		msdyn_TemplateParameters: string;
		/** The title of the application displayed on this application tab panel. */
		msdyn_Title: string;
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
		/** Status of the Application Tab Template */
		statecode: OptionSet.msdyn_consoleapplicationtemplate.statecode;
		/** Reason for the status of the Application Tab Template */
		statuscode: OptionSet.msdyn_consoleapplicationtemplate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_consoleapplicationtemplate {
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