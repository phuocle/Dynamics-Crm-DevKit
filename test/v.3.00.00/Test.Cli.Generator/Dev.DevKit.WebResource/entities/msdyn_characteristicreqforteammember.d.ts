//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_characteristicreqforteammember_Information {
		interface Tabs {
		}
		interface Body {
			/** Select the characteristic required. */
			msdyn_Characteristic: DevKit.Controls.Lookup;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the proficiency in this skill for this team member. */
			msdyn_ratingvalue: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_characteristicreqforteammember_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_characteristicreqforteammember_Information */
		Body: DevKit.Formmsdyn_characteristicreqforteammember_Information.Body;
		/** The Process of form msdyn_characteristicreqforteammember_Information */
		Process: DevKit.Formmsdyn_characteristicreqforteammember_Information.Process;
		/** The SidePanes of form msdyn_characteristicreqforteammember_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_characteristicreqforteammember_Quick_Create_Form {
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
			/** Select the characteristic required. */
			msdyn_Characteristic: DevKit.Controls.Lookup;
			/** Shows the proficiency in this skill for this team member. */
			msdyn_ratingvalue: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_characteristicreqforteammember_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick Create Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_characteristicreqforteammember_Quick_Create_Form */
		Body: DevKit.Formmsdyn_characteristicreqforteammember_Quick_Create_Form.Body;
	}
	class msdyn_characteristicreqforteammemberApi {
		/**
		* DynamicsCrm.DevKit msdyn_characteristicreqforteammemberApi
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
		/** Select the characteristic required. */
		msdyn_Characteristic: string;
		/** Unique identifier for entity instances */
		msdyn_characteristicreqforteammemberId: string;
		/** Shows the skill type of this team member. */
		msdyn_characteristictype: OptionSet.msdyn_characteristicreqforteammember.msdyn_characteristictype;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Shows the proficiency in this skill for this team member. */
		msdyn_ratingvalue: string;
		/** Unique identifier for Resource Requirement associated with Competency Requirement. */
		msdyn_resourcerequirementid: string;
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
		/** Status of the Characteristic requirement for team member */
		statecode: OptionSet.msdyn_characteristicreqforteammember.statecode;
		/** Reason for the status of the Characteristic requirement for team member */
		statuscode: OptionSet.msdyn_characteristicreqforteammember.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_characteristicreqforteammember {
		enum msdyn_characteristictype {
			/** 2 */
			Certification,
			/** 1 */
			Skill
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