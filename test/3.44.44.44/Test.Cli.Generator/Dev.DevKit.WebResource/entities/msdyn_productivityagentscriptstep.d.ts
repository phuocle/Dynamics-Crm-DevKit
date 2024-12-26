//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivityagentscriptstep_Information {
		interface Tabs {
		}
		interface Body {
			/** Action type for agent script step */
			msdyn_actiontype: DevKit.Controls.OptionSet;
			/** Unique identifier for agent script associated with agent script step. */
			msdyn_agentscriptid: DevKit.Controls.Lookup;
			/** Description for agent script step */
			msdyn_description: DevKit.Controls.String;
			/** Unique identifier for macro associated with agent script step */
			msdyn_macroactionid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Display order */
			msdyn_order: DevKit.Controls.Integer;
			/** Unique identifier for target script associated with agent script step */
			msdyn_routeactionid: DevKit.Controls.Lookup;
			/** Instruction for text action type */
			msdyn_textinstruction: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_productivityagentscriptstep_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivityagentscriptstep_Information */
		Body: DevKit.Formmsdyn_productivityagentscriptstep_Information.Body;
		/** The Navigation of form msdyn_productivityagentscriptstep_Information */
		Navigation: DevKit.Formmsdyn_productivityagentscriptstep_Information.Navigation;
		/** The SidePanes of form msdyn_productivityagentscriptstep_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_productivityagentscriptstep_Information2 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Action type for agent script step */
			msdyn_actiontype: DevKit.Controls.OptionSet;
			/** Unique identifier for agent script associated with agent script step. */
			msdyn_agentscriptid: DevKit.Controls.Lookup;
			/** Description for agent script step */
			msdyn_description: DevKit.Controls.String;
			/** Unique identifier for macro associated with agent script step */
			msdyn_macroactionid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Display order */
			msdyn_order: DevKit.Controls.Integer;
			/** Unique identifier for target script associated with agent script step */
			msdyn_routeactionid: DevKit.Controls.Lookup;
			/** Instruction for text action type */
			msdyn_textinstruction: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_productivityagentscriptstep_Information2 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivityagentscriptstep_Information2 */
		Body: DevKit.Formmsdyn_productivityagentscriptstep_Information2.Body;
	}
	class msdyn_productivityagentscriptstepApi {
		/**
		* DynamicsCrm.DevKit msdyn_productivityagentscriptstepApi
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
		readonly ComponentState: OptionSet.msdyn_productivityagentscriptstep.ComponentState;
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
		/** Action type for agent script step */
		msdyn_actiontype: OptionSet.msdyn_productivityagentscriptstep.msdyn_actiontype;
		/** Unique identifier for agent script associated with agent script step. */
		msdyn_agentscriptid: string;
		/** Description for agent script step */
		msdyn_description: string;
		/** Unique identifier for macro associated with agent script step */
		msdyn_macroactionid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Display order */
		msdyn_order: number;
		/** Unique identifier for entity instances */
		msdyn_productivityagentscriptstepId: string;
		/** Unique identifier for target script associated with agent script step */
		msdyn_routeactionid: string;
		/** Instruction for text action type */
		msdyn_textinstruction: string;
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
		/** Status of the Agent script step */
		statecode: OptionSet.msdyn_productivityagentscriptstep.statecode;
		/** Reason for the status of the Agent script step */
		statuscode: OptionSet.msdyn_productivityagentscriptstep.statuscode;
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
			/** Action type for agent script step */
			readonly msdyn_actiontype: string;
			/** Unique identifier for agent script associated with agent script step. */
			readonly msdyn_agentscriptid: string;
			/** Description for agent script step */
			readonly msdyn_description: string;
			/** Unique identifier for macro associated with agent script step */
			readonly msdyn_macroactionid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Display order */
			readonly msdyn_order: string;
			/** Unique identifier for entity instances */
			readonly msdyn_productivityagentscriptstepId: string;
			/** Unique identifier for target script associated with agent script step */
			readonly msdyn_routeactionid: string;
			/** Instruction for text action type */
			readonly msdyn_textinstruction: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Agent script step */
			readonly statecode: string;
			/** Reason for the status of the Agent script step */
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
	namespace msdyn_productivityagentscriptstep {
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
		enum msdyn_actiontype {
			/** 192350001 */
			Macro,
			/** 192350002 */
			Script,
			/** 192350000 */
			Text
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