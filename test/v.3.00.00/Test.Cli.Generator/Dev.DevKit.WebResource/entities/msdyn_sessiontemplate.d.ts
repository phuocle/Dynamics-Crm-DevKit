//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sessiontemplate_Information {
		interface tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_Sections {
			_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_Agent_scripts_Sections {
			Agent_scripts_column_4_section_1: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B extends DevKit.Controls.ITab {
			Section: tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_Sections;
		}
		interface tab_Agent_scripts extends DevKit.Controls.ITab {
			Section: tab_Agent_scripts_Sections;
		}
		interface Tabs {
			_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B: tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B;
			Agent_scripts: tab_Agent_scripts;
		}
		interface Body {
			Tab: Tabs;
			msdyn_anchortab: DevKit.Controls.Lookup;
			/** Description of the session. */
			msdyn_description: DevKit.Controls.String;
			/** Unique value to enable or disable build expression */
			msdyn_enablebuildexpression: DevKit.Controls.Boolean;
			msdyn_entity: DevKit.Controls.String;
			/** Stores expression JSON */
			msdyn_expressiondata: DevKit.Controls.String;
			/** The name of the session. */
			msdyn_name: DevKit.Controls.String;
			msdyn_panelstate: DevKit.Controls.OptionSet;
			/** Title of the session. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AdditionalTabs: DevKit.Controls.Grid;
			Agentscripts: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_sessiontemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sessiontemplate_Information */
		Body: DevKit.Formmsdyn_sessiontemplate_Information.Body;
		/** The Process of form msdyn_sessiontemplate_Information */
		Process: DevKit.Formmsdyn_sessiontemplate_Information.Process;
		/** The Grid of form msdyn_sessiontemplate_Information */
		Grid: DevKit.Formmsdyn_sessiontemplate_Information.Grid;
		/** The SidePanes of form msdyn_sessiontemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sessiontemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_sessiontemplateApi
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
		readonly ComponentState: OptionSet.msdyn_sessiontemplate.ComponentState;
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
		msdyn_anchortab: string;
		/** Description of the session. */
		msdyn_description: string;
		/** Unique value to enable or disable build expression */
		msdyn_enablebuildexpression: boolean;
		msdyn_entity: string;
		/** Stores expression JSON */
		msdyn_expressiondata: string;
		/** The name of the session. */
		msdyn_name: string;
		msdyn_panelstate: OptionSet.msdyn_sessiontemplate.msdyn_panelstate;
		/** Unique identifier for entity instances */
		msdyn_sessiontemplateId: string;
		msdyn_sessiontype: OptionSet.msdyn_sessiontemplate.msdyn_sessiontype;
		/** Title of the session. */
		msdyn_title: string;
		msdyn_Type: boolean;
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
		/** Status of the Session Template */
		statecode: OptionSet.msdyn_sessiontemplate.statecode;
		/** Reason for the status of the Session Template */
		statuscode: OptionSet.msdyn_sessiontemplate.statuscode;
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
	namespace msdyn_sessiontemplate {
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
		enum msdyn_panelstate {
			/** 162450002 */
			Docked,
			/** 162450001 */
			Hidden,
			/** 162450000 */
			Minimized
		}
		enum msdyn_sessiontype {
			/** 1 */
			Entity,
			/** 0 */
			Generic
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