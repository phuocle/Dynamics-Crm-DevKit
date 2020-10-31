//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_workflow_workflowstep_mapping_Information {
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections {
			_915420CA_99B8_47EA_BC0E_A10F42A59E41: DevKit.Form.Controls.ControlSection;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections {
			_DF2F3FC6_6A97_48E7_BD1A_6BD55B1B06CB: DevKit.Form.Controls.ControlSection;
		}
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880 extends DevKit.Form.Controls.IControlTab {
			Section: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD extends DevKit.Form.Controls.IControlTab {
			Section: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections;
		}
		interface Tabs {
			_7FC9CAC9_93A2_47AC_9B01_92E75A065880: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880;
			_A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Captures the Sequence number. */
			UII_sequence: DevKit.Form.Controls.ControlString;
			/** Workflow Mapping */
			uii_workflow_mappingid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
			uii_workflowstep_mappingid: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the UII Workflow-Step Mapping */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormUII_workflow_workflowstep_mapping_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_workflow_workflowstep_mapping_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_workflow_workflowstep_mapping_Information */
		Body: LuckyMokey.FormUII_workflow_workflowstep_mapping_Information.Body;
		/** The Footer section of form UII_workflow_workflowstep_mapping_Information */
		Footer: LuckyMokey.FormUII_workflow_workflowstep_mapping_Information.Footer;
	}
	class UII_workflow_workflowstep_mappingApi {
		/**
		* DynamicsCrm.DevKit UII_workflow_workflowstep_mappingApi
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
		/** Status of the UII Workflow-Step Mapping */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UII Workflow-Step Mapping */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Captures the Sequence number. */
		UII_sequence: DevKit.WebApi.StringValue;
		/** Workflow Mapping */
		uii_workflow_mappingid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		UII_workflow_workflowstep_mappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
		uii_workflowstep_mappingid: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UII_workflow_workflowstep_mapping {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}