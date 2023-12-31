//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_playbooktemplate_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Publisher Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Playbook Template */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections {
			_30B01E30_AE8E_4D6D_ACA8_95CFBB42C003: DevKit.Controls.Section;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_3: DevKit.Controls.Section;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_Monitoring_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461 extends DevKit.Controls.ITab {
			Section: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections;
		}
		interface tab_Monitoring extends DevKit.Controls.ITab {
			Section: tab_Monitoring_Sections;
		}
		interface Tabs {
			_3A0EE21B_6FBD_455F_913E_A42FE8978461: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461;
			Monitoring: tab_Monitoring;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the unique ID of the playbook category associated with the playbook template. */
			msdyn_categoryid: DevKit.Controls.Lookup;
			/** Type additional information to describe the playbook template. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Type the name of the playbook template. */
			msdyn_name: DevKit.Controls.String;
			/** Internal Use Only */
			msdyn_relatedentitylist: DevKit.Controls.String;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AssociatedPlaybooks: DevKit.Controls.Grid;
			PlaybookActivities: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_playbooktemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_playbooktemplate_Information */
		Body: DevKit.Formmsdyn_playbooktemplate_Information.Body;
		/** The Header section of form msdyn_playbooktemplate_Information */
		Header: DevKit.Formmsdyn_playbooktemplate_Information.Header;
		/** The Process of form msdyn_playbooktemplate_Information */
		Process: DevKit.Formmsdyn_playbooktemplate_Information.Process;
		/** The Grid of form msdyn_playbooktemplate_Information */
		Grid: DevKit.Formmsdyn_playbooktemplate_Information.Grid;
		/** The SidePanes of form msdyn_playbooktemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_playbooktemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_playbooktemplateApi
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
		/** Shows the unique ID of the playbook category associated with the playbook template. */
		msdyn_categoryid: string;
		/** Type additional information to describe the playbook template. */
		msdyn_Description: string;
		/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
		msdyn_EstimatedDuration: number;
		/** Internal Use Only */
		msdyn_fullentitylist: string;
		/** Type the name of the playbook template. */
		msdyn_name: string;
		/** Shows the unique ID of the playbook template. */
		msdyn_playbooktemplateId: string;
		/** Internal Use Only */
		msdyn_relatedentitylist: string;
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
		/** Status of the Playbook Template */
		statecode: OptionSet.msdyn_playbooktemplate.statecode;
		/** Reason for the status of the Playbook Template */
		statuscode: OptionSet.msdyn_playbooktemplate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
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
			/** Shows the unique ID of the playbook category associated with the playbook template. */
			readonly msdyn_categoryid: string;
			/** Type additional information to describe the playbook template. */
			readonly msdyn_Description: string;
			/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
			readonly msdyn_EstimatedDuration: string;
			/** Internal Use Only */
			readonly msdyn_fullentitylist: string;
			/** Type the name of the playbook template. */
			readonly msdyn_name: string;
			/** Shows the unique ID of the playbook template. */
			readonly msdyn_playbooktemplateId: string;
			/** Internal Use Only */
			readonly msdyn_relatedentitylist: string;
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
			/** Status of the Playbook Template */
			readonly statecode: string;
			/** Reason for the status of the Playbook Template */
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
	namespace msdyn_playbooktemplate {
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			Published
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