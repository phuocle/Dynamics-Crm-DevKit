//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_workflowstep_Information {
		interface tab__080D630E_8F55_4E0B_93F0_102387CD98B6_Sections {
			_4BE7B1CC_9622_4B8A_84C7_D492F17F3433: DevKit.Controls.Section;
		}
		interface tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1_Sections {
			_52123ABB_ABE5_4404_A906_B991B61DF58E: DevKit.Controls.Section;
		}
		interface tab__080D630E_8F55_4E0B_93F0_102387CD98B6 extends DevKit.Controls.ITab {
			Section: tab__080D630E_8F55_4E0B_93F0_102387CD98B6_Sections;
		}
		interface tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1 extends DevKit.Controls.ITab {
			Section: tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1_Sections;
		}
		interface Tabs {
			_080D630E_8F55_4E0B_93F0_102387CD98B6: tab__080D630E_8F55_4E0B_93F0_102387CD98B6;
			_D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1: tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Every Action can be mapped to a Workflow Step. Single Action can be mapped to multiple Workflow Steps. */
			uii_actionid: DevKit.Controls.Lookup;
			/** Description holds the information about the workflow step. */
			UII_Description: DevKit.Controls.String;
			/** Workflow Step shall be mapped to Hosted Application. */
			uii_hostedapplicationworkflowstepid: DevKit.Controls.Lookup;
			/** The name of the workflow step . */
			UII_name: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Workflow Step */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormUII_workflowstep_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_workflowstep_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_workflowstep_Information */
		Body: DevKit.FormUII_workflowstep_Information.Body;
		/** The Footer section of form UII_workflowstep_Information */
		Footer: DevKit.FormUII_workflowstep_Information.Footer;
		/** The SidePanes of form UII_workflowstep_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UII_workflowstepApi {
		/**
		* DynamicsCrm.DevKit UII_workflowstepApi
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
		/** Status of the UII Workflow Step */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UII Workflow Step */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Every Action can be mapped to a Workflow Step. Single Action can be mapped to multiple Workflow Steps. */
		uii_actionid: DevKit.WebApi.LookupValue;
		/** Description holds the information about the workflow step. */
		UII_Description: DevKit.WebApi.StringValue;
		/** Workflow Step shall be mapped to Hosted Application. */
		uii_hostedapplicationworkflowstepid: DevKit.WebApi.LookupValue;
		/** The name of the workflow step . */
		UII_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		UII_workflowstepId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UII_workflowstep {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}