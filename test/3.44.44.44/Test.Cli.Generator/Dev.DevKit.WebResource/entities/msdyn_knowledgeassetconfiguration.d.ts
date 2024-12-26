//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledge_Asset_Configuration_main_form {
		interface tab_New_Tab_Sections {
			New_Section: DevKit.Controls.Section;
		}
		interface tab_New_Tab extends DevKit.Controls.ITab {
			Section: tab_New_Tab_Sections;
		}
		interface Tabs {
			New_Tab: tab_New_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Dataverse AI Plugin Operation */
			msdyn_aipluginoperationid: DevKit.Controls.Lookup;
			/** Dataverse Custom API */
			msdyn_customapiid: DevKit.Controls.Lookup;
			/** Provider Specific Configuration */
			msdyn_providerspecificconfiguration: DevKit.Controls.String;
			/** Data Source Provider Type */
			msdyn_providertype: DevKit.Controls.String;
			/** The name of the knowledge asset configuration. */
			name: DevKit.Controls.String;
			/** Status of the Knowledge asset configuration */
			statecode: DevKit.Controls.OptionSet;
			/** Unique Name for the knowledge configuration. */
			UniqueName: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormKnowledge_Asset_Configuration_main_form extends DevKit.IForm {
		/**
		* Knowledge Asset Configuration main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Asset_Configuration_main_form */
		Body: DevKit.FormKnowledge_Asset_Configuration_main_form.Body;
		/** The Navigation of form Knowledge_Asset_Configuration_main_form */
		Navigation: DevKit.FormKnowledge_Asset_Configuration_main_form.Navigation;
		/** The SidePanes of form Knowledge_Asset_Configuration_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_knowledgeassetconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_knowledgeassetconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_knowledgeassetconfiguration.ComponentState;
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
		/** Dataverse AI Plugin Operation */
		msdyn_aipluginoperationid: string;
		/** Dataverse Custom API */
		msdyn_customapiid: string;
		/** Unique identifier for a knowledge asset configuration */
		msdyn_knowledgeassetconfigurationId: string;
		/** Provider Specific Configuration */
		msdyn_providerspecificconfiguration: string;
		/** Data Source Provider Type */
		msdyn_providertype: string;
		/** The name of the knowledge asset configuration. */
		name: string;
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
		/** Status of the Knowledge asset configuration */
		statecode: OptionSet.msdyn_knowledgeassetconfiguration.statecode;
		/** Reason for the status of the Knowledge configuration. */
		statuscode: OptionSet.msdyn_knowledgeassetconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique Name for the knowledge configuration. */
		UniqueName: string;
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
			/** Dataverse AI Plugin Operation */
			readonly msdyn_aipluginoperationid: string;
			/** Dataverse Custom API */
			readonly msdyn_customapiid: string;
			/** Unique identifier for a knowledge asset configuration */
			readonly msdyn_knowledgeassetconfigurationId: string;
			/** Provider Specific Configuration */
			readonly msdyn_providerspecificconfiguration: string;
			/** Data Source Provider Type */
			readonly msdyn_providertype: string;
			/** The name of the knowledge asset configuration. */
			readonly name: string;
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
			/** Status of the Knowledge asset configuration */
			readonly statecode: string;
			/** Reason for the status of the Knowledge configuration. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique Name for the knowledge configuration. */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_knowledgeassetconfiguration {
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
			Draft,
			/** 1 */
			InProgress,
			/** 2 */
			Published
		}
		enum statuscode {
			/** 2 */
			Deleting,
			/** 0 */
			Draft,
			/** 3 */
			Published,
			/** 4 */
			PublishFailed,
			/** 1 */
			Publishing
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