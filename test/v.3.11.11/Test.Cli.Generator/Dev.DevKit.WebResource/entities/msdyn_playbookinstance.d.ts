//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_playbookinstance_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Playbook */
			statecode: DevKit.Controls.OptionSet;
			/** Playbook result */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections {
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_3: DevKit.Controls.Section;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_4: DevKit.Controls.Section;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_5: DevKit.Controls.Section;
			_547DCA32_5C99_4BF5_95D8_95AE479D4963: DevKit.Controls.Section;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98 extends DevKit.Controls.ITab {
			Section: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections;
		}
		interface Tabs {
			_0A307C03_96BD_41F7_8800_EBF2860AAA98: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the playbook was started. */
			CreatedOn: DevKit.Controls.DateTime;
			msdyn_activitiesassociated: DevKit.Controls.Integer;
			msdyn_activitiesclosed: DevKit.Controls.Integer;
			/** Select the playbook category for the playbook. */
			msdyn_categoryid: DevKit.Controls.Lookup;
			/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
			msdyn_estimatedclose: DevKit.Controls.Date;
			/** Type the name of the playbook. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the unique ID of the playbook template associated with the playbook. */
			msdyn_playbooktemplateid: DevKit.Controls.Lookup;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Shows the entity the playbook is launched for. */
			Regarding: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			PlaybookActivities: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_playbookinstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_playbookinstance_Information */
		Body: DevKit.Formmsdyn_playbookinstance_Information.Body;
		/** The Header section of form msdyn_playbookinstance_Information */
		Header: DevKit.Formmsdyn_playbookinstance_Information.Header;
		/** The Process of form msdyn_playbookinstance_Information */
		Process: DevKit.Formmsdyn_playbookinstance_Information.Process;
		/** The Grid of form msdyn_playbookinstance_Information */
		Grid: DevKit.Formmsdyn_playbookinstance_Information.Grid;
		/** The SidePanes of form msdyn_playbookinstance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_playbookinstanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_playbookinstanceApi
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
		/** Date and time when the playbook was started. */
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
		msdyn_activitiesassociated: number;
		msdyn_activitiesclosed: number;
		/** Select the playbook category for the playbook. */
		msdyn_categoryid: string;
		/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
		msdyn_estimatedclose_UtcDateOnly: Date;
		/** Internal Use Only */
		msdyn_evaluateactivityclosure: boolean;
		/** Type the name of the playbook. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_playbookinstanceId: string;
		/** Shows the unique ID of the playbook template associated with the playbook. */
		msdyn_playbooktemplateid: string;
		/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
		msdyn_trackprogress: boolean;
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
		/** Shows the entity the playbook is launched for. */
		regarding_account: string;
		/** Shows the entity the playbook is launched for. */
		regarding_contact: string;
		/** Shows the entity the playbook is launched for. */
		regarding_invoice: string;
		/** Shows the entity the playbook is launched for. */
		regarding_lead: string;
		/** Shows the entity the playbook is launched for. */
		regarding_opportunity: string;
		/** Shows the entity the playbook is launched for. */
		regarding_quote: string;
		/** Shows the entity the playbook is launched for. */
		regarding_salesorder: string;
		/** Status of the Playbook */
		statecode: OptionSet.msdyn_playbookinstance.statecode;
		/** Playbook result */
		statuscode: OptionSet.msdyn_playbookinstance.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the playbook was started. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_activitiesassociated: string;
			readonly msdyn_activitiesclosed: string;
			/** Select the playbook category for the playbook. */
			readonly msdyn_categoryid: string;
			/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
			readonly msdyn_estimatedclose_UtcDateOnly: string;
			/** Internal Use Only */
			readonly msdyn_evaluateactivityclosure: string;
			/** Type the name of the playbook. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_playbookinstanceId: string;
			/** Shows the unique ID of the playbook template associated with the playbook. */
			readonly msdyn_playbooktemplateid: string;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			readonly msdyn_trackprogress: string;
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
			/** Shows the entity the playbook is launched for. */
			readonly regarding_account: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_contact: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_invoice: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_lead: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_opportunity: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_quote: string;
			/** Shows the entity the playbook is launched for. */
			readonly regarding_salesorder: string;
			/** Status of the Playbook */
			readonly statecode: string;
			/** Playbook result */
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
	namespace msdyn_playbookinstance {
		enum OwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Completed
		}
		enum statuscode {
			/** 1 */
			In_Progress,
			/** 5 */
			Not_Required,
			/** 3 */
			Not_Successful,
			/** 6 */
			Not_Tracked,
			/** 4 */
			Partially_Successful,
			/** 2 */
			Successful
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}