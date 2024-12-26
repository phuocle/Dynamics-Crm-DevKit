//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_project_Information {
		interface Tabs {
		}
		interface Body {
			/** Description of the project. */
			msfp_description: DevKit.Controls.String;
			/** Name of the project. */
			msfp_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msfp_msfp_project_msfp_alert_project: DevKit.Controls.NavigationItem,
			msfp_msfp_project_msfp_alertrule_project: DevKit.Controls.NavigationItem,
			msfp_msfp_project_msfp_satisfactionmetric_project: DevKit.Controls.NavigationItem,
			msfp_msfp_project_msfp_survey_project: DevKit.Controls.NavigationItem
		}
	}
	class Formmsfp_project_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_project_Information */
		Body: DevKit.Formmsfp_project_Information.Body;
		/** The Navigation of form msfp_project_Information */
		Navigation: DevKit.Formmsfp_project_Information.Navigation;
		/** The SidePanes of form msfp_project_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_projectApi {
		/**
		* DynamicsCrm.DevKit msfp_projectApi
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
		/** User who created the project. */
		readonly CreatedBy: string;
		/** Date and time when the project was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** User who modified the project. */
		readonly ModifiedBy: string;
		/** Date and time when the project was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Stores Customer Insights configuration in JSON format. */
		msfp_customerinsightsconfiguration: string;
		/** Classification allows organization to protect data based on our policies and standards. */
		msfp_dataclassification: string;
		/** Description of the project. */
		msfp_description: string;
		/** Environment ID where project is stored. */
		msfp_environmentid: string;
		/** Environment region where project is stored. */
		msfp_environmentregion: string;
		/** Name of the project. */
		msfp_name: string;
		/** Permanent ID is auto-generated for a new project. For a copied project, the ID is carried over from the original project. */
		msfp_permanentID: string;
		/** Unique identifier for entity instances */
		msfp_projectId: string;
		/** Status of the project. */
		msfp_status: OptionSet.msfp_project.msfp_status;
		/** Project template ID. */
		msfp_templateid: string;
		/** Version number of the project template. */
		msfp_templateversion: string;
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
		/** Status of the Customer Voice project */
		statecode: OptionSet.msfp_project.statecode;
		/** Reason for the status of the Customer Voice project */
		statuscode: OptionSet.msfp_project.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** User who created the project. */
			readonly CreatedBy: string;
			/** Date and time when the project was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** User who modified the project. */
			readonly ModifiedBy: string;
			/** Date and time when the project was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Stores Customer Insights configuration in JSON format. */
			readonly msfp_customerinsightsconfiguration: string;
			/** Classification allows organization to protect data based on our policies and standards. */
			readonly msfp_dataclassification: string;
			/** Description of the project. */
			readonly msfp_description: string;
			/** Environment ID where project is stored. */
			readonly msfp_environmentid: string;
			/** Environment region where project is stored. */
			readonly msfp_environmentregion: string;
			/** Name of the project. */
			readonly msfp_name: string;
			/** Permanent ID is auto-generated for a new project. For a copied project, the ID is carried over from the original project. */
			readonly msfp_permanentID: string;
			/** Unique identifier for entity instances */
			readonly msfp_projectId: string;
			/** Status of the project. */
			readonly msfp_status: string;
			/** Project template ID. */
			readonly msfp_templateid: string;
			/** Version number of the project template. */
			readonly msfp_templateversion: string;
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
			/** Status of the Customer Voice project */
			readonly statecode: string;
			/** Reason for the status of the Customer Voice project */
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
	namespace msfp_project {
		enum msfp_status {
			/** 647390000 */
			Active,
			/** 647390001 */
			InActive
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