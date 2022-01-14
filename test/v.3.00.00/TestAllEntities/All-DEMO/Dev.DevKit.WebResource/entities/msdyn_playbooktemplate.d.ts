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
		* DynamicsCrm.DevKit form msdyn_playbooktemplate_Information Main Form
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the unique ID of the playbook category associated with the playbook template. */
		msdyn_categoryid: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the playbook template. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
		msdyn_EstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Internal Use Only */
		msdyn_fullentitylist: DevKit.WebApi.StringValue;
		/** Type the name of the playbook template. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the unique ID of the playbook template. */
		msdyn_playbooktemplateId: DevKit.WebApi.GuidValue;
		/** Internal Use Only */
		msdyn_relatedentitylist: DevKit.WebApi.StringValue;
		/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
		msdyn_trackprogress: DevKit.WebApi.BooleanValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Playbook Template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Playbook Template */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_playbooktemplate {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}