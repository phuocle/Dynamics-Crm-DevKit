//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_workflow_workflowstep_mapping_Information {
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections {
			_915420CA_99B8_47EA_BC0E_A10F42A59E41: DevKit.Controls.Section;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections {
			_DF2F3FC6_6A97_48E7_BD1A_6BD55B1B06CB: DevKit.Controls.Section;
		}
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880 extends DevKit.Controls.ITab {
			Section: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD extends DevKit.Controls.ITab {
			Section: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections;
		}
		interface Tabs {
			_7FC9CAC9_93A2_47AC_9B01_92E75A065880: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880;
			_A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Captures the Sequence number. */
			UII_sequence: DevKit.Controls.String;
			/** Workflow Mapping */
			uii_workflow_mappingid: DevKit.Controls.Lookup;
			/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
			uii_workflowstep_mappingid: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Workflow-Step Mapping */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormUII_workflow_workflowstep_mapping_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_workflow_workflowstep_mapping_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_workflow_workflowstep_mapping_Information */
		Body: DevKit.FormUII_workflow_workflowstep_mapping_Information.Body;
		/** The Footer section of form UII_workflow_workflowstep_mapping_Information */
		Footer: DevKit.FormUII_workflow_workflowstep_mapping_Information.Footer;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}